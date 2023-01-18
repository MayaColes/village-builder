import { Subject } from "rxjs";
import { Effect, JobBase } from "src/app/data-interfaces";

export class Job {
    public readonly name: string;
    public readonly toolTipText: string
    public readonly effects: Effect[]

    public readonly effectsSubject: Subject<{amount  : number, effects: Effect[]}>;
    public readonly freeBearsChanges: Subject<number>;

    numberWorking_: number;
    freeBears_: number;
    isVisible_: boolean;

    constructor(info : JobBase, numberWorking : number, 
                isVisible : boolean, freeBearsSubject : Subject<number>){
        
        this.name = info.name;
        this.toolTipText = info.toolTipText;
        this.effects = info.effects;
        
        this.numberWorking_ = numberWorking;
        this.isVisible_ = isVisible;

        this.effectsSubject = new Subject<{amount  : number, effects: Effect[]}>();
        this.freeBearsChanges = new Subject<number>();

        freeBearsSubject.subscribe(({
            next: (freeBears) => this.freeBears_ = freeBears
        }))
    }

    changeWorking(change : number){
        if((this.freeBears_ - change) >= 0 && (this.numberWorking_ + change) >= 0){ 
            this.freeBears_ -= change;
            this.numberWorking_ += change;
            this.freeBearsChanges.next(this.freeBears_)
            this.effectsSubject.next({amount: change, effects: this.effects})
        }
    }

    get numberWorking() { return this.numberWorking_ }

    get isVisible() { return this.isVisible_ }
}
