import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatService {
  round(num : number){
    return Math.round(num * 100) / 100;
  }

  timeUntil(amountToProduce : number, producedPerSecond : number){
    if(amountToProduce <= 0 || producedPerSecond <= 0){
      return "";
    }
    
    let seconds = Math.ceil(amountToProduce / producedPerSecond);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    let formattedString = '';

    formattedString += days > 0 ? days + 'd ' : '';
    formattedString += hours % 24 > 0 ? hours % 24 + 'h ' : '';
    formattedString += minutes % 60 > 0 ? minutes % 60 + 'm ' : '';
    formattedString += seconds % 60  > 0 ? seconds % 60 + 's' : '';

    return formattedString;
  }
}
