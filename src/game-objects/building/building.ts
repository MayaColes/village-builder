import { BuildingBase, EffectBase } from "src/app/data-interfaces";
import { CraftableResource } from "../craftable-resource/craftable-resource";
import { Resource } from "../resource/resource";
import { gameEventBus } from "src/utils/game-event-bus";
import { Effect } from "../effect/effect";

export class Building {
    public readonly name: string;
    public readonly increaseRatio: number
    public readonly toolTipText: string
    public readonly secondaryToolTip: string
    public readonly isEnablable: boolean
    public readonly hasScienceDependancy: boolean
    public readonly dependancyName: string;
    public readonly resourcesRequired: {name: string, price: number, isCraftable: boolean}[]

    numberBuilt_ : number;
    numberEnabled_ : number;
    isVisible_ : boolean;
    usedResources_ : {resource: (Resource | CraftableResource), price : number}[]
    effects_ : Effect[]
    effectDependencies_ : string[]

    constructor(info : BuildingBase, numberBuilt : number, 
                numberEnabled : number, isVisible : boolean, 
                allResources : Resource[], allCraftableResources : CraftableResource[]){
        
        this.name = info.name;
        this.increaseRatio = info.increaseRatio;
        this.toolTipText = info.toolTipText;
        this.secondaryToolTip = info.secondaryToolTip;
        this.isEnablable = info.isEnablable;
        this.resourcesRequired = info.resourcesRequired;
        this.dependancyName = info.dependancyName;
        
        this.numberBuilt_ = numberBuilt;
        this.numberEnabled_ = numberEnabled;
        this.isVisible_ = isVisible;
        this.usedResources_ = [];

        this.initializeEffectDependencies(info.effects)
        this.initializeEffects(info.effects);

        gameEventBus.on(
            `${this.dependancyName}.researched`,
            this.onDependencyResearched
        );
        gameEventBus.emit(
            'effects.add',
            undefined, 
            {effects : this.effects_, amount: this.isEnablable ? numberEnabled : numberBuilt}
        )
        this.findUsedResources(allResources, allCraftableResources);
    }

    build(){
        if(this.checkBuildable(1)){
            for(let usedResource of this.usedResources_){
                usedResource.resource.changeAmount(-usedResource.price);
                usedResource.price *= this.increaseRatio;
            }
            this.numberBuilt_++;
            this.numberEnabled_++;
            gameEventBus.emit('effects.add', undefined, {effects : this.effects_, amount: 1})
        }
    }

    checkBuildable(numberBuilt : number){
        for(let usedResource of this.usedResources_){
            if(usedResource.resource.amount < (usedResource.price * numberBuilt)) {
                return false;
            }
        }

        return true
    }

    findUsedResource(name : string) {
        return this.usedResources_.find(obj => obj.resource.name === name)
    }

    changeEnabled(amount : number){
        if(this.numberEnabled_ + amount >= 0
            && this.numberEnabled_ + amount <= this.numberBuilt){

            this.numberEnabled_ += amount;
            gameEventBus.emit('effects.add', undefined, {effects : this.effects_, amount: amount})
        }
    }

    private findUsedResources(allResources : Resource[], allCraftableResources : CraftableResource[]){
        this.resourcesRequired.forEach((required) => {
            let resource = undefined;
            
            if(required.isCraftable){
                resource = allCraftableResources.find(obj => {
                    return obj.name === required.name;
                })
            }
            else{
                resource = allResources.find(obj => {
                    return obj.name === required.name;
                })
            }

            if(resource){
                let price = required.price;
                for(let i = 0; i < this.numberBuilt; i++) price = price * this.increaseRatio;

                this.usedResources_.push({resource, price});
            }
        })
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
            const newEffect = new Effect(effect, this.effectDependencies_)
            this.effects_.push(newEffect)
            
            newEffect.subject.subscribe({
                next: (disabled: boolean) => {
                    gameEventBus.emit(
                        'effects.add',
                        undefined,
                        {effects: [newEffect], amount: disabled ? -this.numberEnabled : this.numberEnabled, ignoreDisabled: true}
                    )
                }
            })
        })
    }

    private onDependencyResearched(){
        this.isVisible_ = true;
        gameEventBus.emit(`building.${this.name}.visible`)
    }

    addEffect(effect: EffectBase) {
        this.effects_.push(new Effect(effect, this.effectDependencies_))
    }

    getSaveValues() {
        return {numberBuilt: this.numberBuilt, numberEnabled: this.numberEnabled, isVisible: this.isVisible}
    }

    get effects() : Effect[] { return this.effects_ }

    get numberBuilt() : number { return this.numberBuilt_ }

    get numberEnabled() : number { return this.numberEnabled_ }

    get isVisible() : boolean { return this.isVisible_ }
}
