import assert from 'assert';
import { useFakeLocalStorage } from './modules/fake-storage';
import { setUserConfig, getUserConfig } from '../user-config';

describe('UserConfig', function () {
  it('設定を保存できる', function () {
    // メモリに保存するまっさらなlocalStorageにfake
    let fake = useFakeLocalStorage();

    setUserConfig('hoge', 'fuga');
    assert.equal(window.localStorage.getItem('user_config:hoge'), 'fuga', 'localStorageに保存されている');
    assert.equal(getUserConfig('hoge'), 'fuga', 'getUserConfigで取得できる');

    // restoreするとfakeが解除される
    fake.restore();
    assert.equal(window.localStorage.getItem('user_config:hoge'), null);
  });
});
