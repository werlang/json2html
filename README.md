# json2html
Convert your JSON object into a pretty print and color highlighted HTML version. 

## Setup

You will need to import ```/src/json2html.js``` to your site. I will demonstrate using [jsdelivr](https://www.jsdelivr.com/) CDN.

```
<script type='text/javascript' src='https://cdn.jsdelivr.net/gh/werlang/json2html/src/json2html.min.js' async></script>
```

### ES6: 

```
await import('https://cdn.jsdelivr.net/gh/werlang/json2html/src/json2html.min.js');
```

## Usage

Convert a JS object to a JSON string structured into HTML elements:

```
const obj = {
    foo: 'bar',
    num: 1,
    array: [
        { name: 'obj1', value: 1 },
        { name: 'obj2', value: 10 },
        { name: 'obj3', value: 100 },
    ]
};

const code = document.createJSONElement(obj);
document.body.append(code);
```

![image](https://user-images.githubusercontent.com/19828711/155214677-51efcd35-3464-4609-8715-64629f8ea229.png)

## **document.createJSONElement( object, theme ): HTMLElement**

createJSONElement returns an ```HTMLElement```. It has two arguments:

* ```object```: A JS object you wish to create the HTML tags from.
* ```theme```: The theme you want to load for that element. The default value is ```default_dark```. We also provide ```default_light``` for you to use.

## **JSON.toHTML( object ): string**

In case you want a raw JSON ```string```, you can use JSON.toHTML. You only need to provide the ```object``` to be converted.


## Themes

We provide two base themes, one light and one dark, but you can easily add or change themes.

To add a new theme, just create a ```src/themes/YOUR_THEME_NAME.css``` file. Your themes must have the following structure:

```
.json-container.theme-YOUR_THEME_NAME {
    --json-container-background: #000000;
    --json-container-text: #000000;
    --json-key: #000000;
    --json-string: #000000;
    --json-number: #000000;
    --json-indent: #000000;
}
```
