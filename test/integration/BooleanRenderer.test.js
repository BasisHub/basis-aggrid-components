/* eslint-disable no-undef */
/*
 * This file is part of ag-gird-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

describe('#BooleanRenderer ', function() {
  let gridOptions = null
  const columnDefs = [
    {
      field: 'booleansSwitch',
      cellRenderer: 'BooleansRenderer',
      cellRendererParams: {
        booleanTrueRenderValue: 'switch',
        booleanFalseRenderValue: 'switch',
      },
    },
    {
      field: 'booleansHTML',
      cellRenderer: 'BooleansRenderer',
      cellRendererParams: {
        booleanTrueRenderValue: 'YES',
        booleanFalseRenderValue: 'NO',
      },
    },
  ]
  const rowData = [
    {
      booleansSwitch: true,
      booleansHTML: true,
    },
    {
      booleansSwitch: false,
      booleansHTML: false,
    },
  ]

  afterEach(() => {
    gridOptions.api.destroy()
  })

  beforeEach(() => {
    return setupGridForTests(
      {
        components: {
          BooleansRenderer: Basis.AgGridComponents.BooleanRenderer,
        },
        columnDefs,
        rowData,
      },
      true
    ).then(options => {
      gridOptions = options
    })
  })

  it('Gird is initialized successfully', () => {
    expect(gridOptions.api.getDisplayedRowCount()).to.equal(2)
    expect(gridOptions.columnApi.getAllColumns()).to.have.lengthOf(2)
  })

  describe('Cell rendering result', () => {
    rowData.forEach((row, index) => {
      for (const field in row) {
        const column = columnDefs.filter(x => x.field === field)[0]
        const cellContent =
          row[field] === true
            ? column.cellRendererParams.booleanTrueRenderValue
            : column.cellRendererParams.booleanFalseRenderValue

        it(`of row[${index}][${field}] is "${cellContent}"`, done => {
          this.retries(5)
          setTimeout(() => {
            const cellInDOM = document.querySelector(
              `[row-id="${index}"] [col-id="${field}"]`
            )

            if (cellContent == 'switch') {
              expect(cellInDOM.querySelector('.boolSwitch')).to.be.instanceOf(
                HTMLElement
              )
            } else {
              expect(cellInDOM.innerText).to.equal(cellContent)
            }

            done()
          }, 50)
        })
      }
    })
  })
})
