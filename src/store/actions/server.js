import { baseUrl } from "../../config"
export const ADD_SERVER = 'discord/server/ADD_SERVER'
export const JOIN_SERVER = 'discord/server/JOIN_SERVER'
export const ADD_SERVERS = 'discord/server/ADD_SERVERS'
export const LOAD_SERVER = 'discord/servers/LOAD'
export const SET_CURRENT_SERVER = 'discord/servers/SET_CURRENT'

export const loadServer = (list) => ({ type: LOAD_SERVER, list })
export const addServer = (server) => ({ type: ADD_SERVER, server })
export const addJoinedServer = (server) => ({ type: JOIN_SERVER, server })
export const setCurrentServer = (serverId) => ({ type: SET_CURRENT_SERVER, serverId })
// export const addServers = (servers) => ({ type: ADD_SERVERS, servers})

export const createServer = (title) => async (dispatch) => {
  const userId = window.localStorage.getItem('userId');
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

export const joinServer = (serverId, socket) => async (dispatch) => {
  if(!serverId) return;
  const userId = window.localStorage.getItem('userId');

  const response = await fetch(`${baseUrl}/servers/${serverId}/join`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ serverId, userId }),
  });

  if (response.ok) {
    const {server, user} = await response.json()
    console.log(`JOINING SERVER`, server)
    dispatch(addJoinedServer(server))
    socket.emit('reloadChannels');
  }
}

export const getServers = () => async (dispatch) => {
  const userId = window.localStorage.getItem('userId')
  const response = await fetch(`${baseUrl}/servers/${userId}`)

  if (response.ok) {
    const { servers, otherServers } = await response.json()
    console.log(otherServers)
    console.log(servers)
    const allServers = [...servers, ...otherServers]
    console.log(allServers)
    dispatch(loadServer(allServers))
  }
}
