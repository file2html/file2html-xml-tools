"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var htmlparser2_1 = require("htmlparser2");
function parseXML(content, handler, options) {
    var parser = new htmlparser2_1.Parser(handler, Object.assign({
        recognizeSelfClosing: true,
        lowerCaseTags: false,
        lowerCaseAttributeNames: false
    }, options));
    parser.write(content);
    parser.end();
}
exports.parseXML = parseXML;
