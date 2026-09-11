import {
  require_dayjs_min
} from "./chunk-Q2MMSG4D.js";
import {
  __commonJS
} from "./chunk-TRTQSARU.js";

// ../../node_modules/dayjs/locale/pl.js
var require_pl = __commonJS({
  "../../node_modules/dayjs/locale/pl.js"(exports, module) {
    !(function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_pl = t(e.dayjs);
    })(exports, (function(e) {
      "use strict";
      function t(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var i = t(e);
      function a(e2) {
        return e2 % 10 < 5 && e2 % 10 > 1 && ~~(e2 / 10) % 10 != 1;
      }
      function n(e2, t2, i2) {
        var n2 = e2 + " ";
        switch (i2) {
          case "m":
            return t2 ? "minuta" : "minut\u0119";
          case "mm":
            return n2 + (a(e2) ? "minuty" : "minut");
          case "h":
            return t2 ? "godzina" : "godzin\u0119";
          case "hh":
            return n2 + (a(e2) ? "godziny" : "godzin");
          case "MM":
            return n2 + (a(e2) ? "miesi\u0105ce" : "miesi\u0119cy");
          case "yy":
            return n2 + (a(e2) ? "lata" : "lat");
        }
      }
      var r = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split("_"), _ = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split("_"), s = /D MMMM/, d = function(e2, t2) {
        return s.test(t2) ? r[e2.month()] : _[e2.month()];
      };
      d.s = _, d.f = r;
      var o = { name: "pl", weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_\u015Br_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split("_"), ordinal: function(e2) {
        return e2 + ".";
      }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: n, mm: n, h: n, hh: n, d: "1 dzie\u0144", dd: "%d dni", M: "miesi\u0105c", MM: n, y: "rok", yy: n }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
      return i.default.locale(o, null, true), o;
    }));
  }
});
export default require_pl();
