(function (global) {

  /**
   * Instantiate Oktob library
   * @param {Object} config configuration object 
   * @param {String} config.mode the converstion mode ['latin-ar', 'ar-latin' ] default to 'latin-ar'
   * @param {String} config.kbLayout Keyboard layout type
   * @param {Boolean} config.convertDigits it should convert numeral systems (ex: ۵ to 5, and vice-versa)
   * @param {Boolean} config.excludeTashkeel Ignore التشكيل in words
   */
  var Oktob = function (config) {
    return new Oktob.init(config);
  }

  // Not implemented, for the moment
  // Oktob.prototype = {
  //   sayHello: function(){
  //       return "Hello World!";
  //   }
  // };

  Oktob.init = function (config) {
    var self = this;
    // TODO
  };

  Oktob.init.prototype = Oktob.prototype;

  // Check if it is CommonJS a environments (example: Node)
  if (typeof module === 'object' && module.exports) {
    module.exports = Oktob;
  } else {
    // Export as browser globals (global is window)
    global.Oktob = Oktob;
  }

  /* start-test-block */
  Oktob._api = {
    isValidEncryptionFunction: isValidEncryptionFunction,
    isMobile: isMobile,
  }
  /* end-test-block */

})(this);
