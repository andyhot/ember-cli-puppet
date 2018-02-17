import { helper } from '@ember/component/helper';

const nop = function() {};

export function puppetSend([component, method, ...args]) {
  if (!component) {
    return nop;
  }
  return component.send.bind(component, method, ...args);
}

export default helper(puppetSend);
