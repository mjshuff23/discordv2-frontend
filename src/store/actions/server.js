const baseUrl = "http://localhost:8080";
export const ADD_SERVER = 'discord/server/ADD_SERVER'
export const GET_SERVERS = 'discord/server/GET_SERVERS'

export const addServer = (title, serverId) => ({type: ADD_SERVER, title, serverId });
// export const getServers = (servers) => ({type: GET_SERVERS, servers})

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

// export const getServers = () => async (dispatch) => {
//     const userId = window.localStorage.getItem('userId')
//     const response = await fetch(`${baseUrl}/servers`, {
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ userId }),
//       });

//       if (response.ok) {


//       }
// }