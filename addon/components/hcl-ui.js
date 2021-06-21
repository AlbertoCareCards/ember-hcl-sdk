import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class HclUiComponent extends Component {
  // Component Input Properties
  // --------------------------
  apiKey = ''
  appURL = ''
  appName = ''
  screenName = 'searchNearMe'
  specialist = 'GP'
  onSdkLoaded = null

  @action
  loadHclSdk(sdkElement) {
    const component = this
    sdkElement.init({
      apiKey: this.args.apiKey,
      appName: this.args.appName,
      appURL: this.args.appURL,
      entry: {
        screenName: this.args.screenName,
        specialtyCode: this.args.specialist
      }
    }).then((results) => {
      if(component.args.onSdkLoaded) component.args.onSdkLoaded(sdkElement)
    })
  }
}
