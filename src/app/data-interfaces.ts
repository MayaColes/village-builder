export interface BuildingBase {
    name: string,
    increaseRatio: number,
    toolTipText: string,
    secondaryToolTip: string,
    effects: EffectBase[],
    isEnablable: boolean,
    dependancyName: string,
    resourcesRequired: {name: string, price: number, isCraftable: boolean}[],
}

export interface Civilization {
    name: string,
    description: string
    imageFile: string,
    buysResource: number,
    buyAmount: number,
    sellResource: number,
    defaultSellAmount: number,
    scienceFavour: number,
    magicFavour: number,
    warFavour: number,
    populationFavour: number,
    happinessFavour: number,
    tradeTime: number,
    standing?: number,
    hostility?: number,
    sellAmount?: number,
    isVisible?: boolean,
    trades?: number[],
    gifts?: number[]
}

export interface ResourceBase {
    name: string,
    defaultMaximum: number,
    color: string,
}

export interface CraftableResourceBase {
    name: string,
    toolTipText: string,
    dependancy: number,
    hasScienceDependancy: boolean,
    resourcesRequired: {name: string, price: number, isCraftable: boolean}[],
}

export interface JobBase {
    name: string,
    toolTipText: string,
    effects: EffectBase[]
}

export interface ResearchableBase {
    name: string,
    dependancyName: string,
    toolTipText: string,
    resourcesRequired: {name: string, price: number, isCraftable: boolean}[],
}

export interface Upgrade {
    name: string,
    dependancy: number,
    toolTipText: string,
    effects: EffectBase[],
    hasScienceDependancy: boolean,
    resourcesRequired: {name: string, price: number, isCraftable: boolean}[],
    isVisible?: boolean,
    isResearched?: boolean
}

export interface Spell {
    name: string,
    toolTipText: string,
    dependancy: number,
    isEnablable: boolean,
    effects: EffectBase[],
    isEnabled?: boolean,
    isVisible?: boolean
}

export interface EffectBase {
    type: string,
    amount: number,
    objectType: string,
    object: string,
    resource?: string,
    bonus?: number,
}
