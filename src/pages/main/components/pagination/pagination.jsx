import styled from 'styled-components';
import { Button } from '../../../../components';

const PaginationContainer = ({ className, setPage, page, lastPage }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				Предыдущая
			</Button>
			<div className="current-page">Страница: {page}</div>
			<Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
				Следующая
			</Button>
			<Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin: 0 0 20px;
	padding: 0 35px;

	& button {
		margin: 0 5px;
		cursor: pointer;
	}

	& .current-page {
		width: 100%;
		height: 32px;
		margin: 0 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		border: 1px solid #000;
	}
`;
