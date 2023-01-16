import { CraftableResourceBase } from "src/app/data-interfaces";

export class CraftableResource {
    public readonly name: string;
    public readonly toolTipText: string;
    public readonly dependancy: number;
    public readonly hasScienceDependancy: boolean;
    public readonly resourcesRequired: {name: string, price: number, isCraftable: boolean}[];

    amount_: number
    isVisible_: boolean

    constructor(info : CraftableResourceBase, amount : number, isVisible : boolean){
        this.name = info.name;
        this.toolTipText = info.toolTipText;
        this.dependancy = info.dependancy;
        this.hasScienceDependancy = info.hasScienceDependancy;
        this.resourcesRequired = info.resourcesRequired;
        
        this.amount_ = amount;
        this.isVisible_ = isVisible;
    }

    set amount(amount : number) { this.amount_ = amount }

    get amount() { return this.amount_ }

    get isVisible() { return this.isVisible_ }
}
