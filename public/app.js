import { LinkData } from "./modules/LinkData.js";
import { ShortUrl } from "./modules/ShortUrl.js";
const form = document.querySelector('.inputs');
const input = document.querySelector('#url');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const doc = new LinkData(input.value);
    doc.hashUrl();
    const resultURL = new ShortUrl();
    console.log(doc);
    resultURL.render(doc);
});
