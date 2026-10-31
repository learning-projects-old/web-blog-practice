import { Routes, Route, useParams } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components";

const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: #485969; /* Тёмный фон по бокам */
    min-height: 100vh;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff; /* Белый блок по центру */
    width: 1000px;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 40px;
`;

const Footer = styled.footer`
    margin-top: auto;
    text-align: center;
    color: #999;
    padding: 20px 0;
`;

const HomePage = () => <div>Главная страница</div>;
const LoginPage = () => <div>Вход</div>;
const RegisterPage = () => <div>Регистрация</div>;
const UsersPage = () => <div>Пользователи</div>;
const NewPostPage = () => <div>Новая статья</div>;
const NotFoundPage = () => <div>Ошибка: страница не найдена</div>;

const PostPage = () => {
    const { postId } = useParams();
    return <div>Статья {postId}</div>;
};

export default function Blog() {
    return (
        <PageWrapper>
            <Content>
                <Header />
                <h2>Контент страницы</h2>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/post" element={<NewPostPage />} />
                    <Route path="/post/:postId" element={<PostPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer>Футер</Footer>
            </Content>
        </PageWrapper>
    );
}
