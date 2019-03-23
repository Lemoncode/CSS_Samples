# Module 1 - Layout

# MATERIALIZE 01 Hello materialize. 

## Steps:

### 1. Create a basic HTML. 

```html
<!DOCTYPE html>
<html>
<head>
  <!--Import Google Icon Font-->
  <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
  <link rel="stylesheet" href="./site.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
</body>
</html>
```
* Pass the link.

### 2. We are going to create three vertical main areas navbar, body and footer. Let's start by adding the navbar. For that purpose we start by adding a header element.

```diff
+<header class="navbar-fixed">
+
+</header>
```
* Nothing appears yet.

### 3. Let's add the nav element

```diff
<header class="navbar-fixed">
+<nav>
+    <div class="nav-wrapper grey darken-3">
+        <a href="#!" class="brand-logo lime-text text-lighten-2">Logo</a>
+        <ul>
+            <li>
+                <a class="lime-text text-lighten-2" href="#!">Home</a>
+            </li>
+            <li>
+                <a class="lime-text text-lighten-2" href="#!">Lemoncode</a>
+            </li>
+        </ul>
+    </div>
+</nav>
</header>
```
* Now we can watch the nav appears. 
* IMPORTANT!!: But logo and elements are displayed in the same place.

### 4. Let's make li elements on the right 

```diff
-<ul>
+<ul class="right">
    <li>
        <a class="lime-text text-lighten-2" href="#!">Home</a>
    </li>
    <li>
        <a class="lime-text text-lighten-2" href="#!">Lemoncode</a>
    </li>
</ul>
```
* Now if we play with viewport we are goin to get to a size were elements are displayed in the same position.

### 5. Let`s make disapear elements on a given resolution

```diff
-<ul class="right">
+<ul class="right hide-on-med-and-down">
    <li>
        <a class="lime-text text-lighten-2" href="#!">Home</a>
    </li>
    <li>
        <a class="lime-text text-lighten-2" href="#!">Lemoncode</a>
    </li>
</ul>
```
### 6. We can add now a div that will contain the main content

```diff
.....
</head>

+<div>
+    <h2>Content goes here!</h2>
+</div>
```

### 7. Let's add the footer.

```diff
+<footer class="page-footer grey darken-3" style="position:fixed; bottom:0; width:100%;">
+        <div class="footer-copyright">
+            <div class="container">
+                &copy Lemoncode
+            </div>
+        </div>
+    </footer>
```

### 8. We are positioning the footer as fixed, this in a long run will have a problem, if the content has enough height the footer could cover part of the content. To fix this we can use `flexbox`

```css site.css
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
```

```diff index.html
</header>
-<div>
-    <h2>Content goes here!</h2>
-</div>
+<main>
+    <h2>Content goes here!</h2>
+</main>
-<footer class="page-footer grey darken-3" style="position:fixed; bottom:0; width:100%">
+<footer class="page-footer grey darken-3">
    <div class="footer-copyright">
        <div class="container">
            &copy Lemoncode
        </div>
    </div>
</footer>
```