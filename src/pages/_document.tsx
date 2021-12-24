import Document, { DocumentContext } from "next/document";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }
}

export default MyDocument;
