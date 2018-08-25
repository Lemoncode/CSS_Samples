# Module 1 - Layout

# BOOTSTRAP 05 Forms 

## Notes: 

### Bootstrap provides three types of form layouts:
* Vertical (this is default)
* Horizontal
* Inline

#### There are transversal rules for all of them:

* Wrap labels and form controls in ```<div class="form-group"></div> ``` (needed for optimum spacing).
* Add class ```.form-control``` to all textual ```<input /> <textarea><textarea/> <select></select>```

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
### 2. Before we create the form, we can make that elment goes off using resolution-hidden 

```diff html
+<div class="row">
+      <div class="col-md-12 jumbo-banner hidden-xs">
+      </div>
+    </div>
```

```diff css
+.jumbo-banner {
+  width:100%;
+  height:20vh;
+  background-image:url('data:image/jpeg;base64,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');
+
+  background-size:cover;
+  background-position-y: 70%;
+}
```
* background-size -> Specifies the size of image.
* background-position-y -> specifies the vertical position of the image.
* We can notice that for small resolutions the content goes off.


### 3. Let's add an horizontal form

```diff html
+<div class="row">
+    <div class="col-md-4 col-md-offset-4">
+        <h2>Login</h2>
+        <form role="form" class="form-horizontal">
+        </form>
+    </div>
+</div>
```

### 4. Now with this on place let's add our first form-group

```diff html
<div class="row">
    <div class="col-md-4 col-md-offset-4">
        <h2>Login</h2>
        <form role="form" class="form-horizontal">
+            <div class="form-group">
+                <label for="inputUserName" class="col-sm-2 control-label">Usuario</label>
+                <div class="col-sm-10">
+                    <input type="text" class="form-control" id="inputUserName" placeholder="Usuario"/>
+                </div>
+            </div>
        </form>
    </div>
</div>
```

### 5. We can mark the a form group using classes like has-warning

```diff html
<div class="row">
    <div class="col-md-4 col-md-offset-4">
        <h2>Login</h2>
        <form role="form" class="form-horizontal">
            <div class="form-group">
                <label for="inputUserName" class="col-sm-2 control-label">Usuario</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputUserName" placeholder="Usuario"/>
                </div>
            </div>
+
+            <div class="form-group has-warning">
+                <label for="inputPassword" class="col-sm-2 control-label">Contrase&ntilde;a</label>
+                <div class="col-sm-10">
+                    <input type="text" class="form-control" id="inputPassword" placeholder="Contrase&ntilde;a" />
+                    <span class="help-block">Tiene activo el bloqueo de may&uacute;sculas. Recuerde que la constrase&ntilde;a distingue entre may&uacute;sculas y min&uacute;sculas</span>
+                </div>
            </div>
        </form>
    </div>
</div>
```


### 6. For last we are going to add a button to submit the form.

```diff html
<form role="form" class="form-horizontal">
    <div class="form-group">
    <label for="inputUserName" class="col-sm-2 control-label">Usuario</label>
    <div class="col-sm-10">
        <input type="text" class="form-control" id="inputUserName" placeholder="Usuario"/>
    </div>
    </div>

    <div class="form-group has-warning">
    <label for="inputPassword" class="col-sm-2 control-label">Contrase&ntilde;a</label>
    <div class="col-sm-10">
        <input type="text" class="form-control" id="inputPassword" placeholder="Contrase&ntilde;a"/>
        <span class="help-block">Tiene activo el bloqueo de may&uacute;sculas. Recuerde que la constrase&ntilde;a distingue entre may&uacute;sculas y min&uacute;sculas</span>
    </div>
    </div>

+    <div class="form-group">
+        <div class="col-sm-12">
+            <button type="submit" class="btn btn-primary pull-right">Siguiente</button>
+        </div>
+    </div>
</form>
```
 