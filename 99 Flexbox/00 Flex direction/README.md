# In this demo we are going to play with flex container and flex direction

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
    <nav class="nav-root">
        <ul>
            <li>
                <a href="#">Work</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
</body>
</html>
```

* And this css

```css
body {
    background-color: black;
    font-family: 'Open Sans', sans-serif;
}

.nav-root li {
    width: 6rem;
    color: white;
}

.nav-root a {
    text-decoration: none;
    font-size:  1.3rem;
    font-weight: 400;
    color: #00ffd9;
}

.nav-root ul {
    
}
```

* If we run the application, we will see this list of elements.

1. First, let's remove the bullets and display flex

```diff site.css
.nav-root ul {
+    list-style: none;
+    display: flex;
}
```

* Flex will leave this unordered list as a block level container, and will affect the layout of its children. 
* If I wanted the container to be an inline element, but also wanted the contents to be displayed using flexbox, I could change display to inline flex.
* `flex` makes the container a block element, breaking the horizontal flow with its siblings, and `inline-flex`, like an image tag, will not.

* Notice that the elements are displayed horizontally. This is beacuse flex containers have a property called `flex-direction`, which defaults to row.

2. We can change again to vertically layout

```diff
.nav-root ul {
    list-style: none;
    display: flex;
+    flex-direction: column;
}
```

* column-reverse -> reverse the children order vertically
* row-reverse -> reverse the children order horizontally