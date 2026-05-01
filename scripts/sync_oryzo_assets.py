import re
from collections import deque
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import Request, urlopen

BASE_URL = "https://oryzo.ai"
DEST_ROOT = Path("D:/vinu/Cloning/oryzo.ai")

TEXT_EXTENSIONS = {
    ".html",
    ".htm",
    ".css",
    ".js",
    ".json",
    ".map",
    ".txt",
    ".webmanifest",
    ".svg",
    ".xml",
}

ASSET_EXTENSIONS = {
    ".css",
    ".js",
    ".json",
    ".map",
    ".txt",
    ".webmanifest",
    ".svg",
    ".ico",
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".avif",
    ".mp4",
    ".webm",
    ".wasm",
    ".pdf",
    ".obj",
    ".woff",
    ".woff2",
    ".ttf",
    ".otf",
}


def normalize_path(raw: str) -> str | None:
    raw = raw.strip().strip("'\"")
    if not raw:
        return None
    if raw.startswith(("data:", "blob:", "mailto:", "tel:", "javascript:")):
        return None
    if raw.startswith("//"):
        return None

    if raw.startswith("http://") or raw.startswith("https://"):
        parsed = urlparse(raw)
        if parsed.netloc != "oryzo.ai":
            return None
        path = parsed.path or "/"
    else:
        if not raw.startswith("/"):
            return None
        path = raw

    if path == "/":
        return "/index.html"
    if path.endswith("/"):
        path = path + "index.html"
    return path


def extract_paths(content: str) -> set[str]:
    found = set()

    for m in re.finditer(r"""(?:src|href)=["']([^"']+)["']""", content, re.IGNORECASE):
        p = normalize_path(m.group(1))
        if p:
            found.add(p)

    for m in re.finditer(r"""url\(([^)]+)\)""", content, re.IGNORECASE):
        p = normalize_path(m.group(1))
        if p:
            found.add(p)

    for m in re.finditer(
        r"""["'](/[^"'?#]+\.[a-zA-Z0-9]{2,8})(?:\?[^"']*)?["']""",
        content,
    ):
        p = normalize_path(m.group(1))
        if p:
            found.add(p)

    # Handle gallery files encoded as data-file="name.webp|mp4" in HTML.
    for m in re.finditer(r"""data-file=["']([^"']+)["']""", content, re.IGNORECASE):
        filename = m.group(1).strip()
        if filename and not filename.startswith("/"):
            found.add(f"/images/wearable-gallery/{filename}")

    return found


def should_parse_text(path: str) -> bool:
    ext = Path(path).suffix.lower()
    return ext in TEXT_EXTENSIONS


def should_download(path: str) -> bool:
    ext = Path(path).suffix.lower()
    if ext in ASSET_EXTENSIONS:
        return True
    return path.endswith(".html")


def download(path: str) -> bytes | None:
    url = BASE_URL + path
    req = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urlopen(req, timeout=30) as resp:
            return resp.read()
    except Exception as exc:
        print(f"[skip] {path} -> {exc}")
        return None


def write_file(path: str, data: bytes) -> None:
    local_path = DEST_ROOT / path.lstrip("/")
    local_path.parent.mkdir(parents=True, exist_ok=True)
    local_path.write_bytes(data)


def main() -> None:
    DEST_ROOT.mkdir(parents=True, exist_ok=True)
    queue = deque(["/index.html"])
    seen = set()
    downloaded = 0

    while queue:
        path = queue.popleft()
        if path in seen:
            continue
        seen.add(path)

        if not should_download(path):
            continue

        data = download(path)
        if data is None:
            continue

        write_file(path, data)
        downloaded += 1
        print(f"[ok] {path}")

        if should_parse_text(path):
            try:
                text = data.decode("utf-8", errors="ignore")
            except Exception:
                continue
            for p in extract_paths(text):
                if p not in seen:
                    queue.append(p)

    print(f"Downloaded files: {downloaded}")


if __name__ == "__main__":
    main()
