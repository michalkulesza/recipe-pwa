import React from "react";

import { Text, Carousel, Tile } from "../components";
import { RECIPES } from "../fixtures/data";
import { MainLayout } from "../layouts";

const CAROUSEL_HEIGHT = "14rem";

const Browse: React.FC = () => {
	return (
		<MainLayout
			header={<Text type="H1Bold">Browse</Text>}
			content={
				<>
					<Carousel title="Breakfast recipes" height={CAROUSEL_HEIGHT} link="/">
						{RECIPES.map(recipe => (
							<Tile
								key={recipe.id}
								id={recipe.id}
								title={recipe.name}
								fontSize="H3Bold"
								image={recipe.imageURL}
								height={CAROUSEL_HEIGHT}
								marginRight="0.5rem"
								clickHandler={() => {}}
							></Tile>
						))}
					</Carousel>
					<Carousel title="Breakfast recipes" height={CAROUSEL_HEIGHT} link="/">
						{RECIPES.map(recipe => (
							<Tile
								key={recipe.id}
								id={recipe.id}
								title={recipe.name}
								fontSize="H3Bold"
								image={recipe.imageURL}
								height={CAROUSEL_HEIGHT}
								marginRight="0.5rem"
								clickHandler={() => {}}
							></Tile>
						))}
					</Carousel>
					<Carousel title="Breakfast recipes" height={CAROUSEL_HEIGHT} link="/">
						{RECIPES.map(recipe => (
							<Tile
								key={recipe.id}
								id={recipe.id}
								title={recipe.name}
								fontSize="H3Bold"
								image={recipe.imageURL}
								height={CAROUSEL_HEIGHT}
								marginRight="0.5rem"
								clickHandler={() => {}}
							></Tile>
						))}
					</Carousel>
					<Carousel title="Breakfast recipes" height={CAROUSEL_HEIGHT} link="/">
						{RECIPES.map(recipe => (
							<Tile
								key={recipe.id}
								id={recipe.id}
								title={recipe.name}
								fontSize="H3Bold"
								image={recipe.imageURL}
								height={CAROUSEL_HEIGHT}
								marginRight="0.5rem"
								clickHandler={() => {}}
							></Tile>
						))}
					</Carousel>
				</>
			}
		/>
	);
};

export default Browse;
