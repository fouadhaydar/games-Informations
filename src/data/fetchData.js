

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'your key',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};


export const useFetchGame = (setData, url) => {
    fetch(url, options)
        .then(response => response.json())
        .then(response => {setData(response)})
        .catch(err => console.error(err));
}
