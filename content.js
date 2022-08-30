;(() => {
    chrome.runtime.onMessage.addListener(function (
        request,
        sender,
        sendResponse
    ) {
        if (request.action === 'getCourseTitle') {
            const courseTitleEl =
                document.getElementsByClassName('course-title')[0]

            if (!courseTitleEl) {
                sendResponse({ courseTitle: 'Does not exist.' })
            } else {
                const courseTitle = courseTitleEl.innerText.split(' ')[0]
                sendResponse({ courseTitle: courseTitle })
            }
        }
        return true
    })
})()
