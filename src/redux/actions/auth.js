import * as types from '../actionTypes'

import { addPayment } from './history.js'

export function changeTab(tab) {
  return {
    type: types.AUTH_CHANGE_TAB,
    tab: tab
  }
}

export function unmount() {
  return {
    type: types.DESTROY
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded
}

export function register(fields) {
  return {
    types: [types.REGISTER, types.REGISTER_SUCCESS, types.REGISTER_FAIL],
    promise: (client) => client.post('/auth/register', {
      data: {
        username: fields.username,
        password: fields.password
      }
    })
  }
}

export function reload(opts) {
  return {
    types: [types.RELOADING, types.RELOAD_SUCCESS, types.RELOAD_FAIL],
    promise: (client) => client.post('/users/' + opts.username + '/reload')
  }
}

export function loadConfig() {
  return {
    types: [types.LOAD_CONFIG, types.LOAD_CONFIG_SUCCESS, types.LOAD_CONFIG_FAIL],
    promise: (client) => client.get('/config')
  }
}

export function updateBalance(balance) {
  return {
    type: types.UPDATE_BALANCE,
    balance: balance
  }
}

// TODO move socket stuff somewhere else
function socketSubscribe(dispatch, username) {
  if (socket) {
    socket.emit('subscribe', username)
    socket.on('payment', (payment) => {
      dispatch(addPayment(payment))
    })
    socket.on('balance', (balance) => {
      dispatch(updateBalance(balance))
    })
  }
}

function socketUnsubscribe() {
  if (socket) {
    socket.emit('unsubscribe')
    socket.removeAllListeners('payment')
    socket.removeAllListeners('balance')
  }
}

export function load() {
  return (dispatch) => {
    return dispatch({
      types: [types.AUTH_LOAD, types.AUTH_LOAD_SUCCESS, types.AUTH_LOAD_FAIL],
      promise: (client) => client.get('/auth/load')
        .then((user) => {
          socketSubscribe(dispatch, user.username)

          return user
        })
    })
  }
}

export function login(fields) {
  return (dispatch) => {
    return dispatch({
      types: [types.LOGIN, types.LOGIN_SUCCESS, types.LOGIN_FAIL],
      promise: (client) => client.post('/auth/login', {
        data: {
          username: fields.username,
          password: fields.password
        }
      }).then((user) => {
        socketSubscribe(dispatch, user.username)

        return user
      })
    })
  }
}

export function logout() {
  return {
    types: [types.LOGOUT, types.LOGOUT_SUCCESS, types.LOGOUT_FAIL],
    promise: (client) => client.get('/auth/logout')
      .then(socketUnsubscribe)
  }
}
