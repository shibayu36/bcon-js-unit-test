import assert from 'assert';
import { appendList } from '../append-list';

describe('appendList', function () {
  it('コンテナにリストを追加できる', function () {
    document.body.innerHTML = __html__['src/js/test/append-list-test.html'];

    let container = document.querySelector('.js-list');

    assert.equal(container.children.length, 0, '最初は0件');

    appendList(container, 'リスト1');
    assert.equal(container.children.length, 1, '件数が1件に');
    assert.equal(container.children[0].textContent, 'リスト1', '1件目のテキストが指定したものに');

    appendList(container, 'リスト2');
    assert.equal(container.children.length, 2, '件数が2件に');
    assert.equal(container.children[0].textContent, 'リスト1', '1件目のテキストはそのまま');
    assert.equal(container.children[1].textContent, 'リスト2', '2件目のテキストは指定したものに');
  });
});

