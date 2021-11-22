export const UrlServer = () => {
  const domain = global.origin;

  switch (domain) {
    case "http://10.0.0.87:3000":
      return "http://10.0.0.45:8082";
  }
  return "https://api.produce.isofhcare.com";
};

export default {
  auth: "",
  serverApi: UrlServer(),
  requestApi(methodType, url, body, ignoreAuth) {
    return new Promise((resolve, reject) => {
      if (!body) body = {};
      if (methodType.toLowerCase() !== "get") {
        body = JSON.stringify(body);
      }
      this.requestFetch(
        methodType,
        url && url.indexOf("http") === 0 ? url : url,
        ignoreAuth
          ? {
              Accept: "application/json",
              "Content-Type": "application/json",
            }
          : {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: this.auth,
            },
        body
      )
        .then((s) => {
          s.json()
            .then((val) => {
              if (val.code === 401) {
                localStorage.clear();
                // window.location.href = "/auth/login";
              }
              resolve(val);
            })
            .catch((e) => {
              reject(e);
            });
        })
        .catch((e) => {
          if (e && e.status === 401) {
            localStorage.clear();
            // window.location.href = "/auth/login";
          }
          reject(e);
        });
    });
  },
  requestFetch(methodType, url, headers, body) {
    return new Promise((resolve, reject) => {
      let fetchParam = {
        method: methodType,
        headers,
      };

      if (methodType.toLowerCase() !== "get") {
        fetchParam.body = body;
      }
      return fetch(this.serverApi + url, fetchParam)
        .then((json) => {
          if (!json.ok) {
            reject(json);
          } else resolve(json);
        })
        .catch((e) => {
          // window.location.href = "/maintain";
          reject(e);
        });
    });
  },
};
