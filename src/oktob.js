(function (global) {

  var defaults = {
    config: {
      mode: 'latin-ar',
      kbLayout: 'qwerty',
      convertDigits: true,
    },
  }
  /**
   * Instantiate Oktob library
   * @param {Object} config configuration object 
   * @param {String} config.mode the converstion mode ['latin-ar', 'ar-latin' ] default to 'latin-ar'
   * @param {String} config.kbLayout Keyboard layout type
   * @param {Boolean} config.convertDigits it should convert numeral systems (ex: ۵ to 5, and vice-versa)
   */
  var Oktob = function (config) {
    return new Oktob.init(config);
  }

  Oktob.prototype = {
    /**
     * Replace English charecters (from English to Arabic)
     * @author Ahmed Sammour (https://github.com/ASammour/DidYouMeanJS)
     * @param {String} txt 
     */
    replaceEnCharsQWERTY: function (txt) {
      var text = txt || '';
      text = text.replace(/q/g, 'ض');
      text = text.replace(/Q/g, 'َ');
      text = text.replace(/w/g, 'ص');
      text = text.replace(/W/g, 'ً');
      text = text.replace(/e/g, 'ث');
      text = text.replace(/E/g, 'ُ');
      text = text.replace(/r/g, "ق");
      text = text.replace(/R/g, "ٌ");
      text = text.replace(/t/g, "ف");
      text = text.replace(/T/g, "لإ");
      text = text.replace(/y/g, "غ");
      text = text.replace(/Y/g, "إ");
      text = text.replace(/u/g, "ع");
      text = text.replace(/U/g, "‘");
      text = text.replace(/i/g, "ه");
      text = text.replace(/I/g, "÷");
      text = text.replace(/o/g, "خ");
      text = text.replace(/O/g, "×");
      text = text.replace(/p/g, "ح");
      text = text.replace(/P/g, "؛");
      text = text.replace(/\[/g, "ج");
      text = text.replace(/{/g, "<");
      text = text.replace(/]/g, "د");
      text = text.replace(/\}/g, ">");

      text = text.replace(/a/g, "ش");
      text = text.replace(/A/g, "ِ");
      text = text.replace(/s/g, "س");
      text = text.replace(/S/g, "ٍ");
      text = text.replace(/d/g, "ي");
      text = text.replace(/D/g, "]");
      text = text.replace(/f/g, "ب");
      text = text.replace(/F/g, "[");
      text = text.replace(/g/g, "ل");
      text = text.replace(/G/g, "لأ");
      text = text.replace(/h/g, "ا");
      text = text.replace(/H/g, "أ");
      text = text.replace(/j/g, "ت");
      text = text.replace(/J/g, "ـ");
      text = text.replace(/k/g, "ن");
      text = text.replace(/K/g, "،");
      text = text.replace(/l/g, "م");
      text = text.replace(/L/g, "/");
      text = text.replace(/;/g, "ك");
      text = text.replace(/:/g, ":");
      text = text.replace(/'/g, "ط");
      text = text.replace(/"/g, "\"");

      text = text.replace(/`/g, "ذ");
      text = text.replace(/~/g, "ّ");

      text = text.replace(/z/g, "ئ");
      text = text.replace(/Z/g, "~");
      text = text.replace(/x/g, "ء");
      text = text.replace(/X/g, "ْ");
      text = text.replace(/c/g, "ؤ");
      text = text.replace(/C/g, "}");
      text = text.replace(/v/g, "ر");
      text = text.replace(/V/g, "{");
      text = text.replace(/b/g, "لا");
      text = text.replace(/B/g, "لآ");
      text = text.replace(/n/g, "ى");
      text = text.replace(/N/g, "آ");
      text = text.replace(/m/g, "ة");
      text = text.replace(/M/g, "’");
      text = text.replace(/\,/g, "و");
      text = text.replace(/\</g, "\,");
      text = text.replace(/\./g, "ز");
      text = text.replace(/\>/g, "\.");
      text = text.replace(/\//gi, "ظ");
      text = text.replace(/\?/gi, "؟");
      return text;
    },
    /**
     * Replace Arabic charecters (from Arabic to English)
     * @author Ahmed Sammour (https://github.com/ASammour/DidYouMeanJS)
     * @param {String} txt 
     */
    replaceArCharsQWERTY: function (txt) {
      var text = txt || '';
      text = text.replace(/ذ/gi, "`");
      text = text.replace(/ّ/gi, '~');

      text = text.replace(/د/gi, ']');
      text = text.replace(/>/gi, '}');
      text = text.replace(/ج/gi, '[');
      text = text.replace(/</gi, '{');
      text = text.replace(/ح/gi, 'p');
      text = text.replace(/؛/gi, 'P');
      text = text.replace(/خ/gi, 'o');
      text = text.replace(/×/gi, 'O');
      text = text.replace(/ه/gi, 'i');
      text = text.replace(/÷/gi, 'I');
      text = text.replace(/ع/gi, 'u');
      text = text.replace(/‘/gi, 'U');
      text = text.replace(/غ/gi, 'y');
      text = text.replace(/إ/gi, 'Y');
      text = text.replace(/ف/gi, 't');
      text = text.replace(/ق/gi, 'r');
      text = text.replace(/ٌ/gi, 'R');
      text = text.replace(/ث/gi, 'e');
      text = text.replace(/ُ/gi, 'E');
      text = text.replace(/ص/gi, 'w');
      text = text.replace(/ً/gi, 'W');
      text = text.replace(/ض/gi, 'q');
      text = text.replace(/َ/gi, 'Q');

      text = text.replace(/ط/gi, '\'');
      text = text.replace(/\""/gi, '\"');
      text = text.replace(/ك/gi, ';');
      text = text.replace(/:/gi, ':');
      text = text.replace(/م/gi, 'l');
      text = text.replace(/\//gi, 'L');
      text = text.replace(/ن/gi, 'k');
      text = text.replace(/،/gi, 'K');
      text = text.replace(/ت/gi, 'j');
      text = text.replace(/ـ/gi, 'J');
      text = text.replace(/ا/gi, 'h');
      text = text.replace(/أ/gi, 'H');
      text = text.replace(/ل/gi, 'g');
      text = text.replace(/ب/gi, 'f');
      text = text.replace(/\[/gi, 'F');
      text = text.replace(/ي/gi, 'd');
      text = text.replace(/]/gi, 'D');
      text = text.replace(/س/gi, 's');
      text = text.replace(/ٍ/gi, 'S');
      text = text.replace(/ش/gi, 'a');
      text = text.replace(/ِ/gi, 'A');

      text = text.replace(/ظ/gi, '؟');
      text = text.replace(/؟/gi, '?');
      text = text.replace(/ز/gi, '.');
      text = text.replace(/\./gi, '>');
      text = text.replace(/و/gi, ',');
      text = text.replace(/\,/gi, '<');
      text = text.replace(/ة/gi, 'm');
      text = text.replace(/\’/gi, 'M');
      text = text.replace(/ى/gi, 'n');
      text = text.replace(/آ/gi, 'N');
      text = text.replace(/ر/gi, 'v');
      text = text.replace(/\{/gi, 'V');
      text = text.replace(/ؤ/gi, 'c');
      text = text.replace(/}/gi, 'C');
      text = text.replace(/ء/gi, 'x');
      text = text.replace(/ْ/gi, 'X');
      text = text.replace(/ئ/gi, 'z');
      text = text.replace(/~/gi, 'Z');

      if (this.convertDigits) {
        text = text.replace(/٠/gi, '0');
        text = text.replace(/١/gi, '1');
        text = text.replace(/٢/gi, '2');
        text = text.replace(/٣/gi, '3');
        text = text.replace(/٤/gi, '4');
        text = text.replace(/٥/gi, '5');
        text = text.replace(/٦/gi, '6');
        text = text.replace(/٧/gi, '7');
        text = text.replace(/٨/gi, '8');
        text = text.replace(/٩/gi, '9');
      }

      return text;
    }
  };

  Oktob.init = function (config) {
    var self = this;
    var con = config || defaults.config
    self.mode = con.mode || defaults.config.mode;
    self.kbLayout = con.kbLayout || defaults.config.kbLayout;
    self.convertDigits = con.convertDigits || defaults.config.convertDigits;
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
    getDefaults: defaults,
  }
  /* end-test-block */

})(this);
