import Component from '@glimmer/component';
import { action } from '@ember/object';
import { arg } from 'ember-arg-types';

/**
 * HCL Javascript SDK initializer class. Use this component to
 * render the SDK in your Ember application. Use the defined
 * arguments to customize how your application is initialized.
 */
export default class HclUiComponent extends Component {
  // Component Input Properties
  // SDK Configuration -> https://docs.healthcarelocator.com/index.htm#t=QStartGuide%2FCustomize_the_prebuilt_screens_of_the_SDKs.htm
  // --------------------------
  @arg locale = 'en';
  // Change to Home to not jump directly into doctor search window
  @arg screenName = 'searchNearMe';
  @arg specialist;
  @arg appName;
  @arg appUrl;
  @arg apiKey;
  @arg showSuggestModification = true;

  @action
  loadHclSdk(sdkElement) {
    sdkElement.init({
      appName: this.appName,
      appURL: this.appUrl,
      apiKey: this.apiKey,
      locale: this.locale,
      showSuggestModification: this.showSuggestModification,
      entry: {
        screenName: this.screenName,
        specialtyCode: this.specialist,
      },
    });
  }
}
