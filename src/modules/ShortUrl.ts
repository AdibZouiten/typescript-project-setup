export class ShortUrl {
  constructor() {}
  render(url: any) {
    const h3 = document.querySelector('.result') as HTMLElement;
    h3.textContent = url.shortUrl;
  }
}
