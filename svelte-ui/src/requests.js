const baseUrl = process.env.API_URL;

const expectedStatuses = [200, 202];

const catchError = async (request) => {
    try {
        const response = await request();
        if (!expectedStatuses.includes(response.status)) {
            throw new Error(`Bad status response: ${response.status}`)
        }
        if (response.status === 200) {
            return response.json()
        }
    } catch (e) {
        throw new Error(e)
    }
}

const GET = async (url) => await catchError(() => {
    return fetch(`${baseUrl}/${url}`, {method: 'GET'})
})

const DELETE = async (url, body) => await catchError(() => {
    return fetch(`${baseUrl}/${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
})

const POST = async (url, body) => {
    console.log('url', `${baseUrl}/${url}`);
    return catchError(() => fetch(`${baseUrl}/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }));
}


const PATCH = async (url, body) => {
    console.log('url', `${baseUrl}/${url}`);
    return catchError(() => fetch(`${baseUrl}/${url}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }));
}

export {
    GET,
    POST,
    PATCH,
    DELETE
}