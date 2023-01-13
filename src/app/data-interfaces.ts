export interface Building {
    name: string,
    increaseRatio: number,
    numberBuilt: number,
    toolTipText: string,
    secondaryToolTip: string,
    effects: Effect[],
    isEnablable: boolean,
    numberEnabled: number,
    hasScienceDependancy: boolean,
    isBuildable: boolean,
    dependancy: number,
    identifier: string,
    resourcesRequired: string[],
    price: number[],
    resourceCraftable: boolean[]
}

export interface Civilization {
    name: string,
    description: string
    imageFile: string,
    buysResource: number,
    buyAmount: number,
    sellResource: number,
    defaultSellAmount: number,
    sellAmount: number,
    standing: number,
    hostility: number,
    isVisible: boolean,
    scienceFavour: number,
    magicFavour: number,
    warFavour: number,
    populationFavour: number,
    happinessFavour: number,
    tradeTime: number,
    trades: number[],
    gifts: number[]
}

export interface Resource {
    name: string,
    amount: number,
    defaultMaximum: number,
    maximum: number,
    color: string,
    identifier: string,
    isVisible: boolean
}

export interface CraftableResource {
    name: string,
    identifier: string,
    amount: number,
    toolTipText: string,
    isCraftable: boolean,
    dependancy: number,
    hasScienceDependancy: boolean,
    resourcesRequired: string[],
    price: number[],
    resourceCraftable: boolean[]
}

export interface Job {
    name: string,
    toolTipText: string,
    identifier: string,
    effects: Effect[]
    numberWorking: number,
    isVisible: boolean
}

export interface Researchable {
    name: string,
    identifier: string,
    dependancyPos: number,
    toolTipText: string,
    resourcesRequired: string[],
    price: number[],
    resourceCraftable: boolean[],
    isVisible: boolean,
    dependency: Researchable | undefined,
    isResearched: boolean,
}

export interface Upgrade {
    name: string,
    identifier: string,
    dependancy: number,
    toolTipText: string,
    effects: Effect[],
    hasScienceDependancy: boolean,
    resourcesRequired: string[],
    price: number[],
    resourceCraftable: boolean[]
}

export interface MagicEffect {
    name: string,
    toolTipText: string,
    dependancy: number,
    isEnablable: boolean,
    isEnabled: boolean,
    isVisible: boolean
    effects: Effect[]
}

export interface Effect {
    typeOfEffect: string,
    effectAmount: number,
    effectAmountWithBonus: number,
    effectsWhatObjectType: string,
    effectsWhatObject: string,
    effectsWhatResource: string,
}
