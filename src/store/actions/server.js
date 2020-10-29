const baseUrl = "http://localhost:8080";
export const ADD_SERVER = 'discord/server/ADD_SERVER'
export const ADD_SERVERS = 'discord/server/ADD_SERVERS'

export const addServer = (server) => ({type: ADD_SERVER, server });
export const addServers = (servers) => ({ type: ADD_SERVERS, servers})

export const createServer = (title) => async (dispatch) => {
    console.log(title)
   const userId = window.localStorage.getItem('userId')
    const response = await fetch(`${baseUrl}/servers`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, userId }),
      });

      if (response.ok) {
        const server = await response.json();
        dispatch(addServer(server));
      }
};

export const getServers = () => async (dispatch) => {
    console.log('here');
    const userId = window.localStorage.getItem('userId')
    const response = await fetch(`${baseUrl}/servers/${userId}`)

      if (response.ok) {
        const { servers } = await response.json();
          dispatch(addServers(servers));
         }
}
