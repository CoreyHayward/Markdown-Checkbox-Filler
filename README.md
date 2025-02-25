# Markdown Checkbox Filler Chrome Extension

A simple Chrome extension that enables a right-click menu item **"Fill Markdown Checkboxes"** to automatically check all markdown checkboxes (`- [ ]`) within an input field, such as those found in GitHub Pull Request templates.

## Features
- Adds a right-click context menu option: **"Fill Markdown Checkboxes"**
- Automatically fills all markdown checkboxes (`- [ ]`) with `- [x]`
- Works on text areas and input fields containing markdown

## Installation
1. Download the [latest release](https://github.com/CoreyHayward/Markdown-Checkbox-Filler/releases/).
2. Unzip the file
3. Open **chrome://extensions/** in your browser.
4. Enable **Developer mode**.
5. Click **Load unpacked** and select the extension folder.
6. The extension is now installed and ready to use.

## Usage
1. Right-click within a text area containing markdown checkboxes.
2. Select **"Fill Markdown Checkboxes"** from the context menu.
3. All empty checkboxes (`- [ ]`) will be filled (`- [x]`).

https://github.com/user-attachments/assets/fba5df95-5b4d-409e-a186-7326c051cfaa

## Permissions
- This extension requires permission to access the active tab to modify text fields.
- `"contextMenus", "activeTab", "scripting"`

## License
This project is licensed under the MIT License.

## Contributions
Feel free to open issues or submit pull requests for improvements!
