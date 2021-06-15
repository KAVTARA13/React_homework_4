export const login = async (credentials) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        return await response.json();
    } catch (err) {
        console.trace(err);
        return null;
    }
};

export const registration = async (credentials) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        return await response.json();
    } catch (err) {
        console.trace(err);
        return null;
    }
};