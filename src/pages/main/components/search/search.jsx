import styled from 'styled-components';
import { Icon, Input } from '../../../../components';

const SearchContainer = ({ className, searchPhrase, onSearch }) => {
	return (
		<div className={className}>
			<Input placeholder="Поиск..." value={searchPhrase} onChange={onSearch} />
			<Icon inactive={true} id="fa-search" size="21px" margin="" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	width: 340px;
	height: 40px;
	margin: 40px auto 0;
	position: relative;

	& > input {
		padding-right: 40px;
	}

	& > div {
		position: absolute;
		top: 5px;
		right: 9px;
	}
`;
