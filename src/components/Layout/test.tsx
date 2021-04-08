import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';

import Layout from './index';

describe('Layout', () => {
  const props = {
    children: 'test',
    description: 'test',
    title: 'test',
  };

  beforeEach(() => {
    (StaticQuery as jest.Mock).mockImplementationOnce(
      ({ render }) => render(props),
    );
    (useStaticQuery as jest.Mock).mockReturnValue({ site: { siteMetadata: {} } });
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Layout>
          <h1>Test</h1>
        </Layout>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
