import { List } from './../../models/list.model';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FilterDonePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filterDone',
  pure: false, // this allows the pipe to listen changes
})
export class FilterDonePipe implements PipeTransform {
  /**
   * takes lists and filter the match with the param "done"
   */
  transform(lists: List[], done: boolean) {
    return lists.filter(list => list.done === done);
  }
}
