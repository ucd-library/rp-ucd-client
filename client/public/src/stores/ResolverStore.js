import {BaseStore} from '@ucd-lib/cork-app-utils';

class ResolverStore extends BaseStore {

  constructor() {
    super();

    this.data = {};
    this.events = {
      RESOLVED_ID_UPDATE : 'resolved-id-update'
    };
  }

  setResolvedLoading(id, request) {
    this._setResolvedState({
      id, request,
      state : this.STATE.LOADING
    });
  }

  setResolvedLoaded(id, payload) {
    this._setResolvedState({
      id, payload,
      state : this.STATE.LOADED
    });
  }

  setResolvedError(id, error) {
    this._setResolvedState({
      id, error,
      state : this.STATE.ERROR
    });
  }

  _setResolvedState(state) {
    this.data[state.id] = state;
    this.emit(this.events.RESOLVED_ID_UPDATE, state);
  }

}

const store = new ResolverStore();
export default store;