function bookmarkCreated(id, bookmarkInfo) {
    console.log(`Bookmark ID: ${id}`);
    console.log(`Bookmark URL: ${bookmarkInfo.url}`);
    currentURL = bookmarkInfo.url;
    // https://www.w3schools.com/js/js_regexp.asp
    var strippedURL = currentURL.replace(/\?utm_source=.*/, "");
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/update
    var newURL = browser.bookmarks.update(id, {
        url: strippedURL
    });
}

// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onCreated
browser.bookmarks.onCreated.addListener(bookmarkCreated)
