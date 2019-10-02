import {findIndex, shuffle} from 'lodash';

export const isJsonValid = (string = '') => {
	try {
		JSON.parse(string);
	} catch (e) {
		return false;
	}
	return true;
};

export const generateNextStep = (arr, clickedIndex = 0) => {
	const emptyIndex = findIndex(arr, (i) => !i.value);
	const result = [ ...arr ];
	const clickedValue = result[clickedIndex].value;
	result[clickedIndex].value = null;
	result[emptyIndex].value = clickedValue;
	return result;
};

export const generateEmptyArray = () => {
	let result = [];
	let index = 0;
	for (let i = 1, max = 16; i < max; i++) {
		result.push(i);
	}
	result = shuffle(result);
	for (let y = 1, maxY = 4; y <= maxY; y++) {
		for (let x = 1, maxX = 4; x <= maxX; x++) {
			result[index] = { value: result[index], key: index + 1, pos: { x, y } };
			index++;
		}
	}
	result[result.length - 1].value = null;
	return result;
};
