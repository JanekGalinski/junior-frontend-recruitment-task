import axios from 'axios';

export const getArtistDetails = name => {
    return (
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=b13851316d3a6ff1ac99cf76140016cc&format=json`)
    );
}
