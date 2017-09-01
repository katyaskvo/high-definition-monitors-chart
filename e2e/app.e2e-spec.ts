import { HighKMonitorsPage } from './app.po';

describe('high-k-monitors App', () => {
  let page: HighKMonitorsPage;

  beforeEach(() => {
    page = new HighKMonitorsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
