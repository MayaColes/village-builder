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
    usedResources_ : (Resource | CraftableResource)[] = [];

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
        if(this.checkResearchable() && !this.isResearched && this.isVisible){
            for(let required of this.resourcesRequired){
                let resource = this.usedResources_.find(obj => {
                    return obj.name === required.name;
                })
                if(resource){
                    resource.amount -= required.price;
                }
            }
            this.researchedSubject.next();
        }
    }

    checkResearchable(){
        for(let required of this.resourcesRequired){
            let resource = this.usedResources_.find(obj => {
                return obj.name === required.name;
            })

            if(!resource || (resource && (resource.amount < (required.price)))) {
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
                this.usedResources_.push(resource);
            }
        })
    }

    get isResearched() { return this.isResearched_ }

    get isVisible() { return this.isVisible_ }
}
