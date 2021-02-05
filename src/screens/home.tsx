import React from 'react';

import Layout from '../components/layout';
import DefaultText from '../components/common/default-text';
import DefaultHeading from '../components/common/default-heading';

const HomeScreen: React.FC = () => (
  <Layout>
    <DefaultHeading>Welcome to the Playground!</DefaultHeading>
    <DefaultText>
      Try out some of the tools while you&apos;re here or login to take
      advantage of even more useful finance tools!
    </DefaultText>
  </Layout>
);

export default HomeScreen;
