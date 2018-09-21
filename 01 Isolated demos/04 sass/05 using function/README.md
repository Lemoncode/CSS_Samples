# Module 1 - Layout

# SASS Udsing Functions

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
            <img src="./content/images/braulio-diez.png"/>
            <img src="./content/images/jaime-salas.jpg"/>
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
```scss form.scss
@import 'https://fonts.googleapis.com/css?family=Raleway';
@import 'http://fonts.googleapis.com/css?family=Share:400,700';
@import 'http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700s';

@import "init";
@import "colors.scss";
@import "mixins.scss";

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
    @include justify-content;
    background: #FFF;
    padding: 25px;
    color: $mainColor; 
}

/* Sections */
header {
    @include header-footer-box-initialization();

    h1 {
        font-size: 24px;
        font-family: 'Share', cursive;
        color: yellowgreen; 
    }
} 

nav {
    font-size: 14px;
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
    height: 380px;
    @include content-sections-initialization();

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
        border: 2px solid yellowgreen; 
        @include rounded-corners-all;
        color: $offColor;
        background-color: black;
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
    height: 275px;
    margin-top: 1em;
    @include content-sections-initialization();

    img {
        max-width: 50%;
        max-height: 50%;
        padding: 5px;

        &:hover {
            @include image-transparent-cover;        
        }
    }
}

footer {
    font-size: $baseSize - 5px;
    text-align: center;
    color: $offColor;
    
    @include set-footer-position();
    width: 97%;

    @include header-footer-box-initialization();

    p:after {
        margin-left: 5px;
        content: '\00A9';
    }
} 
```

* If we start the application we must see our sass file compiled, and styles applied to index.html.

### 3. Our cover filter it's working find, but what if we want to mek something more generic, something that given a color creates this cover.

* Lets create a function that makes that. Create a new file `_functions.scss` and place the following code:

```scss

```