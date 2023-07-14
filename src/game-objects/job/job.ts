import { EffectBase, JobBase } from "src/app/data-interfaces";
import { gameEventBus } from "src/utils/game-event-bus";
import { Effect } from "../effect/effect";

export class Job {
    public readonly name: string;
    public readonly toolTipText: string

    static freeBears: number;

    numberWorking_: number;
    isVisible_: boolean;
    effects_: Effect[];
    effectDependencies_ : string[];

    constructor(info : JobBase, numberWorking : number, isVisible : boolean){
        
        this.name = info.name;
        this.toolTipText = info.toolTipText;

        this.initializeEffectDependencies(info.effects)
        this.initializeEffects(info.effects)
        
        this.numberWorking_ = numberWorking;
        this.isVisible_ = isVisible;
    }

    changeWorking(change : number){
        if((Job.freeBears - change) >= 0 && (this.numberWorking_ + change) >= 0){ 
            Job.freeBears -= change;
            this.numberWorking_ += change;
            gameEventBus.emit('effects.add', undefined,  {effects : this.effects_, amount: change})
        }
    }

    getSaveValues() {
        return {numberWorking: this.numberWorking, isVisible: this.isVisible}
    }

    private initializeEffectDependencies(effects: EffectBase[]){
        this.effectDependencies_ = effects.filter((dep) => {
            return dep.objectType === 'resource' && dep.type === 'production' && dep.amount < 0
        }).map((effect) => {
            return effect.object
        })
    }

    private initializeEffects(effects: EffectBase[]){
        this.effects_ = []
        
        effects.forEach((effect) => {
            this.effects_.push(new Effect(effect, this.effectDependencies_))
        })
    }

    addEffect(effect: EffectBase) {
        this.effects_.push(new Effect(effect, this.effectDependencies_))
    }

    get effects() : Effect[] { return this.effects_ }

    get numberWorking() { return this.numberWorking_ }

    get isVisible() { return this.isVisible_ }
}
