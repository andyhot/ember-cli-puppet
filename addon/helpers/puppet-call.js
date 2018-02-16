import { helper } from '@ember/component/helper';

export function puppetCall([component, method, ...args]) {
  return component[method].bind(component, ...args);
}

export default helper(puppetCall);
