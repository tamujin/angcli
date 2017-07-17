import { AngMaterialPage } from './app.po';

describe('ang-material App', () => {
  let page: AngMaterialPage;

  beforeEach(() => {
    page = new AngMaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
