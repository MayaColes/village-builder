import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatService {
  round(num : number){
    return Math.round(num * 100) / 100;
  }
}
