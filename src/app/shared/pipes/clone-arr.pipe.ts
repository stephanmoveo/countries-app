import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'cloneArr',
  pure: false
})
export class CloneArrPipe implements PipeTransform {

  historyArr = JSON.parse(localStorage.getItem("logs") as any) || []

  transform(items: any[], searchText: string): any[] {

    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      if (it.countryName.toLowerCase() === searchText) {
        if (this.historyArr === null || this.historyArr.includes(it) === false) {
          if (this.historyArr.length <= 4) { 
            this.historyArr.push(it)

          }
          else {
            this.historyArr.splice(0, 1)
          }
        }
        return localStorage.setItem('logs', JSON.stringify(this.historyArr))
      }
      return it.countryName.toLowerCase().includes(searchText);
    });
  }

}
