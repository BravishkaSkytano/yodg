import {
  require_advancedFormat,
  require_duration,
  require_isoWeek
} from "./chunk-PNPGZM2W.js";
import {
  require_dayjs_min
} from "./chunk-Q2MMSG4D.js";
import {
  __commonJS,
  __toESM
} from "./chunk-TRTQSARU.js";

// ../../node_modules/dayjs/plugin/isBetween.js
var require_isBetween = __commonJS({
  "../../node_modules/dayjs/plugin/isBetween.js"(exports, module) {
    !(function(e, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isBetween = i();
    })(exports, (function() {
      "use strict";
      return function(e, i, t) {
        i.prototype.isBetween = function(e2, i2, s, f) {
          var n = t(e2), o = t(i2), r = "(" === (f = f || "()")[0], u = ")" === f[1];
          return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
        };
      };
    }));
  }
});

// ../../node_modules/dayjs/plugin/isSameOrAfter.js
var require_isSameOrAfter = __commonJS({
  "../../node_modules/dayjs/plugin/isSameOrAfter.js"(exports, module) {
    !(function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isSameOrAfter = t();
    })(exports, (function() {
      "use strict";
      return function(e, t) {
        t.prototype.isSameOrAfter = function(e2, t2) {
          return this.isSame(e2, t2) || this.isAfter(e2, t2);
        };
      };
    }));
  }
});

// ../../node_modules/dayjs/plugin/isSameOrBefore.js
var require_isSameOrBefore = __commonJS({
  "../../node_modules/dayjs/plugin/isSameOrBefore.js"(exports, module) {
    !(function(e, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isSameOrBefore = i();
    })(exports, (function() {
      "use strict";
      return function(e, i) {
        i.prototype.isSameOrBefore = function(e2, i2) {
          return this.isSame(e2, i2) || this.isBefore(e2, i2);
        };
      };
    }));
  }
});

// ../../node_modules/dayjs/plugin/quarterOfYear.js
var require_quarterOfYear = __commonJS({
  "../../node_modules/dayjs/plugin/quarterOfYear.js"(exports, module) {
    !(function(t, n) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_quarterOfYear = n();
    })(exports, (function() {
      "use strict";
      var t = "month", n = "quarter";
      return function(e, i) {
        var r = i.prototype;
        r.quarter = function(t2) {
          return this.$utils().u(t2) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (t2 - 1));
        };
        var s = r.add;
        r.add = function(e2, i2) {
          return e2 = Number(e2), this.$utils().p(i2) === n ? this.add(3 * e2, t) : s.bind(this)(e2, i2);
        };
        var u = r.startOf;
        r.startOf = function(e2, i2) {
          var r2 = this.$utils(), s2 = !!r2.u(i2) || i2;
          if (r2.p(e2) === n) {
            var o = this.quarter() - 1;
            return s2 ? this.month(3 * o).startOf(t).startOf("day") : this.month(3 * o + 2).endOf(t).endOf("day");
          }
          return u.bind(this)(e2, i2);
        };
      };
    }));
  }
});

// ../../node_modules/dayjs/plugin/relativeTime.js
var require_relativeTime = __commonJS({
  "../../node_modules/dayjs/plugin/relativeTime.js"(exports, module) {
    !(function(r, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (r = "undefined" != typeof globalThis ? globalThis : r || self).dayjs_plugin_relativeTime = e();
    })(exports, (function() {
      "use strict";
      return function(r, e, t) {
        r = r || {};
        var n = e.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
        function i(r2, e2, t2, o2) {
          return n.fromToBase(r2, e2, t2, o2);
        }
        t.en.relativeTime = o, n.fromToBase = function(e2, n2, i2, d2, u) {
          for (var f, a, s, l = i2.$locale().relativeTime || o, h = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m = h.length, c = 0; c < m; c += 1) {
            var y = h[c];
            y.d && (f = d2 ? t(e2).diff(i2, y.d, true) : i2.diff(e2, y.d, true));
            var p = (r.rounding || Math.round)(Math.abs(f));
            if (s = f > 0, p <= y.r || !y.r) {
              p <= 1 && c > 0 && (y = h[c - 1]);
              var v = l[y.l];
              u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n2, y.l, s);
              break;
            }
          }
          if (n2) return a;
          var M = s ? l.future : l.past;
          return "function" == typeof M ? M(a) : M.replace("%s", a);
        }, n.to = function(r2, e2) {
          return i(r2, e2, this, true);
        }, n.from = function(r2, e2) {
          return i(r2, e2, this);
        };
        var d = function(r2) {
          return r2.$u ? t.utc() : t();
        };
        n.toNow = function(r2) {
          return this.to(d(this), r2);
        }, n.fromNow = function(r2) {
          return this.from(d(this), r2);
        };
      };
    }));
  }
});

// ../../node_modules/dayjs/plugin/utc.js
var require_utc = __commonJS({
  "../../node_modules/dayjs/plugin/utc.js"(exports, module) {
    !(function(t, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_utc = i();
    })(exports, (function() {
      "use strict";
      var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
      return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t2) {
          var i2 = { date: t2, utc: true, args: arguments };
          return new f(i2);
        }, u.utc = function(i2) {
          var e2 = n(this.toDate(), { locale: this.$L, utc: true });
          return i2 ? e2.add(this.utcOffset(), t) : e2;
        }, u.local = function() {
          return n(this.toDate(), { locale: this.$L, utc: false });
        };
        var r = u.parse;
        u.parse = function(t2) {
          t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), r.call(this, t2);
        };
        var o = u.init;
        u.init = function() {
          if (this.$u) {
            var t2 = this.$d;
            this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
          } else o.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s2, f2) {
          var n2 = this.$utils().u;
          if (n2(s2)) return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
          if ("string" == typeof s2 && (s2 = (function(t2) {
            void 0 === t2 && (t2 = "");
            var s3 = t2.match(i);
            if (!s3) return null;
            var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
            return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
          })(s2), null === s2)) return this;
          var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2;
          if (0 === u2) return this.utc(f2);
          var r2 = this.clone();
          if (f2) return r2.$offset = u2, r2.$u = false, r2;
          var o2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          return (r2 = this.local().add(u2 + o2, t)).$offset = u2, r2.$x.$localOffset = o2, r2;
        };
        var h = u.format;
        u.format = function(t2) {
          var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, i2);
        }, u.valueOf = function() {
          var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * t2;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t2) {
          return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t2, i2, e2) {
          if (t2 && this.$u === t2.$u) return c.call(this, t2, i2, e2);
          var s2 = this.local(), f2 = n(t2).local();
          return c.call(s2, f2, i2, e2);
        };
      };
    }));
  }
});

// src/scripts/modules/toc.ts
function setupToC() {
  const container = document.getElementById("right-pane");
  const toc = document.getElementById("toc");
  if (!toc || !container) return;
  const sections = document.getElementById("content").querySelectorAll("h2, h3, h4, h5, h6");
  const links = toc.querySelectorAll("a");
  for (const link of links) {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      e.stopPropagation();
      target.scrollIntoView({ behavior: "smooth" });
    });
  }
  function changeLinkState() {
    let index = sections.length;
    while (--index && container.scrollTop + 50 < sections[index].offsetTop) {
    }
    links.forEach((link) => link.classList.remove("active"));
    links[index].classList.add("active");
  }
  changeLinkState();
  container.addEventListener("scroll", changeLinkState);
}

// src/scripts/modules/expanders.ts
function setupExpanders() {
  const expanders = document.querySelectorAll("#menu .submenu-item .collapse-button");
  for (const expander of expanders) {
    const li = expander.closest("li");
    if (!li) {
      continue;
    }
    expander.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const ul = li.querySelector("ul");
      if (!ul) {
        return;
      }
      const isExpanded = li.classList.contains("expanded");
      if (isExpanded) {
        ul.style.height = `${ul.scrollHeight}px`;
        ul.offsetHeight;
        li.classList.remove("expanded");
        ul.style.height = "0";
      } else {
        ul.style.height = "0";
        ul.offsetHeight;
        li.classList.add("expanded");
        ul.style.height = `${ul.scrollHeight}px`;
      }
      setTimeout(() => {
        ul.style.height = "";
      }, 200);
    });
  }
}

// src/scripts/modules/mobile.ts
function setupMobileMenu() {
  function closeMobileMenus() {
    document.body.classList.remove("menu-open");
    document.body.classList.remove("toc-open");
  }
  window.addEventListener("click", (e) => {
    const isMenuOpen = document.body.classList.contains("menu-open");
    const isTocOpen = document.body.classList.contains("toc-open");
    if (!isMenuOpen && !isTocOpen) return;
    const target = e.target;
    if (target.closest("#left-pane")) return;
    if (target.closest("#toc-pane")) return;
    if (target.closest(".header-button")) return;
    return closeMobileMenus();
  });
}

// src/scripts/common/debounce.ts
function debounce(executor, delay) {
  let timeout;
  return function(...args) {
    const callback = () => {
      timeout = null;
      Reflect.apply(executor, null, args);
    };
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
}

// src/scripts/common/parents.ts
function parents(el, selector) {
  const result = [];
  for (let p = el && el.parentElement; p; p = p.parentElement) {
    if (p.matches(selector)) result.push(p);
  }
  return result;
}

// src/scripts/common/parsehtml.ts
function parseHTML(html, fragment = false) {
  const template = document.createElement("template");
  template.innerHTML = html;
  const node = template.content.cloneNode(true);
  if (fragment) return node;
  return node.childNodes.length > 1 ? node.childNodes : node.childNodes[0];
}

// src/scripts/modules/search.ts
var fuseInstance = null;
function buildResultItem(result) {
  return `<a class="search-result-item" href="./${result.id}">
                <div class="search-result-title">${result.title}</div>
                <div class="search-result-note">${result.path || "Home"}</div>
            </a>`;
}
function setupSearch() {
  const searchInput = document.querySelector(".search-input");
  if (!searchInput) {
    return;
  }
  searchInput.addEventListener("keyup", debounce(async () => {
    const query = searchInput.value;
    if (query.length < 3) return;
    const resp = await fetchResults(query);
    const results = resp.results.slice(0, 5);
    const lines = [`<div class="search-results">`];
    for (const result of results) {
      lines.push(buildResultItem(result));
    }
    lines.push("</div>");
    const container = parseHTML(lines.join(""));
    const rect = searchInput.getBoundingClientRect();
    container.style.top = `${rect.bottom}px`;
    container.style.left = `${rect.left}px`;
    container.style.minWidth = `${rect.width}px`;
    const existing = document.querySelector(".search-results");
    if (existing) existing.replaceWith(container);
    else document.body.append(container);
  }, 500));
  window.addEventListener("click", (e) => {
    const existing = document.querySelector(".search-results");
    if (!existing) return;
    if (parents(e.target, ".search-results,.search-item").length) return;
    if (existing) existing.remove();
  });
}
async function fetchResults(query) {
  const linkHref = document.head.querySelector("link[rel=stylesheet]")?.getAttribute("href");
  const rootUrl = linkHref?.split("/").slice(0, -2).join("/") || ".";
  if (window.glob.isStatic) {
    if (!fuseInstance) {
      const searchIndex = await (await fetch(`${rootUrl}/search-index.json`)).json();
      const Fuse = (await import("./fuse-MYPY7PA2.js")).default;
      fuseInstance = new Fuse(searchIndex, {
        keys: [
          "title",
          "content"
        ],
        includeScore: true,
        threshold: 0.65,
        ignoreDiacritics: true,
        ignoreLocation: true,
        ignoreFieldNorm: true,
        useExtendedSearch: true
      });
    }
    const results = fuseInstance.search(query, { limit: 5 });
    console.debug("Search results:", results);
    const processedResults = results.map(({ item, score }) => ({
      ...item,
      id: rootUrl + "/" + item.id,
      score
    }));
    return { results: processedResults };
  } else {
    const ancestor = document.body.dataset.ancestorNoteId;
    const resp = await fetch(`api/notes?search=${query}&ancestorNoteId=${ancestor}`);
    return await resp.json();
  }
}

// src/scripts/modules/theme.ts
var themeRootEl = document.documentElement;
function setupThemeSelector() {
  const themeSwitch = document.querySelector(".theme-selection input");
  themeSwitch?.addEventListener("change", () => {
    const theme = themeSwitch.checked ? "dark" : "light";
    setTheme(theme);
    localStorage.setItem("theme", theme);
  });
}
function setTheme(theme) {
  if (theme === "dark") {
    themeRootEl.classList.add("theme-dark");
    themeRootEl.classList.remove("theme-light");
  } else {
    themeRootEl.classList.remove("theme-dark");
    themeRootEl.classList.add("theme-light");
  }
}

// src/scripts/modules/mermaid.ts
async function setupMermaid() {
  const mermaidEls = document.querySelectorAll("#content pre code.language-mermaid");
  if (mermaidEls.length === 0) {
    return;
  }
  const mermaid = (await import("./mermaid.core-BUJU3YJZ.js")).default;
  for (const codeBlock of mermaidEls) {
    const parentPre = codeBlock.parentElement;
    if (!parentPre) {
      continue;
    }
    const mermaidDiv = document.createElement("div");
    mermaidDiv.classList.add("mermaid");
    mermaidDiv.innerHTML = codeBlock.innerHTML;
    parentPre.replaceWith(mermaidDiv);
  }
  mermaid.init();
}

// ../commons/src/lib/katex_macros.ts
var KATEX_MACROS = {
  // ISO 80000-2 upright operators (mathlive MACROS table)
  "\\differentialD": "\\mathrm{d}",
  "\\capitalDifferentialD": "\\mathrm{D}",
  "\\exponentialE": "\\mathrm{e}",
  "\\imaginaryI": "\\mathrm{i}",
  "\\imaginaryJ": "\\mathrm{j}",
  // Relational shortcuts (mathlive inline shortcuts: `?=` and `::`)
  "\\questeq": "\\stackrel{?}{=}",
  // U+225F questioned-equal: "?" over "="
  "\\Colon": "\\dblcolon"
  // U+2237 proportion / double colon
};

// src/scripts/modules/math.ts
async function setupMath() {
  const anyMathBlock = document.querySelector("#content .math-tex");
  if (!anyMathBlock) {
    return;
  }
  const renderMathInElement = (await import("./auto-render-2EFOEAKD.js")).default;
  await import("./mhchem-H2JVXEQ5.js");
  const contentEl = document.getElementById("content");
  if (!contentEl) return;
  renderMathInElement(contentEl, { throwOnError: false, macros: { ...KATEX_MACROS } });
  document.body.classList.add("math-loaded");
}

// src/scripts/modules/sidebar.ts
var MOBILE_BREAKPOINT = 768;
function setupToggle(buttonId, className, mobileClass, otherMobileClass) {
  const button = document.getElementById(buttonId);
  if (!button) return;
  button.addEventListener("click", () => {
    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    if (isMobile) {
      document.body.classList.toggle(mobileClass);
      document.body.classList.remove(otherMobileClass);
    } else {
      const isCollapsed = document.documentElement.classList.toggle(className);
      localStorage.setItem(className, String(isCollapsed));
    }
  });
}
function setupSidebars() {
  setupToggle("left-pane-toggle-button", "left-pane-collapsed", "menu-open", "toc-open");
  setupToggle("toc-pane-toggle-button", "toc-pane-collapsed", "toc-open", "menu-open");
}

// src/scripts/modules/video_facade.ts
function setupVideoFacades() {
  const facades = document.querySelectorAll(".link-embed-video-facade[data-video-id]");
  for (const facade of facades) {
    facade.addEventListener("click", () => {
      const videoId = facade.dataset.videoId;
      const container = facade.parentElement;
      if (!videoId || !container) {
        return;
      }
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?rel=0&autoplay=1`;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;
      container.replaceChildren(iframe);
    });
  }
}

// ../commons/src/lib/i18n.ts
var UNSORTED_LOCALES = [
  { id: "cn", name: "\u7B80\u4F53\u4E2D\u6587", electronLocale: "zh_CN", tesseractCode: "chi_sim" },
  { id: "cs", name: "\u010Ce\u0161tina", electronLocale: "cs", tesseractCode: "ces" },
  { id: "de", name: "Deutsch", electronLocale: "de", tesseractCode: "deu" },
  { id: "en", name: "English (United States)", electronLocale: "en", tesseractCode: "eng" },
  { id: "en-GB", name: "English (United Kingdom)", electronLocale: "en_GB", tesseractCode: "eng" },
  { id: "es", name: "Espa\xF1ol", electronLocale: "es", tesseractCode: "spa" },
  { id: "fr", name: "Fran\xE7ais", electronLocale: "fr", tesseractCode: "fra" },
  { id: "ga", name: "Gaeilge", electronLocale: "en", tesseractCode: "gle" },
  { id: "id", name: "Bahasa Indonesia", electronLocale: "id", tesseractCode: "ind" },
  { id: "it", name: "Italiano", electronLocale: "it", tesseractCode: "ita" },
  { id: "hi", name: "\u0939\u093F\u0928\u094D\u0926\u0940", electronLocale: "hi", tesseractCode: "hin" },
  { id: "ja", name: "\u65E5\u672C\u8A9E", electronLocale: "ja", tesseractCode: "jpn" },
  { id: "ko", name: "\uD55C\uAD6D\uC5B4", electronLocale: "ko", tesseractCode: "kor" },
  { id: "pt_br", name: "Portugu\xEAs (Brasil)", electronLocale: "pt_BR", tesseractCode: "por" },
  { id: "pt", name: "Portugu\xEAs (Portugal)", electronLocale: "pt_PT", tesseractCode: "por" },
  { id: "pl", name: "Polski", electronLocale: "pl", tesseractCode: "pol" },
  { id: "ro", name: "Rom\xE2n\u0103", electronLocale: "ro", tesseractCode: "ron" },
  { id: "ru", name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", electronLocale: "ru", tesseractCode: "rus" },
  { id: "tr", name: "T\xFCrk\xE7e", electronLocale: "tr", tesseractCode: "tur" },
  { id: "tw", name: "\u7E41\u9AD4\u4E2D\u6587", electronLocale: "zh_TW", tesseractCode: "chi_tra" },
  { id: "uk", name: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430", electronLocale: "uk", tesseractCode: "ukr" },
  /**
   * Development-only languages.
   *
   * These are only displayed while in dev mode, to test some language particularities (such as RTL) more easily.
   */
  {
    id: "en_rtl",
    name: "English RTL",
    electronLocale: "en",
    rtl: true,
    devOnly: true
  },
  /*
   * Right to left languages
   *
   * Currently they are only for setting the language of text notes.
   */
  {
    // Arabic
    id: "ar",
    name: "\u0627\u064E\u0644\u0652\u0639\u064E\u0631\u064E\u0628\u0650\u064A\u064E\u0651\u0629\u064F",
    rtl: true,
    electronLocale: "ar",
    tesseractCode: "ara"
  },
  {
    // Hebrew
    id: "he",
    name: "\u05E2\u05D1\u05E8\u05D9\u05EA",
    rtl: true,
    contentOnly: true,
    tesseractCode: "heb"
  },
  {
    // Kurdish
    id: "ku",
    name: "\u06A9\u0648\u0631\u062F\u06CC",
    rtl: true,
    contentOnly: true,
    tesseractCode: "kur"
  },
  {
    // Persian
    id: "fa",
    name: "\u0641\u0627\u0631\u0633\u06CC",
    rtl: true,
    contentOnly: true,
    tesseractCode: "fas"
  },
  {
    // Uyghur
    id: "ug",
    name: "\u0626\u06C7\u064A\u063A\u06C7\u0631\u0686\u06D5",
    rtl: true,
    contentOnly: true,
    tesseractCode: "uig"
  }
];
var LOCALES = Array.from(UNSORTED_LOCALES).sort((a, b) => a.name.localeCompare(b.name));

// ../commons/src/lib/options_interface.ts
var SYSTEM_SANS_SERIF_FONT_STACK = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Cantarell",
  "Ubuntu",
  "Noto Sans",
  "Helvetica",
  "Arial",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji"
].join(",");
var SYSTEM_MONOSPACE_FONT_STACK = [
  "ui-monospace",
  "SFMono-Regular",
  "SF Mono",
  "Consolas",
  "Source Code Pro",
  "Ubuntu Mono",
  "Menlo",
  "Liberation Mono",
  "monospace"
].join(",");

// ../commons/src/lib/mime_type.ts
var MIME_TYPES_DICT_RAW = [
  { title: "Plain text", mime: "text/plain", mdLanguageCode: "plaintext", default: true, icon: "bx bx-file" },
  // Keep sorted alphabetically.
  { title: "ABAP (SAP)", mime: "text/x-abap", mdLanguageCode: "abap" },
  { title: "APL", mime: "text/apl" },
  { title: "ASN.1", mime: "text/x-ttcn-asn" },
  { title: "ASP.NET", mime: "application/x-aspx" },
  { title: "Asterisk", mime: "text/x-asterisk" },
  { title: "Batch file (DOS)", mime: "application/x-bat", mdLanguageCode: "dos", icon: "bx bx-terminal" },
  { title: "Brainfuck", mime: "text/x-brainfuck", mdLanguageCode: "brainfuck" },
  { title: "C", mime: "text/x-csrc", mdLanguageCode: "c", default: true },
  { title: "C#", mime: "text/x-csharp", mdLanguageCode: "csharp", default: true },
  { title: "C++", mime: "text/x-c++src", mdLanguageCode: "cpp", default: true, icon: "bx bxl-c-plus-plus" },
  { title: "Clojure", mime: "text/x-clojure", mdLanguageCode: "clojure" },
  { title: "ClojureScript", mime: "text/x-clojurescript" },
  { title: "Closure Stylesheets (GSS)", mime: "text/x-gss" },
  { title: "CMake", mime: "text/x-cmake", mdLanguageCode: "cmake" },
  { title: "Cobol", mime: "text/x-cobol" },
  { title: "CoffeeScript", mime: "text/coffeescript", mdLanguageCode: "coffeescript", icon: "bx bx-coffee" },
  { title: "Common Lisp", mime: "text/x-common-lisp", mdLanguageCode: "lisp" },
  { title: "CQL", mime: "text/x-cassandra" },
  { title: "Crystal", mime: "text/x-crystal", mdLanguageCode: "crystal" },
  { title: "CSS", mime: "text/css", mdLanguageCode: "css", default: true, icon: "bx bxs-file-css" },
  { title: "Cypher", mime: "application/x-cypher-query" },
  { title: "Cython", mime: "text/x-cython" },
  { title: "D", mime: "text/x-d", mdLanguageCode: "d" },
  { title: "Dart", mime: "application/dart", mdLanguageCode: "dart" },
  { title: "diff", mime: "text/x-diff", mdLanguageCode: "diff" },
  { title: "Django", mime: "text/x-django", mdLanguageCode: "django", icon: "bx bxl-django" },
  { title: "Dockerfile", mime: "text/x-dockerfile", mdLanguageCode: "dockerfile", icon: "bx bxl-docker" },
  { title: "DTD", mime: "application/xml-dtd", icon: "bx bx-code" },
  { title: "Dylan", mime: "text/x-dylan" },
  { title: "EBNF", mime: "text/x-ebnf", mdLanguageCode: "ebnf" },
  { title: "ECL", mime: "text/x-ecl" },
  { title: "edn", mime: "application/edn" },
  { title: "Eiffel", mime: "text/x-eiffel" },
  { title: "Elixir", mime: "text/x-elixir", mdLanguageCode: "elixir" },
  { title: "Elm", mime: "text/x-elm", mdLanguageCode: "elm" },
  { title: "Embedded Javascript", mime: "application/x-ejs" },
  { title: "Embedded Ruby", mime: "application/x-erb", mdLanguageCode: "erb" },
  { title: "Erlang", mime: "text/x-erlang", mdLanguageCode: "erlang" },
  { title: "Esper", mime: "text/x-esper" },
  { title: "F#", mime: "text/x-fsharp", mdLanguageCode: "fsharp" },
  { title: "Factor", mime: "text/x-factor" },
  { title: "FCL", mime: "text/x-fcl" },
  { title: "Forth", mime: "text/x-forth" },
  { title: "Fortran", mime: "text/x-fortran", mdLanguageCode: "fortran" },
  { title: "Gas", mime: "text/x-gas" },
  { title: "GDScript (Godot)", mime: "text/x-gdscript" },
  { title: "Gherkin", mime: "text/x-feature", mdLanguageCode: "gherkin" },
  { title: "GitHub Flavored Markdown", mime: "text/x-gfm", mdLanguageCode: "markdown", icon: "bx bxl-markdown" },
  { title: "Go", mime: "text/x-go", mdLanguageCode: "go", default: true, icon: "bx bxl-go-lang" },
  { title: "Groovy", mime: "text/x-groovy", mdLanguageCode: "groovy", default: true },
  { title: "HAML", mime: "text/x-haml", mdLanguageCode: "haml" },
  { title: "Haskell (Literate)", mime: "text/x-literate-haskell" },
  { title: "Haskell", mime: "text/x-haskell", mdLanguageCode: "haskell", default: true },
  { title: "Haxe", mime: "text/x-haxe", mdLanguageCode: "haxe" },
  { title: "HTML", mime: "text/html", mdLanguageCode: "html", default: true, icon: "bx bxl-html5" },
  { title: "HTTP", mime: "message/http", mdLanguageCode: "http", default: true },
  { title: "HXML", mime: "text/x-hxml" },
  { title: "IDL", mime: "text/x-idl" },
  { title: "Java Server Pages", mime: "application/x-jsp", mdLanguageCode: "java", icon: "bx bxl-java" },
  { title: "Java", mime: "text/x-java", mdLanguageCode: "java", default: true, icon: "bx bxl-java" },
  { title: "JavaScript", mime: "text/javascript", mdLanguageCode: "javascript", default: true, icon: "bx bxl-javascript" },
  { title: "JavaScript (Trilium backend)", mime: "application/javascript;env=backend", mdLanguageCode: "javascript", default: true, icon: "bx bxl-javascript" },
  { title: "JavaScript (Trilium frontend)", mime: "application/javascript;env=frontend", mdLanguageCode: "javascript", default: true, icon: "bx bxl-javascript" },
  { title: "Jinja2", mime: "text/jinja2" },
  { title: "JSON-LD", mime: "application/ld+json", mdLanguageCode: "json", icon: "bx bxs-file-json" },
  { title: "JSON", mime: "application/json", mdLanguageCode: "json", default: true, icon: "bx bxs-file-json" },
  { title: "JSX", mime: "text/jsx", mdLanguageCode: "jsx", default: true },
  { title: "Julia", mime: "text/x-julia", mdLanguageCode: "julia" },
  { title: "Kotlin", mime: "text/x-kotlin", mdLanguageCode: "kotlin", default: true },
  { title: "KDL", mime: "application/vnd.kdl", mdLanguageCode: "kdl" },
  { title: "LaTeX", mime: "text/x-latex", mdLanguageCode: "latex" },
  { title: "LESS", mime: "text/x-less", mdLanguageCode: "less", icon: "bx bxl-less" },
  { title: "LiveScript", mime: "text/x-livescript", mdLanguageCode: "livescript" },
  { title: "Lua", mime: "text/x-lua", mdLanguageCode: "lua" },
  { title: "MariaDB SQL", mime: "text/x-mariadb", mdLanguageCode: "sql" },
  { title: "Markdown", mime: "text/x-markdown", mdLanguageCode: "markdown", default: true, icon: "bx bxl-markdown" },
  { title: "Mathematica", mime: "text/x-mathematica", mdLanguageCode: "mathematica" },
  { title: "mbox", mime: "application/mbox" },
  { title: "MIPS Assembler", mime: "text/x-asm-mips", mdLanguageCode: "mips" },
  { title: "mIRC", mime: "text/mirc" },
  { title: "Modelica", mime: "text/x-modelica" },
  { title: "MS SQL", mime: "text/x-mssql", mdLanguageCode: "sql", icon: "bx bx-data" },
  { title: "mscgen", mime: "text/x-mscgen" },
  { title: "msgenny", mime: "text/x-msgenny" },
  { title: "MUMPS", mime: "text/x-mumps" },
  { title: "MySQL", mime: "text/x-mysql", mdLanguageCode: "sql", icon: "bx bx-data" },
  { title: "Nginx", mime: "text/x-nginx-conf", mdLanguageCode: "nginx" },
  { title: "Nim", mime: "text/x-nim", mdLanguageCode: "nim" },
  { title: "Nix", mime: "text/x-nix", mdLanguageCode: "nix" },
  { title: "NSIS", mime: "text/x-nsis", mdLanguageCode: "nsis" },
  { title: "NTriples", mime: "application/n-triples" },
  { title: "Objective-C", mime: "text/x-objectivec", mdLanguageCode: "objectivec" },
  { title: "OCaml", mime: "text/x-ocaml", mdLanguageCode: "ocaml" },
  { title: "Octave", mime: "text/x-octave" },
  { title: "Oz", mime: "text/x-oz" },
  { title: "Pascal", mime: "text/x-pascal", mdLanguageCode: "delphi" },
  { title: "PEG.js", mime: "text/x-pegjs" },
  { title: "Perl", mime: "text/x-perl", default: true },
  { title: "PGP", mime: "application/pgp" },
  { title: "PHP", mime: "text/x-php", default: true, icon: "bx bxl-php" },
  { title: "Pig", mime: "text/x-pig" },
  { title: "PLSQL", mime: "text/x-plsql", mdLanguageCode: "sql" },
  { title: "PostgreSQL", mime: "text/x-pgsql", mdLanguageCode: "pgsql", icon: "bx bxl-postgresql" },
  { title: "PowerShell", mime: "application/x-powershell", mdLanguageCode: "powershell", icon: "bx bxs-terminal" },
  { title: "Properties files", mime: "text/x-properties", mdLanguageCode: "properties" },
  { title: "ProtoBuf", mime: "text/x-protobuf", mdLanguageCode: "protobuf" },
  { title: "Pug", mime: "text/x-pug" },
  { title: "Puppet", mime: "text/x-puppet", mdLanguageCode: "puppet" },
  { title: "Python", mime: "text/x-python", mdLanguageCode: "python", default: true, icon: "bx bxl-python" },
  { title: "Q", mime: "text/x-q", mdLanguageCode: "q" },
  { title: "R", mime: "text/x-rsrc", mdLanguageCode: "r" },
  { title: "reStructuredText", mime: "text/x-rst" },
  { title: "RPM Changes", mime: "text/x-rpm-changes" },
  { title: "RPM Spec", mime: "text/x-rpm-spec" },
  { title: "Ruby", mime: "text/x-ruby", mdLanguageCode: "ruby", default: true },
  { title: "Rust", mime: "text/x-rustsrc", mdLanguageCode: "rust" },
  { title: "SAS", mime: "text/x-sas", mdLanguageCode: "sas" },
  { title: "Sass", mime: "text/x-sass", icon: "bx bxl-sass" },
  { title: "Scala", mime: "text/x-scala" },
  { title: "Scheme", mime: "text/x-scheme" },
  { title: "SCSS", mime: "text/x-scss", mdLanguageCode: "scss" },
  { title: "Shell (bash)", mime: "text/x-sh", mdLanguageCode: "sh", default: true, icon: "bx bx-terminal" },
  { title: "Sieve", mime: "application/sieve" },
  { title: "Slim", mime: "text/x-slim" },
  { title: "Smalltalk", mime: "text/x-stsrc", mdLanguageCode: "smalltalk" },
  { title: "Smarty", mime: "text/x-smarty" },
  { title: "SML", mime: "text/x-sml", mdLanguageCode: "sml" },
  { title: "Solr", mime: "text/x-solr" },
  { title: "Soy", mime: "text/x-soy" },
  { title: "SPARQL", mime: "application/sparql-query" },
  { title: "Spreadsheet", mime: "text/x-spreadsheet" },
  { title: "SQL", mime: "text/x-sql", mdLanguageCode: "sql", default: true, icon: "bx bx-data" },
  { title: "SQLite (Trilium)", mime: "text/x-sqlite;schema=trilium", mdLanguageCode: "sql", default: true, icon: "bx bx-data" },
  { title: "SQLite", mime: "text/x-sqlite", mdLanguageCode: "sql", icon: "bx bx-data" },
  { title: "Squirrel", mime: "text/x-squirrel" },
  { title: "sTeX", mime: "text/x-stex" },
  { title: "Stylus", mime: "text/x-styl", mdLanguageCode: "stylus" },
  { title: "Swift", mime: "text/x-swift", default: true },
  { title: "SystemVerilog", mime: "text/x-systemverilog" },
  { title: "Tcl", mime: "text/x-tcl", mdLanguageCode: "tcl" },
  { title: "Terraform (HCL)", mime: "text/x-hcl", mdLanguageCode: "terraform" },
  { title: "Textile", mime: "text/x-textile" },
  { title: "TiddlyWiki ", mime: "text/x-tiddlywiki" },
  { title: "Tiki wiki", mime: "text/tiki" },
  { title: "TOML", mime: "text/x-toml", mdLanguageCode: "ini", icon: "bx bx-bracket" },
  { title: "Tornado", mime: "text/x-tornado" },
  { title: "Trilium Log", mime: "text/x-trilium-log", icon: "bx bx-list-ul" },
  { title: "troff", mime: "text/troff" },
  { title: "TTCN_CFG", mime: "text/x-ttcn-cfg" },
  { title: "TTCN", mime: "text/x-ttcn" },
  { title: "Turtle", mime: "text/turtle" },
  { title: "Twig", mime: "text/x-twig", mdLanguageCode: "twig" },
  { title: "TypeScript-JSX", mime: "text/typescript-jsx" },
  { title: "TypeScript", mime: "application/typescript", mdLanguageCode: "typescript", icon: "bx bxl-typescript" },
  { title: "VB.NET", mime: "text/x-vb", mdLanguageCode: "vbnet" },
  { title: "VBScript", mime: "text/vbscript", mdLanguageCode: "vbscript" },
  { title: "Velocity", mime: "text/velocity" },
  { title: "Verilog", mime: "text/x-verilog", mdLanguageCode: "verilog" },
  { title: "VHDL", mime: "text/x-vhdl", mdLanguageCode: "vhdl" },
  { title: "Vue.js Component", mime: "text/x-vue" },
  { title: "Web IDL", mime: "text/x-webidl" },
  { title: "XML", mime: "text/xml", mdLanguageCode: "xml", default: true, icon: "bx bx-code-alt" },
  { title: "XQuery", mime: "application/xquery", mdLanguageCode: "xquery" },
  { title: "xu", mime: "text/x-xu" },
  { title: "Yacas", mime: "text/x-yacas" },
  { title: "YAML", mime: "text/x-yaml", mdLanguageCode: "yaml", default: true },
  { title: "Z80", mime: "text/x-z80" }
];
var MIME_TYPES_DICT = Object.freeze(MIME_TYPES_DICT_RAW);

// ../commons/src/lib/attachment_roles.ts
var ATTACHMENT_ROLES = {
  /** A picture the user placed in the note. */
  image: { picture: true, deduplicated: false, embedded: true, copiedAs: "image", icon: null },
  /** A file the user attached to the note. */
  file: { picture: false, deduplicated: false, embedded: true, copiedAs: "file", icon: null },
  /**
   * A link preview's two pictures, kept apart from `image` so they can be told from one the user
   * chose. Both arrive already sized by the server (a 16x16 icon, a 256px thumbnail), so the
   * compression inventory has nothing to gain from either and offering to recompress one is noise.
   * They are embedded all the same: nothing else manages them, so deleting the preview has to be
   * what eventually takes them with it. Carried into a note by hand, though, they are pictures like
   * any other — the preview they belonged to stayed behind.
   */
  favicon: { picture: true, deduplicated: true, embedded: true, copiedAs: "image", icon: "bx bx-globe" },
  coverImage: { picture: true, deduplicated: true, embedded: true, copiedAs: "image", icon: "bx bx-image-alt" },
  /** How a collection remembers the way it is being looked at, and a PDF where the reader had got to. */
  viewConfig: { picture: false, deduplicated: false, embedded: false, copiedAs: "file", icon: "bx bx-cog" },
  /** Shapes saved into an Excalidraw canvas's library. */
  canvasLibraryItem: { picture: false, deduplicated: false, embedded: false, copiedAs: "file", icon: "bx bx-shape-square" },
  /** The file an import was read from, kept so an import that went wrong can be looked at again. */
  importSource: { picture: false, deduplicated: false, embedded: false, copiedAs: "file", icon: "bx bx-import" }
};
var IMAGE_ATTACHMENT_ROLES = attachmentRolesWhere("picture");
function attachmentRolesWhere(trait) {
  return Object.keys(ATTACHMENT_ROLES).filter((role) => ATTACHMENT_ROLES[role][trait]);
}

// ../commons/src/lib/image_mimes.ts
var IMAGE_MIMES = [
  "image/png",
  // Unregistered, but some clients send it for a JPEG.
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/bmp",
  "image/webp",
  "image/avif",
  // `image/svg` is unregistered too — `image/svg+xml` is the real one — but it costs nothing to
  // recognise, and a document arriving under it is still a document.
  "image/svg",
  "image/svg+xml",
  // Both spellings of an icon: `image/vnd.microsoft.icon` is the registered name and
  // `image/x-icon` is what servers actually send.
  "image/x-icon",
  "image/vnd.microsoft.icon"
];
var ACCEPTED_IMAGE_MIMES = new Set(IMAGE_MIMES);
var IMAGE_UPLOAD_SUBTYPES = IMAGE_MIMES.map((mime) => mime.slice("image/".length));

// ../commons/src/lib/shared_constants.ts
var ALLOWED_PROTOCOLS = [
  "http",
  "https",
  "ftp",
  "ftps",
  "mailto",
  "data",
  "evernote",
  "file",
  "facetime",
  "gemini",
  "git",
  "gopher",
  "imap",
  "irc",
  "irc6",
  "jabber",
  "jar",
  "lastfm",
  "ldap",
  "ldaps",
  "magnet",
  "message",
  "mumble",
  "nfs",
  "onenote",
  "pop",
  "rmi",
  "s3",
  "sftp",
  "skype",
  "sms",
  "spotify",
  "steam",
  "svn",
  "udp",
  "view-source",
  "vlc",
  "vnc",
  "ws",
  "wss",
  "xmpp",
  "jdbc",
  "slack",
  "tel",
  "smb",
  "zotero",
  "geo",
  "logseq",
  "mid",
  "obsidian",
  "bookends",
  "highlights"
];
var SHELL_OPEN_EXTERNAL_BLOCKLIST = /* @__PURE__ */ new Set([
  "file",
  "data",
  "smb",
  "ldap",
  "ldaps",
  "jar",
  "view-source"
]);
var SHELL_OPEN_EXTERNAL_PROTOCOLS = ALLOWED_PROTOCOLS.filter(
  (p) => !SHELL_OPEN_EXTERNAL_BLOCKLIST.has(p)
);
var MOBILE_SYNC_MAX_BLOB_CONTENT_SIZE = 20 * 1024 * 1024;

// ../commons/src/lib/attribute_names.ts
var ATTRIBUTE_NAME_CHARS = "\\p{L}\\p{N}_:";
var DISALLOWED_MATCHER = new RegExp(`[^${ATTRIBUTE_NAME_CHARS}]`, "gu");
var ATTR_NAME_MATCHER = new RegExp(`^[${ATTRIBUTE_NAME_CHARS}]+$`, "u");

// ../commons/src/lib/dayjs.ts
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_advancedFormat = __toESM(require_advancedFormat(), 1);
var import_duration = __toESM(require_duration(), 1);
var import_isBetween = __toESM(require_isBetween(), 1);
var import_isoWeek = __toESM(require_isoWeek(), 1);
var import_isSameOrAfter = __toESM(require_isSameOrAfter(), 1);
var import_isSameOrBefore = __toESM(require_isSameOrBefore(), 1);
var import_quarterOfYear = __toESM(require_quarterOfYear(), 1);
var import_relativeTime = __toESM(require_relativeTime(), 1);
var import_utc = __toESM(require_utc(), 1);
import_dayjs.default.extend(import_advancedFormat.default);
import_dayjs.default.extend(import_duration.default);
import_dayjs.default.extend(import_isBetween.default);
import_dayjs.default.extend(import_isoWeek.default);
import_dayjs.default.extend(import_isSameOrAfter.default);
import_dayjs.default.extend(import_isSameOrBefore.default);
import_dayjs.default.extend(import_quarterOfYear.default);
import_dayjs.default.extend(import_relativeTime.default);
import_dayjs.default.extend(import_utc.default);

// ../commons/src/lib/favicon_contrast.ts
var MIN_ICON_CONTRAST_RATIO = 3;
var DARK_SURFACE = { r: 30, g: 30, b: 30 };
var LIGHT_SURFACE = { r: 255, g: 255, b: 255 };
function toLinearChannel(value) {
  const channel = value / 255;
  return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
}
function relativeLuminance({ r, g, b }) {
  return 0.2126 * toLinearChannel(r) + 0.7152 * toLinearChannel(g) + 0.0722 * toLinearChannel(b);
}
function contrastRatio(one, other) {
  const lighter = Math.max(one, other);
  const darker = Math.min(one, other);
  return (lighter + 0.05) / (darker + 0.05);
}
function summarizeFaviconVisibility(pixels) {
  const darkSurface = relativeLuminance(DARK_SURFACE);
  const lightSurface = relativeLuminance(LIGHT_SURFACE);
  let drawn = 0;
  let visibleOnDark = 0;
  let visibleOnLight = 0;
  for (let i = 0; i + 3 < pixels.length; i += 4) {
    const alpha = pixels[i + 3] / 255;
    if (alpha === 0) {
      continue;
    }
    const luminance = relativeLuminance({ r: pixels[i], g: pixels[i + 1], b: pixels[i + 2] });
    drawn += alpha;
    if (contrastRatio(luminance, darkSurface) >= MIN_ICON_CONTRAST_RATIO) {
      visibleOnDark += alpha;
    }
    if (contrastRatio(luminance, lightSurface) >= MIN_ICON_CONTRAST_RATIO) {
      visibleOnLight += alpha;
    }
  }
  if (drawn === 0) {
    return { onDark: 0, onLight: 0, hasContent: false };
  }
  return { onDark: visibleOnDark / drawn, onLight: visibleOnLight / drawn, hasContent: true };
}
var MIN_VISIBLE_SHARE = 0.04;
function classifyFaviconContrast(visibility) {
  if (!visibility.hasContent) {
    return "neutral";
  }
  if (visibility.onDark < MIN_VISIBLE_SHARE) {
    return "dark";
  }
  if (visibility.onLight < MIN_VISIBLE_SHARE) {
    return "light";
  }
  return "neutral";
}
function faviconContrastClass(contrast) {
  return contrast === "neutral" ? void 0 : `link-embed-favicon-${contrast}`;
}
var SAMPLE_SIZE = 32;
function measureFaviconVisibility(image) {
  const canvas = document.createElement("canvas");
  canvas.width = SAMPLE_SIZE;
  canvas.height = SAMPLE_SIZE;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) {
    return void 0;
  }
  try {
    context.drawImage(image, 0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
    return summarizeFaviconVisibility(context.getImageData(0, 0, SAMPLE_SIZE, SAMPLE_SIZE).data);
  } catch {
    return void 0;
  }
}

// ../commons/src/lib/marked_extensions.ts
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function createWikiLinkExtension(options = {}) {
  const formatHref = options.formatHref ?? ((id) => `/${id}`);
  return {
    name: "wikiLink",
    level: "inline",
    start(src) {
      return src.indexOf("[[");
    },
    tokenizer(src) {
      const match = /^\[\[([^\]]+?)\]\]/.exec(src);
      if (match) {
        return {
          type: "wikiLink",
          raw: match[0],
          text: match[1].trim(),
          href: match[1].trim()
        };
      }
    },
    renderer(token) {
      const noteId = token.href;
      return `<a class="reference-link" href="${escapeHtml(formatHref(noteId))}">${escapeHtml(token.text)}</a>`;
    }
  };
}
function createTransclusionExtension(options = {}) {
  const formatSrc = options.formatSrc ?? ((id) => `/${id}`);
  return {
    name: "transclusion",
    level: "inline",
    start(src) {
      return src.match(/!\[\[/)?.index;
    },
    tokenizer(src) {
      const match = /^!\[\[([^\]]+?)\]\]/.exec(src);
      if (match) {
        return {
          type: "transclusion",
          raw: match[0],
          href: match[1].trim()
        };
      }
    },
    renderer(token) {
      const noteId = token.href;
      return `<img src="${escapeHtml(formatSrc(noteId))}">`;
    }
  };
}
var wikiLinkExtension = createWikiLinkExtension();
var transclusionExtension = createTransclusionExtension();

// ../commons/src/lib/task_states.ts
var NONE_STATE_NAME = "none";
var DONE_STATE_NAME = "done";
var NONE_STATE_ID = "_taskStateNone";
var DONE_STATE_ID = "_taskStateDone";
var NONE_TASK_STATE = {
  id: NONE_STATE_ID,
  name: NONE_STATE_NAME,
  title: "None",
  markdownSymbol: " ",
  isCompleted: false,
  color: "",
  icon: "bx bx-checkbox"
};
var DONE_TASK_STATE = {
  id: DONE_STATE_ID,
  name: DONE_STATE_NAME,
  title: "Done",
  markdownSymbol: "x",
  isCompleted: true,
  color: "#4de64d",
  icon: "bx bx-check"
};
var DEFAULT_CUSTOM_TASK_STATES = [
  { id: "_taskStateDoing", name: "doing", title: "Doing", markdownSymbol: "/", isCompleted: false, color: "#e6a23c", icon: "bx bx-loader" },
  { id: "_taskStateMaybe", name: "maybe", title: "Maybe", markdownSymbol: "?", isCompleted: false, icon: "bx bx-question-mark" },
  { id: "_taskStateCancelled", name: "cancelled", title: "Cancelled", markdownSymbol: "-", isCompleted: false, color: "#e64d4d", icon: "bx bx-block" }
];
var DEFAULT_TASK_STATES = [
  NONE_TASK_STATE,
  DEFAULT_CUSTOM_TASK_STATES[0],
  DONE_TASK_STATE,
  DEFAULT_CUSTOM_TASK_STATES[1],
  DEFAULT_CUSTOM_TASK_STATES[2]
];

// src/scripts/modules/favicon_contrast.ts
function setupFaviconContrast() {
  for (const favicon of document.querySelectorAll("img.link-embed-mention-favicon")) {
    if (favicon.complete) {
      classify(favicon);
    } else {
      favicon.addEventListener("load", () => classify(favicon), { once: true });
    }
  }
}
function classify(favicon) {
  const visibility = measureFaviconVisibility(favicon);
  if (!visibility) {
    return;
  }
  const contrastClass = faviconContrastClass(classifyFaviconContrast(visibility));
  if (contrastClass) {
    favicon.classList.add(contrastClass);
  }
}

// src/scripts/modules/api.ts
async function fetchNote(noteId = null) {
  if (!noteId) {
    noteId = document.body.getAttribute("data-note-id");
  }
  const resp = await fetch(`api/notes/${noteId}`);
  return await resp.json();
}
var api_default = {
  fetchNote
};

// src/scripts/index.ts
function $try(func, ...args) {
  try {
    func.apply(func, args);
  } catch (e) {
    console.error(e);
  }
}
Object.assign(window, api_default);
$try(setupThemeSelector);
$try(setupToC);
$try(setupExpanders);
$try(setupMobileMenu);
$try(setupSearch);
$try(setupSidebars);
function setupTextNote() {
  $try(setupMermaid);
  $try(setupMath);
  $try(setupVideoFacades);
  $try(setupFaviconContrast);
}
document.addEventListener(
  "DOMContentLoaded",
  () => {
    const noteType = determineNoteType();
    if (noteType === "text" || document.querySelector("#content.ck-content")) {
      setupTextNote();
    }
    const toggleMenuButton = document.getElementById("toggleMenuButton");
    const layout = document.getElementById("layout");
    if (toggleMenuButton && layout) {
      toggleMenuButton.addEventListener("click", () => layout.classList.toggle("showMenu"));
    }
    for (const el of document.querySelectorAll("time[datetime]")) {
      const date = new Date(el.dateTime);
      if (!isNaN(date.getTime())) {
        el.textContent = date.toLocaleDateString();
      }
    }
  },
  false
);
function determineNoteType() {
  const bodyClass = document.body.className;
  const match = bodyClass.match(/type-([^\s]+)/);
  return match ? match[1] : null;
}
