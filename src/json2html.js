// pretty print json inside html
JSON.toHTML = (json, roll) => {
    if (!roll) {
        let res = `<div class="json indent">${JSON.toHTML(json, true)}</div>`;
        return Array.isArray(json) ? `[${res}]` : `{${res}}`;
    }
    if (Array.isArray(json)) {
        return json.map((e, i) => {
            const comma = i < json.length - 1 ? ',' : '';
            let value = JSON.toHTML(e, true);
            if (typeof e === 'object') {
                value = `{${value}}`;
            }
            return `<div class="json indent">${value}${comma}</div>`;
        }).join('');
    }
    else if (json == null) {
        return `<span class="json">null</span>`;
    }
    else if (typeof json === 'object') {
        return Object.entries(json).map(([key, value]) => {
            let valueStr = JSON.toHTML(value, true);
            if (Array.isArray(value)) {
                valueStr = `[${valueStr}]`;
            }
            else if (value == null) {
                valueStr = `null`;
            }
            else if (typeof value === 'object') {
                valueStr = `{${valueStr}}`;
            }

            const comma = Object.keys(json).slice(-1)[0] != key ? ',' : '';
            return `<div class="json indent"><span class="json key">"${key}"</span>: ${valueStr}${comma}</div>`;
        }).join('');
    }
    else {
        const type = typeof json === 'string' ? 'string' : 'number';
        if (type == 'string') {
            json = `"${json}"`;
        }
        return `<span class="json ${type}">${json}</span>`;
    }
};

window.loadJSONTheme = themes => {
    if (!Array.isArray(themes)){
        themes = [ themes ];
    }

    themes.forEach(async t => {
        const theme = document.createElement('style');
        theme.textContent = await (await fetch(`https://cdn.jsdelivr.net/gh/werlang/json2html/src/themes/${t}.min.css`)).text();
        document.head.insertAdjacentElement('beforeend', theme);
    });
};

(async () => {
    const style = document.createElement('style');
    style.textContent = await (await fetch('https://cdn.jsdelivr.net/gh/werlang/json2html/src/json2html.min.css')).text();
    document.head.insertAdjacentElement('beforeend', style);
})();