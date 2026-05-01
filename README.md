# Oryzo Local Setup

This repository is a mirrored static website.  
The actual runnable app is in `oryzo.ai/`.

## Structured layout

- `oryzo.ai/` - main website files (open this as site root)
- `_DataURI/` - extracted data URI assets from the mirror
- `*.com/` folders - mirrored third-party host snapshots from site capture
- `.vscode/settings.json` - Live Server configuration for correct root

## Run the project

### Option 1 (recommended): Live Server in Cursor/VS Code
1. Open this folder in Cursor.
2. Right click `oryzo.ai/index.html`.
3. Click **Open with Live Server**.

Because `.vscode/settings.json` is set, Live Server serves from `oryzo.ai` root so assets like `/_astro/...` and `/images/...` resolve correctly.

### Option 2: direct local static server
Serve `oryzo.ai` as web root using any static server (Python, Node, etc.).

