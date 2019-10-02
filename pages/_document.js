import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const { html, head, errorHtml, chunks } = renderPage();
		const styles = flush();
		return { html, head, errorHtml, chunks, styles };
	}

	render() {
		return (
			<html>
				<Head>
					<meta name="viewport" content="width=device-width" />
					<link rel="stylesheet" href="/static/styles.css" />
					<link rel="stylesheet" href="/static/fontawesome/css/all.min.css" />
				</Head>
				<body className="app-body">
				{ this.props.customValue }
				<Main />
				<NextScript />
				</body>
			</html>
		)
	}
}
