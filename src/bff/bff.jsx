import {getUser} from './get-users.js';
import {addUser} from './add-user.js';
import {createSession} from "react-router";


export const server = {
    async authorize(authLogin, authPassword) {
        const user = await getUser(authLogin);

        if (!user) {
            return {error: 'Такой пользователь не найден', res: null};
        }

        if (authPassword !== user.password) {
            return {error: 'Неверный пароль', res: null};
        }

        const session = {
            user: {login: user.login, role_id: user.role_id},
            logout() {
                Object.keys(session).forEach((key) => {
                    delete session[key];
                });
            },
            removeComment() {
                console.log('Удаление комментария');
            }
        };

        return {error: null, res: createSession(user.role_id)};
    },

    async register(regLogin, regPassword) {
        const exists = await getUser(regLogin);
        if (exists) {
            return {error: 'Такой логин уже занят', res: null};
        }

        const createdUser = await addUser(regLogin, regPassword);
        return {error: null, res: createdUser};
    }
};
