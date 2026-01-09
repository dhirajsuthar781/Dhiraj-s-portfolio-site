// utils/response.js
export function success(data = null, message = "OK") {
     return {
          status: true,
          message,
          data,
     };
}

export function error(message = "Something went wrong", data = null) {
     return {
          status: false,
          message,
          data,
     };
}


export function safeJSONParse(value) {
     try {
          let parsed = JSON.parse(value);
          if (typeof parsed === "string") {
               return JSON.parse(parsed);
          }
          return parsed;
     } catch (err) {
          return value; // fallback if not JSON
     }
}