function setUserConfig(key, value) {
  window.localStorage.setItem('user_config:' + key, value);
}

function getUserConfig(key) {
  return window.localStorage.getItem('user_config:' + key);
}

export { setUserConfig, getUserConfig };
