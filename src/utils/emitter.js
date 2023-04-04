import EventEmitter from "events";

const _emittter = new EventEmitter();
_emittter.setMaxListeners(0); // unlimit listener

export const emitter = _emittter;
