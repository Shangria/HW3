// Сделайте декларативную JSON-структуру для тэгов выше, в которой:
//     каждый тэг будет объектом
// имя тэга будет полем tagName
// вложенные тэги будут в поле subTags
// текст в тэге будет в поле text
// набор аттрибутов тэга будет в поле attrs.

var body = {
    tagName: 'body',
    attrs: {},
    text: null,
    subTags: [
        {
            tagName: 'div',
            attrs: {},
            text: null,
            subTags: [
                {
                    tagName: 'span',
                    text: 'Enter a data please:',
                    subTags: [],
                    attrs: {}
                },
                {
                    tagName: 'br',
                    attrs: {},
                    text: null,
                    subTags: []
                },
                {
                    tagName: 'input',
                    text: null,
                    subTags: [],
                    attrs: {
                        type: 'text',
                        id: 'name'
                    }
                },
                {
                    tagName: 'input',
                    text: null,
                    subTags: [],
                    attrs: {
                        type: 'text',
                        id: 'surname'
                    }
                }
            ]
        },
        {
            tagName: 'div',
            attrs: {},
            text: null,
            subTags: [
                {
                    tagName: 'button',
                    text: 'OK',
                    subTags: [],
                    attrs: {
                        id: 'ok'
                    }
                },
                {
                    tagName: 'button',
                    text: 'Cancel',
                    subTags: [],
                    attrs: {
                        id: 'cancel'
                    }
                }
            ]
        }
    ]
};
alert('Выведите значения текста во второй кнопке - ' + ' ' + ' ' + body.subTags[1].subTags[1].text);
alert('Выведите значение атрибута id во втором input- ' + ' ' + ' ' + body.subTags[0].subTags[3].attrs.id);