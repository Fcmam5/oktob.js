(function (global) {

  var defaults = {
    config: {
      mode: 'latin-ar',
      kbLayout: 'qwerty',
      convertDigits: true,
    },
    supportedKeyboardLayouts: ['qwerty', 'azerty']
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

    // QWERTY Keyboards
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
    },
    /**
     * Replace AZERTY
     */
    replaceEnCharsAZERTY: function (txt) {
      var text = txt || '';
      text = text.replace(/a/g, 'ض');
      text = text.replace(/A/g, 'َ');
      text = text.replace(/z/g, 'ص');
      text = text.replace(/Z/g, 'ً');
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
      text = text.replace(/\^/g, "ج");
      text = text.replace(/\$/g, "د");
      text = text.replace(/q/g, "ش");
      text = text.replace(/Q/g, "ِ");
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
      text = text.replace(/m/g, "ك");
      text = text.replace(/M/g, ":");
      text = text.replace(/ù/g, "ط");
      text = text.replace(/\\/g, "*");

      text = text.replace(/w/g, "ئ");
      text = text.replace(/W/g, "~");
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
      text = text.replace(/,/g, "ة");
      text = text.replace(/;/g, "و");
      text = text.replace(/\?/g, "'");
      text = text.replace(/./g, ",");
      text = text.replace(/:/g, "ز");
      text = text.replace(/\//g, ".");
      text = text.replace(/!/g, "ظ");
      text = text.replace(/§/g, "؟");
      return text;
    },
    replaceArCharsAZERTY: function (txt) {
      var text = txt || '';
      text = text.replace(/ض/g, 'a');
      text = text.replace(/َ/g, 'A');
      text = text.replace(/ص/g, 'z');
      text = text.replace(/ً/g, 'Z');
      text = text.replace(/ث/g, 'e');
      text = text.replace(/ُ/g, 'E');
      text = text.replace(/ق/g, "r");
      text = text.replace(/ٌ/g, "R");
      text = text.replace(/ف/g, "t");
      text = text.replace(/لإ/g, "T");
      text = text.replace(/غ/g, "y");
      text = text.replace(/إ/g, "Y");
      text = text.replace(/ع/g, "u");
      text = text.replace(/‘/g, "U");
      text = text.replace(/ه/g, "i");
      text = text.replace(/÷/g, "I");
      text = text.replace(/خ/g, "o");
      text = text.replace(/×/g, "O");
      text = text.replace(/ح/g, "p");
      text = text.replace(/؛/g, "P");
      text = text.replace(/ج/g, "\^");
      text = text.replace(/د/g, "\$");
      text = text.replace(/ش/g, "q");
      text = text.replace(/ِ/g, "Q");
      text = text.replace(/س/g, "s");
      text = text.replace(/ٍ/g, "S");
      text = text.replace(/ي/g, "d");
      text = text.replace(/\]/g, "D");
      text = text.replace(/ب/g, "f");
      text = text.replace(/\[/g, "F");
      text = text.replace(/ل/g, "g");
      text = text.replace(/لأ/g, "G");
      text = text.replace(/ا/g, "h");
      text = text.replace(/أ/g, "H");
      text = text.replace(/ت/g, "j");
      text = text.replace(/ـ/g, "J");
      text = text.replace(/ن/g, "k");
      text = text.replace(/،/g, "K");
      text = text.replace(/م/g, "l");
      text = text.replace(/\//g, "L");
      text = text.replace(/ك/g, "m");
      text = text.replace(/:/g, "M");
      text = text.replace(/ط/g, "ù");
      text = text.replace(/\\/g, "*");

      text = text.replace(/ئ/g, "w");
      text = text.replace(/~/g, "W");
      text = text.replace(/ء/g, "x");
      text = text.replace(/ْ/g, "X");
      text = text.replace(/ؤ/g, "c");
      text = text.replace(/}/g, "C");
      text = text.replace(/ر/g, "v");
      text = text.replace(/{/g, "V");
      text = text.replace(/ﻻ/g, "b");
      text = text.replace(/لآ/g, "B");
      text = text.replace(/ى/g, "n");
      text = text.replace(/آ/g, "N");
      text = text.replace(/ة/g, ",");
      text = text.replace(/ة/g, ",");
      text = text.replace(/'/g, "?");
      text = text.replace(/و/g, ";");
      text = text.replace(/,/g, ".");
      text = text.replace(/ز/g, ":");
      text = text.replace(/\//g, ".");
      text = text.replace(/ظ/g, "!");
      text = text.replace(/؟/g, "§");

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
    },

    // API
    getKbLayout: function () {
      return this.kbLayout;
    },
    setKbLayout: function (kbl) {
      var kbLayout = String(kbl).toLocaleLowerCase();
      if (defaults.supportedKeyboardLayouts.indexOf(kbLayout) > -1) {
        this.kbLayout = kbLayout;
      } else {
        console.error('Please set a valid keyboard layout');
      }
    }
  };

  Oktob.init = function (config) {
    var self = this;
    var con = config || defaults.config
    self.mode = con.mode || defaults.config.mode;
    self.convertDigits = con.convertDigits || defaults.config.convertDigits;

    // If no kbLayout is provided, choose the deault one, if not check if it's a valid keybaord layout
    if (config.kbLayout && defaults.supportedKeyboardLayouts.indexOf(config.kbLayout) > -1) {
      self.kbLayout = con.kbLayout; // A keyboard layout is given, and it's in the supported keyboard layouts
    } else {
      // The given kyboard layout is not valid
      if (config.kbLayout) {
        console.error('Please provide a valid keyboard layout, between: [' + defaults.supportedKeyboardLayouts + ']');
      } else {
        self.kbLayout = defaults.config.kbLayout;
      }
    }
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
    defaultConfig: defaults.config,
    supportedKeyboardLayouts: defaults.supportedKeyboardLayouts,
  }
  /* end-test-block */

})(this);
