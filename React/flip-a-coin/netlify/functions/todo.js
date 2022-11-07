
exports.handler = async function (event, context) {
    try {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
                'X-RapidAPI-Host': `${process.env.REACT_APP_HOST}`
            }
        };

        const response = await fetch(`${process.env.REACT_APP_TODO_BASE_URL}`, options);
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (err){
        return {
            statusCode: 404,
            body: err.toString()
        };
    }
};
