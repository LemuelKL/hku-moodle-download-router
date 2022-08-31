;(() => {
    chrome.runtime.onMessage.addListener(function (
        request,
        sender,
        sendResponse
    ) {
        if (request.action === 'getCourseTitle') {
            const courseTitleEl =
                document.getElementsByClassName('course-title')[0]

            const courseTitle = courseTitleEl
                ? courseTitleEl.innerText.split(' ')[0]
                : undefined

            sendResponse({ courseTitle })
        }
        return true
    })
})()
