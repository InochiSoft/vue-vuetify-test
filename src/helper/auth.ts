export function authHeader() {
  // return authorization header with jwt token
  const user: any = JSON.parse(<any>localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}
