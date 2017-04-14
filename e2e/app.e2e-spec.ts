import { Angular2ArchitecturePage } from './app.po';

describe('angular2-architecture App', () => {
  let page: Angular2ArchitecturePage;

  beforeEach(() => {
    page = new Angular2ArchitecturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
