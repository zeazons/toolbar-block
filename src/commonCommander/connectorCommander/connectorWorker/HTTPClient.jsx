import Axios from "axios";
import _ from "lodash";

import Worker from "../../../facade/Worker";

const TIMEOUT = 3000;
const TOKEN = "as400Token";

const default_header = {
  headers: {
    "Content-Type": "application/json",
  },
};

const getAS400Token = () => {
  return sessionStorage.getItem(TOKEN);
};

const setAS400Token = (token) => {
  sessionStorage.setItem(TOKEN, token);
};

const requestPost = (data) => {
  const { url, method, header, params } = data;
  const body = {
    id: 1,
    jsonrpc: "2.0",
    method: method,
    params: { data: params },
  };
  return new Promise(async (success, exception) => {
    try {
      const response = await Axios.post(url, body, header);
      success(response);
    } catch (e) {
      exception(e);
    }
  });
};

export default class HTTPClient extends Worker {
  constructor(props) {
    super(props);
  }

  execute = (data) => {
    return requestPost(data);
  };
}

// export const socket = (url, openParams, onMessage, onClose, onError) => {
//   let socket = new WebSocket(url);

//   socket.onopen = event => {
//     socket.send(openParams);
//   };

//   socket.onmessage = event => {
//     onMessage(event);
//   };

//   socket.onclose = event => {
//     if (onClose) {
//       onClose(event);
//     } else {
//       if (event.wasClean) {
//         alert(
//           `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
//         );
//       } else {
//         // e.g. server process killed or network down
//         // event.code is usually 1006 in this case
//         alert("[close] Connection died");
//       }
//     }
//   };

//   socket.onerror = error => {
//     alert(`[error] ${error.message}`);
//   };
// };
