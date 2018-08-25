# Module 1 - Layout

# BOOTSTRAP 03 Basic Grid 

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
  <div class="container-fluid">
        <div class="col-md-offset-4 col-md-4" style="background: AntiqueWhite; height: 500px;">
            <p>Login</p>
        </div>
    </div>
  <footer class="container-fluid">
    <div class="col-md-12" style="background: Aqua">
    Footer
    <a href='/'>Home</a>
    <div>
  </footer>
</body>
</html>
```

### 2. We can combine multiple col's classes for a single elemnet. Let's apply another class for a smaller resolution. 


```diff html
<div class="container-fluid">
-        <div class="col-md-offset-4 col-md-4" style="background: AntiqueWhite; height: 500px;">
+        <div class="col-sm-offset-2 col-sm-8 col-md-offset-4 col-md-4" style="background: AntiqueWhite; height: 500px;">
            <p>Login</p>
        </div>
    </div>
```

* Opne developer tools and watch ehat styles are applied.

### 3. For the smaller resolution we can apply other styles.

```diff html
<div class="container-fluid">
-        <div class="col-sm-offset-2 col-sm-8 col-md-offset-4 col-md-4" style="background: AntiqueWhite; height: 500px;">
+        <div class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-4 col-md-4" style="background: AntiqueWhite; height: 500px;">

            <p>Login</p>
        </div>
    </div>
```

* This is it's behavior by default, if no remaining space for the col's width, then grabs all the row.

