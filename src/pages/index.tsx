import React from 'react';

import Layout from 'components/Layout';
import Span from 'components/Span';

export default function HomePage() {
    return (
        <Layout>
            <span>
                hiz
                <Span isWelcome={true} />
            </span>
        </Layout>
    );
}
