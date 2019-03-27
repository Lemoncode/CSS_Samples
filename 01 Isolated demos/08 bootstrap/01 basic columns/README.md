# Basic columns demo

* We start from this HTML

```html
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>LEMONCODE CSS PLAYGROUND</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="content/site.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body>
  <header class="container-fluid">
    <div class="col" style="background:lightblue">
      <h2>Gestor de infracciones</h2>
    </div>
  </header>

  <div class="container-fluid">
    <div class="col-md-4" style="background:lightgreen;height: 500px">
      <p>Buscar Estudio</p>
    </div>
    <div class="col-md-8" style="background:AntiqueWhite;height: 500px">
      <p>Estudios cerrados y pendientes</p>
    </div>
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

* `container` vs `container-fluid`: `container` centers content geting al available space, while `container-fluid` leaves a little margin. In small resolution is the same behavior. 

### 1. Before getting further lets have some considerations about the code of this page. Lets talks a little bit of the main content region.

```html
<div class="container-fluid">
    <div class="col-md-4" style="background:lightgreen;height: 500px">
        <p>Buscar Estudio</p>
    </div>
    <div class="col-md-8" style="background:AntiqueWhite;height: 500px">
        <p>Estudios cerrados y pendientes</p>
    </div>
</div>
```

* If we run this what is going to happen with this code:

- Que pasa ahora, fijaros en una cosa, tenemos aqui una columna de 4 y otra de 8. Y fijaros que al no tener row, fijaros como no quita ese espacio que hemos comentado, los gutters. Ahora despues lo resolveremos.

- Pero ahora quiero que veamos la como se comporta en móvil, vale, parece que se ve guay. Si vemos el HTML a ver que pone:

- Pone que ocupa una columna de 4 y otra de 8. Esto es mentira, ya que ambas ocupan el 100%. Es decir, uno de los problemas que tiene es que no tiene semantica segun la resolución a la que se encuentra.

- Y no es porque no tenga semantica para que nosotros lo entendamos, que bueno que eso tambien es importante, es que no tiene semantica para una máquina. Entonces la accesibilidad de la web, no la conseguimos. HTML5 esta pensado para una mayor accesibilidad de la web, que significa esto? Que sistemas automaticos sean capaces de leer tu página, y para esto tu pagina debe estar construida bajo ciertas reglas y parámetros, y este tipo de grids no lo cumplen.

### 2. What if we include a parent `row` element.

```diff
...
<div class="container-fluid">
+   <div class="row">
      <div class="col-md-4" style="background:lightgreen;height: 500px">
        <p>Buscar Estudio</p>
      </div>
      <div class="col-md-8" style="background:AntiqueWhite;height: 500px">
        <p>Estudios cerrados y pendientes</p>
      </div>
+   </div>
  </div>
...
```

> Fijaros como ha quitado esos 15px de margin por la izquierda y x la derecha. Es lo que hablamos de los gutters.
>
> (Jugamos ahora con Dev Tools de Phone, y iPad buscando los 768, iPadPro) Lo que podriamos hacer es, oye yo quiero que siga respetando esas columnas para una resolucion más pequeña:

```diff
...
<div class="container-fluid">
    <div class="row">
-     <div class="col-md-4" style="background:lightgreen;height: 500px">
+     <div class="col-sm-4 col-md-4" style="background:lightgreen;height: 500px">
        <p>Buscar Estudio</p>
      </div>
-     <div class="col-md-8" style="background:AntiqueWhite;height: 500px">
+     <div class="col-sm-8 col-md-8" style="background:AntiqueWhite;height: 500px">
        <p>Estudios cerrados y pendientes</p>
      </div>
    </div>
  </div>
...
```

> Como vemos ahora nos sigue respetando el ancho de columna, porque estamos añadiendo una resolucion menor y que aplique esos estilos.
> Aun así seguimos teniendo el mismo problema, fijaros que para resoluciones extra small, sigue siendo mentira la sintaxis, no ocupa las 4 columnas sino el 100%.

- ¿Cómo comprobamos que realmente Bootstrap esta usando Mobile first?:

### ./index.html

```diff
...
<div class="container-fluid">
    <div class="row">
-     <div class="col-sm-4 col-md-4" style="background:lightgreen;height: 500px">
+     <div class="col-sm-4" style="background:lightgreen;height: 500px">
        <p>Buscar Estudio</p>
      </div>
-     <div class="col-sm-8 col-md-8" style="background:AntiqueWhite;height: 500px">
+     <div class="col-sm-8" style="background:AntiqueWhite;height: 500px">
        <p>Estudios cerrados y pendientes</p>
      </div>
    </div>
  </div>
...
```

- Que más podemos probar? Pues podemos aplicar offset, es decir, añadir un espacio para empujar la columna:

### ./index.html

```diff
<header class="container-fluid">
- <div class="col-md-12" style="background:lightblue">
+ <div class="offset-md-2 col-md-10" style="background:lightblue">
    <h2>Gestor de infracciones</h2>
  </div>
</header>
...
```

> Ojito aqui, que tenemos diferencias con la version 3 (col-md-offset-2).
>
> Empujamos la columna 2 veces a partir de la resolucion md, de aqui para abajo quedaría en un 100%

- Para los que sepais Bootstrap anteriormente, como se escribe el tamaño más pequeño de sm, el extra small?
- Pues ese ya no funciona. Como se escribe? Pues si os acordais existe la opcion por ejemplo `col-4`. Recordar siempre que estamos usando flex-box, y con flexbox es muy facil hacer que una columna ocupe el ancho que querramos para todas las resoluciones (usando flex-basis). Por tanto, como no hay una resolucion más pequeña de `xs`, si no le ponemos una determinada resolución, significa que lo vamos a usar para todas las resoluciones:

### ./index.html

```diff
...
<div class="container-fluid">
    <div class="row">
-     <div class="col-sm-4" style="background:lightgreen;height: 500px">
+     <div class="col-4" style="background:lightgreen;height: 500px">
        <p>Buscar Estudio</p>
      </div>
-     <div class="col-sm-8" style="background:AntiqueWhite;height: 500px">
+     <div class="col-8" style="background:AntiqueWhite;height: 500px">
        <p>Estudios cerrados y pendientes</p>
      </div>
    </div>
  </div>
...
```

> (Jugamos con las diferentes resoluciones de mobiles y tablets)
>
> Si vemos los styles en la consola, vemos que valor toma flex-basis, etc.

- Fijaros que otra opcion que tenemos es por ejemplo definir el tamaño de una columna, y dejar que la otra ocupe el resto:

### ./index.html

```diff
...
<div class="container-fluid">
    <div class="row">
-     <div class="col-4" style="background:lightgreen;height: 500px">
+     <div class="col" style="background:lightgreen;height: 500px">
        <p>Buscar Estudio</p>
      </div>
      <div class="col-8" style="background:AntiqueWhite;height: 500px">
        <p>Estudios cerrados y pendientes</p>
      </div>
    </div>
  </div>
...
```

> Fijaros que ahora incluso tiene una mejor respuesta en versiones muy pequeñas.

- Por último, os acordais de la parte de flexbox que vimos para alinear el contenido? `justify-content`, `align-items`, etc. Pues fijaros lo que nos ofrece Bootstrap:

### ./index.html

```diff
...
<div class="container-fluid">
    <div class="row">
-     <div class="col" style="background:lightgreen;height: 500px">
+     <div class="col-4" style="background:lightgreen;height: 500px">
        <p>Buscar Estudio</p>
      </div>
-     <div class="col-8" style="background:AntiqueWhite;height: 500px">
+     <div class="col-4" style="background:AntiqueWhite;height: 500px">
        <p>Estudios cerrados y pendientes</p>
      </div>
    </div>
  </div>
...
```

> Vemos que nuestros items no ocupan el 100% y estan alineados a la izquierda, como podriamos moverlos al centro?

- Siguiendo lo que vimos antes, podríamos usar el offset, pero si pensamos en flex-box que hariamos? (`justify-content`):

### ./index.html

```diff
...
<div class="container-fluid">
-   <div class="row">
+   <div class="row justify-content-center">
      <div class="col-4" style="background:lightgreen;height: 500px">
        <p>Buscar Estudio</p>
      </div>
      <div class="col-4" style="background:AntiqueWhite;height: 500px">
        <p>Estudios cerrados y pendientes</p>
      </div>
    </div>
  </div>
...
```

- O por ejemplo, el `flex-end`:

### ./index.html

```diff
...
<div class="container-fluid">
-   <div class="row justify-content-center">
+   <div class="row justify-content-end">
      <div class="col-4" style="background:lightgreen;height: 500px">
        <p>Buscar Estudio</p>
      </div>
      <div class="col-4" style="background:AntiqueWhite;height: 500px">
        <p>Estudios cerrados y pendientes</p>
      </div>
    </div>
  </div>
...
```

> Que problema veis con esto? Fijaros que para todas las resoluciones se ve igual, ¿que pasa si para resoluciones mas pequeñas queremos otro alineamiento?
>
> Estariamos jodidos, tendriamos que cambiar nuestro html para otra resolucion, etc.
>
> Sabiendo CSS sin embargo, por ejemplo, en vez de usar esta clase, iriamos a nuestro css, sass, etc y aplicariamos a la row un `justify-content-center` y con una media query una resolucion menor, cambiariamos la propiedad. Veis ahora lo importante que es conocer la base de CSS?
>
> Tambien tienen algo parecido para el `align-items` y `align-self` para alinear el elemento en vez del container.

- Comentar un poco tambien el tema de las nested rows, es decir, anidamiento de rows unas dentro de otras:

### ./index.html

```diff
...
<div class="container-fluid">
    <div class="row justify-content-end">
      <div class="col-4" style="background:lightgreen;height: 500px">
        <p>Buscar Estudio</p>
+       <div class="row">
+         <div class="col-6" style="background:lightblue;height: 200px;">
+           <p>Hi nested row!</p>
+         </div>
+       </div>
      </div>
      <div class="col-4" style="background:AntiqueWhite;height: 500px">
        <p>Estudios cerrados y pendientes</p>
      </div>
    </div>
  </div>
...
```

> Esto es el mismo comportamiento que teniamos en Bootstrap 3, fijaros que le digo que ocupe 6 columnas, es decir, la mitad del espacio de su contenedor padre.
