import { Effect, JobBase } from "src/app/data-interfaces";
import { gameEventBus } from "src/utils/game-event-bus";

export class Job {
    public readonly name: string;
    public readonly toolTipText: string
    public readonly effects: Effect[]

    static freeBears: number;

    numberWorking_: number;
    isVisible_: boolean;

    constructor(info : JobBase, numberWorking : number, isVisible : boolean){
        
        this.name = info.name;
        this.toolTipText = info.toolTipText;
        this.effects = info.effects;
        
        this.numberWorking_ = numberWorking;
        this.isVisible_ = isVisible;
    }

    changeWorking(change : number){
        if((Job.freeBears - change) >= 0 && (this.numberWorking_ + change) >= 0){ 
            Job.freeBears -= change;
            this.numberWorking_ += change;
            gameEventBus.emit('effects.add', undefined,  {effects : this.effects, amount: change})
        }
    }

    getSaveValues() {
        return {numberWorking: this.numberWorking, isVisible: this.isVisible}
    }

    get numberWorking() { return this.numberWorking_ }

    get isVisible() { return this.isVisible_ }
}
