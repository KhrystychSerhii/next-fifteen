import { isJsonValid } from '../../src/helpers/game';

export const startedGame = async function(req, res) {
	const { step } = req.params;
	if (isJsonValid(step)) {
		await this.render(req, res, '/game/started-game', { step });
	} else {
		await this.render(req, res, '/game');
	}
};
