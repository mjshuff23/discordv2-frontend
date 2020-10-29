const baseUrl = "http://localhost:8080";
export const ADD_SERVER = 'discord/server/ADD_SERVER'

export const addServer = (title, userId) => ({type: ADD_SERVER, title, userId});

export const createServer = (title) => async (dispatch) => {
    console.log(title)
   const userId = window.localStorage.getItem('userId')
    const response = await fetch(`${baseUrl}/servers`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, userId }),
      });

      if (response.ok) {
        const { title } = await response.json();
        console.log(title)

        dispatch(addServer(title));
      }
};