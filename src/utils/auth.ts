export const isAuthenticated = (): boolean => {
  const userName = localStorage.getItem("userName");
  return !!userName && userName.trim() !== "";
};

export const getUserName = (): string | null => {
  return localStorage.getItem("userName");
};

export const logout = (): void => {
  localStorage.removeItem("userName");
  window.location.reload();
};
