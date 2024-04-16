function deleteEntries(count) {
  if (count > 0) {
    $('.edit-review-button').click();
    $('#diary-entry-delete-button').click();
    $('.modal-ok').click();

    // Add a short delay to avoid overwhelming the website
    setTimeout(function() {
      deleteEntries(count - 1);
    }, 1000); // Adjust delay (in milliseconds) as needed
  }
}

// Set the number of entries to delete
const entriesToDelete = 100; // Change this to your desired number

// Start the deletion process
deleteEntries(entriesToDelete);
