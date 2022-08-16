import React, { useState } from "react";
import ListItem from "./ListItem";

const CheckList = ({ initialList }) => {
	const [list, setList] = useState(initialList);

	const switchStatus = (task, index, status) => {
		const newList = { ...list };
		newList[task][index][status] = !newList[task][index][status];
		setList(newList);
	};

	const renderList = Object.entries(list).map(([key, value], i) => (
		<ListItem key={i} title={key} tasks={value} switchStatus={switchStatus} />
	));

	return <ul>{renderList}</ul>;
};

export default CheckList;
