/* eslint-disable no-undef */
var dates = [
  '2020-01-01T12:00:00Z',
  '2020-01-02T13:00:00Z',
  '2020-01-03T14:00:00Z',
  '2020-01-04T15:00:00Z',
  '2020-01-05T16:00:00Z',
  '2020-01-06T17:00:00Z',
  '2020-01-07T18:00:00Z',
  '2020-01-08T19:00:00Z',
  '2020-01-09T20:00:00Z',
]

var types = ['equals', 'notEqual', 'lessThan', 'greaterThan', 'inRange']
var operators = ['OR', 'AND']
var column = 'timestamps'

var count = 0
function generateCondition(first) {
  var conditions = []

  types.forEach(type => {
    var filter = dates[0]
    var filterTo = null
    if (type === 'lessThan') {
      filter = dates[4]
    }

    if (type === 'inRange') {
      if (first) {
        filter = dates[5]
      }
      filterTo = dates[dates.length - 1]
    }

    var state

    if (first) {
      state = Object.assign({}, first, {
        condition2: {
          type: type,
          filter,
          filterTo: filterTo,
        },
      })
    } else {
      state = {
        condition1: {
          type: type,
          filter,
          filterTo: filterTo,
        },
      }
    }

    var message
    if (first) {
      operators.forEach(operator => {
        state.operator = operator
        gridOptions.api.deselectAll()
        gridOptions.api.setFilterModel(null)
        gridOptions.api.onFilterChanged()
        gridOptions.api.getFilterInstance(column).setModel(state)
        gridOptions.api.onFilterChanged()
        gridOptions.api.selectAllFiltered()
        const selected = gridOptions.api.getSelectedRows()
        message = `${count}. model = [ ${column} [${first.condition1.type} ${
          first.condition1.filter
        } ${
          first.condition1.filterTo ? '- ' + first.condition1.filterTo : ''
        }] ${operator} [${type} ${filter} ${
          filterTo ? '- ' + filterTo : ''
        }] ] - Filtered Item = ${selected.length}`
        conditions.push({
          count,
          for: column,
          message: message,
          state: gridOptions.api.getFilterInstance(column).getModel(),
          expected: selected,
        })
        count++
      })
    } else {
      gridOptions.api.deselectAll()
      gridOptions.api.setFilterModel(null)
      gridOptions.api.onFilterChanged()
      gridOptions.api.getFilterInstance(column).setModel(state)
      gridOptions.api.onFilterChanged()
      gridOptions.api.selectAllFiltered()
      const selected = gridOptions.api.getSelectedRows()
      message = `${count}. model = [ ${column} [${type} ${filter} ${
        filterTo ? '- ' + filterTo : ''
      }] ] - Filtered Item = ${selected.length}`
      conditions.push({
        count,
        for: column,
        message: message,
        state: gridOptions.api.getFilterInstance(column).getModel(),
        expected: selected,
      })
      count++
      Array.prototype.push.apply(conditions, generateCondition(state))
    }
  })

  return conditions
}

// console.log(generateCondition());
console.log(JSON.stringify(generateCondition()))
