import styled from "styled-components/macro";
import { Shadow } from "../../styles/common";
import theme from "../../styles/theme";
import { Style } from "../../styles/common";

interface ContentScrollPropsI {
	scrolled: boolean;
}

interface ItemPropsI {
	height: string;
}

export const Container = styled.div``;

export const Tabs = styled.div`
	display: flex;
	width: 100%;
	border-radius: 5px;
	overflow: hidden;
	${Shadow};
	gap: 1px;
	margin-bottom: 0.5rem;
`;

export const Tab = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	padding: 0.8rem;
	background-color: ${theme.textInverted};
`;

export const ContentWrapper = styled.div`
	width: calc(100% + ${Style.margin} + ${Style.margin});
	overflow: hidden;
	padding-left: ${Style.margin};
	margin-left: -${Style.margin};
`;

export const ContentScroll = styled.div`
	display: flex;
	width: 200%;
	gap: ${Style.margin};
	padding-right: ${Style.margin};
	margin-left: ${({ scrolled }: ContentScrollPropsI) => (scrolled ? "-100%" : "0%")};
	transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
`;

export const Content = styled.div`
	height: 100%;
	flex: 1;
`;

export const Item = styled.div`
	height: ${({ height }: ItemPropsI) => height};
	width: 100%;
	margin-bottom: 0.5rem;
	display: flex;
`;

export const Info = styled.div`
	margin-left: 0.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
`;

export const Row = styled.div`
	display: flex;

	span {
		display: flex;
		margin-left: 0.5rem;
		align-items: center;
		justify-content: center;
	}
`;
