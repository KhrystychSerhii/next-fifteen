import React from 'react';
import { shuffle, findIndex } from 'lodash';



const isNearEmpty =  (arr, item) => {
	const { pos: { x, y }} = arr.find((item) => !item.value);
	return (x === item.pos.x && Math.abs(item.pos.y - y) === 1) || (y === item.pos.y && Math.abs(item.pos.x - x) === 1);
};



const Game = ({ step, onMove }) => {
	// const [ gameArray, setGameArray ] = React.useState(generateEmptyArray());
	const move = (arr, item) => {
		const nearEmpty = isNearEmpty(arr, item);


		if (nearEmpty) {
			onMove(arr, item);
			// setGameArray(generateNewArr(arr, clickedIndex))
		}
	};
	return (
		<div className="game-wrapper">
			{
				step.map((item) => <div key={item.key} className="game-item" onClick={() => { move(step, item) }}>
					<span>{item.value}</span>
				</div>)
			}
		</div>
	)
};

export default Game;
