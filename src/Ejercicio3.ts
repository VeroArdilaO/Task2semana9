export class Kata {
    static getCount(str: string) {
    
    return str.replace(/[^aeiou]/gi, '').length;
    }
  }
  
  console.log(Kata.getCount("abracadabra"))