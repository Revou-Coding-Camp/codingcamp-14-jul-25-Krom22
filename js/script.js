// Show welcome popup when the page loads
showWelcomePopup();

// Function to show a welcome popup and set the user's name
function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    // If the user clicks "Cancel", userName will be null
    if (userName != '') {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}

function validateForm() {
    const nameInput = document.getElementById('name-input');

    if (nameInput.value === '') {
        alert('Please enter your name.');
    } else {
        document.getElementById('message-output').innerHTML = `Thank you, ${nameInput.value}, for your message!`;
        nameInput.value = ''; // Clear the input field after submission
    }
}

// JavaScript to handle form submission and display results
document.addEventListener('DOMContentLoaded', function() {

  const form = document.getElementById('formInput');
  const hasilNama = document.getElementById('hasilNama');
  const hasilPesan = document.getElementById('hasilPesan');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the values from the input fields
    const nama = document.getElementById('name').value.trim();
    const pesan = document.getElementById('pesan').value.trim();

    // Display the results in the result layout
    hasilNama.textContent = 'Name: ' + (nama || '-');
    hasilPesan.textContent = 'Message: ' + (pesan || '-');
    
    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('pesan').value = '';
    form.reset();
  });
});
