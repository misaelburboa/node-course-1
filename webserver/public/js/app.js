const formEl = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    messageOne.textContent = 'loading...';
    messageTwo.textContent = '';

    const location = search.value;
    fetch('http://localhost:3000/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast.summary + " "+data.forecast.temperature+" "+data.forecast.precipProbability;
            }
        });
    });
});

