import React from 'react';
import Link from 'next/link';

const User = ({ user, index, router, showLink = true }) => {
	const navigate = () => {
		router.push(`/users/user?login=${user.login}`, `/users/${user.login}`)
	};

	if (!user) return null;
	return (
		<div className="user-element">
			<span className="user-element__id">#{index + 1}</span>
			<strong className="user-element__name">{user.login}</strong>
			{
				showLink && (
					<Link as={`/users/${user.login}`} href={`/users/user?login=${user.login}`} >
						<i className="user-element__link fas fa-angle-right" onClick={navigate} />
					</Link>
				)
			}

		</div>
	)
};

export default User;
