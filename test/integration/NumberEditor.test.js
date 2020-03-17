/* eslint-disable no-undef */
/*
 * This file is part of ag-gird-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

describe('#NumberEditor ', function() {
  let gridOptions = null
  const columnDefs = [
    {
      field: 'number',
      cellEditor: 'NumberEditor',
      cellEditorParams: {
        numberMaxValue: 2000,
      },
    },
    {
      field: 'numberWithMask',
      cellEditor: 'NumberEditor',
      cellEditorParams: {
        numberMask: '##,##0',
        numberMaxValue: 2000,
      },
    },
  ]
  const rowData = [
    {
      number: 5,
      numberWithMask: 6,
    },
  ]

  afterEach(() => {
    gridOptions.api.destroy()
  })

  beforeEach(() => {
    return setupGridForTests({
      components: {
        NumberEditor: Basis.AgGridComponents.NumberEditor,
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
    expect(gridOptions.api.getDisplayedRowCount()).to.equal(1)
    expect(gridOptions.columnApi.getAllColumns()).to.have.lengthOf(2)
  })

  describe('HTML5 number input', () => {
    it('can edit number and return number', () => {
      const api = gridOptions.api

      api.startEditingCell({
        rowIndex: 0,
        colKey: 'number',
        charPress: 7,
      })
      api.stopEditing()

      const newValue = api.getValue('number', api.getDisplayedRowAtIndex(0))

      expect(newValue).to.equal(7)
    })

    it('prevent invalid number Input', () => {
      const api = gridOptions.api
      const oldValue = api.getValue('number', api.getDisplayedRowAtIndex(0))
      api.startEditingCell({
        rowIndex: 0,
        colKey: 'number',
      })

      const editor = api.getCellEditorInstances()[0]
      const input = editor.getGui().querySelector('input:not([type="hidden"])')
      input.value = 500000

      expect(editor._validateInput(input), 'input is invalid').to.be.false
      api.stopEditing()

      const newValue = api.getValue('number', api.getDisplayedRowAtIndex(0))
      expect(newValue, 'old Value is restored').to.equal(oldValue)
    })
  })

  describe('NumberInput component', () => {
    it('can edit number and return number', () => {
      const api = gridOptions.api

      api.startEditingCell({
        rowIndex: 0,
        colKey: 'numberWithMask',
        charPress: 1234,
      })
      api.stopEditing()

      const newValue = api.getValue(
        'numberWithMask',
        api.getDisplayedRowAtIndex(0)
      )

      expect(newValue).to.equal(1234)
    })

    it('prevent invalid number Input', () => {
      const api = gridOptions.api
      const oldValue = api.getValue(
        'numberWithMask',
        api.getDisplayedRowAtIndex(0)
      )

      api.startEditingCell({
        rowIndex: 0,
        colKey: 'numberWithMask',
        charPress: '3000',
      })
      api.stopEditing()

      let newValue = api.getValue(
        'numberWithMask',
        api.getDisplayedRowAtIndex(0)
      )
      expect(newValue, 'old Value is restored').to.equal(oldValue)
    })
  })
})
