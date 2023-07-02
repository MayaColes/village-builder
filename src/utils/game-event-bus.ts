import EventBus from 'js-event-bus';

export interface GameEvent{
    id: string,
    data: any
}

export const gameEventBus = new EventBus();
