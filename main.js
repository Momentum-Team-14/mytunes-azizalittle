console.log('JS is here boo!');

let input = document.createElement('input');
input.type = 'text';
input.className = 'css-class-name';
container.appendChild(input);


let searchUrl = 'https://itunes.apple.com/search?term=isaiah%2Brashad&entity=musicTrack'

fetch(searchUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})
//response is whatever the fetch returns
.then(function (response) {
    return response.json()
})
// data is whatever the above code returns, in this case response.json()
.then(function (data) {
    console.log(data.data)
})




let resultsDiv = document.querySelector('#results');
console.log('results div', resultsDiv);

function showResults(resultsArray) {
    console.log(results);
    for (let result of resultsArray){
        let resultDiv = document.createElement('div');
        resultDiv.classList.add('result');

        let imageDiv = document.createElement('img');
        imageDiv.classList.add('image');
        imageDiv.src = result.artworkUrl100;

        let titleDiv = document.createElement('div');
        titleDiv.classList.add('div');
        titleDiv.innerText = `${result.trackName}`;

        let artistDiv = document.createElement('div');
        artistDiv.classList.add('div');
        artistDiv.innerText = `${artistName}`;
    }
}
showResults(results);