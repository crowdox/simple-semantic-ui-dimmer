import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ss dimmer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{ss-dimmer}}`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      {{#ss-dimmer}}
        template block text
      {{/ss-dimmer}}
    `);

    assert.dom().hasText('template block text');
  });

  test('dimmer shows and hides on click', async function(assert) {
    assert.expect(6);
    this.set('isActive', false);
    // Template block usage:
    await render(hbs`
      <div class="ui segment">
        {{ss-dimmer isActive=isActive transitionDuration=0}}
      </div>
    `);

    assert.dom('.ui.segment .ui.dimmer').exists();
    assert.dom('.ui.segment .ui.dimmer.active').doesNotExist();

    this.set('isActive', true);
    await settled();
    assert.dom('.ui.segment .ui.dimmer').exists();
    assert.dom('.ui.segment .ui.dimmer.active').exists();

    this.set('isActive', false);
    await settled();
    assert.dom('.ui.segment .ui.dimmer').exists();
    assert.dom('.ui.segment .ui.dimmer.active').doesNotExist();
  });
});
