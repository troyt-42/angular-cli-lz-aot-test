import { AngularCliLzAotTestPage } from './app.po';

describe('angular-cli-lz-aot-test App', function() {
  let page: AngularCliLzAotTestPage;

  beforeEach(() => {
    page = new AngularCliLzAotTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
