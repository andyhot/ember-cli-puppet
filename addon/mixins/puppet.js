import Mixin from '@ember/object/mixin';

export default Mixin.create({
	/**
	 * Specify an action to be invoked when the component inits.
	 */
	onPuppet() {},
	/**
	 * Specify an action to be invoked when the component gets destroyed.
	 */
	offPuppet() {},

	init(...args) {
		this._super(...args);

		this.onPuppet(this);
	},

	willDestroyElement(...args) {
		this._super(...args);

		this.offPuppet(this);
	}
});
