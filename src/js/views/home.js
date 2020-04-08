import React, { useContext } from "react";
import { People } from "./../component/People";
import { Planet } from "./../component/Planet";
import { Context } from "./../store/appContext";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<>
			<div className="scrolling-wrapper">
				<People />
			</div>
			<div className="scrolling-wrapper">
				<Planet />
			</div>
		</>
	);
};
