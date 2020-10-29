export const CREATE_SERVER = 'discord/server/CREATE_SERVER'

export const createServer = (title, userId) => ({type: CREATE_SERVER, title, userId});