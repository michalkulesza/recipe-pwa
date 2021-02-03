import React, { useState } from "react";
import { CardLayout } from "../layouts";
import styled from "styled-components";
import { useFormik } from "formik";

import { Header, Text, Input } from "../components";
import { Style } from "../styles/common";
import { CATEGORIES } from "../fixtures/data";

type PropsI = {};

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.div``;

const Row = styled.div`
	display: flex;
	margin: 0.5rem 0;
	max-width: 100%;

	& > {
		&:nth-child(2) {
			margin-left: ${`calc(${Style.margin} / 3)`};
		}
	}
`;

const Add: React.FC<PropsI> = () => {
	const [image, setImage] = useState<File>();

	interface formValuesI {
		name: string;
		category: string;
		calories: number;
		prepTime: number;
		portions: number;
		comments: string;
	}

	const initialValues: formValuesI = {
		name: "",
		category: "",
		calories: 0,
		prepTime: 0,
		portions: 1,
		comments: "",
	};

	const validate = () => {};

	const formik = useFormik({
		initialValues,
		validate,
		onSubmit: async val => {},
	});

	const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => e.target.files && setImage(e.target.files[0]);

	return (
		<CardLayout
			header={<Header input image={image ? URL.createObjectURL(image) : ""} imageHandler={handleImage} />}
			content={
				<Container>
					<Title>
						<Text type="H1Bold">Create recipe</Text>
					</Title>
					<Row>
						<Input
							label="Name"
							name="name"
							value={formik.values.name}
							onChange={formik.handleChange}
							error={formik.errors.name}
						/>
					</Row>
					<Row>
						<Input
							label="Category"
							placeholder="Select category"
							name="category"
							type="select"
							options={CATEGORIES}
							value={formik.values.category}
							onChange={formik.handleChange}
							error={formik.errors.category}
						/>
					</Row>
					<Row>
						<Input
							label="Calories"
							name="calories"
							type="number"
							value={formik.values.calories}
							onChange={formik.handleChange}
							error={formik.errors.calories}
						/>
						<Input
							label="Preparation time"
							name="prepTime"
							type="number"
							value={formik.values.prepTime}
							onChange={formik.handleChange}
							error={formik.errors.prepTime}
						/>
					</Row>
					<Row>
						<Input
							label="Portions"
							name="portions"
							type="number"
							value={formik.values.portions}
							onChange={formik.handleChange}
							error={formik.errors.portions}
						/>
					</Row>
					<Row>
						<Input
							label="Additional info"
							name="comments"
							type="textArea"
							value={formik.values.comments}
							onChange={formik.handleChange}
							error={formik.errors.comments}
						/>
					</Row>
				</Container>
			}
		/>
	);
};

export default Add;
