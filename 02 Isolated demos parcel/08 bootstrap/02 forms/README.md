## Start from this `index.html`

```html
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>LEMONCODE CSS PLAYGROUND</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body>
  <header class="container-fluid">
    <div class="col" style="background:lightblue">
      <h2>Gestor de infracciones</h2>
    </div>
  </header>

  <div class="container-fluid">
    
  </div>

  <footer class="container-fluid">
    <div class="col" style="background: Aqua">
    Footer
    <a href='/'>Home</a>
    <div>
  </footer>
</body>
</html>

```


# Forms

- Passing html -> index.html

- Respecto a los formularios, existen 3 tipos: los verticales, los horizontales y los inline.
  - El vertical es el de por defecto, que salen los labels justo arriba de los inputs.
  - Los horizontales son los que tienen el label a la izquierda y a la derecha el input.
  - Y por último los inline donde todos los elementos del form están en una línea.

- Regla básica para los formularios, es muy importante que las labels y los inputs y todo esto, es necesario que estén agrupados en un `form-group` y aquellos elementos que van a recibir un texto, por ejemplo: input, textarea, select, etc. tenga la clase `form-control`.

- Si que es verdad que para los checkboxs y los radio button, tienen sus propias clases diferentes, pero es similar a las que hemos comentado antes. Con esas dos reglas básicas podemos montar los formularios.

### ./index.html

```diff
...
<div class="container-fluid">
+ <form role="form">
+   <div class="form-group row">
+     <label class="col-sm-2 col-form-label" for="user">Usuario</label>
+     <div class="col-sm-10">
+       <input type="text" class="form-control" id="user" placeholder="Usuario">
+     </div>
+   </div>
+ </form>
</div>

```

> Ojo, diferencias con Bootstrap 3, ya no nos hace falta la class `form-horizontal` a nivel de form sino que tenemos que usar row donde usemos form-group
>
> y tampoco la class `control-label`, ahora tenemos que usar `col-form-label`.
>
> Acordaros que con `row` estamos aplicando el display flex, lo tenemos que usar para que lo ponga en una sola línea y le aplique el wrap para las resoluciones menores de `md`.

- Genial, ahora antes de seguir poniendo más elementos, queremos que el formulario se vea centrado a partir de resoluciones `md`, que podemos hacer?:

### ./index.html

```diff
...
<div class="container-fluid">
+ <div class="row justify-content-center">
+   <div class="col-md-5">
      <form role="form">
        <div class="form-group row">
          <label class="col-sm-2 col-form-label" for="user">Usuario</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="user" placeholder="Usuario">
          </div>
        </div>
      </form>
+   </div>
+ </div>
</div>

```

- Vamos a añadir ahora el campo password:

### ./index.html

```diff
...
<div class="container-fluid">
  <div class="row justify-content-center">
    <div class="col-md-5">
      <form role="form">
        <div class="form-group row">
          <label class="col-sm-2 col-form-label" for="user">Usuario</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="user" placeholder="Usuario">
          </div>
        </div>
+       <div class="form-group row">
+         <label class="col-sm-2 col-form-label" for="password">Contraseña</label>
+         <div class="col-sm-10">
+           <input type="password" class="form-control" id="password" placeholder="Contraseña">
+         </div>
+       </div>
      </form>
    </div>
  </div>
</div>

```

> Como vemos parece que hay en ciertas resoluciones que no se comporta del todo bien. ¿Que ocurre aqui?
>
> Pues tenemos que tener siempre presente que los breakpoints han cambiado con respecto la version 3.
> Hay que tener en cuenta que antes `md` era a partir de >= 992, ahora son >= 768px.
>
> Importante: Para proyectos legacy mirar bien los breakpoints que tenemos y adaptarlos.

- Para >= 992 es ahora `lg`:

### ./index.html

```diff
...
<div class="container-fluid">
  <div class="row justify-content-center">
-   <div class="col-md-5">
+   <div class="col-lg-5">
      <form role="form">
        <div class="form-group row">
          <label class="col-sm-2 col-form-label" for="user">Usuario</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="user" placeholder="Usuario">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label" for="password">Contraseña</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="password" placeholder="Contraseña">
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

```

- Incluso:

### ./index.html

```diff
...
<div class="container-fluid">
  <div class="row justify-content-center">
-   <div class="col-lg-5">
+   <div class="col-lg-6 col-xl-5">
      <form role="form">
        <div class="form-group row">
          <label class="col-sm-2 col-form-label" for="user">Usuario</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="user" placeholder="Usuario">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label" for="password">Contraseña</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="password" placeholder="Contraseña">
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

```

- Vamos a ver ahora como añadir un texto de warning para informar de que debe introducir la contraseña:

### ./index.html

```diff
...
        <div class="form-group row">
          <label class="col-sm-2 col-form-label" for="password">Contraseña</label>
          <div class="col-sm-10">
-           <input type="password" class="form-control" id="password" placeholder="Contraseña">
+           <input type="password" class="form-control is-invalid" id="password" placeholder="Contraseña">
+           <div class="invalid-feedback">
+             Tiene activo el bloqueo de mayúsculas. Recuerde que la constraseña distingue entre mayúsculas y minúsculas
+           </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

```

> Ojo!! Replaced `.has-error`, `.has-warning` and `.has-success` by `is-valid` and `is-invalid`.

- Más cambios, con respecto a cómo maquetar checkboxs y radio buttons :

### ./index.html

```diff
...
        <div class="form-group row">
          <label class="col-sm-2 col-form-label" for="password">Contraseña</label>
          <div class="col-sm-10">
            <input type="password" class="form-control is-invalid" id="password" placeholder="Contraseña">
            <div class="invalid-feedback">
              Tiene activo el bloqueo de mayúsculas. Recuerde que la constraseña distingue entre mayúsculas y minúsculas
            </div>
          </div>
        </div>
+       <div class="form-group row">
+         <div class="offset-sm-2 col-sm-10">
+           <div class="form-check">
+             <input class="form-check-input" type="checkbox" value="" id="rememberPassword">
+             <label class="form-check-label" for="rememberPassword">
+               Recordar contraseña
+             </label>
+           </div>
+         </div>
+       </div>
      </form>
    </div>
  </div>
</div>

```

> Si en vez de checkbox necesitamos un radio button, lo único que tendríamos que cambiar es `type="radio"`
>
> Bootstrap 3

```html
  <div class="checkbox">
    <label>
      <input type="checkbox"> Check box
    </label>
  </div>

  <div class="radio">
    <label>
      <input type="radio"> Radio button
    </label>
  </div>
```

- Por último vamos a añadir un botón:

### ./index.html

```diff
...
        <div class="form-group row">
          <div class="offset-sm-2 col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="rememberPassword">
              <label class="form-check-label" for="rememberPassword">
                Recordar contraseña
              </label>
            </div>
          </div>
        </div>
+       <div class="form-group row">
+         <div class="col">
+           <button type="submit" class="btn btn-primary">
+             Siguiente
+           </button>
+         </div>
+       </div>
      </form>
    </div>
  </div>
</div>

```

> Que pasa si queremos tener el botón a la derecha?
>
> Si pensamos en flex-box diriamos: utilizamos `flex-end` y listo.
>
> Problemas: tendriamos que quitar el div.col ya que para que se aplique al boton tiene que ser hijo directo. Si quitamos div.col se estropea los estilos con respecto al margen.
>
> `pull-right`? Ya no existe, porque era redundante con `float-right`, etc.

- Una posible solucion:

### ./index.html

```diff
...
        <div class="form-group row">
          <div class="offset-sm-2 col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="rememberPassword">
              <label class="form-check-label" for="rememberPassword">
                Recordar contraseña
              </label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col">
-           <button type="submit" class="btn btn-primary">
+           <button type="submit" class="btn btn-primary float-right">
              Siguiente
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

```

>  .float-{sm,md,lg,xl}-{left,right,none}

> Importante, mirar siempre los breaking changes https://getbootstrap.com/docs/4.0/migration/
