# In this demo we are going to play with flexbox children alignment

* We start from this `html`

```html
<body>
    <div class="flex-container">
        <div class="section">
            <header>
                <h1>1</h1>
            </header>
            <p>Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </div>
        <div class="section">
            <header>
                <h1>2</h1>
            </header>
            <p>Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod.</p>
        </div>
        <div class="section">
            <header>
                <h1>3</h1>
            </header>
            <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        </div>
    </div>
</body>
```

* And this `css`

```css
:root { /*1*/
    height: 100%;
}

body { /*2*/
    font-family: sans-serif;
    height: 100%;
    margin: 0;
}


div.flex-container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

h1 {
    font-weight: 500;
    margin: 0 0 5px 0;
}

.section {
    box-sizing: border-box;
    margin: 5px;
    color: white;
}

.flex-container div:first-child {
    background-color: lightpink;
}

.flex-container div:nth-child(2) {
    background-color: lightskyblue;
}

.flex-container div:nth-child(3) {
    background-color: lightgreen;
}

```
1. We can style from the root element `html` tag. This way we make that get all the height of window heigh.

2. Now we force body to get the same height as the root element. We make margin to zero to avoid vertical scroll bar. 

## If we run the application we will see a list of divs align on a single column. This column will get all the available width, since they are bloc elements.

### 1. The first property that we are going to play with is `justify content`.

* This property affects the way the children are align along the direction the content is flowing.

* Currently, the flex direction is set to column, so justify-content, will affect how the divs use the extra space from top to bottom without adjusting the actual size of elements.

```diff
div.flex-container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100%;
+   justify-content: flex-start; /*1*/
}
```

1. By default its value is `flex-start`. The element in a column direction start from top.

* If we change it to `flex-end`, the elements start from bottom,

```diff
div.flex-container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100%;
-   justify-content: flex-start; /*1*/
+   justify-content: flex-end;
}
```

### 2. We have more related values, for example `space-between`, which will stick the first child to the start of the flow and the last child to the end, with the children in between spaced out evenly.

```diff
div.flex-container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100%;
-   justify-content: flex-end;
+   justify-content: space-between;
}
```

* We can change to `space-around`, distributes the empty space equally around all the children, including the first and last ones, but notice the space before the first child and after the last child is half of the space between children.

```diff
div.flex-container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100%;
-   justify-content: space-between;
+   justify-content: space-around;
}
```

* Also we have `space-evenly`, items are distributed so that the spacing between any two adjacent alignment subjects, before the first alignment subject, and after the last alignment subject is the same.

```diff
div.flex-container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100%;
-   justify-content: space-around;
+   justify-content: space-evenly;
}
```

* NOTE: `justify-content` affects the space along the flex direction. `align-items` affects the space perpendicular to the flex direction.

### 3. Now if we change `flex-direction` to row:

```diff
div.flex-container {
    margin: 0;
    padding: 0;
    display: flex;
-   flex-direction: column;
+   flex-direction: row;
    min-height: 100%;
-   justify-content: space-evenly;
}

....

.section {
    box-sizing: border-box;
    margin: 5px;
    color: white;
+   flex: 1; /*1*/
}

```

1. This will make that all sections get the same width.

* Now we have three divs of different content length, but their box height is the same. They're streched to 100%.

* That's because `align-items` defaults to stretch, which will use all of the extra perpendicular flex direction space, which in this case is the vertical space. 
* We can also set `align-items` to:
    - `flex-start`, which will move them to the top.
    - `flex-end` will align them to the bottom. 
    - `center` will move them to the center. 
    - `baseline` this will align the items to the baseline of the first line of text in the element.

```diff
div.flex-container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
+   align-items: flex-start; /*change to flex-end and center*/
    min-height: 100%;
}
```

### 4. To demostrtate what `baseline` does, lets remove the header of the last section.

```diff index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="content/site.css">
    <title>Document</title>
</head>

<body>
    <div class="flex-container">
        <div class="section">
            <header>
                <h1>1</h1>
            </header>
            <p>Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </div>
        <div class="section">
            <header>
                <h1>2</h1>
            </header>
            <p>Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod.</p>
        </div>
        <div class="section">
-           <header>
-               <h1>3</h1>
-           </header>
            <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        </div>
    </div>
</body>

</html>
```

```diff site.css
div.flex-container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
-   align-items: flex-start;
+   align-items: baseline;
    min-height: 100%;
}
```

### 5. We can also change one child individually by using the `align-self` property on one of the children. 

* `align-self` is identical to align-items, but you apply it to a flexbox child as a opposed to the container. It defaults to auto, which means do whatever `align-items` says.

```diff
.flex-container div:nth-child(2) {
    background-color: lightskyblue;
+   align-self: flex-end;
}
```

* Summary: `justify-content` declares how to use the extra space along the direction the content is flowing. `align-items` declares how to use the extra space perpendicular to the flex direction. `align-self` is the same as `align-items`, but `align-self` is only applied to specific individual children.