# Module 1 - Layout

# BOOTSTRAP 01 Basic Grid 

## Steps:

### 1. Create a basic HTML. 

```html
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
</body>
</html>
```
* Pass the link.

### 2. We are going to create three vertical mainn areas header, body and footer

```diff html
+<header class="container-fluid">
+</header>
+
+<div class="container-fluid">
+</div>
+
+<footer class="container-fluid">
+</footer>
```

* Right now, if we run the page we are not going to see anything. 
* The main difference between container and container-fluid, although both center the content and leave some padding to the right and to the left, in higher resolutions container grabs more space, instead container-fluid, allways leave the same  space proportionally in all resolutions.

### 3. Let's add the header content.

```diff html
+<div class="col-md-12" style="background:lightblue">
+    <h2>Visor de informes web</h2>
+</div>
```

* It is just going to be a single column. So we use col-md-12.
* We can watch a single row on browser.

### 4. Let's add the footer content.

```diff html
+<div class="col-md-12" style="background: Aqua">
+    Footer
+    <a href='/'>Home</a>
+<div>
```
 
 * Now we have two different rows on our page.

### 5. Let's add the content for body.

```diff html
<div class="col-md-4" style="background:lightgreen;height: 500px">
    <p>Buscar Estudio</p>
</div>
<div class="col-md-8" style="background:AntiqueWhite;height: 500px">
    <p>Estudios cerrados y pendientes</p>
</div>
```
* Now we have a row with two columns.
* One of the columns '8' (aprox 66'66%), and the other on '4' (aprox 33'33%)
