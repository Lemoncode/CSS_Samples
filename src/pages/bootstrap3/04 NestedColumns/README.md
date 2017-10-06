# Module 1 - Layout

# BOOTSTRAP 04 Basic Grid 

## Notes: Related links for row / container

* https://stackoverflow.com/questions/18969051/bootstrap-3-why-is-row-class-is-wider-than-its-container
* https://stackoverflow.com/questions/25723220/why-bootstraps-container-class-has-padding-while-row-class-has-negative-margins

## Steps:

### 1. Create a basic HTML. Start from this point. 

```html
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
  <header class="container-fluid">
    <div class="col-md-12" style="background:lightblue">
      <h2>Visor de informes web</h2>
    </div>
  </header>
  
  <footer class="container-fluid">
    <div class="col-md-12" style="background: Aqua">
    Footer
    <a href='/'>Home</a>
    <div>
  </footer>
</body>
</html>
```

### 2. If we want to have multiple rows inside a container, we have to encapsulate them on row class.

```diff html
<header class="container-fluid">
+    <div class="row">
      <div class="col-md-12" style="background:lightblue">
        <h2>Visor de informes web</h2>
+      </div>
    </div>
  </header>

+  <div class="container-fluid">
+    <div class="row">
+      <div class="col-xs-12" style="background:AntiqueWhite;height: 150px">
+        <p>Cabecera ciudadano</p>
+      </div>
+    </div>
+  </div>
  
  <footer class="container-fluid">
+    <div class="row">
      <div class="col-md-12" style="background: Aqua">
        <a href='/'>Home</a>
      Footer
+      <div>
    </div>
  </footer>
```

### 3. We can play with the width of each column on different resolutions

```diff htm
+<div class="row">
+      <div class="col-xs-12 col-md-5" style="background:lightblue;height: 450px">
+        <p>Multas cerradas</p>
+      </div>
+      <div class="col-xs-12 col-md-7" style="background:DarkGray;height: 450px">
+        <p>Detalle Multas</p>
+      </div>
+    </div>
```



