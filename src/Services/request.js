import axios from "axios";

export const getMovies = async () => {
    try{
        const config = {
            headers: {
                'X-RapidAPI-Key': '22a5e46415msh3abf45ca591a327p188462jsna5e2c6ceda2b'
            }
        }
        const res = await axios.get(
            `https://imdb-top-100-movies.p.rapidapi.com/`,
            config
        ).catch(err => {
            if (err.response.status === 404) {
                throw new Error(`${err.config.url} not found`);
            }
            throw err;
        })
        return res;
    }catch(err){
        return false;
    }

}