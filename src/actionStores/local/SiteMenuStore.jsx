import Reflux from 'reflux';
import SiteMenuAction from './SiteMenuAction';

let SiteMenuStore = Reflux.createStore({
  listenables: [SiteMenuAction],

  init() {
    this.state = {
      
    }
  },

  onReadMenu(){
    this.trigger(this.state.menu);
  }
});

export default SiteMenuStore;
