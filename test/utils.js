/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const setupGridForTests = options => {
  return new Promise(resolve => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    new agGrid.Grid(
      container,
      Object.assign(options, {
        onGridReady: () => {
          resolve(options)
        },
      })
    )
  })
}

const reverseBoolean = boolean => {
  const type = typeof boolean

  switch (type) {
    case 'boolean':
      return !boolean
    case 'string':
      return boolean == 'yes' ? 'no' : 'yes'
    default:
      break
  }
}
