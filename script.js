//we get our elements
const form = document.getElementById('buddychat');
form.addEventListener('submit', (e) => {
e.preventDefault();
//took out a brace and parenth
const userinput = document.getElementById('buddybox').value;
const response = fetch('/api/chat', {
method: 'POST',
headers: {'Content-Type': 'application/json'}, //'Accept': 'application/json'},
body: JSON.stringify({userinput})
});
const data = JSON.stringify(response); 
const buddyresponse = document.getElementById('buddyresponse');
buddyresponse.addEventListener('change', (event) => {
buddyresponse.innerText = data;
console.log('is the transmission successful', data);
});
});
window.addEventListener('load', (event) => {
console.log(event);
});
window.addEventListener('change', (event) => {
console.log(event);
});
