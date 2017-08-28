import {Parser, Handler, Options} from 'htmlparser2';

export function parseXML (content: string, handler: Handler, options?: Options): void {
    const parser: Parser = new Parser(handler, Object.assign({
        recognizeSelfClosing: true,
        lowerCaseTags: false,
        lowerCaseAttributeNames: false
    }, options));

    parser.write(content);
    parser.end();
}