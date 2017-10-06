## Flexbox Demos

### 01 Setting up the environment

### Steps

### 1. Create the html. Create it inside body.

```html
<div class="flex-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</div>
```

```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.flex-container div {
    height: 150px;
    padding-top: 45px;
    color: white;
    font-weight: bold;
    font-size: 2.2em;
    text-align: center;
}

.flex-container div:first-child {
    background-color: red;
}

.flex-container div:nth-child(2) {
    background-color: yellow;
}

.flex-container div:nth-child(3) {
    background-color: blue;
}

.flex-container div:nth-child(4) {
    background-color: brown;
}

.flex-container div:nth-child(5) {
    background-color: green;
}
.flex-container div:last-child {
    background-color: pink;
}
```

* Show the final result.