import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';


export default class AppData {
  number = 0;

  increase = () => {
    this.number++;
  }

  decrease = () => {
    this.number--;
  }
}


decorate(AppData, {
  number: observable,
  increase: action,
  decrease: action
});
