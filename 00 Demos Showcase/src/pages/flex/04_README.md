## Flexbox Demos

### 04 Reviewing more properties

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
    flex-wrap: wrap;
}

.flex-container div {
    width: 100px;
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

### 2. We start by removing the flex-grow property. 

```diff css
.flex-container div {
    width: 100px;
    height: 150px;
    padding-top: 45px;
    color: white;
    font-weight: bold;
    font-size: 2.2em;
    text-align: center;
-    flex-grow: 1;
}
```
* Each item get the size that we are specifying (100px).
* Because flex-wrap: warp, still being applied, if we compress the width, it wraps.

### 3. The next property that we are going to experiment with is justify-content.

* With this property you can control the position of the flexbox items as a whole in relation to the flexbox container.

* What that means? If we look right now we can watch that by default they are left justified.

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
+    justify-content: flex-end;
}
```

* Now the flex items are justified to the right.
* flex-start is the deafult behavior.
* We also have center.

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
-    justify-content: flex-end;
+    justify-content: center;
}
```
* This one obviously centers the flex item.

* There is as well space-between

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
-    justify-content: center;
+    justify-content: space-between;
}
```

* This one will apply the remaining space between the flexbox items.
* sapace-around, is very similar, but take into a count the borders of the window, leaving space with them as well. 

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
-    justify-content: space-between;
+    justify-content: space-around;
}
```

### 4.The next property that we are going to experiment with is align-items.

* First let's remove justify-content. Add a fixed height to our flex container, and align-items: flex-start.

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
-    justify-content: space-around;
+    height: 300px;
+    align-items: flex-start;
}
```

* Now if we refresh it seems that nothing it's going on here. To notice better what it's going here let's add a background to our flex container.

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 300px;
    align-items: flex-start;
+   background-color: rgba(0, 0, 0, 0.4);    
}
```

* And now change align-items to flex-end.

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 300px;
-    align-items: flex-start;
+    align-items: flex-end;
    background-color: rgba(0, 0, 0, 0.4);    
}
```

* flex-start, when comes to align items, refers to the top vertically of container.
* flex-end, instead to the bottom.
* Now let's change to center

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 300px;
-    align-items: flex-end;
+    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);    
}
```

* Now items are align to the middle of container.

### 5. Let's see how works align-items, with items that haven't height. 

```diff css
.flex-container div {
    width: 100px;
-    height: 150px;
    padding-top: 45px;
    color: white;
    font-weight: bold;
    font-size: 2.2em;
    text-align: center;
}

div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 300px;
-    align-items: center;
+    align-items: stretch;
    background-color: rgba(0, 0, 0, 0.4);    
}
```

* Now takes all the available height. That is the default behavior???
* Now let's change it to baseline value.

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 300px;
-    align-items: stretch;
+    align-items: baseline;
    background-color: rgba(0, 0, 0, 0.4);    
}
```

* The content is to be the baseline, so when we apply this property with this value, all the items has the same baseline, that way it's align vertically. If we change the font-size of one of the flex-items, we can watch how this change.

### 6. The final property to experiment is alig-self.

* This property allows us to override align-items, so if you want to control a specific item it'll allow us to do that and change it.

```diff css
div.flex-container {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    height: 300px;
-    align-items: baseline;
+    align-items: stretch;
    background-color: rgba(0, 0, 0, 0.4);
}

.flex-container div:nth-child(3) {
    background-color: blue;
+    align-self: flex-end;
}
```

* Align self can have any of the values of align-items.