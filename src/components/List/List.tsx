import React from "react";
import { Text } from "..";
import { Container, Item } from "./List.styled";

export interface ListItemI {
	name: string;
	amount: string | number;
	unit: string;
}

type PropsI = {
	data: ListItemI[];
};

const List: React.FC<PropsI> = ({ data }) => {
	return (
		<Container>
			{data.map((item, i) => (
				<Item key={i}>
					<Text>{item.name}</Text>
					<Text type="H3Bold" color="placeholder">
						{item.amount}
						{item.unit}
					</Text>
				</Item>
			))}
		</Container>
	);
};

export default List;
