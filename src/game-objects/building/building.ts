import { Subject } from "rxjs";
import { BuildingBase, Effect } from "src/app/data-interfaces";

export class Building {
    public readonly name: string;
    public readonly increaseRatio: number
    public readonly toolTipText: string
    public readonly secondaryToolTip: string
    public readonly effects: Effect[]
    public readonly isEnablable: boolean
    public readonly hasScienceDependancy: boolean
    public readonly dependancy: number
    public readonly resourcesRequired: {name: string, price: number, isCraftable: boolean}[]

    numberBuilt_ : number;
    numberEnabled_ : number;
    isVisible_ : boolean;
    subject_ : Subject<void>;

    constructor(info : BuildingBase, numberBuilt : number, numberEnabled : number, isVisible : boolean){
        this.name = info.name;
        this.increaseRatio = info.increaseRatio;
        this.toolTipText = info.toolTipText;
        this.secondaryToolTip = info.secondaryToolTip;
        this.effects = info.effects;
        this.isEnablable = info.isEnablable;
        this.resourcesRequired = info.resourcesRequired;
        
        this.numberBuilt_ = numberBuilt;
        this.numberEnabled_ = numberEnabled;
        this.isVisible_ = isVisible;
        this.subject_ = new Subject<void>();
    }

    buildBuilding(){
        this.numberBuilt_++; // TODO
        this.subject_.next();
    }

    get numberBuilt() : number { return this.numberBuilt_ }

    get numberEnabled() : number { return this.numberEnabled_ }

    get isVisible() : boolean { return this.isVisible_ }

    get subject() { return this.subject_ }

}
