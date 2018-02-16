import { module, test } from 'qunit';
import { visit, currentURL, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | puppet call', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.equal(find('div[data-test]').textContent.trim(), 'me:2');

    await click('button[data-call]');
    assert.equal(find('div[data-test]').textContent.trim(), 'me:3');
  });
});
