# Module 1 - Layout

# MATERIALIZE 04 Forms 

* Reference: http://www.the-art-of-web.com/html/html5-form-validation/

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

<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
</body>
</html>
```

### 2. Include the file site.css

```css
body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

main {
    flex: 1 0 auto;
}

```

### 3. Let's start by creating our main structure for the content

```diff html
+<div class="container">
+  <div class="row">
+    <form action="col s12"></form>
+  </div>
+</div>
```

* It's a container (grid) that right now, it`s going to be a single row.
* Inside the form we can nest rows as well.

### 2. Now we are going to create the structure for the form sections.

```diff html
<form action="col s12">
+    <div class="row"></div>
+    <div class="row"></div>
+    <div class="row"></div>
+    <div class="row"></div>
</form>
```

### 3. Let's complete the first section with two inputs

```diff html
<div class="row">
+    <div class="input-field col s6">
+        <input placeholder="First Name" id="first_name" type="text" class="validate" required>
+        <label for="first_name"></label>
+    </div>
+    <div class="input-field col s6">
+        <input id="last_name" type="text" class="validate" required>
+        <label for="last_name"></label>
+    </div>
</div>

+<div class="row">
+    <button class="btn waves-ligth right" type="submit">Save</button>
+</div>
```

* Class validate will respond to HTML5 validations.

### 4. We can add disable fields as well.

```diff html
<div class="row">
    <div class="input-field col s6">
    <input placeholder="First Name" id="first_name" type="text" class="validate" required>
    <label for="first_name"></label>
    </div>
    <div class="input-field col s6">
    <input id="last_name" type="text" class="validate" required>
    <label for="last_name"></label>
    </div>
</div>
<div class="row">
+    <div class="input-field col s12">
+    <input disabled value="I am not editable" id="disabled" type="text" class="validate">
+    <label for="disabled">Disabled</label>
+    </div>
</div> 
....
```

### 5. Password fields

```diff hmtl
....
<div class="row">
    <div class="input-field col s12">
    <input disabled value="I am not editable" id="disabled" type="text" class="validate">
    <label for="disabled">Disabled</label>
    </div>
</div>
<div class="row">
+    <div class="input-field col s12">
+    <input id="password" type="password" class="validate">
+    <label for="password">Password</label>
+    </div>
</div>
....
```

### 6. Emails

```diff
....
<div class="row">
    <div class="input-field col s12">
    <input id="password" type="password" class="validate">
    <label for="password">Password</label>
    </div>
</div>
<div class="row">
+    <div class="input-field col s12">
+    <input id="email" type="email" class="validate">
+    <label for="email">Email</label>
+    </div>
</div>
...
```

### 6. For last OUT of the form, let's add a couple of buttons, and play wit its order with push pull.

```diff
+<div class="row">
+    <div class="col m7 s7 push-s5">
+        <a class="btn-floating btn-large waves-effect waves-light lime">
+            <i class="material-icons">mode_edit</i>
+        </a>
+    </div>
+    <div class="col m5 s5 pull-s7">
+        <a class="btn-floating btn-large waves-effect waves-light lime">
+            <i class="material-icons">send</i>
+        </a>
+    </div>
+</div>
```
