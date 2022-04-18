import IndexPage from '.';

describe('index page', () => {
  it('renders page', () => {
    expect.assertions(1);

    expect(IndexPage()).toMatchSnapshot();
  });
});
