# Module 1 - Layout

# BEM Exampls 

## Steps:

### 1. Create a basic HTML. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Lemoncode Contact Page</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="StyleSheet" href="content/site.css" type="text/css" />
</head>
<body>
  <!-- no-bem html -->
  <h2>No BEM HTML</h2>
  <div class="content">
    <ul class="albumList">
      <li>Item 1</li>
      <li>Item 2</li>
      <li class="fav">Item 3</li>
      <li>Item 4</li>
    </ul>
    <br/>
    <span class="fav">
      Incluir en mis favoritos.
    </span>
  </div>
</body>
</html>
```

```css
@import url('https://fonts.googleapis.com/css?family=Raleway');
@import url('http://fonts.googleapis.com/css?family=Share:400,700');
@import url('http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700s');


html {
    font-family: 'Raleway', sans-serif;
}

.albumList {
  list-style-type: none;
}

.content {
  max-width: 500px;
  margin: 0 auto;
  background-color: rgba(120, 120, 120, 0.3);
}

.content .albumList li {
  font-size: 10pt;
}

.albumList .fav {
  font-weight: 600;
  color: magenta;
  font-size: 12pt;
}

.fav {
  font-size: 14pt;
  color: darkblue;
  text-decoration: underline;
}

br {
  margin-top: 10px;
  margin-bottom: 10px;
}
```

### 1. Let's see what we got right now. And try to identify the blocks.

* Block -> A functionally independent page component that can be reused. In HTML, blocks are represented by the class attribute.

* The block name describes its purpose ("What is it?" — menu or button), not its state ("What does it look like?" — red or big).

* class content seems to be a block
* albumlist seems to be a block.

### The trickiest one is the span that it's alone. We are going to asume that is a block.

```diff css
.albumList {
  list-style-type: none;
}

.content {
  max-width: 500px;
  margin: 0 auto;
  background-color: rgba(120, 120, 120, 0.3);
}

.content .albumList li {
  font-size: 10pt;
}

.albumList .fav {
  font-weight: 600;
  color: magenta;
  font-size: 12pt;
}

-.fav {
-  font-size: 14pt;
-  color: darkblue;
-  text-decoration: underline;
-}

+.details {
+  font-size: 14pt;
+  color: darkblue;
+  text-decoration: underline;
+}

br {
  margin-top: 10px;
  margin-bottom: 10px;
}
```

```diff html
-<span class="fav">
+<span class="details">
    Incluir en mis favoritos.
</span>
```

* Underscore under fav???

### 2. Let's try to identify elements.

* A composite part of a block that can't be used separately from it.
* The element name describes its purpose ("What is this?" — item, text, etc.), not its state ("What type, or what does it look like?" — red, big, etc.).

* The li elements are a good candidate to be elements

```diff css
-.content .albumList li {
-  font-size: 10pt;
-}

+.albumList__item {
+    font-size: 10pt;
+}
```

```diff html
<ul class="albumList">
-    <li>Item 1</li>
+   <li class="albumList__item">Item 1</li>
-    <li>Item 2</li>
+   <li class="albumList__item">Item 2</li>
-    <li class="fav">Item 3</li>
+   <li class="albumList__item fav">Item 3</li>
-    <li>Item 4</li>
+    <li class="albumList__item">Item 4</li>
</ul>
```

### 3. Now try to identify modifiers

* An entity that represents the appearance, state, or behavior of a block or element.
* The modifier name describes its appearance ("What size?" or "Which theme?" and so on — size_s or theme_islands), its state ("How is it different from the others?" — disabled, focused, etc.) and its behavior ("How does it behave?" or "How does it respond to the user?" — such as directions_left­top).

* The item with fav looks good.

```diff css
-.albumList .fav {
-  font-weight: 600;
-  color: magenta;
-  font-size: 12pt;
-}

+.albumList__item_fav {
+    font-weight: 600;
+    color: magenta;
+    font-size: 12pt;
+}
```

```diff html
<ul class="albumList">
    <li class="albumList__item">Item 1</li>
    <li class="albumList__item">Item 2</li>
-    <li class="albumList__item fav">Item 3</li>
+    <li class="albumList__item albumList__item_fav">Item 3</li>
    <li class="albumList__item">Item 4</li>
</ul>
```

### 4. Let's asume that we want to modify the position of elements inside blocks, or blocks inside other blocks, here is where mixins shine.

```diff css
+.content-albumList {
+  text-align: center;
+  padding: 20px;
+}

+.content-detail {
+  display: block;
+  text-align: left;
+}
```

```diff html
<div class="content">
-    <ul class="albumList">
+    <ul class="albumList content-albumList">
      <li class="albumList__item">Item 1</li>
      <li class="albumList__item">Item 2</li>
      <li class="albumList__item albumList__item_fav">Item 3</li>
      <li class="albumList__item">Item 4</li>
    </ul>
    <br/>
-    <span class="details">
+    <span class="details content-detail">
      Incluir en mis favoritos.
    </span>
  </div>
```