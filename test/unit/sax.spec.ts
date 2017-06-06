import {parseXML} from '../../src/sax';

describe('SAX', () => {
    describe('parseXML()', () => {
        it('should parse XML structure', () => {
            const onOpenTag: jest.Mock<any> = jest.fn();
            const onCloseTag: jest.Mock<any> = jest.fn();
            const onText: jest.Mock<any> = jest.fn();

            parseXML(`
                <w:r w:rsidRPr="00386659">
                    <w:rPr>
                        <w:color w:val="FFFFFF" w:themeColor="background1"/>
                        <w:shd w:val="clear" w:color="auto" w:fill="000000" w:themeFill="text1"/>
                    </w:rPr>
                    <w:t>inverse video</w:t>
                </w:r>
            `, {
                onopentag: onOpenTag,
                onclosetag: onCloseTag,
                ontext: onText
            });

            expect(onOpenTag.mock.calls).toEqual([
                ['w:r', {'w:rsidRPr': '00386659'}],
                ['w:rPr', {}],
                ['w:color', {'w:val': 'FFFFFF', 'w:themeColor': 'background1'}],
                ['w:shd', {'w:val': 'clear', 'w:color': 'auto', 'w:fill': '000000', 'w:themeFill': 'text1'}],
                ['w:t', {}]
            ]);
            expect(onCloseTag.mock.calls).toEqual([
                ['w:color'],
                ['w:shd'],
                ['w:rPr'],
                ['w:t'],
                ['w:r']
            ]);
            expect(onText.mock.calls[6]).toEqual(['inverse video']);
        });
    });
});