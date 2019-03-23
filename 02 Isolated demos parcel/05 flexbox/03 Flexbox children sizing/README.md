# In this demo we are going to play with flex children sizing.

* We start from this `html`

```html
<div class="flex-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```

* And this `css`

```css
body {
    font-family: sans-serif;
    margin: 0;
    color: #ffaa33;
}

div.flex-container {
    margin: 0;
    padding: 0;
}

.flex-container div {
    
}

.flex-container div:first-child {
    background-color: rgb(245, 226, 229);
}

.flex-container div:nth-child(2) {
    background-color: rgb(240, 235, 235);
}

.flex-container div:nth-child(3) {
    background-color: rgb(205, 223, 247);
}


```

## If we run the application we will see a list of divs stacked one over each other.

*  Three properties to handle the resizing of flexbox children along the flex-direction, `flex-grow`, `flex-shrink`, and `flex-basis`, which are all applied to individual flex children and not to the flex container. 

* `flex-basis`, you can define the optimal size of a child along the `flex-direction`. Lets explain what that means with an example.

### 1. In this example, we have three divs with different background colors to make them distinguishable. We can set display to flex on the parent container.

```diff
div.flex-container {
    margin: 0;
    padding: 0;
+   display: flex;
}
```

* Notice that even though divs are block tags that usually have a default width set to 100%, they shrink down to the content width here. 

### 2. If we set a width on the first child to 200 pixels, it will respect that width.

```diff
.flex-container div:first-child {
    background-color: rgb(245, 226, 229);
+   width: 200px;
}
```

### 3. But if we set the `flex-basis` to 100px, it will override the set width, but it will not exceed the max width or go under the min width.

```diff
.flex-container div:first-child {
    background-color: rgb(245, 226, 229);
    width: 200px;
+   flex-basis: 100px;
}
```

* If `flex-basis` is not set, it defaults to auto, which means look at the dimension corresponding to the flex-direction.

* Since our flex-direction here is row, the corresponding dimension is width. If width is not set, it defaults to the content width of the element, which in this case is just the size of the word.

* Because of the complexity this hierarchy can introduce, is recommend sticking with flex-basis, not setting a width for all flexbox children in row flex-direction or height for all column flex-direction children. 

* It makes it easier to know where your dimension is being set. Flex-basis is the ideal size for the element along the flex-direction if it has enough room.

### 4. To figure out what happens when we have a surplus or a deficit of space, we need to understand `flex-grow` and `flex-shrink`.

* To make flex-grow and shrink easier to see, we are going to give each of these children a different flex-basis. First to 120, the second to 40 pixels, and the third to 100 pixels.

```diff
.flex-container div:first-child {
    background-color: rgb(245, 226, 229);
-   width: 200px;
-   flex-basis: 100px;
+   flex-basis: 120px;

}

.flex-container div:nth-child(2) {
    background-color: rgb(240, 235, 235);
+   flex-basis: 40px; 
}

.flex-container div:nth-child(3) {
    background-color: rgb(205, 223, 247);
+   flex-basis: 100px;    
}
```

* We have extra space in the flexbox not being used by the children.

### 5. The `flex-grow` property dictates how the space should be divied up  by the children.

* `flex-grow` defaults to zero, which means none of these children will grow beyond their `flex-basis`.

```diff
.flex-container div:first-child {
    background-color: rgb(245, 226, 229);
    flex-basis: 120px;
+   flex-grow: 1;
}

.flex-container div:nth-child(2) {
    background-color: rgb(240, 235, 235);
    flex-basis: 40px;
}

.flex-container div:nth-child(3) {
    background-color: rgb(205, 223, 247);
    flex-basis: 100px;
}
```

* If we set the `flex-grow` of the first child to one, it will use up all the extra space without affecting the width of the other children.

### 6. This `1` does not have a unit. It is a proportion. It is in this case one to zero, 100 percent.

* It is using 100 percent of the extra space. If we change the `flex-grow` on the second child to two, now the first child is getting one third of the extra space, and the second child is getting two thirds.

```diff
.flex-container div:first-child {
    background-color: rgb(245, 226, 229);
    flex-basis: 120px;
    flex-grow: 1;
}

.flex-container div:nth-child(2) {
    background-color: rgb(240, 235, 235);
    flex-basis: 40px;
+   flex-grow: 2;
}

.flex-container div:nth-child(3) {
    background-color: rgb(205, 223, 247);
    flex-basis: 100px;
}
```

### 7. If I set the flex-grow of the third child to three, now the first child gets one sixth of the extra space, the second child gets two sixths or one third, and the third child gets three sixths or one half of the extra space.

```diff
.flex-container div:first-child {
    background-color: rgb(245, 226, 229);
    flex-basis: 120px;
    flex-grow: 1;
}

.flex-container div:nth-child(2) {
    background-color: rgb(240, 235, 235);
    flex-basis: 40px;
    flex-grow: 2;
}

.flex-container div:nth-child(3) {
    background-color: rgb(205, 223, 247);
    flex-basis: 100px;
+   flex-grow: 3;
}
```

### 8. If instead of divying up the extra space we want to divy up the total space, we could set the `flex-basis` on all the children to zero, which would make the total space the same as the extra space since none of the children are taking up any space. It's the same to back to auto, get the width of inner content.

```diff
.flex-container div {
+   flex-basis: 0;
}

.flex-container div:first-child {
    background-color: rgb(245, 226, 229);
-   flex-basis: 120px;
-   flex-grow: 1;
}

.flex-container div:nth-child(2) {
    background-color: rgb(240, 235, 235);
-   flex-basis: 40px;
-   flex-grow: 2;
}

.flex-container div:nth-child(3) {
    background-color: rgb(205, 223, 247);
-   flex-basis: 100px;
-   flex-grow: 3;
}
```

* `flex-grow` dictates how the extra space beyond the combined flex-basis should be divided up.

### 9. `flex-shrink` defines what should happen when there's a deficit in the combined flex-basis values, meaning if the combined flex-basis is greater than the allowed space, how did these elements shrink?

```diff
.flex-container div {
-   flex-basis: 0;
+   flex-basis: 200;
}

.flex-container div:first-child {
    background-color: rgb(245, 226, 229);
}

.flex-container div:nth-child(2) {
    background-color: rgb(240, 235, 235);
}

.flex-container div:nth-child(3) {
    background-color: rgb(205, 223, 247);
}
```

* Even though they are too big, they're all losing some width because the default width of `flex-shrink` is set to one, meaning all children shrink the same amount from their flex-basis values. 

* If we set the flex-shrink of one of the children to two, it will shrink twice as much as the other children.

```diff
.flex-container div {
    flex-basis: 200px;
}

.flex-container div:first-child {
    background-color: rgb(245, 226, 229);
}

.flex-container div:nth-child(2) {
    background-color: rgb(240, 235, 235);
+   flex-shrink: 2;
}

.flex-container div:nth-child(3) {
    background-color: rgb(205, 223, 247);
}
```

*  We can set it to 10 or even 100, but notice at some point it does not go past the width of the content itself if the other children have non-content width they can spare.

```diff
.flex-container div {
    flex-basis: 200px;
}

.flex-container div:first-child {
    background-color: rgb(245, 226, 229);
}

.flex-container div:nth-child(2) {
    background-color: rgb(240, 235, 235);
-   flex-shrink: 2;
+   flex-shrink: 100; /*Make the up gradually*/
}

.flex-container div:nth-child(3) {
    background-color: rgb(205, 223, 247);
}
```

* If we don't want a child to shrink it all, we can set the flex-shrink to zero. In fact, if we set the flex-shrink to zero on all of them, they will cause the container width to overflow.

```diff
.flex-container div {
    flex-basis: 200px;
+   flex-shrink: 0;
}

.flex-container div:first-child {
    background-color: rgb(245, 226, 229);
}

.flex-container div:nth-child(2) {
    background-color: rgb(240, 235, 235);
-   flex-shrink: 100;
}

.flex-container div:nth-child(3) {
    background-color: rgb(205, 223, 247);
}
```