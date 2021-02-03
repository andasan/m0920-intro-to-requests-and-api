const button = document.querySelector('button');

button.addEventListener('click', async () => {
    const option = { headers: { 'Accept': 'application/json' } };
    const response = await axios.get('https://icanhazdadjoke.com', option);
    const joke = document.createElement('li');
    joke.innerText = response.data.joke;
    document.querySelector('ul').appendChild(joke);
})