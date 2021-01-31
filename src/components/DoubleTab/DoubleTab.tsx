import React, { useState } from "react";
import { Container, Tabs, Tab, ContentWrapper, ContentScroll, Content, Item, Info, Row } from "./DoubleTab.styled";
import { RecipeI } from "../../redux/types/recipes";

import { Text, Tile } from "../../components";
import { FiClock } from "react-icons/fi";
import theme from "../../styles/theme";

type PropsI = {
	titles: string[];
	data: [RecipeI[], RecipeI[]];
	clickHandler?: (id: RecipeI["id"]) => void;
};

const ITEM_HEIGHT = "6rem";

const DoubleTab: React.FC<PropsI> = ({ titles, data, clickHandler }) => {
	const [active, setActive] = useState(0);
	const handleTabClick = (id: number) => setActive(id);
	const handleItemClick = (id: RecipeI["id"]) => (clickHandler ? clickHandler(id) : () => null);

	return (
		<Container>
			<Tabs>
				{titles.map((title, i) => (
					<Tab key={i} onMouseDown={() => handleTabClick(i)}>
						<Text type="H3" color={active === i ? "primary" : "placeholder"}>
							{title}
						</Text>
					</Tab>
				))}
			</Tabs>
			<ContentWrapper>
				<ContentScroll scrolled={active === 1}>
					{data.map((page, i) => (
						<Content key={i}>
							{page.map(item => (
								<Item key={item.id} height={ITEM_HEIGHT} onMouseDown={() => handleItemClick(item.id)}>
									<Tile id={item.id} image={item.imageURL} height={ITEM_HEIGHT} />
									<Info>
										<Text type="H3Bold">{item.name}</Text>
										<Row>
											<Text type="H4" color="placeholder">
												{item.category}
											</Text>
											<span>
												<FiClock size="0.8rem" color={theme.placeholder} style={{ marginRight: "0.2rem" }} />
												<Text type="H4" color="placeholder">
													{item.prepTime}min
												</Text>
											</span>
										</Row>
										<Row>
											{item.tags.map((tag, i) => (
												<Text key={i} type="H4" color="placeholder" marginRight="0.2rem">
													#{tag}
												</Text>
											))}
										</Row>
									</Info>
								</Item>
							))}
						</Content>
					))}
				</ContentScroll>
			</ContentWrapper>
		</Container>
	);
};

export default DoubleTab;
