import React from 'react';
import { withRouter } from 'next/router'
import {findIndex} from 'lodash';

import Layout from '../../components/Layout';
import Game from '../../components/game';

import {generateEmptyArray, generateNextStep} from '../../helpers/game';

const StartedGame = ({ router }) => {
	const { step } = router.query;
	if (!step) return null;
	const parsedStep = JSON.parse(step);
	const onMove = (step, item) => {
		const clickedIndex = findIndex(step, (i) => i.value === item.value);
		const nextStep = JSON.stringify(generateNextStep(step, clickedIndex));
		router.push(`/game/started-game?step=${nextStep}`, `/game/${nextStep}`);
	};

	const restoreGame = () => {
		const step = JSON.stringify(generateEmptyArray());
		router.push(`/game/started-game?step=${step}`, `/game/${step}`);
	};

	return (
		<Layout>
			<React.Fragment>
				<Game step={parsedStep} onMove={onMove} />
				<button className="restore-game-btn" onClick={restoreGame}>
					<i className="fas fa-redo" />
				</button>
			</React.Fragment>
		</Layout>
	)
};

StartedGame.getInitialProps = (props) => ({});

export default withRouter(StartedGame);
