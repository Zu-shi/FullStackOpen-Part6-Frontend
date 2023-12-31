import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })
  // EG, nothing is undefined.

  test('all are incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    let newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })

    const action2 = {
      type: 'OK'
    }

    const action3 = {
      type: 'BAD'
    }

    const action4 = {
      type: 'ZERO'
    }

    newState = counterReducer(newState, action2)
    expect(newState).toEqual({
      good: 1,
      ok: 1,
      bad: 0
    })

    newState = counterReducer(newState, action3)
    expect(newState).toEqual({
      good: 1,
      ok: 1,
      bad: 1
    })

    newState = counterReducer(newState, action4)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 0
    })
  })
})