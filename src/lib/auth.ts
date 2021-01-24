interface User {
  name: string;
  email: string;
  avatar: string;
}

const isAuthenticated = (): boolean => !!localStorage.getItem("isAuth");

const setAuth = (isAuth: boolean) =>
  localStorage.setItem("isAuth", isAuth ? "true" : "");

const getUser = (): User => {
  const user = localStorage.getItem("user");

  return user ? JSON.parse(user) : {};
};

const setUser = (user?: User) =>
  localStorage.setItem("user", JSON.stringify(user));

const login = (
  { email, password }: { email: string; password: string },
  callback: Function
) => {
  setAuth(true);
  setUser({ name: "BRUTUS", email, avatar: "" });
  setTimeout(callback, 300);
};

const logout = (callback: Function) => {
  setAuth(false);
  setUser();
  setTimeout(callback, 300);
};

export default {
  isAuthenticated,
  login,
  logout,
  getUser,
};
