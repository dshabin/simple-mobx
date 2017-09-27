import { extendObservable, action } from "mobx";
import storedObservable from 'mobx-stored'



const observableCount = storedObservable('count', {'counter' : 1 }, 500);
export default extendObservable(this, {
  count: observableCount.counter,
  increment: action(() => {
    this.count += 1;
    observableCount.counter += 1;
  })
});
