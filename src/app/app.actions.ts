import { Injectable } from '@angular/core';

@Injectable()
export class AppActions {
    static SET_PLAYERS = 'SET_PLAYERS';
    static SET_GAME_STATE = 'SET_GAME_STATE';
    static SET_TIME_LEFT = 'SET_TIME_LEFT';
    static SET_CURRENT_STEP = 'SET_CURRENT_STEP';

    setPlayers(newPlayers) {
        return {
            type: AppActions.SET_PLAYERS,
            payload: newPlayers
        };
    }

    setGameState(newGameState) {
        return {
            type: AppActions.SET_GAME_STATE,
            payload: newGameState
        };
    }

    setTimeLeft(newTimeLeft) {
        return {
            type: AppActions.SET_TIME_LEFT,
            payload: newTimeLeft
        };
    }

    setCurrentStep(newCurrentStep) {
        return {
            type: AppActions.SET_CURRENT_STEP,
            payload: newCurrentStep
        };
    }
}
