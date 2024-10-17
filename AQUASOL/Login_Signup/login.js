let selectedRole = '';

function selectRole(role) {
    selectedRole = role;
    const roleMessage = document.getElementById('role-message');
    
    if (role === 'student') {
        roleMessage.textContent = 'You have selected Student. Please enter your credentials.';
    } else if (role === 'teacher') {
        roleMessage.textContent = 'You have selected Teacher. Please enter your credentials.';
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (!selectedRole) {
        document.getElementById('role-message').textContent = 'Please select a role.';
        return;
    }
    
    const loginId = document.getElementById('loginId').value;
    const password = document.getElementById('password').value;
    
    // Handle login validation here
    console.log('Role:', selectedRole);
    console.log('Login ID:', loginId);
    console.log('Password:', password);
    
    // Redirect to main page or handle login logic here
});

function signUp() {
    // alert('Redirecting to the sign-up page!');
    // Implement redirection logic here
}