import { ResourceBase } from "src/app/data-interfaces";

export class Resource {
    public readonly name: string;
    public readonly defaultMaximum: number;
    public readonly color: string;

    currentProduction_: number;
    maximum_: number;
    amount_: number;
    isVisible_: boolean;
    
    constructor(info : ResourceBase, amount : number, isVisible : boolean){
        this.name = info.name;
        this.defaultMaximum = info.defaultMaximum;
        this.color = info.color;
        
        this.currentProduction_ = 0;
        this.maximum_ = this.defaultMaximum;
        this.amount_ = amount;
        this.isVisible_ = isVisible;
    }

    addCurrentProduction(){
        if((this.amount_ + this.currentProduction_) <= this.maximum && 
            (this.amount_ + this.currentProduction_) >= 0){
            
            this.amount_ += this.currentProduction_;
        }
        else if((this.amount_ + this.currentProduction_) < 0){
            this.amount_ = 0;
        }
        else{
            this.amount_ = this.maximum_;
        }
    }

    set currentProduction(production : number) { this.currentProduction_ = production }

    get currentProduction() { return this.currentProduction_ }

    get maximum() { return this.maximum_ }

    get isVisible() { return this.isVisible_ }

    get amount() { return this.amount_ }
}
