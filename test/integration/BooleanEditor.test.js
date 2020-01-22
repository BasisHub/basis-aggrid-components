/* eslint-disable no-undef */
/*
 * This file is part of ag-gird-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

describe('#BooleanEditor ', function() {
  let gridOptions = null
  const columnDefs = [
    {
      field: 'booleans',
      cellEditor: 'BooleanEditor',
      cellEditorParams: {
        booleanTrueValue: true, // default
        booleanFalseValue: false, // default
      },
    },
    {
      field: 'booleansYesNo',
      cellEditor: 'BooleanEditor',
      cellEditorParams: {
        booleanTrueValue: 'yes',
        booleanFalseValue: 'no',
      },
    },
    {
      field: 'booleansMixed',
      cellEditor: 'BooleanEditor',
      cellEditorParams: {
        booleanTrueValue: ['yes', true],
        booleanFalseValue: ['no', false],
        booleanUsedTrueValue: true,
        booleanUsedFalseValue: false,
      },
    },
  ]
  const rowData = [
    {
      booleans: true,
      booleansYesNo: 'yes',
      booleansMixed: true,
    },
    {
      booleans: true,
      booleansYesNo: 'yes',
      booleansMixed: 'yes',
    },
    {
      booleans: false,
      booleansYesNo: 'no',
      booleansMixed: false,
    },
    {
      booleans: false,
      booleansYesNo: 'no',
      booleansMixed: 'no',
    },
  ]

  afterEach(() => {
    gridOptions.api.destroy()
  })

  beforeEach(() => {
    return setupGridForTests({
      components: {
        BooleanEditor: Basis.AgGridComponents.BooleanEditor,
      },
      defaultColDef: {
        editable: true,
      },
      columnDefs,
      rowData,
    }).then(options => {
      gridOptions = options
    })
  })

  it('Gird is initialized successfully', () => {
    expect(gridOptions.api.getDisplayedRowCount()).to.equal(4)
    expect(gridOptions.columnApi.getAllColumns()).to.have.lengthOf(3)
  })

  describe('#editing cells', () => {
    rowData.forEach((row, index) => {
      columnDefs.forEach(column => {
        it(`cell [${index}][${column.field}] content by reversing the value`, () => {
          const api = gridOptions.api
          const colKey = column.field
          const currentValue = row[colKey]
          const cellEditorParams = column.cellEditorParams || {}
          const booleanTrueValue = cellEditorParams.booleanTrueValue
            ? [].concat(cellEditorParams.booleanTrueValue)
            : [true]
          const booleanFalseValue = cellEditorParams.booleanFalseValue
            ? [].concat(cellEditorParams.booleanFalseValue)
            : [false]
          const booleanUsedTrueValue =
            typeof cellEditorParams.booleanUsedTrueValue !== 'undefined'
              ? cellEditorParams.booleanUsedTrueValue
              : booleanTrueValue[0]
          const booleanUsedFalseValue =
            typeof cellEditorParams.booleanUsedFalseValue !== 'undefined'
              ? cellEditorParams.booleanUsedFalseValue
              : booleanFalseValue[0]

          let reverseValue = currentValue
          if (booleanTrueValue.indexOf(currentValue) > -1) {
            reverseValue = reverseBoolean(booleanUsedTrueValue)
          } else {
            reverseValue = reverseBoolean(booleanUsedFalseValue)
          }

          api.startEditingCell({
            rowIndex: index,
            colKey: column.field,
            charPress: reverseValue,
          })
          api.stopEditing()

          const newValue = api.getValue(
            colKey,
            api.getDisplayedRowAtIndex(index)
          )

          expect(newValue).to.deep.equal(reverseValue)
        })
      })
    })
  })
})
