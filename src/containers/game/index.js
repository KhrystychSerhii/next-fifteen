import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router'

import Layout from '../../components/Layout';
import { generateEmptyArray } from '../../helpers/game';


const Game = () => {
	const [ firstStep ] = React.useState(JSON.stringify(generateEmptyArray()));
	return (
		<Layout>
			<Link as={`/game/${firstStep}`} href={`/game/started-game?step=${firstStep}`}>
				<button className="start-game-btn">Start Game</button>
			</Link>
		</Layout>
	)
};

export default withRouter(Game);
