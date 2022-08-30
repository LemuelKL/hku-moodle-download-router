# HKU Moodle Download Router
Designed by a HKU student for the HKU Moodle, a chromium extension that automatically changes the downlaod location based on the current Moodle course page.  

With this extension, the course code e.g. `ENGG1330` is fetched from the DOM and set as the suggest directory under the download folder set in your web browser. 

The end result is a beautifully organized download folder:

```
Downloads/
├─ ENGG1330/
├─ ENGG1340/
├─ COMP2119/
├─ COMP2121/
├─ COMP2396/
```

Additionally, it is recommended to further set up symbolic links for the folders. This is especially useful say for those who already have their course folders on Onedrive. 
