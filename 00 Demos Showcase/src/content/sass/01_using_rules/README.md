# Module 1 - Layout

# SASS Using Rules

## Steps:

### 1. Create a basic HTML. This HTML is the same for the first six demos.

```html
<body>
    <header>
        <nav>
            <ul>
                <li><a href='/'>Home</a></li>
                <li>|</li>
                <li><a href='http://www.formacion.lemoncode.net/lemoncode-blog'>Lemoncode Blog</a></li>
            </ul>
        </nav>
        <h1>
            Start Page
        </h1>
    </header>
    <section class="container">
        <div class="contact-form">
            <h1>
                Contacto
            </h1>
            <form method="POST" action="/">
                
                <div class="form-statement">
                    <label for="name">
                        NOMBRE
                    </label>
                    <input type="text" id="name" />
                </div>

                <div class="form-statement">
                    <label for="email">
                        EMAIL
                    </label>
                    <input type="text" id="email" />
                </div>
                
                <div class="form-statement">
                    <label for="subject">
                        TEMA
                    </label>
                    <input type="text" id="subject" />
                </div>
                
                <div class="form-statement">
                    <label for="message">
                        MENSAJE
                    </label>
                    <textarea id="message" rows="5" cols="100"></textarea>
                </div>
                
                <div class="form-submit">
                    <input type="submit" value="ENVIAR" />
                </div>
            </form>
        </div>
        <div class="about">
            <h2>Acerca de nostros</h2>
            <img src="../../../content/images/braulio-diez.png"/>
            <img src="../../../content/images/jaime-salas.jpg"/>
            <p>Mira tu un par de limones...</p>
        </div>
    </section>

    <footer>
        <p>Lemoncode</p>
        <nav>
            <ul>
                <li><a href='/'>Home</a></li>
                <li>|</li>
                <li><a href='http://sass-lang.com/'>Stay sassy</a></li>
            </ul>
        </nav>
    </footer>
</body>
``` 

### 2. This is the start point for styles.
```scss
// Variables declaration
$baseSize: 14px;
@import 'https://fonts.googleapis.com/css?family=Raleway';
@import 'http://fonts.googleapis.com/css?family=Share:400,700';
@import 'http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700s';

html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li,
fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, footer, header, hgroup,
menu, nav, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent; 
}

/* Basics */
html {
    font-family: 'Raleway', sans-serif;
    font-size: $baseSize; 
}

body {
    background: black; 
}

h1 {
    font-size: $baseSize + 10px; 
}

h2 {
    font-size: $baseSize + 4px;
}

h3 {
    font-size: $baseSize + 2px; 
}

/* Layout */
.container {
    width: 1200px;
    height: inherit;
    margin-left: auto;
    margin-right: auto;
    background: #FFF;
    padding: 25px;
    color: black; 
}

/* Sections */
header {
    border-bottom: 5px solid greenyellow;
    background-color: darkgrey;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    min-height: 70px;
}

header h1 {
    font-size: $baseSize + 10px;
    font-family: 'Share', cursive;
    color: yellowgreen; 
}

nav {
    font-size: $baseSize;
    font-weight: bold;
    float: right; 
    color: white;
}
nav ul {
    list-style-type: none;
}
nav ul li {
    float: left;
    margin: 2px;
}

nav ul a {
    text-decoration: none; 
    color: white;
}

nav ul a:hover {
    text-decoration: underline;
    color: yellowgreen; 
}

footer {
    font-size: $baseSize - 5px;
    text-align: center;
    color: white;
    
    position: fixed; 
    left: 0px;
    bottom: 0px;
    width: 97%;

    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    min-height: 70px;

    border-top: 5px solid greenyellow;
    background-color: darkgrey;
}


/* Forms */
.contact-form {
    background: #f8f8f8;
    width: 480px;
    height: 380px;
    margin-left: auto;
    margin-right: auto;
    border: black 2px solid;
    padding: 5px;
}

.contact-form input[type=text], .contact-form textarea {
    font-family: "Open Sans", Verdana, Helvetica, sans-serif;
    font-size: 18px;
    background: #e6e6e6;
    width: 350px;
    border: 1px #000 solid;
    float: right;
}

.form-statement {
    padding: 20px;
    display: block;
}

.contact-form textarea {
    height: 100px;
    font-family: "Open Sans", Verdana, Helvetica, sans-serif;
    resize: none;
}
.contact-form label {
    width: 150px; 
}

.contact-form input[type=submit] {
    float: right;
    border: 2px solid yellowgreen; 
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    color: white;
    background-color: black;
}

.form-submit {
    display: block;
    margin-top: 100px;
}

.about {
    background-color: white;
    width: 480px;
    height: 275px;
    margin-top: 1em;
    margin-left: auto;
    margin-right: auto;
    border: black 2px solid;
    padding: 5px;
}

.about img {
    max-width: 50%;
    max-height: 50%;
    padding: 5px;
}

.about img:hover {
    -webkit-filter: brightness(50%) sepia(1)  hue-rotate(132deg) saturate(103.2%) brightness(91.2%);
    filter: brightness(50%) sepia(1)  hue-rotate(132deg) saturate(103.2%) brightness(91.2%);
}

footer p:after {
    margin-left: 5px;
    content: '\00A9';
}

```
### 3. Let's apply some rules to our form. We can start by header.

```diff
header {
    border-bottom: 5px solid greenyellow;
    background-color: darkgrey;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    min-height: 70px;
    
+    h1 {
+        font-size: 24px;
+        font-family: 'Share', cursive;
+        color: yellowgreen; 
+    }
+}

-header h1 {
-    font-size: 24px;
-    font-family: 'Share', cursive;
-    color: yellowgreen; 
-} 
```

### 4. We can do the same with nav

```diff
+nav {
+    font-size: 14px;
+    font-weight: bold;
+    float: right; 
+    color: white;
+
+    ul {
+        list-style-type: none;
+
+        li {
+            float: left;
+            margin: 2px;
+        }
+
+        a {
+            text-decoration: none; 
+            color: white;
+
+            &:hover {
+                text-decoration: underline;
+                color: yellowgreen; 
+            }
+        }
+    }
+}

-nav ul {
-    list-style-type: none;
-}
-
-nav ul li {
-    float: left;
-    margin: 2px;
-}

-nav ul a {
-    text-decoration: none; 
-    color: white;
-}

-nav ul a:hover {
-    text-decoration: underline;
-    color: yellowgreen; 
-}
```

### 5. If we have a look to the .contact form class, we notice that we can apply rules. 

```diff
-.contact-form {
-    background: #f8f8f8;
-    width: 480px;
-    height: 380px;
-    margin-left: auto;
-    margin-right: auto;
-    border: black 2px solid;
-    padding: 5px;
-}
-
-.contact-form input[type=text], .contact-form textarea {
-    font-family: "Open Sans", Verdana, Helvetica, sans-serif;
-    font-size: 18px;
-    background: #e6e6e6;
-    width: 350px;
-    border: 1px #000 solid;
-    float: right;
-}
-
-.contact-form textarea {
-    height: 100px;
-    font-family: "Open Sans", Verdana, Helvetica, sans-serif;
-    resize: none;
-}
-
-.contact-form label {
-    width: 150px; 
-}
-
-.contact-form input[type=submit] {
-    float: right;
-    border: 2px solid yellowgreen; 
-    border-radius: 5px;
-    -moz-border-radius: 5px;
-    -webkit-border-radius: 5px;
-    color: white;
-    background-color: black;
-}

+.contact-form {
+    background: #f8f8f8;
+    width: 480px;
+    height: 380px;
+    margin-left: auto;
+    margin-right: auto;
+    border: black 2px solid;
+    padding: 5px;
+
+    input[type=text], textarea {
+        font-family: "Open Sans", Verdana, Helvetica, sans-serif;
+        font-size: 18px;
+        background: #e6e6e6;
+        width: 350px;
+        border: 1px #000 solid;
+        float: right;
+    }
+
+    textarea {
+        height: 100px;
+        font-family: "Open Sans", Verdana, Helvetica, sans-serif;
+        resize: none;
+    }
+
+    label {
+        width: 150px; 
+    }
+
+    input[type=submit] {
+        float: right;
+        border: 2px solid yellowgreen; 
+        border-radius: 5px;
+        -moz-border-radius: 5px;
+        -webkit-border-radius: 5px;
+        color: white;
+        background-color: black;
+    }
+}
```
### 6. We can apply some enhancement to the about class.

```diff
-.about {
-    background-color: white;
-    width: 480px;
-    height: 275px;
-    margin-top: 1em;
-    margin-left: auto;
-    margin-right: auto;
-    border: black 2px solid;
-    padding: 5px;
-}
-
-.about img {
-    max-width: 50%;
-    max-height: 50%;
-    padding: 5px;
-}
-
-.about img:hover {
-    -webkit-filter: brightness(50%) sepia(1)  hue-rotate(132deg) saturate(103.2%) brightness(91.2%);
-    filter: brightness(50%) sepia(1)  hue-rotate(132deg) saturate(103.2%) brightness(91.2%);
-}

+.about {
+    background-color: white;
+    width: 480px;
+    height: 275px;
+    margin-top: 1em;
+    margin-left: auto;
+    margin-right: auto;
+    border: black 2px solid;
+    padding: 5px;
+
+    img {
+        max-width: 50%;
+        max-height: 50%;
+        padding: 5px;
+
+        &:hover {
+            -webkit-filter: brightness(50%) sepia(1)  hue-rotate(132deg) saturate(103.2%) brightness(91.2%);
+            filter: brightness(50%) sepia(1)  hue-rotate(132deg) saturate(103.2%) brightness(91.2%);
+        }
+    }
+}
```
### 7. For last we are going to modify the footer.

```diff
-footer {
-    font-size: $baseSize - 5px;
-    text-align: center;
-    color: white;
-    
-    position: fixed; 
-    left: 0px;
-    bottom: 0px;
-    width: 97%;
-
-    padding-left: 30px;
-    padding-right: 30px;
-    padding-top: 30px;
-    min-height: 70px;
-
-    border-top: 5px solid greenyellow;
-    background-color: darkgrey;
-}

-footer p:after {
-    margin-left: 5px;
-    content: '\00A9';
-}

+footer {
+    font-size: $baseSize - 5px;
+    text-align: center;
+    color: white;
+    
+    position: fixed; 
+    left: 0px;
+    bottom: 0px;
+    width: 97%;
+
+    padding-left: 30px;
+    padding-right: 30px;
+    padding-top: 30px;
+    min-height: 70px;
+
+    border-top: 5px solid greenyellow;
+    background-color: darkgrey;
+
+    p:after {
+        margin-left: 5px;
+        content: '\00A9';
+    }
+}
```
