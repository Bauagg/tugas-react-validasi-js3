import axios from "axios";

const url = `https://newsapi.org/v2/everything?`


const Datas = async (dataku) => {
    const date = await axios.get(`${url}q=${dataku}&apiKey=f6f9b5ff08ed46d8ab32401be3684d00`)
    const reault = await date.data.articles;
    return reault;
}


export { Datas };

