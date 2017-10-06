# Module 1 - Layout

# BOOTSTRAP 07 Tables 

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
### 2. Let's add a table with a search form beside it.

```diff
+<div class="container-fluid">
+    <div class="row"></div>
+</div>
```

### 3. The form  that we are going to use is the default one the vertical.

```diff
<div class="row">
+    <!-- search panel -->
+    <div class="col-md-4 well">
+        <span class="glyphicon glyphicon-search"></span>&nbsp;Buscar
+        <span class="glyphicon glyphicon-chevron-down pull-right"></span>
+        <div class="row">
+            <form role="form">
+                <div class="col-sm-3 col-md-6">
+                    <div class="form-group">
+                        <label for="entryDate">Fecha registro:</label>
+                        <input type="text" class="form-control" id="entryDate" />
+                    </div>
+                </div>
+
+                <div class="col-sm-3 col-md-6">
+                    <div class="form-group">
+                        <label for="status">Estado:</label>
+                        <input type="select" class="form-control" id="status" />
+                    </div>
+                </div>
+            </form>
+        </div>
+    </div>
+    <!-- search panel -->
</div>
```
* The row is applied before the form to get off the margin
* We are applying breakpoints.
* Notice the basic rules of the form we are using form-group and form-control.

### 4. Let's create the table. It will be a new column of the row.

```diff
<div class="row">
    <!-- search panel -->
    ......
    <!-- search panel -->

+    <!-- table -->
+    <div class="col-md-8">
+        <table class="table table-hover">
+            <tr>
+                <th>Ciudadano</th>
+                <th>Tipo</th>
+                <th>F. Cierre</th>
+            </tr>
+
+            <tr>
+                <td>Perez Gomez, Juan</td>
+                <td>APARCAMIENTO</td>
+                <td>12/06/2014</td>
+            </tr>
+
+            <tr>
+                <td>Guzman Alegria, Jose Manuel</td>
+                <td>SARE</td>
+                <td>12/06/2014</td>
+            </tr>
+
+            <tr>
+                <td>Muñoz Salas, Teresa</td>
+                <td>VELOCIDAD</td>
+                <td>10/06/2014</td>
+            </tr>
+
+            <tr>
+                <td>España González, Juan</td>
+                <td>VELOCIDAD</td>
+                <td>10/06/2014</td>
+            </tr>
+
+            <tr>
+                <td>Nuñez Navarro, Miguel</td>
+                <td>VELOCIDAD</td>
+                <td>12/06/2014</td>
+            </tr>
+
+            <tr>
+                <td>Navas Iniesta, Lionel</td>
+                <td>APARCAMIENTO</td>
+                <td>12/06/2014</td>
+            </tr>
+
+            <tr>
+                <td>Rumbado Tejón, Maria</td>
+                <td>APARCAMIENTO</td>
+                <td>10/06/2014</td>
+            </tr>
+
+            <tr>
+                <td>Keylor Torres, David</td>
+                <td>APARCAMIENTO</td>
+                <td>10/06/2014</td>
+            </tr>
+        </table>
+    </div>
+    <!-- table -->
</div>
```
