export const exercisesOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '340f7d2ebcmsh0dfd61644b0b609p1df8f5jsnacfb936885b6',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a9dc1ec928mshae36d408074fb08p19c299jsnf0e3fc489f07',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

// process.env.REACT_APP_RAPID_API_KEY