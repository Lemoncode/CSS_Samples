# Module 1 - Layout

# BOOTSTRAP 06 Navbar 

## Notes: 

#### Basically a navbar has two main parts:

* The header
* And the poper nav-bar

#### We can make them collapsible. To get working collapsible navbars, we have to include bootstrap.js

## Steps:

### 1. Create a basic HTML. Start from this point. 

```html
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <link rel="stylesheet" href="content/site.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>

</body>
</html>
```
### 2. Let's add a header to our body. This header will contain our navbar.

```diff html
+<header class="container-fluid">
+</header>
```

### 3. Now we add the navbar.

```diff html
<header class="container-fluid">
+    <div class="row navbar navbar-default">
+    </div>
</header>
```

### 4. Now let's add the header.

``` diff html
<div class="row navbar navbar-default">
+    <div class="navbar-header">
+        <button class="btn btn-success navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
+                    <span class="glyphicon glyphicon-chevron-down"></span>
+        </button>
+        <div id="logo">
+            <a href='.'>
+                <h1>my App <small>gestor de infracciones<small></h1>
+            </a>
+        </div>
+    </div>
</div>
```
* The icon inside the button it's a chevron
* Tipically you can watch a menu bugger, we can put here whatever we want.

### 5. Now we can add the body. In this case is going to be a collapsible body.

```diff
<div class="row navbar navbar-default">
            <div class="navbar-header">
                <button class="btn btn-success navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="glyphicon glyphicon-chevron-down"></span>
                </button>
                <div id="logo">
                    <a href='.'>
                        <h1>my App <small>gestor de infracciones<small></h1>
                    </a>
                </div>
            </div>
        </div>
+  
+<div class="navbar-collapse collapse">
+    <ul class="nav navbar-nav navbar-right">
+    <li class="nav active">
+        <a href="#"><span class="glyphicon glyphicon-file"></span><span class="hidden-sm">&nbsp;Estadísticas</span></a>
+    </li>
+    <li class="nav">
+        <a href="#"><span class="glyphicon glyphicon-th-large"></span><span class="hidden-sm">&nbsp;Ciudadanos</span></a>
+    </li>
+    <li class="nav">
+        <a href="#"><span class="glyphicon glyphicon-user"></span><span class="hidden-sm">&nbsp;Ciudadano</span></a>
+    </li>
+    </ul>
+</div>
</div>       
```

