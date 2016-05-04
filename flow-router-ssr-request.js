import { Picker } from 'meteor/meteorhacks:picker';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';


FlowRouter.lastRequest = function () {
  return this._lastReq || false;
};

const superProcessRoute = Picker._processRoute;
const newProcessRoute = (...args) => {
  FlowRouter._lastReq = args[2];
  superProcessRoute.apply(Picker, args);
};
Picker._processRoute = newProcessRoute;
