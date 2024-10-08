import styled from "styled-components";

export const $List = styled.ol``;

interface $ListItemProps {
	$removable?: boolean;
}

export const $ListItem = styled.li.attrs<$ListItemProps>((props) => ({
	$removable: props.$removable,
}))<$ListItemProps>`
	list-style-type: ${({ $removable }) => $removable ? "numeric" : "none"};
`;

export const $Header = styled.div`
	display: inline-flex;
	flex-direction: row;
`;

export const $Value = styled.input``;

export const $Controls = styled.div`
	display: flex;
	flex-direction: row;
`;

export const $Control = styled.button``;
