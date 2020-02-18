# Basis AgGrid Components

[![Build Status](https://travis-ci.org/BasisHub/basis-aggrid-components.svg?branch=master)](https://travis-ci.org/BasisHub/basis-aggrid-components)
![GitHub](https://img.shields.io/github/license/BasisHub/bbj-masks)
![GitHub file size in bytes](https://img.shields.io/github/size/BasisHub/basis-aggrid-components/dist/basis-aggrid-components.min.js)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/BasisHub/basis-aggrid-components)
![David](https://img.shields.io/david/BasisHub/basis-aggrid-components)

A set of [ag-grid](https://www.ag-grid.com/) components which can handle filtering , rendering & editing with focus on scalar types.

### Browser Support

| [![IE / Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) IE / Edge | [![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) Firefox | [![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) Chrome | [![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) Safari | [![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png)](http://godban.github.io/browsers-support-badges/) Opera |
| :---: | :---: | :---: | :---: | :---: |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

**Note :** To support IE11 browser include the [_date-time-format-timezone_](https://github.com/formatjs/date-time-format-timezone/) polyfill

## Table of Contents

- 🚀 [Installation](#-how-to-install-)
- 💻 [How to use](#-how-to-use-)
- :bulb: [Components](#bulb-components)
  - [Configure Options](#configure-options)
  - [BooleanRenderer](#booleanrenderer)
  - [BooleanFilter](#booleanfilter)
  - [NumberEditor](#numbereditor)
  - [TextEditor](#texteditor)
  - [ImageRenderer](#imagerenderer)
  - [TemplateRenderer](#templaterenderer)
  - [DateTimeFilter](#datetimefilter)
  - [DateTimeEditor](#datetimeeditor)
- [Value Formatting](#value-formatting)  

### 🚀 How To Install ?

Install it with npm or yarn 

```text
npm install BasisHub/basis-aggrid-components 
yarn add BasisHub/basis-aggrid-components
```

### 💻 How to use ?

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

## :bulb: **Components**

### Configure Options

Every component can search for its options in several places in the following order 

1. params : This the object which ag-grid passes to renderer , filters and editors 
2. params.colDef 
3. params.context.AGridComponentsMetaConfig\[COLUMN\_ID\]
4. params.context.meta\[COLUMN\_ID\]
5. params.context
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

### **BooleanRenderer**

| **Option** | Description | Default |
| :--- | :--- | :--- |
| booleanTrueRenderValue | switch | The option controls how to render `true` values.   **switch** is a special value used to render true values as a switch component |
| booleanFalseRenderValue | switch | The option controls how to render `false` values.   **switch** is a special value used to render true values as a switch component |
| booleanTrueValue\[\] | true | The options describes what is considered `true` |
| booleanFalseValue\[\] | false | The options describes what is considered `false` |

```javascript
const gridOptions = {
  rowData: [
    { booleans: true, booleanAsHTML: true, booleansMixed: 'yes' },
    { booleans: false, booleanAsHTML: false, booleansMixed: 'no' },
  ],
  columnDefs: [
    { field: 'booleans', type: ['common','booleans'] },
    { field: 'booleansAsHTML', type: ['common','booleansAsHTML'] },
    { field: 'booleansMixed', type: ['common' , 'booleansMixed'] },
  ],
  columnTypes: {
    common: {
      cellRenderer: 'BooleansRenderer',
    }
    booleans: {
      cellRendererParams: {
        booleanTrueRenderValue: 'switch;',
        booleanFalseRenderValue: 'switch',
      },
    },
    booleansAsHTML: {
      cellRendererParams: {
        booleanTrueRenderValue: '&#x2714;',
        booleanFalseRenderValue: '&#x2718;',
      },
    },
    booleansMixed: {
      cellRendererParams: {
        booleanTrueRenderValue: '&#x2714;',
        booleanFalseRenderValue: '&#x2718;',
        booleanTrueValue: ['yes' , true],
        booleanTrueValue: ['no' , false]
      },
    },    
  },
  components: {
    BooleansRenderer: Basis.AgGridComponents.BooleanRenderer,
  },
}

```

### BooleanFilter

| **Option** | Description | Default |
| :--- | :--- | :--- |
| booleanUsedTrueValue | undefined | the value to use when the filter displays the true state . in case it is undefined then we use the first item in **booleanTrueValue\[\]** |
| booleanUsedFalseValue | undefined | the value to use when the filter displays the false state. in case it is undefined then we use the first item in **booleanFalseValue\[\]** |
| booleanTrueValue\[\] | true | The options describes what is considered `true` |
| booleanFalseValue\[\] | false | The options describes what is considered `false` |

```javascript
const gridOptions = {
  rowData: [
    { booleans: true, booleanAsHTML: true, booleansMixed: 'yes' },
    { booleans: false, booleanAsHTML: false, booleansMixed: 'no' },
  ],
  columnDefs: [
    { field: 'booleans', type: ['common'] },
    { field: 'booleansAsHTML', type: ['common'] },
    { field: 'booleansMixed', type: ['common' , 'booleansMixed'] },
  ],
  columnTypes: {
    common: {
      filter: 'BooleanFilter'
    }
    booleansMixed: {
      cellFilterParams: {
        booleanTrueValue: ['yes' , true],
        booleanTrueValue: ['no' , false],
        booleanUsedTrueValue: 'yes',
        booleanUsedFalseValue: 'no',
      },
    },    
  },
  components: {
    BooleanFilter: Basis.AgGridComponents.BooleanFilter,
  },
}
```

### BooleanEditor

| **Option** | Description | Default |
| :--- | :--- | :--- |
| booleanUsedTrueValue | undefined | the value to use when the filter displays the true state . in case it is undefined then we use the first item in **booleanTrueValue\[\]** |
| booleanUsedFalseValue | undefined | the value to use when the filter displays the false state. in case it is undefined then we use the first item in **booleanFalseValue\[\]** |
| booleanTrueValue\[\] | true | The options describes what is considered `true` |
| booleanFalseValue\[\] | false | The options describes what is considered `false` |

```javascript
const gridOptions = {
  rowData: [
    { booleans: true, booleanAsHTML: true, booleansMixed: 'yes' },
    { booleans: false, booleanAsHTML: false, booleansMixed: 'no' },
  ],
  columnDefs: [
    { field: 'booleans', type: ['common'] },
    { field: 'booleansAsHTML', type: ['common'] },
    { field: 'booleansMixed', type: ['common' , 'booleansMixed'] },
  ],
  columnTypes: {
    common: {
      filter: 'BooleanEditor'
    }
    booleansMixed: {
      cellEditorParams: {
        booleanTrueValue: ['yes' , true],
        booleanTrueValue: ['no' , false],
        booleanUsedTrueValue: 'yes',
        booleanUsedFalseValue: 'no',
      },
    },    
  },
  components: {
    BooleansRenderer: Basis.AgGridComponents.BooleanEditor,
  },
}
```

### NumberEditor

| **Option** | Description | Default |
| :--- | :--- | :--- |
| **numberMinValue**   | undefined    | min allowed value
| **numberMaxValue**   | undefined    | max allowed value
| **numberStepValue**       | undefined  	| number of step by increment or decrement
| **numberMask**       | undefined  	| a bbj number mask to validate the number against
|**numberGroupingSeparator** | , | a char which will be used as a grouping separator. The options is used only when **numberMask** is defined |
|**numberDecimalSeparator** | . | a char which will be used as a decimal separator. The options is used only when **numberMask** is defined  |
|**numberForceTrailingZeros** | false | Affects the output by switching the way a mask with "#" characters in the trailing positions is filled. for example, the function NumberMask.mask(.10:"#.##") returns .10 instead of .1 . The options is used only when **numberMask** is defined|

```javascript
const gridOptions = {
  rowData: [{ numbers: 10 }],
  columnDefs: [
    {
      field: 'numbers',
      cellEditor: 'NumberEditor',
      cellEditorParams: {
        numberMinValue: 10,
        numberMaxValue: 100,
        numberStepValue: 10,
      },
    },
  ],
  components: {
    NumberEditor: Basis.AgGridComponents.NumberEditor,
  },
}
```

### TextEditor

 | Name                  	| Default     	| Description                                                                                                                    	|
 |-------------------------	|:-------------:|--------------------------------------------------------------------------------------------------------------------------------|
 | **textPattern**   | undefined    | A regular expression that the input's value must match in order for the value to pass constraint validation
 | **textRequired**   | undefined    | Boolean. A value is required to consider the input valid
 | **textMask**   | undefined    | A bbj string mask to validate the value 
 | **textTitle**   | null    | The input title , when null and the **textMask** options is defined , then we use the mask as title , when set to `default` we the browser's default title , other wise the value defined in this option

```javascript
const gridOptions = {
  rowData: [{ numbers: 10 }],
  columnDefs: [
    {
      field: 'numbers',
      cellEditor: 'NumberEditor',
      cellEditorParams: {
        numberMinValue: 10,
        numberMaxValue: 100,
        numberStepValue: 10,
      },
    },
  ],
  components: {
    NumberEditor: Basis.AgGridComponents.NumberEditor,
  },
}
```

### ImageRenderer

| **Option** | Description | Default |
| :--- | :--- | :--- |
| imageRendererWidth | 28px | Image width |
| imageRendererHeight | 28px | Image height |
| imageRendererList | {} | A list of which maps images with cell values as JSON or plain JS object |

```javascript
const gridOptions = {
  rowData: [
    { logo: 'basis' },
    { logo: 'ag-grid' },
  ],
  columnDefs: [
    {
      field: 'logo',
      cellRenderer: 'ImageRenderer',
      cellRendererParams: {
        imageRendererList: {
          'basis': 'basis.png',
          'ag-grid': 'ag-grid.png',
        },
        imageRendererWidth: '30px',
        imageRendererHeight: '30px',
      },
    },
  ],
  components: {
    ImageRenderer: Basis.AgGridComponents.ImageRenderer,
  },
}
```

### TemplateRenderer

| **Option** | Description | Default |
| :--- | :--- | :--- |
| renderTemplate | undefined | [lodash template](https://lodash.com/docs/4.17.15#template) |

```javascript
const gridOptions = {
  rowData: [{ customHTML: 'string' }],
  columnDefs: [
    {
      field: 'customHTML',
      cellRenderer: 'TemplateRenderer',
      cellRendererParams: {
        renderTemplate: `<% print ('<div class="customHTMLDiv">' + "new-"+params.value + '</div>') %>`,
      },
    },
  ],
  components: {
    TemplateRenderer: Basis.AgGridComponents.TemplateRenderer,
  },
}
```

### DateTimeFilter

| **Option** | Description | Default |
| :--- | :--- | :--- |
| dateTimeEnabledTime | false | Enable / disable time |
| dateTimeEnabled24HR | false | Enable / disable time 24 format |
| dateTimeEnabledSeconds | false | Enable / disable seconds management |
| dateTimeEnableCalendar | false | Enable / disable Calendar. |
| dateTimeMask | false | The mask used to format the selected date \([BBj Mask](https://github.com/BasisHub/bbj-masks#date-masks)\) |
| dateTimeMax | undefined | Max allowed date |
| dateTimeMin | undefined | Min allowed date |
| dateTimeFormatter | undefined | A function or expression to format the date |
| dateTimeLocale | System default | A locale to use for date formatting |
| dateTimeDefaultHour | 12 | Initial value of the hour element. |
| dateTimeDefaultMinute | 0 | Initial value of the minute element. |
| dateTimeDisableMobile | false | Set disableMobile to true to always use the non-native picker. |
| dateTimeEnableWeekNumber | true | Enables display of week numbers in calendar. |
| filterOptions | Equals, Greater Than, Less Than, Not Equals, In Range. | What Filter Options to present to the user. |
| defaultOption | Equals | The default Filter Options to be selected. |
| suppressAndOrCondition | false | If true, the filter will only offer Condition 1. |
| inRangeInclusive | false | If true then doing 'inRange' filter option will include values equal to the start and end of the range. |
| clearButton | false | Set to true to have the filter use a Clear button. The Clear button will clear the \(form\) details of the filter without removing any active filters on the column. |
| resetButton | false |  Set to `true` to have the filter use a Reset button. The Reset button will clear the details of the filter and any active filters on that column. |
| applyButton | false |  Set to `true` to have the filter use an Apply button. If the Apply button is present, then the filter is only applied after the user hits the Apply button. |

```javascript
const gridOptions = {
  rowData: [
    { timestamps: '2020-01-01T12:00:00Z' },
    { dates: '2020-01-02Z' },
    { times: '12:00:00Z' },
  ],
  columnDefs: [
    {
      field: 'timestamps',
      filter: 'DateTimeFilter',
      filterParams: {
        dateTimeZone: 'Europe/Berlin',
        filterOptions: ['greaterThan', 'inRange'],
        applyButton: true,
      },
    },
    {
      field: 'dates',
      filter: 'DateTimeFilter',
      filterParams: {
        dateTimeEnabledTime: false,
      },
    },
    {
      field: 'times',
      filter: 'DateTimeFilter',
      filterParams: {
        dateTimeEnableCalendar: false,
        dateTimeEnabled24HR: true,
      },
    },
  ],
  components: {
    DateTimeFilter: Basis.AgGridComponents.DateTimeFilter,
  },
}
```

### DateTimeEditor

| **Option** | Description | Default |
| :--- | :--- | :--- |
| dateTimeEnabledTime | false | Enable / disable time |
| dateTimeEnabled24HR | false | Enable / disable time 24 format |
| dateTimeEnabledSeconds | false | Enable / disable seconds management |
| dateTimeEnableCalendar | false | Enable / disable Calendar. |
| dateTimeMask | false | The mask used to format the selected date \([BBj Mask](https://github.com/BasisHub/bbj-masks#date-masks)\) |
| dateTimeMax | undefined | Max allowed date |
| dateTimeMin | undefined | Min allowed date |
| dateTimeFormatter | undefined | A function or expression to format the date |
| dateTimeLocale | System default | A locale to use for date formatting |
| dateTimeDefaultHour | 12 | Initial value of the hour element. |
| dateTimeDefaultMinute | 0 | Initial value of the minute element. |
| dateTimeDisableMobile | false | Set disableMobile to true to always use the non-native picker. |
| dateTimeEnableWeekNumber | true | Enables display of week numbers in calendar. |

```javascript
const gridOptions = {
  rowData: [
    { timestamps: '2020-01-01T12:00:00Z' },
    { dates: '2020-01-02Z' },
    { times: '12:00:00Z' },
  ],
  columnDefs: [
    {
      field: 'timestamps',
      cellEditor: 'DateTimeEditor',
      cellEditorParams: {
        dateTimeZone: 'Europe/Berlin',
      },
    },
    {
      field: 'dates',
      cellEditor: 'DateTimeEditor',
      cellEditorParams: {
        dateTimeEnabledTime: false,
      },
    },
    {
      field: 'times',
      cellEditor: 'DateTimeEditor',
      cellEditorParams: {
        dateTimeEnableCalendar: false,
        dateTimeEnabled24HR: true,
      },
    },
  ],
  components: {
    DateTimeEditor: Basis.AgGridComponents.DateTimeEditor,
  },
}
```

## Value Formatting 

Basis AgGrid Components does not ship an value formatters by default , but you can use [bbj-masks](https://github.com/BasisHub/bbj-masks) for this puropse 

> bbj-masks is a tiny JavaScript library to format Dates , Numbers & Strings using BBj supported masks.

```js
const gridOptions = {
  rowData: [
    { timestamps: '2018-02-15T14:01:06Z'},
    { numbers: -5000.123456789 },
    { strings: 'abcdefg' },
  ],
  columnDefs: [
    {
      field: 'timestamps',
      valueFormatter: params => {
        return BBj.Masks.Types.date(
          params.value,
          '%Y/%Mz/%Dz %Hz:%mz:%sz',
          'en',
          'Europe/Berlin'
        ) 
      }, // -> $ -5,000.123457
    }, 
    {
      field: 'numbers',
      valueFormatter: params => {
        return BBj.Masks.Types.number(
          params.value,
          '$ -#,##0.######'
        )
      }, // -> 18 - 02 - 15
    },
    {
      field: 'strings',
      valueFormatter: params => {
        return BBj.Masks.Types.string(
          params.value,
          'XX-XXX-XX'
        ) 
      }, // -> ab-cde-fg
    },
  ]
}  
```

## 📝 License

Licensed under the [MIT License](https://github.com/BasisHub/basis-aggrid-components/blob/master/LICENSE.md).
