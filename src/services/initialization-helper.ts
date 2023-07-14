import { Building } from "src/game-objects/building/building";
import { Job } from "src/game-objects/job/job";
import { Resource } from "src/game-objects/resource/resource";
import { EffectBase, Upgrade } from "../app/data-interfaces";

export class InitializationHelper {
    // Adds production and production bonus effects from researched upgrades to jobs and buildings
    static updateUpgradeEffects(upgrade : Upgrade, buildings : Building[], jobs : Job[]){
        if(upgrade.isResearched){
            for(let effect of upgrade.effects){
                let gameObjectArray : (Job | Building)[] = [];
                if(effect.objectType === 'job'){
                    gameObjectArray = jobs;
                }
                else if(effect.objectType === 'building'){
                    gameObjectArray = buildings
                }

                let affectedGameObject = gameObjectArray.find(obj => {
                    return obj.name === effect.object;
                })

                if(affectedGameObject){
                    this.addOrUpdateEffect(affectedGameObject, effect);
                }
            }
        }
    }

    // Adds bonuses to buildings and jobs from buildings
    static updateEffectBonuses(buildings : Building[], jobs : Job[]){
        for(let building of buildings){
            for(let effect of building.effects){
                if(effect.type === 'bonus'){
                    let gameObjectArray : (Job | Building)[] = [];
                    if(effect.objectType == 'job'){
                        gameObjectArray = jobs;
                    }
                    else if(effect.objectType == 'building'){
                        gameObjectArray = buildings;
                    }
                    let affectedGameObject = gameObjectArray.find(obj => {
                        return obj.name === effect.object;
                    })
                    if(affectedGameObject){
                        this.addOrUpdateEffect(affectedGameObject, effect);
                    }
                }
            }
        }
    }

    static calculateResourceProduction(resources : Resource[], buildings : Building[], jobs : Job[]){
        jobs.forEach((job) => {
            job.effects.forEach((effect) => {
                if(effect.type === 'production'){
                    let affectedResource = resources.find((obj) => {
                        return obj.name === effect.object;
                    })
                    if(affectedResource){

                        let jobProduction = effect.amount;
                        if(effect.bonus){
                            jobProduction += effect.amount * effect.bonus;
                        }
                        jobProduction *= job.numberWorking;

                        if(jobProduction > 0){
                            affectedResource.changeProduction(jobProduction);
                        }
                        else{
                            affectedResource.changeConsumption(jobProduction);
                        }
                    }
                }
            })
        })
    }

    // updates an effect in affectedGameObject using updatingEffect, or adds a new effect is there is no matching one
    private static addOrUpdateEffect(affectedGameObject : any, updatingEffect : EffectBase){
        let affectedGameObjectEffect = affectedGameObject.effects.find((eff : EffectBase) => {
            return eff.object === updatingEffect.resource;
        })

        if(!affectedGameObjectEffect){
            affectedGameObject.effects.push({
                type: "production",
                amount: updatingEffect.type === 'bonus' ? 0 : updatingEffect.amount,
                objectType: 'resource',
                object: updatingEffect.resource || '',
                bonus: updatingEffect.type === 'bonus' ? updatingEffect.amount : 0
            })
        }
        else{
            if(updatingEffect.type === 'production'){
                affectedGameObjectEffect.amount += updatingEffect.amount;
            }
            else if(updatingEffect.type === 'bonus'){
                if(!affectedGameObjectEffect.bonus){
                    affectedGameObjectEffect['bonus'] = 0;
                }
                affectedGameObjectEffect.amount += updatingEffect.amount;
            }
        }
    }
}