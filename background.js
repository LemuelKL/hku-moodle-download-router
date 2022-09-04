let courseCode = ''

function updateCourseCode(tabId, changeInfo, tab) {
    const url = new URL(tab.url)
    if (changeInfo.status !== 'complete') return

    if (!url.hostname === 'moodle.hku.hk') {
        courseCode = ''
        return
    }

    const pathname = url.pathname

    if (pathname === '/course/view.php') {
        courseCode = tab.title.split(' ')[1]
    } else if (
        pathname === '/mod/folder/view.php' ||
        pathname === '/mod/assign/view.php' ||
        pathname === '/mod/forum/discuss.php'
    ) {
        courseCode = tab.title.split('_')[0]
    } else {
        courseCode = 'moodle.hku.hk'
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
