import {Parser, Handler} from 'htmlparser2';

export function parseXML (content: string, handler: Handler) {
    const parser: Parser = new Parser(handler, {
        recognizeSelfClosing: true,
        lowerCaseTags: false,
        lowerCaseAttributeNames: false
    });

    parser.write(content);
    parser.end();
}