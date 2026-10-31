import { useEffect, useState } from 'react';
import styled from 'styled-components';

/** Отображает подвал блога; погодные данные запрашивает только при настроенном серверном адресе. */
const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		const endpoint = import.meta.env.VITE_WEATHER_ENDPOINT;
		if (!endpoint) return;

		const controller = new AbortController();
		/** Загружает погоду для FooterContainer через серверный адрес без ключа в браузере. */
		async function loadWeather() {
			try {
				const response = await fetch(endpoint, { signal: controller.signal });
				if (!response.ok) return;
				const data = await response.json();
				if (typeof data.name !== 'string' || !Number.isFinite(data.main?.temp)
					|| typeof data.weather?.[0]?.description !== 'string') return;
				setCity(data.name);
				setTemperature(Math.round(data.main.temp - 273.15));
				setWeather(data.weather[0].description);
			} catch {
				// Недоступность погоды не должна прерывать работу блога.
			}
		}
		void loadWeather();
		return () => controller.abort();
	}, []);
	return (
		<footer className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>web@developer.kz</div>
			</div>
			<div>
				<div>
					{city},{' '}
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temperature} градусов, {weather}
				</div>
			</div>
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	font-weight: bold;
	background-color: #fff;
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0 2px 17px #000;
`;
