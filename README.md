ember-cli-puppet [![Build Status](https://travis-ci.org/andyhot/ember-cli-puppet.svg?branch=master)](https://travis-ci.org/andyhot/ember-cli-puppet)
==============================================================================

Turn components into puppets. Calling their actions or even functions from parent components / controllers.

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-puppet
```


Usage
------------------------------------------------------------------------------

Assuming you mix in ember-cli-puppet/mixins/puppet into `your-component`, this addon allows you to do:
```
{{your-component onPuppet=(action (mut instance))}}

<button {{action (puppet-call instance 'func_name')}}>Call the func_name function of the component</button>
<button {{action (puppet-send instance 'act_name')}}>Invoke the act_name action of the component</button>
```

Alternatives
------------------------------------------------------------------------------

* ember-inbound-actions - okay but unmaintained
* Modifying parameters and having the component monitor for changes - pure ugliness

FAQ
------------------------------------------------------------------------------

* Doesn't this break the DDAU principle? Absolutely! Use at your own risk.


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-cli-puppet`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
