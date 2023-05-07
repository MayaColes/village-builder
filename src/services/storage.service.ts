import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // Gets a value by name from local storage and initializes gameObject.
  // Returns whether that value has been found
  initObjFromLocalStorage(gameObject : any, findByValue : string){
    let gameObjectInfo = localStorage.getItem(findByValue);

    if(!gameObjectInfo){
      return false;
    }
    else{
      let gameObjectValues = JSON.parse(gameObjectInfo);

      for(const key of gameObjectValues){
        gameObject[key] = gameObjectValues[key]
      }
      return true;
    }
  }

  saveObjToLocalStorage(gameObject : any, findByValue : string){
    localStorage.setItem(findByValue, JSON.stringify(gameObject.getSaveValues()));
  }
}
