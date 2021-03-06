import { module, test } from 'qunit';
import { visit, currentURL, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | puppet send', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.equal(find('div[data-test]').textContent.trim(), 'me:2');

    await click('button[data-send]');
    assert.equal(find('div[data-test]').textContent.trim(), 'me:12');

    // make sure puppet-send doesn't fail when component instance is not set
    await click('button[data-send-invalid]');
  });
});
