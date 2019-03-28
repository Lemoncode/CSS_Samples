# In this demo we are going to build a responsive system that will use css grid and flexbox.

### 1. We will start from this html

```html
<body>
    <div class="main-display">
        <main class="main-content">
            <header class="header main-content-item">
                <h2>HEADER</h2>
            </header>
            <aside class="regular main-content-item">
                <h3>REGULAR</h3>
            </aside>
            <section class="articles main-content-item">
                <h3>ARTICLES</h3>
            </section>
            <aside class="info main-content-item">
                <h3>INFO</h3>
            </aside>
            <footer class="footer main-content-item">
                <h2>FOOTER</h2>
            </footer>
        </main>
    </div>
</body>
```

### 2. To not get confuse lets add a tini reset css file.

```scss _reset.scss
* {
    padding: 0;
    margin: 0;
}
```

```scss main.scss
@import "reset.scss";  
```

### 3. We want to get all viewport height, to achieve this, we are going to convert the body in a flex container, that will host just a single element, that will get all the ramaining space.

```scss main.scss
@import "reset.scss";

/*diff*/
body {
    font-family: sans-serif;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

.main-display {
    flex-grow: 1;
    background-color: aquamarine;
}
/*diff*/
```
* Lets see if this it's currently working.
* We can see that all background is `aqaumarine`, so `main-display` it's working as expected.  

### 4. Ok, because we are using grid, flexbox and media queries, we can handle each resolution independently, this is because we are not worrying about content. So lets start by full resolution.

```scss _layout.scss
@mixin base-grid-definition() {
    display: grid;
    grid-row-gap: 0.5rem;
    grid-column-gap: 0.5rem;
}

@mixin full-resolution {
    @include base-grid-definition();

    grid-template-areas: 
        "header header header header"
        "regular articles articles info"
        "footer footer footer footer";
    
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 10vh 80vh 10vh;
}
```

* We also have to associate the areas.

```diff main.scss
@import "reset.scss";
+@import "layout.scss";

....

.main-display {
    flex-grow: 1;
-   background-color: aquamarine;
}

+.header {
+    grid-area: header;
+    background-color: pink;
+}
+
+.articles {
+    grid-area: articles;
+    background-color: green;
+}
+
+.regular {
+    grid-area: regular;
+    background-color: blue;
+}
+
+.info {
+    grid-area: info;
+    background-color: cyan;
+} 
+
+.footer {
+    grid-area: footer;
+    background-color: yellow;
+}
+
+.main-content {
+    @include full-resolution;
+}
```

### 5. Lets add a medium resolution.

```scss _layout.scss
@mixin base-grid-definition() {
    display: grid;
    grid-row-gap: 0.5rem;
    grid-column-gap: 0.5rem;
}

@mixin full-resolution {
    @include base-grid-definition();

    grid-template-areas: 
        "header header header header"
        "regular articles articles info"
        "footer footer footer footer";
    
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 10vh 80vh 10vh;
}

/*diff*/
@mixin medium-resolution {
    @include base-grid-definition();

    grid-template-areas: 
        "header header header"
        "articles articles info"
        "regular regular regular"
        "footer footer footer";
    
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 10vh 40vh 40vh 10vh;
}
/*diff*/
```

* Now it's time to change our `main.scss` so it can support different layouts for different resolutions.

```diff main.scss
- .main-content {
-     @include full-resolution;
- }

+@media screen and (min-width: 75rem) {
+    .main-content {
+        @include full-resolution;
+    }
+}
+
+@media screen and (max-width: 74.9rem) and (min-width: 48rem) {
+    .main-content {
+        @include medium-resolution;
+    }
+}
```

* Lets see if this is working.
* If we go down 48 rem, we watch everything display in block. Lets change this behavior.

### 6. For last lets add a small resolution layout.

```diff _layout.scss
...
+@mixin small-resolution {
+    .main-content {
+        display: flex;
+        flex-direction: column;
+        height: 100vh;
+
+        .main-content-item {
+            flex-grow: 1;
+        }
+    }
+}
```

```diff main.scss
+@media screen and (max-width: 47.9rem) {
+    @include small-resolution;
+}
```