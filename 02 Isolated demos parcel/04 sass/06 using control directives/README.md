# Module 1 - Layout

# SASS Using control directives

## Steps:

### 1. Create a basic HTML.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Dynamic grid</title>
    <link rel="StyleSheet" href="./sass/main.scss" />
</head>
<body>
    <div>
        <div class="col-1"></div>
        <div class="col-1"></div>
        <div class="col-2"></div>
        <div class="col-1"></div>
        <div class="col-1"></div>
    </div>
</body>
</html>
``` 

### 2. Our goal is create a dynamic grid system, where we can define dynamically the number of columns, not being tied to a rigid number of columns as bootstrap system where we are tied to 12.


```scss _mixins.scss
@mixin calculate-columns($numberOfColoumns: 1) {
    @for $colNumber from 1 through $numberOfColoumns {
        .col-#{$colNumber} {
            width: 100% * ($colNumber / $numberOfColoumns);
            float: left;
            box-sizing: border-box;
            border: 0.3em solid black;
        }
    }
}
```
* This will generate a columns between one and the total number feed it to the `calculate-columns` function.

### 3. Now that we can use it in `main.scss`

```scss main.scss
@import "mixins.scss";

.container {
    padding-left: 1em;
    padding-right: 1em;

    div:nth-of-type(2n + 1) {
        background-color: lighten(yellow, 25%);
    }

    div:nth-of-type(2n) {
        background-color: lighten(cyan, 25%);
    }
}

[class^='col-'] {
    height: 12em;
}

@media (max-width: 500px) and (min-width: 0px) {
    @include calculate-columns(1);
}

@media (min-width: 500px) {
    @include calculate-columns(2);
}

@media (min-width: 1200px) {
    @include calculate-columns(6);
}
```

### 4. It seems to work, but at the smallest resolution, or borders disappear, this means that the _.col-1_ isn't calculated. This is due to _@for_, it doesn't enter in. Lets fix this.

```scss
/*diff*/
@mixin calculate-columns($columns: 1) {
    @if($columns > 1) {
        @include multiple-columns($columns);
    }
    @else {
        @include single-column;
    }
}
/*diff*/

/*diff*/
@mixin multiple-columns($columns) {
/*diff*/
    @for $colIndex from 1 to $columns {
        .col-#{$colIndex} {
            width: 100% * ($colIndex / $columns);
            float: left;
            box-sizing: border-box;
            border: 0.3em solid black;
        }
    }
}
/*diff*/
@mixin single-column {
    .col-1 {
        width: 100%;
        float: left;
        box-sizing: border-box;
        border: 0.3em solid black;
    }
}
/*diff*/
```