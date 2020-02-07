/* eslint-disable no-undef */
/*
 * This file is part of ag-gird-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

describe('#TextEditor ', function() {
  let gridOptions = null
  const columnDefs = [
    {
      field: 'text',
      cellEditor: 'TextEditor',
      cellEditorParams: {
        textRequired: true,
      },
    },
    {
      field: 'textWithMask',
      cellEditor: 'TextEditor',
      cellEditorParams: {
        numberMask: 'AA-22',
      },
    },
  ]
  const rowData = [
    {
      text: 'basis',
      textWithMask: 'de44',
    },
  ]

  afterEach(() => {
    gridOptions.api.destroy()
  })

  beforeEach(() => {
    return setupGridForTests({
      components: {
        TextEditor: Basis.AgGridComponents.TextEditor,
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

  describe('HTML5 text input', () => {
    it('can edit text and return text', () => {
      const api = gridOptions.api

      api.startEditingCell({
        rowIndex: 0,
        colKey: 'text',
        charPress: 'foobar',
      })
      api.stopEditing()

      const newValue = api.getValue('text', api.getDisplayedRowAtIndex(0))

      expect(newValue).to.equal('foobar')
    })

    it('prevent invalid text Input', () => {
      const api = gridOptions.api
      const oldValue = api.getValue('text', api.getDisplayedRowAtIndex(0))
      api.startEditingCell({
        rowIndex: 0,
        colKey: 'text',
      })

      const editor = api.getCellEditorInstances()[0]
      const input = editor.getGui().querySelector('input:not([type="hidden"])')
      input.value = ''

      expect(editor._validateInput(input), 'input is invalid').to.be.false
      api.stopEditing()

      const newValue = api.getValue('text', api.getDisplayedRowAtIndex(0))
      expect(newValue, 'old Value is restored').to.equal(oldValue)
    })
  })

  describe('TextInput component', () => {
    it('can edit text and return text', () => {
      const api = gridOptions.api

      api.startEditingCell({
        rowIndex: 0,
        colKey: 'textWithMask',
        charPress: 'ab54',
      })
      api.stopEditing()

      const newValue = api.getValue(
        'textWithMask',
        api.getDisplayedRowAtIndex(0)
      )

      expect(newValue).to.equal('ab54')
    })
  })
})
