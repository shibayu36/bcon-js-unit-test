function appendList(container, text) {
  let li = document.createElement('li');
  li.textContent = text;
  container.appendChild(li);
}

export { appendList }
