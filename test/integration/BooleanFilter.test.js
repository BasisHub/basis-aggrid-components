/*
 * This file is part of ag-gird-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-disable no-undef */

describe('#BooleanFilter ', function() {
  let gridOptions = null
  const columnDefs = [
    {
      field: 'booleans',
      filter: 'BooleanFilter',
      filterParams: {
        booleanTrueValue: true, // default
        booleanFalseValue: false, // default
      },
    },
    {
      field: 'booleansYesNo',
      filter: 'BooleanFilter',
      filterParams: {
        booleanTrueValue: 'yes',
        booleanFalseValue: 'no',
      },
    },
    {
      field: 'booleansMixed',
      filter: 'BooleanFilter',
      filterParams: {
        booleanTrueValue: ['yes', true],
        booleanFalseValue: ['no', false],
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
      booleansMixed: 'no',
    },
    {
      booleans: false,
      booleansYesNo: 'no',
      booleansMixed: false,
    },
  ]

  afterEach(() => {
    gridOptions.api.destroy()
  })

  beforeEach(() => {
    return setupGridForTests({
      components: {
        // eslint-disable-next-line no-undef
        BooleanFilter: Basis.AgGridComponents.BooleanFilter,
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

  columnDefs.forEach(column => {
    describe(`#setModel for column "${column.field}"`, () => {
      const models = [{ value: 'true' }, { value: 'false' }]

      models.forEach(model => {
        describe(`can filter "${model.value}" values`, () => {
          beforeEach(() => {
            gridOptions.api.getFilterInstance(column.field).setModel({
              value: model.value,
            })
            gridOptions.api.onFilterChanged()
            gridOptions.api.selectAllFiltered()
          })

          afterEach(() => {
            gridOptions.api.deselectAll()
            gridOptions.api.setFilterModel(null)
            gridOptions.api.onFilterChanged()
          })

          it(`${column.field} filter is active`, () => {
            expect(
              gridOptions.api.getFilterInstance(column.field).isFilterActive()
            ).to.be.true
          })

          it('number of filtered rows is 2', () => {
            const selected = gridOptions.api.getSelectedRows()
            expect(selected, 'selected rows length is 2').to.have.lengthOf(2)
          })

          it(`${column.field} field of each filtered row is "${
            model.value === 'true'
              ? column.filterParams.booleanTrueValue
              : column.filterParams.booleanFalseValue
          }"`, () => {
            const selected = gridOptions.api.getSelectedRows()
            selected.forEach((row, i) => {
              expect(
                row[column.field],
                `rows[${i}].${column.field} is "${
                  model.value === 'true'
                    ? column.filterParams.booleanTrueValue
                    : column.filterParams.booleanFalseValue
                }"`
              ).to.be.oneOf(
                model.value === 'true'
                  ? [].concat(column.filterParams.booleanTrueValue)
                  : [].concat(column.filterParams.booleanFalseValue)
              )
            })
          })
        })
      })
    })
  })
})
