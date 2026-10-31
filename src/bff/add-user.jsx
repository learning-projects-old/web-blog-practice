import {generateDate} from './gen-date.js';

export async function addUser(login, password) {
    const response = await fetch('http://localhost:3005/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            login,
            password,
            registered_at: generateDate(),
            role_id: 2
        }),
    });

    if (!response.ok) {
        throw new Error(`Ошибка при добавлении пользователя: ${response.statusText}`);
    }

    return response.json(); // возвращаем реальный ответ сервера (с id, если он есть)
}
