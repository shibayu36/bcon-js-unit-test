function loadServerHTML(container, url) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 1) {
      // openしたらloading中表示
      container.innerHTML = 'loading';
    }
    else if (xhr.readyState === 4) {
      // 取得したHTMLを表示
      container.innerHTML = xhr.responseText;
    }
  };

  xhr.open('GET', url);
  xhr.send();
}

export { loadServerHTML };
