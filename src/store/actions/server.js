const baseUrl = "http://localhost:8080";
export const ADD_SERVER = 'discord/server/ADD_SERVER'
export const ADD_SERVERS = 'discord/server/ADD_SERVERS'

export const addServer = (title, serverId) => ({type: ADD_SERVER, title, serverId });

export const createServer = (title) => async (dispatch) => {
    console.log(title)
   const userId = window.localStorage.getItem('userId')
    const response = await fetch(`${baseUrl}/servers`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, userId }),
      });

      if (response.ok) {
        const { title, id } = await response.json();
        console.log(title)

        dispatch(addServer(title, id));
      }
};

export const getServers = () => async (dispatch) => {
    console.log('here');
    const userId = window.localStorage.getItem('userId')
    const response = await fetch(`${baseUrl}/servers/${userId}`)

    const data= await response.json();

      if (response.ok) {
        for (let server of data.servers) {
          // console.log(server.title);
          dispatch(addServer(server.title, server.id));
        }
      }
}
