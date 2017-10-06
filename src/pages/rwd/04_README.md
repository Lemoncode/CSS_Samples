# Module 1 - Layout

# Media queries print

## Steps:

* Pass script: <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="crossorigin="anonymous"></script>

### 1. Create a basic HTML. This is the starting point for demo. 

* The styles goes on the head of document. This one create on local to solve dependecy with jQuery. Or try with codepen.io.

```html 
<style type="text/css">
      body {
        width: 90%;
        margin: 0 auto;
      }

      table {
        font-family: monospace;
        border-collapse: collapse;
        width: 100%;
      }

      td, th {
        border: 1px solid #000;
        text-align: center;
        padding: 1em;
      }

      tr {
        min-height: 300px;
      }

      tr:nth-of-type(2n + 1){
        background-color: #bbbbbb;
      }
<style />
<table>
      <tr>
        <th>Artist</th>
        <th>Album</th>
        <th>Sales</th>
      </tr>
      <tr>
        <td>Joe Doe</td>
        <td>Foo is back</td>
        <td>1</td>
      </tr>
    </table>
``` 

* Get a view of starting point

### 2. We are going to apply some media queries to modify the results on print. First we are goint to use jQuery to generate a table

* Place scripts on body bottom.

```diff javascript
+<script
+  src="https://code.jquery.com/jquery-3.2.1.min.js"
+  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
+  crossorigin="anonymous"></script>
+<script type="text/javascript">
+      $(function() {
+        generateTable(150);
+
+        function generateTable(numberOfRows) {
+          for (var index = 0; index < numberOfRows; index++) {
+            $('table tr:last').after(row(index));
+          }
+        }
+
+        function row(index) {
+          return '<tr>' + artist(index) + album(index) + sales(index) + '</tr>';
+        }
+
+        function artist(index){
+          return '<td>' + 'Joe Doe ' + index + '</td>';
+        };
+
+        function album(index) {
+          return '<td>' + 'Foo is back ' + index + '</td>';
+        };
+
+        function sales(index) {
+          return '<td>' + index + '</td>';
+        }
+      });
+    </script>
```
* Show results. Print document on browser-

### 3. Now we are going to use a  media query to solve the problem that rows showing cut.

```diff styles
+@media print {
+        table {
+          page-break-inside: auto;
+        }
+
+        tr {
+          page-break-inside: avoid;
+          page-break-after: auto;
+        }
+
+        @page{  size: landscape; }
+      }
```
