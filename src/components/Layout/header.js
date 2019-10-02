import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

const Header = ({ router }) => {
	const linkClasses = (route) => `header__link${router.route.indexOf(route) === 0 ? ' active': ''}`;
	return (
		<header className="header">
			<div className="logo-wrapper">
				<Link href="/">
					<em>
						Logo
					</em>
				</Link>
			</div>

			<div className="links-wrapper">
				<Link href="/game">
					<span className={linkClasses('/game')}><i className="fas fa-gamepad" /> Game</span>
				</Link>
				<Link href="/about">
					<span className={linkClasses('/about')}><i className="fas fa-info" /> About</span>
				</Link>
				<Link href="/users">
					<span className={linkClasses('/users')}><i className="fas fa-users" /> Users</span>
				</Link>
			</div>

		</header>
	)
};

export default withRouter(Header);
