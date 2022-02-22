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
    
    document.body.append(document.createJSONElement(obj, 'default_dark'));
    document.body.append(document.createJSONElement(obj, 'default_light'));
})();