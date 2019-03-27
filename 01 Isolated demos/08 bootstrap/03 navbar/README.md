## Start from this `index.html`

```html
<!doctype html>

<html lang="en">

<head>
  <meta charset="utf-8">
  <title>LEMONCODE CSS PLAYGROUND</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous">
  <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
  <link rel="stylesheet" href="content/site.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body>
  <header class="container-fluid header">
    <div class="row">
      <div class="col">
        <h2>Gestor de infracciones</h2>
      </div>
    </div>
  </header>

  <section class="container-fluid">
    <div class="row">
      <div class="col-lg-4 search-component">
        Search Component
      </div>
      <div class="col-lg-8">
        Table Component
      </div>
    </div>
  </section>

  <footer class="container-fluid">
    <div class="row">
      <div class="col" style="background: Aqua">
        Footer
      </div>
    </div>
  </footer>
</body>

</html>

```


# Nav bar

- Passing html -> index.html
- Passing css - content/site.css

- Adios Glyph icons!. Ya no trae por defecto una libreria de icons. Por ello hemos añadido nosotros, por ejemplo `fontawesome`.

> See html > head
> Reference: http://getbootstrap.com/docs/4.0/extend/icons/

- Vamos a maquetar nuestra `navbar`:

### ./index.html

```diff
...
  <header class="container-fluid header">
    <div class="row">
      <div class="col">
-       <h2>Gestor de infracciones</h2>
+       <nav class="navbar">
+         <span class="navbar-brand">Gestor de infracciones</span>
+       </nav>
      </div>
    </div>
  </header>
...

```

### ./index.html

```diff
...
  <header class="container-fluid header">
    <div class="row">
      <div class="col">
        <nav class="navbar">
          <span class="navbar-brand">Gestor de infracciones</span>
          
+         <div class="collapse navbar-collapse" id="navbar">
+           <ul class="navbar-nav">
+             <li class="nav-item active">
+               <a class="nav-link" href="#">Estadísticas</a>
+             </li>
+           </ul>
+         </div>
        </nav>
      </div>
    </div>
  </header>
...

```

> Por que no se ve nada? Porque si definimos la navbar como `collapse` por defecto está oculta y muestra el icono (que todavia no hemos maquetado) en su lugar.

- Ahora hay que especificar a que resolución hay que mostrar la navbar expandida:

### ./index.html

```diff
...
  <header class="container-fluid header">
    <div class="row">
      <div class="col">
-       <nav class="navbar">
+       <nav class="navbar navbar-expand-sm navbar-light">
          <span class="navbar-brand">Gestor de infracciones</span>
          
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Estadísticas</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
...

```

> Con `navbar-light` tematizamos la barra (tambien esta navbar-dark).

- Como podemos mostrar los botones a la derecha? Hay que saber una cosa, cuando usamos flexbox y a un flex-item le decimos que calcule su margin: auto, en la dirección que sea, hace que ocupe el máximo margen posible en esa dirección.

### ./index.html

```diff
...
  <header class="container-fluid header">
    <div class="row">
      <div class="col">
        <nav class="navbar navbar-expand-sm navbar-light">
          <span class="navbar-brand">Gestor de infracciones</span>
          
          <div class="collapse navbar-collapse" id="navbar">
-           <ul class="navbar-nav">
+           <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Estadísticas</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
...

```

> Bootstrap ha creado una clase para estos márgenes. Realmente, maquetando así estamos acoplando estilos al html, es como si estuviesemos maquetando con estilos inline.
> Reference: https://getbootstrap.com/docs/4.0/utilities/spacing/

- Es hora de añadir los demás items e iconos:
> Reference: https://fontawesome.com/icons?d=gallery&q=file

### ./index.html

```diff
...
  <header class="container-fluid header">
    <div class="row">
      <div class="col">
        <nav class="navbar navbar-expand-sm navbar-light">
          <span class="navbar-brand">Gestor de infracciones</span>
          
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
-               <a class="nav-link" href="#">Estadísticas</a>
+               <a class="nav-link" href="#">
+                 <i class="fas fa-file"></i>
+                 Estadísticas
+               </a>
              </li>
+             <li class="nav-item">
+               <a class="nav-link" href="#">
+                 <i class="fas fa-users"></i>
+                 Ciudadanos
+               </a>
+             </li>
+             <li class="nav-item">
+               <a class="nav-link" href="#">
+                 <i class="fas fa-user"></i>
+                 Ciudadano
+               </a>
+             </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
...

```

- Vamos a ver como se ve en las diferentes resoluciones.

- Como vemos en `sm` aun se ve regular, pero no queremos colapsar la navbar, sino simplemente ocultar el texto y dejar solo los iconos (Adios al hidden-xx):

### ./index.html

```diff
...
  <header class="container-fluid header">
    <div class="row">
      <div class="col">
        <nav class="navbar navbar-expand-sm navbar-light">
          <span class="navbar-brand">Gestor de infracciones</span>
          
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  <i class="fas fa-file"></i>
-                 Estadísticas
+                 <span class="d-sm-none d-lg-inline">
+                   Estadísticas
+                 </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fas fa-users"></i>
-                 Ciudadanos
+                 <span class="d-sm-none d-lg-inline">
+                   Ciudadanos
+                 </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fas fa-user"></i>
-                 Ciudadano
+                 <span class="d-sm-none d-lg-inline">
+                   Ciudadano
+                 </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
...

```

> Volvemos a lo mismo que con el `ml-auto`.

- Por último nos falta el botón cuando hace el collapse:

### ./index.html

```diff
...
  <header class="container-fluid header">
    <div class="row">
      <div class="col">
        <nav class="navbar navbar-expand-sm navbar-light">
          <span class="navbar-brand">Gestor de infracciones</span>
+         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
+           <span class="navbar-toggler-icon"></span>
+         </button>
...

```

- Y si necesitamos cambiar el icono?:

### ./index.html

```diff
...
  <header class="container-fluid header">
    <div class="row">
      <div class="col">
        <nav class="navbar navbar-expand-sm navbar-light">
          <span class="navbar-brand">Gestor de infracciones</span>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
-           <span class="navbar-toggler-icon"></span>
+           <i class="fas fa-chevron-down"></i>
          </button>
...

```

- Por que no funciona cuando hacemos click? Porque nos falta el JavaScript el click en un elemento es un evento de JavaScript. Bootstrap tiene dependencia con Jquery y su propio JS:

### ./index.html

```diff
...
  <footer class="container-fluid">
    <div class="row">
      <div class="col" style="background: Aqua">
        Footer
      </div>
    </div>
  </footer>
+ <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
+ <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js"></script>

```

> Importante el orden!!
