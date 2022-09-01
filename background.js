let courseCode = 'moodle.hku.hk'

function updateCourseCode(tabId, changeInfo, tab) {
    if (
        !tab.url.includes('://moodle.hku.hk') ||
        changeInfo.status !== 'complete'
    )
        return
    if (tab.url.includes('/course/view.php?id=')) {
        courseCode = tab.title.split(' ')[1]
    } else if (tab.url.includes('/mod/folder/view.php?id=')) {
        courseCode = tab.title.split('_')[0]
    }
}

chrome.tabs.onUpdated.addListener(updateCourseCode)

chrome.downloads.onDeterminingFilename.addListener(function (
    donwloadItem,
    suggest
) {
    const suggestedFilename = `${courseCode}/${donwloadItem.filename}`
    console.log(suggestedFilename)
    suggest({
        filename: suggestedFilename,
    })
})
