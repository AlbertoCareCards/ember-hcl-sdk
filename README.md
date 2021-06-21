ember-hcl-sdk
==============================================================================

The `ember-clk-sdk` addon provides a simple way to integrate the Healthcare
Locator SDK in your `Ember.js` applications.

This project is part of the submission of the CareCards team for the COVID-19
Healthcare App Challenge. We wanted to prove how easy and good fit is the HCL
Javascript SDK for our project by creating this simple but useful Ember addon
for all JS developers, and sharing it with the community.

For more information contact: alberto@care-cards.io

https://healthcareappchallenge.devpost.com

Installation
------------------------------------------------------------------------------
1. Install ember addon in your application

```
npm install --save ember-hcl-sdk
```
2. Load HCL Javascript SDK. At the bottom of your `app/index.html` file add:

```
<!-- HEALTH NAVIGATOR INTEGRATION -->
<script src=https://static.healthcarelocator.com/v1/hcl-sdk-web-ui/hcl-sdk.js></script>
<script src=https://static.healthcarelocator.com/v1/hcl-sdk-api/hcl-sdk-api.js></script>
```

You could also install the official NPM packages from the official HealthCareLocator Web SDK to load the packages offline. More information here:
https://github.com/hcl-sdk/HealthCareLocatorWebSDK

Usage
------------------------------------------------------------------------------

3. Render the `HclUi` component passing the correct authentication parameters. You can also pass specific options to customize the
   search window. You can find more information about customization options in here:
   https://docs.healthcarelocator.com/index.htm#t=QStartGuide%2FCustomize_the_prebuilt_screens_of_the_SDKs.htm%23JavaScript

```
<!-- MyComponent.hbs -->
<HclUi @apiKey="..."
       @appName="..."
       @appURL="..."
       @screenName="..."
       @specialist="..."
       @onSdkLoaded="..."/>
```

4. The `hcl-sdk` web component is loaded with the specific search parameters you passed to the component. This component
   might be rendered but not visible. This will require to make some CSS adjustments via Javascript. For that you can
   use the `onSdkLoaded` argument. This argument expects an `Ember action` to be passed. On
   successful sdk load event the component calls the `onSdkLoaded` passed method with the `HTMLElement` corresponding to
   the `hcl-sdk` web component as argument. You can use this reference to adjust the display of the component.
   
```
<!-- MyComponent.js -->
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MyComponent extends Component {
  // Component Input Properties
  // --------------------------
  
  // Style hcl-sdk wrapper with specific height and width
  @action
  styleHclSdk(sdkWrapper) {
    sdkWrapper.style.height = '400px'
    sdkWrapper.style.width = '100%'
  }
}

<!-- MyComponent.hbs -->
<HclUi @apiKey="..."
       @appName="..."
       @appURL="..."
       @screenName="..."
       @specialist="..."
       @onSdkLoaded={{styleHclSdk}}/>
```

Happy coding! :)

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
