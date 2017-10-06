# Module 1 - Layout

# SASS Using @extend

## Notes about @mixin and @extend

Only use @extend when the rulesets that you are trying to DRY out are inherently and thematically related. Do not force relationships that do not exist: to do so will create unusual groupings in your project, as well as negatively impacting the source order of your code.

Use a mixin to either inject dynamic values into repeated constructs, or as a Sassy copy/paste which allows you to repeat the same group of declarations throughout your project whilst keeping a Single Source of Truth.

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
// Imports
@import 'https://fonts.googleapis.com/css?family=Raleway';
@import 'http://fonts.googleapis.com/css?family=Share:400,700';
@import 'http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700s';
// Local imports
@import "init";
@import "colors.scss";
// Variables declaration
$baseSize: 14px;

/* Basics */
html {
    font-family: 'Raleway', sans-serif;
    font-size: $baseSize; 
}

body {
    background: $mainColor; 
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
    background: $offColor;
    padding: 25px;
    color: $mainColor; 
}

/* Sections */
header {
    border-bottom: 5px solid $lemoncodeColor;
    background-color: darkgrey;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    min-height: 70px;

    h1 {
        font-size: $baseSize + 10px;
        font-family: 'Share', cursive;
        color: $lemoncodeColor;    
    }
}

nav {
    font-size: $baseSize;
    font-weight: bold;
    float: right; 
    color: $offColor;

    ul {
        list-style-type: none;

        li {
            float: left;
            margin: 2px;        
        }   

        a {
            text-decoration: none; 
            color: $offColor;

            &:hover {
                text-decoration: underline;
                color: $lemoncodeColor;            
            }        
        } 
    }
}

/* Forms */
.contact-form {
    background: #f8f8f8;
    width: 480px;
    height: 380px;
    margin-left: auto;
    margin-right: auto;
    border: $mainColor 2px solid;
    padding: 5px;

    input[type=text], textarea {
        font-family: "Open Sans", Verdana, Helvetica, sans-serif;
        font-size: 18px;
        background: #e6e6e6;
        width: 350px;
        border: 1px $mainColor solid;
        float: right;    
    }

    textarea {
        height: 100px;
        font-family: "Open Sans", Verdana, Helvetica, sans-serif;
        resize: none;
    }

    label {
        width: 150px;
    }

    input[type=submit] {
        float: right;
        border: 2px solid $lemoncodeColor; 
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        color: $offColor;
        background-color: $mainColor;
    }
}

.form-statement {
    padding: 20px;
    display: block;
}

.form-submit {
    display: block;
    margin-top: 100px;
}

.about {
    background-color: $offColor;
    width: 480px;
    height: 275px;
    margin-top: 1em;
    margin-left: auto;
    margin-right: auto;
    border: $mainColor 2px solid;
    padding: 5px;

    img {
        max-width: 50%;
        max-height: 50%;
        padding: 5px;

        &:hover {
            -webkit-filter: brightness(50%) sepia(1)  hue-rotate(132deg) saturate(103.2%) brightness(91.2%);
            filter: brightness(50%) sepia(1)  hue-rotate(132deg) saturate(103.2%) brightness(91.2%);        
        }    
    }
}

.about img:hover {
    -webkit-filter: brightness(50%) sepia(1)  hue-rotate(132deg) saturate(103.2%) brightness(91.2%);
    filter: brightness(50%) sepia(1)  hue-rotate(132deg) saturate(103.2%) brightness(91.2%);
}

footer {
    font-size: $baseSize - 5px;
    text-align: center;
    color: $offColor;
    
    position: fixed; 
    left: 0px;
    bottom: 0px;
    width: 97%;

    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    min-height: 70px;

    border-top: 5px solid $lemoncodeColor;
    background-color: darkgrey;

    p:after {
        margin-left: 5px;
        content: '\00A9';    
    }
}
```
### 3. Let's apply @extend example on .contact-form

``` diff
.contact-form {
    ....
-    input[type=text], textarea {
+    input[type=text] {
        font-family: "Open Sans", Verdana, Helvetica, sans-serif;
        font-size: 18px;
        background: #e6e6e6;
        width: 350px;
        border: 1px $mainColor solid;
        float: right;    
    }

    textarea {
+        @extend input[type=text]
        height: 100px;
        font-family: "Open Sans", Verdana, Helvetica, sans-serif;
        resize: none;
    }
```
