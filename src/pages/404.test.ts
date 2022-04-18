import { useStaticQuery, StaticQuery } from 'gatsby';

import NotFoundPage from './404';

describe('not found page', () => {
  beforeEach(() => {
    (StaticQuery as jest.Mock).mockImplementationOnce(({ render }) => render({}));
    (useStaticQuery as jest.Mock).mockReturnValue({
      allMarkdownRemark: {
        nodes: [
          {
            fields: { slug: 'this-page' },
            frontmatter: { title: 'A Page #1' },
          },
          {
            fields: { slug: 'this-page' },
            frontmatter: { title: 'A Page #2' },
          },
        ],
      },
    });
  });

  it('renders 404 page', () => {
    expect.assertions(1);

    expect(NotFoundPage()).toMatchSnapshot();
  });
});
