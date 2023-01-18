import { Subject } from "rxjs";
import { ResearchableBase } from "src/app/data-interfaces";
import { CraftableResource } from "../craftable-resource/craftable-resource";
import { Resource } from "../resource/resource";

export class Researchable {
    public readonly name: string;
    public readonly dependancyName : string;
    public readonly toolTipText: string;
    public readonly resourcesRequired: {name: string, price: number, isCraftable: boolean}[];

    public readonly researchedSubject : Subject<void>;

    isResearched_ : boolean;
    isVisible_ : boolean;
    usedResources_ : {resource : (Resource | CraftableResource), price : number}[] = [];

    constructor( info : ResearchableBase, isResearched : boolean, isVisible : boolean, 
                allResources : Resource[], allCraftableResources : CraftableResource[], ) {

        this.name = info.name;
        this.dependancyName = info.dependancyName;
        this.toolTipText = info.toolTipText;
        this.resourcesRequired = info.resourcesRequired;

        this.isResearched_ = isResearched;
        this.isVisible_ = isVisible;

        this.researchedSubject = new Subject<void>();
        this.initUsedResources(allResources, allCraftableResources)
    }

    research(){
        this.isResearched_ = true;
            this.isVisible_ = false;
            this.researchedSubject.next();
        if(this.checkResearchable() && !this.isResearched && this.isVisible){
            for(let used of this.usedResources_){
                used.resource.changeAmount(-used.price);
            }
            this.isResearched_ = true;
            this.isVisible_ = false;
            this.researchedSubject.next();
        }
    }

    checkResearchable(){
        for(let used of this.usedResources_){
            if(used.resource.amount < (used.price)) {
                return false;
            }
        }

        return true
    }

    initDependency( researchables : Researchable[] ){
        let research = researchables.find(obj => { return obj.name === this.dependancyName });
        
        if(research){
            research.researchedSubject.subscribe(({
                next: () => this.isVisible_ = true
            }))
        }
        else if(!this.isResearched){
            this.isVisible_ = true;
        }
    }

    findUsedResource(name : string) {
        return this.usedResources_.find(obj => obj.resource.name === name)
    }

    private initUsedResources(allResources : Resource[], allCraftableResources : CraftableResource[]){
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

    get isResearched() { return this.isResearched_ }

    get isVisible() { return this.isVisible_ }
}
