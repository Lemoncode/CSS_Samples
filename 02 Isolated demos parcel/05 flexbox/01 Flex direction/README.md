# In this demo we are going to play with flex container and flex direction.

* We start from this `html`

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

* And this `css`

```css
body {
    font-family: sans-serif
}

div.flex-container {
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

## If we run the application we will see a list of divs stacked one over each other.

### 1. Lets use display flex.

```diff
div.flex-container {
    margin: 0;
    padding: 0;
+   display: flex; 
}
```

* Flex will leave this set of divs a as a `block level continer`, and will affect the layout of its children.

### 2. What if we change to inline-flex?

```diff
div.flex-container {
    margin: 0;
    padding: 0;
-   display: flex; 
+   display: inline-flex; 
}
```

* If I wanted the container to be an inline element, but also wanted the contents to be displayed using flexbox, I could change display to inline flex.

* `flex` makes the container a block element, breaking the horizontal flow with its siblings, and `inline-flex`, like an image tag, will not.

* Notice that the elements are displayed horizontally. This is beacuse flex containers have a property called `flex-direction`, which defaults to row.

### 3. We can change again to vertically layout.

```diff
div.flex-container {
    margin: 0;
    padding: 0;
    display: flex;
+   flex-direction: column;
}
```

* Also we can play with this property to inverse the order of the elements. 

```diff
div.flex-container {
    margin: 0;
    padding: 0;
    display: flex;
-   flex-direction: column;
+   flex-direction: column-reverse;
}
```
* We  have  the same property in `row way`

```diff
div.flex-container {
    margin: 0;
    padding: 0;
    display: flex;
-   flex-direction: column-reverse;
+   flex-direction: row-reverse;
}
```
* In this case affects as well where the elements start its positioning. 