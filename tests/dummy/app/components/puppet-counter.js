import Component from '@ember/component';
import layout from '../templates/components/puppet-counter';
import Puppet from 'ember-cli-puppet/mixins/puppet';

export default Component.extend(Puppet, {
  layout,

  count: 0,

  inc() {
    this.incrementProperty('count');
  },

  actions: {
    inc10() {
      this.set('count', this.get('count') + 10);
    }
  }
});
