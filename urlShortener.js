// urlShortener.js

// Function to handle refreshing the page
function refreshPage() {
    window.location.reload();
}

// Event listener for the Refresh button
document.getElementById('reload-btn').addEventListener('click', function() {
    refreshPage();
});

// Function to shorten the URL
function shortenUrl(longUrl) {
    // In a real-world scenario, you would make a request to your backend to shorten the URL.
    // For this example, we'll just generate a random short key.
    const shortKey = generateShortKey();

    // Replace 'yourdomain.com' with your actual domain name
    const domain = 'yourdomain.com';

    // Display the shortened URL in the textarea
    const shortenedUrl = 'http://' + domain + '/' + shortKey;
    document.getElementById('shortUrl').value = shortenedUrl;

    // Add event listener to the shortened URL textarea
    document.getElementById('shortUrl').addEventListener('click', function() {
        window.location.href = longUrl;
    });
}

// Function to generate a short key resembling a file path with single letters
function generateShortKey() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let shortKey = '';
    for (let i = 0; i < 3; i++) {
        shortKey += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        if (i < 2) {
            shortKey += '/';
        }
    }
    return shortKey;
}

// Event listener for the Shorten URL button
document.getElementById('short-btn').addEventListener('click', function() {
    const longUrl = document.getElementById('longUrl').value;
    if (longUrl) {
        shortenUrl(longUrl);
    } else {
        alert('Please enter a URL to shorten.');
    }
});
