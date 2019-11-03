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

