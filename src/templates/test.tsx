import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';

import MainTemplate from './main';

describe('main content template', () => {
  const props = {
    data: {
      markdownRemark: {
        id: 'test-123',
        html: '<p>test</p>',
        frontmatter: {
          title: 'Test Markdown Page',
          description: 'Test Markdown Page Description',
        },
      },
    },
  };

  beforeEach(() => {
    (StaticQuery as jest.Mock).mockImplementationOnce(
      ({ render }) => render(props),
    );
    (useStaticQuery as jest.Mock).mockReturnValue({ site: { siteMetadata: {} } });
  });

  it('renders with correct data', () => {
    expect.assertions(1);

    const tree = renderer.create(<MainTemplate data={props.data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
