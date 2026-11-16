import {
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  Unit_instance3kz1zqli6gr1r as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  isNaNymqb93xtq8w8 as isNaN_0,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
} from './kotlin-kotlin-stdlib.mjs';
import { atomic$ref$130aurmcwdfdf1 as atomic$ref$1 } from './kotlinx-atomicfu.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Js {
  toString() {
    return 'Js';
  }
}
class Node {
  constructor(entry, next) {
    this.s_1 = entry;
    this.t_1 = next;
  }
}
class engines {
  constructor() {
    engines_instance = this;
    this.q_1 = atomic$ref$1(null);
  }
  r(item) {
    this.u(item, 1.0);
  }
  u(item, priority) {
    $l$loop: while (true) {
      var current = this.q_1.kotlinx$atomicfu$value;
      var new_0 = new Node(new EngineEntry(item, priority), current);
      if (this.q_1.atomicfu$compareAndSet(current, new_0))
        break $l$loop;
    }
  }
}
class EngineEntry {
  constructor(factory, priority) {
    priority = priority === VOID ? 1.0 : priority;
    this.v_1 = factory;
    this.w_1 = priority;
    // Inline function 'kotlin.require' call
    if (!!isNaN_0(this.w_1)) {
      var message = 'Priority cannot be NaN';
      throw IllegalArgumentException.h(toString(message));
    }
  }
}
//endregion
function get_initHook() {
  return initHook;
}
var initHook;
var Js_instance;
function Js_getInstance() {
  return Js_instance;
}
function initHook$init$() {
  engines_getInstance().r(Js_instance);
  return Unit_instance;
}
var engines_instance;
function engines_getInstance() {
  if (engines_instance === VOID)
    new engines();
  return engines_instance;
}
var useEngineDispatcher;
//region block: post-declaration
initMetadataForObject(Js, 'Js');
initMetadataForClass(Node, 'Node');
initMetadataForObject(engines, 'engines');
initMetadataForClass(EngineEntry, 'EngineEntry');
//endregion
//region block: init
Js_instance = new Js();
useEngineDispatcher = true;
//endregion
//region block: eager init
initHook = initHook$init$();
//endregion
//region block: exports
var initHook_0 = {get: get_initHook};
export {
  initHook_0 as initHook,
};
//endregion

//# sourceMappingURL=ktor-ktor-client-core.mjs.map
