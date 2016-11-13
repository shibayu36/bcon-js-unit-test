import assert from 'assert';
import sinon from 'sinon';
import { timeoutMessage } from '../timeout-message';

describe('timeoutMessage', function () {
  it('一定時間表示される', function () {
    document.body.innerHTML = __html__['src/js/test/timeout-message-test.html'];

    let clock = sinon.useFakeTimers();

    let container = document.querySelector('.js-timeout-message');

    timeoutMessage(container, 'メッセージ', 3000);
    assert.equal(container.textContent, 'メッセージ', '指定した文章が表示');

    clock.tick(1000);
    assert.equal(container.textContent, 'メッセージ', '1000ms後も表示中');

    clock.tick(2500);
    assert.equal(container.textContent, '', '3500ms後はきえる');

    clock.restore();
  });
});
