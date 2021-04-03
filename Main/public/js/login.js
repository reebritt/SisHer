console.log("hello")

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#inputEmail4').value.trim();
  const password = document.querySelector('#inputPassword4').value.trim();
  console.log(email)
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the groups page
      document.location.replace('/groups');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  
  const firstName = document.querySelector('#inputfirstName4').value.trim();
  const lastName = document.querySelector('#inputlastName4').value.trim();
  const activity = document.querySelector('#inputActivity').value.trim();
  const email = document.querySelector('#inputEmail4').value.trim();
  const password = document.querySelector('#inputPassword4').value.trim();
 console.log(firstName, activity);
  if (firstName && lastName && activity && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, activity, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};
if (document.querySelector('.signup')){
  document
  .querySelector('.signup')
  .addEventListener('submit', signupFormHandler);
}

if (document.querySelector('.login')){
  document
  .querySelector('.login')
  .addEventListener('click', loginFormHandler);
  
}

