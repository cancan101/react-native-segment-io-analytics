/**
 * @providesModule RNSegmentIOAnalytics
 * @flow
 *
 * Created by Ricky Reusser <rsreusser@gmail.com>.
 * and Alex Rothberg
 * Copyright (c) 2016. All rights reserved.
 */
'use strict';

var NativeRNSegmentIOAnalytics = require('react-native').NativeModules.RNSegmentIOAnalytics;

/**
 * RNSegmentIOAnalytics is a React Native Android wrapper for the Segment.com Analytics SDK.
 */

var RNSegmentIOAnalytics = {
    /*
     * Setting up the Segment IO Analytics service
     *
     * @param configKey https://segment.com/docs/libraries/android/#configuration
     * @param flushAt https://segment.com/docs/libraries/android/#flushing
     * @param shouldUseLocationServices https://segment.com/docs/libraries/android/#location-services
     */
    setup: function (configKey, flushAt = 20, shouldUseLocationServices) {
        // NOTE: shouldUseLocationServices is permitted for iOS compatibility but is never
        // passed to native since it's not apparent that Android has that property available.

        NativeRNSegmentIOAnalytics.setup(configKey, flushAt);
    },

    /*
     * https://segment.com/docs/libraries/android/#identify
     */
    identifyUser: function (userId, traits) {
        NativeRNSegmentIOAnalytics.identifyUser(userId, traits);
    },

    /*
     * https://segment.com/docs/libraries/android/#track
     */
    track: function (trackText, properties) {
        NativeRNSegmentIOAnalytics.track(trackText, properties);
    },

    /*
     * https://segment.com/docs/libraries/android/#screen
     */
    screen: function (screenName, properties) {
        console.log("Segment LOGGING", screenName, properties);
        NativeRNSegmentIOAnalytics.screen(screenName, properties);
    },

    /*
     * https://segment.com/docs/libraries/android/#reset
     */
    reset: function () {
        NativeRNSegmentIOAnalytics.reset();
    },

    /*
     * https://segment.com/docs/libraries/android/#flushing
     */
    flush: function () {
        NativeRNSegmentIOAnalytics.flush();
    },

    /*
     * https://segment.com/docs/libraries/android/#logging
     */
    debug: function (isEnabled) {
        NativeRNSegmentIOAnalytics.debug(isEnabled);
    },

    /*
     * https://segment.com/docs/libraries/android/#opt-out
     */
    disable: function () {
        NativeRNSegmentIOAnalytics.disable();
    },

    /*
     * https://segment.com/docs/libraries/android/#opt-out
     */
    enable: function () {
        NativeRNSegmentIOAnalytics.enable();
    },
};

module.exports = RNSegmentIOAnalytics;
