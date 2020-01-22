# Options

Basis AgGrid Components can search for the components options in several places in the following order 

1. **params** : This the object which ag-grid passes to renderer , filters and editors 
2. **params.colDef** 
3. **params.context.AGridComponentsMetaConfig\[COLUMN\_ID\]**
4. **params.context.meta\[COLUMN\_ID\]**
5. **params.context**
6. If none found we use the default fallback

For example you can define the config of your dates column in the context like this 

```javascript
const gridOptions = {
  context: {
    dates: {
       dateTimeZone: 'Europe/Berlin'
       filterOptions: ['greaterThan' ,'inRange']
    }
   }
   columnDefs: [
    {
      headerName: 'Dates Column',
      field: 'dates',
      filter: 'DateTimeFilter'
    },
   ],
   components: {
    DateTimeFilter: Basis.AgGridComponents.DateTimeFilter,
   }
}
```

