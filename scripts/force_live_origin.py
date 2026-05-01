import re
from pathlib import Path

index_path = Path("D:/vinu/Cloning/oryzo.ai/index.html")
content = index_path.read_text(encoding="utf-8", errors="ignore")

# Route root-relative links to the real site for exact visual/runtime parity.
for attr in ("src", "href", "srcset", "poster"):
    pattern = rf'({attr}\s*=\s*["\'])/(?!/)([^"\']*)(["\'])'
    content = re.sub(pattern, rf"\1https://oryzo.ai/\2\3", content, flags=re.IGNORECASE)

content = content.replace('<base href="/">', '<base href="https://oryzo.ai/">')
index_path.write_text(content, encoding="utf-8")
print("Patched oryzo.ai/index.html to use live origin assets.")
