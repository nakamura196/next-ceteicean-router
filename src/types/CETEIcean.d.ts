declare module "CETEIcean" {
  export default class CETEI {
    makeHTML5(xml: string): Promise<Document>;
    getHTML5(xml: string): Promise<Document>;
    addBehaviors(behaviors: {
      tei: {
        [key: string]: (elt: Element) => Element;
      };
    }): void;
  }
}
