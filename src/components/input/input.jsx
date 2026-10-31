import { forwardRef } from 'react';
import styled from 'styled-components';

export const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
	width: ${({ width = '100%' }) => width};
	height: 40px;
	font-size: 18px;
	padding: 10px;
	margin: 0 0 10px;
	border: 1px solid black;
`;
