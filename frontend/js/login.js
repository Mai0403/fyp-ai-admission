document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:5001/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    const messageDiv = document.getElementById('message');
    
    if (response.ok && result.success) {
      messageDiv.textContent = "Login successful!";
      messageDiv.classList.remove('text-red-500');
      messageDiv.classList.add('text-green-500');

      // Redirect to home.html after successful login
      window.location.href = 'home.html';
    } else {
      messageDiv.textContent = result.message;
    }
  });