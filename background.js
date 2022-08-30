let courseTitle = ''

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (
        tab.url.includes('moodle.hku.hk/course/view.php?id=') &&
        changeInfo.status === 'complete'
    ) {
        chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        action: 'getCourseTitle',
                    },
                    function (response) {
                        courseTitle = response.courseTitle
                    }
                )
            }
        )
    }
})

chrome.downloads.onDeterminingFilename.addListener(function (
    donwloadItem,
    suggest
) {
    suggest({
        filename: `${courseTitle}/${donwloadItem.filename}`,
    })
})
