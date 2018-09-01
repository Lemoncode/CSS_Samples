> Rewrite demo with elder html.
# In this demo we are going to have a look flexbox children alignment

* We start from this html

```html
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
    <article class="yellow">
        <header>
          <h1>Amarillo</h1>
        </header>
        <p>Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.</p>
      </article>
      <article class="blue">
        <header>
          <h1>Azul</h1>
        </header>
        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod.</p>
      </article>
      <article class="green">
        <header>
          <h1>Verde</h1>
        </header>
        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
      </article>
</body>
</html></html>
```

* And this css

```css
:root {
    height: 100%;
}

body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    min-height: 100%;
    background: #666;
    display: flex;
    flex-direction: column;
}

h1 {
    font-weight: 600;
    margin: 0 0 5px 0;
}

p {
    margin: 5px 0;
}
article {
    box-sizing: border-box;
    background: #FFF;
    margin: 5px;
}

```

* The first property we'll look at is `justify-content`. 
* This property affects the way the children are aligned along the direction the content is flowing. 
* Currently, the flex direction is set to column, so justify-content will affect how the articles use the extra space from top to bottom without adjusting the actual size of the elements.

```diff site.css
body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    min-height: 100%;
    background: #666;
    display: flex;
    flex-direction: column;
+   justify-content: flex-start; /*1*/
}
```

1. By default its value is `flex-start`. The elements start from top.

* If we change it to `flex-end`, the elements start from bottom.

```diff site.css
body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    min-height: 100%;
    background: #666;
    display: flex;
    flex-direction: column;
+   justify-content: flex-end;
}
```
* We have more related values, for example `space-between`, which will stick the first child to the start of the flow and the last child to the end, with the children in between spaced out evenly.

```diff site.css
body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    min-height: 100%;
    background: #666;
    display: flex;
    flex-direction: column;
+   justify-content: space-between;
}
```
* `space-around`, distributes the empty space equally around all the children, including the first and last ones, but notice the space before the first child and after the last child is half of the space between children. 
* `space-evenly`, items are distributed so that the spacing between any two adjacent alignment subjects, before the first alignment subject, and after the last alignment subject is the same.
* `justify-content` affects the space along the flex direction. `align-items` affects the space perpendicular to the flex direction.

* Now if we change `flex-direction` to row:

```diff site.css
body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    min-height: 100%;
    background: #666;
    display: flex;
-    flex-direction: column;
-    justify-content: space-evenly;
+    flex-direction: row;
}
....
article {
    box-sizing: border-box;
    background: #FFF;
    margin: 5px;
+   flex: 1;
}
```
* Now we have three articles of different content length, but their box height is the same. They're stretched to 100 percent height.

* That's because `align-items` defaults to stretch, which will use all of the extra perpendicular flex direction space, which in this case is the vertical space. 
* We can also set `align-items` to:
    - `flex-start`, which will move them to the top.
    - `flex-end` will align them to the bottom. 
    - `center` will move them to the center. 
    - `baseline` this will align the items to the baseline of the first line of text in the element.

```diff site.css
body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    min-height: 100%;
    background: #666;
    display: flex;
    flex-direction: row;
+   align-items: flex-start;
}
```

* To demonstrate what `baseline` does this we cna remove the last article header. Notice how the baseline of the first line of the text lines up with the headlines and the other elements.

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
    <article class="yellow">
        <header>
          <h1>Amarillo</h1>
        </header>
        <p>Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.</p>
      </article>
      <article class="blue">
        <header>
          <h1>Azul</h1>
        </header>
        <p>Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod.</p>
      </article>
      <article class="green">
-       <header>
-         <h1>Verde</h1>
-       </header>
        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
      </article>
</body>
</html>
```

```diff site.css
body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    min-height: 100%;
    background: #666;
    display: flex;
    flex-direction: row;
-    align-items: flex-start;
+    align-items: flex-baseline;
}
```
* We can also change one child individually by using the `align-self` property on one of the children. 

* `align-self` is identical to align-items, but you apply it to a flexbox child as a opposed to the container. It defaults to auto, which means do whatever `align-items` says. 

* For example if we want the `Amarillo` article align to the end we can do:

```diff site.css
+.yellow {
+    align-self: flex-end;
+}
```

* Summary: `justify-content` declares how to use the extra space along the direction the content is flowing. `align-items` declares how to use the extra space perpendicular to the flex direction. `align-self` is the same as `align-items`, but `align-self` is only applied to specific individual children.

> Froggy game solution:

```css
flex-wrap: wrap-reverse;
flex-direction: column-reverse;
justify-content: center;
align-content: space-between;
```