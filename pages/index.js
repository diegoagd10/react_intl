import React from 'react';
import { FormattedMessage, FormattedNumber, defineMessages } from 'react-intl';

import Layout from '../source/components/Layout';
import PageWithIntl from '../source/components/PageWithIntl';

function Home(props) {
	return (
		<Layout title='index.title'>
			<p>
				<FormattedMessage id='body' />
			</p>
		</Layout>
	);
}

export default PageWithIntl(Home);