# Basis AgGrid Components

Basis AgGrid Components are a set of [ag-grid](https://www.ag-grid.com/) components which can handle filtering , rendering & editing with focus on scalar types.

### Supported Browsers

| [![IE / Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) IE / Edge | [![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) Firefox | [![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) Chrome | [![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) Safari | [![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png)](http://godban.github.io/browsers-support-badges/) Opera |
| :---: | :---: | :---: | :---: | :---: |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

**Note :** To support IE11 browser include the [date-time-format-timezone](https://github.com/formatjs/date-time-format-timezone/) polyfill

### Included Components 

* **BooleanEditor**
* **BooleanFilter**
* **BooleanRenderer**
* **DateTimeFilter**
* **DateTimeEditor**
* **ImageRenderer**
* **TemplateRenderer**

### How To Install

With npm

```text
npm install BasisHub/basis-aggrid-components 
```

With yarn

```text
yarn add BasisHub/basis-aggrid-components
```

From CDN 

```text
https://cdn.jsdelivr.net/gh/BasisHub/basis-aggrid-components/dist/ag-grid-components.min.js
```

### How to use 

In your ag grid config object register the component then reference it from your columns definition

```javascript
const gridOptions = {
   columnDefs: [
    {
      headerName: 'Booleans',
      field: 'booleans',
      cellRenderer: 'BooleansRenderer',
      cellRendererParams: {
        ...
      },      
      cellEditor: 'BooleanEditor',
      cellEditorParams: {
        ...
      },
      filter: 'BooleanFilter',
      filterParams: {
        ...
      },      
    },
   ],
   components: {
    BooleansRenderer: Basis.AgGridComponents.BooleanRenderer,
    BooleanEditor: Basis.AgGridComponents.BooleanEditor,
    BooleanFilter: Basis.AgGridComponents.BooleanFilter,
   }
}
```



