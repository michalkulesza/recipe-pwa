import React from "react";
import { RootState } from "../redux/reducers/rootReducer";
import { RecipeI } from "../redux/types/recipes";
import { useHistory } from "react-router-dom";
import { RECIPE } from "../constants/routes";
import { RECIPES } from "../fixtures/data";
import { useSelector } from "react-redux";
import { useGreeting } from "../hooks";

import { Carousel, Text, Tile, DoubleTab } from "../components";
import { MainLayout } from "../layouts";

const CAROUSEL_HEIGHT = "20rem";

const Home: React.FC = () => {
	const greeting = useGreeting();
	const history = useHistory();
	const { user } = useSelector((state: RootState) => state.auth);

	const formattedName = `${user?.name[0].toUpperCase()}${user?.name.slice(1)}`;
	const handleItemClick = (id: RecipeI["id"]) =>
		history.push(`${RECIPE}/${id}`, {
			from: history.location.pathname,
		});

	return (
		<MainLayout
			header={
				<>
					<Text type="H1Bold">{greeting},</Text>
					<Text type="H1">{formattedName}!</Text>
				</>
			}
			content={
				<>
					<Carousel title="Breakfast recipes" link="/" height={CAROUSEL_HEIGHT}>
						{RECIPES.map(recipe => (
							<Tile
								key={recipe.id}
								id={recipe.id}
								title={recipe.name}
								image={recipe.imageURL}
								height={CAROUSEL_HEIGHT}
								marginRight="1rem"
								clickHandler={handleItemClick}
							></Tile>
						))}
					</Carousel>
					<DoubleTab titles={["First One", "Second One"]} data={[RECIPES, RECIPES]} clickHandler={handleItemClick} />
				</>
			}
		/>
	);
};

export default Home;
