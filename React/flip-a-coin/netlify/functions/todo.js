const axios = require('axios');

exports.handler = async function (event, context) {
    try {
        const request = {
            method: 'get',
            url: `${process.env.REACT_APP_TODO_BASE_URL}`
        };

        axios.defaults.headers.common = {
            'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
            'X-RapidAPI-Host': `${process.env.REACT_APP_HOST}`
        }

        const response = await axios(request);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        }
    } catch (err){
        return {
            statusCode: 404,
            body: err.toString()
        };
    }
};
