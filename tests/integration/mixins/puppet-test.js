import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, clearRender } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Mixin | puppet', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{puppet-counter
        onPuppet=(action (mut instance))
        offPuppet=(action (mut instance) null)
      }}
    `);
    assert.ok(this.instance !== null);

    await clearRender();
    assert.ok(this.instance === null);
  });
});
