import { RivalRocketsPage } from './app.po';

describe('rivalrockets App', () => {
  let page: RivalRocketsPage;

  beforeEach(() => {
    page = new RivalRocketsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
