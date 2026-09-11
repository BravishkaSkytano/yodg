import {
  require_dayjs_min
} from "./chunk-Q2MMSG4D.js";
import {
  __commonJS
} from "./chunk-TRTQSARU.js";

// ../../node_modules/dayjs/locale/ga.js
var require_ga = __commonJS({
  "../../node_modules/dayjs/locale/ga.js"(exports, module) {
    !(function(a, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], i) : (a = "undefined" != typeof globalThis ? globalThis : a || self).dayjs_locale_ga = i(a.dayjs);
    })(exports, (function(a) {
      "use strict";
      function i(a2) {
        return a2 && "object" == typeof a2 && "default" in a2 ? a2 : { default: a2 };
      }
      var e = i(a), n = { name: "ga", weekdays: "D\xE9 Domhnaigh_D\xE9 Luain_D\xE9 M\xE1irt_D\xE9 C\xE9adaoin_D\xE9ardaoin_D\xE9 hAoine_D\xE9 Sathairn".split("_"), months: "Ean\xE1ir_Feabhra_M\xE1rta_Aibre\xE1n_Bealtaine_Meitheamh_I\xFAil_L\xFAnasa_Me\xE1n F\xF3mhair_Deireadh F\xF3mhair_Samhain_Nollaig".split("_"), weekStart: 1, weekdaysShort: "Dom_Lua_M\xE1i_C\xE9a_D\xE9a_Aoi_Sat".split("_"), monthsShort: "Ean_Fea_M\xE1r_Aib_Beal_Mei_I\xFAil_L\xFAn_MF\xF3mh_DF\xF3mh_Samh_Noll".split("_"), weekdaysMin: "Do_Lu_M\xE1_C\xE9_D\xE9_Ao_Sa".split("_"), ordinal: function(a2) {
        return a2;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "i %s", past: "%s \xF3 shin", s: "c\xFApla soicind", m: "n\xF3im\xE9ad", mm: "%d n\xF3im\xE9ad", h: "uair an chloig", hh: "%d uair an chloig", d: "l\xE1", dd: "%d l\xE1", M: "m\xED", MM: "%d m\xED", y: "bliain", yy: "%d bliain" } };
      return e.default.locale(n, null, true), n;
    }));
  }
});
export default require_ga();
