import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Layout from './index';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create((<Layout><h1>Test</h1></Layout>))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
