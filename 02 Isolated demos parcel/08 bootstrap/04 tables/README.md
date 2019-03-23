## We start from this index.html

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
        <nav class="navbar navbar-expand-sm navbar-light">
          <span class="navbar-brand">Gestor de infracciones</span>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
            <i class="fas fa-chevron-down"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  <i class="fas fa-file"></i>
                  <span class="d-sm-none d-lg-inline">
                    Estadísticas
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fas fa-users"></i>
                  <span class="d-sm-none d-lg-inline">
                    Ciudadanos
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fas fa-user"></i>
                  <span class="d-sm-none d-lg-inline">
                    Ciudadano
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
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
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>

</html>

```

# Tables

- Passing html -> index.html
- Passing css - content/site.css

- El objetivo de esta demo es maquetar en la zona de la derecha una tabla de las infracciones del ciudadano, dentro de un componente tabs, ya que podremos elegir entre mostrar las infracciones abiertas y cerradas.

- Lo primero sería maquetar el componente tabs:

### ./index.html

```diff
...
  <section class="container-fluid">
    <div class="row">
      <div class="col-lg-4 search-component">
        Search Component
      </div>
      <div class="col-lg-8">
-       Table Component
+       <ul class="nav nav-tabs">
+         <li class="nav-item">
+           <a class="nav-link active" data-toggle="tab" href="#closedInfringement">
+             Infracciones cerradas
+           </a>
+         </li>
+         <li class="nav-item">
+           <a class="nav-link" data-toggle="tab" href="#pendingInfringement">
+             Infracciones abiertas
+           </a>
+         </li>
+       </ul>
      </div>
    </div>
  </section>
...

```

> Han añadido la clase `nav-item` y `nav-link` para evitar la dependencia con el html

### ./index.html

```diff
...
  <section class="container-fluid">
    <div class="row">
      <div class="col-lg-4 search-component">
        Search Component
      </div>
      <div class="col-lg-8">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#closedInfringement">
              Infracciones cerradas
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#pendingInfringement">
              Infracciones abiertas
            </a>
          </li>
        </ul>
+       <div class="tab-content">
+         <div class="tab-pane active" id="closedInfringement">
+           Tabla Infracciones cerradas
+         </div>
+         <div class="tab-pane" id="pendingInfringement">
+           Tabla Infracciones abiertas
+         </div>
+       </div>
      </div>
    </div>
  </section>
...

```

> Aqui no hay diferencias con la versión anterior.

- Añadamos una tabla:

### ./index.html

```diff
...
        <div class="tab-content">
          <div class="tab-pane active" id="closedInfringement">
-           Tabla Infracciones cerradas
+           <table class="table table-striped table-hover">
+             <thead>
+               <tr>
+                 <th>Ciudadano</th>
+                 <th>Tipo</th>
+                 <th>F. Cierre</th>
+               </tr>
+             </thead>
+             <tbody>
+               <tr>
+                 <td>Perez Gomez, Juan</td>
+                 <td>APARCAMIENTO</td>
+                 <td>12/02/2018</td>
+               </tr>
+               <tr>
+                 <td>Guzman Alegria, Jose Manuel</td>
+                 <td>APARCAMIENTO</td>
+                 <td>16/02/2018</td>
+               </tr>
+               <tr>
+                 <td>Muñoz Salas, Teresa</td>
+                 <td>VELOCIDAD</td>
+                 <td>18/02/2018</td>
+               </tr>
+               <tr>
+                 <td>España González, Juan</td>
+                 <td>VELOCIDAD</td>
+                 <td>22/02/2018</td>
+               </tr>
+               <tr>
+                 <td>Nuñez Navarro, Miguel</td>
+                 <td>VELOCIDAD</td>
+                 <td>27/02/2018</td>
+               </tr>
+               <tr>
+                 <td>Navas Iniesta, Lionel</td>
+                 <td>VELOCIDAD</td>
+                 <td>28/02/2018</td>
+               </tr>
+               <tr>
+                 <td>Rumbado Tejón, Maria</td>
+                 <td>APARCAMIENTO</td>
+                 <td>01/03/2018</td>
+               </tr>
+               <tr>
+                 <td>Keylor Torres, David</td>
+                 <td>APARCAMIENTO</td>
+                 <td>04/03/2018</td>
+               </tr>
+             </tbody>
+           </table>
          </div>
          <div class="tab-pane" id="pendingInfringement">
            Tabla Infracciones abiertas
          </div>
        </div>
      </div>
    </div>
  </section>
...

```
