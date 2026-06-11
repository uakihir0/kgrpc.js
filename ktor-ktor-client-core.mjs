import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
} from './kotlin-kotlin-stdlib.mjs';
import { atomic$ref$130aurmcwdfdf1 as atomic$ref$1 } from './kotlinx-atomicfu.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Js {
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Js))
      return false;
    return true;
  }
}
class Node {
  constructor(item, next) {
    this.e_1 = item;
    this.f_1 = next;
  }
}
class engines {
  constructor() {
    engines_instance = this;
    this.c_1 = atomic$ref$1(null);
  }
  d(item) {
    $l$loop: while (true) {
      var current = this.c_1.kotlinx$atomicfu$value;
      var new_0 = new Node(item, current);
      if (this.c_1.atomicfu$compareAndSet(current, new_0))
        break $l$loop;
    }
  }
}
//endregion
function get_initHook() {
  return initHook_0;
}
var initHook_0;
var Js_instance;
function Js_getInstance() {
  return Js_instance;
}
function initHook$init$() {
  engines_getInstance().d(Js_instance);
  return Unit_instance;
}
var engines_instance;
function engines_getInstance() {
  if (engines_instance === VOID)
    new engines();
  return engines_instance;
}
//region block: post-declaration
initMetadataForObject(Js, 'Js');
initMetadataForClass(Node, 'Node');
initMetadataForObject(engines, 'engines');
//endregion
//region block: init
Js_instance = new Js();
//endregion
//region block: eager init
initHook_0 = initHook$init$();
//endregion
//region block: exports
var initHook = {get: get_initHook};
export {
  initHook as initHook,
};
//endregion

//# sourceMappingURL=ktor-ktor-client-core.mjs.map
