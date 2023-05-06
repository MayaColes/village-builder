import { Subject } from "rxjs";
import { BuildingBase, Effect } from "src/app/data-interfaces";
import { CraftableResource } from "../craftable-resource/craftable-resource";
import { Researchable } from "../researchable/researchable";
import { Resource } from "../resource/resource";

export class Building {
    public readonly name: string;
    public readonly increaseRatio: number
    public readonly toolTipText: string
    public readonly secondaryToolTip: string
    public readonly effects: Effect[]
    public readonly isEnablable: boolean
    public readonly hasScienceDependancy: boolean
    public readonly dependancyName: string;
    public readonly resourcesRequired: {name: string, price: number, isCraftable: boolean}[]

    numberBuilt_ : number;
    numberEnabled_ : number;
    isVisible_ : boolean;
    usedResources_ : {resource: (Resource | CraftableResource), price : number}[]

    public readonly subject : Subject<{effects: Effect[], amount: number}>;
    public readonly isVisibleSubject : Subject<void>;

    constructor(info : BuildingBase, numberBuilt : number, 
                numberEnabled : number, isVisible : boolean, 
                allResources : Resource[], allCraftableResources : CraftableResource[],
                allSciences: Researchable[] ){
        
        this.name = info.name;
        this.increaseRatio = info.increaseRatio;
        this.toolTipText = info.toolTipText;
        this.secondaryToolTip = info.secondaryToolTip;
        this.effects = info.effects;
        this.isEnablable = info.isEnablable;
        this.resourcesRequired = info.resourcesRequired;
        this.dependancyName = info.dependancyName;
        
        this.numberBuilt_ = numberBuilt;
        this.numberEnabled_ = numberEnabled;
        this.isVisible_ = isVisible;

        this.subject = new Subject<{effects: Effect[], amount: number}>();
        this.isVisibleSubject = new Subject<void>();

        this.usedResources_ = [];
        this.findUsedResources(allResources, allCraftableResources);
        this.observeDependency(allSciences)
    }

    build(){
        if(this.checkBuildable(1)){
            for(let usedResource of this.usedResources_){
                usedResource.resource.changeAmount(-usedResource.price);
                usedResource.price *= this.increaseRatio;
            }
            this.numberBuilt_++;
            this.numberEnabled_++;
            this.subject.next({effects : this.effects, amount: 1});
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
            this.subject.next({effects : this.effects, amount: amount});
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
                this.usedResources_.push({resource: resource, price: required.price});
            }
        })
    }

    private observeDependency(allSciences : Researchable[]){
        let science = allSciences.find(obj => obj.name === this.dependancyName)

        if(science && this.dependancyName !== ''){
            science.researchedSubject.subscribe(({
                next: () => {
                    this.isVisible_ = true;
                    this.isVisibleSubject.next();
                }
            }))
        }
        else{
            this.isVisible_ = true;
        }
    }

    get numberBuilt() : number { return this.numberBuilt_ }

    get numberEnabled() : number { return this.numberEnabled_ }

    get isVisible() : boolean { return this.isVisible_ }
}
