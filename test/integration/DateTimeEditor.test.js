/* eslint-disable no-undef */
/*
 * This file is part of ag-gird-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

describe('#DateTimeEditor ', function() {
  let gridOptions = null
  const columnDefs = [
    {
      field: 'timestamps',
      cellEditor: 'DateTimeEditor',
    },
    {
      field: 'dates',
      cellEditor: 'DateTimeEditor',
    },
    {
      field: 'times',
      cellEditor: 'DateTimeEditor',
    },
  ]
  const rowData = [
    {
      timestamps: '2020-01-01T12:00:00Z',
      dates: '2020-01-01',
      times: '12:00:00',
    },
  ]

  afterEach(() => {
    gridOptions.api.destroy()
  })

  beforeEach(() => {
    return setupGridForTests({
      components: {
        DateTimeEditor: Basis.AgGridComponents.DateTimeEditor,
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
    expect(gridOptions.columnApi.getAllColumns()).to.have.lengthOf(3)
  })

  it('can edit timestamps and return utc date', () => {
    const api = gridOptions.api

    const timestampsAsDate = new Date(rowData[0].timestamps)
    timestampsAsDate.setDate(timestampsAsDate.getDate() + 1)
    timestampsAsDate.setHours(timestampsAsDate.getHours() + 1)

    api.startEditingCell({
      rowIndex: 0,
      colKey: 'timestamps',
      charPress: timestampsAsDate.toISOString(),
    })
    api.stopEditing()

    const newValue = api.getValue('timestamps', api.getDisplayedRowAtIndex(0))

    expect(newValue).to.equal(timestampsAsDate.toISOString())
  })

  it('can edit dates and return utc date', () => {
    const api = gridOptions.api

    const datesAsDate = new Date(
      Basis.AgGridComponents.DateTimeEditor.fixShortISO(rowData[0].dates)
    )
    datesAsDate.setDate(datesAsDate.getDate() + 1)

    api.startEditingCell({
      rowIndex: 0,
      colKey: 'dates',
      charPress: datesAsDate.toISOString(),
    })
    api.stopEditing()

    const newValue = api.getValue('dates', api.getDisplayedRowAtIndex(0))

    expect(newValue).to.equal(datesAsDate.toISOString())
  })

  it('can edit times and return utc date', () => {
    const api = gridOptions.api

    const timesAsDate = new Date(
      Basis.AgGridComponents.DateTimeEditor.fixShortISO(rowData[0].dates)
    )
    timesAsDate.setDate(timesAsDate.getDate() + 1)

    api.startEditingCell({
      rowIndex: 0,
      colKey: 'times',
      charPress: timesAsDate.toISOString(),
    })
    api.stopEditing()

    const newValue = api.getValue('times', api.getDisplayedRowAtIndex(0))

    expect(newValue).to.equal(timesAsDate.toISOString())
  })
})
