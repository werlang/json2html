const obj = {
    foo: 'bar',
    num: 1,
    array: [
        { name: 'obj1', value: 1 },
        { name: 'obj2', value: 10 },
        { name: 'obj3', value: 100 },
    ]
};

(async () => {
    await import('https://cdn.jsdelivr.net/gh/werlang/json2html/src/json2html.min.js');
    
    const code = JSON.toHTML(obj);
    const JSONElement1 = document.createJSONElement(code, 'default_dark');
    const JSONElement2 = document.createJSONElement(code, 'default_light');

    document.body.insertAdjacentElement('beforeend', JSONElement1);
    document.body.insertAdjacentElement('beforeend', JSONElement2);
})();