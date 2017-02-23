import React from 'react';
import { FormattedMessage, FormattedNumber, defineMessages } from 'react-intl';

import Layout from '../source/components/Layout';
import PageWithIntl from '../source/components/PageWithIntl';

function About(props) {
	return (
		<Layout title='about.title'>
			<p>
				<FormattedMessage id='body' />
			</p>
		</Layout>
	);
}

export default PageWithIntl(About);