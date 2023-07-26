import { stringify } from "querystring";
import { LinkData } from "./modules/LinkData.js";
import { ShortUrl } from "./modules/ShortUrl.js";

const form = document.querySelector('.inputs') as HTMLFormElement;
const input = document.querySelector('#url') as HTMLInputElement;



form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
     
    
    const doc = new LinkData(input.value)
    doc.hashUrl()

    const resultURL = new ShortUrl()

    console.log(doc);
    
    
    resultURL.render(doc)

    


})