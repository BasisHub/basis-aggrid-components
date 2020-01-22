// eslint-disable-next-line no-unused-vars
var __datetime_filter_models__ = [
  {
    count: 0,
    for: 'timestamps',
    message:
      '0. model = [ timestamps [equals 2020-01-01T12:00:00Z ] ] - Filtered Item = 1',
    state: {
      condition1: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: { type: 'equals', filter: null, filterTo: null },
      operator: 'OR',
    },
    expected: [{ timestamps: '2020-01-01T12:00:00Z' }],
  },
  {
    count: 1,
    for: 'timestamps',
    message:
      '1. model = [ timestamps [equals 2020-01-01T12:00:00Z ] OR [equals 2020-01-01T12:00:00Z ] ] - Filtered Item = 1',
    state: {
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
    },
    expected: [{ timestamps: '2020-01-01T12:00:00Z' }],
  },
  {
    count: 2,
    for: 'timestamps',
    message:
      '2. model = [ timestamps [equals 2020-01-01T12:00:00Z ] AND [equals 2020-01-01T12:00:00Z ] ] - Filtered Item = 1',
    state: {
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
      operator: 'AND',
    },
    expected: [{ timestamps: '2020-01-01T12:00:00Z' }],
  },
  {
    count: 3,
    for: 'timestamps',
    message:
      '3. model = [ timestamps [equals 2020-01-01T12:00:00Z ] OR [notEqual 2020-01-01T12:00:00Z ] ] - Filtered Item = 9',
    state: {
      condition1: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 4,
    for: 'timestamps',
    message:
      '4. model = [ timestamps [equals 2020-01-01T12:00:00Z ] AND [notEqual 2020-01-01T12:00:00Z ] ] - Filtered Item = 0',
    state: {
      condition1: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [],
  },
  {
    count: 5,
    for: 'timestamps',
    message:
      '5. model = [ timestamps [equals 2020-01-01T12:00:00Z ] OR [lessThan 2020-01-05T16:00:00Z ] ] - Filtered Item = 4',
    state: {
      condition1: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
    ],
  },
  {
    count: 6,
    for: 'timestamps',
    message:
      '6. model = [ timestamps [equals 2020-01-01T12:00:00Z ] AND [lessThan 2020-01-05T16:00:00Z ] ] - Filtered Item = 1',
    state: {
      condition1: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [{ timestamps: '2020-01-01T12:00:00Z' }],
  },
  {
    count: 7,
    for: 'timestamps',
    message:
      '7. model = [ timestamps [equals 2020-01-01T12:00:00Z ] OR [greaterThan 2020-01-01T12:00:00Z ] ] - Filtered Item = 9',
    state: {
      condition1: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 8,
    for: 'timestamps',
    message:
      '8. model = [ timestamps [equals 2020-01-01T12:00:00Z ] AND [greaterThan 2020-01-01T12:00:00Z ] ] - Filtered Item = 0',
    state: {
      condition1: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [],
  },
  {
    count: 9,
    for: 'timestamps',
    message:
      '9. model = [ timestamps [equals 2020-01-01T12:00:00Z ] OR [inRange 2020-01-06T17:00:00Z - 2020-01-09T20:00:00Z] ] - Filtered Item = 3',
    state: {
      condition1: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'inRange',
        filter: '2020-01-06T17:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
    ],
  },
  {
    count: 10,
    for: 'timestamps',
    message:
      '10. model = [ timestamps [equals 2020-01-01T12:00:00Z ] AND [inRange 2020-01-06T17:00:00Z - 2020-01-09T20:00:00Z] ] - Filtered Item = 0',
    state: {
      condition1: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'inRange',
        filter: '2020-01-06T17:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      operator: 'AND',
    },
    expected: [],
  },
  {
    count: 11,
    for: 'timestamps',
    message:
      '11. model = [ timestamps [notEqual 2020-01-01T12:00:00Z ] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: { type: 'equals', filter: null, filterTo: null },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 12,
    for: 'timestamps',
    message:
      '12. model = [ timestamps [notEqual 2020-01-01T12:00:00Z ] OR [equals 2020-01-01T12:00:00Z ] ] - Filtered Item = 9',
    state: {
      condition1: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 13,
    for: 'timestamps',
    message:
      '13. model = [ timestamps [notEqual 2020-01-01T12:00:00Z ] AND [equals 2020-01-01T12:00:00Z ] ] - Filtered Item = 0',
    state: {
      condition1: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [],
  },
  {
    count: 14,
    for: 'timestamps',
    message:
      '14. model = [ timestamps [notEqual 2020-01-01T12:00:00Z ] OR [notEqual 2020-01-01T12:00:00Z ] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 15,
    for: 'timestamps',
    message:
      '15. model = [ timestamps [notEqual 2020-01-01T12:00:00Z ] AND [notEqual 2020-01-01T12:00:00Z ] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 16,
    for: 'timestamps',
    message:
      '16. model = [ timestamps [notEqual 2020-01-01T12:00:00Z ] OR [lessThan 2020-01-05T16:00:00Z ] ] - Filtered Item = 9',
    state: {
      condition1: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 17,
    for: 'timestamps',
    message:
      '17. model = [ timestamps [notEqual 2020-01-01T12:00:00Z ] AND [lessThan 2020-01-05T16:00:00Z ] ] - Filtered Item = 3',
    state: {
      condition1: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
    ],
  },
  {
    count: 18,
    for: 'timestamps',
    message:
      '18. model = [ timestamps [notEqual 2020-01-01T12:00:00Z ] OR [greaterThan 2020-01-01T12:00:00Z ] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 19,
    for: 'timestamps',
    message:
      '19. model = [ timestamps [notEqual 2020-01-01T12:00:00Z ] AND [greaterThan 2020-01-01T12:00:00Z ] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 20,
    for: 'timestamps',
    message:
      '20. model = [ timestamps [notEqual 2020-01-01T12:00:00Z ] OR [inRange 2020-01-06T17:00:00Z - 2020-01-09T20:00:00Z] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'inRange',
        filter: '2020-01-06T17:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 21,
    for: 'timestamps',
    message:
      '21. model = [ timestamps [notEqual 2020-01-01T12:00:00Z ] AND [inRange 2020-01-06T17:00:00Z - 2020-01-09T20:00:00Z] ] - Filtered Item = 2',
    state: {
      condition1: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'inRange',
        filter: '2020-01-06T17:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      operator: 'AND',
    },
    expected: [
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
    ],
  },
  {
    count: 22,
    for: 'timestamps',
    message:
      '22. model = [ timestamps [lessThan 2020-01-05T16:00:00Z ] ] - Filtered Item = 4',
    state: {
      condition1: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      condition2: { type: 'equals', filter: null, filterTo: null },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
    ],
  },
  {
    count: 23,
    for: 'timestamps',
    message:
      '23. model = [ timestamps [lessThan 2020-01-05T16:00:00Z ] OR [equals 2020-01-01T12:00:00Z ] ] - Filtered Item = 4',
    state: {
      condition1: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
    ],
  },
  {
    count: 24,
    for: 'timestamps',
    message:
      '24. model = [ timestamps [lessThan 2020-01-05T16:00:00Z ] AND [equals 2020-01-01T12:00:00Z ] ] - Filtered Item = 1',
    state: {
      condition1: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [{ timestamps: '2020-01-01T12:00:00Z' }],
  },
  {
    count: 25,
    for: 'timestamps',
    message:
      '25. model = [ timestamps [lessThan 2020-01-05T16:00:00Z ] OR [notEqual 2020-01-01T12:00:00Z ] ] - Filtered Item = 9',
    state: {
      condition1: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 26,
    for: 'timestamps',
    message:
      '26. model = [ timestamps [lessThan 2020-01-05T16:00:00Z ] AND [notEqual 2020-01-01T12:00:00Z ] ] - Filtered Item = 3',
    state: {
      condition1: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
    ],
  },
  {
    count: 27,
    for: 'timestamps',
    message:
      '27. model = [ timestamps [lessThan 2020-01-05T16:00:00Z ] OR [lessThan 2020-01-05T16:00:00Z ] ] - Filtered Item = 4',
    state: {
      condition1: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
    ],
  },
  {
    count: 28,
    for: 'timestamps',
    message:
      '28. model = [ timestamps [lessThan 2020-01-05T16:00:00Z ] AND [lessThan 2020-01-05T16:00:00Z ] ] - Filtered Item = 4',
    state: {
      condition1: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
    ],
  },
  {
    count: 29,
    for: 'timestamps',
    message:
      '29. model = [ timestamps [lessThan 2020-01-05T16:00:00Z ] OR [greaterThan 2020-01-01T12:00:00Z ] ] - Filtered Item = 9',
    state: {
      condition1: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 30,
    for: 'timestamps',
    message:
      '30. model = [ timestamps [lessThan 2020-01-05T16:00:00Z ] AND [greaterThan 2020-01-01T12:00:00Z ] ] - Filtered Item = 3',
    state: {
      condition1: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
    ],
  },
  {
    count: 31,
    for: 'timestamps',
    message:
      '31. model = [ timestamps [lessThan 2020-01-05T16:00:00Z ] OR [inRange 2020-01-06T17:00:00Z - 2020-01-09T20:00:00Z] ] - Filtered Item = 6',
    state: {
      condition1: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'inRange',
        filter: '2020-01-06T17:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
    ],
  },
  {
    count: 32,
    for: 'timestamps',
    message:
      '32. model = [ timestamps [lessThan 2020-01-05T16:00:00Z ] AND [inRange 2020-01-06T17:00:00Z - 2020-01-09T20:00:00Z] ] - Filtered Item = 0',
    state: {
      condition1: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'inRange',
        filter: '2020-01-06T17:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      operator: 'AND',
    },
    expected: [],
  },
  {
    count: 33,
    for: 'timestamps',
    message:
      '33. model = [ timestamps [greaterThan 2020-01-01T12:00:00Z ] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: { type: 'equals', filter: null, filterTo: null },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 34,
    for: 'timestamps',
    message:
      '34. model = [ timestamps [greaterThan 2020-01-01T12:00:00Z ] OR [equals 2020-01-01T12:00:00Z ] ] - Filtered Item = 9',
    state: {
      condition1: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 35,
    for: 'timestamps',
    message:
      '35. model = [ timestamps [greaterThan 2020-01-01T12:00:00Z ] AND [equals 2020-01-01T12:00:00Z ] ] - Filtered Item = 0',
    state: {
      condition1: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [],
  },
  {
    count: 36,
    for: 'timestamps',
    message:
      '36. model = [ timestamps [greaterThan 2020-01-01T12:00:00Z ] OR [notEqual 2020-01-01T12:00:00Z ] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 37,
    for: 'timestamps',
    message:
      '37. model = [ timestamps [greaterThan 2020-01-01T12:00:00Z ] AND [notEqual 2020-01-01T12:00:00Z ] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 38,
    for: 'timestamps',
    message:
      '38. model = [ timestamps [greaterThan 2020-01-01T12:00:00Z ] OR [lessThan 2020-01-05T16:00:00Z ] ] - Filtered Item = 9',
    state: {
      condition1: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 39,
    for: 'timestamps',
    message:
      '39. model = [ timestamps [greaterThan 2020-01-01T12:00:00Z ] AND [lessThan 2020-01-05T16:00:00Z ] ] - Filtered Item = 3',
    state: {
      condition1: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
    ],
  },
  {
    count: 40,
    for: 'timestamps',
    message:
      '40. model = [ timestamps [greaterThan 2020-01-01T12:00:00Z ] OR [greaterThan 2020-01-01T12:00:00Z ] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 41,
    for: 'timestamps',
    message:
      '41. model = [ timestamps [greaterThan 2020-01-01T12:00:00Z ] AND [greaterThan 2020-01-01T12:00:00Z ] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 42,
    for: 'timestamps',
    message:
      '42. model = [ timestamps [greaterThan 2020-01-01T12:00:00Z ] OR [inRange 2020-01-06T17:00:00Z - 2020-01-09T20:00:00Z] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'inRange',
        filter: '2020-01-06T17:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 43,
    for: 'timestamps',
    message:
      '43. model = [ timestamps [greaterThan 2020-01-01T12:00:00Z ] AND [inRange 2020-01-06T17:00:00Z - 2020-01-09T20:00:00Z] ] - Filtered Item = 2',
    state: {
      condition1: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      condition2: {
        type: 'inRange',
        filter: '2020-01-06T17:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      operator: 'AND',
    },
    expected: [
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
    ],
  },
  {
    count: 44,
    for: 'timestamps',
    message:
      '44. model = [ timestamps [inRange 2020-01-01T12:00:00Z - 2020-01-09T20:00:00Z] ] - Filtered Item = 7',
    state: {
      condition1: {
        type: 'inRange',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      condition2: { type: 'equals', filter: null, filterTo: null },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
    ],
  },
  {
    count: 45,
    for: 'timestamps',
    message:
      '45. model = [ timestamps [inRange 2020-01-01T12:00:00Z - 2020-01-09T20:00:00Z] OR [equals 2020-01-01T12:00:00Z ] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'inRange',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      condition2: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
    ],
  },
  {
    count: 46,
    for: 'timestamps',
    message:
      '46. model = [ timestamps [inRange 2020-01-01T12:00:00Z - 2020-01-09T20:00:00Z] AND [equals 2020-01-01T12:00:00Z ] ] - Filtered Item = 0',
    state: {
      condition1: {
        type: 'inRange',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      condition2: {
        type: 'equals',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [],
  },
  {
    count: 47,
    for: 'timestamps',
    message:
      '47. model = [ timestamps [inRange 2020-01-01T12:00:00Z - 2020-01-09T20:00:00Z] OR [notEqual 2020-01-01T12:00:00Z ] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'inRange',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      condition2: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 48,
    for: 'timestamps',
    message:
      '48. model = [ timestamps [inRange 2020-01-01T12:00:00Z - 2020-01-09T20:00:00Z] AND [notEqual 2020-01-01T12:00:00Z ] ] - Filtered Item = 7',
    state: {
      condition1: {
        type: 'inRange',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      condition2: {
        type: 'notEqual',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
    ],
  },
  {
    count: 49,
    for: 'timestamps',
    message:
      '49. model = [ timestamps [inRange 2020-01-01T12:00:00Z - 2020-01-09T20:00:00Z] OR [lessThan 2020-01-05T16:00:00Z ] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'inRange',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      condition2: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-01T12:00:00Z' },
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
    ],
  },
  {
    count: 50,
    for: 'timestamps',
    message:
      '50. model = [ timestamps [inRange 2020-01-01T12:00:00Z - 2020-01-09T20:00:00Z] AND [lessThan 2020-01-05T16:00:00Z ] ] - Filtered Item = 3',
    state: {
      condition1: {
        type: 'inRange',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      condition2: {
        type: 'lessThan',
        filter: '2020-01-05T16:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
    ],
  },
  {
    count: 51,
    for: 'timestamps',
    message:
      '51. model = [ timestamps [inRange 2020-01-01T12:00:00Z - 2020-01-09T20:00:00Z] OR [greaterThan 2020-01-01T12:00:00Z ] ] - Filtered Item = 8',
    state: {
      condition1: {
        type: 'inRange',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      condition2: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
      { timestamps: '2020-01-09T20:00:00Z' },
    ],
  },
  {
    count: 52,
    for: 'timestamps',
    message:
      '52. model = [ timestamps [inRange 2020-01-01T12:00:00Z - 2020-01-09T20:00:00Z] AND [greaterThan 2020-01-01T12:00:00Z ] ] - Filtered Item = 7',
    state: {
      condition1: {
        type: 'inRange',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      condition2: {
        type: 'greaterThan',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: null,
      },
      operator: 'AND',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
    ],
  },
  {
    count: 53,
    for: 'timestamps',
    message:
      '53. model = [ timestamps [inRange 2020-01-01T12:00:00Z - 2020-01-09T20:00:00Z] OR [inRange 2020-01-06T17:00:00Z - 2020-01-09T20:00:00Z] ] - Filtered Item = 7',
    state: {
      condition1: {
        type: 'inRange',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      condition2: {
        type: 'inRange',
        filter: '2020-01-06T17:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      operator: 'OR',
    },
    expected: [
      { timestamps: '2020-01-02T13:00:00Z' },
      { timestamps: '2020-01-03T14:00:00Z' },
      { timestamps: '2020-01-04T15:00:00Z' },
      { timestamps: '2020-01-05T16:00:00Z' },
      { timestamps: '2020-01-06T17:00:00Z' },
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
    ],
  },
  {
    count: 54,
    for: 'timestamps',
    message:
      '54. model = [ timestamps [inRange 2020-01-01T12:00:00Z - 2020-01-09T20:00:00Z] AND [inRange 2020-01-06T17:00:00Z - 2020-01-09T20:00:00Z] ] - Filtered Item = 2',
    state: {
      condition1: {
        type: 'inRange',
        filter: '2020-01-01T12:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      condition2: {
        type: 'inRange',
        filter: '2020-01-06T17:00:00.000Z',
        filterTo: '2020-01-09T20:00:00.000Z',
      },
      operator: 'AND',
    },
    expected: [
      { timestamps: '2020-01-07T18:00:00Z' },
      { timestamps: '2020-01-08T19:00:00Z' },
    ],
  },
]
