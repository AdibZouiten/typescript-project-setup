export class LinkData {
    constructor(url) {
        this.shortUrl = "";
        this.url = url;
    }
    hashUrl() {
        return (this.shortUrl = this.url);
    }
}
