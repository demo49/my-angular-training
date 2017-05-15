import { AngularFullCoursePage } from './app.po';

describe('angular-full-course App', () => {
  let page: AngularFullCoursePage;

  beforeEach(() => {
    page = new AngularFullCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
