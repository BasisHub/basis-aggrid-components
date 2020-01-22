/* eslint-disable no-undef */
/*
 * This file is part of ag-gird-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

describe('#ImageRenderer ', function() {
  let gridOptions = null
  const columnDefs = [
    {
      field: 'logo',
      cellRenderer: 'ImageRenderer',
      cellRendererParams: {
        imageRendererList: {
          basis: 'basis.png',
          'ag-grid': 'ag-grid.png',
        },
        imageRendererWidth: '30px',
        imageRendererHeight: '30px',
      },
    },
  ]
  const rowData = [
    {
      logo: 'basis',
    },
    {
      logo: 'ag-grid',
    },
  ]

  afterEach(() => {
    gridOptions.api.destroy()
  })

  beforeEach(() => {
    return setupGridForTests(
      {
        components: {
          ImageRenderer: Basis.AgGridComponents.ImageRenderer,
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
    expect(gridOptions.columnApi.getAllColumns()).to.have.lengthOf(1)
  })

  describe('Cell rendering result', () => {
    rowData.forEach((row, index) => {
      const column = columnDefs[0]
      const cellContent = column.cellRendererParams.imageRendererList[row.logo]
      const imgWidth = Number(
        column.cellRendererParams.imageRendererWidth.replace('px', '')
      )
      const imgHeight = Number(
        column.cellRendererParams.imageRendererHeight.replace('px', '')
      )
      const getUrl = window.location
      const baseUrl = getUrl.protocol + '//' + getUrl.host + '/'

      it(`of row[${index}][logo] is "${cellContent}"`, done => {
        this.retries(5)
        setTimeout(() => {
          const cellInDOM = document
            .querySelector(`[row-id="${index}"] [col-id="logo"]`)
            .querySelector('img')

          expect(cellInDOM, 'it is image element').to.be.instanceOf(
            HTMLImageElement
          )
          expect(cellInDOM.src, `src is ${cellContent}`).to.equal(
            `${baseUrl}${cellContent}`
          )
          expect(cellInDOM.width, `width is ${imgWidth}`).to.equal(imgWidth)
          expect(cellInDOM.width, `height is ${imgHeight}`).to.equal(imgHeight)
          done()
        }, 50)
      })
    })
  })
})
