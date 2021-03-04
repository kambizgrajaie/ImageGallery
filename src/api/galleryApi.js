import request from 'superagent'

const ENDPOINT = 'http://demo3136867.mockable.io';

const get = (url) => {
    return new Promise((resolve, reject) => {
        request.get(url)
        .set({
            Accept: 'application/json'
        })
        .end((err, res) => {
            if (err) reject(err);
            else resolve(res.body);
        })
    })
}

export const getCarousel = () => {
    return get(ENDPOINT + '/carousel');
}

export const getFeatured = () => {
    return get(ENDPOINT + '/featured');
}
