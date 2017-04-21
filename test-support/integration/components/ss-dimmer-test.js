import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ss-dimmer', 'Integration | Component | ss dimmer', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ss-dimmer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ss-dimmer}}
      template block text
    {{/ss-dimmer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('dimmer shows and hides on click', function(assert) {
  assert.expect(6);
  this.set('isActive', false);
  // Template block usage:
  this.render(hbs`
    <div class="ui segment">
      {{ss-dimmer isActive=isActive transitionDuration=0}}
    </div>
  `);

  assert.equal(this.$('.ui.segment .ui.dimmer').length, 1, "UI Dimmer not found");
  assert.equal(this.$('.ui.segment .ui.dimmer.active').length, 0, "An active UI Dimmer was found and shouldn't be");
  this.set('isActive', true);

  let done = assert.async();
  setTimeout(() => {
    assert.equal(this.$('.ui.segment .ui.dimmer').length, 1, "UI Dimmer not found");
    assert.equal(this.$('.ui.segment .ui.dimmer.active').length, 1, "No active UI Dimmer was found"); //broken
    this.set('isActive', false);

    setTimeout(() => {
      assert.equal(this.$('.ui.segment .ui.dimmer').length, 1, "UI Dimmer not found");
      assert.equal(this.$('.ui.segment .ui.dimmer.active').length, 0, "An active UI Dimmer was found and shouldn't be");
      done();
    }, 100);
  }, 100);
});

