/*
 * This file is part of ag-gird-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-disable no-undef */
describe('#DateTimeFilter', function() {
  let gridOptions = null
  const columnDefs = [
    {
      field: 'timestamps',
      filter: 'DateTimeFilter',
    },
  ]
  const rowData = [
    { timestamps: '2020-01-01T12:00:00Z' },
    { timestamps: '2020-01-02T13:00:00Z' },
    { timestamps: '2020-01-03T14:00:00Z' },
    { timestamps: '2020-01-04T15:00:00Z' },
    { timestamps: '2020-01-05T16:00:00Z' },
    { timestamps: '2020-01-06T17:00:00Z' },
    { timestamps: '2020-01-07T18:00:00Z' },
    { timestamps: '2020-01-08T19:00:00Z' },
    { timestamps: '2020-01-09T20:00:00Z' },
  ]

  afterEach(() => {
    gridOptions.api.destroy()
  })

  beforeEach(() => {
    return setupGridForTests({
      components: {
        // eslint-disable-next-line no-undef
        DateTimeFilter: Basis.AgGridComponents.DateTimeFilter,
      },
      columnDefs,
      rowData,
    }).then(options => {
      gridOptions = options
    })
  })

  it('Gird is initialized successfully', () => {
    expect(gridOptions.api.getDisplayedRowCount()).to.equal(9)
    expect(gridOptions.columnApi.getAllColumns()).to.have.lengthOf(1)
  })

  describe('#getModel', () => {
    afterEach(() => {
      gridOptions.api.deselectAll()
      gridOptions.api.setFilterModel(null)
      gridOptions.api.onFilterChanged()
    })

    it('supports single condition', () => {
      const instance = gridOptions.api.getFilterInstance('timestamps')
      const model = {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      }

      instance.setModel({
        condition1: model,
      })

      gridOptions.api.onFilterChanged()
      expect(JSON.stringify(instance.getModel())).to.equal(
        JSON.stringify({ ...model, ...{ filterType: 'datetime' } })
      )
    })

    it('supports two condition (combined model)', () => {
      const instance = gridOptions.api.getFilterInstance('timestamps')
      const model = {
        condition1: {
          type: 'equals',
          filter: '2020-01-01T12:00:00.000Z',
          filterTo: null,
        },
        condition2: {
          type: 'equals',
          filter: '2020-01-01T12:00:00.000Z',
          filterTo: null,
        },
        operator: 'OR',
      }

      instance.setModel(model)

      gridOptions.api.onFilterChanged()
      expect(JSON.stringify(instance.getModel())).to.equal(
        JSON.stringify({ ...model, ...{ filterType: 'datetime' } })
      )
    })
  })

  __datetime_filter_models__.forEach(model => {
    describe(`#setModel for ${model.for}`, () => {
      beforeEach(() => {
        gridOptions.api.getFilterInstance(model.for).setModel(model.state)
        gridOptions.api.onFilterChanged()
        gridOptions.api.selectAllFiltered()
      })

      afterEach(() => {
        gridOptions.api.deselectAll()
        gridOptions.api.setFilterModel(null)
        gridOptions.api.onFilterChanged()
      })

      it(`${model.message}`, () => {
        const selected = gridOptions.api.getSelectedRows()
        expect(selected).to.have.deep.members(model.expected)
      })
    })
  })
})
