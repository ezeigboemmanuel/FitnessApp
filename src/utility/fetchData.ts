
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'yourkeyhere',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'yourkeyhere',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

  export const fetchData = async (url: string, options: object) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data;
  }