# Module 1 - Layout

# MATERIALIZE 03 Responsive Grid. 

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

### 1. Let's start by creating our main structure for the content

```diff
+<div class="container">
+    <div class="row">
+        <div class="col m4 s12"></div>
+        <div class="col m8 s12"></div>
+    </div>
+</div>
```
* We are going to create a single row with two columns.
* In small resolution, it's going to be two rows.

### 2. In the first column we are going to add a collection

```diff
<div class="col m4 s12">
+    <ul class="collection with-header">
+        <li class="collection-header">
+          <h4>Acciones</h4>
+        </li>
+        <li class="collection-item avatar"></li>
+        <li class="collection-item avatar"></li>
+        <li class="collection-item avatar"></li>
+    </ul>
</div>
```
* Collections allows us to group elements together
* If we look now we can watch the structure of the collection

### 3. Let's add content to the items.

```diff
<ul class="collection with-header">
    <li class="collection-header">
        <h4>Acciones</h4>
    </li>
    <li class="collection-item avatar">
+        <i class="material-icons circle">add</i>
+        <span class="Title">Añadir</span>
+        <p>Nuevo elemento para insertar</p>
    </li>
    <li class="collection-item avatar">
+        <i class="material-icons circle">folder</i>
+        <span class="Title">Ficheros</span>
+        <p>Añadir documentación correspondiente</p>
    </li>
    <li class="collection-item avatar">
+        <i class="material-icons circle">close</i>
+        <span class="Title">Cerrar</span>
+        <p>Cerrar opciones</p>
    </li>
</ul>
```
### 4. Now we are going to create the main structure for the other column.

```diff
<div class="col m8 s12">
+    <div class="section">
+        <h5>Temas de actualidad</h5>
+        <div class="col m4 hide-on-small-only"></div>
+        <div class="col m6 offset-m2 s12"></div>
+    </div>
</div>
```

* The section class is used for simple top and bottom padding
* This is going to be divided on two columns
* The one on the left is going to hide on small resolution

### 5. Now we are going to add a card, on the left column

```diff
<div class="col m4 hide-on-small-only">
+    <div class="card  lime darken-2">
+        <div class="card-content white-text">
+            <span class="card-title">Estrofa</span>
+            <p>
+                Tremble for yourself, my man, You know that you have seen this all before Tremble, little lion man.
+            </p>
+        </div>
+        <div class="card-action">
+            <a href="#" class="flow-text">Enlace</a>
+        </div>
+    </div>
</div>
```
* Cards a way to show content on material design.

### 6. Now we are going to add another card to right column.

```diff
<div class="col m6 offset-m2 s12">
+    <div class="card  lime darken-2">
+        <div class="card-content white-text">
+            <span class="card-title">Estrofa</span>
+            <p>
+                Weep for yourself, my man,You'll never be what is in your heartWeep, little lion man, You're not as brave as you were at
+                the start Rate yourself and rake yourself Take all the courage you have left And waste
+                it on fixing all the problems that you made in your own head
+            </p>
+        </div>
+        <div class="card-action">
+            <a href="#" class="flow-text">Enlace</a>
+        </div>
+    </div>
</div>
```

* En material design, todo debe tener cierta profundidad en el eje z que determine que tan cerca o lejos está un elemento de una página
