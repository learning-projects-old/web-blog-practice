export const getUsers = () => {
    return fetch("http://localhost:3005/users")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return response.json();
        });
};
