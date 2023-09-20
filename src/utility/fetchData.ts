
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3397041d5cmsh027c63c4847a172p14480djsnad40a6a3a79e',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const fetchData = async (url: string, options: object) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data;
  }