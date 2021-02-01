import React from "react";
import { INGRIDIENTS, RECIPES } from "../fixtures/data";
import { useHistory, useParams } from "react-router-dom";
import { CardLayout } from "../layouts";
import styled from "styled-components";

import { Header, Button, Text, Tag, List } from "../components";
import { FiChevronLeft } from "react-icons/fi";
import theme from "../styles/theme";
import { Style } from "../styles/common";

type PropsI = {};

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Title = styled.div`
	width: 90%;
	text-align: center;
	margin-bottom: ${`calc(${Style.margin} / 2)`};
`;

const Info = styled.div`
	margin-bottom: ${`calc(${Style.margin} / 2)`};
`;

const Tags = styled.div`
	display: flex;
	gap: 0.3rem;
	margin-bottom: ${`calc(${Style.margin} / 2)`};

	& > * {
		&:not(:last-child) {
			margin-right: ${`calc(${Style.margin} / 8)`};
		}
	}
`;

const Recipe: React.FC<PropsI> = () => {
	const history = useHistory();
	const { id } = useParams<{ id: string }>();
	const handleBackButtonClick = () => history.goBack();
	const handleTagClick = (tag: string) => {};

	const DATA = RECIPES[0];

	return (
		<CardLayout
			navbar={
				<Button styling="round" handleClick={handleBackButtonClick}>
					<FiChevronLeft size="1.8rem" style={{ marginLeft: "-0.2rem" }} color={theme.text} />
				</Button>
			}
			header={<Header imageURL={DATA.imageURL} />}
			content={
				<Container>
					<Title>
						<Text type="H2Bold">{DATA.name}</Text>
					</Title>
					<Info>
						<Text color="placeholder">{`${DATA.prepTime}min | ${DATA.calories}kcal`}</Text>
					</Info>
					<Tags>
						{DATA.tags.map((tag, i) => (
							<Tag key={i} clickHandler={() => handleTagClick(tag)}>
								{tag}
							</Tag>
						))}
					</Tags>
					<List data={INGRIDIENTS} />
				</Container>
			}
		/>
	);
};

export default Recipe;
