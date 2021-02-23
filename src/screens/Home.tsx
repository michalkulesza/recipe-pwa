import React, { useState, useEffect } from "react";
import { RootState } from "../redux/reducers/rootReducer";
import { formatName } from "../helpers/formatName";
import { RecipeI } from "../redux/types/recipes";
import { getHours } from "../hooks/useGreeting";
import { useHistory } from "react-router-dom";
import { ADD, RECIPE } from "../constants/routes";
import { RECIPES } from "../fixtures/data";
import { useSelector } from "react-redux";
import { useGreeting } from "../hooks";

import { Carousel, Text, Tile, DoubleTab, Button } from "../components";
import { MainLayout } from "../layouts";
import { IoIosAddCircle } from "react-icons/io";

const CAROUSEL_HEIGHT = "20rem";

const Home: React.FC = () => {
	const greeting = useGreeting();
	const history = useHistory();
	const hour = getHours();

	const { featured } = useSelector((state: RootState) => state.recipes);
	const { user } = useSelector((state: RootState) => state.auth);

	const [featuredTitle, setFeaturedTitle] = useState("");
	const [featuredData, setFeaturedData] = useState<RecipeI[] | undefined>(undefined);

	const formattedName = user && formatName(user);

	useEffect(() => {
		if (hour > 4 && hour <= 12) {
			setFeaturedData(featured.breakfast);
			setFeaturedTitle("Breakfast");
		} else if (hour > 12 && hour <= 14) {
			setFeaturedData(featured.lunch);
			setFeaturedTitle("Lunch");
		} else {
			setFeaturedData(featured.dinner);
			setFeaturedTitle("Dinner");
		}
	}, [hour, featured]);

	const handleItemClick = (id: RecipeI["id"]) =>
		history.push(`${RECIPE}/${id}`, {
			from: history.location.pathname,
		});

	const handleEmptyItemCLick = () => history.push(ADD);

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
					<Carousel title={`${featuredTitle} recipes`} link="/" height={CAROUSEL_HEIGHT}>
						{featuredData ? (
							featuredData.map(recipe => (
								<Tile
									key={recipe.id}
									id={recipe.id}
									title={recipe.name}
									image={recipe.imageURL}
									height={CAROUSEL_HEIGHT}
									marginRight="1rem"
									clickHandler={handleItemClick}
								/>
							))
						) : (
							<Button styling="tile" height={CAROUSEL_HEIGHT} handleClick={handleEmptyItemCLick}>
								<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
									<IoIosAddCircle size="4rem" style={{ marginBottom: "1rem" }} />
									<Text>Add you frist recipe!</Text>
								</div>
							</Button>
						)}
					</Carousel>
					<DoubleTab titles={["First One", "Second One"]} data={[RECIPES, RECIPES]} clickHandler={handleItemClick} />
				</>
			}
		/>
	);
};

export default Home;
