let socket = null;

const socketStore = {
  get: () => socket,
  set: (newSocket) => {
    socket = newSocket;
  },
  request: async (event, data = {}) => {
    if (!socket) throw new Error("Socket not initialized");

    return new Promise((resolve, reject) => {
      socket.emit(event, data, (response) => {
        if (response?.error) {
          reject(response.error);
        } else {
          resolve(response);
        }
      });
    });
  },
};

export default socketStore;
