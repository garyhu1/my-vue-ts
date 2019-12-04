import _Vue from 'vue'; // <-- notice the changed import
import "./vue";

export declare function install(Vue: typeof _Vue): void;

declare const _default: {
  install: typeof install;
};

export default _default;
