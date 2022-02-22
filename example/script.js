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
    await import('https://raw.githubusercontent.com/werlang/json2html/main/src/json2html.js');
    
    const code = JSON.toHTML(obj);
    loadJSONTheme(['default_dark', 'default_light']);

    document.querySelectorAll('.json-container')[0].innerHTML = code;
    document.querySelectorAll('.json-container')[1].innerHTML = code;
})();