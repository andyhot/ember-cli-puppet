import { helper } from '@ember/component/helper';

export function puppetAction([component, method, ...args]) {
  return component.send.bind(component, method, ...args);
}

export default helper(puppetAction);
