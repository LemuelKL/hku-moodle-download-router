# HKU Moodle Download Router
Designed by a HKU student for the HKU Moodle, a chromium extension that automatically changes the download location based on the current Moodle course page.  

With this extension, the course code e.g. `ENGG1330` is fetched from the DOM and set as the `suggest` directory under the default download folder set in your web browser. 

The end result is a beautifully organized download folder:

```
Downloads/
├─ ENGG1330/
├─ ENGG1340/
├─ COMP2119/
├─ COMP2121/
├─ COMP2396/
```

To go the extra mile, one may set up symbolic links. This is especially useful say for those who already have their course folders on Onedrive. 

## Installation
1. Clone this repository.
2. Enable Developer Mode in your web browser.
3. Load this repo via "Load Unpacked Extension".

## Usage
Initiate a download on a supported page with the extension running.

Note that sometimes Moodle items are "diguised" as downloadable files but are actually just a hyperlink to `https://moodle.hku.hk/mod/resource/view.php?id=xxxxxxx`. In such case, right click and "Save link as". The key is to make sure the browser tab is on a supported page at the moment the download action is triggered.

## Supported Pages
```js
pathname === '/course/view.php' ||
pathname === '/mod/folder/view.php' ||
pathname === '/mod/assign/view.php' ||
pathname === '/mod/forum/discuss.php'
```

If you encounter another Moodle module that you think is frequently used by HKU but not supported, feel free to open a pull request.
