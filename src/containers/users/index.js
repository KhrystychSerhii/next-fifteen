import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import { fetchUsers } from '../../store/actions/users';

import Layout from '../../components/Layout';
import User from '../../components/user';

const Users = ({ users, router }) => {
	return (
		<Layout title="Users">
			<h1>Users Page</h1>
			{
				users.users.map((user, index) => <User router={router} key={user.id} user={user} index={index} />)
			}
		</Layout>
	)
};

Users.getInitialProps = async ({ store }) => {
	store.dispatch(fetchUsers());
	return {}
};

export default connect(state => state)(withRouter(Users));
