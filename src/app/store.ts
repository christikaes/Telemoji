import { AppActions } from './app.actions';

interface Player {
    playerId: string;
    name: string;
    emoji: string;
    messages: Array<string>;
}

export interface IAppState {
    players: Array<Player>;
    timeLeft: number;
    state: 'start' | 'progress' | 'end';
    currentStep: number;
}

export const INITIAL_STATE: IAppState = {
    players: [],
    timeLeft: 0,
    state: 'start',
    currentStep: 0
};

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case AppActions.SET_CURRENT_STEP:
            return {
                ...state,
                currentStep: action.payload
            };
        case AppActions.SET_GAME_STATE:
            return {
                ...state,
                state: action.payload
            };
        case AppActions.SET_PLAYERS:
            return {
                ...state,
                players: action.payload
            };
        case AppActions.SET_TIME_LEFT:
            return {
                ...state,
                timeLeft: action.payload
            };
        default:
            break;
    }
    return state;
}
