import { helper } from '@ember/component/helper';

const nop = function() {};

export function puppetCall([component, method, ...args]) {
  if (!component) {
    return nop;
  }
  return component[method].bind(component, ...args);
}

export default helper(puppetCall);
