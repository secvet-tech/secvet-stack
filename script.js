//we get our elements
const form = document.getElementById('buddychat');
form.addEventListener('submit', (e) => {
e.preventDefault();
const userinput = document.getElementById('buddybox').value;
const response = fetch('/api/chat', {
method: 'POST',
headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
body: JSON.stringify({userinput})
});
//.then(data = response.json())
//.then(document.getElementById('buddyresponse')).textContent= data.message;
const data = JSON.stringify({response}); 
const buddyresponse = document.getElementById('buddyresponse');
buddyresponse.innerText = data;
console.log('is the transmission successful', data);
});
window.addEventListener('load', (event) => {
console.log(event);
});
