import assert from 'assert';
import { loadServerHTML } from '../load-server-html';
import sinon from 'sinon';

describe('loadServerHTML', function() {
  it('サーバのHTMLを読み込める', function() {
    document.body.innerHTML = __html__['src/js/test/load-server-html.html'];

    // XMLHttpRequestの処理をフェイクして、
    // 配信サーバのように動くオブジェクトを作成する
    let server = sinon.fakeServer.create();

    let container = document.querySelector('.js-container');

    assert.equal(container.innerHTML, '', '最初は何も存在しない');

    // loadServerHTMLを実行すると、最初はloading状態にになるはず
    loadServerHTML(container, '/path/to/server_html');
    assert.equal(container.innerHTML, 'loading', 'リクエストを送ったら中身がloadingに');

    // サーバがレスポンスを返したらHTMLが表示されるはず
    // fakeServerを用いて以下のように書ける
    server.respondWith([
      200, { "Content-Type": "text/html" }, '<p>サーバから返したHTMLです</p>'
    ]);
    server.respond();

    assert.equal(container.innerHTML, '<p>サーバから返したHTMLです</p>', '返ってきたHTMLがロードされる');

    // フェイクしていた処理を元に戻す
    server.restore();
  });
});
