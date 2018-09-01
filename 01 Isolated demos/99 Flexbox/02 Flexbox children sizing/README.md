> Rewrite demo with elder html.
# In this demo we are going to play with flexbox items sizing.

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
    <h1 class="title-1">Garth</h1>
    <h1 class="title-2">is</h1>
    <h1 class="title-3">Rad</h1>
</body>
</html>
```

* And this css

```css
body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #eec965;
}

.title-1 {
    background: #dd5f40;
}

.title-2 {
    background: #3d483a;
}

.title-3 {
    background: #468e5d;
}

h1 {
    
}
```

*  Three properties to handle the resizing of flexbox children along the flex-direction, `flex-grow`, `flex-shrink`, and `flex-basis`, which are all applied to individual flex children and not to the flex container. 

*  `flex-basis`, you can define the optimal size of a child along the `flex-direction`. Let me explain what that means with an example. 

1. In this example, I have three h1 tags with different background colors to make then distinguishable. I can set display to flex on the parent container. In this case, it's the body tag.

```diff site.css
body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #eec965;
+   display: flex;
}

.title-1 {
    background: #dd5f40;
}

.title-2 {
    background: #3d483a;
}

.title-3 {
    background: #468e5d;
}

h1 {
}
```
* Notice that even though h1s are block tags that usually have a default width set to 100 percent, they shrink down to the content width here. 

2. If I set a width on this first child to 200 pixels, it will respect that width.

```diff site.css
body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #eec965;
    display: flex;
}

.title-1 {
    background: #dd5f40;
+   width: 200px;
}

.title-2 {
    background: #3d483a;
}

.title-3 {
    background: #468e5d;
}

h1 {
}
```

3. But if I set the flex-basis to 150, it will override the set width, but it will not exceed the max width or go under the min width. 

```diff site.css
body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #eec965;
    display: flex;
}

.title-1 {
    background: #dd5f40;
    width: 200px;
+   flex-basis: 150px;
}

.title-2 {
    background: #3d483a;
}

.title-3 {
    background: #468e5d;
}

h1 {
}
```
* If `flex-basis` is not set, it defaults to auto, which means look at the dimension corresponding to the flex-direction.

* Since our flex-direction here is row, the corresponding dimension is width. If width is not set, it defaults to the content width of the element, which in this case is just the size of the word.

* Because of the complexity this hierarchy can introduce, I recommend sticking with flex-basis, not setting a width for all flexbox children in row flex-direction or height for all column flex-direction children. 

* It makes it easier to know where your dimension is being set. Flex-basis is the ideal size for the element along the flex-direction if it has enough room.

4. To figure out what happens when we have a surplus or a deficit of space, we need to understand flex-grow and flex-shrink. To make flex-grow and shrink easier to see, I'm going to give each of these children a different flex-basis. I'll set the first to 120, the second to 40 pixels, and the third to 100 pixels.

```diff site.css
body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #eec965;
    display: flex;
}

.title-1 {
    background: #dd5f40;
-   flex-basis: 150px;
-   width: 200px;
    flex-basis: 120px;
}

.title-2 {
    background: #3d483a;
+   flex-basis: 40px;
}

.title-3 {
    background: #468e5d;
+   flex-basis: 100px;
}

h1 {
}
```

* Now look, I have extra space in the flexbox not being used by the children. 

5. The `flex-grow ` property dictates how that space should be divvied up by the children. 

* `flex-grow` defaults to zero, which means none of these children will grow beyond their `flex-basis`. 

* If I set the flex-grow of the first child to one, it will use up all the extra space without affecting the width of the other children.

```diff site.css
body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #eec965;
    display: flex;
}

.title-1 {
    background: #dd5f40;
    flex-basis: 120px;
+   flex-grow: 1;
}

.title-2 {
    background: #3d483a;
    flex-basis: 40px;
}

.title-3 {
    background: #468e5d;
    flex-basis: 100px;
}

h1 {
}
```

6. This one does not have a unit. It is a proportion. It is a one to zero, in this case 100 percent. 

* It is using 100 percent of the extra space. If I changed the `flex-grow` on the second child to two, now the first child is getting one third of the extra space, and the second child is getting two thirds.

```diff site.css
body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #eec965;
    display: flex;
}

.title-1 {
    background: #dd5f40;-
    flex-basis: 120px;
    flex-grow: 1;
}

.title-2 {
    background: #3d483a;
    flex-basis: 40px;
+   flex-grow: 2;
}

.title-3 {
    background: #468e5d;
    flex-basis: 100px;
}

h1 {
}
```

7. If I set the flex-grow of the third child to three, now the first child gets one sixth of the extra space, the second child gets two sixths or one third, and the third child gets three sixths or one half of the extra space.

```diff site.css
body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #eec965;
    display: flex;
}

.title-1 {
    background: #dd5f40;
    /* flex-basis: 150px;
    width: 200px; */
    flex-basis: 120px;
    flex-grow: 1;
}

.title-2 {
    background: #3d483a;
    flex-basis: 40px;
    flex-grow: 2;
}

.title-3 {
    background: #468e5d;
    flex-basis: 100px;
+   flex-grow: 3;
}

h1 {
}
```

8. If instead of divvying up the extra space I want to divvy up the total space, I could set the `flex-basis` on all the children to zero, which would make the total space the same as the extra space since none of the children are taking up any space.

```diff site.css
body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #eec965;
    display: flex;
}

.title-1 {
    background: #dd5f40;
-   flex-basis: 120px;
-    flex-grow: 1;
}

.title-2 {
    background: #3d483a;
-   flex-basis: 40px;
-    flex-grow: 2;
}

.title-3 {
    background: #468e5d;
-   flex-basis: 100px;
-    flex-grow: 3;
}

+h1 {
+    flex-basis: 0;
+}
```

* Flex-grow dictates how the extra space beyond the combined flex-basis should be divided up.

8. `flex-shrink` defines what should happen when there's a deficit in the combined flex-basis values, meaning if the combined flex-basis is greater than the allowed space, how did these elements shrink? 

* For an example, I'm going to define all the flex-basis values to be 200 pixels, so the combined width will exceed the width of the container.

```diff site.css
body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #eec965;
    display: flex;
}

.title-1 {
    background: #dd5f40;
}

.title-2 {
    background: #3d483a;
}

.title-3 {
    background: #468e5d;
}

h1 {
-   flex-basis: 0;
+   flex-basis: 200px;
}
```

* Even though they are too big, they're all losing some width because the default width of `flex-shrink` is set to one, meaning all children shrink the same amount from their flex-basis values. If I set the flex-shrink of one of the children to two, it will shrink twice as much as the other children.

```diff site.css
body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #eec965;
    display: flex;
}

.title-1 {
    background: #dd5f40;
+   flex-shrink: 2;
}

.title-2 {
    background: #3d483a;
}

.title-3 {
    background: #468e5d;
}

h1 {
    flex-basis: 200px;
}
```

*  I can set it to 10 or even 100, but notice at some point it does not go past the width of the content itself if the other children have non-content width they can spare. 

```diff site.css
body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #eec965;
    display: flex;
}

.title-1 {
    background: #dd5f40;
-   flex-shrink: 2;
+   flex-shrink: 100;
}

.title-2 {
    background: #3d483a;
}

.title-3 {
    background: #468e5d;
}

h1 {
    flex-basis: 200px;
}
```

* If I don't want a child to shrink it all, I can set the flex-shrink to zero. In fact, if I set the flex-shrink to zero on all of them, they will cause the container width to overflow.

```diff site.css
body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #eec965;
    display: flex;
}

.title-1 {
    background: #dd5f40;
-   flex-shrink: 100;
}

.title-2 {
    background: #3d483a;
}

.title-3 {
    background: #468e5d;
}

h1 {
    flex-basis: 200px;
+   flex-shrink: 0;
}
```

>Continue: https://egghead.io/lessons/flexbox-combining-the-flexbox-sizing-properties-using-the-flex-shorthand