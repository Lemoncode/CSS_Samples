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
// http://hugogiraudel.com/2013/08/08/advanced-sass-list-functions/
// http://hugogiraudel.com/2013/10/09/advanced-sass-list-functions-again/
// https://www.sitepoint.com/understanding-sass-units/
// http://stackoverflow.com/questions/2348597/why-doesnt-this-javascript-rgb-to-hsl-code-work/2348659#2348659
// http://stackoverflow.com/questions/29037023/how-to-calculate-required-hue-rotate-to-generate-specific-colour
// https://www.sitepoint.com/using-sass-error-warn-and-debug-directives/

$baseColorHue: 38;
$baseColorSaturation: 24.5;
$baseColorBrightnes: 60;

@function calculateRotation($r, $g, $b) {
    $h: nth(rgb-to-hsl($r, $g, $b), 1);
    // @debug $h;
    @return 0deg + $h - $baseColorHue; // [7]
}

@function calculateSaturationFilter($r, $g, $b) {
    $s: nth(rgb-to-hsl($r, $g, $b), 2);
    // @debug $s;
    // Built in function -> percentage
    @return percentage((500 + ($baseColorSaturation - $s)) / 100); // Saturate extra to notice effects.
}

@function calculateBrightness($r, $g, $b) {
    $l: nth(rgb-to-hsl($r, $g, $b), 3); // [5]
    // @debug $l;
    @return percentage((100 + ($l - $baseColorBrightnes)) / 100); // [6]
}

@function rgb-to-hsl($r, $g, $b) {
    $r: $r / 255;
    $g: $g / 255;
    $b: $b / 255;

    $maxValue: max($r, $g, $b);
    $minValue: min($r, $g, $b);
    $l: ($maxValue + $minValue) / 2;
    $h: ();
    $s: ();

    @if ($maxValue == $minValue) {
        $h: 0;
        $s: 0;
    }
    @else {
        $s: calculateSaturation($l, $maxValue, $minValue);
        $h: calculateHue($r, $g, $b);
    }
    
    $hsl: floor($h * 360), floor($s * 100), floor($l * 100); // [4]
    @return $hsl;
}

@function calculateSaturation($l, $maxValue, $minValue) {
    $delta: $maxValue - $minValue;
    $saturation: ();
    @if ($l > 0.5) {
        $saturation: $delta / (2 - $maxValue - $minValue);
    } @else {
        $saturation: $delta / ($maxValue + $minValue);
    }

    @return $saturation;
}


@function calculateHue($r, $g, $b) {
    $hue: (); // [2]
    $maxValueHue: max($r, $g, $b); // [3]
    $minValueHue: min($r, $g, $b); // [3]

    @if($maxValueHue == $r) {
        $hue: ($g - $b) / ($maxValueHue - $minValueHue) + hueFactor($g, $b);
    } @else if ($maxValueHue == $g) {
        $hue: ($b -$r) / ($maxValueHue - $minValueHue) + 2;
    } @else if ($r - $g) {
        $hue: ($r -$g) / ($maxValueHue - $minValueHue) + 4
    }

    @return $hue / 6;
}


@function hueFactor($g, $b) {
    $gLowerThanb: $g < $b; 
    @return if($gLowerThanb, 6, 0); // [1]
}

```

1. Teranry operator
2. This way we can initialize a variable to 'null' value.
3. This mathematical functions belongs to sass
4. We can create collections in SASS, the way separaitin by comas. The floor function is from SASS as well
5. The collections in SASS are one based index. nth function provides a way to select one item from the collection
6. percentage belongs to sass.
7. There is no a explicit way to perform casting. The way is using a type unit in this case we are using 0deg, to achieve this.
 
### 4. Now that we have this is time to use it on our mixins.

```diff _mixins.scss
+@import "colors.scss";
+@import "functions.scss";

@mixin rounded-corners-all($size: 5px) {
    border-radius: $size;
}

@mixin header-footer-box-initialization() {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    min-height: 70px;
    background-color: darkgrey;
    border-top: 5px solid $lemoncodeColor;
}

@mixin content-sections-initialization() {
    width: 480px;
    border: $mainColor 2px solid;
    padding: 5px;
    @include justify-content();
}

@mixin justify-content() {
    margin-left: auto;
    margin-right: auto;
}

@mixin set-footer-position() {
    position: fixed;
    left: 0px;
    bottom: 0px;
}

@mixin image-transparent-cover() {
-   -webkit-filter: brightness(50%) sepia(1)  hue-rotate(132deg) saturate(103.2%) brightness(91.2%);
-   filter: brightness(50%) sepia(1)  hue-rotate(132deg) saturate(103.2%) brightness(91.2%);
+    -webkit-filter: brightness(50%) sepia(1)  hue-rotate(calculateRotation(104, 238, 148)) saturate(calculateSaturationFilter(104, 238, 148)) brightness(calculateBrightness(104, 238, 148));
+    filter: brightness(50%) sepia(1)  hue-rotate(calculateRotation(104, 238, 148)) saturate(calculateSaturationFilter(104, 238, 148)) brightness(calculateBrightness(104, 238, 148));   
}
```