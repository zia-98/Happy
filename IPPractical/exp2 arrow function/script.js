// JavaScript to handle form validation and submission
        document.getElementById('webForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const gender = document.querySelector('input[name="gender"]:checked');
            const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
            const comments = document.getElementById('comments').value;

            // Check if gender is selected
            if (!gender) {
                alert('Please select your gender.');
                return;
            }

            // Collect selected hobbies
            let hobbiesArray = [];
            hobbies.forEach(hobby => {
                hobbiesArray.push(hobby.value);
            });

            // Check if at least one hobby is selected
            if (hobbiesArray.length === 0) {
                alert('Please select at least one hobby.');
                return;
            }

            // Show an alert with the form data
            alert(`
                Name: ${name}
                Email: ${email}
                Password: ${password}
                Gender: ${gender.value}
                Hobbies: ${hobbiesArray.join(', ')}
                Comments: ${comments}
            `);
        });