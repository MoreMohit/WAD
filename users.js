// JavaScript for User Registration
$(document).ready(function () {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    $('#registerForm').submit(function (event) {
        event.preventDefault();

        let userData = {
            name: $('#name').val().trim(),
            email: $('#email').val().trim(),
            password: $('#password').val().trim() // Store securely in a real app!
        };

        if (!userData.name || !userData.email || !userData.password) {
            alert('Please fill in all fields.');
            return;
        }

        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));

        // OPTIONAL: Mock AJAX POST request (Comment this out if no backend)
        /*
        $.ajax({
            url: 'https://your-backend-api.com/register', // Replace with actual API endpoint
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(userData),
            success: function (response) {
                alert('User registered successfully!');
                window.location.href = 'user_list.html'; // Redirect to user list page
            },
            error: function (error) {
                console.error('Error:', error);
                alert('Registration failed!');
            }
        });
        */

        alert('User registered successfully!');
        window.location.href = 'user_list.html'; // Redirect to the user list page
    });

    // JavaScript for Displaying User List in user_list.html
    if ($('#userList').length > 0) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let userList = $('#userList');

        if (users.length === 0) {
            userList.append('<tr><td colspan="2">No users registered yet.</td></tr>');
        } else {
            users.forEach(user => {
                userList.append(`<tr><td>${user.name}</td><td>${user.email}</td></tr>`);
            });
        }
    }
});
