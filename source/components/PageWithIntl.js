import React, { Component } from 'react';
import { IntlProvider, addLocaleData, injectIntl } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import applicationMessages from '../messages.json';

// Register React Intl's locale data for the user's locale in the browser. This 
//only happens once, on initial page load in the browser.
if (typeof window !== 'undefined') {
	addLocaleData([...en, ...es]);
}

function PageWithIntl(page) {

	const IntlPage = injectIntl(page);

	class PageWithIntlComponent extends Component {

		static async getInitialProps(context) {

			let props;
			let locale = 'es';

			if (typeof page.getInitialProps === 'function') {
				props = await page.getInitialProps(context);
			}

			const request = context.req || context.xhr;

			if (request) {
				locale = request.headers['accept-language'].indexOf('es') >= 0 ? 'es' : 'en';
			} else {
				console.log('isClient');
				locale = navigator.languages.indexOf('es') > 0 ? 'es' : 'en';
			}

			const now = Date.now();

			return {
				...props,
				now,
				locale,
				messages: applicationMessages[locale],
			};
		}

		render() {
			const {
				now,
				locale,
				messages,
				...props,
			} = this.props;

			return (
				<IntlProvider locale={locale} messages={messages} initialNow={now}>
					<IntlPage {...props} />
				</IntlProvider>
			);
		}
	}

	return PageWithIntlComponent;
}

export default PageWithIntl;