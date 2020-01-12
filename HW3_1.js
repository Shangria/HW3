// Сделайте декларативную JSON-структуру для тэгов выше, в которой:
//     каждый тэг будет объектом
// имя тэга будет полем tagName
// вложенные тэги будут в поле subTags
// текст в тэге будет в поле text
// набор аттрибутов тэга будет в поле attrs.

//
// <body>
// <div>
// <span>Enter a data please:</span><br/>
// <input type='text' id='name'>
//     <input type='text' id='surname'>
//     </div>
//     <div>
//     <button id='ok'>OK</button>
//     <button id='cancel'>Cancel</button>
//     </div>
//     </body>


// Сделайте декларативную JSON-структуру для тэгов выше, в которой:
//     каждый тэг будет объектом
// имя тэга будет полем tagName
// вложенные тэги будут в поле subTags
// текст в тэге будет в поле text
// набор аттрибутов тэга будет в поле attrs.


var body = {
    tagName1: 'body',
    subTags1:
        {
            tagName_1_1: 'div',
            subTags1_1: [
                {
                    tagName_1_1_1: 'span',
                    text: 'Enter a data please:',
                    tagName1_1_2: 'br'
                },
                {
                    tagName1_1_3: 'input',
                    attrs1_1: {
                        type: 'text'
                    },
                    attrs1_2: {
                        id: 'name'
                    }
                },
                {
                    tagName_1_1_4: 'input',
                    attrs1_3: {
                        type: 'text'
                    },
                    attrs1_4: {
                        id: 'surname'
                    }
                }],
            tagName_2_1: 'div',
            subTags_2_1: [
                {
                    tagName2_1_1: 'button',
                    attrs2_1: {
                        id: 'ok'
                    },
                    text1: 'OK'
                },
                {
                    tagName2_1_2: 'button',
                    attrs2_2: {
                        id: 'cancel'
                    },
                    text2: 'Cancel'
                }]
        }
};
