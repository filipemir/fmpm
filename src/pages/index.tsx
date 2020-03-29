import React from 'react';

import Layout from 'components/Layout';
import ComponentA from 'components/ComponentA';

export default function HomePage() {
    return (
        <Layout>
            <ComponentA isWelcome={true} />
        </Layout>
    );
}
