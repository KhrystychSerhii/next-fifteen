import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router'

import { fetchUser } from '../../store/actions/users';

import Layout from '../../components/Layout';
import UserComponent from '../../components/user';

const User = ({ users, router }) => (
	<Layout>
		<UserComponent user={users.user} router={router} index={0} showLink={false} />
	</Layout>
);

User.getInitialProps = async ({ query, store }) => {
	store.dispatch(fetchUser(query.login));
	return {}
};


export default connect(state => state)(withRouter(User));
