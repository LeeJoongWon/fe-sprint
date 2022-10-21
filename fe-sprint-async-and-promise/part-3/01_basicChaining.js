const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeather() {
    // TODO: fetch을 이용해 작성합니다
    // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
    let obj = {};
    return fetch(newsURL) //
        .then((response) => response.json())
        .then((response) => {
            obj.news = response.data;
            return fetch(weatherURL);
        })
        .then((response) => response.json())
        .then((response) => {
            obj.weather = response;
            return obj;
        });
}

if (typeof window === 'undefined') {
    module.exports = {
        getNewsAndWeather,
    };
}
