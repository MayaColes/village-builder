export interface Building {
    name: string,
    increaseRatio: number,
    toolTipText: string,
    secondaryToolTip: string,
    effects: Effect[],
    isEnablable: boolean,
    hasScienceDependancy: boolean,
    dependancy: number,
    identifier: string,
    resourcesRequired: string[],
    price: number[],
    resourceCraftable: boolean[],
    numberBuilt?: number,
    numberEnabled?: number,
    isVisible?: boolean,
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

export interface Resource {
    name: string,
    defaultMaximum: number,
    color: string,
    identifier: string,
    maximum?: number,
    amount?: number,
    isVisible?: boolean
}

export interface CraftableResource {
    name: string,
    identifier: string,
    toolTipText: string,
    dependancy: number,
    hasScienceDependancy: boolean,
    resourcesRequired: string[],
    price: number[],
    resourceCraftable: boolean[],
    amount?: number,
    isVisible?: boolean,
}

export interface Job {
    name: string,
    toolTipText: string,
    identifier: string,
    effects: Effect[]
    numberWorking?: number,
    isVisible?: boolean
}

export interface Researchable {
    name: string,
    identifier: string,
    dependancyPos: number,
    toolTipText: string,
    resourcesRequired: string[],
    price: number[],
    resourceCraftable: boolean[],
    dependency?: Researchable | undefined,
    isResearched?: boolean,
    isVisible?: boolean,
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
    resourceCraftable: boolean[],
    isVisible?: boolean,
    isResearched?: boolean
}

export interface Spell {
    name: string,
    toolTipText: string,
    dependancy: number,
    isEnablable: boolean,
    effects: Effect[],
    isEnabled?: boolean,
    isVisible?: boolean
}

export interface Effect {
    typeOfEffect: string,
    effectAmount: number,
    effectsWhatObjectType: string,
    effectsWhatObject: string,
    effectsWhatResource: string,
    effectAmountWithBonus?: number,
}
