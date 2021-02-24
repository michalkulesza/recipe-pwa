import styled from "styled-components/macro";
import theme from "../../styles/theme";

export const Container = styled.div``;

export const GroupContainer = styled.div`
	margin-bottom: 1rem;
`;

export const GroupHeading = styled.div`
	display: flex;
	align-items: center;
`;

export const GroupIcon = styled.div`
	height: 2.7rem;
	width: 2.7rem;
	padding: 0.5rem;
	border-radius: 5px;
	background-color: ${theme.primary};
	margin-right: 0.7rem;
`;

export const GroupText = styled.div`
	display: flex;
	flex-direction: column;
`;

export const GroupContent = styled.div`
	margin: 1rem 0;
	background-color: ${theme.backgroundContrast};
	border-radius: 5px;
`;

export const ItemButtonContainer = styled.button`
	width: 100%;
	padding: 1rem 0;
	background-color: transparent;
	text-align: left;
	padding-left: 1rem;
`;

export const ItemInfoContainer = styled.div`
	gap: 0.2rem;
	width: 100%;
	padding: 0.8rem 0;
	padding-left: 1rem;
	display: flex;
	flex-direction: column;
`;
