js
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;

    // Basic validation (optional)
    if (!name || !email || !age || !address) {
        alert('Please fill in all fields.');
        return;
    }

    // Display success message
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Registration Successful for ${name}!`;
    messageDiv.style.color = 'green';

    // Optionally, clear the form
    document.getElementById('studentForm').reset();
});
