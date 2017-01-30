import { HelixPage } from './app.po';

describe('helix App', function() {
  let page: HelixPage;

  beforeEach(() => {
    page = new HelixPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('helix works!');
  });
});
