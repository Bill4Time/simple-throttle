/**
 * This is a simple class for limiting the calls to a function. I did a quick google and I wasn't able to find any
 * modules so I made this one.
 * @param throttleLimit {Number} Time in ms to throttle calls to the functions supplied to run
 * @constructor
 */
var FunctionThrottleManager = function (throttleLimit) {
    var timer;

    this.run = function (args, alternateThrottleLimit) {
        clearTimeout(timer);

        timer = setTimeout(function () {
           args.fn.apply(args.scope, args.args);
        }, alternateThrottleLimit || throttleLimit);
    };
};

if (module && module.exports) {
    module.exports = FunctionThrottleManager;
} else if (define && define.amd) {
    define(function () {
        return FunctionThrottleManager;
    });
}