import { RivalRocketsPage } from './app.po';

describe('rivalrockets App', () => {
  let page: RivalRocketsPage;

  beforeEach(() => {
    page = new RivalRocketsPage();
  });

  it('should display "Benchmarks"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Benchmarks');
  });
});
