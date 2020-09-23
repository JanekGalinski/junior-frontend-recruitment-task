import axios from 'axios';

const accessToken = 'b13851316d3a6ff1ac99cf76140016cc';

const worldArtists = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=b13851316d3a6ff1ac99cf76140016cc&format=json`
const polishArtists = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=poland&api_key=b13851316d3a6ff1ac99cf76140016cc&format=json`

export const getArtists = () => {
    return (
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=b13851316d3a6ff1ac99cf76140016cc&format=json`)
    );
}


export const getArtistDetails = name => {
    return (
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=b13851316d3a6ff1ac99cf76140016cc&format=json`)
    );
}
