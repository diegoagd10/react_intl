import React from 'react';
import Head from 'next/head';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';

function Layout(props) {
	return (
		<main>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1'/>
				<title>{ props.intl.formatMessage({ id: props.title}) }</title>
			</Head>
			<div>
				<h1><FormattedMessage id={props.title} /></h1>
				{props.children}
			</div>
		</main>
	);
}

export default injectIntl(Layout);