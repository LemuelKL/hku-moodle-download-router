let courseTitle = 'moodle.hku.hk'

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
                        courseTitle = response.courseTitle ?? 'moodle.hku.hk'
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
    const suggestedFilename = `${courseTitle}/${donwloadItem.filename}`
    console.log(suggestedFilename)
    suggest({
        filename: suggestedFilename,
    })
})
