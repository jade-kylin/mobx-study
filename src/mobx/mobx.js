import { observable, action } from 'mobx'
class Mobx {
  @observable number;

  constructor() {
    this.number = 0
  }

  @action
  addNumber = () => {
    // this.number = number
    this.number++;
  }

}
const MyMobx = new Mobx();
export { MyMobx };
