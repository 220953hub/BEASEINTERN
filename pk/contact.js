document.getElementById('suggestionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const suggestion = document.getElementById('suggestion').value;

    document.getElementById('responseMessage').innerText = `Thank you, ${name}! Your suggestion has been received.`;

    document.getElementById('suggestionForm').reset();
});
