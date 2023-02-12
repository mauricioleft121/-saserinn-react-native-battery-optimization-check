"use strict";
exports.__esModule = true;
exports.OpenOptimizationSettings = exports.RequestDisableOptimization = exports.BatteryOptEnabled = void 0;
var react_native_1 = require("react-native");
var BatteryOptimizationCheck = react_native_1.Platform.OS === 'android' ? react_native_1.NativeModules.BatteryOptimizationCheck : null;
function BatteryOptEnabled() {
    if (react_native_1.Platform.OS === 'android') {
        //* Android only returns function
        return BatteryOptimizationCheck.isBatteryOptEnabled();
    }
    return Promise.resolve(false);
}
exports.BatteryOptEnabled = BatteryOptEnabled;
function RequestDisableOptimization() {
    if (react_native_1.Platform.OS === 'android') {
        //* Android only returns function
        BatteryOptimizationCheck.openRequestDisableOptimization();
    }
    return;
}
exports.RequestDisableOptimization = RequestDisableOptimization;
function OpenOptimizationSettings() {
    if (react_native_1.Platform.OS === 'android') {
        //* Android only returns function
        BatteryOptimizationCheck.openOptimizationSettings();
    }
    return;
}
exports.OpenOptimizationSettings = OpenOptimizationSettings;
