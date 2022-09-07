const axios = require("axios")

const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/search",
  params: {
    relatedToVideoId: "7ghhRHRP6t4",
    part: "id,snippet",
    type: "video",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "5797fde1d3mshc2e8e948d12a913p18bdabjsn3953bc96e7ec",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
}

axios
  .request(options)
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.error(error)
  })
