import { useEffect, useState } from "react";

const useGreeting = (refreshCycle = 60000) => {
	const [greeting, setGreeting] = useState(getGreeting(getHours()));

	useEffect(() => {
		const intervalId = setInterval(() => {
			const currentHour = getHours();
			const greeting = getGreeting(currentHour);
			setGreeting(greeting);
		}, refreshCycle);

		return () => clearInterval(intervalId);
	}, [refreshCycle, setGreeting]);

	return greeting;
};

const getHours = () => {
	return new Date().getHours();
};

const getGreeting = (hour: number) => {
	const GREETINGS = ["Good Morning", "Good Afternoon", "Good Evening"];

	if (hour >= 5 && hour < 12) {
		return GREETINGS[0];
	} else if (hour >= 12 && hour < 18) {
		return GREETINGS[1];
	} else {
		return GREETINGS[2];
	}
};

export default useGreeting;
