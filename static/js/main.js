// Core functionality for the website
$(document).ready(function() {
    // Initialize any necessary functionality
});
// Additional functionality for background carousel and other features
$(document).ready(function() {
    // Initialize carousel if present
    if ($('.carousel').length) {
        $('.carousel').each(function() {
            // Basic carousel functionality
            $(this).find('.carousel-item:first').addClass('active');
        });
    }
});
