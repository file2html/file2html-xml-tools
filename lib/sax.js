"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var htmlparser2_1 = require("htmlparser2");
function parseXML(content, handler) {
    var parser = new htmlparser2_1.Parser(handler, {
        recognizeSelfClosing: true,
        lowerCaseTags: false,
        lowerCaseAttributeNames: false
    });
    parser.write(content);
    parser.end();
}
exports.parseXML = parseXML;
