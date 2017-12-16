import * as fromRoot from '../application/app.reducers';


export const FEATURE_NAME = 'apprx';

export interface RxState {
}

export interface State extends fromRoot.State {
    apprx: RxState
}

// Feature state reducers
export const reducers = {
};
