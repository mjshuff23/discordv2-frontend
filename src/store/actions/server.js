import { baseUrl } from "../../config"
export const ADD_SERVER = 'discord/server/ADD_SERVER'
export const ADD_SERVERS = 'discord/server/ADD_SERVERS'
export const LOAD_SERVER = 'discord/servers/LOAD'
export const SET_CURRENT_SERVER = 'discord/servers/SET_CURRENT'

export const loadServer = (list) => ({ type: LOAD_SERVER, list })
export const addServer = (server) => ({ type: ADD_SERVER, server })
export const setCurrentServer = (serverId) => ({ type: SET_CURRENT_SERVER, serverId })
// export const addServers = (servers) => ({ type: ADD_SERVERS, servers})

export const createServer = (title) => async (dispatch) => {
  const userId = window.localStorage.getItem('userId')
  const response = await fetch(`${baseUrl}/servers`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, userId }),
  })

  if (response.ok) {
    const server = await response.json()
    dispatch(addServer(server))
  }
}

export const getServers = () => async (dispatch) => {
  const userId = window.localStorage.getItem('userId')
  const response = await fetch(`${baseUrl}/servers/${userId}`)

  if (response.ok) {
    const { servers } = await response.json()
    dispatch(loadServer(servers))
  }
}
