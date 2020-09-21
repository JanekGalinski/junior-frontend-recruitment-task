import axios from 'axios';

const accessToken = b13851316d3a6ff1ac99cf76140016cc;

const country = "poland"

export const getWorldArtists = id => {
    return (
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${accessToken}&format=json`)
    );
}

export const getPolishArtists = () => {
    return (
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${accessToken}&format=json`)
    );
}
