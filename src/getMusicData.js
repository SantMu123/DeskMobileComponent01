export const getAllData = async() => {
    const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c3ee80820bmsh4272f11ed8dd116p18e706jsn5a4b603718bf',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    let result
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}



export const sortSongsForPopularity = async () => {
    const data = await getAllData()
    const sortedSongs = data.tracks
    sortedSongs.sort((a, b) => b.popularity - a.popularity)
    console.log(sortedSongs)
    return sortedSongs
}

export const releaseYear = (data) => {
    const releaseDateFull = data.album.release_date
    const year = new Date(releaseDateFull).getFullYear()
    return year
}