export class LinkData {
  private url: string;
  private shortUrl: string = "";

  constructor(url: string) {
    this.url = url;
  }

  public hashUrl(): any {
    return (this.shortUrl = this.url);
  }
}
