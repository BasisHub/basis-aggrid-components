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
    },
  ]
  const rowData = [
    {
      number: 5,
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
    expect(gridOptions.columnApi.getAllColumns()).to.have.lengthOf(1)
  })

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
})
