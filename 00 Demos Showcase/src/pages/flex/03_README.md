## Flexbox Demos

### 03 Controlling flex items

### Steps

### 1. We start from this html and this css.

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
    display: flex;
}

.flex-container div {
    height: 150px;
    padding-top: 45px;
    color: white;
    font-weight: bold;
    font-size: 2.2em;
    text-align: center;
    flex-grow: 1;
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

### 2. Now we are going to use flex-direction

* This property allows us to specify four different values that control how the items are laid out, both horizontally and vertically: 
    *row
    *row-reverse
    *column
    *column-reverse

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
+    flex-direction: column;
}
```
* By default it's row.

* Remember that this property has to be set on the flex conatiner.

### 3. Now we are going to use flex-wrap.

* This property allows us to control if the flexbox items stay on the same line, or in a row rather, or wrap to create multiple rows based on the viewport.

* In order to get this working we have to specify a width on the flex items.

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
-    flex-direction: column;
}

.flex-container div {
+    width: 100px;
    height: 150px;
    padding-top: 45px;
    color: white;
    font-weight: bold;
    font-size: 2.2em;
    text-align: center;
    flex-grow: 1;
}
```

* Everything stills working the same way, let's add flex-wrap: no-warp. To the container.

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
+    flex-wrap: nowrap;
}
```
* This is the default behavior.

### 4. Now we can change it to flex-wrap: wrap.

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
-    flex-wrap: nowrap;
+    flex-wrap: wrap;
}
```
* Now when the width of the div's (flex items) doesn't fix with the viewport, the content jumps into a new row.

* We can use as well wrap-reverse

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
-    flex-wrap: wrap;
+    flex-wrap: wrap-reverse;
}
```