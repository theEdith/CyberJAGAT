async function checkEmailBreached(email) {
    try {
        const response = await fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(email)}`, {
            headers: {
                'User-Agent': 'MyApp/1.0' // Replace 'MyApp/1.0' with your app's name and version
            }
        });

        if (response.ok) {
            return true; // Email has been breached
        } else if (response.status === 404) {
            return false; // Email has not been breached
        } else {
            throw new Error('Failed to check email breach status');
        }
    } catch (error) {
        console.error('Error checking email breach:', error);
        return false; // Error occurred, assume email has not been breached
    }
}

const checkBtn = document.getElementById('checkEmailBtn');
const userEmail = document.getElementById('userEmailInput').value; // Assuming you have an input field with id 'userEmailInput'
// const breachContainer = document.getElementsByClassName('breachResultContainer');
const resultPara = document.querySelector('.resultPara');
// const breachedPara = document.getElementsByClassName('breachedPara');
checkBtn.addEventListener('click', () => {
    console.log('working')
    checkEmailBreached(userEmail)
    .then(isBreached => {
        if (isBreached) {
            resultPara.innerText = "Bad news";
            // resultPara.classlist.add('.active');
            console.log('Email has been breached');

            // Handle breached email case
        } else {
            console.log('Email has not been breached');
            resultPara.innerText = "Good news";
            // resultPara.classlist.add('.active');
            // Handle non-breached email case
        }
    })
    .catch(error => {
        console.error('Error checking email breach:', error);
        // Handle error case
    });
});
// const userEmail = 'karanpathak.cse24@jecrc.ac.in';



    // checkEmailBreached();
