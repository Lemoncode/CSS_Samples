# Module 1 - Layout

# BOOTSTRAP 02 Basic Grid 

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

### 2. We are going to create three vertical mainn areas header, body and footer.

* Now we are going to apply some offset to the column.
* What this will do, it's make that the content where the offset is applied, starts leaving the space specified.

```diff html
+<div class="col-md-offset-4 col-md-4 " style="background:AntiqueWhite;height: 500px">
+    <p>Login</p>
+</div>
```

