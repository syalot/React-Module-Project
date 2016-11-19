import Reflux from 'reflux';
import SiteMenuAction from './SiteMenuAction';

let SiteMenuStore = Reflux.createStore({
  listenables: [SiteMenuAction],

  onReadMenu(){
    this.trigger('hello');
  }
});

export default SiteMenuStore;
