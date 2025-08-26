document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');  // ID matches
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stops page reload

        // Show success message
        successMessage.style.display = 'block';

        // Clear form fields
        form.reset();

        // Hide after 3 sec (optional)
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    });
});
