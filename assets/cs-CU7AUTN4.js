import {
  require_dayjs_min
} from "./chunk-Q2MMSG4D.js";
import {
  __commonJS
} from "./chunk-TRTQSARU.js";

// ../../node_modules/dayjs/locale/cs.js
var require_cs = __commonJS({
  "../../node_modules/dayjs/locale/cs.js"(exports, module) {
    !(function(e, n) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = n(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_cs = n(e.dayjs);
    })(exports, (function(e) {
      "use strict";
      function n(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var t = n(e);
      function s(e2) {
        return e2 > 1 && e2 < 5 && 1 != ~~(e2 / 10);
      }
      function r(e2, n2, t2, r2) {
        var d2 = e2 + " ";
        switch (t2) {
          case "s":
            return n2 || r2 ? "p\xE1r sekund" : "p\xE1r sekundami";
          case "m":
            return n2 ? "minuta" : r2 ? "minutu" : "minutou";
          case "mm":
            return n2 || r2 ? d2 + (s(e2) ? "minuty" : "minut") : d2 + "minutami";
          case "h":
            return n2 ? "hodina" : r2 ? "hodinu" : "hodinou";
          case "hh":
            return n2 || r2 ? d2 + (s(e2) ? "hodiny" : "hodin") : d2 + "hodinami";
          case "d":
            return n2 || r2 ? "den" : "dnem";
          case "dd":
            return n2 || r2 ? d2 + (s(e2) ? "dny" : "dn\xED") : d2 + "dny";
          case "M":
            return n2 || r2 ? "m\u011Bs\xEDc" : "m\u011Bs\xEDcem";
          case "MM":
            return n2 || r2 ? d2 + (s(e2) ? "m\u011Bs\xEDce" : "m\u011Bs\xEDc\u016F") : d2 + "m\u011Bs\xEDci";
          case "y":
            return n2 || r2 ? "rok" : "rokem";
          case "yy":
            return n2 || r2 ? d2 + (s(e2) ? "roky" : "let") : d2 + "lety";
        }
      }
      var d = { name: "cs", weekdays: "ned\u011Ble_pond\u011Bl\xED_\xFAter\xFD_st\u0159eda_\u010Dtvrtek_p\xE1tek_sobota".split("_"), weekdaysShort: "ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"), weekdaysMin: "ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"), months: "leden_\xFAnor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\xE1\u0159\xED_\u0159\xEDjen_listopad_prosinec".split("_"), monthsShort: "led_\xFAno_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\xE1\u0159_\u0159\xEDj_lis_pro".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e2) {
        return e2 + ".";
      }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "p\u0159ed %s", s: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r } };
      return t.default.locale(d, null, true), d;
    }));
  }
});
export default require_cs();
