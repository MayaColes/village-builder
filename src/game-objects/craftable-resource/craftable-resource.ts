import { CraftableResourceBase } from "src/app/data-interfaces";
import { Resource } from "../resource/resource";

export class CraftableResource {
    public readonly name: string;
    public readonly toolTipText: string;
    public readonly dependancy: number;
    public readonly hasScienceDependancy: boolean;
    public readonly resourcesRequired: {name: string, price: number, isCraftable: boolean}[];

    amount_: number
    isVisible_: boolean
    usedResources_ : {resource : (Resource | CraftableResource), price : number}[] = [];

    constructor(info : CraftableResourceBase, amount : number, isVisible : boolean){
        this.name = info.name;
        this.toolTipText = info.toolTipText;
        this.dependancy = info.dependancy;
        this.hasScienceDependancy = info.hasScienceDependancy;
        this.resourcesRequired = info.resourcesRequired;
        
        this.amount_ = amount;
        this.isVisible_ = isVisible;
    }

    public initializeUsedResources(allResources : Resource[], allCraftableResources : CraftableResource[]){
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

    craft(numberCrafted : number){
        if(this.checkCraftable(numberCrafted)){
            for(let used of this.usedResources_){
                used.resource.changeAmount(-used.price);
            }
            this.amount_ += numberCrafted;
        }
    }

    checkCraftable(numberCrafted : number){
        for(let used of this.usedResources_){
            if(used.resource.amount < (used.price * numberCrafted)) {
                return false;
            }
        }

        return true
    }

    findUsedResource(resourceName : string) {
        return this.usedResources_.find(obj => obj.resource.name === resourceName)
    }

    changeAmount(amount : number){
        if(this.amount + amount > 0){
            this.amount_ += amount;
        }
        else{
            this.amount_ = 0;
        }
        this.isVisible_ = true;
    }

    get amount() { return this.amount_ }

    get isVisible() { return this.isVisible_ }
}
