// ==UserScript==
// @name        AutoDeleteLetterboxdEntries
// @version     1.0
// @description  Automatically deletes Letterboxd diary entries (use with caution)
// @author      You
// @match        https://letterboxd.com/neptune663/films/diary/*
// @grant       none
// ==/UserScript==

$(document).ready(function() {
  const handleModal = function(mutations) {
    for (let mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        const modal = mutation.addedNodes[0];
        if (modal.classList.contains('reveal-modal')) {
          // Click the confirmation button within the modal
          modal.querySelector('.modal-ok').click();
        } else {
          // Optional error handling (comment out if not needed)
          // console.error("Expected modal element not found.");
        }
      }
    }
  };

  const observer = new MutationObserver(handleModal);
  observer.observe(document.querySelector('.diary'), { childList: true });

  // Trigger the deletion process by clicking the first edit button
  $('.edit-review-button').click();
});

