# Module 1 - Layout

# MATERIALIZE 02 Basic Grid. 

## Steps:

### 1. Create a basic HTML. 

```html
<!DOCTYPE html>
<html>
<head>
  <!--Import Google Icon Font-->
  <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
  <link rel="stylesheet" href="content/site.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
<header class="navbar-fixed">
        <nav>
            <div class="nav-wrapper grey darken-3">
                <a href="#!" class="brand-logo lime-text text-lighten-2">Logo</a>
                <ul class="right hide-on-med-and-down">
                    <li>
                        <a class="lime-text text-lighten-2" href="#!">Home</a>
                    </li>
                    <li>
                        <a class="lime-text text-lighten-2" href="#!">Lemoncode</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <div>
        <h2>Content goes here!</h2>
    </div>

    <footer class="page-footer grey darken-3" style="position:fixed; bottom:0; width:100%;">
        <div class="footer-copyright">
            <div class="container">
                &copy Lemoncode
            </div>
        </div>
    </footer>
</body>
</html>
```
```css
footer {
    position:fixed; 
    bottom:0; 
    width:100%;
}

.column-decorator {
    box-sizing: border-box;
    border: 0.3em solid black;
}

.column-decorator:nth-of-type(2n){
    background-color: #00bcd4;
}

.column-decorator:nth-of-type(2n + 1){
    background-color: #d81b60;
}
```


### 2. Let's create our first grid.

```diff
....
-<div>
-    <h2>Content goes here!</h2>
-</div>
+<div class="container">
+    <div class="row">
+        <div class="col s6 column-decorator"><span class="flow-text">Ancho 6 columnas</span></div>
+        <div class="col s6 column-decorator"><span class="flow-text">Ancho 6 columnas</span></div>
+        <div class="col s4 column-decorator"><span class="flow-text">Ancho 4 columnas</span></div>
+        <div class="col s8 column-decorator"><span class="flow-text">Ancho 8 columnas</span></div>
+        <div class="col s3 column-decorator"><span class="flow-text">Ancho 3 columnas</span></div>
+        <div class="col s3 column-decorator"><span class="flow-text">Ancho 3 columnas</span></div>
+        <div class="col s3 column-decorator"><span class="flow-text">Ancho 3 columnas</span></div>
+        <div class="col s3 column-decorator"><span class="flow-text">Ancho 3 columnas</span></div>
+        <div class="col s2 column-decorator"><span class="flow-text">Ancho 2 columnas</span></div>
+        <div class="col s2 column-decorator"><span class="flow-text">Ancho 2 columnas</span></div>
+        <div class="col s2 column-decorator"><span class="flow-text">Ancho 2 columnas</span></div>
+        <div class="col s2 column-decorator"><span class="flow-text">Ancho 2 columnas</span></div>
+        <div class="col s2 column-decorator"><span class="flow-text">Ancho 2 columnas</span></div>
+        <div class="col s2 column-decorator"><span class="flow-text">Ancho 2 columnas</span></div>
+    </div>
+</div>
....
```

* We can notice that for each '12', we have a new row
* flow-text property tries to make text responsive.
* This is difficult to read lets try something diffent.

### 3. Using row class

```diff
<div class="row">
    <div class="col s6 column-decorator"><span>Ancho 6 columnas</span></div>
    <div class="col s6 column-decorator"><span>Ancho 6 columnas</span></div>
    <div class="col s4 column-decorator"><span>Ancho 4 columnas</span></div>
    <div class="col s8 column-decorator"><span>Ancho 8 columnas</span></div>
    <div class="col s3 column-decorator"><span>Ancho 3 columnas</span></div>
    <div class="col s3 column-decorator"><span>Ancho 3 columnas</span></div>
    <div class="col s3 column-decorator"><span>Ancho 3 columnas</span></div>
    <div class="col s3 column-decorator"><span>Ancho 3 columnas</span></div>
    <div class="col s2 column-decorator"><span>Ancho 2 columnas</span></div>
    <div class="col s2 column-decorator"><span>Ancho 2 columnas</span></div>
    <div class="col s2 column-decorator"><span>Ancho 2 columnas</span></div>
    <div class="col s2 column-decorator"><span>Ancho 2 columnas</span></div>
    <div class="col s2 column-decorator"><span>Ancho 2 columnas</span></div>
    <div class="col s2 column-decorator"><span>Ancho 2 columnas</span></div>
</div>

+<div class="row">
+    <div class="col s6 column-decorator"><span class="flow-text">Ancho 6 columnas</span></div>
+    <div class="col s6 column-decorator"><span class="flow-text">Ancho 6 columnas</span></div>
+</div>
+<div class="row">
+    <div class="col s4 column-decorator"><span class="flow-text">Ancho 4 columnas</span></div>
+    <div class="col s8 column-decorator"><span class="flow-text">Ancho 8 columnas</span></div>
+</div>
+<div class="row">
+    <div class="col s3 column-decorator"><span class="flow-text">Ancho 3 columnas</span></div>
+    <div class="col s3 column-decorator"><span class="flow-text">Ancho 3 columnas</span></div>
+    <div class="col s3 column-decorator"><span class="flow-text">Ancho 3 columnas</span></div>
+    <div class="col s3 column-decorator"><span class="flow-text">Ancho 3 columnas</span></div>
+</div>
+<div class="row">
+    <div class="col s2 column-decorator"><span class="flow-text">Ancho 2 columnas</span></div>
+    <div class="col s2 column-decorator"><span class="flow-text">Ancho 2 columnas</span></div>
+    <div class="col s2 column-decorator"><span class="flow-text">Ancho 2 columnas</span></div>
+    <div class="col s2 column-decorator"><span class="flow-text">Ancho 2 columnas</span></div>
+    <div class="col s2 column-decorator"><span class="flow-text">Ancho 2 columnas</span></div>
+    <div class="col s2 column-decorator"><span class="flow-text">Ancho 2 columnas</span></div>
+</div>
```
