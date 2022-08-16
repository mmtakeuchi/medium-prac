import React from "react";

const TextItem = ({ item, setModal }) => {
	const renderPartials = item.length < 6 ? `${item}` : `${item.slice(0, 5)}...`;

	return <li onClick={() => setModal(item)}>{renderPartials}</li>;
};

export default TextItem;
