## Flexbox Demos

### 02 Playing with Flex (container), grow and order. 

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

### 2. Let's convert our container into a flex container.

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
+    display: flex;
}
```

* By default displays all child elements in a row instead of a column.

### 3. Now let's do something to make that the row get all the width.

```diff css
.flex-container div {
    height: 150px;
    padding-top: 45px;
    color: white;
    font-weight: bold;
    font-size: 2.2em;
    text-align: center;
+    flex-grow: 1;
}
```

* Basically what flex-grow does is simply allows to specify in terms of proportionality, dependeing in how many you have, it will take all the child elements and them all an equal ratio of one to each other.

### 4. Now what if we wan to give more width to a specific child.

```diff css
.flex-container div:nth-child(3) {
    background-color: blue;
+    flex-grow: 2;
}
```

* We can spcify a different ratio to one of its childs.
* Now the third element is double comapare with the other elements.

### 5. It adjust the space between all the flex items. 

```diff css
.flex-container div:nth-child(5) {
    background-color: blue;
+    flex-grow: 5;
}
```
* We can watch how it calculates the space for each item.

### 6. The next property that we are going to use is order. Order, allows us to specify the order in which the items are displayed in the Flexbox container.

* By default the order is dictated by the html.

```diff css
.flex-container div:first-child {
    background-color: red;
+    order: 2;
}
``` 
* What will happen? The item goes to the top of right, it was what you were expecting? This is because the rest of elements, have a minor order (0 by default), so the red element goes to the last position.

### 7. Let's apply order to all elements and see waht happens

```diff css
.flex-container div:first-child {
    background-color: red;
    order: 2;
}

.flex-container div:nth-child(2) {
    background-color: yellow;
+    order: 1;
}

.flex-container div:nth-child(3) {
    background-color: blue;
    flex-grow: 2;
+    order: 5;
}

.flex-container div:nth-child(4) {
    background-color: brown;
+    order: 6;
}

.flex-container div:nth-child(5) {
    background-color: green;
    flex-grow: 5;
+    order: 3;
}
.flex-container div:last-child {
    background-color: pink;
+    order: 4;
}
```
