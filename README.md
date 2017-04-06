# EasyEvalytics
A quick way to add google analytics event tracking to web pages.

This package provides an alternate way to create event tracking events by embedding event instructions in page markup instead of in a javascript tracking class. By defining data attributes on tags, tracking events will be added on page load.

Usage
-----
Download the package, unzip it and add to your vendor library. Include the script tag after your jquery script tag.

  <script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
  <script src='easy-evalytics.js'></script>

Create your markup and add data attributes to any elements that need to be tracked.

  <a href='#' data-event='click' data-category='easyEvalyticsClick' data-action='click' data-label='Test Click Event' data-value='1'>Click Me</a>

There are five attributes available:

* data-event
* data-category
* data-action
* data-label
* data-value

Data-event defines the javascript event which should trigger the event tracking beacon which will be sent to Google Analytics. For example:

* click
* change
* submit

For more on the other data attributes, please see the google analytics event tracking documentation: https://developers.google.com/analytics/devguides/collection/analyticsjs/events

To test your events are firing correctly, use the realtime events panel in google analytics or use google analytics debugger for chrome: https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna?hl=en
 
