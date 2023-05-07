import { ResourceBase } from "src/app/data-interfaces";

export class Resource {
    public readonly name: string;
    public readonly defaultMaximum: number;
    public readonly color: string;

    currentProduction_: number;
    currentConsumption_: number;
    maximum_: number;
    amount_: number;
    isVisible_: boolean;
    
    constructor(info : ResourceBase, amount : number, isVisible : boolean){
        this.name = info.name;
        this.defaultMaximum = info.defaultMaximum;
        this.color = info.color;
        
        this.currentProduction_ = 0;
        this.currentConsumption_ = 0;
        this.maximum_ = this.defaultMaximum;
        this.amount_ = amount;
        this.isVisible_ = isVisible;
    }

    addCurrentProduction(tickPerSecond : number){
        this.changeAmount(this.totalProduction/ tickPerSecond)
    }

    changeAmount(amount : number){
        if(amount === 0) return;

        if((this.amount_ + amount) <= this.maximum && 
            (this.amount_ + amount) >= 0){
            
            this.amount_ += amount;
        }
        else if((this.amount_ + amount) < 0){
            this.amount_ = 0;
        }
        else{
            this.amount_ = this.maximum_;
        }

        if(amount > 0){
            this.isVisible_ = true;
        }
    }

    changeProduction(amount : number){
        if(this.currentProduction_ + amount < 0){
            this.currentProduction_ = 0;
        }
        else{
            this.currentProduction_ += amount;
        }
    }

    changeConsumption(amount : number){
        if(this.currentConsumption_ + amount > 0){
            this.currentConsumption_ = 0;
        }
        else{
            this.currentConsumption_ += amount;
        }
    }

    getSaveValues() {
        return {amount: this.amount, maximum: this.maximum, isVisible: this.isVisible}
    }

    set maximum(maximum : number) { this.maximum_ = maximum }

    get currentProduction() { return this.currentProduction_ }

    get currentConsumption() { return  this.currentProduction_ }

    get totalProduction() { return this.currentProduction_ + this.currentConsumption_ }

    get maximum() { return this.maximum_ }

    get isVisible() { return this.isVisible_ }

    get amount() { return this.amount_ }
}
