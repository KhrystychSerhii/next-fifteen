import React from 'react';
import Head from 'next/head';

import Header from './header';
import Footer from './footer';

const Layout = ({ children, title = 'Fifteen' }) => (
	<React.Fragment>
		<Head>
			<title>{ title }</title>
		</Head>
		<Header />
		<main className="main">
			{ children }
		</main>
		<Footer />
	</React.Fragment>
);

export default Layout;
