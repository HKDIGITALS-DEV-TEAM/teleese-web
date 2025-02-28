export default class API {
  private _devApiUrl: string = "http://localhost:4000";
  // private _imagePath: string = "http://localhost:4000/"

  public get apiUrl() {
    return this._devApiUrl;
  }
  // public get imagePath() {
  //   return this._imagePath;
  // }

  async getData(url: string, token?: string | null) {
    let response = null;
    if(token) {
      response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
    } else {
      response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: token ? "Bearer " + token : "",
        },
      })
    }
    const responseJson = await response.json();
    return responseJson;
  }

  async postData(
    url: string,
    datas?: any,
    token?: string | null,
    isMultipart?: boolean
  ) {
    let response: Response;

    if (isMultipart) {
      response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: datas as BodyInit,
      });
    } else if (token) {
      response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datas),
      });
    } else {
      response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datas),
      });
    }
    const responseJson = await response.json();
    return responseJson;
  }

  async putData(
    url: string,
    datas: any,
    token: string | null,
    isMultipart?: boolean
  ) {
    let response: Response;
    if (isMultipart) {
      response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: datas as BodyInit,
      });
    } else if (token) {
      response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datas),
      });
    } else {
      response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: datas ? JSON.stringify(datas) : null,
      });
    }
    const responseJson = await response.json();
    return responseJson;
  }

  async deleteData(url: string, token?: string | null, datas?: any) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? "Bearer " + token : "",
      },
      body: datas,
    });
    const responseJson = await response.json();
    return responseJson;
  }
}
