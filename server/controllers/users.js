export const user = async function(req, res) {
	const { login } = req.params;
	await this.render(req, res, '/users/user', { login });
};
