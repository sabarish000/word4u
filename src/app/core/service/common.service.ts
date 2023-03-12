import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getMatchedCount(actualWord:string, aWord: string): number {
    var count = 0;
    for (let i = 0; i < aWord.length; i++) {
      if (actualWord.indexOf(aWord.charAt(i)) > -1) {
        count++
      }
    }
    return count;
  }
}
