/* eslint-disable no-undef */
/*
 * This file is part of ag-gird-components lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

describe('#TemplateRenderer ', function() {
  let gridOptions = null
  const columnDefs = [
    {
      field: 'customHTML',
      cellRenderer: 'TemplateRenderer',
      cellRendererParams: {
        renderTemplate: `<% print ('<div class="customHTMLDiv">' + "new-"+params.value + '</div>') %>`,
      },
    },
  ]
  const rowData = [
    {
      customHTML: 'string',
    },
  ]

  afterEach(() => {
    gridOptions.api.destroy()
  })

  beforeEach(() => {
    return setupGridForTests(
      {
        components: {
          TemplateRenderer: Basis.AgGridComponents.TemplateRenderer,
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
    expect(gridOptions.api.getDisplayedRowCount()).to.equal(1)
    expect(gridOptions.columnApi.getAllColumns()).to.have.lengthOf(1)
  })

  it('can renderer lodash template', done => {
    this.retries(5)
    setTimeout(() => {
      const cellInDOM = document
        .querySelector(`[row-id="0"] [col-id="customHTML"]`)
        .querySelector('.customHTMLDiv')

      expect(cellInDOM).to.be.instanceOf(HTMLDivElement)
      expect(cellInDOM.innerHTML).to.equal(`new-${rowData[0].customHTML}`)
      done()
    }, 50)
  })
})
