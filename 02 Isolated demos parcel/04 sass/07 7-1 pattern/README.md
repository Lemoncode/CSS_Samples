# 7-1 Pattern

> Reference: https://github.com/HugoGiraudel/sass-boilerplate
> Reference: https://www.creativebloq.com/how-to/how-to-structure-media-queries-in-sass
> Reference: https://css-tricks.com/approaches-media-queries-sass/
> TODO: Migrate app API Ice and Fire

The name came from _7 folders 1 file_ 

```
sass/
|
|– base/
|– components/
|– layout/
|– pages/
|– themes/
|– utils/
|– vendors/
|– main.scss 
```

## base folder

Contains what we call the project template. 

* _base.scss standar styles for common HTML elements
* _reset.scss resets css styles
* _typography.scss typography rules

## layout folder

Contains everything that is related with the site layout. This folder contains styles for the main parts of the site(header, footer, sidebar, sidebar). For example:

* _grid.scss
* _header.scss
* _footer.scss
* _sidebar.scss
* _forms.scss
* _navigation.scss

This folder can be called _partials_ as well.

## components folder

For smaller components we use the _components folder_. While _layout_ defines the global structure, _components_ is focused on widgets, for example:

* _media.scss
* _carousel.scss
* _thumbnails.scss

This folder can be called _modules_ as well.

## pages folder

This folder is used for specific page styles. For example:

* _home.scss
* _contact.scss

## themes folder

This folder contains different themes

## abstracts folder

Contains everything is related with sass. When we compile this file no css must be generated, this is the golden rule for this folder.

* _variables.scss
* _mixins.scss
* _functions.scss
* _placeholders.scss

This folder is called _utils_, _helpers_.

## vendors folder

Third party libraries. If we need to override any of the vendors we can create a new folder for this purpose _vendors-extensions_ 

# Demo

## We're going to migrate the Ice And Fire Aplication. 

* Create _index.html_

```html
<body>
    <header>
        <img src="http://bazisgroup.com/wp-content/uploads/2017/07/game-of-thrones-photo.jpg" alt="Game of Thrones">
    </header>
    <div class="content">
        <div class="search">
            <div class="search search_item">
                <span>House</span>
                <input id="input-house" type="text" placeholder="house" />
            </div>
            <div class="search search_item">
                <span>Character</span>
                <input id="input-character" type="text" placeholder="character" />
            </div>
            <button id="search_button" class="search search_button">Search</button>
        </div>
        <div class="display">
            <div class="houses" id="houses"></div>
            <div class="characters" id="characters"></div>
        </div>
    </div>
</body>
```

* Edit as follows _main.scss_

```scss
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
}

.content {
    margin: 3rem;
}

header {
    text-align: center;
    background-color: black;
}

header img {
    display: inline-block;
    min-width: 30%;
    max-height: 150px;
}

span {
    margin: auto 0;
}

button {
    border-radius: 3px / 5px;  
    background-color: rgba(220, 220, 220, 0.9);
    border: 1.5px solid rgba(90,90,90,0.4);
}

button:hover {
    background-color: rgba(220, 220, 220, 0.2);
}

input {
    display: inline-block;
    border-radius: 3px / 5px;
    border: 1.5px solid rgba(90,90,90,0.4);
    background: rgba(220,220,220,0.16);
    padding: 0.2rem 0.4rem;
    margin-left: 0.5rem;
    width: 15rem;
}

.search {
    display: flex;
    flex-flow: row;
}

.search.search_item {
    flex-grow: 2;
}

.search.search_button {
    align-content: flex-end;
}

.display {
    display: flex;
}

.display .houses {
    flex-grow: 2;
}

.display .characters {
    flex-grow: 1;
}

```

Let's kick off the application and see it running on browser. Ok, everything seems to works so lets start our 7-1 refactor.

## Steps.

### 1. We will start by creating de base folder and place there the following files:

* Create _./src/sass/base/\_reset.scss_

```scss
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
```

* Create _./src/sass/base/\_typography.scss_

```scss
body {
    font-family: Arial, Helvetica, sans-serif;
}

```

To handle all base related files we're going to create a single file that will import all of them.

* Create _./src\sass\base\_base.scss_

```scss
@import './reset';
@import './typography';
```

### 2. With this on place let's jump to components folder. Remember here we're going to place widgets.

* Create _./src\sass\components\_banner.scss_, this code will replace our _header_ styles.

```scss
.banner-container {
    text-align: center;
    background-color: black; // TODO: Move to variables
}

.banner-container > img {
    min-width: 30%;
    max-height: 150px;
}
```

* Create _./src\sass\components\_button.scss_

```scss
button {
    border-radius: 3px / 5px;  
    background-color: rgba(220, 220, 220, 0.9);
    border: 1.5px solid rgba(90,90,90,0.4);
}

button:hover {
    background-color: rgba(220, 220, 220, 0.2);
}
```

* Create _./src\sass\components\_input.scss_

```scss
input {
    display: inline-block;
    border-radius: 3px / 5px;
    border: 1.5px solid rgba(90,90,90,0.4);
    background: rgba(220,220,220,0.16);
    padding: 0.2rem 0.4rem;
    margin-left: 0.5rem;
    width: 15rem;   
}
```

* Create _./src\sass\components\_span.scss_

```scss
span {
    margin: auto 0;
}
```

* Create _./src\sass\components\_components.scss_

```scss
@import './banner';
@import './button';
@import './input';
@import './span';
```


### 3. Now that we got this let's create the abstract folder

* Create _./src\sass\abstract\_functions.scss_ 

```scss
@function grey-color-alpha($amount: 0, $alpha: 0) {
    @return rgba($amount, $amount, $amount, $alpha);
}
```

* Create _./src\sass\abstract\_mixins.scss_

```scss
@mixin default-border-radius() {
    border-radius: 3px / 5px; 
}
```

* Create _./src\sass\abstract\_variables.scss_

```scss
$mainColor: black;
```

* Create _./src\sass\abstract\_abstract.scss_

```scss
@import './functions';
@import './mixins';
@import './variables';
```

### 4. Now let's go and start to work with layout

* Create _./src\sass\layout\_search.scss_

```scss
.search {
    display: flex;
    flex-flow: row;
}

.search.search_item {
    flex-grow: 2;
}

.search.search_button {
    align-content: flex-end;
}
```

* Create _./src\sass\layout\_display.scss_

```scss
.display {
    display: flex;
}

.display .houses {
    flex-grow: 2;
}

.display .characters {
    flex-grow: 1;
}

```

* Create _./src\sass\layout\_layout.scss_

```scss
@import './display';
@import './search';
```

### 5. Good we're almost there. In this example we're not going to have external dependencies, third party or vendors, so we can avoid __vendors__ folder. As well we're not going to support multiple themes, so we don't need __themes__ folder. The last folder that we're going to use is __page__. 

* Create _./src\sass\page\_home.scss_

```scss
.content {
    margin: 3rem;
}
```

### 6. Now it's time to import all our files in __main.scss__

```diff
- body {
-     font-family: Arial, Helvetica, sans-serif;
-     margin: 0;
- }
-
- .content {
-     margin: 3rem;
- }
-
- header {
-     text-align: center;
-     background-color: black;
- }
-
- header img {
-     display: inline-block;
-     min-width: 30%;
-     max-height: 150px;
- }
-
- span {
-     margin: auto 0;
- }
-
- button {
-     border-radius: 3px / 5px;  
-     background-color: rgba(220, 220, 220, 0.9);
-     border: 1.5px solid rgba(90,90,90,0.4);
- }
-
- button:hover {
-     background-color: rgba(220, 220, 220, 0.2);
- }
-
- input {
-     display: inline-block;
-     border-radius: 3px / 5px;
-     border: 1.5px solid rgba(90,90,90,0.4);
-     background: rgba(220,220,220,0.16);
-     padding: 0.2rem 0.4rem;
-     margin-left: 0.5rem;
-     width: 15rem;
- }
-
- .search {
-     display: flex;
-     flex-flow: row;
- }
-
- .search.search_item {
-     flex-grow: 2;
- }
-
- .search.search_button {
-     align-content: flex-end;
- }
-
- .display {
-     display: flex;
- }
-
- .display .houses {
-     flex-grow: 2;
- }
-
- .display .characters {
-     flex-grow: 1;
- }
+@import 'abstract/_abstract';
+@import 'base/_base';
+@import 'components/_components';
+@import 'layout/_layout';
+@import 'page/_home';
```

* Modify _./src\index.html_

```diff
-<header>
+<header class="banner-container">
    <img src="http://bazisgroup.com/wp-content/uploads/2017/07/game-of-thrones-photo.jpg" alt="Game of Thrones">
</header>
```

Our main refactor is done, so let's give a try

```bash
$ npm start
```

### 7. For las we have to use our __abstracts__. Let's refactor our code to use them.

* Modify _./src\sass\components\_banner.scss_

```diff
.banner-container {
    text-align: center;
-   background-color: black;
+   background-color: $mainColor;
}
....
```

* Modify _./src\sass\components\_button.scss_

```diff
button {
-   border-radius: 3px / 5px;  
+   @include default-border-radius();  
-   background-color:  rgba(220, 220, 220, 0.9);
-   border: 1.5px solid rgba(90,90,90,0.4);
+   background-color:  grey-color-alpha(220, 0.9);
+   border: 1.5px solid grey-color-alpha(90, 0.4);
}

button:hover {
-   background-color: rgba(220, 220, 220, 0.2);
+   background-color: grey-color-alpha(220, 0.2);
}
```

* Modify _./src\sass\components\_input.scss_

```diff
input {
    display: inline-block;
-   border-radius: 3px / 5px;
+   @include default-border-radius();
-   border: 1.5px solid rgba(90,90,90,0.4);
+   border: 1.5px solid grey-color-alpha(90, 0.4);;
-   background: rgba(220,220,220,0.16);
+   background: grey-color-alpha(220, 0.16);
    padding: 0.2rem 0.4rem;
    margin-left: 0.5rem;
    width: 15rem;   
}
```