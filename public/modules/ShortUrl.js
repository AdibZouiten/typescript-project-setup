export class ShortUrl {
    constructor() { }
    render(url) {
        const h3 = document.querySelector('.result');
        h3.textContent = url.shortUrl;
    }
}
