import React, { useState } from "react";
import "./StarRating.css";

const EMPTY_STAR =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
const FULL_STAR =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";

const StarRating = () => {
	const [active, setActive] = useState(0);
	const [hovered, setHovered] = useState(0);
	console.log(active);

	return (
		<div className='star-container'>
			{[1, 2, 3, 4, 5].map((id) => (
				<img
					className={`star-${id}`}
					key={id}
					src={id <= active || id <= hovered ? FULL_STAR : EMPTY_STAR}
					alt='star'
					onMouseEnter={() => setHovered(id)}
					onMouseOut={() => setHovered(0)}
					onClick={() => setActive(id)}
				/>
			))}
		</div>
	);
};

export default StarRating;
