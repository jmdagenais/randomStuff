export class HelixPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('helix-app h1')).getText();
  }
}
