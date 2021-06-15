ember-hcl-sdk
==============================================================================

The `ember-clk-sdk` addon provides a simple way to integrate the Healthcare
Locator SDK in your `Ember.js` applications.

This project is part of the submission of the CareCards team for the COVID-19
Healthcare App Challenge. We wanted to prove how easy and good fit is the HCL
Javascript SDK for our project by creating this simple but useful plugin.

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
   search window. You can find more information about customization options in here: https://docs.healthcarelocator.com/index.htm#t=QStartGuide%2FCustomize_the_prebuilt_screens_of_the_SDKs.htm%23JavaScript

```
<!-- MyComponent.hbs -->
<HclUi @apiKey="..."
       @appName="..."
       @appURL="..."
       @screenName="..."
       @specialist="..."/>
```

Happy coding! :)

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
