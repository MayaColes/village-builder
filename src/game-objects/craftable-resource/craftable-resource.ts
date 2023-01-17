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
    usedResources_ : (Resource | CraftableResource)[] = [];

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
                this.usedResources_.push(resource);
            }
        })
    }

    craft(numberCrafted : number){
        if(this.checkCraftable(numberCrafted)){
            for(let required of this.resourcesRequired){
                let resource = this.usedResources_.find(obj => {
                    return obj.name === required.name;
                })
                if(resource){
                    resource.amount -= required.price;
                }
            }
            this.amount += numberCrafted;
        }
    }

    checkCraftable(numberCrafted : number){
        for(let required of this.resourcesRequired){
            let resource = this.usedResources_.find(obj => {
                return obj.name === required.name;
            })

            if(!resource || (resource && (resource.amount < (required.price * numberCrafted)))) {
                return false;
            }
        }

        return true
    }

    findUsedResource(resourceName : string) {
        return this.usedResources_.find(obj => obj.name === resourceName)
    }

    set amount(amount : number) { this.amount_ = amount }

    get amount() { return this.amount_ }

    get isVisible() { return this.isVisible_ }
}
