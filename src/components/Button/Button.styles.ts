import styled from "styled-components";
import { ButtonComponent, ButtonProps } from "./Button";

export const ButtonTitle = styled.span`
	font-size: 1.2em;
	display: block;
`;

interface ButtonStyleProps {
	accent?: string;
}

export const Button = styled(ButtonComponent).attrs<
	ButtonProps & ButtonStyleProps, 
	ButtonStyleProps
>((props) => ({
	accent: props.accent || 'green',
}))`
	border: 1px solid red;
	
	&:hover {
		border-width: 10px;
	}
	
	@media screen and (max-width: 500px) {
		border-color: ${props => props.accent};
	}
`;

