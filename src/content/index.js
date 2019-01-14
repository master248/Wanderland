// This code gets injected automatically into every page you go onto in Google Chrome.
import {
    getUniqueLocationsFromCurrentPage
} from './api'
import findAndReplaceDOMText from 'findandreplacedomtext'
import {
    initializeTooltip
} from './tooltip'

function activatePage() {
    return getUniqueLocationsFromCurrentPage().then(
        results => {
            if (results.length != 0) {
                results.forEach(result => {
                    var linkClass = result.spot.replace(" ", "_") + "_tooltip";
                    findAndReplaceDOMText(document.body, {
                        find: result.spot,
                        replace: 'spam' + result.spot,
                        wrap: 'a',
                        wrapClass: linkClass
                    });
                    initializeTooltip({
                        search: result.spot,
                        link: result.lod.wikipedia,
                        image: result.image.thumbnail,
                        summary: result.abstract
                    }, linkClass);
                });
            } else {
                alert("Sorry we couldn't find any results for this page.");
            }
        },
        error => {
            alert("Error! " + error);
        }
    );
}

// ***************** EXECUTE THIS ON PAGE LOAD ***************** //
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // add a results box to the top of the page
    // add an event listener to wait for a button press of the
    // activate button in the extension.js code.
    if (request.message == "ACTIVATE") {
        activatePage().then(
            () => sendResponse({
                message: "SUCCESS"
            }),
            () => sendResponse({
                message: "FAILED"
            })
        );
    }
    return true;
});