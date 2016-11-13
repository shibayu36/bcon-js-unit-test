function timeoutMessage(container, message, timeout) {
  container.textContent = message;

  setTimeout(function () {
    container.textContent = '';
  }, timeout);
}

export { timeoutMessage }
