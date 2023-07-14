import { Subject } from "rxjs";
import { EffectBase } from "src/app/data-interfaces";
import { gameEventBus } from "src/utils/game-event-bus";

export class Effect {
    public readonly type: string;
    public readonly objectType: string;
    public readonly object: string;
    public readonly resource?: string;
    
    public readonly subject : Subject<boolean>

    amount_: number;
    bonus_?: number;

    disabled_: boolean;

    constructor(info : EffectBase, dependencies: string[]){
        
        this.type = info.type;
        this.objectType = info.objectType;
        this.object = info.object;
        this.resource = info.resource;

        this.subject = new Subject<boolean>();

        this.amount_ = info.amount;
        this.bonus_ = info.bonus;

        if(this.objectType === 'resource' && !(this.type === 'production' && this.amount_ < 0)){
            dependencies.forEach((dep) => {
                gameEventBus.on(
                    `${dep}.disableDependent`,
                    this.onDisable
                );

                gameEventBus.on(
                    `${dep}.enableDependent`,
                    this.onEnable
                );
            })
        }
    }

    onDisable = () => {
        if(!this.disabled){
            this.disabled_ = true;
            /*gameEventBus.emit(
                'effects.add',
                {effects: [this], amount: -this.multiplicity, ignoreDisabled: true}
            )*/
            this.subject.next(true)
        }
    }

    onEnable = () => {
        if(this.disabled){
            this.disabled_ = false;
            /*gameEventBus.emit(
                'effects.add',
                {effects: [this], amount: this.multiplicity, ignoreDisabled: true}
            )*/
            this.subject.next(false)
        }
    }

    get amount() : number { return this.amount_ }

    set amount(amount : number) { this.amount_ = amount } 

    get bonus() : number | undefined { return this.bonus_ }

    set bonus(bonus : number | undefined) { this.bonus_ = bonus } 

    get disabled() : boolean { return this.disabled_ }
}
