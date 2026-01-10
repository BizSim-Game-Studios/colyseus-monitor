var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target2) => (target2 = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target2, "default", { value: mod, enumerable: true }) : target2,
  mod
));
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports2, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type2 = typeof val;
      if (type2 === "string" && val.length > 0) {
        return parse(val);
      } else if (type2 === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type2 = (match[2] || "ms").toLowerCase();
      switch (type2) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports2, module2) {
    function setup2(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug3(...args) {
          if (!debug3.enabled) {
            return;
          }
          const self = debug3;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug3.namespace = namespace;
        debug3.useColors = createDebug.useColors();
        debug3.color = createDebug.selectColor(namespace);
        debug3.extend = extend;
        debug3.destroy = createDebug.destroy;
        Object.defineProperty(debug3, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug3);
        }
        return debug3;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(" ", ",").split(",").filter(Boolean);
        for (const ns of split) {
          if (ns[0] === "-") {
            createDebug.skips.push(ns.slice(1));
          } else {
            createDebug.names.push(ns);
          }
        }
      }
      function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while (searchIndex < search.length) {
          if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
            if (template[templateIndex] === "*") {
              starIndex = templateIndex;
              matchIndex = searchIndex;
              templateIndex++;
            } else {
              searchIndex++;
              templateIndex++;
            }
          } else if (starIndex !== -1) {
            templateIndex = starIndex + 1;
            matchIndex++;
            searchIndex = matchIndex;
          } else {
            return false;
          }
        }
        while (templateIndex < template.length && template[templateIndex] === "*") {
          templateIndex++;
        }
        return templateIndex === template.length;
      }
      function disable() {
        const namespaces = [
          ...createDebug.names,
          ...createDebug.skips.map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        for (const skip of createDebug.skips) {
          if (matchesTemplate(name, skip)) {
            return false;
          }
        }
        for (const ns of createDebug.names) {
          if (matchesTemplate(name, ns)) {
            return true;
          }
        }
        return false;
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup2;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports2, module2) {
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = localstorage();
    exports2.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports2.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports2.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports2.storage.setItem("debug", namespaces);
        } else {
          exports2.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports2.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports2, module2) {
    "use strict";
    var argv = process.argv;
    var terminator = argv.indexOf("--");
    var hasFlag = function(flag) {
      flag = "--" + flag;
      var pos = argv.indexOf(flag);
      return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
    };
    module2.exports = function() {
      if ("FORCE_COLOR" in process.env) {
        return true;
      }
      if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
        return false;
      }
      if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
        return true;
      }
      if (process.stdout && !process.stdout.isTTY) {
        return false;
      }
      if (process.platform === "win32") {
        return true;
      }
      if ("COLORTERM" in process.env) {
        return true;
      }
      if (process.env.TERM === "dumb") {
        return false;
      }
      if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
        return true;
      }
      return false;
    }();
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports2, module2) {
    var tty = require("tty");
    var util = require("util");
    exports2.init = init;
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.destroy = util.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports2.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports2.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports2.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports2.inspectOpts ? Boolean(exports2.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports2.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util.formatWithOptions(exports2.inspectOpts, ...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug3) {
      debug3.inspectOpts = {};
      const keys = Object.keys(exports2.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug3.inspectOpts[keys[i]] = exports2.inspectOpts[keys[i]];
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports2, module2) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// node_modules/detect-libc/lib/process.js
var require_process = __commonJS({
  "node_modules/detect-libc/lib/process.js"(exports2, module2) {
    "use strict";
    var isLinux = () => process.platform === "linux";
    var report = null;
    var getReport = () => {
      if (!report) {
        if (isLinux() && process.report) {
          const orig = process.report.excludeNetwork;
          process.report.excludeNetwork = true;
          report = process.report.getReport();
          process.report.excludeNetwork = orig;
        } else {
          report = {};
        }
      }
      return report;
    };
    module2.exports = { isLinux, getReport };
  }
});

// node_modules/detect-libc/lib/filesystem.js
var require_filesystem = __commonJS({
  "node_modules/detect-libc/lib/filesystem.js"(exports2, module2) {
    "use strict";
    var fs = require("fs");
    var LDD_PATH = "/usr/bin/ldd";
    var readFileSync = (path2) => fs.readFileSync(path2, "utf-8");
    var readFile = (path2) => new Promise((resolve, reject) => {
      fs.readFile(path2, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    module2.exports = {
      LDD_PATH,
      readFileSync,
      readFile
    };
  }
});

// node_modules/detect-libc/lib/detect-libc.js
var require_detect_libc = __commonJS({
  "node_modules/detect-libc/lib/detect-libc.js"(exports2, module2) {
    "use strict";
    var childProcess = require("child_process");
    var { isLinux, getReport } = require_process();
    var { LDD_PATH, readFile, readFileSync } = require_filesystem();
    var cachedFamilyFilesystem;
    var cachedVersionFilesystem;
    var command = "getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true";
    var commandOut = "";
    var safeCommand = () => {
      if (!commandOut) {
        return new Promise((resolve) => {
          childProcess.exec(command, (err, out) => {
            commandOut = err ? " " : out;
            resolve(commandOut);
          });
        });
      }
      return commandOut;
    };
    var safeCommandSync = () => {
      if (!commandOut) {
        try {
          commandOut = childProcess.execSync(command, { encoding: "utf8" });
        } catch (_err) {
          commandOut = " ";
        }
      }
      return commandOut;
    };
    var GLIBC = "glibc";
    var RE_GLIBC_VERSION = /LIBC[a-z0-9 \-).]*?(\d+\.\d+)/i;
    var MUSL = "musl";
    var isFileMusl = (f) => f.includes("libc.musl-") || f.includes("ld-musl-");
    var familyFromReport = () => {
      const report = getReport();
      if (report.header && report.header.glibcVersionRuntime) {
        return GLIBC;
      }
      if (Array.isArray(report.sharedObjects)) {
        if (report.sharedObjects.some(isFileMusl)) {
          return MUSL;
        }
      }
      return null;
    };
    var familyFromCommand = (out) => {
      const [getconf, ldd1] = out.split(/[\r\n]+/);
      if (getconf && getconf.includes(GLIBC)) {
        return GLIBC;
      }
      if (ldd1 && ldd1.includes(MUSL)) {
        return MUSL;
      }
      return null;
    };
    var getFamilyFromLddContent = (content) => {
      if (content.includes("musl")) {
        return MUSL;
      }
      if (content.includes("GNU C Library")) {
        return GLIBC;
      }
      return null;
    };
    var familyFromFilesystem = async () => {
      if (cachedFamilyFilesystem !== void 0) {
        return cachedFamilyFilesystem;
      }
      cachedFamilyFilesystem = null;
      try {
        const lddContent = await readFile(LDD_PATH);
        cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
      } catch (e) {
      }
      return cachedFamilyFilesystem;
    };
    var familyFromFilesystemSync = () => {
      if (cachedFamilyFilesystem !== void 0) {
        return cachedFamilyFilesystem;
      }
      cachedFamilyFilesystem = null;
      try {
        const lddContent = readFileSync(LDD_PATH);
        cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
      } catch (e) {
      }
      return cachedFamilyFilesystem;
    };
    var family = async () => {
      let family2 = null;
      if (isLinux()) {
        family2 = await familyFromFilesystem();
        if (!family2) {
          family2 = familyFromReport();
        }
        if (!family2) {
          const out = await safeCommand();
          family2 = familyFromCommand(out);
        }
      }
      return family2;
    };
    var familySync = () => {
      let family2 = null;
      if (isLinux()) {
        family2 = familyFromFilesystemSync();
        if (!family2) {
          family2 = familyFromReport();
        }
        if (!family2) {
          const out = safeCommandSync();
          family2 = familyFromCommand(out);
        }
      }
      return family2;
    };
    var isNonGlibcLinux = async () => isLinux() && await family() !== GLIBC;
    var isNonGlibcLinuxSync = () => isLinux() && familySync() !== GLIBC;
    var versionFromFilesystem = async () => {
      if (cachedVersionFilesystem !== void 0) {
        return cachedVersionFilesystem;
      }
      cachedVersionFilesystem = null;
      try {
        const lddContent = await readFile(LDD_PATH);
        const versionMatch = lddContent.match(RE_GLIBC_VERSION);
        if (versionMatch) {
          cachedVersionFilesystem = versionMatch[1];
        }
      } catch (e) {
      }
      return cachedVersionFilesystem;
    };
    var versionFromFilesystemSync = () => {
      if (cachedVersionFilesystem !== void 0) {
        return cachedVersionFilesystem;
      }
      cachedVersionFilesystem = null;
      try {
        const lddContent = readFileSync(LDD_PATH);
        const versionMatch = lddContent.match(RE_GLIBC_VERSION);
        if (versionMatch) {
          cachedVersionFilesystem = versionMatch[1];
        }
      } catch (e) {
      }
      return cachedVersionFilesystem;
    };
    var versionFromReport = () => {
      const report = getReport();
      if (report.header && report.header.glibcVersionRuntime) {
        return report.header.glibcVersionRuntime;
      }
      return null;
    };
    var versionSuffix = (s) => s.trim().split(/\s+/)[1];
    var versionFromCommand = (out) => {
      const [getconf, ldd1, ldd2] = out.split(/[\r\n]+/);
      if (getconf && getconf.includes(GLIBC)) {
        return versionSuffix(getconf);
      }
      if (ldd1 && ldd2 && ldd1.includes(MUSL)) {
        return versionSuffix(ldd2);
      }
      return null;
    };
    var version = async () => {
      let version2 = null;
      if (isLinux()) {
        version2 = await versionFromFilesystem();
        if (!version2) {
          version2 = versionFromReport();
        }
        if (!version2) {
          const out = await safeCommand();
          version2 = versionFromCommand(out);
        }
      }
      return version2;
    };
    var versionSync = () => {
      let version2 = null;
      if (isLinux()) {
        version2 = versionFromFilesystemSync();
        if (!version2) {
          version2 = versionFromReport();
        }
        if (!version2) {
          const out = safeCommandSync();
          version2 = versionFromCommand(out);
        }
      }
      return version2;
    };
    module2.exports = {
      GLIBC,
      MUSL,
      family,
      familySync,
      isNonGlibcLinux,
      isNonGlibcLinuxSync,
      version,
      versionSync
    };
  }
});

// node_modules/node-gyp-build-optional-packages/node-gyp-build.js
var require_node_gyp_build = __commonJS({
  "node_modules/node-gyp-build-optional-packages/node-gyp-build.js"(exports2, module2) {
    var fs = require("fs");
    var path2 = require("path");
    var url = require("url");
    var os = require("os");
    var runtimeRequire = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
    var vars = process.config && process.config.variables || {};
    var prebuildsOnly = !!process.env.PREBUILDS_ONLY;
    var versions = process.versions;
    var abi = versions.modules;
    if (versions.deno || process.isBun) {
      abi = "unsupported";
    }
    var runtime = isElectron() ? "electron" : isNwjs() ? "node-webkit" : "node";
    var arch = process.env.npm_config_arch || os.arch();
    var platform = process.env.npm_config_platform || os.platform();
    var libc = process.env.LIBC || (isMusl(platform) ? "musl" : "glibc");
    var armv = process.env.ARM_VERSION || (arch === "arm64" ? "8" : vars.arm_version) || "";
    var uv = (versions.uv || "").split(".")[0];
    module2.exports = load;
    function load(dir) {
      return runtimeRequire(load.resolve(dir));
    }
    load.resolve = load.path = function(dir) {
      dir = path2.resolve(dir || ".");
      var packageName = "";
      var packageNameError;
      try {
        packageName = runtimeRequire(path2.join(dir, "package.json")).name;
        var varName = packageName.toUpperCase().replace(/-/g, "_");
        if (process.env[varName + "_PREBUILD"]) dir = process.env[varName + "_PREBUILD"];
      } catch (err) {
        packageNameError = err;
      }
      if (!prebuildsOnly) {
        var release = getFirst(path2.join(dir, "build/Release"), matchBuild);
        if (release) return release;
        var debug3 = getFirst(path2.join(dir, "build/Debug"), matchBuild);
        if (debug3) return debug3;
      }
      var prebuild = resolve(dir);
      if (prebuild) return prebuild;
      var nearby = resolve(path2.dirname(process.execPath));
      if (nearby) return nearby;
      var platformPackage = (packageName[0] == "@" ? "" : "@" + packageName + "/") + packageName + "-" + platform + "-" + arch;
      var packageResolutionError;
      try {
        var prebuildPackage = path2.dirname(require("module").createRequire(url.pathToFileURL(path2.join(dir, "package.json"))).resolve(platformPackage));
        return resolveFile(prebuildPackage);
      } catch (error) {
        packageResolutionError = error;
      }
      var target2 = [
        "platform=" + platform,
        "arch=" + arch,
        "runtime=" + runtime,
        "abi=" + abi,
        "uv=" + uv,
        armv ? "armv=" + armv : "",
        "libc=" + libc,
        "node=" + process.versions.node,
        process.versions.electron ? "electron=" + process.versions.electron : "",
        typeof __webpack_require__ === "function" ? "webpack=true" : ""
        // eslint-disable-line
      ].filter(Boolean).join(" ");
      let errMessage = "No native build was found for " + target2 + "\n    attempted loading from: " + dir + " and package: " + platformPackage + "\n";
      if (packageNameError) {
        errMessage += "Error finding package.json: " + packageNameError.message + "\n";
      }
      if (packageResolutionError) {
        errMessage += "Error resolving package: " + packageResolutionError.message + "\n";
      }
      throw new Error(errMessage);
      function resolve(dir2) {
        var tuples = readdirSync(path2.join(dir2, "prebuilds")).map(parseTuple);
        var tuple = tuples.filter(matchTuple(platform, arch)).sort(compareTuples)[0];
        if (!tuple) return;
        return resolveFile(path2.join(dir2, "prebuilds", tuple.name));
      }
      function resolveFile(prebuilds) {
        var parsed = readdirSync(prebuilds).map(parseTags);
        var candidates = parsed.filter(matchTags(runtime, abi));
        var winner = candidates.sort(compareTags(runtime))[0];
        if (winner) return path2.join(prebuilds, winner.file);
      }
    };
    function readdirSync(dir) {
      try {
        return fs.readdirSync(dir);
      } catch (err) {
        return [];
      }
    }
    function getFirst(dir, filter) {
      var files = readdirSync(dir).filter(filter);
      return files[0] && path2.join(dir, files[0]);
    }
    function matchBuild(name) {
      return /\.node$/.test(name);
    }
    function parseTuple(name) {
      var arr = name.split("-");
      if (arr.length !== 2) return;
      var platform2 = arr[0];
      var architectures = arr[1].split("+");
      if (!platform2) return;
      if (!architectures.length) return;
      if (!architectures.every(Boolean)) return;
      return { name, platform: platform2, architectures };
    }
    function matchTuple(platform2, arch2) {
      return function(tuple) {
        if (tuple == null) return false;
        if (tuple.platform !== platform2) return false;
        return tuple.architectures.includes(arch2);
      };
    }
    function compareTuples(a, b) {
      return a.architectures.length - b.architectures.length;
    }
    function parseTags(file) {
      var arr = file.split(".");
      var extension = arr.pop();
      var tags = { file, specificity: 0 };
      if (extension !== "node") return;
      for (var i = 0; i < arr.length; i++) {
        var tag = arr[i];
        if (tag === "node" || tag === "electron" || tag === "node-webkit") {
          tags.runtime = tag;
        } else if (tag === "napi") {
          tags.napi = true;
        } else if (tag.slice(0, 3) === "abi") {
          tags.abi = tag.slice(3);
        } else if (tag.slice(0, 2) === "uv") {
          tags.uv = tag.slice(2);
        } else if (tag.slice(0, 4) === "armv") {
          tags.armv = tag.slice(4);
        } else if (tag === "glibc" || tag === "musl") {
          tags.libc = tag;
        } else {
          continue;
        }
        tags.specificity++;
      }
      return tags;
    }
    function matchTags(runtime2, abi2) {
      return function(tags) {
        if (tags == null) return false;
        if (tags.runtime !== runtime2 && !runtimeAgnostic(tags)) return false;
        if (tags.abi !== abi2 && !tags.napi) return false;
        if (tags.uv && tags.uv !== uv) return false;
        if (tags.armv && tags.armv !== armv) return false;
        if (tags.libc && tags.libc !== libc) return false;
        return true;
      };
    }
    function runtimeAgnostic(tags) {
      return tags.runtime === "node" && tags.napi;
    }
    function compareTags(runtime2) {
      return function(a, b) {
        if (a.runtime !== b.runtime) {
          return a.runtime === runtime2 ? -1 : 1;
        } else if (a.abi !== b.abi) {
          return a.abi ? -1 : 1;
        } else if (a.specificity !== b.specificity) {
          return a.specificity > b.specificity ? -1 : 1;
        } else {
          return 0;
        }
      };
    }
    function isNwjs() {
      return !!(process.versions && process.versions.nw);
    }
    function isElectron() {
      if (process.versions && process.versions.electron) return true;
      if (process.env.ELECTRON_RUN_AS_NODE) return true;
      return typeof window !== "undefined" && window.process && window.process.type === "renderer";
    }
    function isMusl(platform2) {
      if (platform2 !== "linux") return false;
      const { familySync, MUSL } = require_detect_libc();
      return familySync() === MUSL;
    }
    load.parseTags = parseTags;
    load.matchTags = matchTags;
    load.compareTags = compareTags;
    load.parseTuple = parseTuple;
    load.matchTuple = matchTuple;
    load.compareTuples = compareTuples;
  }
});

// node_modules/node-gyp-build-optional-packages/index.js
var require_node_gyp_build_optional_packages = __commonJS({
  "node_modules/node-gyp-build-optional-packages/index.js"(exports2, module2) {
    var runtimeRequire = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
    if (typeof runtimeRequire.addon === "function") {
      module2.exports = runtimeRequire.addon.bind(runtimeRequire);
    } else {
      module2.exports = require_node_gyp_build();
    }
  }
});

// node_modules/msgpackr-extract/index.js
var require_msgpackr_extract = __commonJS({
  "node_modules/msgpackr-extract/index.js"(exports2, module2) {
    module2.exports = require_node_gyp_build_optional_packages()(__dirname);
  }
});

// node_modules/nanoid/random.js
var require_random = __commonJS({
  "node_modules/nanoid/random.js"(exports2, module2) {
    var crypto = require("crypto");
    if (crypto.randomFillSync) {
      buffers = {};
      module2.exports = function(bytes) {
        var buffer = buffers[bytes];
        if (!buffer) {
          buffer = Buffer.allocUnsafe(bytes);
          if (bytes <= 255) buffers[bytes] = buffer;
        }
        return crypto.randomFillSync(buffer);
      };
    } else {
      module2.exports = crypto.randomBytes;
    }
    var buffers;
  }
});

// node_modules/nanoid/url.js
var require_url = __commonJS({
  "node_modules/nanoid/url.js"(exports2, module2) {
    module2.exports = "-_";
    var i = 36;
    while (i--) {
      module2.exports += i.toString(36);
      i > 9 && (module2.exports += i.toString(36).toUpperCase());
    }
  }
});

// node_modules/nanoid/index.js
var require_nanoid = __commonJS({
  "node_modules/nanoid/index.js"(exports2, module2) {
    var random = require_random();
    var url = require_url();
    module2.exports = function(size) {
      size = size || 21;
      var bytes = random(size);
      var id = "";
      while (size--) {
        id += url[bytes[size] & 63];
      }
      return id;
    };
  }
});

// node_modules/@colyseus/timer/build/index.mjs
var Delayed = class {
  constructor(handler, args, time, type2) {
    this.active = true;
    this.paused = false;
    this.elapsedTime = 0;
    this.handler = handler;
    this.args = args;
    this.time = time;
    this.type = type2;
  }
  tick(deltaTime) {
    if (this.paused) {
      return;
    }
    this.elapsedTime += deltaTime;
    if (this.elapsedTime >= this.time) {
      this.execute();
    }
  }
  execute() {
    this.handler.apply(this, this.args);
    switch (this.type) {
      case 1:
      case 2:
        this.active = false;
        break;
      case 0:
        this.elapsedTime -= this.time;
        break;
    }
  }
  reset() {
    this.elapsedTime = 0;
  }
  pause() {
    this.paused = true;
  }
  resume() {
    this.paused = false;
  }
  clear() {
    this.active = false;
  }
};
var TimerClearedError = class extends Error {
  constructor() {
    super("Timer has been cleared");
  }
};
var Clock = class {
  // number or NodeJS.Timer
  constructor(useInterval = false) {
    this.running = false;
    this.now = typeof window !== "undefined" && window.performance && window.performance.now && window.performance.now.bind(window.performance) || Date.now;
    this.start(useInterval);
  }
  start(useInterval = false) {
    this.deltaTime = 0;
    this.currentTime = this.now();
    this.elapsedTime = 0;
    this.running = true;
    if (useInterval) {
      this._interval = setInterval(this.tick.bind(this), 1e3 / 60);
    }
  }
  stop() {
    this.running = false;
    if (this._interval) {
      clearInterval(this._interval);
    }
  }
  tick(newTime = this.now()) {
    this.deltaTime = newTime - this.currentTime;
    this.currentTime = newTime;
    this.elapsedTime += this.deltaTime;
  }
};
var ClockTimer = class extends Clock {
  constructor(autoStart = false) {
    super(autoStart);
    this.delayed = [];
  }
  /**
   * Re-evaluate all the scheduled timeouts and intervals and execute appropriate handlers.
   * Use this in your own context or not if your passed `autoStart` as `true` in the constructor.
   */
  tick() {
    super.tick();
    let delayedList = this.delayed;
    let i = delayedList.length;
    while (i--) {
      const delayed = delayedList[i];
      if (delayed.active) {
        delayed.tick(this.deltaTime);
      } else {
        delayedList.splice(i, 1);
        continue;
      }
    }
  }
  /**
   * Schedule a function to be called every `time` milliseconds.
   * This `time` minimum value will be tied to the `tick` method of the clock. This means if you use the default `autoStart` value from the constructor, the minimum value will be 16ms. Otherwise it will depend on your `tick` method call.
   *
   * Returns a {@link Delayed} object that can be used to clear the timeout or play around with it.
   */
  setInterval(handler, time, ...args) {
    const delayed = new Delayed(
      handler,
      args,
      time,
      0
      /* Interval */
    );
    this.delayed.push(delayed);
    return delayed;
  }
  /**
   * Schedule a function to be called after a delay.
   *
   * This `time` minimum value will be tied to the `tick` method of the clock. This means if you use the default `autoStart` value from the constructor, the minimum value will be 16ms. Otherwise it will depend on your `tick` method call.
   *
   * Returns a {@link Delayed} object that can be used to clear the timeout or play around with it.
   */
  setTimeout(handler, time, ...args) {
    const delayed = new Delayed(
      handler,
      args,
      time,
      1
      /* Timeout */
    );
    this.delayed.push(delayed);
    return delayed;
  }
  /**
   * A promise that schedule a timeout that will resolves after the given time.
   *
   * If the {@link Delayed} instance is cleared before the time, the promise will be rejected. This happens when the {@link ClockTimer.clear} method is called.
   *
   * For the sake of simplicity of this API, you can only cancel a timeout scheduled with this method with {@link ClockTimer.clear} method (which clears all scheduled timeouts and intervals).
   * If you need fine-tuned control over the timeout, use the {@link ClockTimer.setTimeout} method instead.
   *
   * @example **Inside an async function**
   * ```typescript
   * const timer = new Clock(true);
   * await timer.duration(1000);
   * console.log("1 second later");
   * ```
   *
   * @example **Using the promise**
   * ```typescript
   * const timer = new Clock(true);
   * timer.duration(1000).then(() => console.log("1 second later"));
   * ```
   *
   * @example **Using the promise with error**
   * ```typescript
   * const timer = new Clock(true);
   * timer.duration(1000).then(() => console.log("1 second later")).catch(() => console.log("Timer cleared"));
   * timer.clear();
   * ```
   *
   *
   * @param ms the duration in milliseconds in which the promise will be resolved
   */
  duration(ms) {
    return new Promise((resolve, reject) => {
      const delayed = new Delayed(
        resolve,
        void 0,
        ms,
        2
        /* Async */
      );
      delayed.clear = () => {
        delayed.active = false;
        reject(new TimerClearedError());
      };
      this.delayed.push(delayed);
    });
  }
  /**
   * Delete any scheduled timeout or interval. That will never be executed.
   *
   * If some of the timeouts/intervals are already executed, they will be removed from the list and callback will be garbage collected.
   * For timeout created with {@link ClockTimer.duration}, the promise will be rejected and therefore the unused resolving callback will be garbage collected.
   */
  clear() {
    let i = this.delayed.length;
    while (i--) {
      this.delayed[i].clear();
    }
    this.delayed = [];
  }
};
var src_default = ClockTimer;

// node_modules/@colyseus/greeting-banner/build/index.mjs
var index_default = process.env.COLYSEUS_CLOUD ? String.raw`
   ______      __                              ________                __
  / ____/___  / /_  __________  __  _______   / ____/ /___  __  ______/ /
 / /   / __ \/ / / / / ___/ _ \/ / / / ___/  / /   / / __ \/ / / / __  /
/ /___/ /_/ / / /_/ (__  )  __/ /_/ (__  )  / /___/ / /_/ / /_/ / /_/ /
\____/\____/_/\__, /____/\___/\__,_/____/   \____/_/\____/\__,_/\__,_/
             /____/

❓ Don't hesitate to contact support@colyseus.io if you have any issues.
🚀 Thank you for using Colyseus Cloud
` : String.raw`
       ___      _
      / __\___ | |_   _ ___  ___ _   _ ___
     / /  / _ \| | | | / __|/ _ \ | | / __|
    / /__| (_) | | |_| \__ \  __/ |_| \__ \
    \____/\___/|_|\__, |___/\___|\__,_|___/
                  |___/

     · Multiplayer Framework for Node.js ·

💖 Consider becoming a Sponsor on GitHub → https://github.com/sponsors/endel
🌟 Give us a star on GitHub → https://github.com/colyseus/colyseus
☁️  Deploy and scale your project on Colyseus Cloud → https://cloud.colyseus.io

`;

// node_modules/@colyseus/core/build/Debug.mjs
var import_debug = __toESM(require_src(), 1);

// node_modules/@colyseus/core/build/Logger.mjs
var logger = console;

// node_modules/@colyseus/msgpackr/unpack.js
var decoder;
try {
  decoder = new TextDecoder();
} catch (error) {
}
var src;
var srcEnd;
var position = 0;
var EMPTY_ARRAY = [];
var strings = EMPTY_ARRAY;
var stringPosition = 0;
var currentUnpackr = {};
var currentStructures;
var srcString;
var srcStringStart = 0;
var srcStringEnd = 0;
var bundledStrings;
var referenceMap;
var currentExtensions = [];
var dataView;
var defaultOptions = {
  useRecords: false,
  mapsAsObjects: true
};
var C1Type = class {
};
var C1 = new C1Type();
C1.name = "MessagePack 0xC1";
var sequentialMode = false;
var inlineObjectReadThreshold = 2;
var readStruct;
var onLoadedStructures;
var onSaveState;
try {
  new Function("");
} catch (error) {
  inlineObjectReadThreshold = Infinity;
}
var Unpackr = class _Unpackr {
  constructor(options) {
    if (options) {
      if (options.useRecords === false && options.mapsAsObjects === void 0)
        options.mapsAsObjects = true;
      if (options.sequential && options.trusted !== false) {
        options.trusted = true;
        if (!options.structures && options.useRecords != false) {
          options.structures = [];
          if (!options.maxSharedStructures)
            options.maxSharedStructures = 0;
        }
      }
      if (options.structures)
        options.structures.sharedLength = options.structures.length;
      else if (options.getStructures) {
        (options.structures = []).uninitialized = true;
        options.structures.sharedLength = 0;
      }
      if (options.int64AsNumber) {
        options.int64AsType = "number";
      }
    }
    Object.assign(this, options);
  }
  unpack(source, options) {
    if (src) {
      return saveState(() => {
        clearSource();
        return this ? this.unpack(source, options) : _Unpackr.prototype.unpack.call(defaultOptions, source, options);
      });
    }
    if (!source.buffer && source.constructor === ArrayBuffer)
      source = typeof Buffer !== "undefined" ? Buffer.from(source) : new Uint8Array(source);
    if (typeof options === "object") {
      srcEnd = options.end || source.length;
      position = options.start || 0;
    } else {
      position = 0;
      srcEnd = options > -1 ? options : source.length;
    }
    stringPosition = 0;
    srcStringEnd = 0;
    srcString = null;
    strings = EMPTY_ARRAY;
    bundledStrings = null;
    src = source;
    try {
      dataView = source.dataView || (source.dataView = new DataView(source.buffer, source.byteOffset, source.byteLength));
    } catch (error) {
      src = null;
      if (source instanceof Uint8Array)
        throw error;
      throw new Error("Source must be a Uint8Array or Buffer but was a " + (source && typeof source == "object" ? source.constructor.name : typeof source));
    }
    if (this instanceof _Unpackr) {
      currentUnpackr = this;
      if (this.structures) {
        currentStructures = this.structures;
        return checkedRead(options);
      } else if (!currentStructures || currentStructures.length > 0) {
        currentStructures = [];
      }
    } else {
      currentUnpackr = defaultOptions;
      if (!currentStructures || currentStructures.length > 0)
        currentStructures = [];
    }
    return checkedRead(options);
  }
  unpackMultiple(source, forEach) {
    let values, lastPosition = 0;
    try {
      sequentialMode = true;
      let size = source.length;
      let value = this ? this.unpack(source, size) : defaultUnpackr.unpack(source, size);
      if (forEach) {
        if (forEach(value, lastPosition, position) === false) return;
        while (position < size) {
          lastPosition = position;
          if (forEach(checkedRead(), lastPosition, position) === false) {
            return;
          }
        }
      } else {
        values = [value];
        while (position < size) {
          lastPosition = position;
          values.push(checkedRead());
        }
        return values;
      }
    } catch (error) {
      error.lastPosition = lastPosition;
      error.values = values;
      throw error;
    } finally {
      sequentialMode = false;
      clearSource();
    }
  }
  _mergeStructures(loadedStructures, existingStructures) {
    if (onLoadedStructures)
      loadedStructures = onLoadedStructures.call(this, loadedStructures);
    loadedStructures = loadedStructures || [];
    if (Object.isFrozen(loadedStructures))
      loadedStructures = loadedStructures.map((structure) => structure.slice(0));
    for (let i = 0, l = loadedStructures.length; i < l; i++) {
      let structure = loadedStructures[i];
      if (structure) {
        structure.isShared = true;
        if (i >= 32)
          structure.highByte = i - 32 >> 5;
      }
    }
    loadedStructures.sharedLength = loadedStructures.length;
    for (let id in existingStructures || []) {
      if (id >= 0) {
        let structure = loadedStructures[id];
        let existing = existingStructures[id];
        if (existing) {
          if (structure)
            (loadedStructures.restoreStructures || (loadedStructures.restoreStructures = []))[id] = structure;
          loadedStructures[id] = existing;
        }
      }
    }
    return this.structures = loadedStructures;
  }
  decode(source, options) {
    return this.unpack(source, options);
  }
};
function checkedRead(options) {
  try {
    if (!currentUnpackr.trusted && !sequentialMode) {
      let sharedLength = currentStructures.sharedLength || 0;
      if (sharedLength < currentStructures.length)
        currentStructures.length = sharedLength;
    }
    let result;
    if (currentUnpackr.randomAccessStructure && src[position] < 64 && src[position] >= 32 && readStruct) {
      result = readStruct(src, position, srcEnd, currentUnpackr);
      src = null;
      if (!(options && options.lazy) && result)
        result = result.toJSON();
      position = srcEnd;
    } else
      result = read();
    if (bundledStrings) {
      position = bundledStrings.postBundlePosition;
      bundledStrings = null;
    }
    if (sequentialMode)
      currentStructures.restoreStructures = null;
    if (position == srcEnd) {
      if (currentStructures && currentStructures.restoreStructures)
        restoreStructures();
      currentStructures = null;
      src = null;
      if (referenceMap)
        referenceMap = null;
    } else if (position > srcEnd) {
      throw new Error("Unexpected end of MessagePack data");
    } else if (!sequentialMode) {
      let jsonView;
      try {
        jsonView = JSON.stringify(result, (_, value) => typeof value === "bigint" ? `${value}n` : value).slice(0, 100);
      } catch (error) {
        jsonView = "(JSON view not available " + error + ")";
      }
      throw new Error("Data read, but end of buffer not reached " + jsonView);
    }
    return result;
  } catch (error) {
    if (currentStructures && currentStructures.restoreStructures)
      restoreStructures();
    clearSource();
    if (error instanceof RangeError || error.message.startsWith("Unexpected end of buffer") || position > srcEnd) {
      error.incomplete = true;
    }
    throw error;
  }
}
function restoreStructures() {
  for (let id in currentStructures.restoreStructures) {
    currentStructures[id] = currentStructures.restoreStructures[id];
  }
  currentStructures.restoreStructures = null;
}
function read() {
  let token = src[position++];
  if (token < 160) {
    if (token < 128) {
      if (token < 64)
        return token;
      else {
        let structure = currentStructures[token & 63] || currentUnpackr.getStructures && loadStructures()[token & 63];
        if (structure) {
          if (!structure.read) {
            structure.read = createStructureReader(structure, token & 63);
          }
          return structure.read();
        } else
          return token;
      }
    } else if (token < 144) {
      token -= 128;
      if (currentUnpackr.mapsAsObjects) {
        let object = {};
        for (let i = 0; i < token; i++) {
          let key = readKey();
          if (key === "__proto__")
            key = "__proto_";
          object[key] = read();
        }
        return object;
      } else {
        let map = /* @__PURE__ */ new Map();
        for (let i = 0; i < token; i++) {
          map.set(read(), read());
        }
        return map;
      }
    } else {
      token -= 144;
      let array = new Array(token);
      for (let i = 0; i < token; i++) {
        array[i] = read();
      }
      if (currentUnpackr.freezeData)
        return Object.freeze(array);
      return array;
    }
  } else if (token < 192) {
    let length = token - 160;
    if (srcStringEnd >= position) {
      return srcString.slice(position - srcStringStart, (position += length) - srcStringStart);
    }
    if (srcStringEnd == 0 && srcEnd < 140) {
      let string2 = length < 16 ? shortStringInJS(length) : longStringInJS(length);
      if (string2 != null)
        return string2;
    }
    return readFixedString(length);
  } else {
    let value;
    switch (token) {
      case 192:
        return null;
      case 193:
        if (bundledStrings) {
          value = read();
          if (value > 0)
            return bundledStrings[1].slice(bundledStrings.position1, bundledStrings.position1 += value);
          else
            return bundledStrings[0].slice(bundledStrings.position0, bundledStrings.position0 -= value);
        }
        return C1;
      // "never-used", return special object to denote that
      case 194:
        return false;
      case 195:
        return true;
      case 196:
        value = src[position++];
        if (value === void 0)
          throw new Error("Unexpected end of buffer");
        return readBin(value);
      case 197:
        value = dataView.getUint16(position);
        position += 2;
        return readBin(value);
      case 198:
        value = dataView.getUint32(position);
        position += 4;
        return readBin(value);
      case 199:
        return readExt(src[position++]);
      case 200:
        value = dataView.getUint16(position);
        position += 2;
        return readExt(value);
      case 201:
        value = dataView.getUint32(position);
        position += 4;
        return readExt(value);
      case 202:
        value = dataView.getFloat32(position);
        if (currentUnpackr.useFloat32 > 2) {
          let multiplier = mult10[(src[position] & 127) << 1 | src[position + 1] >> 7];
          position += 4;
          return (multiplier * value + (value > 0 ? 0.5 : -0.5) >> 0) / multiplier;
        }
        position += 4;
        return value;
      case 203:
        value = dataView.getFloat64(position);
        position += 8;
        return value;
      // uint handlers
      case 204:
        return src[position++];
      case 205:
        value = dataView.getUint16(position);
        position += 2;
        return value;
      case 206:
        value = dataView.getUint32(position);
        position += 4;
        return value;
      case 207:
        if (currentUnpackr.int64AsType === "number") {
          value = dataView.getUint32(position) * 4294967296;
          value += dataView.getUint32(position + 4);
        } else if (currentUnpackr.int64AsType === "string") {
          value = dataView.getBigUint64(position).toString();
        } else if (currentUnpackr.int64AsType === "auto") {
          value = dataView.getBigUint64(position);
          if (value <= BigInt(2) << BigInt(52)) value = Number(value);
        } else
          value = dataView.getBigUint64(position);
        position += 8;
        return value;
      // int handlers
      case 208:
        return dataView.getInt8(position++);
      case 209:
        value = dataView.getInt16(position);
        position += 2;
        return value;
      case 210:
        value = dataView.getInt32(position);
        position += 4;
        return value;
      case 211:
        if (currentUnpackr.int64AsType === "number") {
          value = dataView.getInt32(position) * 4294967296;
          value += dataView.getUint32(position + 4);
        } else if (currentUnpackr.int64AsType === "string") {
          value = dataView.getBigInt64(position).toString();
        } else if (currentUnpackr.int64AsType === "auto") {
          value = dataView.getBigInt64(position);
          if (value >= BigInt(-2) << BigInt(52) && value <= BigInt(2) << BigInt(52)) value = Number(value);
        } else
          value = dataView.getBigInt64(position);
        position += 8;
        return value;
      case 212:
        value = src[position++];
        if (value == 114) {
          return recordDefinition(src[position++] & 63);
        } else {
          let extension = currentExtensions[value];
          if (extension) {
            if (extension.read) {
              position++;
              return extension.read(read());
            } else if (extension.noBuffer) {
              position++;
              return extension();
            } else
              return extension(src.subarray(position, ++position));
          } else
            throw new Error("Unknown extension " + value);
        }
      case 213:
        value = src[position];
        if (value == 114) {
          position++;
          return recordDefinition(src[position++] & 63, src[position++]);
        } else
          return readExt(2);
      case 214:
        return readExt(4);
      case 215:
        return readExt(8);
      case 216:
        return readExt(16);
      case 217:
        value = src[position++];
        if (srcStringEnd >= position) {
          return srcString.slice(position - srcStringStart, (position += value) - srcStringStart);
        }
        return readString8(value);
      case 218:
        value = dataView.getUint16(position);
        position += 2;
        if (srcStringEnd >= position) {
          return srcString.slice(position - srcStringStart, (position += value) - srcStringStart);
        }
        return readString16(value);
      case 219:
        value = dataView.getUint32(position);
        position += 4;
        if (srcStringEnd >= position) {
          return srcString.slice(position - srcStringStart, (position += value) - srcStringStart);
        }
        return readString32(value);
      case 220:
        value = dataView.getUint16(position);
        position += 2;
        return readArray(value);
      case 221:
        value = dataView.getUint32(position);
        position += 4;
        return readArray(value);
      case 222:
        value = dataView.getUint16(position);
        position += 2;
        return readMap(value);
      case 223:
        value = dataView.getUint32(position);
        position += 4;
        return readMap(value);
      default:
        if (token >= 224)
          return token - 256;
        if (token === void 0) {
          let error = new Error("Unexpected end of MessagePack data");
          error.incomplete = true;
          throw error;
        }
        throw new Error("Unknown MessagePack token " + token);
    }
  }
}
var validName = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
function createStructureReader(structure, firstId) {
  function readObject() {
    if (readObject.count++ > inlineObjectReadThreshold) {
      let readObject2 = structure.read = new Function("r", "return function(){return " + (currentUnpackr.freezeData ? "Object.freeze" : "") + "({" + structure.map((key) => key === "__proto__" ? "__proto_:r()" : validName.test(key) ? key + ":r()" : "[" + JSON.stringify(key) + "]:r()").join(",") + "})}")(read);
      if (structure.highByte === 0)
        structure.read = createSecondByteReader(firstId, structure.read);
      return readObject2();
    }
    let object = {};
    for (let i = 0, l = structure.length; i < l; i++) {
      let key = structure[i];
      if (key === "__proto__")
        key = "__proto_";
      object[key] = read();
    }
    if (currentUnpackr.freezeData)
      return Object.freeze(object);
    return object;
  }
  readObject.count = 0;
  if (structure.highByte === 0) {
    return createSecondByteReader(firstId, readObject);
  }
  return readObject;
}
var createSecondByteReader = (firstId, read0) => {
  return function() {
    let highByte = src[position++];
    if (highByte === 0)
      return read0();
    let id = firstId < 32 ? -(firstId + (highByte << 5)) : firstId + (highByte << 5);
    let structure = currentStructures[id] || loadStructures()[id];
    if (!structure) {
      throw new Error("Record id is not defined for " + id);
    }
    if (!structure.read)
      structure.read = createStructureReader(structure, firstId);
    return structure.read();
  };
};
function loadStructures() {
  let loadedStructures = saveState(() => {
    src = null;
    return currentUnpackr.getStructures();
  });
  return currentStructures = currentUnpackr._mergeStructures(loadedStructures, currentStructures);
}
var readFixedString = readStringJS;
var readString8 = readStringJS;
var readString16 = readStringJS;
var readString32 = readStringJS;
var isNativeAccelerationEnabled = false;
function setExtractor(extractStrings) {
  isNativeAccelerationEnabled = true;
  readFixedString = readString2(1);
  readString8 = readString2(2);
  readString16 = readString2(3);
  readString32 = readString2(5);
  function readString2(headerLength) {
    return function readString3(length) {
      let string2 = strings[stringPosition++];
      if (string2 == null) {
        if (bundledStrings)
          return readStringJS(length);
        let byteOffset = src.byteOffset;
        let extraction = extractStrings(position - headerLength + byteOffset, srcEnd + byteOffset, src.buffer);
        if (typeof extraction == "string") {
          string2 = extraction;
          strings = EMPTY_ARRAY;
        } else {
          strings = extraction;
          stringPosition = 1;
          srcStringEnd = 1;
          string2 = strings[0];
          if (string2 === void 0)
            throw new Error("Unexpected end of buffer");
        }
      }
      let srcStringLength = string2.length;
      if (srcStringLength <= length) {
        position += length;
        return string2;
      }
      srcString = string2;
      srcStringStart = position;
      srcStringEnd = position + srcStringLength;
      position += length;
      return string2.slice(0, length);
    };
  }
}
function readStringJS(length) {
  let result;
  if (length < 16) {
    if (result = shortStringInJS(length))
      return result;
  }
  if (length > 64 && decoder)
    return decoder.decode(src.subarray(position, position += length));
  const end = position + length;
  const units = [];
  result = "";
  while (position < end) {
    const byte1 = src[position++];
    if ((byte1 & 128) === 0) {
      units.push(byte1);
    } else if ((byte1 & 224) === 192) {
      const byte2 = src[position++] & 63;
      units.push((byte1 & 31) << 6 | byte2);
    } else if ((byte1 & 240) === 224) {
      const byte2 = src[position++] & 63;
      const byte3 = src[position++] & 63;
      units.push((byte1 & 31) << 12 | byte2 << 6 | byte3);
    } else if ((byte1 & 248) === 240) {
      const byte2 = src[position++] & 63;
      const byte3 = src[position++] & 63;
      const byte4 = src[position++] & 63;
      let unit = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
      if (unit > 65535) {
        unit -= 65536;
        units.push(unit >>> 10 & 1023 | 55296);
        unit = 56320 | unit & 1023;
      }
      units.push(unit);
    } else {
      units.push(byte1);
    }
    if (units.length >= 4096) {
      result += fromCharCode.apply(String, units);
      units.length = 0;
    }
  }
  if (units.length > 0) {
    result += fromCharCode.apply(String, units);
  }
  return result;
}
function readString(source, start, length) {
  let existingSrc = src;
  src = source;
  position = start;
  try {
    return readStringJS(length);
  } finally {
    src = existingSrc;
  }
}
function readArray(length) {
  let array = new Array(length);
  for (let i = 0; i < length; i++) {
    array[i] = read();
  }
  if (currentUnpackr.freezeData)
    return Object.freeze(array);
  return array;
}
function readMap(length) {
  if (currentUnpackr.mapsAsObjects) {
    let object = {};
    for (let i = 0; i < length; i++) {
      let key = readKey();
      if (key === "__proto__")
        key = "__proto_";
      object[key] = read();
    }
    return object;
  } else {
    let map = /* @__PURE__ */ new Map();
    for (let i = 0; i < length; i++) {
      map.set(read(), read());
    }
    return map;
  }
}
var fromCharCode = String.fromCharCode;
function longStringInJS(length) {
  let start = position;
  let bytes = new Array(length);
  for (let i = 0; i < length; i++) {
    const byte = src[position++];
    if ((byte & 128) > 0) {
      position = start;
      return;
    }
    bytes[i] = byte;
  }
  return fromCharCode.apply(String, bytes);
}
function shortStringInJS(length) {
  if (length < 4) {
    if (length < 2) {
      if (length === 0)
        return "";
      else {
        let a = src[position++];
        if ((a & 128) > 1) {
          position -= 1;
          return;
        }
        return fromCharCode(a);
      }
    } else {
      let a = src[position++];
      let b = src[position++];
      if ((a & 128) > 0 || (b & 128) > 0) {
        position -= 2;
        return;
      }
      if (length < 3)
        return fromCharCode(a, b);
      let c = src[position++];
      if ((c & 128) > 0) {
        position -= 3;
        return;
      }
      return fromCharCode(a, b, c);
    }
  } else {
    let a = src[position++];
    let b = src[position++];
    let c = src[position++];
    let d = src[position++];
    if ((a & 128) > 0 || (b & 128) > 0 || (c & 128) > 0 || (d & 128) > 0) {
      position -= 4;
      return;
    }
    if (length < 6) {
      if (length === 4)
        return fromCharCode(a, b, c, d);
      else {
        let e = src[position++];
        if ((e & 128) > 0) {
          position -= 5;
          return;
        }
        return fromCharCode(a, b, c, d, e);
      }
    } else if (length < 8) {
      let e = src[position++];
      let f = src[position++];
      if ((e & 128) > 0 || (f & 128) > 0) {
        position -= 6;
        return;
      }
      if (length < 7)
        return fromCharCode(a, b, c, d, e, f);
      let g = src[position++];
      if ((g & 128) > 0) {
        position -= 7;
        return;
      }
      return fromCharCode(a, b, c, d, e, f, g);
    } else {
      let e = src[position++];
      let f = src[position++];
      let g = src[position++];
      let h = src[position++];
      if ((e & 128) > 0 || (f & 128) > 0 || (g & 128) > 0 || (h & 128) > 0) {
        position -= 8;
        return;
      }
      if (length < 10) {
        if (length === 8)
          return fromCharCode(a, b, c, d, e, f, g, h);
        else {
          let i = src[position++];
          if ((i & 128) > 0) {
            position -= 9;
            return;
          }
          return fromCharCode(a, b, c, d, e, f, g, h, i);
        }
      } else if (length < 12) {
        let i = src[position++];
        let j = src[position++];
        if ((i & 128) > 0 || (j & 128) > 0) {
          position -= 10;
          return;
        }
        if (length < 11)
          return fromCharCode(a, b, c, d, e, f, g, h, i, j);
        let k = src[position++];
        if ((k & 128) > 0) {
          position -= 11;
          return;
        }
        return fromCharCode(a, b, c, d, e, f, g, h, i, j, k);
      } else {
        let i = src[position++];
        let j = src[position++];
        let k = src[position++];
        let l = src[position++];
        if ((i & 128) > 0 || (j & 128) > 0 || (k & 128) > 0 || (l & 128) > 0) {
          position -= 12;
          return;
        }
        if (length < 14) {
          if (length === 12)
            return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l);
          else {
            let m = src[position++];
            if ((m & 128) > 0) {
              position -= 13;
              return;
            }
            return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m);
          }
        } else {
          let m = src[position++];
          let n = src[position++];
          if ((m & 128) > 0 || (n & 128) > 0) {
            position -= 14;
            return;
          }
          if (length < 15)
            return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n);
          let o = src[position++];
          if ((o & 128) > 0) {
            position -= 15;
            return;
          }
          return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o);
        }
      }
    }
  }
}
function readOnlyJSString() {
  let token = src[position++];
  let length;
  if (token < 192) {
    length = token - 160;
  } else {
    switch (token) {
      case 217:
        length = src[position++];
        break;
      case 218:
        length = dataView.getUint16(position);
        position += 2;
        break;
      case 219:
        length = dataView.getUint32(position);
        position += 4;
        break;
      default:
        throw new Error("Expected string");
    }
  }
  return readStringJS(length);
}
function readBin(length) {
  return currentUnpackr.copyBuffers ? (
    // specifically use the copying slice (not the node one)
    Uint8Array.prototype.slice.call(src, position, position += length)
  ) : src.subarray(position, position += length);
}
function readExt(length) {
  let type2 = src[position++];
  if (currentExtensions[type2]) {
    let end;
    return currentExtensions[type2](src.subarray(position, end = position += length), (readPosition) => {
      position = readPosition;
      try {
        return read();
      } finally {
        position = end;
      }
    });
  } else
    throw new Error("Unknown extension type " + type2);
}
var keyCache = new Array(4096);
function readKey() {
  let length = src[position++];
  if (length >= 160 && length < 192) {
    length = length - 160;
    if (srcStringEnd >= position)
      return srcString.slice(position - srcStringStart, (position += length) - srcStringStart);
    else if (!(srcStringEnd == 0 && srcEnd < 180))
      return readFixedString(length);
  } else {
    position--;
    return asSafeString(read());
  }
  let key = (length << 5 ^ (length > 1 ? dataView.getUint16(position) : length > 0 ? src[position] : 0)) & 4095;
  let entry = keyCache[key];
  let checkPosition = position;
  let end = position + length - 3;
  let chunk;
  let i = 0;
  if (entry && entry.bytes == length) {
    while (checkPosition < end) {
      chunk = dataView.getUint32(checkPosition);
      if (chunk != entry[i++]) {
        checkPosition = 1879048192;
        break;
      }
      checkPosition += 4;
    }
    end += 3;
    while (checkPosition < end) {
      chunk = src[checkPosition++];
      if (chunk != entry[i++]) {
        checkPosition = 1879048192;
        break;
      }
    }
    if (checkPosition === end) {
      position = checkPosition;
      return entry.string;
    }
    end -= 3;
    checkPosition = position;
  }
  entry = [];
  keyCache[key] = entry;
  entry.bytes = length;
  while (checkPosition < end) {
    chunk = dataView.getUint32(checkPosition);
    entry.push(chunk);
    checkPosition += 4;
  }
  end += 3;
  while (checkPosition < end) {
    chunk = src[checkPosition++];
    entry.push(chunk);
  }
  let string2 = length < 16 ? shortStringInJS(length) : longStringInJS(length);
  if (string2 != null)
    return entry.string = string2;
  return entry.string = readFixedString(length);
}
function asSafeString(property) {
  if (typeof property === "string") return property;
  if (typeof property === "number" || typeof property === "boolean" || typeof property === "bigint") return property.toString();
  if (property == null) return property + "";
  throw new Error("Invalid property type for record", typeof property);
}
var recordDefinition = (id, highByte) => {
  let structure = read().map(asSafeString);
  let firstByte = id;
  if (highByte !== void 0) {
    id = id < 32 ? -((highByte << 5) + id) : (highByte << 5) + id;
    structure.highByte = highByte;
  }
  let existingStructure = currentStructures[id];
  if (existingStructure && (existingStructure.isShared || sequentialMode)) {
    (currentStructures.restoreStructures || (currentStructures.restoreStructures = []))[id] = existingStructure;
  }
  currentStructures[id] = structure;
  structure.read = createStructureReader(structure, firstByte);
  return structure.read();
};
currentExtensions[0] = () => {
};
currentExtensions[0].noBuffer = true;
currentExtensions[66] = (data) => {
  let length = data.length;
  let value = BigInt(data[0] & 128 ? data[0] - 256 : data[0]);
  for (let i = 1; i < length; i++) {
    value <<= /* @__PURE__ */ BigInt("8");
    value += BigInt(data[i]);
  }
  return value;
};
var errors = { Error, TypeError, ReferenceError };
currentExtensions[101] = () => {
  let data = read();
  return (errors[data[0]] || Error)(data[1], { cause: data[2] });
};
currentExtensions[105] = (data) => {
  if (currentUnpackr.structuredClone === false) throw new Error("Structured clone extension is disabled");
  let id = dataView.getUint32(position - 4);
  if (!referenceMap)
    referenceMap = /* @__PURE__ */ new Map();
  let token = src[position];
  let target2;
  if (token >= 144 && token < 160 || token == 220 || token == 221)
    target2 = [];
  else
    target2 = {};
  let refEntry = { target: target2 };
  referenceMap.set(id, refEntry);
  let targetProperties = read();
  if (refEntry.used)
    return Object.assign(target2, targetProperties);
  refEntry.target = targetProperties;
  return targetProperties;
};
currentExtensions[112] = (data) => {
  if (currentUnpackr.structuredClone === false) throw new Error("Structured clone extension is disabled");
  let id = dataView.getUint32(position - 4);
  let refEntry = referenceMap.get(id);
  refEntry.used = true;
  return refEntry.target;
};
currentExtensions[115] = () => new Set(read());
var typedArrays = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((type2) => type2 + "Array");
var glbl = typeof globalThis === "object" ? globalThis : window;
currentExtensions[116] = (data) => {
  let typeCode = data[0];
  let typedArrayName = typedArrays[typeCode];
  if (!typedArrayName) {
    if (typeCode === 16) {
      let ab = new ArrayBuffer(data.length - 1);
      let u8 = new Uint8Array(ab);
      u8.set(data.subarray(1));
      return ab;
    }
    throw new Error("Could not find typed array for code " + typeCode);
  }
  return new glbl[typedArrayName](Uint8Array.prototype.slice.call(data, 1).buffer);
};
currentExtensions[120] = () => {
  let data = read();
  return new RegExp(data[0], data[1]);
};
var TEMP_BUNDLE = [];
currentExtensions[98] = (data) => {
  let dataSize = (data[0] << 24) + (data[1] << 16) + (data[2] << 8) + data[3];
  let dataPosition = position;
  position += dataSize - data.length;
  bundledStrings = TEMP_BUNDLE;
  bundledStrings = [readOnlyJSString(), readOnlyJSString()];
  bundledStrings.position0 = 0;
  bundledStrings.position1 = 0;
  bundledStrings.postBundlePosition = position;
  position = dataPosition;
  return read();
};
currentExtensions[255] = (data) => {
  if (data.length == 4)
    return new Date((data[0] * 16777216 + (data[1] << 16) + (data[2] << 8) + data[3]) * 1e3);
  else if (data.length == 8)
    return new Date(
      ((data[0] << 22) + (data[1] << 14) + (data[2] << 6) + (data[3] >> 2)) / 1e6 + ((data[3] & 3) * 4294967296 + data[4] * 16777216 + (data[5] << 16) + (data[6] << 8) + data[7]) * 1e3
    );
  else if (data.length == 12)
    return new Date(
      ((data[0] << 24) + (data[1] << 16) + (data[2] << 8) + data[3]) / 1e6 + ((data[4] & 128 ? -281474976710656 : 0) + data[6] * 1099511627776 + data[7] * 4294967296 + data[8] * 16777216 + (data[9] << 16) + (data[10] << 8) + data[11]) * 1e3
    );
  else
    return /* @__PURE__ */ new Date("invalid");
};
function saveState(callback) {
  if (onSaveState)
    onSaveState();
  let savedSrcEnd = srcEnd;
  let savedPosition = position;
  let savedStringPosition = stringPosition;
  let savedSrcStringStart = srcStringStart;
  let savedSrcStringEnd = srcStringEnd;
  let savedSrcString = srcString;
  let savedStrings = strings;
  let savedReferenceMap = referenceMap;
  let savedBundledStrings = bundledStrings;
  let savedSrc = new Uint8Array(src.slice(0, srcEnd));
  let savedStructures = currentStructures;
  let savedStructuresContents = currentStructures.slice(0, currentStructures.length);
  let savedPackr = currentUnpackr;
  let savedSequentialMode = sequentialMode;
  let value = callback();
  srcEnd = savedSrcEnd;
  position = savedPosition;
  stringPosition = savedStringPosition;
  srcStringStart = savedSrcStringStart;
  srcStringEnd = savedSrcStringEnd;
  srcString = savedSrcString;
  strings = savedStrings;
  referenceMap = savedReferenceMap;
  bundledStrings = savedBundledStrings;
  src = savedSrc;
  sequentialMode = savedSequentialMode;
  currentStructures = savedStructures;
  currentStructures.splice(0, currentStructures.length, ...savedStructuresContents);
  currentUnpackr = savedPackr;
  dataView = new DataView(src.buffer, src.byteOffset, src.byteLength);
  return value;
}
function clearSource() {
  src = null;
  referenceMap = null;
  currentStructures = null;
}
var mult10 = new Array(147);
for (let i = 0; i < 256; i++) {
  mult10[i] = +("1e" + Math.floor(45.15 - i * 0.30103));
}
var defaultUnpackr = new Unpackr({ useRecords: false });
var unpack = defaultUnpackr.unpack;
var unpackMultiple = defaultUnpackr.unpackMultiple;
var decode = defaultUnpackr.unpack;
var FLOAT32_OPTIONS = {
  NEVER: 0,
  ALWAYS: 1,
  DECIMAL_ROUND: 3,
  DECIMAL_FIT: 4
};
var f32Array = new Float32Array(1);
var u8Array = new Uint8Array(f32Array.buffer, 0, 4);
function setReadStruct(updatedReadStruct, loadedStructs, saveState3) {
  readStruct = updatedReadStruct;
  onLoadedStructures = loadedStructs;
  onSaveState = saveState3;
}

// node_modules/@colyseus/msgpackr/pack.js
var textEncoder;
try {
  textEncoder = new TextEncoder();
} catch (error) {
}
var extensions;
var extensionClasses;
var hasNodeBuffer = typeof Buffer !== "undefined";
var ByteArrayAllocate = hasNodeBuffer ? function(length) {
  return Buffer.allocUnsafeSlow(length);
} : Uint8Array;
var ByteArray = hasNodeBuffer ? Buffer : Uint8Array;
var MAX_BUFFER_SIZE = hasNodeBuffer ? 4294967296 : 2144337920;
var target;
var keysTarget;
var targetView;
var position2 = 0;
var safeEnd;
var bundledStrings2 = null;
var writeStructSlots;
var MAX_BUNDLE_SIZE = 21760;
var hasNonLatin = /[\u0080-\uFFFF]/;
var RECORD_SYMBOL = Symbol("record-id");
var Packr = class extends Unpackr {
  constructor(options) {
    super(options);
    this.offset = 0;
    let typeBuffer;
    let start;
    let hasSharedUpdate;
    let structures;
    let referenceMap2;
    let encodeUtf82 = ByteArray.prototype.utf8Write ? function(string2, position3) {
      return target.utf8Write(string2, position3, 4294967295);
    } : textEncoder && textEncoder.encodeInto ? function(string2, position3) {
      return textEncoder.encodeInto(string2, target.subarray(position3)).written;
    } : false;
    let packr2 = this;
    if (!options)
      options = {};
    let isSequential = options && options.sequential;
    let hasSharedStructures = options.structures || options.saveStructures;
    let maxSharedStructures = options.maxSharedStructures;
    if (maxSharedStructures == null)
      maxSharedStructures = hasSharedStructures ? 32 : 0;
    if (maxSharedStructures > 8160)
      throw new Error("Maximum maxSharedStructure is 8160");
    if (options.structuredClone && options.moreTypes == void 0) {
      this.moreTypes = true;
    }
    let maxOwnStructures = options.maxOwnStructures;
    if (maxOwnStructures == null)
      maxOwnStructures = hasSharedStructures ? 32 : 64;
    if (!this.structures && options.useRecords != false)
      this.structures = [];
    let useTwoByteRecords = maxSharedStructures > 32 || maxOwnStructures + maxSharedStructures > 64;
    let sharedLimitId = maxSharedStructures + 64;
    let maxStructureId = maxSharedStructures + maxOwnStructures + 64;
    if (maxStructureId > 8256) {
      throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
    }
    let recordIdsToRemove = [];
    let transitionsCount = 0;
    let serializationsSinceTransitionRebuild = 0;
    this.pack = this.encode = function(value, encodeOptions) {
      if (!target) {
        target = new ByteArrayAllocate(8192);
        targetView = target.dataView || (target.dataView = new DataView(target.buffer, 0, 8192));
        position2 = 0;
      }
      safeEnd = target.length - 10;
      if (safeEnd - position2 < 2048) {
        target = new ByteArrayAllocate(target.length);
        targetView = target.dataView || (target.dataView = new DataView(target.buffer, 0, target.length));
        safeEnd = target.length - 10;
        position2 = 0;
      } else
        position2 = position2 + 7 & 2147483640;
      start = position2;
      if (encodeOptions & RESERVE_START_SPACE) position2 += encodeOptions & 255;
      referenceMap2 = packr2.structuredClone ? /* @__PURE__ */ new Map() : null;
      if (packr2.bundleStrings && typeof value !== "string") {
        bundledStrings2 = [];
        bundledStrings2.size = Infinity;
      } else
        bundledStrings2 = null;
      structures = packr2.structures;
      if (structures) {
        if (structures.uninitialized)
          structures = packr2._mergeStructures(packr2.getStructures());
        let sharedLength = structures.sharedLength || 0;
        if (sharedLength > maxSharedStructures) {
          throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + structures.sharedLength);
        }
        if (!structures.transitions) {
          structures.transitions = /* @__PURE__ */ Object.create(null);
          for (let i = 0; i < sharedLength; i++) {
            let keys = structures[i];
            if (!keys)
              continue;
            let nextTransition, transition = structures.transitions;
            for (let j = 0, l = keys.length; j < l; j++) {
              let key = keys[j];
              nextTransition = transition[key];
              if (!nextTransition) {
                nextTransition = transition[key] = /* @__PURE__ */ Object.create(null);
              }
              transition = nextTransition;
            }
            transition[RECORD_SYMBOL] = i + 64;
          }
          this.lastNamedStructuresLength = sharedLength;
        }
        if (!isSequential) {
          structures.nextId = sharedLength + 64;
        }
      }
      if (hasSharedUpdate)
        hasSharedUpdate = false;
      let encodingError;
      try {
        if (packr2.randomAccessStructure && value && value.constructor && value.constructor === Object)
          writeStruct2(value);
        else
          pack2(value);
        let lastBundle = bundledStrings2;
        if (bundledStrings2)
          writeBundles(start, pack2, 0);
        if (referenceMap2 && referenceMap2.idsToInsert) {
          let idsToInsert = referenceMap2.idsToInsert.sort((a, b) => a.offset > b.offset ? 1 : -1);
          let i = idsToInsert.length;
          let incrementPosition = -1;
          while (lastBundle && i > 0) {
            let insertionPoint = idsToInsert[--i].offset + start;
            if (insertionPoint < lastBundle.stringsPosition + start && incrementPosition === -1)
              incrementPosition = 0;
            if (insertionPoint > lastBundle.position + start) {
              if (incrementPosition >= 0)
                incrementPosition += 6;
            } else {
              if (incrementPosition >= 0) {
                targetView.setUint32(
                  lastBundle.position + start,
                  targetView.getUint32(lastBundle.position + start) + incrementPosition
                );
                incrementPosition = -1;
              }
              lastBundle = lastBundle.previous;
              i++;
            }
          }
          if (incrementPosition >= 0 && lastBundle) {
            targetView.setUint32(
              lastBundle.position + start,
              targetView.getUint32(lastBundle.position + start) + incrementPosition
            );
          }
          position2 += idsToInsert.length * 6;
          if (position2 > safeEnd)
            makeRoom(position2);
          packr2.offset = position2;
          let serialized = insertIds(target.subarray(start, position2), idsToInsert);
          referenceMap2 = null;
          return serialized;
        }
        packr2.offset = position2;
        if (encodeOptions & REUSE_BUFFER_MODE) {
          target.start = start;
          target.end = position2;
          return target;
        }
        return target.subarray(start, position2);
      } catch (error) {
        encodingError = error;
        throw error;
      } finally {
        if (structures) {
          resetStructures();
          if (hasSharedUpdate && packr2.saveStructures) {
            let sharedLength = structures.sharedLength || 0;
            let returnBuffer = target.subarray(start, position2);
            let newSharedData = prepareStructures(structures, packr2);
            if (!encodingError) {
              if (packr2.saveStructures(newSharedData, newSharedData.isCompatible) === false) {
                return packr2.pack(value, encodeOptions);
              }
              packr2.lastNamedStructuresLength = sharedLength;
              if (target.length > 1073741824) target = null;
              return returnBuffer;
            }
          }
        }
        if (target.length > 1073741824) target = null;
        if (encodeOptions & RESET_BUFFER_MODE)
          position2 = start;
      }
    };
    const resetStructures = () => {
      if (serializationsSinceTransitionRebuild < 10)
        serializationsSinceTransitionRebuild++;
      let sharedLength = structures.sharedLength || 0;
      if (structures.length > sharedLength && !isSequential)
        structures.length = sharedLength;
      if (transitionsCount > 1e4) {
        structures.transitions = null;
        serializationsSinceTransitionRebuild = 0;
        transitionsCount = 0;
        if (recordIdsToRemove.length > 0)
          recordIdsToRemove = [];
      } else if (recordIdsToRemove.length > 0 && !isSequential) {
        for (let i = 0, l = recordIdsToRemove.length; i < l; i++) {
          recordIdsToRemove[i][RECORD_SYMBOL] = 0;
        }
        recordIdsToRemove = [];
      }
    };
    const packArray = (value) => {
      var length = value.length;
      if (length < 16) {
        target[position2++] = 144 | length;
      } else if (length < 65536) {
        target[position2++] = 220;
        target[position2++] = length >> 8;
        target[position2++] = length & 255;
      } else {
        target[position2++] = 221;
        targetView.setUint32(position2, length);
        position2 += 4;
      }
      for (let i = 0; i < length; i++) {
        pack2(value[i]);
      }
    };
    const pack2 = (value) => {
      if (position2 > safeEnd)
        target = makeRoom(position2);
      var type2 = typeof value;
      var length;
      if (type2 === "string") {
        let strLength = value.length;
        if (bundledStrings2 && strLength >= 4 && strLength < 4096) {
          if ((bundledStrings2.size += strLength) > MAX_BUNDLE_SIZE) {
            let extStart;
            let maxBytes2 = (bundledStrings2[0] ? bundledStrings2[0].length * 3 + bundledStrings2[1].length : 0) + 10;
            if (position2 + maxBytes2 > safeEnd)
              target = makeRoom(position2 + maxBytes2);
            let lastBundle;
            if (bundledStrings2.position) {
              lastBundle = bundledStrings2;
              target[position2] = 200;
              position2 += 3;
              target[position2++] = 98;
              extStart = position2 - start;
              position2 += 4;
              writeBundles(start, pack2, 0);
              targetView.setUint16(extStart + start - 3, position2 - start - extStart);
            } else {
              target[position2++] = 214;
              target[position2++] = 98;
              extStart = position2 - start;
              position2 += 4;
            }
            bundledStrings2 = ["", ""];
            bundledStrings2.previous = lastBundle;
            bundledStrings2.size = 0;
            bundledStrings2.position = extStart;
          }
          let twoByte = hasNonLatin.test(value);
          bundledStrings2[twoByte ? 0 : 1] += value;
          target[position2++] = 193;
          pack2(twoByte ? -strLength : strLength);
          return;
        }
        let headerSize;
        if (strLength < 32) {
          headerSize = 1;
        } else if (strLength < 256) {
          headerSize = 2;
        } else if (strLength < 65536) {
          headerSize = 3;
        } else {
          headerSize = 5;
        }
        let maxBytes = strLength * 3;
        if (position2 + maxBytes > safeEnd)
          target = makeRoom(position2 + maxBytes);
        if (strLength < 64 || !encodeUtf82) {
          let i, c1, c2, strPosition = position2 + headerSize;
          for (i = 0; i < strLength; i++) {
            c1 = value.charCodeAt(i);
            if (c1 < 128) {
              target[strPosition++] = c1;
            } else if (c1 < 2048) {
              target[strPosition++] = c1 >> 6 | 192;
              target[strPosition++] = c1 & 63 | 128;
            } else if ((c1 & 64512) === 55296 && ((c2 = value.charCodeAt(i + 1)) & 64512) === 56320) {
              c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
              i++;
              target[strPosition++] = c1 >> 18 | 240;
              target[strPosition++] = c1 >> 12 & 63 | 128;
              target[strPosition++] = c1 >> 6 & 63 | 128;
              target[strPosition++] = c1 & 63 | 128;
            } else {
              target[strPosition++] = c1 >> 12 | 224;
              target[strPosition++] = c1 >> 6 & 63 | 128;
              target[strPosition++] = c1 & 63 | 128;
            }
          }
          length = strPosition - position2 - headerSize;
        } else {
          length = encodeUtf82(value, position2 + headerSize);
        }
        if (length < 32) {
          target[position2++] = 160 | length;
        } else if (length < 256) {
          if (headerSize < 2) {
            target.copyWithin(position2 + 2, position2 + 1, position2 + 1 + length);
          }
          target[position2++] = 217;
          target[position2++] = length;
        } else if (length < 65536) {
          if (headerSize < 3) {
            target.copyWithin(position2 + 3, position2 + 2, position2 + 2 + length);
          }
          target[position2++] = 218;
          target[position2++] = length >> 8;
          target[position2++] = length & 255;
        } else {
          if (headerSize < 5) {
            target.copyWithin(position2 + 5, position2 + 3, position2 + 3 + length);
          }
          target[position2++] = 219;
          targetView.setUint32(position2, length);
          position2 += 4;
        }
        position2 += length;
      } else if (type2 === "number") {
        if (value >>> 0 === value) {
          if (value < 32 || value < 128 && this.useRecords === false || value < 64 && !this.randomAccessStructure) {
            target[position2++] = value;
          } else if (value < 256) {
            target[position2++] = 204;
            target[position2++] = value;
          } else if (value < 65536) {
            target[position2++] = 205;
            target[position2++] = value >> 8;
            target[position2++] = value & 255;
          } else {
            target[position2++] = 206;
            targetView.setUint32(position2, value);
            position2 += 4;
          }
        } else if (value >> 0 === value) {
          if (value >= -32) {
            target[position2++] = 256 + value;
          } else if (value >= -128) {
            target[position2++] = 208;
            target[position2++] = value + 256;
          } else if (value >= -32768) {
            target[position2++] = 209;
            targetView.setInt16(position2, value);
            position2 += 2;
          } else {
            target[position2++] = 210;
            targetView.setInt32(position2, value);
            position2 += 4;
          }
        } else {
          let useFloat32;
          if ((useFloat32 = this.useFloat32) > 0 && value < 4294967296 && value >= -2147483648) {
            target[position2++] = 202;
            targetView.setFloat32(position2, value);
            let xShifted;
            if (useFloat32 < 4 || // this checks for rounding of numbers that were encoded in 32-bit float to nearest significant decimal digit that could be preserved
            (xShifted = value * mult10[(target[position2] & 127) << 1 | target[position2 + 1] >> 7]) >> 0 === xShifted) {
              position2 += 4;
              return;
            } else
              position2--;
          }
          target[position2++] = 203;
          targetView.setFloat64(position2, value);
          position2 += 8;
        }
      } else if (type2 === "object" || type2 === "function") {
        if (!value)
          target[position2++] = 192;
        else {
          if (referenceMap2) {
            let referee = referenceMap2.get(value);
            if (referee) {
              if (!referee.id) {
                let idsToInsert = referenceMap2.idsToInsert || (referenceMap2.idsToInsert = []);
                referee.id = idsToInsert.push(referee);
              }
              target[position2++] = 214;
              target[position2++] = 112;
              targetView.setUint32(position2, referee.id);
              position2 += 4;
              return;
            } else
              referenceMap2.set(value, { offset: position2 - start });
          }
          let constructor = value.constructor;
          if (constructor === Object) {
            writeObject(value);
          } else if (constructor === Array) {
            packArray(value);
          } else if (constructor === Map) {
            if (this.mapAsEmptyObject) target[position2++] = 128;
            else {
              length = value.size;
              if (length < 16) {
                target[position2++] = 128 | length;
              } else if (length < 65536) {
                target[position2++] = 222;
                target[position2++] = length >> 8;
                target[position2++] = length & 255;
              } else {
                target[position2++] = 223;
                targetView.setUint32(position2, length);
                position2 += 4;
              }
              for (let [key, entryValue] of value) {
                pack2(key);
                pack2(entryValue);
              }
            }
          } else {
            for (let i = 0, l = extensions.length; i < l; i++) {
              let extensionClass = extensionClasses[i];
              if (value instanceof extensionClass) {
                let extension = extensions[i];
                if (extension.write) {
                  if (extension.type) {
                    target[position2++] = 212;
                    target[position2++] = extension.type;
                    target[position2++] = 0;
                  }
                  let writeResult = extension.write.call(this, value);
                  if (writeResult === value) {
                    if (Array.isArray(value)) {
                      packArray(value);
                    } else {
                      writeObject(value);
                    }
                  } else {
                    pack2(writeResult);
                  }
                  return;
                }
                let currentTarget = target;
                let currentTargetView = targetView;
                let currentPosition = position2;
                target = null;
                let result;
                try {
                  result = extension.pack.call(this, value, (size) => {
                    target = currentTarget;
                    currentTarget = null;
                    position2 += size;
                    if (position2 > safeEnd)
                      makeRoom(position2);
                    return {
                      target,
                      targetView,
                      position: position2 - size
                    };
                  }, pack2);
                } finally {
                  if (currentTarget) {
                    target = currentTarget;
                    targetView = currentTargetView;
                    position2 = currentPosition;
                    safeEnd = target.length - 10;
                  }
                }
                if (result) {
                  if (result.length + position2 > safeEnd)
                    makeRoom(result.length + position2);
                  position2 = writeExtensionData(result, target, position2, extension.type);
                }
                return;
              }
            }
            if (Array.isArray(value)) {
              packArray(value);
            } else {
              if (value.toJSON) {
                const json = value.toJSON();
                if (json !== value)
                  return pack2(json);
              }
              if (type2 === "function")
                return pack2(this.writeFunction && this.writeFunction(value));
              writeObject(value);
            }
          }
        }
      } else if (type2 === "boolean") {
        target[position2++] = value ? 195 : 194;
      } else if (type2 === "bigint") {
        if (value < BigInt(1) << BigInt(63) && value >= -(BigInt(1) << BigInt(63))) {
          target[position2++] = 211;
          targetView.setBigInt64(position2, value);
        } else if (value < BigInt(1) << BigInt(64) && value > 0) {
          target[position2++] = 207;
          targetView.setBigUint64(position2, value);
        } else {
          if (this.largeBigIntToFloat) {
            target[position2++] = 203;
            targetView.setFloat64(position2, Number(value));
          } else if (this.useBigIntExtension && value < /* @__PURE__ */ BigInt("2") ** /* @__PURE__ */ BigInt("1023") && value > -(/* @__PURE__ */ BigInt("2") ** /* @__PURE__ */ BigInt("1023"))) {
            target[position2++] = 199;
            position2++;
            target[position2++] = 66;
            let bytes = [];
            let alignedSign;
            do {
              let byte = value & /* @__PURE__ */ BigInt("0xff");
              alignedSign = (byte & /* @__PURE__ */ BigInt("0x80")) === (value < /* @__PURE__ */ BigInt("0") ? /* @__PURE__ */ BigInt("0x80") : /* @__PURE__ */ BigInt("0"));
              bytes.push(byte);
              value >>= /* @__PURE__ */ BigInt("8");
            } while (!((value === /* @__PURE__ */ BigInt("0") || value === -/* @__PURE__ */ BigInt("1")) && alignedSign));
            target[position2 - 2] = bytes.length;
            for (let i = bytes.length; i > 0; ) {
              target[position2++] = Number(bytes[--i]);
            }
            return;
          } else {
            throw new RangeError(value + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension or set largeBigIntToFloat to convert to float-64");
          }
        }
        position2 += 8;
      } else if (type2 === "undefined") {
        if (this.encodeUndefinedAsNil)
          target[position2++] = 192;
        else {
          target[position2++] = 212;
          target[position2++] = 0;
          target[position2++] = 0;
        }
      } else {
        throw new Error("Unknown type: " + type2);
      }
    };
    const writePlainObject = this.variableMapSize || this.coercibleKeyAsNumber ? (object) => {
      let keys = Object.keys(object);
      let length = keys.length;
      if (length < 16) {
        target[position2++] = 128 | length;
      } else if (length < 65536) {
        target[position2++] = 222;
        target[position2++] = length >> 8;
        target[position2++] = length & 255;
      } else {
        target[position2++] = 223;
        targetView.setUint32(position2, length);
        position2 += 4;
      }
      let key;
      if (this.coercibleKeyAsNumber) {
        for (let i = 0; i < length; i++) {
          key = keys[i];
          let num = Number(key);
          pack2(isNaN(num) ? key : num);
          pack2(object[key]);
        }
      } else {
        for (let i = 0; i < length; i++) {
          pack2(key = keys[i]);
          pack2(object[key]);
        }
      }
    } : (object) => {
      target[position2++] = 222;
      let objectOffset = position2 - start;
      position2 += 2;
      let size = 0;
      for (let key in object) {
        if (typeof object.hasOwnProperty !== "function" || object.hasOwnProperty(key)) {
          pack2(key);
          pack2(object[key]);
          size++;
        }
      }
      target[objectOffset++ + start] = size >> 8;
      target[objectOffset + start] = size & 255;
    };
    const writeRecord = this.useRecords === false ? writePlainObject : options.progressiveRecords && !useTwoByteRecords ? (
      // this is about 2% faster for highly stable structures, since it only requires one for-in loop (but much more expensive when new structure needs to be written)
      (object) => {
        let nextTransition, transition = structures.transitions || (structures.transitions = /* @__PURE__ */ Object.create(null));
        let objectOffset = position2++ - start;
        let wroteKeys;
        for (let key in object) {
          if (typeof object.hasOwnProperty !== "function" || object.hasOwnProperty(key)) {
            nextTransition = transition[key];
            if (nextTransition)
              transition = nextTransition;
            else {
              let keys = Object.keys(object);
              let lastTransition = transition;
              transition = structures.transitions;
              let newTransitions = 0;
              for (let i = 0, l = keys.length; i < l; i++) {
                let key2 = keys[i];
                nextTransition = transition[key2];
                if (!nextTransition) {
                  nextTransition = transition[key2] = /* @__PURE__ */ Object.create(null);
                  newTransitions++;
                }
                transition = nextTransition;
              }
              if (objectOffset + start + 1 == position2) {
                position2--;
                newRecord(transition, keys, newTransitions);
              } else
                insertNewRecord(transition, keys, objectOffset, newTransitions);
              wroteKeys = true;
              transition = lastTransition[key];
            }
            pack2(object[key]);
          }
        }
        if (!wroteKeys) {
          let recordId = transition[RECORD_SYMBOL];
          if (recordId)
            target[objectOffset + start] = recordId;
          else
            insertNewRecord(transition, Object.keys(object), objectOffset, 0);
        }
      }
    ) : (object) => {
      let nextTransition, transition = structures.transitions || (structures.transitions = /* @__PURE__ */ Object.create(null));
      let newTransitions = 0;
      for (let key in object) if (typeof object.hasOwnProperty !== "function" || object.hasOwnProperty(key)) {
        nextTransition = transition[key];
        if (!nextTransition) {
          nextTransition = transition[key] = /* @__PURE__ */ Object.create(null);
          newTransitions++;
        }
        transition = nextTransition;
      }
      let recordId = transition[RECORD_SYMBOL];
      if (recordId) {
        if (recordId >= 96 && useTwoByteRecords) {
          target[position2++] = ((recordId -= 96) & 31) + 96;
          target[position2++] = recordId >> 5;
        } else
          target[position2++] = recordId;
      } else {
        newRecord(transition, transition.__keys__ || Object.keys(object), newTransitions);
      }
      for (let key in object)
        if (typeof object.hasOwnProperty !== "function" || object.hasOwnProperty(key)) {
          pack2(object[key]);
        }
    };
    const checkUseRecords = typeof this.useRecords == "function" && this.useRecords;
    const writeObject = checkUseRecords ? (object) => {
      checkUseRecords(object) ? writeRecord(object) : writePlainObject(object);
    } : writeRecord;
    const makeRoom = (end) => {
      let newSize;
      if (end > 16777216) {
        if (end - start > MAX_BUFFER_SIZE)
          throw new Error("Packed buffer would be larger than maximum buffer size");
        newSize = Math.min(
          MAX_BUFFER_SIZE,
          Math.round(Math.max((end - start) * (end > 67108864 ? 1.25 : 2), 4194304) / 4096) * 4096
        );
      } else
        newSize = (Math.max(end - start << 2, target.length - 1) >> 12) + 1 << 12;
      let newBuffer = new ByteArrayAllocate(newSize);
      targetView = newBuffer.dataView || (newBuffer.dataView = new DataView(newBuffer.buffer, 0, newSize));
      end = Math.min(end, target.length);
      if (target.copy)
        target.copy(newBuffer, 0, start, end);
      else
        newBuffer.set(target.slice(start, end));
      position2 -= start;
      start = 0;
      safeEnd = newBuffer.length - 10;
      return target = newBuffer;
    };
    const newRecord = (transition, keys, newTransitions) => {
      let recordId = structures.nextId;
      if (!recordId)
        recordId = 64;
      if (recordId < sharedLimitId && this.shouldShareStructure && !this.shouldShareStructure(keys)) {
        recordId = structures.nextOwnId;
        if (!(recordId < maxStructureId))
          recordId = sharedLimitId;
        structures.nextOwnId = recordId + 1;
      } else {
        if (recordId >= maxStructureId)
          recordId = sharedLimitId;
        structures.nextId = recordId + 1;
      }
      let highByte = keys.highByte = recordId >= 96 && useTwoByteRecords ? recordId - 96 >> 5 : -1;
      transition[RECORD_SYMBOL] = recordId;
      transition.__keys__ = keys;
      structures[recordId - 64] = keys;
      if (recordId < sharedLimitId) {
        keys.isShared = true;
        structures.sharedLength = recordId - 63;
        hasSharedUpdate = true;
        if (highByte >= 0) {
          target[position2++] = (recordId & 31) + 96;
          target[position2++] = highByte;
        } else {
          target[position2++] = recordId;
        }
      } else {
        if (highByte >= 0) {
          target[position2++] = 213;
          target[position2++] = 114;
          target[position2++] = (recordId & 31) + 96;
          target[position2++] = highByte;
        } else {
          target[position2++] = 212;
          target[position2++] = 114;
          target[position2++] = recordId;
        }
        if (newTransitions)
          transitionsCount += serializationsSinceTransitionRebuild * newTransitions;
        if (recordIdsToRemove.length >= maxOwnStructures)
          recordIdsToRemove.shift()[RECORD_SYMBOL] = 0;
        recordIdsToRemove.push(transition);
        pack2(keys);
      }
    };
    const insertNewRecord = (transition, keys, insertionOffset, newTransitions) => {
      let mainTarget = target;
      let mainPosition = position2;
      let mainSafeEnd = safeEnd;
      let mainStart = start;
      target = keysTarget;
      position2 = 0;
      start = 0;
      if (!target)
        keysTarget = target = new ByteArrayAllocate(8192);
      safeEnd = target.length - 10;
      newRecord(transition, keys, newTransitions);
      keysTarget = target;
      let keysPosition = position2;
      target = mainTarget;
      position2 = mainPosition;
      safeEnd = mainSafeEnd;
      start = mainStart;
      if (keysPosition > 1) {
        let newEnd = position2 + keysPosition - 1;
        if (newEnd > safeEnd)
          makeRoom(newEnd);
        let insertionPosition = insertionOffset + start;
        target.copyWithin(insertionPosition + keysPosition, insertionPosition + 1, position2);
        target.set(keysTarget.slice(0, keysPosition), insertionPosition);
        position2 = newEnd;
      } else {
        target[insertionOffset + start] = keysTarget[0];
      }
    };
    const writeStruct2 = (object) => {
      let newPosition = writeStructSlots(object, target, start, position2, structures, makeRoom, (value, newPosition2, notifySharedUpdate) => {
        if (notifySharedUpdate)
          return hasSharedUpdate = true;
        position2 = newPosition2;
        let startTarget = target;
        pack2(value);
        resetStructures();
        if (startTarget !== target) {
          return { position: position2, targetView, target };
        }
        return position2;
      }, this);
      if (newPosition === 0)
        return writeObject(object);
      position2 = newPosition;
    };
  }
  useBuffer(buffer) {
    target = buffer;
    targetView = new DataView(target.buffer, target.byteOffset, target.byteLength);
    position2 = 0;
  }
  set position(value) {
    position2 = value;
  }
  get position() {
    return position2;
  }
  set buffer(buffer) {
    target = buffer;
  }
  get buffer() {
    return target;
  }
  clearSharedData() {
    if (this.structures)
      this.structures = [];
    if (this.typedStructs)
      this.typedStructs = [];
  }
};
extensionClasses = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, C1Type];
extensions = [{
  pack(date, allocateForWrite, pack2) {
    let seconds = date.getTime() / 1e3;
    if ((this.useTimestamp32 || date.getMilliseconds() === 0) && seconds >= 0 && seconds < 4294967296) {
      let { target: target2, targetView: targetView2, position: position3 } = allocateForWrite(6);
      target2[position3++] = 214;
      target2[position3++] = 255;
      targetView2.setUint32(position3, seconds);
    } else if (seconds > 0 && seconds < 4294967296) {
      let { target: target2, targetView: targetView2, position: position3 } = allocateForWrite(10);
      target2[position3++] = 215;
      target2[position3++] = 255;
      targetView2.setUint32(position3, date.getMilliseconds() * 4e6 + (seconds / 1e3 / 4294967296 >> 0));
      targetView2.setUint32(position3 + 4, seconds);
    } else if (isNaN(seconds)) {
      if (this.onInvalidDate) {
        allocateForWrite(0);
        return pack2(this.onInvalidDate());
      }
      let { target: target2, targetView: targetView2, position: position3 } = allocateForWrite(3);
      target2[position3++] = 212;
      target2[position3++] = 255;
      target2[position3++] = 255;
    } else {
      let { target: target2, targetView: targetView2, position: position3 } = allocateForWrite(15);
      target2[position3++] = 199;
      target2[position3++] = 12;
      target2[position3++] = 255;
      targetView2.setUint32(position3, date.getMilliseconds() * 1e6);
      targetView2.setBigInt64(position3 + 4, BigInt(Math.floor(seconds)));
    }
  }
}, {
  pack(set, allocateForWrite, pack2) {
    if (this.setAsEmptyObject) {
      allocateForWrite(0);
      return pack2({});
    }
    let array = Array.from(set);
    let { target: target2, position: position3 } = allocateForWrite(this.moreTypes ? 3 : 0);
    if (this.moreTypes) {
      target2[position3++] = 212;
      target2[position3++] = 115;
      target2[position3++] = 0;
    }
    pack2(array);
  }
}, {
  pack(error, allocateForWrite, pack2) {
    let { target: target2, position: position3 } = allocateForWrite(this.moreTypes ? 3 : 0);
    if (this.moreTypes) {
      target2[position3++] = 212;
      target2[position3++] = 101;
      target2[position3++] = 0;
    }
    pack2([error.name, error.message, error.cause]);
  }
}, {
  pack(regex, allocateForWrite, pack2) {
    let { target: target2, position: position3 } = allocateForWrite(this.moreTypes ? 3 : 0);
    if (this.moreTypes) {
      target2[position3++] = 212;
      target2[position3++] = 120;
      target2[position3++] = 0;
    }
    pack2([regex.source, regex.flags]);
  }
}, {
  pack(arrayBuffer, allocateForWrite) {
    if (this.moreTypes)
      writeExtBuffer(arrayBuffer, 16, allocateForWrite);
    else
      writeBuffer(hasNodeBuffer ? Buffer.from(arrayBuffer) : new Uint8Array(arrayBuffer), allocateForWrite);
  }
}, {
  pack(typedArray, allocateForWrite) {
    let constructor = typedArray.constructor;
    if (constructor !== ByteArray && this.moreTypes)
      writeExtBuffer(typedArray, typedArrays.indexOf(constructor.name), allocateForWrite);
    else
      writeBuffer(typedArray, allocateForWrite);
  }
}, {
  pack(c1, allocateForWrite) {
    let { target: target2, position: position3 } = allocateForWrite(1);
    target2[position3] = 193;
  }
}];
function writeExtBuffer(typedArray, type2, allocateForWrite, encode3) {
  let length = typedArray.byteLength;
  if (length + 1 < 256) {
    var { target: target2, position: position3 } = allocateForWrite(4 + length);
    target2[position3++] = 199;
    target2[position3++] = length + 1;
  } else if (length + 1 < 65536) {
    var { target: target2, position: position3 } = allocateForWrite(5 + length);
    target2[position3++] = 200;
    target2[position3++] = length + 1 >> 8;
    target2[position3++] = length + 1 & 255;
  } else {
    var { target: target2, position: position3, targetView: targetView2 } = allocateForWrite(7 + length);
    target2[position3++] = 201;
    targetView2.setUint32(position3, length + 1);
    position3 += 4;
  }
  target2[position3++] = 116;
  target2[position3++] = type2;
  if (!typedArray.buffer) typedArray = new Uint8Array(typedArray);
  target2.set(new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength), position3);
}
function writeBuffer(buffer, allocateForWrite) {
  let length = buffer.byteLength;
  var target2, position3;
  if (length < 256) {
    var { target: target2, position: position3 } = allocateForWrite(length + 2);
    target2[position3++] = 196;
    target2[position3++] = length;
  } else if (length < 65536) {
    var { target: target2, position: position3 } = allocateForWrite(length + 3);
    target2[position3++] = 197;
    target2[position3++] = length >> 8;
    target2[position3++] = length & 255;
  } else {
    var { target: target2, position: position3, targetView: targetView2 } = allocateForWrite(length + 5);
    target2[position3++] = 198;
    targetView2.setUint32(position3, length);
    position3 += 4;
  }
  target2.set(buffer, position3);
}
function writeExtensionData(result, target2, position3, type2) {
  let length = result.length;
  switch (length) {
    case 1:
      target2[position3++] = 212;
      break;
    case 2:
      target2[position3++] = 213;
      break;
    case 4:
      target2[position3++] = 214;
      break;
    case 8:
      target2[position3++] = 215;
      break;
    case 16:
      target2[position3++] = 216;
      break;
    default:
      if (length < 256) {
        target2[position3++] = 199;
        target2[position3++] = length;
      } else if (length < 65536) {
        target2[position3++] = 200;
        target2[position3++] = length >> 8;
        target2[position3++] = length & 255;
      } else {
        target2[position3++] = 201;
        target2[position3++] = length >> 24;
        target2[position3++] = length >> 16 & 255;
        target2[position3++] = length >> 8 & 255;
        target2[position3++] = length & 255;
      }
  }
  target2[position3++] = type2;
  target2.set(result, position3);
  position3 += length;
  return position3;
}
function insertIds(serialized, idsToInsert) {
  let nextId;
  let distanceToMove = idsToInsert.length * 6;
  let lastEnd = serialized.length - distanceToMove;
  while (nextId = idsToInsert.pop()) {
    let offset = nextId.offset;
    let id = nextId.id;
    serialized.copyWithin(offset + distanceToMove, offset, lastEnd);
    distanceToMove -= 6;
    let position3 = offset + distanceToMove;
    serialized[position3++] = 214;
    serialized[position3++] = 105;
    serialized[position3++] = id >> 24;
    serialized[position3++] = id >> 16 & 255;
    serialized[position3++] = id >> 8 & 255;
    serialized[position3++] = id & 255;
    lastEnd = offset;
  }
  return serialized;
}
function writeBundles(start, pack2, incrementPosition) {
  if (bundledStrings2.length > 0) {
    targetView.setUint32(bundledStrings2.position + start, position2 + incrementPosition - bundledStrings2.position - start);
    bundledStrings2.stringsPosition = position2 - start;
    let writeStrings = bundledStrings2;
    bundledStrings2 = null;
    pack2(writeStrings[0]);
    pack2(writeStrings[1]);
  }
}
function prepareStructures(structures, packr2) {
  structures.isCompatible = (existingStructures) => {
    let compatible = !existingStructures || (packr2.lastNamedStructuresLength || 0) === existingStructures.length;
    if (!compatible)
      packr2._mergeStructures(existingStructures);
    return compatible;
  };
  return structures;
}
function setWriteStructSlots(writeSlots, makeStructures) {
  writeStructSlots = writeSlots;
  prepareStructures = makeStructures;
}
var defaultPackr = new Packr({ useRecords: false });
var pack = defaultPackr.pack;
var encode = defaultPackr.pack;
var { NEVER, ALWAYS, DECIMAL_ROUND, DECIMAL_FIT } = FLOAT32_OPTIONS;
var REUSE_BUFFER_MODE = 512;
var RESET_BUFFER_MODE = 1024;
var RESERVE_START_SPACE = 2048;

// node_modules/@colyseus/msgpackr/struct.js
var ASCII = 3;
var NUMBER = 0;
var UTF8 = 2;
var OBJECT_DATA = 1;
var DATE = 16;
var TYPE_NAMES = ["num", "object", "string", "ascii"];
TYPE_NAMES[DATE] = "date";
var float32Headers = [false, true, true, false, false, true, true, false];
var evalSupported;
try {
  new Function("");
  evalSupported = true;
} catch (error) {
}
var updatedPosition;
var hasNodeBuffer2 = typeof Buffer !== "undefined";
var textEncoder2;
var currentSource;
try {
  textEncoder2 = new TextEncoder();
} catch (error) {
}
var encodeUtf8 = hasNodeBuffer2 ? function(target2, string2, position3) {
  return target2.utf8Write(string2, position3, 4294967295);
} : textEncoder2 && textEncoder2.encodeInto ? function(target2, string2, position3) {
  return textEncoder2.encodeInto(string2, target2.subarray(position3)).written;
} : false;
var TYPE = Symbol("type");
var PARENT = Symbol("parent");
setWriteStructSlots(writeStruct, prepareStructures2);
function writeStruct(object, target2, encodingStart, position3, structures, makeRoom, pack2, packr2) {
  let typedStructs = packr2.typedStructs || (packr2.typedStructs = []);
  let targetView2 = target2.dataView;
  let refsStartPosition = (typedStructs.lastStringStart || 100) + position3;
  let safeEnd2 = target2.length - 10;
  let start = position3;
  if (position3 > safeEnd2) {
    target2 = makeRoom(position3);
    targetView2 = target2.dataView;
    position3 -= encodingStart;
    start -= encodingStart;
    refsStartPosition -= encodingStart;
    encodingStart = 0;
    safeEnd2 = target2.length - 10;
  }
  let refOffset, refPosition = refsStartPosition;
  let transition = typedStructs.transitions || (typedStructs.transitions = /* @__PURE__ */ Object.create(null));
  let nextId = typedStructs.nextId || typedStructs.length;
  let headerSize = nextId < 15 ? 1 : nextId < 240 ? 2 : nextId < 61440 ? 3 : nextId < 15728640 ? 4 : 0;
  if (headerSize === 0)
    return 0;
  position3 += headerSize;
  let queuedReferences = [];
  let usedAscii0;
  let keyIndex = 0;
  for (let key in object) {
    let value = object[key];
    let nextTransition = transition[key];
    if (!nextTransition) {
      transition[key] = nextTransition = {
        key,
        parent: transition,
        enumerationOffset: 0,
        ascii0: null,
        ascii8: null,
        num8: null,
        string16: null,
        object16: null,
        num32: null,
        float64: null,
        date64: null
      };
    }
    if (position3 > safeEnd2) {
      target2 = makeRoom(position3);
      targetView2 = target2.dataView;
      position3 -= encodingStart;
      start -= encodingStart;
      refsStartPosition -= encodingStart;
      refPosition -= encodingStart;
      encodingStart = 0;
      safeEnd2 = target2.length - 10;
    }
    switch (typeof value) {
      case "number":
        let number2 = value;
        if (nextId < 200 || !nextTransition.num64) {
          if (number2 >> 0 === number2 && number2 < 536870912 && number2 > -520093696) {
            if (number2 < 246 && number2 >= 0 && (nextTransition.num8 && !(nextId > 200 && nextTransition.num32) || number2 < 32 && !nextTransition.num32)) {
              transition = nextTransition.num8 || createTypeTransition(nextTransition, NUMBER, 1);
              target2[position3++] = number2;
            } else {
              transition = nextTransition.num32 || createTypeTransition(nextTransition, NUMBER, 4);
              targetView2.setUint32(position3, number2, true);
              position3 += 4;
            }
            break;
          } else if (number2 < 4294967296 && number2 >= -2147483648) {
            targetView2.setFloat32(position3, number2, true);
            if (float32Headers[target2[position3 + 3] >>> 5]) {
              let xShifted;
              if ((xShifted = number2 * mult10[(target2[position3 + 3] & 127) << 1 | target2[position3 + 2] >> 7]) >> 0 === xShifted) {
                transition = nextTransition.num32 || createTypeTransition(nextTransition, NUMBER, 4);
                position3 += 4;
                break;
              }
            }
          }
        }
        transition = nextTransition.num64 || createTypeTransition(nextTransition, NUMBER, 8);
        targetView2.setFloat64(position3, number2, true);
        position3 += 8;
        break;
      case "string":
        let strLength = value.length;
        refOffset = refPosition - refsStartPosition;
        if ((strLength << 2) + refPosition > safeEnd2) {
          target2 = makeRoom((strLength << 2) + refPosition);
          targetView2 = target2.dataView;
          position3 -= encodingStart;
          start -= encodingStart;
          refsStartPosition -= encodingStart;
          refPosition -= encodingStart;
          encodingStart = 0;
          safeEnd2 = target2.length - 10;
        }
        if (strLength > 65280 + refOffset >> 2) {
          queuedReferences.push(key, value, position3 - start);
          break;
        }
        let isNotAscii;
        let strStart = refPosition;
        if (strLength < 64) {
          let i, c1, c2;
          for (i = 0; i < strLength; i++) {
            c1 = value.charCodeAt(i);
            if (c1 < 128) {
              target2[refPosition++] = c1;
            } else if (c1 < 2048) {
              isNotAscii = true;
              target2[refPosition++] = c1 >> 6 | 192;
              target2[refPosition++] = c1 & 63 | 128;
            } else if ((c1 & 64512) === 55296 && ((c2 = value.charCodeAt(i + 1)) & 64512) === 56320) {
              isNotAscii = true;
              c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
              i++;
              target2[refPosition++] = c1 >> 18 | 240;
              target2[refPosition++] = c1 >> 12 & 63 | 128;
              target2[refPosition++] = c1 >> 6 & 63 | 128;
              target2[refPosition++] = c1 & 63 | 128;
            } else {
              isNotAscii = true;
              target2[refPosition++] = c1 >> 12 | 224;
              target2[refPosition++] = c1 >> 6 & 63 | 128;
              target2[refPosition++] = c1 & 63 | 128;
            }
          }
        } else {
          refPosition += encodeUtf8(target2, value, refPosition);
          isNotAscii = refPosition - strStart > strLength;
        }
        if (refOffset < 160 || refOffset < 246 && (nextTransition.ascii8 || nextTransition.string8)) {
          if (isNotAscii) {
            if (!(transition = nextTransition.string8)) {
              if (typedStructs.length > 10 && (transition = nextTransition.ascii8)) {
                transition.__type = UTF8;
                nextTransition.ascii8 = null;
                nextTransition.string8 = transition;
                pack2(null, 0, true);
              } else {
                transition = createTypeTransition(nextTransition, UTF8, 1);
              }
            }
          } else if (refOffset === 0 && !usedAscii0) {
            usedAscii0 = true;
            transition = nextTransition.ascii0 || createTypeTransition(nextTransition, ASCII, 0);
            break;
          } else if (!(transition = nextTransition.ascii8) && !(typedStructs.length > 10 && (transition = nextTransition.string8)))
            transition = createTypeTransition(nextTransition, ASCII, 1);
          target2[position3++] = refOffset;
        } else {
          transition = nextTransition.string16 || createTypeTransition(nextTransition, UTF8, 2);
          targetView2.setUint16(position3, refOffset, true);
          position3 += 2;
        }
        break;
      case "object":
        if (value) {
          if (value.constructor === Date) {
            transition = nextTransition.date64 || createTypeTransition(nextTransition, DATE, 8);
            targetView2.setFloat64(position3, value.getTime(), true);
            position3 += 8;
          } else {
            queuedReferences.push(key, value, keyIndex);
          }
          break;
        } else {
          nextTransition = anyType(nextTransition, position3, targetView2, -10);
          if (nextTransition) {
            transition = nextTransition;
            position3 = updatedPosition;
          } else queuedReferences.push(key, value, keyIndex);
        }
        break;
      case "boolean":
        transition = nextTransition.num8 || nextTransition.ascii8 || createTypeTransition(nextTransition, NUMBER, 1);
        target2[position3++] = value ? 249 : 248;
        break;
      case "undefined":
        nextTransition = anyType(nextTransition, position3, targetView2, -9);
        if (nextTransition) {
          transition = nextTransition;
          position3 = updatedPosition;
        } else queuedReferences.push(key, value, keyIndex);
        break;
      default:
        queuedReferences.push(key, value, keyIndex);
    }
    keyIndex++;
  }
  for (let i = 0, l = queuedReferences.length; i < l; ) {
    let key = queuedReferences[i++];
    let value = queuedReferences[i++];
    let propertyIndex = queuedReferences[i++];
    let nextTransition = transition[key];
    if (!nextTransition) {
      transition[key] = nextTransition = {
        key,
        parent: transition,
        enumerationOffset: propertyIndex - keyIndex,
        ascii0: null,
        ascii8: null,
        num8: null,
        string16: null,
        object16: null,
        num32: null,
        float64: null
      };
    }
    let newPosition;
    if (value) {
      let size;
      refOffset = refPosition - refsStartPosition;
      if (refOffset < 65280) {
        transition = nextTransition.object16;
        if (transition)
          size = 2;
        else if (transition = nextTransition.object32)
          size = 4;
        else {
          transition = createTypeTransition(nextTransition, OBJECT_DATA, 2);
          size = 2;
        }
      } else {
        transition = nextTransition.object32 || createTypeTransition(nextTransition, OBJECT_DATA, 4);
        size = 4;
      }
      newPosition = pack2(value, refPosition);
      if (typeof newPosition === "object") {
        refPosition = newPosition.position;
        targetView2 = newPosition.targetView;
        target2 = newPosition.target;
        refsStartPosition -= encodingStart;
        position3 -= encodingStart;
        start -= encodingStart;
        encodingStart = 0;
      } else
        refPosition = newPosition;
      if (size === 2) {
        targetView2.setUint16(position3, refOffset, true);
        position3 += 2;
      } else {
        targetView2.setUint32(position3, refOffset, true);
        position3 += 4;
      }
    } else {
      transition = nextTransition.object16 || createTypeTransition(nextTransition, OBJECT_DATA, 2);
      targetView2.setInt16(position3, value === null ? -10 : -9, true);
      position3 += 2;
    }
    keyIndex++;
  }
  let recordId = transition[RECORD_SYMBOL];
  if (recordId == null) {
    recordId = packr2.typedStructs.length;
    let structure = [];
    let nextTransition = transition;
    let key, type2;
    while ((type2 = nextTransition.__type) !== void 0) {
      let size = nextTransition.__size;
      nextTransition = nextTransition.__parent;
      key = nextTransition.key;
      let property = [type2, size, key];
      if (nextTransition.enumerationOffset)
        property.push(nextTransition.enumerationOffset);
      structure.push(property);
      nextTransition = nextTransition.parent;
    }
    structure.reverse();
    transition[RECORD_SYMBOL] = recordId;
    packr2.typedStructs[recordId] = structure;
    pack2(null, 0, true);
  }
  switch (headerSize) {
    case 1:
      if (recordId >= 16) return 0;
      target2[start] = recordId + 32;
      break;
    case 2:
      if (recordId >= 256) return 0;
      target2[start] = 56;
      target2[start + 1] = recordId;
      break;
    case 3:
      if (recordId >= 65536) return 0;
      target2[start] = 57;
      targetView2.setUint16(start + 1, recordId, true);
      break;
    case 4:
      if (recordId >= 16777216) return 0;
      targetView2.setUint32(start, (recordId << 8) + 58, true);
      break;
  }
  if (position3 < refsStartPosition) {
    if (refsStartPosition === refPosition)
      return position3;
    target2.copyWithin(position3, refsStartPosition, refPosition);
    refPosition += position3 - refsStartPosition;
    typedStructs.lastStringStart = position3 - start;
  } else if (position3 > refsStartPosition) {
    if (refsStartPosition === refPosition)
      return position3;
    typedStructs.lastStringStart = position3 - start;
    return writeStruct(object, target2, encodingStart, start, structures, makeRoom, pack2, packr2);
  }
  return refPosition;
}
function anyType(transition, position3, targetView2, value) {
  let nextTransition;
  if (nextTransition = transition.ascii8 || transition.num8) {
    targetView2.setInt8(position3, value, true);
    updatedPosition = position3 + 1;
    return nextTransition;
  }
  if (nextTransition = transition.string16 || transition.object16) {
    targetView2.setInt16(position3, value, true);
    updatedPosition = position3 + 2;
    return nextTransition;
  }
  if (nextTransition = transition.num32) {
    targetView2.setUint32(position3, 3758096640 + value, true);
    updatedPosition = position3 + 4;
    return nextTransition;
  }
  if (nextTransition = transition.num64) {
    targetView2.setFloat64(position3, NaN, true);
    targetView2.setInt8(position3, value);
    updatedPosition = position3 + 8;
    return nextTransition;
  }
  updatedPosition = position3;
  return;
}
function createTypeTransition(transition, type2, size) {
  let typeName = TYPE_NAMES[type2] + (size << 3);
  let newTransition = transition[typeName] || (transition[typeName] = /* @__PURE__ */ Object.create(null));
  newTransition.__type = type2;
  newTransition.__size = size;
  newTransition.__parent = transition;
  return newTransition;
}
function onLoadedStructures2(sharedData) {
  if (!(sharedData instanceof Map))
    return sharedData;
  let typed = sharedData.get("typed") || [];
  if (Object.isFrozen(typed))
    typed = typed.map((structure) => structure.slice(0));
  let named = sharedData.get("named");
  let transitions = /* @__PURE__ */ Object.create(null);
  for (let i = 0, l = typed.length; i < l; i++) {
    let structure = typed[i];
    let transition = transitions;
    for (let [type2, size, key] of structure) {
      let nextTransition = transition[key];
      if (!nextTransition) {
        transition[key] = nextTransition = {
          key,
          parent: transition,
          enumerationOffset: 0,
          ascii0: null,
          ascii8: null,
          num8: null,
          string16: null,
          object16: null,
          num32: null,
          float64: null,
          date64: null
        };
      }
      transition = createTypeTransition(nextTransition, type2, size);
    }
    transition[RECORD_SYMBOL] = i;
  }
  typed.transitions = transitions;
  this.typedStructs = typed;
  this.lastTypedStructuresLength = typed.length;
  return named;
}
var sourceSymbol = Symbol.for("source");
function readStruct2(src2, position3, srcEnd2, unpackr) {
  let recordId = src2[position3++] - 32;
  if (recordId >= 24) {
    switch (recordId) {
      case 24:
        recordId = src2[position3++];
        break;
      // little endian:
      case 25:
        recordId = src2[position3++] + (src2[position3++] << 8);
        break;
      case 26:
        recordId = src2[position3++] + (src2[position3++] << 8) + (src2[position3++] << 16);
        break;
      case 27:
        recordId = src2[position3++] + (src2[position3++] << 8) + (src2[position3++] << 16) + (src2[position3++] << 24);
        break;
    }
  }
  let structure = unpackr.typedStructs && unpackr.typedStructs[recordId];
  if (!structure) {
    src2 = Uint8Array.prototype.slice.call(src2, position3, srcEnd2);
    srcEnd2 -= position3;
    position3 = 0;
    unpackr._mergeStructures(unpackr.getStructures());
    if (!unpackr.typedStructs)
      throw new Error("Could not find any shared typed structures");
    unpackr.lastTypedStructuresLength = unpackr.typedStructs.length;
    structure = unpackr.typedStructs[recordId];
    if (!structure)
      throw new Error("Could not find typed structure " + recordId);
  }
  var construct = structure.construct;
  if (!construct) {
    construct = structure.construct = function LazyObject() {
    };
    var prototype = construct.prototype;
    let properties = [];
    let currentOffset = 0;
    let lastRefProperty;
    for (let i = 0, l = structure.length; i < l; i++) {
      let definition = structure[i];
      let [type2, size, key, enumerationOffset] = definition;
      if (key === "__proto__")
        key = "__proto_";
      let property = {
        key,
        offset: currentOffset
      };
      if (enumerationOffset)
        properties.splice(i + enumerationOffset, 0, property);
      else
        properties.push(property);
      let getRef;
      switch (size) {
        // TODO: Move into a separate function
        case 0:
          getRef = () => 0;
          break;
        case 1:
          getRef = (source, position4) => {
            let ref = source.bytes[position4 + property.offset];
            return ref >= 246 ? toConstant(ref) : ref;
          };
          break;
        case 2:
          getRef = (source, position4) => {
            let src3 = source.bytes;
            let dataView2 = src3.dataView || (src3.dataView = new DataView(src3.buffer, src3.byteOffset, src3.byteLength));
            let ref = dataView2.getUint16(position4 + property.offset, true);
            return ref >= 65280 ? toConstant(ref & 255) : ref;
          };
          break;
        case 4:
          getRef = (source, position4) => {
            let src3 = source.bytes;
            let dataView2 = src3.dataView || (src3.dataView = new DataView(src3.buffer, src3.byteOffset, src3.byteLength));
            let ref = dataView2.getUint32(position4 + property.offset, true);
            return ref >= 4294967040 ? toConstant(ref & 255) : ref;
          };
          break;
      }
      property.getRef = getRef;
      currentOffset += size;
      let get;
      switch (type2) {
        case ASCII:
          if (lastRefProperty && !lastRefProperty.next)
            lastRefProperty.next = property;
          lastRefProperty = property;
          property.multiGetCount = 0;
          get = function(source) {
            let src3 = source.bytes;
            let position4 = source.position;
            let refStart = currentOffset + position4;
            let ref = getRef(source, position4);
            if (typeof ref !== "number") return ref;
            let end, next = property.next;
            while (next) {
              end = next.getRef(source, position4);
              if (typeof end === "number")
                break;
              else
                end = null;
              next = next.next;
            }
            if (end == null)
              end = source.bytesEnd - refStart;
            if (source.srcString) {
              return source.srcString.slice(ref, end);
            }
            return readString(src3, ref + refStart, end - ref);
          };
          break;
        case UTF8:
        case OBJECT_DATA:
          if (lastRefProperty && !lastRefProperty.next)
            lastRefProperty.next = property;
          lastRefProperty = property;
          get = function(source) {
            let position4 = source.position;
            let refStart = currentOffset + position4;
            let ref = getRef(source, position4);
            if (typeof ref !== "number") return ref;
            let src3 = source.bytes;
            let end, next = property.next;
            while (next) {
              end = next.getRef(source, position4);
              if (typeof end === "number")
                break;
              else
                end = null;
              next = next.next;
            }
            if (end == null)
              end = source.bytesEnd - refStart;
            if (type2 === UTF8) {
              return src3.toString("utf8", ref + refStart, end + refStart);
            } else {
              currentSource = source;
              try {
                return unpackr.unpack(src3, { start: ref + refStart, end: end + refStart });
              } finally {
                currentSource = null;
              }
            }
          };
          break;
        case NUMBER:
          switch (size) {
            case 4:
              get = function(source) {
                let src3 = source.bytes;
                let dataView2 = src3.dataView || (src3.dataView = new DataView(src3.buffer, src3.byteOffset, src3.byteLength));
                let position4 = source.position + property.offset;
                let value = dataView2.getInt32(position4, true);
                if (value < 536870912) {
                  if (value > -520093696)
                    return value;
                  if (value > -536870912)
                    return toConstant(value & 255);
                }
                let fValue = dataView2.getFloat32(position4, true);
                let multiplier = mult10[(src3[position4 + 3] & 127) << 1 | src3[position4 + 2] >> 7];
                return (multiplier * fValue + (fValue > 0 ? 0.5 : -0.5) >> 0) / multiplier;
              };
              break;
            case 8:
              get = function(source) {
                let src3 = source.bytes;
                let dataView2 = src3.dataView || (src3.dataView = new DataView(src3.buffer, src3.byteOffset, src3.byteLength));
                let value = dataView2.getFloat64(source.position + property.offset, true);
                if (isNaN(value)) {
                  let byte = src3[source.position + property.offset];
                  if (byte >= 246)
                    return toConstant(byte);
                }
                return value;
              };
              break;
            case 1:
              get = function(source) {
                let src3 = source.bytes;
                let value = src3[source.position + property.offset];
                return value < 246 ? value : toConstant(value);
              };
              break;
          }
          break;
        case DATE:
          get = function(source) {
            let src3 = source.bytes;
            let dataView2 = src3.dataView || (src3.dataView = new DataView(src3.buffer, src3.byteOffset, src3.byteLength));
            return new Date(dataView2.getFloat64(source.position + property.offset, true));
          };
          break;
      }
      property.get = get;
    }
    if (evalSupported) {
      let objectLiteralProperties = [];
      let args = [];
      let i = 0;
      let hasInheritedProperties;
      for (let property of properties) {
        if (unpackr.alwaysLazyProperty && unpackr.alwaysLazyProperty(property.key)) {
          hasInheritedProperties = true;
          continue;
        }
        Object.defineProperty(prototype, property.key, { get: withSource(property.get), enumerable: true });
        let valueFunction = "v" + i++;
        args.push(valueFunction);
        objectLiteralProperties.push("[" + JSON.stringify(property.key) + "]:" + valueFunction + "(s)");
      }
      if (hasInheritedProperties) {
        objectLiteralProperties.push("__proto__:this");
      }
      let toObject = new Function(...args, "return function(s){return{" + objectLiteralProperties.join(",") + "}}").apply(null, properties.map((prop) => prop.get));
      Object.defineProperty(prototype, "toJSON", {
        value(omitUnderscoredProperties) {
          return toObject.call(this, this[sourceSymbol]);
        }
      });
    } else {
      Object.defineProperty(prototype, "toJSON", {
        value(omitUnderscoredProperties) {
          let resolved = {};
          for (let i = 0, l = properties.length; i < l; i++) {
            let key = properties[i].key;
            resolved[key] = this[key];
          }
          return resolved;
        }
        // not enumerable or anything
      });
    }
  }
  var instance = new construct();
  instance[sourceSymbol] = {
    bytes: src2,
    position: position3,
    srcString: "",
    bytesEnd: srcEnd2
  };
  return instance;
}
function toConstant(code) {
  switch (code) {
    case 246:
      return null;
    case 247:
      return void 0;
    case 248:
      return false;
    case 249:
      return true;
  }
  throw new Error("Unknown constant");
}
function withSource(get) {
  return function() {
    return get(this[sourceSymbol]);
  };
}
function saveState2() {
  if (currentSource) {
    currentSource.bytes = Uint8Array.prototype.slice.call(currentSource.bytes, currentSource.position, currentSource.bytesEnd);
    currentSource.position = 0;
    currentSource.bytesEnd = currentSource.bytes.length;
  }
}
function prepareStructures2(structures, packr2) {
  if (packr2.typedStructs) {
    let structMap = /* @__PURE__ */ new Map();
    structMap.set("named", structures);
    structMap.set("typed", packr2.typedStructs);
    structures = structMap;
  }
  let lastTypedStructuresLength = packr2.lastTypedStructuresLength || 0;
  structures.isCompatible = (existing) => {
    let compatible = true;
    if (existing instanceof Map) {
      let named = existing.get("named") || [];
      if (named.length !== (packr2.lastNamedStructuresLength || 0))
        compatible = false;
      let typed = existing.get("typed") || [];
      if (typed.length !== lastTypedStructuresLength)
        compatible = false;
    } else if (existing instanceof Array || Array.isArray(existing)) {
      if (existing.length !== (packr2.lastNamedStructuresLength || 0))
        compatible = false;
    }
    if (!compatible)
      packr2._mergeStructures(existing);
    return compatible;
  };
  packr2.lastTypedStructuresLength = packr2.typedStructs && packr2.typedStructs.length;
  return structures;
}
setReadStruct(readStruct2, onLoadedStructures2, saveState2);

// node_modules/@colyseus/msgpackr/node-index.js
var import_module = require("module");
var import_meta = {};
var nativeAccelerationDisabled = process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED !== void 0 && process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED.toLowerCase() === "true";
if (!nativeAccelerationDisabled) {
  let extractor;
  try {
    if (typeof require == "function")
      extractor = require_msgpackr_extract();
    else
      extractor = (0, import_module.createRequire)(import_meta.url)("msgpackr-extract");
    if (extractor)
      setExtractor(extractor.extractStrings);
  } catch (error) {
  }
}

// node_modules/@colyseus/schema/build/esm/index.mjs
var SWITCH_TO_STRUCTURE = 255;
var TYPE_ID = 213;
var OPERATION;
(function(OPERATION2) {
  OPERATION2[OPERATION2["ADD"] = 128] = "ADD";
  OPERATION2[OPERATION2["REPLACE"] = 0] = "REPLACE";
  OPERATION2[OPERATION2["DELETE"] = 64] = "DELETE";
  OPERATION2[OPERATION2["DELETE_AND_MOVE"] = 96] = "DELETE_AND_MOVE";
  OPERATION2[OPERATION2["MOVE_AND_ADD"] = 160] = "MOVE_AND_ADD";
  OPERATION2[OPERATION2["DELETE_AND_ADD"] = 192] = "DELETE_AND_ADD";
  OPERATION2[OPERATION2["CLEAR"] = 10] = "CLEAR";
  OPERATION2[OPERATION2["REVERSE"] = 15] = "REVERSE";
  OPERATION2[OPERATION2["MOVE"] = 32] = "MOVE";
  OPERATION2[OPERATION2["DELETE_BY_REFID"] = 33] = "DELETE_BY_REFID";
  OPERATION2[OPERATION2["ADD_BY_REFID"] = 129] = "ADD_BY_REFID";
})(OPERATION || (OPERATION = {}));
var _a;
(_a = Symbol.metadata) != null ? _a : Symbol.metadata = Symbol.for("Symbol.metadata");
var $track = Symbol("$track");
var $encoder = Symbol("$encoder");
var $decoder = Symbol("$decoder");
var $filter = Symbol("$filter");
var $getByIndex = Symbol("$getByIndex");
var $deleteByIndex = Symbol("$deleteByIndex");
var $changes = Symbol("$changes");
var $childType = Symbol("$childType");
var $onEncodeEnd = Symbol("$onEncodeEnd");
var $onDecodeEnd = Symbol("$onDecodeEnd");
var $descriptors = Symbol("$descriptors");
var $numFields = "$__numFields";
var $refTypeFieldIndexes = "$__refTypeFieldIndexes";
var $viewFieldIndexes = "$__viewFieldIndexes";
var $fieldIndexesByViewTag = "$__fieldIndexesByViewTag";
var textEncoder3;
try {
  textEncoder3 = new TextEncoder();
} catch (e) {
}
var _convoBuffer$1 = new ArrayBuffer(8);
var _int32$1 = new Int32Array(_convoBuffer$1);
var _float32$1 = new Float32Array(_convoBuffer$1);
var _float64$1 = new Float64Array(_convoBuffer$1);
var _int64$1 = new BigInt64Array(_convoBuffer$1);
var hasBufferByteLength = typeof Buffer !== "undefined" && Buffer.byteLength;
var utf8Length = hasBufferByteLength ? Buffer.byteLength : function(str, _) {
  var c = 0, length = 0;
  for (var i = 0, l = str.length; i < l; i++) {
    c = str.charCodeAt(i);
    if (c < 128) {
      length += 1;
    } else if (c < 2048) {
      length += 2;
    } else if (c < 55296 || c >= 57344) {
      length += 3;
    } else {
      i++;
      length += 4;
    }
  }
  return length;
};
function utf8Write(view, str, it) {
  var c = 0;
  for (var i = 0, l = str.length; i < l; i++) {
    c = str.charCodeAt(i);
    if (c < 128) {
      view[it.offset++] = c;
    } else if (c < 2048) {
      view[it.offset] = 192 | c >> 6;
      view[it.offset + 1] = 128 | c & 63;
      it.offset += 2;
    } else if (c < 55296 || c >= 57344) {
      view[it.offset] = 224 | c >> 12;
      view[it.offset + 1] = 128 | c >> 6 & 63;
      view[it.offset + 2] = 128 | c & 63;
      it.offset += 3;
    } else {
      i++;
      c = 65536 + ((c & 1023) << 10 | str.charCodeAt(i) & 1023);
      view[it.offset] = 240 | c >> 18;
      view[it.offset + 1] = 128 | c >> 12 & 63;
      view[it.offset + 2] = 128 | c >> 6 & 63;
      view[it.offset + 3] = 128 | c & 63;
      it.offset += 4;
    }
  }
}
function int8$1(bytes, value, it) {
  bytes[it.offset++] = value & 255;
}
function uint8$1(bytes, value, it) {
  bytes[it.offset++] = value & 255;
}
function int16$1(bytes, value, it) {
  bytes[it.offset++] = value & 255;
  bytes[it.offset++] = value >> 8 & 255;
}
function uint16$1(bytes, value, it) {
  bytes[it.offset++] = value & 255;
  bytes[it.offset++] = value >> 8 & 255;
}
function int32$1(bytes, value, it) {
  bytes[it.offset++] = value & 255;
  bytes[it.offset++] = value >> 8 & 255;
  bytes[it.offset++] = value >> 16 & 255;
  bytes[it.offset++] = value >> 24 & 255;
}
function uint32$1(bytes, value, it) {
  const b4 = value >> 24;
  const b3 = value >> 16;
  const b2 = value >> 8;
  const b1 = value;
  bytes[it.offset++] = b1 & 255;
  bytes[it.offset++] = b2 & 255;
  bytes[it.offset++] = b3 & 255;
  bytes[it.offset++] = b4 & 255;
}
function int64$1(bytes, value, it) {
  const high = Math.floor(value / Math.pow(2, 32));
  const low = value >>> 0;
  uint32$1(bytes, low, it);
  uint32$1(bytes, high, it);
}
function uint64$1(bytes, value, it) {
  const high = value / Math.pow(2, 32) >> 0;
  const low = value >>> 0;
  uint32$1(bytes, low, it);
  uint32$1(bytes, high, it);
}
function bigint64$1(bytes, value, it) {
  _int64$1[0] = BigInt.asIntN(64, value);
  int32$1(bytes, _int32$1[0], it);
  int32$1(bytes, _int32$1[1], it);
}
function biguint64$1(bytes, value, it) {
  _int64$1[0] = BigInt.asIntN(64, value);
  int32$1(bytes, _int32$1[0], it);
  int32$1(bytes, _int32$1[1], it);
}
function float32$1(bytes, value, it) {
  _float32$1[0] = value;
  int32$1(bytes, _int32$1[0], it);
}
function float64$1(bytes, value, it) {
  _float64$1[0] = value;
  int32$1(bytes, _int32$1[0], it);
  int32$1(bytes, _int32$1[1], it);
}
function boolean$1(bytes, value, it) {
  bytes[it.offset++] = value ? 1 : 0;
}
function string$1(bytes, value, it) {
  if (!value) {
    value = "";
  }
  let length = utf8Length(value, "utf8");
  let size = 0;
  if (length < 32) {
    bytes[it.offset++] = length | 160;
    size = 1;
  } else if (length < 256) {
    bytes[it.offset++] = 217;
    bytes[it.offset++] = length % 255;
    size = 2;
  } else if (length < 65536) {
    bytes[it.offset++] = 218;
    uint16$1(bytes, length, it);
    size = 3;
  } else if (length < 4294967296) {
    bytes[it.offset++] = 219;
    uint32$1(bytes, length, it);
    size = 5;
  } else {
    throw new Error("String too long");
  }
  utf8Write(bytes, value, it);
  return size + length;
}
function number$1(bytes, value, it) {
  if (isNaN(value)) {
    return number$1(bytes, 0, it);
  } else if (!isFinite(value)) {
    return number$1(bytes, value > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, it);
  } else if (value !== (value | 0)) {
    if (Math.abs(value) <= 34028235e31) {
      _float32$1[0] = value;
      if (Math.abs(Math.abs(_float32$1[0]) - Math.abs(value)) < 1e-4) {
        bytes[it.offset++] = 202;
        float32$1(bytes, value, it);
        return 5;
      }
    }
    bytes[it.offset++] = 203;
    float64$1(bytes, value, it);
    return 9;
  }
  if (value >= 0) {
    if (value < 128) {
      bytes[it.offset++] = value & 255;
      return 1;
    }
    if (value < 256) {
      bytes[it.offset++] = 204;
      bytes[it.offset++] = value & 255;
      return 2;
    }
    if (value < 65536) {
      bytes[it.offset++] = 205;
      uint16$1(bytes, value, it);
      return 3;
    }
    if (value < 4294967296) {
      bytes[it.offset++] = 206;
      uint32$1(bytes, value, it);
      return 5;
    }
    bytes[it.offset++] = 207;
    uint64$1(bytes, value, it);
    return 9;
  } else {
    if (value >= -32) {
      bytes[it.offset++] = 224 | value + 32;
      return 1;
    }
    if (value >= -128) {
      bytes[it.offset++] = 208;
      int8$1(bytes, value, it);
      return 2;
    }
    if (value >= -32768) {
      bytes[it.offset++] = 209;
      int16$1(bytes, value, it);
      return 3;
    }
    if (value >= -2147483648) {
      bytes[it.offset++] = 210;
      int32$1(bytes, value, it);
      return 5;
    }
    bytes[it.offset++] = 211;
    int64$1(bytes, value, it);
    return 9;
  }
}
var encode2 = {
  int8: int8$1,
  uint8: uint8$1,
  int16: int16$1,
  uint16: uint16$1,
  int32: int32$1,
  uint32: uint32$1,
  int64: int64$1,
  uint64: uint64$1,
  bigint64: bigint64$1,
  biguint64: biguint64$1,
  float32: float32$1,
  float64: float64$1,
  boolean: boolean$1,
  string: string$1,
  number: number$1,
  utf8Write,
  utf8Length
};
var _convoBuffer = new ArrayBuffer(8);
var _int32 = new Int32Array(_convoBuffer);
var _float32 = new Float32Array(_convoBuffer);
var _float64 = new Float64Array(_convoBuffer);
var _uint64 = new BigUint64Array(_convoBuffer);
var _int64 = new BigInt64Array(_convoBuffer);
function utf8Read(bytes, it, length) {
  var string2 = "", chr = 0;
  for (var i = it.offset, end = it.offset + length; i < end; i++) {
    var byte = bytes[i];
    if ((byte & 128) === 0) {
      string2 += String.fromCharCode(byte);
      continue;
    }
    if ((byte & 224) === 192) {
      string2 += String.fromCharCode((byte & 31) << 6 | bytes[++i] & 63);
      continue;
    }
    if ((byte & 240) === 224) {
      string2 += String.fromCharCode((byte & 15) << 12 | (bytes[++i] & 63) << 6 | (bytes[++i] & 63) << 0);
      continue;
    }
    if ((byte & 248) === 240) {
      chr = (byte & 7) << 18 | (bytes[++i] & 63) << 12 | (bytes[++i] & 63) << 6 | (bytes[++i] & 63) << 0;
      if (chr >= 65536) {
        chr -= 65536;
        string2 += String.fromCharCode((chr >>> 10) + 55296, (chr & 1023) + 56320);
      } else {
        string2 += String.fromCharCode(chr);
      }
      continue;
    }
    console.error("Invalid byte " + byte.toString(16));
  }
  it.offset += length;
  return string2;
}
function int8(bytes, it) {
  return uint8(bytes, it) << 24 >> 24;
}
function uint8(bytes, it) {
  return bytes[it.offset++];
}
function int16(bytes, it) {
  return uint16(bytes, it) << 16 >> 16;
}
function uint16(bytes, it) {
  return bytes[it.offset++] | bytes[it.offset++] << 8;
}
function int32(bytes, it) {
  return bytes[it.offset++] | bytes[it.offset++] << 8 | bytes[it.offset++] << 16 | bytes[it.offset++] << 24;
}
function uint32(bytes, it) {
  return int32(bytes, it) >>> 0;
}
function float32(bytes, it) {
  _int32[0] = int32(bytes, it);
  return _float32[0];
}
function float64(bytes, it) {
  _int32[0] = int32(bytes, it);
  _int32[1] = int32(bytes, it);
  return _float64[0];
}
function int64(bytes, it) {
  const low = uint32(bytes, it);
  const high = int32(bytes, it) * Math.pow(2, 32);
  return high + low;
}
function uint64(bytes, it) {
  const low = uint32(bytes, it);
  const high = uint32(bytes, it) * Math.pow(2, 32);
  return high + low;
}
function bigint64(bytes, it) {
  _int32[0] = int32(bytes, it);
  _int32[1] = int32(bytes, it);
  return _int64[0];
}
function biguint64(bytes, it) {
  _int32[0] = int32(bytes, it);
  _int32[1] = int32(bytes, it);
  return _uint64[0];
}
function boolean(bytes, it) {
  return uint8(bytes, it) > 0;
}
function string(bytes, it) {
  const prefix = bytes[it.offset++];
  let length;
  if (prefix < 192) {
    length = prefix & 31;
  } else if (prefix === 217) {
    length = uint8(bytes, it);
  } else if (prefix === 218) {
    length = uint16(bytes, it);
  } else if (prefix === 219) {
    length = uint32(bytes, it);
  }
  return utf8Read(bytes, it, length);
}
function number(bytes, it) {
  const prefix = bytes[it.offset++];
  if (prefix < 128) {
    return prefix;
  } else if (prefix === 202) {
    return float32(bytes, it);
  } else if (prefix === 203) {
    return float64(bytes, it);
  } else if (prefix === 204) {
    return uint8(bytes, it);
  } else if (prefix === 205) {
    return uint16(bytes, it);
  } else if (prefix === 206) {
    return uint32(bytes, it);
  } else if (prefix === 207) {
    return uint64(bytes, it);
  } else if (prefix === 208) {
    return int8(bytes, it);
  } else if (prefix === 209) {
    return int16(bytes, it);
  } else if (prefix === 210) {
    return int32(bytes, it);
  } else if (prefix === 211) {
    return int64(bytes, it);
  } else if (prefix > 223) {
    return (255 - prefix + 1) * -1;
  }
}
function stringCheck(bytes, it) {
  const prefix = bytes[it.offset];
  return (
    // fixstr
    prefix < 192 && prefix > 160 || // str 8
    prefix === 217 || // str 16
    prefix === 218 || // str 32
    prefix === 219
  );
}
var decode2 = {
  utf8Read,
  int8,
  uint8,
  int16,
  uint16,
  int32,
  uint32,
  float32,
  float64,
  int64,
  uint64,
  bigint64,
  biguint64,
  boolean,
  string,
  number,
  stringCheck
};
var registeredTypes = {};
var identifiers = /* @__PURE__ */ new Map();
function registerType(identifier, definition) {
  if (definition.constructor) {
    identifiers.set(definition.constructor, identifier);
    registeredTypes[identifier] = definition;
  }
  if (definition.encode) {
    encode2[identifier] = definition.encode;
  }
  if (definition.decode) {
    decode2[identifier] = definition.decode;
  }
}
function getType(identifier) {
  return registeredTypes[identifier];
}
var _TypeContext = class _TypeContext {
  static register(target2) {
    const parent = Object.getPrototypeOf(target2);
    if (parent !== Schema) {
      let inherits = _TypeContext.inheritedTypes.get(parent);
      if (!inherits) {
        inherits = /* @__PURE__ */ new Set();
        _TypeContext.inheritedTypes.set(parent, inherits);
      }
      inherits.add(target2);
    }
  }
  constructor(rootClass) {
    this.types = {};
    this.schemas = /* @__PURE__ */ new Map();
    this.hasFilters = false;
    this.parentFiltered = {};
    if (rootClass) {
      this.discoverTypes(rootClass);
    }
  }
  has(schema) {
    return this.schemas.has(schema);
  }
  get(typeid) {
    return this.types[typeid];
  }
  add(schema, typeid = this.schemas.size) {
    if (this.schemas.has(schema)) {
      return false;
    }
    this.types[typeid] = schema;
    if (schema[Symbol.metadata] === void 0) {
      Metadata.initialize(schema);
    }
    this.schemas.set(schema, typeid);
    return true;
  }
  getTypeId(klass) {
    return this.schemas.get(klass);
  }
  discoverTypes(klass, parentType, parentIndex, parentHasViewTag) {
    var _a4, _b2, _c;
    if (parentHasViewTag) {
      this.registerFilteredByParent(klass, parentType, parentIndex);
    }
    if (!this.add(klass)) {
      return;
    }
    (_a4 = _TypeContext.inheritedTypes.get(klass)) == null ? void 0 : _a4.forEach((child) => {
      this.discoverTypes(child, parentType, parentIndex, parentHasViewTag);
    });
    let parent = klass;
    while ((parent = Object.getPrototypeOf(parent)) && parent !== Schema && // stop at root (Schema)
    parent !== Function.prototype) {
      this.discoverTypes(parent);
    }
    const metadata = (_c = klass[_b2 = Symbol.metadata]) != null ? _c : klass[_b2] = {};
    if (metadata[$viewFieldIndexes]) {
      this.hasFilters = true;
    }
    for (const fieldIndex in metadata) {
      const index = fieldIndex;
      const fieldType = metadata[index].type;
      const fieldHasViewTag = metadata[index].tag !== void 0;
      if (typeof fieldType === "string") {
        continue;
      }
      if (Array.isArray(fieldType)) {
        const type2 = fieldType[0];
        if (type2 === "string") {
          continue;
        }
        this.discoverTypes(type2, klass, index, parentHasViewTag || fieldHasViewTag);
      } else if (typeof fieldType === "function") {
        this.discoverTypes(fieldType, klass, index, parentHasViewTag || fieldHasViewTag);
      } else {
        const type2 = Object.values(fieldType)[0];
        if (typeof type2 === "string") {
          continue;
        }
        this.discoverTypes(type2, klass, index, parentHasViewTag || fieldHasViewTag);
      }
    }
  }
  /**
   * Keep track of which classes have filters applied.
   * Format: `${typeid}-${parentTypeid}-${parentIndex}`
   */
  registerFilteredByParent(schema, parentType, parentIndex) {
    var _a4;
    const typeid = (_a4 = this.schemas.get(schema)) != null ? _a4 : this.schemas.size;
    let key = `${typeid}`;
    if (parentType) {
      key += `-${this.schemas.get(parentType)}`;
    }
    key += `-${parentIndex}`;
    this.parentFiltered[key] = true;
  }
  debug() {
    let parentFiltered = "";
    for (const key in this.parentFiltered) {
      const keys = key.split("-").map(Number);
      const fieldIndex = keys.pop();
      parentFiltered += `
		`;
      parentFiltered += `${key}: ${keys.reverse().map((id, i) => {
        const klass = this.types[id];
        const metadata = klass[Symbol.metadata];
        let txt = klass.name;
        if (i === 0) {
          txt += `[${metadata[fieldIndex].name}]`;
        }
        return `${txt}`;
      }).join(" -> ")}`;
    }
    return `TypeContext ->
	Schema types: ${this.schemas.size}
	hasFilters: ${this.hasFilters}
	parentFiltered:${parentFiltered}`;
  }
};
_TypeContext.inheritedTypes = /* @__PURE__ */ new Map();
var TypeContext = _TypeContext;
function getNormalizedType(type2) {
  return Array.isArray(type2) ? { array: type2[0] } : typeof type2["type"] !== "undefined" ? type2["type"] : type2;
}
var Metadata = {
  addField(metadata, index, name, type2, descriptor) {
    if (index > 64) {
      throw new Error(`Can't define field '${name}'.
Schema instances may only have up to 64 fields.`);
    }
    metadata[index] = Object.assign(
      metadata[index] || {},
      // avoid overwriting previous field metadata (@owned / @deprecated)
      {
        type: getNormalizedType(type2),
        index,
        name
      }
    );
    Object.defineProperty(metadata, $descriptors, {
      value: metadata[$descriptors] || {},
      enumerable: false,
      configurable: true
    });
    if (descriptor) {
      metadata[$descriptors][name] = descriptor;
      metadata[$descriptors][`_${name}`] = {
        value: void 0,
        writable: true,
        enumerable: false,
        configurable: true
      };
    } else {
      metadata[$descriptors][name] = {
        value: void 0,
        writable: true,
        enumerable: true,
        configurable: true
      };
    }
    Object.defineProperty(metadata, $numFields, {
      value: index,
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(metadata, name, {
      value: index,
      enumerable: false,
      configurable: true
    });
    if (typeof metadata[index].type !== "string") {
      if (metadata[$refTypeFieldIndexes] === void 0) {
        Object.defineProperty(metadata, $refTypeFieldIndexes, {
          value: [],
          enumerable: false,
          configurable: true
        });
      }
      metadata[$refTypeFieldIndexes].push(index);
    }
  },
  setTag(metadata, fieldName, tag) {
    const index = metadata[fieldName];
    const field = metadata[index];
    field.tag = tag;
    if (!metadata[$viewFieldIndexes]) {
      Object.defineProperty(metadata, $viewFieldIndexes, {
        value: [],
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(metadata, $fieldIndexesByViewTag, {
        value: {},
        enumerable: false,
        configurable: true
      });
    }
    metadata[$viewFieldIndexes].push(index);
    if (!metadata[$fieldIndexesByViewTag][tag]) {
      metadata[$fieldIndexesByViewTag][tag] = [];
    }
    metadata[$fieldIndexesByViewTag][tag].push(index);
  },
  setFields(target2, fields) {
    var _a4, _b2;
    const constructor = target2.prototype.constructor;
    TypeContext.register(constructor);
    const parentClass = Object.getPrototypeOf(constructor);
    const parentMetadata = parentClass && parentClass[Symbol.metadata];
    const metadata = Metadata.initialize(constructor);
    if (!constructor[$track]) {
      constructor[$track] = Schema[$track];
    }
    if (!constructor[$encoder]) {
      constructor[$encoder] = Schema[$encoder];
    }
    if (!constructor[$decoder]) {
      constructor[$decoder] = Schema[$decoder];
    }
    if (!constructor.prototype.toJSON) {
      constructor.prototype.toJSON = Schema.prototype.toJSON;
    }
    let fieldIndex = (_b2 = (_a4 = metadata[$numFields]) != null ? _a4 : parentMetadata && parentMetadata[$numFields]) != null ? _b2 : -1;
    fieldIndex++;
    for (const field in fields) {
      const type2 = fields[field];
      const complexTypeKlass = Array.isArray(type2) ? getType("array") : typeof Object.keys(type2)[0] === "string" && getType(Object.keys(type2)[0]);
      const childType = complexTypeKlass ? Object.values(type2)[0] : getNormalizedType(type2);
      Metadata.addField(metadata, fieldIndex, field, type2, getPropertyDescriptor(`_${field}`, fieldIndex, childType, complexTypeKlass));
      fieldIndex++;
    }
    return target2;
  },
  isDeprecated(metadata, field) {
    return metadata[field].deprecated === true;
  },
  init(klass) {
    const metadata = {};
    klass[Symbol.metadata] = metadata;
    Object.defineProperty(metadata, $numFields, {
      value: 0,
      enumerable: false,
      configurable: true
    });
  },
  initialize(constructor) {
    var _a4;
    const parentClass = Object.getPrototypeOf(constructor);
    const parentMetadata = parentClass[Symbol.metadata];
    let metadata = (_a4 = constructor[Symbol.metadata]) != null ? _a4 : /* @__PURE__ */ Object.create(null);
    if (parentClass !== Schema && metadata === parentMetadata) {
      metadata = /* @__PURE__ */ Object.create(null);
      if (parentMetadata) {
        Object.setPrototypeOf(metadata, parentMetadata);
        Object.defineProperty(metadata, $numFields, {
          value: parentMetadata[$numFields],
          enumerable: false,
          configurable: true,
          writable: true
        });
        if (parentMetadata[$viewFieldIndexes] !== void 0) {
          Object.defineProperty(metadata, $viewFieldIndexes, {
            value: [...parentMetadata[$viewFieldIndexes]],
            enumerable: false,
            configurable: true,
            writable: true
          });
          Object.defineProperty(metadata, $fieldIndexesByViewTag, {
            value: __spreadValues({}, parentMetadata[$fieldIndexesByViewTag]),
            enumerable: false,
            configurable: true,
            writable: true
          });
        }
        if (parentMetadata[$refTypeFieldIndexes] !== void 0) {
          Object.defineProperty(metadata, $refTypeFieldIndexes, {
            value: [...parentMetadata[$refTypeFieldIndexes]],
            enumerable: false,
            configurable: true,
            writable: true
          });
        }
        Object.defineProperty(metadata, $descriptors, {
          value: __spreadValues({}, parentMetadata[$descriptors]),
          enumerable: false,
          configurable: true,
          writable: true
        });
      }
    }
    constructor[Symbol.metadata] = metadata;
    return metadata;
  },
  isValidInstance(klass) {
    return klass.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(klass.constructor[Symbol.metadata], $numFields);
  },
  getFields(klass) {
    const metadata = klass[Symbol.metadata];
    const fields = {};
    for (let i = 0; i <= metadata[$numFields]; i++) {
      fields[metadata[i].name] = metadata[i].type;
    }
    return fields;
  }
};
function setOperationAtIndex(changeSet, index) {
  const operationsIndex = changeSet.indexes[index];
  if (operationsIndex === void 0) {
    changeSet.indexes[index] = changeSet.operations.push(index) - 1;
  } else {
    changeSet.operations[operationsIndex] = index;
  }
}
function deleteOperationAtIndex(changeSet, index) {
  const operationsIndex = changeSet.indexes[index];
  if (operationsIndex !== void 0) {
    changeSet.operations[operationsIndex] = void 0;
  }
  delete changeSet.indexes[index];
}
function enqueueChangeTree(root, changeTree, changeSet, queueRootIndex = changeTree[changeSet].queueRootIndex) {
  if (root && root[changeSet][queueRootIndex] !== changeTree) {
    changeTree[changeSet].queueRootIndex = root[changeSet].push(changeTree) - 1;
  }
}
var ChangeTree = class {
  constructor(ref) {
    this.isFiltered = false;
    this.indexedOperations = {};
    this.changes = { indexes: {}, operations: [] };
    this.allChanges = { indexes: {}, operations: [] };
    this.isNew = true;
    this.ref = ref;
    const metadata = ref.constructor[Symbol.metadata];
    if (metadata == null ? void 0 : metadata[$viewFieldIndexes]) {
      this.allFilteredChanges = { indexes: {}, operations: [] };
      this.filteredChanges = { indexes: {}, operations: [] };
    }
  }
  setRoot(root) {
    var _a4;
    this.root = root;
    this.checkIsFiltered(this.parent, this.parentIndex);
    const metadata = this.ref.constructor[Symbol.metadata];
    if (metadata) {
      (_a4 = metadata[$refTypeFieldIndexes]) == null ? void 0 : _a4.forEach((index) => {
        const field = metadata[index];
        const value = this.ref[field.name];
        value == null ? void 0 : value[$changes].setRoot(root);
      });
    } else if (this.ref[$childType] && typeof this.ref[$childType] !== "string") {
      this.ref.forEach((value, key) => {
        value[$changes].setRoot(root);
      });
    }
  }
  setParent(parent, root, parentIndex) {
    var _a4;
    this.parent = parent;
    this.parentIndex = parentIndex;
    if (!root) {
      return;
    }
    if (root !== this.root) {
      this.root = root;
      this.checkIsFiltered(parent, parentIndex);
    } else {
      root.add(this);
    }
    const metadata = this.ref.constructor[Symbol.metadata];
    if (metadata) {
      (_a4 = metadata[$refTypeFieldIndexes]) == null ? void 0 : _a4.forEach((index) => {
        const field = metadata[index];
        const value = this.ref[field.name];
        value == null ? void 0 : value[$changes].setParent(this.ref, root, index);
      });
    } else if (this.ref[$childType] && typeof this.ref[$childType] !== "string") {
      this.ref.forEach((value, key) => {
        var _a5;
        value[$changes].setParent(this.ref, root, (_a5 = this.indexes[key]) != null ? _a5 : key);
      });
    }
  }
  forEachChild(callback) {
    var _a4;
    const metadata = this.ref.constructor[Symbol.metadata];
    if (metadata) {
      (_a4 = metadata[$refTypeFieldIndexes]) == null ? void 0 : _a4.forEach((index) => {
        const field = metadata[index];
        const value = this.ref[field.name];
        if (value) {
          callback(value[$changes], index);
        }
      });
    } else if (this.ref[$childType] && typeof this.ref[$childType] !== "string") {
      this.ref.forEach((value, key) => {
        var _a5;
        callback(value[$changes], (_a5 = this.indexes[key]) != null ? _a5 : key);
      });
    }
  }
  operation(op) {
    this.changes.operations.push(-op);
    enqueueChangeTree(this.root, this, "changes");
  }
  change(index, operation = OPERATION.ADD) {
    var _a4;
    const metadata = this.ref.constructor[Symbol.metadata];
    const isFiltered = this.isFiltered || ((_a4 = metadata == null ? void 0 : metadata[index]) == null ? void 0 : _a4.tag) !== void 0;
    const changeSet = isFiltered ? this.filteredChanges : this.changes;
    const previousOperation = this.indexedOperations[index];
    if (!previousOperation || previousOperation === OPERATION.DELETE) {
      const op = !previousOperation ? operation : previousOperation === OPERATION.DELETE ? OPERATION.DELETE_AND_ADD : operation;
      this.indexedOperations[index] = op;
    }
    setOperationAtIndex(changeSet, index);
    if (isFiltered) {
      setOperationAtIndex(this.allFilteredChanges, index);
      if (this.root) {
        enqueueChangeTree(this.root, this, "filteredChanges");
        enqueueChangeTree(this.root, this, "allFilteredChanges");
      }
    } else {
      setOperationAtIndex(this.allChanges, index);
      enqueueChangeTree(this.root, this, "changes");
    }
  }
  shiftChangeIndexes(shiftIndex) {
    const changeSet = this.isFiltered ? this.filteredChanges : this.changes;
    const newIndexedOperations = {};
    const newIndexes = {};
    for (const index in this.indexedOperations) {
      newIndexedOperations[Number(index) + shiftIndex] = this.indexedOperations[index];
      newIndexes[Number(index) + shiftIndex] = changeSet[index];
    }
    this.indexedOperations = newIndexedOperations;
    changeSet.indexes = newIndexes;
    changeSet.operations = changeSet.operations.map((index) => index + shiftIndex);
  }
  shiftAllChangeIndexes(shiftIndex, startIndex = 0) {
    if (this.filteredChanges !== void 0) {
      this._shiftAllChangeIndexes(shiftIndex, startIndex, this.allFilteredChanges);
      this._shiftAllChangeIndexes(shiftIndex, startIndex, this.allChanges);
    } else {
      this._shiftAllChangeIndexes(shiftIndex, startIndex, this.allChanges);
    }
  }
  _shiftAllChangeIndexes(shiftIndex, startIndex = 0, changeSet) {
    const newIndexes = {};
    for (const key in changeSet.indexes) {
      const index = changeSet.indexes[key];
      if (index > startIndex) {
        newIndexes[Number(key) + shiftIndex] = index;
      } else {
        newIndexes[key] = index;
      }
    }
    changeSet.indexes = newIndexes;
    for (let i = 0; i < changeSet.operations.length; i++) {
      const index = changeSet.operations[i];
      if (index > startIndex) {
        changeSet.operations[i] = index + shiftIndex;
      }
    }
  }
  indexedOperation(index, operation, allChangesIndex = index) {
    this.indexedOperations[index] = operation;
    if (this.filteredChanges !== void 0) {
      setOperationAtIndex(this.allFilteredChanges, allChangesIndex);
      setOperationAtIndex(this.filteredChanges, index);
      enqueueChangeTree(this.root, this, "filteredChanges");
    } else {
      setOperationAtIndex(this.allChanges, allChangesIndex);
      setOperationAtIndex(this.changes, index);
      enqueueChangeTree(this.root, this, "changes");
    }
  }
  getType(index) {
    if (Metadata.isValidInstance(this.ref)) {
      const metadata = this.ref.constructor[Symbol.metadata];
      return metadata[index].type;
    } else {
      return this.ref[$childType];
    }
  }
  getChange(index) {
    return this.indexedOperations[index];
  }
  //
  // used during `.encode()`
  //
  getValue(index, isEncodeAll = false) {
    return this.ref[$getByIndex](index, isEncodeAll);
  }
  delete(index, operation, allChangesIndex = index) {
    var _a4;
    if (index === void 0) {
      try {
        throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${index}'`);
      } catch (e) {
        console.warn(e);
      }
      return;
    }
    const changeSet = this.filteredChanges !== void 0 ? this.filteredChanges : this.changes;
    this.indexedOperations[index] = operation != null ? operation : OPERATION.DELETE;
    setOperationAtIndex(changeSet, index);
    const previousValue = this.getValue(index);
    if (previousValue && previousValue[$changes]) {
      (_a4 = this.root) == null ? void 0 : _a4.remove(previousValue[$changes]);
    }
    deleteOperationAtIndex(this.allChanges, allChangesIndex);
    if (this.filteredChanges !== void 0) {
      deleteOperationAtIndex(this.allFilteredChanges, allChangesIndex);
      enqueueChangeTree(this.root, this, "filteredChanges");
    } else {
      enqueueChangeTree(this.root, this, "changes");
    }
    return previousValue;
  }
  endEncode() {
    var _a4, _b2;
    this.indexedOperations = {};
    (_b2 = (_a4 = this.ref)[$onEncodeEnd]) == null ? void 0 : _b2.call(_a4);
    this.isNew = false;
  }
  discard(discardAll = false) {
    var _a4, _b2;
    (_b2 = (_a4 = this.ref)[$onEncodeEnd]) == null ? void 0 : _b2.call(_a4);
    this.indexedOperations = {};
    this.changes.indexes = {};
    this.changes.operations.length = 0;
    this.changes.queueRootIndex = void 0;
    if (this.filteredChanges !== void 0) {
      this.filteredChanges.indexes = {};
      this.filteredChanges.operations.length = 0;
      this.filteredChanges.queueRootIndex = void 0;
    }
    if (discardAll) {
      this.allChanges.indexes = {};
      this.allChanges.operations.length = 0;
      if (this.allFilteredChanges !== void 0) {
        this.allFilteredChanges.indexes = {};
        this.allFilteredChanges.operations.length = 0;
      }
      this.forEachChild((changeTree, _) => {
        var _a5;
        return (_a5 = this.root) == null ? void 0 : _a5.remove(changeTree);
      });
    }
  }
  /**
   * Recursively discard all changes from this, and child structures.
   */
  discardAll() {
    const keys = Object.keys(this.indexedOperations);
    for (let i = 0, len = keys.length; i < len; i++) {
      const value = this.getValue(Number(keys[i]));
      if (value && value[$changes]) {
        value[$changes].discardAll();
      }
    }
    this.discard();
  }
  ensureRefId() {
    if (this.refId !== void 0) {
      return;
    }
    this.refId = this.root.getNextUniqueId();
  }
  get changed() {
    return Object.entries(this.indexedOperations).length > 0;
  }
  checkIsFiltered(parent, parentIndex) {
    const isNewChangeTree = this.root.add(this);
    if (this.root.types.hasFilters) {
      this._checkFilteredByParent(parent, parentIndex);
      if (this.filteredChanges !== void 0) {
        enqueueChangeTree(this.root, this, "filteredChanges");
        if (isNewChangeTree) {
          this.root.allFilteredChanges.push(this);
        }
      }
    }
    if (!this.isFiltered) {
      enqueueChangeTree(this.root, this, "changes");
      if (isNewChangeTree) {
        this.root.allChanges.push(this);
      }
    }
  }
  _checkFilteredByParent(parent, parentIndex) {
    if (!parent) {
      return;
    }
    const refType = Metadata.isValidInstance(this.ref) ? this.ref.constructor : this.ref[$childType];
    if (!Metadata.isValidInstance(parent)) {
      const parentChangeTree = parent[$changes];
      parent = parentChangeTree.parent;
      parentIndex = parentChangeTree.parentIndex;
    }
    const parentConstructor = parent.constructor;
    let key = `${this.root.types.getTypeId(refType)}`;
    if (parentConstructor) {
      key += `-${this.root.types.schemas.get(parentConstructor)}`;
    }
    key += `-${parentIndex}`;
    this.isFiltered = parent[$changes].isFiltered || this.root.types.parentFiltered[key];
    if (this.isFiltered) {
      this.filteredChanges = { indexes: {}, operations: [] };
      this.allFilteredChanges = { indexes: {}, operations: [] };
      if (this.changes.operations.length > 0) {
        const changes = this.changes;
        this.changes = this.filteredChanges;
        this.filteredChanges = changes;
        const allFilteredChanges = this.allFilteredChanges;
        this.allFilteredChanges = this.allChanges;
        this.allChanges = allFilteredChanges;
      }
    }
  }
};
function encodeValue(encoder, bytes, type2, value, operation, it) {
  var _a4;
  if (typeof type2 === "string") {
    (_a4 = encode2[type2]) == null ? void 0 : _a4.call(encode2, bytes, value, it);
  } else if (type2[Symbol.metadata] !== void 0) {
    encode2.number(bytes, value[$changes].refId, it);
    if ((operation & OPERATION.ADD) === OPERATION.ADD) {
      encoder.tryEncodeTypeId(bytes, type2, value.constructor, it);
    }
  } else {
    encode2.number(bytes, value[$changes].refId, it);
  }
}
var encodeSchemaOperation = function(encoder, bytes, changeTree, index, operation, it, _, __, metadata) {
  bytes[it.offset++] = (index | operation) & 255;
  if (operation === OPERATION.DELETE) {
    return;
  }
  const ref = changeTree.ref;
  const field = metadata[index];
  encodeValue(encoder, bytes, metadata[index].type, ref[field.name], operation, it);
};
var encodeKeyValueOperation = function(encoder, bytes, changeTree, index, operation, it) {
  bytes[it.offset++] = operation & 255;
  if (operation === OPERATION.CLEAR) {
    return;
  }
  encode2.number(bytes, index, it);
  if (operation === OPERATION.DELETE) {
    return;
  }
  const ref = changeTree.ref;
  if ((operation & OPERATION.ADD) === OPERATION.ADD) {
    if (typeof ref["set"] === "function") {
      const dynamicIndex = changeTree.ref["$indexes"].get(index);
      encode2.string(bytes, dynamicIndex, it);
    }
  }
  const type2 = ref[$childType];
  const value = ref[$getByIndex](index);
  encodeValue(encoder, bytes, type2, value, operation, it);
};
var encodeArray = function(encoder, bytes, changeTree, field, operation, it, isEncodeAll, hasView) {
  const ref = changeTree.ref;
  const useOperationByRefId = hasView && changeTree.isFiltered && typeof changeTree.getType(field) !== "string";
  let refOrIndex;
  if (useOperationByRefId) {
    refOrIndex = ref["tmpItems"][field][$changes].refId;
    if (operation === OPERATION.DELETE) {
      operation = OPERATION.DELETE_BY_REFID;
    } else if (operation === OPERATION.ADD) {
      operation = OPERATION.ADD_BY_REFID;
    }
  } else {
    refOrIndex = field;
  }
  bytes[it.offset++] = operation & 255;
  if (operation === OPERATION.CLEAR || operation === OPERATION.REVERSE) {
    return;
  }
  encode2.number(bytes, refOrIndex, it);
  if (operation === OPERATION.DELETE) {
    return;
  }
  const type2 = changeTree.getType(field);
  const value = changeTree.getValue(field, isEncodeAll);
  encodeValue(encoder, bytes, type2, value, operation, it);
};
var DEFINITION_MISMATCH = -1;
function decodeValue(decoder2, operation, ref, index, type2, bytes, it, allChanges) {
  const $root = decoder2.root;
  const previousValue = ref[$getByIndex](index);
  let value;
  if ((operation & OPERATION.DELETE) === OPERATION.DELETE) {
    const previousRefId = $root.refIds.get(previousValue);
    if (previousRefId !== void 0) {
      $root.removeRef(previousRefId);
    }
    if (operation !== OPERATION.DELETE_AND_ADD) {
      ref[$deleteByIndex](index);
    }
    value = void 0;
  }
  if (operation === OPERATION.DELETE) ;
  else if (Schema.is(type2)) {
    const refId = decode2.number(bytes, it);
    value = $root.refs.get(refId);
    if (previousValue) {
      const previousRefId = $root.refIds.get(previousValue);
      if (previousRefId && refId !== previousRefId && // FIXME: we may need to check for REPLACE operation as well
      (operation & OPERATION.DELETE) === OPERATION.DELETE) {
        $root.removeRef(previousRefId);
      }
    }
    if ((operation & OPERATION.ADD) === OPERATION.ADD) {
      const childType = decoder2.getInstanceType(bytes, it, type2);
      if (!value) {
        value = decoder2.createInstanceOfType(childType);
      }
      $root.addRef(refId, value, value !== previousValue || // increment ref count if value has changed
      operation === OPERATION.DELETE_AND_ADD && value === previousValue);
    }
  } else if (typeof type2 === "string") {
    value = decode2[type2](bytes, it);
  } else {
    const typeDef = getType(Object.keys(type2)[0]);
    const refId = decode2.number(bytes, it);
    const valueRef = $root.refs.has(refId) ? previousValue || $root.refs.get(refId) : new typeDef.constructor();
    value = valueRef.clone(true);
    value[$childType] = Object.values(type2)[0];
    if (previousValue) {
      let previousRefId = $root.refIds.get(previousValue);
      if (previousRefId !== void 0 && refId !== previousRefId) {
        $root.removeRef(previousRefId);
        const entries = previousValue.entries();
        let iter;
        while ((iter = entries.next()) && !iter.done) {
          const [key, value2] = iter.value;
          if (typeof value2 === "object") {
            previousRefId = $root.refIds.get(value2);
            $root.removeRef(previousRefId);
          }
          allChanges.push({
            ref: previousValue,
            refId: previousRefId,
            op: OPERATION.DELETE,
            field: key,
            value: void 0,
            previousValue: value2
          });
        }
      }
    }
    $root.addRef(refId, value, valueRef !== previousValue);
  }
  return { value, previousValue };
}
var decodeSchemaOperation = function(decoder2, bytes, it, ref, allChanges) {
  const first_byte = bytes[it.offset++];
  const metadata = ref.constructor[Symbol.metadata];
  const operation = first_byte >> 6 << 6;
  const index = first_byte % (operation || 255);
  const field = metadata[index];
  if (field === void 0) {
    console.warn("@colyseus/schema: field not defined at", { index, ref: ref.constructor.name, metadata });
    return DEFINITION_MISMATCH;
  }
  const { value, previousValue } = decodeValue(decoder2, operation, ref, index, field.type, bytes, it, allChanges);
  if (value !== null && value !== void 0) {
    ref[field.name] = value;
  }
  if (previousValue !== value) {
    allChanges.push({
      ref,
      refId: decoder2.currentRefId,
      op: operation,
      field: field.name,
      value,
      previousValue
    });
  }
};
var decodeKeyValueOperation = function(decoder2, bytes, it, ref, allChanges) {
  const operation = bytes[it.offset++];
  if (operation === OPERATION.CLEAR) {
    decoder2.removeChildRefs(ref, allChanges);
    ref.clear();
    return;
  }
  const index = decode2.number(bytes, it);
  const type2 = ref[$childType];
  let dynamicIndex;
  if ((operation & OPERATION.ADD) === OPERATION.ADD) {
    if (typeof ref["set"] === "function") {
      dynamicIndex = decode2.string(bytes, it);
      ref["setIndex"](index, dynamicIndex);
    } else {
      dynamicIndex = index;
    }
  } else {
    dynamicIndex = ref["getIndex"](index);
  }
  const { value, previousValue } = decodeValue(decoder2, operation, ref, index, type2, bytes, it, allChanges);
  if (value !== null && value !== void 0) {
    if (typeof ref["set"] === "function") {
      ref["$items"].set(dynamicIndex, value);
    } else if (typeof ref["$setAt"] === "function") {
      ref["$setAt"](index, value, operation);
    } else if (typeof ref["add"] === "function") {
      const index2 = ref.add(value);
      if (typeof index2 === "number") {
        ref["setIndex"](index2, index2);
      }
    }
  }
  if (previousValue !== value) {
    allChanges.push({
      ref,
      refId: decoder2.currentRefId,
      op: operation,
      field: "",
      // FIXME: remove this
      dynamicIndex,
      value,
      previousValue
    });
  }
};
var decodeArray = function(decoder2, bytes, it, ref, allChanges) {
  let operation = bytes[it.offset++];
  let index;
  if (operation === OPERATION.CLEAR) {
    decoder2.removeChildRefs(ref, allChanges);
    ref.clear();
    return;
  } else if (operation === OPERATION.REVERSE) {
    ref.reverse();
    return;
  } else if (operation === OPERATION.DELETE_BY_REFID) {
    const refId = decode2.number(bytes, it);
    const previousValue2 = decoder2.root.refs.get(refId);
    index = ref.findIndex((value2) => value2 === previousValue2);
    ref[$deleteByIndex](index);
    allChanges.push({
      ref,
      refId: decoder2.currentRefId,
      op: OPERATION.DELETE,
      field: "",
      // FIXME: remove this
      dynamicIndex: index,
      value: void 0,
      previousValue: previousValue2
    });
    return;
  } else if (operation === OPERATION.ADD_BY_REFID) {
    const refId = decode2.number(bytes, it);
    const itemByRefId = decoder2.root.refs.get(refId);
    index = itemByRefId ? ref.findIndex((value2) => value2 === itemByRefId) : ref.length;
  } else {
    index = decode2.number(bytes, it);
  }
  const type2 = ref[$childType];
  let dynamicIndex = index;
  const { value, previousValue } = decodeValue(decoder2, operation, ref, index, type2, bytes, it, allChanges);
  if (value !== null && value !== void 0 && value !== previousValue) {
    ref["$setAt"](index, value, operation);
  }
  if (previousValue !== value) {
    allChanges.push({
      ref,
      refId: decoder2.currentRefId,
      op: operation,
      field: "",
      // FIXME: remove this
      dynamicIndex,
      value,
      previousValue
    });
  }
};
var EncodeSchemaError = class extends Error {
};
function assertType(value, type2, klass, field) {
  let typeofTarget;
  let allowNull = false;
  switch (type2) {
    case "number":
    case "int8":
    case "uint8":
    case "int16":
    case "uint16":
    case "int32":
    case "uint32":
    case "int64":
    case "uint64":
    case "float32":
    case "float64":
      typeofTarget = "number";
      if (isNaN(value)) {
        console.log(`trying to encode "NaN" in ${klass.constructor.name}#${field}`);
      }
      break;
    case "bigint64":
    case "biguint64":
      typeofTarget = "bigint";
      break;
    case "string":
      typeofTarget = "string";
      allowNull = true;
      break;
    case "boolean":
      return;
    default:
      return;
  }
  if (typeof value !== typeofTarget && (!allowNull || allowNull && value !== null)) {
    let foundValue = `'${JSON.stringify(value)}'${value && value.constructor && ` (${value.constructor.name})` || ""}`;
    throw new EncodeSchemaError(`a '${typeofTarget}' was expected, but ${foundValue} was provided in ${klass.constructor.name}#${field}`);
  }
}
function assertInstanceType(value, type2, instance, field) {
  if (!(value instanceof type2)) {
    throw new EncodeSchemaError(`a '${type2.name}' was expected, but '${value && value.constructor.name}' was provided in ${instance.constructor.name}#${field}`);
  }
}
var _a$4;
var _b$4;
var DEFAULT_SORT = (a, b) => {
  const A = a.toString();
  const B = b.toString();
  if (A < B)
    return -1;
  else if (A > B)
    return 1;
  else
    return 0;
};
var _ArraySchema = class _ArraySchema {
  /**
   * Determine if a property must be filtered.
   * - If returns false, the property is NOT going to be encoded.
   * - If returns true, the property is going to be encoded.
   *
   * Encoding with "filters" happens in two steps:
   * - First, the encoder iterates over all "not owned" properties and encodes them.
   * - Then, the encoder iterates over all "owned" properties per instance and encodes them.
   */
  static [(_a$4 = $encoder, _b$4 = $decoder, $filter)](ref, index, view) {
    var _a4;
    return !view || typeof ref[$childType] === "string" || // view.items.has(ref[$getByIndex](index)[$changes])
    view.items.has((_a4 = ref["tmpItems"][index]) == null ? void 0 : _a4[$changes]);
  }
  static is(type2) {
    return (
      // type format: ["string"]
      Array.isArray(type2) || // type format: { array: "string" }
      type2["array"] !== void 0
    );
  }
  static from(iterable) {
    return new _ArraySchema(...Array.from(iterable));
  }
  constructor(...items) {
    this.items = [];
    this.tmpItems = [];
    this.deletedIndexes = {};
    Object.defineProperty(this, $childType, {
      value: void 0,
      enumerable: false,
      writable: true,
      configurable: true
    });
    const proxy = new Proxy(this, {
      get: (obj, prop) => {
        if (typeof prop !== "symbol" && // FIXME: d8 accuses this as low performance
        !isNaN(prop)) {
          return this.items[prop];
        } else {
          return Reflect.get(obj, prop);
        }
      },
      set: (obj, key, setValue) => {
        var _a4;
        if (typeof key !== "symbol" && !isNaN(key)) {
          if (setValue === void 0 || setValue === null) {
            obj.$deleteAt(key);
          } else {
            if (setValue[$changes]) {
              assertInstanceType(setValue, obj[$childType], obj, key);
              const previousValue = obj.items[key];
              if (previousValue !== void 0) {
                if (setValue[$changes].isNew) {
                  this[$changes].indexedOperation(Number(key), OPERATION.MOVE_AND_ADD);
                } else {
                  if ((obj[$changes].getChange(Number(key)) & OPERATION.DELETE) === OPERATION.DELETE) {
                    this[$changes].indexedOperation(Number(key), OPERATION.DELETE_AND_MOVE);
                  } else {
                    this[$changes].indexedOperation(Number(key), OPERATION.MOVE);
                  }
                }
                (_a4 = previousValue[$changes].root) == null ? void 0 : _a4.remove(previousValue[$changes]);
              } else if (setValue[$changes].isNew) {
                this[$changes].indexedOperation(Number(key), OPERATION.ADD);
              }
              setValue[$changes].setParent(this, obj[$changes].root, key);
            } else {
              obj.$changeAt(Number(key), setValue);
            }
            this.items[key] = setValue;
            this.tmpItems[key] = setValue;
          }
          return true;
        } else {
          return Reflect.set(obj, key, setValue);
        }
      },
      deleteProperty: (obj, prop) => {
        if (typeof prop === "number") {
          obj.$deleteAt(prop);
        } else {
          delete obj[prop];
        }
        return true;
      },
      has: (obj, key) => {
        if (typeof key !== "symbol" && !isNaN(Number(key))) {
          return Reflect.has(this.items, key);
        }
        return Reflect.has(obj, key);
      }
    });
    this[$changes] = new ChangeTree(proxy);
    this[$changes].indexes = {};
    if (items.length > 0) {
      this.push(...items);
    }
    return proxy;
  }
  set length(newLength) {
    if (newLength === 0) {
      this.clear();
    } else if (newLength < this.items.length) {
      this.splice(newLength, this.length - newLength);
    } else {
      console.warn("ArraySchema: can't set .length to a higher value than its length.");
    }
  }
  get length() {
    return this.items.length;
  }
  push(...values) {
    var _a4;
    let length = this.tmpItems.length;
    const changeTree = this[$changes];
    for (let i = 0, l = values.length; i < values.length; i++, length++) {
      const value = values[i];
      if (value === void 0 || value === null) {
        return;
      } else if (typeof value === "object" && this[$childType]) {
        assertInstanceType(value, this[$childType], this, i);
      }
      changeTree.indexedOperation(length, OPERATION.ADD, this.items.length);
      this.items.push(value);
      this.tmpItems.push(value);
      (_a4 = value[$changes]) == null ? void 0 : _a4.setParent(this, changeTree.root, length);
    }
    return length;
  }
  /**
   * Removes the last element from an array and returns it.
   */
  pop() {
    let index = -1;
    for (let i = this.tmpItems.length - 1; i >= 0; i--) {
      if (this.deletedIndexes[i] !== true) {
        index = i;
        break;
      }
    }
    if (index < 0) {
      return void 0;
    }
    this[$changes].delete(index, void 0, this.items.length - 1);
    this.deletedIndexes[index] = true;
    return this.items.pop();
  }
  at(index) {
    if (index < 0)
      index += this.length;
    return this.items[index];
  }
  // encoding only
  $changeAt(index, value) {
    var _a4, _b2, _c, _d;
    if (value === void 0 || value === null) {
      console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");
      return;
    }
    if (this.items[index] === value) {
      return;
    }
    const changeTree = this[$changes];
    const operation = (_c = (_b2 = (_a4 = changeTree.indexes) == null ? void 0 : _a4[index]) == null ? void 0 : _b2.op) != null ? _c : OPERATION.ADD;
    changeTree.change(index, operation);
    (_d = value[$changes]) == null ? void 0 : _d.setParent(this, changeTree.root, index);
  }
  // encoding only
  $deleteAt(index, operation) {
    this[$changes].delete(index, operation);
  }
  // decoding only
  $setAt(index, value, operation) {
    if (index === 0 && operation === OPERATION.ADD && this.items[index] !== void 0) {
      this.items.unshift(value);
    } else if (operation === OPERATION.DELETE_AND_MOVE) {
      this.items.splice(index, 1);
      this.items[index] = value;
    } else {
      this.items[index] = value;
    }
  }
  clear() {
    if (this.items.length === 0) {
      return;
    }
    const changeTree = this[$changes];
    changeTree.forEachChild((changeTree2, _) => {
      changeTree2.discard(true);
      const root = changeTree2.root;
      if (root !== void 0) {
        root.removeChangeFromChangeSet("changes", changeTree2);
        root.removeChangeFromChangeSet("allChanges", changeTree2);
        root.removeChangeFromChangeSet("allFilteredChanges", changeTree2);
      }
    });
    changeTree.discard(true);
    changeTree.operation(OPERATION.CLEAR);
    this.items.length = 0;
    this.tmpItems.length = 0;
  }
  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  // @ts-ignore
  concat(...items) {
    return new _ArraySchema(...this.items.concat(...items));
  }
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator) {
    return this.items.join(separator);
  }
  /**
   * Reverses the elements in an Array.
   */
  // @ts-ignore
  reverse() {
    this[$changes].operation(OPERATION.REVERSE);
    this.items.reverse();
    this.tmpItems.reverse();
    return this;
  }
  /**
   * Removes the first element from an array and returns it.
   */
  shift() {
    if (this.items.length === 0) {
      return void 0;
    }
    const index = this.tmpItems.findIndex((item, i) => item === this.items[0]);
    const changeTree = this[$changes];
    changeTree.delete(index);
    changeTree.shiftAllChangeIndexes(-1, index);
    return this.items.shift();
  }
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start, end) {
    const sliced = new _ArraySchema();
    sliced.push(...this.items.slice(start, end));
    return sliced;
  }
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn = DEFAULT_SORT) {
    const changeTree = this[$changes];
    const sortedItems = this.items.sort(compareFn);
    sortedItems.forEach((_, i) => changeTree.change(i, OPERATION.REPLACE));
    this.tmpItems.sort(compareFn);
    return this;
  }
  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the array from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   * @param insertItems Elements to insert into the array in place of the deleted elements.
   */
  splice(start, deleteCount = this.items.length - start, ...insertItems) {
    var _a4;
    const changeTree = this[$changes];
    const tmpItemsLength = this.tmpItems.length;
    const insertCount = insertItems.length;
    const indexes = [];
    for (let i = 0; i < tmpItemsLength; i++) {
      if (this.deletedIndexes[i] !== true) {
        indexes.push(i);
      }
    }
    for (let i = start; i < start + deleteCount; i++) {
      const index = indexes[i];
      changeTree.delete(index);
      this.deletedIndexes[index] = true;
    }
    for (let i = 0; i < insertCount; i++) {
      const addIndex = indexes[start] + i;
      changeTree.indexedOperation(addIndex, OPERATION.ADD);
      (_a4 = insertItems[i][$changes]) == null ? void 0 : _a4.setParent(this, changeTree.root, addIndex);
    }
    if (deleteCount > insertCount) {
      changeTree.shiftAllChangeIndexes(-(deleteCount - insertCount), indexes[start + insertCount]);
    }
    return this.items.splice(start, deleteCount, ...insertItems);
  }
  /**
   * Inserts new elements at the start of an array.
   * @param items  Elements to insert at the start of the Array.
   */
  unshift(...items) {
    const changeTree = this[$changes];
    changeTree.shiftChangeIndexes(items.length);
    if (changeTree.isFiltered) {
      setOperationAtIndex(changeTree.filteredChanges, this.items.length);
    } else {
      setOperationAtIndex(changeTree.allChanges, this.items.length);
    }
    items.forEach((_, index) => {
      changeTree.change(index, OPERATION.ADD);
    });
    this.tmpItems.unshift(...items);
    return this.items.unshift(...items);
  }
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement, fromIndex) {
    return this.items.indexOf(searchElement, fromIndex);
  }
  /**
   * Returns the index of the last occurrence of a specified value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
   */
  lastIndexOf(searchElement, fromIndex = this.length - 1) {
    return this.items.lastIndexOf(searchElement, fromIndex);
  }
  every(callbackfn, thisArg) {
    return this.items.every(callbackfn, thisArg);
  }
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(callbackfn, thisArg) {
    return this.items.some(callbackfn, thisArg);
  }
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(callbackfn, thisArg) {
    return this.items.forEach(callbackfn, thisArg);
  }
  /**
   * Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map(callbackfn, thisArg) {
    return this.items.map(callbackfn, thisArg);
  }
  filter(callbackfn, thisArg) {
    return this.items.filter(callbackfn, thisArg);
  }
  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(callbackfn, initialValue) {
    return this.items.reduce(callbackfn, initialValue);
  }
  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduceRight(callbackfn, initialValue) {
    return this.items.reduceRight(callbackfn, initialValue);
  }
  /**
   * Returns the value of the first element in the array where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find(predicate, thisArg) {
    return this.items.find(predicate, thisArg);
  }
  /**
   * Returns the index of the first element in the array where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the array, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(predicate, thisArg) {
    return this.items.findIndex(predicate, thisArg);
  }
  /**
   * Returns the this object after filling the section identified by start and end with value
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value, start, end) {
    throw new Error("ArraySchema#fill() not implemented");
  }
  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target2, start, end) {
    throw new Error("ArraySchema#copyWithin() not implemented");
  }
  /**
   * Returns a string representation of an array.
   */
  toString() {
    return this.items.toString();
  }
  /**
   * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
   */
  toLocaleString() {
    return this.items.toLocaleString();
  }
  /** Iterator */
  [Symbol.iterator]() {
    return this.items[Symbol.iterator]();
  }
  static get [Symbol.species]() {
    return _ArraySchema;
  }
  /**
   * Returns an iterable of key, value pairs for every entry in the array
   */
  entries() {
    return this.items.entries();
  }
  /**
   * Returns an iterable of keys in the array
   */
  keys() {
    return this.items.keys();
  }
  /**
   * Returns an iterable of values in the array
   */
  values() {
    return this.items.values();
  }
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement, fromIndex) {
    return this.items.includes(searchElement, fromIndex);
  }
  //
  // ES2022
  //
  /**
   * Calls a defined callback function on each element of an array. Then, flattens the result into
   * a new array.
   * This is identical to a map followed by flat with depth 1.
   *
   * @param callback A function that accepts up to three arguments. The flatMap method calls the
   * callback function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callback function. If
   * thisArg is omitted, undefined is used as the this value.
   */
  // @ts-ignore
  flatMap(callback, thisArg) {
    throw new Error("ArraySchema#flatMap() is not supported.");
  }
  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  // @ts-ignore
  flat(depth) {
    throw new Error("ArraySchema#flat() is not supported.");
  }
  findLast() {
    return this.items.findLast.apply(this.items, arguments);
  }
  findLastIndex(...args) {
    return this.items.findLastIndex.apply(this.items, arguments);
  }
  //
  // ES2023
  //
  with(index, value) {
    const copy2 = this.items.slice();
    if (index < 0)
      index += this.length;
    copy2[index] = value;
    return new _ArraySchema(...copy2);
  }
  toReversed() {
    return this.items.slice().reverse();
  }
  toSorted(compareFn) {
    return this.items.slice().sort(compareFn);
  }
  // @ts-ignore
  toSpliced(start, deleteCount, ...items) {
    return this.items.toSpliced.apply(copy, arguments);
  }
  [$getByIndex](index, isEncodeAll = false) {
    return isEncodeAll ? this.items[index] : this.deletedIndexes[index] ? this.items[index] : this.tmpItems[index] || this.items[index];
  }
  [$deleteByIndex](index) {
    this.items[index] = void 0;
    this.tmpItems[index] = void 0;
  }
  [$onEncodeEnd]() {
    this.tmpItems = this.items.slice();
    this.deletedIndexes = {};
  }
  [$onDecodeEnd]() {
    this.items = this.items.filter((item) => item !== void 0);
    this.tmpItems = this.items.slice();
  }
  toArray() {
    return this.items.slice(0);
  }
  toJSON() {
    return this.toArray().map((value) => {
      return typeof value["toJSON"] === "function" ? value["toJSON"]() : value;
    });
  }
  //
  // Decoding utilities
  //
  clone(isDecoding) {
    let cloned;
    if (isDecoding) {
      cloned = new _ArraySchema();
      cloned.push(...this.items);
    } else {
      cloned = new _ArraySchema(...this.map((item) => item[$changes] ? item.clone() : item));
    }
    return cloned;
  }
};
_ArraySchema[_a$4] = encodeArray;
_ArraySchema[_b$4] = decodeArray;
var ArraySchema = _ArraySchema;
registerType("array", { constructor: ArraySchema });
var _a$3;
var _b$3;
var _MapSchema = class _MapSchema {
  /**
   * Determine if a property must be filtered.
   * - If returns false, the property is NOT going to be encoded.
   * - If returns true, the property is going to be encoded.
   *
   * Encoding with "filters" happens in two steps:
   * - First, the encoder iterates over all "not owned" properties and encodes them.
   * - Then, the encoder iterates over all "owned" properties per instance and encodes them.
   */
  static [(_a$3 = $encoder, _b$3 = $decoder, $filter)](ref, index, view) {
    var _a4;
    return !view || typeof ref[$childType] === "string" || view.items.has(((_a4 = ref[$getByIndex](index)) != null ? _a4 : ref.deletedItems[index])[$changes]);
  }
  static is(type2) {
    return type2["map"] !== void 0;
  }
  constructor(initialValues) {
    this.$items = /* @__PURE__ */ new Map();
    this.$indexes = /* @__PURE__ */ new Map();
    this.deletedItems = {};
    this[$changes] = new ChangeTree(this);
    this[$changes].indexes = {};
    if (initialValues) {
      if (initialValues instanceof Map || initialValues instanceof _MapSchema) {
        initialValues.forEach((v, k) => this.set(k, v));
      } else {
        for (const k in initialValues) {
          this.set(k, initialValues[k]);
        }
      }
    }
    Object.defineProperty(this, $childType, {
      value: void 0,
      enumerable: false,
      writable: true,
      configurable: true
    });
  }
  /** Iterator */
  [Symbol.iterator]() {
    return this.$items[Symbol.iterator]();
  }
  get [Symbol.toStringTag]() {
    return this.$items[Symbol.toStringTag];
  }
  static get [Symbol.species]() {
    return _MapSchema;
  }
  set(key, value) {
    var _a4, _b2;
    if (value === void 0 || value === null) {
      throw new Error(`MapSchema#set('${key}', ${value}): trying to set ${value} value on '${key}'.`);
    } else if (typeof value === "object" && this[$childType]) {
      assertInstanceType(value, this[$childType], this, key);
    }
    key = key.toString();
    const changeTree = this[$changes];
    const isRef = value[$changes] !== void 0;
    let index;
    let operation;
    if (typeof changeTree.indexes[key] !== "undefined") {
      index = changeTree.indexes[key];
      operation = OPERATION.REPLACE;
      const previousValue = this.$items.get(key);
      if (previousValue === value) {
        return;
      } else if (isRef) {
        operation = OPERATION.DELETE_AND_ADD;
        if (previousValue !== void 0) {
          (_a4 = previousValue[$changes].root) == null ? void 0 : _a4.remove(previousValue[$changes]);
        }
      }
    } else {
      index = (_b2 = changeTree.indexes[$numFields]) != null ? _b2 : 0;
      operation = OPERATION.ADD;
      this.$indexes.set(index, key);
      changeTree.indexes[key] = index;
      changeTree.indexes[$numFields] = index + 1;
    }
    this.$items.set(key, value);
    changeTree.change(index, operation);
    if (isRef) {
      value[$changes].setParent(this, changeTree.root, index);
    }
    return this;
  }
  get(key) {
    return this.$items.get(key);
  }
  delete(key) {
    const index = this[$changes].indexes[key];
    this.deletedItems[index] = this[$changes].delete(index);
    return this.$items.delete(key);
  }
  clear() {
    const changeTree = this[$changes];
    changeTree.discard(true);
    changeTree.indexes = {};
    this.$indexes.clear();
    this.$items.clear();
    changeTree.operation(OPERATION.CLEAR);
  }
  has(key) {
    return this.$items.has(key);
  }
  forEach(callbackfn) {
    this.$items.forEach(callbackfn);
  }
  entries() {
    return this.$items.entries();
  }
  keys() {
    return this.$items.keys();
  }
  values() {
    return this.$items.values();
  }
  get size() {
    return this.$items.size;
  }
  setIndex(index, key) {
    this.$indexes.set(index, key);
  }
  getIndex(index) {
    return this.$indexes.get(index);
  }
  [$getByIndex](index) {
    return this.$items.get(this.$indexes.get(index));
  }
  [$deleteByIndex](index) {
    const key = this.$indexes.get(index);
    this.$items.delete(key);
    this.$indexes.delete(index);
  }
  [$onEncodeEnd]() {
    this.deletedItems = {};
  }
  toJSON() {
    const map = {};
    this.forEach((value, key) => {
      map[key] = typeof value["toJSON"] === "function" ? value["toJSON"]() : value;
    });
    return map;
  }
  //
  // Decoding utilities
  //
  // @ts-ignore
  clone(isDecoding) {
    let cloned;
    if (isDecoding) {
      cloned = Object.assign(new _MapSchema(), this);
    } else {
      cloned = new _MapSchema();
      this.forEach((value, key) => {
        if (value[$changes]) {
          cloned.set(key, value["clone"]());
        } else {
          cloned.set(key, value);
        }
      });
    }
    return cloned;
  }
};
_MapSchema[_a$3] = encodeKeyValueOperation;
_MapSchema[_b$3] = decodeKeyValueOperation;
var MapSchema = _MapSchema;
registerType("map", { constructor: MapSchema });
var DEFAULT_VIEW_TAG = -1;
function type(type2, options) {
  return function(target2, field) {
    var _a4, _b2;
    const constructor = target2.constructor;
    if (!type2) {
      throw new Error(`${constructor.name}: @type() reference provided for "${field}" is undefined. Make sure you don't have any circular dependencies.`);
    }
    TypeContext.register(constructor);
    const parentClass = Object.getPrototypeOf(constructor);
    const parentMetadata = parentClass[Symbol.metadata];
    const metadata = Metadata.initialize(constructor);
    let fieldIndex = metadata[field];
    if (metadata[fieldIndex] !== void 0) {
      if (metadata[fieldIndex].deprecated) {
        return;
      } else if (metadata[fieldIndex].type !== void 0) {
        try {
          throw new Error(`@colyseus/schema: Duplicate '${field}' definition on '${constructor.name}'.
Check @type() annotation`);
        } catch (e) {
          const definitionAtLine = e.stack.split("\n")[4].trim();
          throw new Error(`${e.message} ${definitionAtLine}`);
        }
      }
    } else {
      fieldIndex = (_b2 = (_a4 = metadata[$numFields]) != null ? _a4 : parentMetadata && parentMetadata[$numFields]) != null ? _b2 : -1;
      fieldIndex++;
    }
    if (options && options.manual) {
      Metadata.addField(metadata, fieldIndex, field, type2, {
        // do not declare getter/setter descriptor
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      const complexTypeKlass = Array.isArray(type2) ? getType("array") : typeof Object.keys(type2)[0] === "string" && getType(Object.keys(type2)[0]);
      const childType = complexTypeKlass ? Object.values(type2)[0] : type2;
      Metadata.addField(metadata, fieldIndex, field, type2, getPropertyDescriptor(`_${field}`, fieldIndex, childType, complexTypeKlass));
    }
  };
}
function getPropertyDescriptor(fieldCached, fieldIndex, type2, complexTypeKlass) {
  return {
    get: function() {
      return this[fieldCached];
    },
    set: function(value) {
      var _a4, _b2, _c;
      const previousValue = (_a4 = this[fieldCached]) != null ? _a4 : void 0;
      if (value === previousValue) {
        return;
      }
      if (value !== void 0 && value !== null) {
        if (complexTypeKlass) {
          if (complexTypeKlass.constructor === ArraySchema && !(value instanceof ArraySchema)) {
            value = new ArraySchema(...value);
          }
          if (complexTypeKlass.constructor === MapSchema && !(value instanceof MapSchema)) {
            value = new MapSchema(value);
          }
          value[$childType] = type2;
        } else if (typeof type2 !== "string") {
          assertInstanceType(value, type2, this, fieldCached.substring(1));
        } else {
          assertType(value, type2, this, fieldCached.substring(1));
        }
        const changeTree = this[$changes];
        if (previousValue !== void 0 && previousValue[$changes]) {
          (_b2 = changeTree.root) == null ? void 0 : _b2.remove(previousValue[$changes]);
          this.constructor[$track](changeTree, fieldIndex, OPERATION.DELETE_AND_ADD);
        } else {
          this.constructor[$track](changeTree, fieldIndex, OPERATION.ADD);
        }
        (_c = value[$changes]) == null ? void 0 : _c.setParent(this, changeTree.root, fieldIndex);
      } else if (previousValue !== void 0) {
        this[$changes].delete(fieldIndex);
      }
      this[fieldCached] = value;
    },
    enumerable: true,
    configurable: true
  };
}
function defineTypes(target2, fields, options) {
  for (let field in fields) {
    type(fields[field], options)(target2.prototype, field);
  }
  return target2;
}
function getIndent(level) {
  return new Array(level).fill(0).map((_, i) => i === level - 1 ? `\u2514\u2500 ` : `   `).join("");
}
function dumpChanges(schema) {
  const $root = schema[$changes].root;
  const dump = {
    ops: {},
    refs: []
  };
  $root.changes.forEach((changeTree) => {
    const changes = changeTree.indexedOperations;
    dump.refs.push(`refId#${changeTree.refId}`);
    for (const index in changes) {
      const op = changes[index];
      const opName = OPERATION[op];
      if (!dump.ops[opName]) {
        dump.ops[opName] = 0;
      }
      dump.ops[OPERATION[op]]++;
    }
  });
  return dump;
}
var _a$2;
var _b$2;
var _Schema = class _Schema {
  /**
   * Assign the property descriptors required to track changes on this instance.
   * @param instance
   */
  static initialize(instance) {
    var _a4;
    Object.defineProperty(instance, $changes, {
      value: new ChangeTree(instance),
      enumerable: false,
      writable: true
    });
    Object.defineProperties(instance, ((_a4 = instance.constructor[Symbol.metadata]) == null ? void 0 : _a4[$descriptors]) || {});
  }
  static is(type2) {
    return typeof type2[Symbol.metadata] === "object";
  }
  /**
   * Track property changes
   */
  static [(_a$2 = $encoder, _b$2 = $decoder, $track)](changeTree, index, operation = OPERATION.ADD) {
    changeTree.change(index, operation);
  }
  /**
   * Determine if a property must be filtered.
   * - If returns false, the property is NOT going to be encoded.
   * - If returns true, the property is going to be encoded.
   *
   * Encoding with "filters" happens in two steps:
   * - First, the encoder iterates over all "not owned" properties and encodes them.
   * - Then, the encoder iterates over all "owned" properties per instance and encodes them.
   */
  static [$filter](ref, index, view) {
    var _a4, _b2;
    const metadata = ref.constructor[Symbol.metadata];
    const tag = (_a4 = metadata[index]) == null ? void 0 : _a4.tag;
    if (view === void 0) {
      return tag === void 0;
    } else if (tag === void 0) {
      return true;
    } else if (tag === DEFAULT_VIEW_TAG) {
      return view.items.has(ref[$changes]);
    } else {
      const tags = (_b2 = view.tags) == null ? void 0 : _b2.get(ref[$changes]);
      return tags && tags.has(tag);
    }
  }
  // allow inherited classes to have a constructor
  constructor(...args) {
    _Schema.initialize(this);
    if (args[0]) {
      Object.assign(this, args[0]);
    }
  }
  assign(props) {
    Object.assign(this, props);
    return this;
  }
  /**
   * (Server-side): Flag a property to be encoded for the next patch.
   * @param instance Schema instance
   * @param property string representing the property name, or number representing the index of the property.
   * @param operation OPERATION to perform (detected automatically)
   */
  setDirty(property, operation) {
    const metadata = this.constructor[Symbol.metadata];
    this[$changes].change(metadata[metadata[property]].index, operation);
  }
  clone() {
    var _a4;
    const cloned = new this.constructor();
    const metadata = this.constructor[Symbol.metadata];
    for (const fieldIndex in metadata) {
      const field = metadata[fieldIndex].name;
      if (typeof this[field] === "object" && typeof ((_a4 = this[field]) == null ? void 0 : _a4.clone) === "function") {
        cloned[field] = this[field].clone();
      } else {
        cloned[field] = this[field];
      }
    }
    return cloned;
  }
  toJSON() {
    const obj = {};
    const metadata = this.constructor[Symbol.metadata];
    for (const index in metadata) {
      const field = metadata[index];
      const fieldName = field.name;
      if (!field.deprecated && this[fieldName] !== null && typeof this[fieldName] !== "undefined") {
        obj[fieldName] = typeof this[fieldName]["toJSON"] === "function" ? this[fieldName]["toJSON"]() : this[fieldName];
      }
    }
    return obj;
  }
  discardAllChanges() {
    this[$changes].discardAll();
  }
  [$getByIndex](index) {
    const metadata = this.constructor[Symbol.metadata];
    return this[metadata[index].name];
  }
  [$deleteByIndex](index) {
    const metadata = this.constructor[Symbol.metadata];
    this[metadata[index].name] = void 0;
  }
  /**
   * Inspect the `refId` of all Schema instances in the tree. Optionally display the contents of the instance.
   *
   * @param ref Schema instance
   * @param showContents display JSON contents of the instance
   * @returns
   */
  static debugRefIds(ref, showContents = false, level = 0) {
    const contents = showContents ? ` - ${JSON.stringify(ref.toJSON())}` : "";
    const changeTree = ref[$changes];
    const refId = changeTree.refId;
    let output = "";
    output += `${getIndent(level)}${ref.constructor.name} (refId: ${refId})${contents}
`;
    changeTree.forEachChild((childChangeTree) => output += this.debugRefIds(childChangeTree.ref, showContents, level + 1));
    return output;
  }
  /**
   * Return a string representation of the changes on a Schema instance.
   * The list of changes is cleared after each encode.
   *
   * @param instance Schema instance
   * @param isEncodeAll Return "full encode" instead of current change set.
   * @returns
   */
  static debugChanges(instance, isEncodeAll = false) {
    const changeTree = instance[$changes];
    const changeSet = isEncodeAll ? changeTree.allChanges : changeTree.changes;
    const changeSetName = isEncodeAll ? "allChanges" : "changes";
    let output = `${instance.constructor.name} (${changeTree.refId}) -> .${changeSetName}:
`;
    function dumpChangeSet(changeSet2) {
      changeSet2.operations.filter((op) => op).forEach((index) => {
        const operation = changeTree.indexedOperations[index];
        console.log({ index, operation });
        output += `- [${index}]: ${OPERATION[operation]} (${JSON.stringify(changeTree.getValue(Number(index), isEncodeAll))})
`;
      });
    }
    dumpChangeSet(changeSet);
    if (!isEncodeAll && changeTree.filteredChanges && changeTree.filteredChanges.operations.filter((op) => op).length > 0) {
      output += `${instance.constructor.name} (${changeTree.refId}) -> .filteredChanges:
`;
      dumpChangeSet(changeTree.filteredChanges);
    }
    if (isEncodeAll && changeTree.allFilteredChanges && changeTree.allFilteredChanges.operations.filter((op) => op).length > 0) {
      output += `${instance.constructor.name} (${changeTree.refId}) -> .allFilteredChanges:
`;
      dumpChangeSet(changeTree.allFilteredChanges);
    }
    return output;
  }
  static debugChangesDeep(ref, changeSetName = "changes") {
    var _a4, _b2;
    let output = "";
    const rootChangeTree = ref[$changes];
    const root = rootChangeTree.root;
    const changeTrees = /* @__PURE__ */ new Map();
    const instanceRefIds = [];
    let totalOperations = 0;
    for (const [refId, changes] of Object.entries(root[changeSetName])) {
      const changeTree = root.changeTrees[refId];
      let includeChangeTree = false;
      let parentChangeTrees = [];
      let parentChangeTree = (_a4 = changeTree.parent) == null ? void 0 : _a4[$changes];
      if (changeTree === rootChangeTree) {
        includeChangeTree = true;
      } else {
        while (parentChangeTree !== void 0) {
          parentChangeTrees.push(parentChangeTree);
          if (parentChangeTree.ref === ref) {
            includeChangeTree = true;
            break;
          }
          parentChangeTree = (_b2 = parentChangeTree.parent) == null ? void 0 : _b2[$changes];
        }
      }
      if (includeChangeTree) {
        instanceRefIds.push(changeTree.refId);
        totalOperations += Object.keys(changes).length;
        changeTrees.set(changeTree, parentChangeTrees.reverse());
      }
    }
    output += "---\n";
    output += `root refId: ${rootChangeTree.refId}
`;
    output += `Total instances: ${instanceRefIds.length} (refIds: ${instanceRefIds.join(", ")})
`;
    output += `Total changes: ${totalOperations}
`;
    output += "---\n";
    const visitedParents = /* @__PURE__ */ new WeakSet();
    for (const [changeTree, parentChangeTrees] of changeTrees.entries()) {
      parentChangeTrees.forEach((parentChangeTree, level2) => {
        if (!visitedParents.has(parentChangeTree)) {
          output += `${getIndent(level2)}${parentChangeTree.ref.constructor.name} (refId: ${parentChangeTree.refId})
`;
          visitedParents.add(parentChangeTree);
        }
      });
      const changes = changeTree.indexedOperations;
      const level = parentChangeTrees.length;
      const indent = getIndent(level);
      const parentIndex = level > 0 ? `(${changeTree.parentIndex}) ` : "";
      output += `${indent}${parentIndex}${changeTree.ref.constructor.name} (refId: ${changeTree.refId}) - changes: ${Object.keys(changes).length}
`;
      for (const index in changes) {
        const operation = changes[index];
        output += `${getIndent(level + 1)}${OPERATION[operation]}: ${index}
`;
      }
    }
    return `${output}`;
  }
};
_Schema[_a$2] = encodeSchemaOperation;
_Schema[_b$2] = decodeSchemaOperation;
var Schema = _Schema;
var _a$1;
var _b$1;
var _CollectionSchema = class _CollectionSchema {
  /**
   * Determine if a property must be filtered.
   * - If returns false, the property is NOT going to be encoded.
   * - If returns true, the property is going to be encoded.
   *
   * Encoding with "filters" happens in two steps:
   * - First, the encoder iterates over all "not owned" properties and encodes them.
   * - Then, the encoder iterates over all "owned" properties per instance and encodes them.
   */
  static [(_a$1 = $encoder, _b$1 = $decoder, $filter)](ref, index, view) {
    return !view || typeof ref[$childType] === "string" || view.items.has(ref[$getByIndex](index)[$changes]);
  }
  static is(type2) {
    return type2["collection"] !== void 0;
  }
  constructor(initialValues) {
    this.$items = /* @__PURE__ */ new Map();
    this.$indexes = /* @__PURE__ */ new Map();
    this.$refId = 0;
    this[$changes] = new ChangeTree(this);
    this[$changes].indexes = {};
    if (initialValues) {
      initialValues.forEach((v) => this.add(v));
    }
    Object.defineProperty(this, $childType, {
      value: void 0,
      enumerable: false,
      writable: true,
      configurable: true
    });
  }
  add(value) {
    const index = this.$refId++;
    const isRef = value[$changes] !== void 0;
    if (isRef) {
      value[$changes].setParent(this, this[$changes].root, index);
    }
    this[$changes].indexes[index] = index;
    this.$indexes.set(index, index);
    this.$items.set(index, value);
    this[$changes].change(index);
    return index;
  }
  at(index) {
    const key = Array.from(this.$items.keys())[index];
    return this.$items.get(key);
  }
  entries() {
    return this.$items.entries();
  }
  delete(item) {
    const entries = this.$items.entries();
    let index;
    let entry;
    while (entry = entries.next()) {
      if (entry.done) {
        break;
      }
      if (item === entry.value[1]) {
        index = entry.value[0];
        break;
      }
    }
    if (index === void 0) {
      return false;
    }
    this[$changes].delete(index);
    this.$indexes.delete(index);
    return this.$items.delete(index);
  }
  clear() {
    const changeTree = this[$changes];
    changeTree.discard(true);
    changeTree.indexes = {};
    this.$indexes.clear();
    this.$items.clear();
    changeTree.operation(OPERATION.CLEAR);
  }
  has(value) {
    return Array.from(this.$items.values()).some((v) => v === value);
  }
  forEach(callbackfn) {
    this.$items.forEach((value, key, _) => callbackfn(value, key, this));
  }
  values() {
    return this.$items.values();
  }
  get size() {
    return this.$items.size;
  }
  /** Iterator */
  [Symbol.iterator]() {
    return this.$items.values();
  }
  setIndex(index, key) {
    this.$indexes.set(index, key);
  }
  getIndex(index) {
    return this.$indexes.get(index);
  }
  [$getByIndex](index) {
    return this.$items.get(this.$indexes.get(index));
  }
  [$deleteByIndex](index) {
    const key = this.$indexes.get(index);
    this.$items.delete(key);
    this.$indexes.delete(index);
  }
  toArray() {
    return Array.from(this.$items.values());
  }
  toJSON() {
    const values = [];
    this.forEach((value, key) => {
      values.push(typeof value["toJSON"] === "function" ? value["toJSON"]() : value);
    });
    return values;
  }
  //
  // Decoding utilities
  //
  clone(isDecoding) {
    let cloned;
    if (isDecoding) {
      cloned = Object.assign(new _CollectionSchema(), this);
    } else {
      cloned = new _CollectionSchema();
      this.forEach((value) => {
        if (value[$changes]) {
          cloned.add(value["clone"]());
        } else {
          cloned.add(value);
        }
      });
    }
    return cloned;
  }
};
_CollectionSchema[_a$1] = encodeKeyValueOperation;
_CollectionSchema[_b$1] = decodeKeyValueOperation;
var CollectionSchema = _CollectionSchema;
registerType("collection", { constructor: CollectionSchema });
var _a2;
var _b;
var _SetSchema = class _SetSchema {
  /**
   * Determine if a property must be filtered.
   * - If returns false, the property is NOT going to be encoded.
   * - If returns true, the property is going to be encoded.
   *
   * Encoding with "filters" happens in two steps:
   * - First, the encoder iterates over all "not owned" properties and encodes them.
   * - Then, the encoder iterates over all "owned" properties per instance and encodes them.
   */
  static [(_a2 = $encoder, _b = $decoder, $filter)](ref, index, view) {
    return !view || typeof ref[$childType] === "string" || view.items.has(ref[$getByIndex](index)[$changes]);
  }
  static is(type2) {
    return type2["set"] !== void 0;
  }
  constructor(initialValues) {
    this.$items = /* @__PURE__ */ new Map();
    this.$indexes = /* @__PURE__ */ new Map();
    this.$refId = 0;
    this[$changes] = new ChangeTree(this);
    this[$changes].indexes = {};
    if (initialValues) {
      initialValues.forEach((v) => this.add(v));
    }
    Object.defineProperty(this, $childType, {
      value: void 0,
      enumerable: false,
      writable: true,
      configurable: true
    });
  }
  add(value) {
    var _a4, _b2;
    if (this.has(value)) {
      return false;
    }
    const index = this.$refId++;
    if (value[$changes] !== void 0) {
      value[$changes].setParent(this, this[$changes].root, index);
    }
    const operation = (_b2 = (_a4 = this[$changes].indexes[index]) == null ? void 0 : _a4.op) != null ? _b2 : OPERATION.ADD;
    this[$changes].indexes[index] = index;
    this.$indexes.set(index, index);
    this.$items.set(index, value);
    this[$changes].change(index, operation);
    return index;
  }
  entries() {
    return this.$items.entries();
  }
  delete(item) {
    const entries = this.$items.entries();
    let index;
    let entry;
    while (entry = entries.next()) {
      if (entry.done) {
        break;
      }
      if (item === entry.value[1]) {
        index = entry.value[0];
        break;
      }
    }
    if (index === void 0) {
      return false;
    }
    this[$changes].delete(index);
    this.$indexes.delete(index);
    return this.$items.delete(index);
  }
  clear() {
    const changeTree = this[$changes];
    changeTree.discard(true);
    changeTree.indexes = {};
    this.$indexes.clear();
    this.$items.clear();
    changeTree.operation(OPERATION.CLEAR);
  }
  has(value) {
    const values = this.$items.values();
    let has = false;
    let entry;
    while (entry = values.next()) {
      if (entry.done) {
        break;
      }
      if (value === entry.value) {
        has = true;
        break;
      }
    }
    return has;
  }
  forEach(callbackfn) {
    this.$items.forEach((value, key, _) => callbackfn(value, key, this));
  }
  values() {
    return this.$items.values();
  }
  get size() {
    return this.$items.size;
  }
  /** Iterator */
  [Symbol.iterator]() {
    return this.$items.values();
  }
  setIndex(index, key) {
    this.$indexes.set(index, key);
  }
  getIndex(index) {
    return this.$indexes.get(index);
  }
  [$getByIndex](index) {
    return this.$items.get(this.$indexes.get(index));
  }
  [$deleteByIndex](index) {
    const key = this.$indexes.get(index);
    this.$items.delete(key);
    this.$indexes.delete(index);
  }
  toArray() {
    return Array.from(this.$items.values());
  }
  toJSON() {
    const values = [];
    this.forEach((value, key) => {
      values.push(typeof value["toJSON"] === "function" ? value["toJSON"]() : value);
    });
    return values;
  }
  //
  // Decoding utilities
  //
  clone(isDecoding) {
    let cloned;
    if (isDecoding) {
      cloned = Object.assign(new _SetSchema(), this);
    } else {
      cloned = new _SetSchema();
      this.forEach((value) => {
        if (value[$changes]) {
          cloned.add(value["clone"]());
        } else {
          cloned.add(value);
        }
      });
    }
    return cloned;
  }
};
_SetSchema[_a2] = encodeKeyValueOperation;
_SetSchema[_b] = decodeKeyValueOperation;
var SetSchema = _SetSchema;
registerType("set", { constructor: SetSchema });
function __decorate(decorators, target2, key, desc) {
  var c = arguments.length, r = c < 3 ? target2 : desc === null ? desc = Object.getOwnPropertyDescriptor(target2, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target2, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target2, key, r) : d(target2, key)) || r;
  return c > 3 && r && Object.defineProperty(target2, key, r), r;
}
function spliceOne(arr, index) {
  if (index === -1 || index >= arr.length) {
    return false;
  }
  const len = arr.length - 1;
  for (let i = index; i < len; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = len;
  return true;
}
var Root = class {
  constructor(types) {
    this.types = types;
    this.nextUniqueId = 0;
    this.refCount = {};
    this.changeTrees = {};
    this.allChanges = [];
    this.allFilteredChanges = [];
    this.changes = [];
    this.filteredChanges = [];
  }
  getNextUniqueId() {
    return this.nextUniqueId++;
  }
  add(changeTree) {
    changeTree.ensureRefId();
    const isNewChangeTree = this.changeTrees[changeTree.refId] === void 0;
    if (isNewChangeTree) {
      this.changeTrees[changeTree.refId] = changeTree;
    }
    const previousRefCount = this.refCount[changeTree.refId];
    if (previousRefCount === 0) {
      const ops = changeTree.allChanges.operations;
      let len = ops.length;
      while (len--) {
        changeTree.indexedOperations[ops[len]] = OPERATION.ADD;
        setOperationAtIndex(changeTree.changes, len);
      }
    }
    this.refCount[changeTree.refId] = (previousRefCount || 0) + 1;
    return isNewChangeTree;
  }
  remove(changeTree) {
    const refCount = this.refCount[changeTree.refId] - 1;
    if (refCount <= 0) {
      changeTree.root = void 0;
      delete this.changeTrees[changeTree.refId];
      this.removeChangeFromChangeSet("allChanges", changeTree);
      this.removeChangeFromChangeSet("changes", changeTree);
      if (changeTree.filteredChanges) {
        this.removeChangeFromChangeSet("allFilteredChanges", changeTree);
        this.removeChangeFromChangeSet("filteredChanges", changeTree);
      }
      this.refCount[changeTree.refId] = 0;
    } else {
      this.refCount[changeTree.refId] = refCount;
      if (changeTree.filteredChanges !== void 0) {
        this.removeChangeFromChangeSet("filteredChanges", changeTree);
        enqueueChangeTree(this, changeTree, "filteredChanges");
      } else {
        this.removeChangeFromChangeSet("changes", changeTree);
        enqueueChangeTree(this, changeTree, "changes");
      }
    }
    changeTree.forEachChild((child, _) => this.remove(child));
    return refCount;
  }
  removeChangeFromChangeSet(changeSetName, changeTree) {
    const changeSet = this[changeSetName];
    if (spliceOne(changeSet, changeSet.indexOf(changeTree))) {
      changeTree[changeSetName].queueRootIndex = -1;
      return true;
    }
  }
  clear() {
    this.changes.length = 0;
  }
};
var _Encoder = class _Encoder {
  // 8KB
  constructor(state2) {
    this.sharedBuffer = Buffer.allocUnsafe(_Encoder.BUFFER_SIZE);
    this.context = new TypeContext(state2.constructor);
    this.root = new Root(this.context);
    this.setState(state2);
  }
  setState(state2) {
    this.state = state2;
    this.state[$changes].setRoot(this.root);
  }
  encode(it = { offset: 0 }, view, buffer = this.sharedBuffer, changeSetName = "changes", isEncodeAll = changeSetName === "allChanges", initialOffset = it.offset) {
    var _a4, _b2;
    const hasView = view !== void 0;
    const rootChangeTree = this.state[$changes];
    const shouldDiscardChanges = !isEncodeAll && !hasView;
    const changeTrees = this.root[changeSetName];
    for (let i = 0, numChangeTrees = changeTrees.length; i < numChangeTrees; i++) {
      const changeTree = changeTrees[i];
      if (hasView) {
        if (!view.items.has(changeTree)) {
          view.invisible.add(changeTree);
          continue;
        } else if (view.invisible.has(changeTree)) {
          view.invisible.delete(changeTree);
        }
      }
      const operations = changeTree[changeSetName];
      const ref = changeTree.ref;
      const numChanges = operations.operations.length;
      if (numChanges === 0) {
        continue;
      }
      const ctor = ref.constructor;
      const encoder = ctor[$encoder];
      const filter = ctor[$filter];
      const metadata = ctor[Symbol.metadata];
      if (hasView || it.offset > initialOffset || changeTree !== rootChangeTree) {
        buffer[it.offset++] = SWITCH_TO_STRUCTURE & 255;
        encode2.number(buffer, changeTree.refId, it);
      }
      for (let j = 0; j < numChanges; j++) {
        const fieldIndex = operations.operations[j];
        const operation = fieldIndex < 0 ? Math.abs(fieldIndex) : isEncodeAll ? OPERATION.ADD : changeTree.indexedOperations[fieldIndex];
        if (fieldIndex === void 0 || operation === void 0 || filter && !filter(ref, fieldIndex, view)) {
          continue;
        }
        encoder(this, buffer, changeTree, fieldIndex, operation, it, isEncodeAll, hasView, metadata);
      }
    }
    if (it.offset > buffer.byteLength) {
      const newSize = Math.ceil(it.offset / ((_a4 = Buffer.poolSize) != null ? _a4 : 8 * 1024)) * ((_b2 = Buffer.poolSize) != null ? _b2 : 8 * 1024);
      console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(newSize / 1024)} * 1024; // ${Math.round(newSize / 1024)} KB
`);
      buffer = Buffer.alloc(newSize, buffer);
      if (buffer === this.sharedBuffer) {
        this.sharedBuffer = buffer;
      }
      return this.encode({ offset: initialOffset }, view, buffer, changeSetName, isEncodeAll);
    } else {
      if (shouldDiscardChanges) {
        for (let i = 0, numChangeTrees = changeTrees.length; i < numChangeTrees; i++) {
          const changeTree = changeTrees[i];
          changeTree.discard();
          changeTree.isNew = false;
        }
      }
      return buffer.subarray(0, it.offset);
    }
  }
  encodeAll(it = { offset: 0 }, buffer = this.sharedBuffer) {
    return this.encode(it, void 0, buffer, "allChanges", true);
  }
  encodeAllView(view, sharedOffset, it, bytes = this.sharedBuffer) {
    const viewOffset = it.offset;
    this.encode(it, view, bytes, "allFilteredChanges", true, viewOffset);
    return Buffer.concat([
      bytes.subarray(0, sharedOffset),
      bytes.subarray(viewOffset, it.offset)
    ]);
  }
  debugChanges(field) {
    const rootChangeSet = typeof field === "string" ? this.root[field] : field;
    rootChangeSet.forEach((changeTree) => {
      const changeSet = changeTree[field];
      const metadata = changeTree.ref.constructor[Symbol.metadata];
      console.log("->", { ref: changeTree.ref.constructor.name, refId: changeTree.refId, changes: Object.keys(changeSet).length });
      for (const index in changeSet) {
        const op = changeSet[index];
        console.log("  ->", {
          index,
          field: metadata == null ? void 0 : metadata[index],
          op: OPERATION[op]
        });
      }
    });
  }
  encodeView(view, sharedOffset, it, bytes = this.sharedBuffer) {
    const viewOffset = it.offset;
    for (const [refId, changes] of view.changes) {
      const changeTree = this.root.changeTrees[refId];
      if (changeTree === void 0) {
        view.changes.delete(refId);
        continue;
      }
      const keys = Object.keys(changes);
      if (keys.length === 0) {
        continue;
      }
      const ref = changeTree.ref;
      const ctor = ref.constructor;
      const encoder = ctor[$encoder];
      const metadata = ctor[Symbol.metadata];
      bytes[it.offset++] = SWITCH_TO_STRUCTURE & 255;
      encode2.number(bytes, changeTree.refId, it);
      for (let i = 0, numChanges = keys.length; i < numChanges; i++) {
        const index = Number(keys[i]);
        const value = changeTree.ref[$getByIndex](index);
        const operation = value !== void 0 && changes[index] || OPERATION.DELETE;
        encoder(this, bytes, changeTree, index, operation, it, false, true, metadata);
      }
    }
    view.changes.clear();
    this.encode(it, view, bytes, "filteredChanges", false, viewOffset);
    return Buffer.concat([
      bytes.subarray(0, sharedOffset),
      bytes.subarray(viewOffset, it.offset)
    ]);
  }
  discardChanges() {
    var _a4, _b2;
    let length = this.root.changes.length;
    if (length > 0) {
      while (length--) {
        (_a4 = this.root.changes[length]) == null ? void 0 : _a4.endEncode();
      }
      this.root.changes.length = 0;
    }
    length = this.root.filteredChanges.length;
    if (length > 0) {
      while (length--) {
        (_b2 = this.root.filteredChanges[length]) == null ? void 0 : _b2.endEncode();
      }
      this.root.filteredChanges.length = 0;
    }
  }
  tryEncodeTypeId(bytes, baseType, targetType, it) {
    const baseTypeId = this.context.getTypeId(baseType);
    const targetTypeId = this.context.getTypeId(targetType);
    if (targetTypeId === void 0) {
      console.warn(`@colyseus/schema WARNING: Class "${targetType.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`);
      return;
    }
    if (baseTypeId !== targetTypeId) {
      bytes[it.offset++] = TYPE_ID & 255;
      encode2.number(bytes, targetTypeId, it);
    }
  }
  get hasChanges() {
    return this.root.changes.length > 0 || this.root.filteredChanges.length > 0;
  }
};
_Encoder.BUFFER_SIZE = typeof Buffer !== "undefined" && Buffer.poolSize || 8 * 1024;
var Encoder2 = _Encoder;
var DecodingWarning = class extends Error {
  constructor(message) {
    super(message);
    this.name = "DecodingWarning";
  }
};
var ReferenceTracker = class {
  constructor() {
    this.refs = /* @__PURE__ */ new Map();
    this.refIds = /* @__PURE__ */ new WeakMap();
    this.refCounts = {};
    this.deletedRefs = /* @__PURE__ */ new Set();
    this.callbacks = {};
    this.nextUniqueId = 0;
  }
  getNextUniqueId() {
    return this.nextUniqueId++;
  }
  // for decoding
  addRef(refId, ref, incrementCount = true) {
    this.refs.set(refId, ref);
    this.refIds.set(ref, refId);
    if (incrementCount) {
      this.refCounts[refId] = (this.refCounts[refId] || 0) + 1;
    }
    if (this.deletedRefs.has(refId)) {
      this.deletedRefs.delete(refId);
    }
  }
  // for decoding
  removeRef(refId) {
    const refCount = this.refCounts[refId];
    if (refCount === void 0) {
      try {
        throw new DecodingWarning("trying to remove refId that doesn't exist: " + refId);
      } catch (e) {
        console.warn(e);
      }
      return;
    }
    if (refCount === 0) {
      try {
        const ref = this.refs.get(refId);
        throw new DecodingWarning(`trying to remove refId '${refId}' with 0 refCount (${ref.constructor.name}: ${JSON.stringify(ref)})`);
      } catch (e) {
        console.warn(e);
      }
      return;
    }
    if ((this.refCounts[refId] = refCount - 1) <= 0) {
      this.deletedRefs.add(refId);
    }
  }
  clearRefs() {
    this.refs.clear();
    this.deletedRefs.clear();
    this.callbacks = {};
    this.refCounts = {};
  }
  // for decoding
  garbageCollectDeletedRefs() {
    this.deletedRefs.forEach((refId) => {
      if (this.refCounts[refId] > 0) {
        return;
      }
      const ref = this.refs.get(refId);
      if (Metadata.isValidInstance(ref)) {
        const metadata = ref.constructor[Symbol.metadata];
        for (const index in metadata) {
          const field = metadata[index].name;
          const childRefId = typeof ref[field] === "object" && this.refIds.get(ref[field]);
          if (childRefId) {
            this.removeRef(childRefId);
          }
        }
      } else {
        if (typeof Object.values(ref[$childType])[0] === "function") {
          Array.from(ref.values()).forEach((child) => this.removeRef(this.refIds.get(child)));
        }
      }
      this.refs.delete(refId);
      delete this.refCounts[refId];
      delete this.callbacks[refId];
    });
    this.deletedRefs.clear();
  }
  addCallback(refId, fieldOrOperation, callback) {
    if (refId === void 0) {
      const name = typeof fieldOrOperation === "number" ? OPERATION[fieldOrOperation] : fieldOrOperation;
      throw new Error(`Can't addCallback on '${name}' (refId is undefined)`);
    }
    if (!this.callbacks[refId]) {
      this.callbacks[refId] = {};
    }
    if (!this.callbacks[refId][fieldOrOperation]) {
      this.callbacks[refId][fieldOrOperation] = [];
    }
    this.callbacks[refId][fieldOrOperation].push(callback);
    return () => this.removeCallback(refId, fieldOrOperation, callback);
  }
  removeCallback(refId, field, callback) {
    var _a4, _b2, _c;
    const index = (_c = (_b2 = (_a4 = this.callbacks) == null ? void 0 : _a4[refId]) == null ? void 0 : _b2[field]) == null ? void 0 : _c.indexOf(callback);
    if (index !== -1) {
      spliceOne(this.callbacks[refId][field], index);
    }
  }
};
var Decoder2 = class {
  constructor(root, context) {
    this.currentRefId = 0;
    this.setState(root);
    this.context = context || new TypeContext(root.constructor);
  }
  setState(root) {
    this.state = root;
    this.root = new ReferenceTracker();
    this.root.addRef(0, root);
  }
  decode(bytes, it = { offset: 0 }, ref = this.state) {
    var _a4, _b2, _c;
    const allChanges = [];
    const $root = this.root;
    const totalBytes = bytes.byteLength;
    let decoder2 = ref["constructor"][$decoder];
    this.currentRefId = 0;
    while (it.offset < totalBytes) {
      if (bytes[it.offset] == SWITCH_TO_STRUCTURE) {
        it.offset++;
        this.currentRefId = decode2.number(bytes, it);
        const nextRef = $root.refs.get(this.currentRefId);
        if (!nextRef) {
          throw new Error(`"refId" not found: ${this.currentRefId}`);
        }
        (_a4 = ref[$onDecodeEnd]) == null ? void 0 : _a4.call(ref);
        ref = nextRef;
        decoder2 = ref.constructor[$decoder];
        continue;
      }
      const result = decoder2(this, bytes, it, ref, allChanges);
      if (result === DEFINITION_MISMATCH) {
        console.warn("@colyseus/schema: definition mismatch");
        const nextIterator = { offset: it.offset };
        while (it.offset < totalBytes) {
          if (bytes[it.offset] === SWITCH_TO_STRUCTURE) {
            nextIterator.offset = it.offset + 1;
            if ($root.refs.has(decode2.number(bytes, nextIterator))) {
              break;
            }
          }
          it.offset++;
        }
        continue;
      }
    }
    (_b2 = ref[$onDecodeEnd]) == null ? void 0 : _b2.call(ref);
    (_c = this.triggerChanges) == null ? void 0 : _c.call(this, allChanges);
    $root.garbageCollectDeletedRefs();
    return allChanges;
  }
  getInstanceType(bytes, it, defaultType) {
    let type2;
    if (bytes[it.offset] === TYPE_ID) {
      it.offset++;
      const type_id = decode2.number(bytes, it);
      type2 = this.context.get(type_id);
    }
    return type2 || defaultType;
  }
  createInstanceOfType(type2) {
    return new type2();
  }
  removeChildRefs(ref, allChanges) {
    const needRemoveRef = typeof ref[$childType] !== "string";
    const refId = this.root.refIds.get(ref);
    ref.forEach((value, key) => {
      allChanges.push({
        ref,
        refId,
        op: OPERATION.DELETE,
        field: key,
        value: void 0,
        previousValue: value
      });
      if (needRemoveRef) {
        this.root.removeRef(this.root.refIds.get(value));
      }
    });
  }
};
var ReflectionField = class extends Schema {
};
__decorate([
  type("string")
], ReflectionField.prototype, "name", void 0);
__decorate([
  type("string")
], ReflectionField.prototype, "type", void 0);
__decorate([
  type("number")
], ReflectionField.prototype, "referencedType", void 0);
var ReflectionType = class extends Schema {
  constructor() {
    super(...arguments);
    this.fields = new ArraySchema();
  }
};
__decorate([
  type("number")
], ReflectionType.prototype, "id", void 0);
__decorate([
  type("number")
], ReflectionType.prototype, "extendsId", void 0);
__decorate([
  type([ReflectionField])
], ReflectionType.prototype, "fields", void 0);
var Reflection = class _Reflection extends Schema {
  constructor() {
    super(...arguments);
    this.types = new ArraySchema();
  }
  /**
   * Encodes the TypeContext of an Encoder into a buffer.
   *
   * @param encoder Encoder instance
   * @param it
   * @returns
   */
  static encode(encoder, it = { offset: 0 }) {
    const context = encoder.context;
    const reflection = new _Reflection();
    const reflectionEncoder = new Encoder2(reflection);
    const rootType = context.schemas.get(encoder.state.constructor);
    if (rootType > 0) {
      reflection.rootType = rootType;
    }
    const buildType = (currentType, metadata) => {
      for (const fieldIndex in metadata) {
        const index = Number(fieldIndex);
        const fieldName = metadata[index].name;
        if (!Object.prototype.hasOwnProperty.call(metadata, fieldName)) {
          continue;
        }
        const field = new ReflectionField();
        field.name = fieldName;
        let fieldType;
        const type2 = metadata[index].type;
        if (typeof type2 === "string") {
          fieldType = type2;
        } else {
          let childTypeSchema;
          if (Schema.is(type2)) {
            fieldType = "ref";
            childTypeSchema = type2;
          } else {
            fieldType = Object.keys(type2)[0];
            if (typeof type2[fieldType] === "string") {
              fieldType += ":" + type2[fieldType];
            } else {
              childTypeSchema = type2[fieldType];
            }
          }
          field.referencedType = childTypeSchema ? context.getTypeId(childTypeSchema) : -1;
        }
        field.type = fieldType;
        currentType.fields.push(field);
      }
      reflection.types.push(currentType);
    };
    for (let typeid in context.types) {
      const klass = context.types[typeid];
      const type2 = new ReflectionType();
      type2.id = Number(typeid);
      const inheritFrom = Object.getPrototypeOf(klass);
      if (inheritFrom !== Schema) {
        type2.extendsId = context.schemas.get(inheritFrom);
      }
      buildType(type2, klass[Symbol.metadata]);
    }
    const buf = reflectionEncoder.encodeAll(it);
    return Buffer.from(buf, 0, it.offset);
  }
  /**
   * Decodes the TypeContext from a buffer into a Decoder instance.
   *
   * @param bytes Reflection.encode() output
   * @param it
   * @returns Decoder instance
   */
  static decode(bytes, it) {
    const reflection = new _Reflection();
    const reflectionDecoder = new Decoder2(reflection);
    reflectionDecoder.decode(bytes, it);
    const typeContext = new TypeContext();
    reflection.types.forEach((reflectionType) => {
      var _a4;
      const parentClass = (_a4 = typeContext.get(reflectionType.extendsId)) != null ? _a4 : Schema;
      const schema = class _ extends parentClass {
      };
      TypeContext.register(schema);
      typeContext.add(schema, reflectionType.id);
    }, {});
    const addFields = (metadata, reflectionType, parentFieldIndex) => {
      reflectionType.fields.forEach((field, i) => {
        const fieldIndex = parentFieldIndex + i;
        if (field.referencedType !== void 0) {
          let fieldType = field.type;
          let refType = typeContext.get(field.referencedType);
          if (!refType) {
            const typeInfo = field.type.split(":");
            fieldType = typeInfo[0];
            refType = typeInfo[1];
          }
          if (fieldType === "ref") {
            Metadata.addField(metadata, fieldIndex, field.name, refType);
          } else {
            Metadata.addField(metadata, fieldIndex, field.name, { [fieldType]: refType });
          }
        } else {
          Metadata.addField(metadata, fieldIndex, field.name, field.type);
        }
      });
    };
    reflection.types.forEach((reflectionType) => {
      const schema = typeContext.get(reflectionType.id);
      const metadata = Metadata.initialize(schema);
      const inheritedTypes = [];
      let parentType = reflectionType;
      do {
        inheritedTypes.push(parentType);
        parentType = reflection.types.find((t) => t.id === parentType.extendsId);
      } while (parentType);
      let parentFieldIndex = 0;
      inheritedTypes.reverse().forEach((reflectionType2) => {
        addFields(metadata, reflectionType2, parentFieldIndex);
        parentFieldIndex += reflectionType2.fields.length;
      });
    });
    const state2 = new (typeContext.get(reflection.rootType || 0))();
    return new Decoder2(state2, typeContext);
  }
};
__decorate([
  type([ReflectionType])
], Reflection.prototype, "types", void 0);
__decorate([
  type("number")
], Reflection.prototype, "rootType", void 0);
registerType("map", { constructor: MapSchema });
registerType("array", { constructor: ArraySchema });
registerType("set", { constructor: SetSchema });
registerType("collection", { constructor: CollectionSchema });

// node_modules/@colyseus/core/build/Protocol.mjs
var Protocol = /* @__PURE__ */ ((Protocol2) => {
  Protocol2[Protocol2["JOIN_ROOM"] = 10] = "JOIN_ROOM";
  Protocol2[Protocol2["ERROR"] = 11] = "ERROR";
  Protocol2[Protocol2["LEAVE_ROOM"] = 12] = "LEAVE_ROOM";
  Protocol2[Protocol2["ROOM_DATA"] = 13] = "ROOM_DATA";
  Protocol2[Protocol2["ROOM_STATE"] = 14] = "ROOM_STATE";
  Protocol2[Protocol2["ROOM_STATE_PATCH"] = 15] = "ROOM_STATE_PATCH";
  Protocol2[Protocol2["ROOM_DATA_BYTES"] = 17] = "ROOM_DATA_BYTES";
  Protocol2[Protocol2["WS_CLOSE_NORMAL"] = 1e3] = "WS_CLOSE_NORMAL";
  Protocol2[Protocol2["WS_CLOSE_GOING_AWAY"] = 1001] = "WS_CLOSE_GOING_AWAY";
  Protocol2[Protocol2["WS_CLOSE_CONSENTED"] = 4e3] = "WS_CLOSE_CONSENTED";
  Protocol2[Protocol2["WS_CLOSE_WITH_ERROR"] = 4002] = "WS_CLOSE_WITH_ERROR";
  Protocol2[Protocol2["WS_CLOSE_DEVMODE_RESTART"] = 4010] = "WS_CLOSE_DEVMODE_RESTART";
  Protocol2[Protocol2["WS_SERVER_DISCONNECT"] = 4201] = "WS_SERVER_DISCONNECT";
  Protocol2[Protocol2["WS_TOO_MANY_CLIENTS"] = 4202] = "WS_TOO_MANY_CLIENTS";
  return Protocol2;
})(Protocol || {});
var ErrorCode = /* @__PURE__ */ ((ErrorCode2) => {
  ErrorCode2[ErrorCode2["MATCHMAKE_NO_HANDLER"] = 4210] = "MATCHMAKE_NO_HANDLER";
  ErrorCode2[ErrorCode2["MATCHMAKE_INVALID_CRITERIA"] = 4211] = "MATCHMAKE_INVALID_CRITERIA";
  ErrorCode2[ErrorCode2["MATCHMAKE_INVALID_ROOM_ID"] = 4212] = "MATCHMAKE_INVALID_ROOM_ID";
  ErrorCode2[ErrorCode2["MATCHMAKE_UNHANDLED"] = 4213] = "MATCHMAKE_UNHANDLED";
  ErrorCode2[ErrorCode2["MATCHMAKE_EXPIRED"] = 4214] = "MATCHMAKE_EXPIRED";
  ErrorCode2[ErrorCode2["AUTH_FAILED"] = 4215] = "AUTH_FAILED";
  ErrorCode2[ErrorCode2["APPLICATION_ERROR"] = 4216] = "APPLICATION_ERROR";
  ErrorCode2[ErrorCode2["INVALID_PAYLOAD"] = 4217] = "INVALID_PAYLOAD";
  return ErrorCode2;
})(ErrorCode || {});
var packr = new Packr({
  useRecords: false
});
packr.encode(void 0);
var getMessageBytes = {
  [
    10
    /* JOIN_ROOM */
  ]: (reconnectionToken, serializerId, handshake) => {
    const it = { offset: 1 };
    packr.buffer[0] = 10;
    packr.buffer[it.offset++] = Buffer.byteLength(reconnectionToken, "utf8");
    encode2.utf8Write(packr.buffer, reconnectionToken, it);
    packr.buffer[it.offset++] = Buffer.byteLength(serializerId, "utf8");
    encode2.utf8Write(packr.buffer, serializerId, it);
    let handshakeLength = (handshake == null ? void 0 : handshake.byteLength) || 0;
    if (handshakeLength > packr.buffer.byteLength - it.offset) {
      packr.useBuffer(Buffer.alloc(it.offset + handshakeLength, packr.buffer));
    }
    if (handshakeLength > 0) {
      handshake.copy(packr.buffer, it.offset, 0, handshakeLength);
    }
    return packr.buffer.subarray(0, it.offset + handshakeLength);
  },
  [
    11
    /* ERROR */
  ]: (code, message = "") => {
    const it = { offset: 1 };
    packr.buffer[0] = 11;
    encode2.number(packr.buffer, code, it);
    encode2.string(packr.buffer, message, it);
    return packr.buffer.subarray(0, it.offset);
  },
  [
    14
    /* ROOM_STATE */
  ]: (bytes) => {
    return [14, ...bytes];
  },
  raw: (code, type2, message, rawMessage) => {
    const it = { offset: 1 };
    packr.buffer[0] = code;
    if (typeof type2 === "string") {
      encode2.string(packr.buffer, type2, it);
    } else {
      encode2.number(packr.buffer, type2, it);
    }
    if (message !== void 0) {
      packr.position = 0;
      if (process.env.NODE_ENV !== "production") {
        packr.useBuffer(packr.buffer);
      }
      const endOfBufferOffset = packr.pack(message, 2048 + it.offset).byteLength;
      return packr.buffer.subarray(0, endOfBufferOffset);
    } else if (rawMessage !== void 0) {
      if (rawMessage.length + it.offset > packr.buffer.byteLength) {
        packr.useBuffer(Buffer.alloc(it.offset + rawMessage.length, packr.buffer));
      }
      packr.buffer.set(rawMessage, it.offset);
      return packr.buffer.subarray(0, it.offset + rawMessage.byteLength);
    } else {
      return packr.buffer.subarray(0, it.offset);
    }
  }
};

// node_modules/@colyseus/core/build/errors/ServerError.mjs
var ServerError = class _ServerError extends Error {
  constructor(code = ErrorCode.MATCHMAKE_UNHANDLED, message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _ServerError);
    }
    this.name = "ServerError";
    this.code = code;
  }
};

// node_modules/@colyseus/core/build/Debug.mjs
var debugConnection = (0, import_debug.default)("colyseus:connection");
var debugDriver = (0, import_debug.default)("colyseus:driver");
var debugError = (0, import_debug.default)("colyseus:errors");
var debugMatchMaking = (0, import_debug.default)("colyseus:matchmaking");
var debugMessage = (0, import_debug.default)("colyseus:message");
var debugPatch = (0, import_debug.default)("colyseus:patch");
var debugPresence = (0, import_debug.default)("colyseus:presence");
var debugAndPrintError = (e) => {
  const message = e instanceof Error ? e.stack : e;
  if (!(e instanceof ServerError)) {
    logger.error(message);
  }
  debugError.call(debugError, message);
};

// node_modules/@colyseus/core/build/MatchMaker.mjs
var import_events2 = require("events");

// node_modules/@colyseus/core/build/utils/Utils.mjs
var import_nanoid = __toESM(require_nanoid(), 1);
var REMOTE_ROOM_SHORT_TIMEOUT = Number(process.env.COLYSEUS_PRESENCE_SHORT_TIMEOUT || 2e3);
var MAX_CONCURRENT_CREATE_ROOM_WAIT_TIME = Number(process.env.COLYSEUS_MAX_CONCURRENT_CREATE_ROOM_WAIT_TIME || 0.5);
function generateId(length = 9) {
  return (0, import_nanoid.default)(length);
}
function spliceOne2(arr, index) {
  if (index === -1 || index >= arr.length) {
    return false;
  }
  const len = arr.length - 1;
  for (let i = index; i < len; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = len;
  return true;
}
var Deferred = class _Deferred {
  constructor(promise) {
    this.promise = promise != null ? promise : new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
  then(func) {
    return this.promise.then.apply(this.promise, arguments);
  }
  catch(func) {
    return this.promise.catch(func);
  }
  static reject(reason) {
    return new _Deferred(Promise.reject(reason));
  }
  static resolve(value) {
    return new _Deferred(Promise.resolve(value));
  }
};
function wrapTryCatch(method, onError, exceptionClass, methodName, rethrow = false, ...additionalErrorArgs) {
  return (...args) => {
    try {
      const result = method(...args);
      if (typeof (result == null ? void 0 : result.catch) === "function") {
        return result.catch((e) => {
          onError(new exceptionClass(e, e.message, ...args, ...additionalErrorArgs), methodName);
          if (rethrow) {
            throw e;
          }
        });
      }
      return result;
    } catch (e) {
      onError(new exceptionClass(e, e.message, ...args, ...additionalErrorArgs), methodName);
      if (rethrow) {
        throw e;
      }
    }
  };
}

// node_modules/@colyseus/core/build/utils/DevMode.mjs
var import_debug2 = __toESM(require_src(), 1);
var debugDevMode = (0, import_debug2.default)("colyseus:devmode");
var isDevMode = false;

// node_modules/@colyseus/core/build/Room.mjs
var import_events = require("events");

// node_modules/@colyseus/core/build/serializer/NoneSerializer.mjs
var NoneSerializer = class {
  constructor() {
    this.id = "none";
  }
  reset(data) {
  }
  getFullState(client) {
    return null;
  }
  applyPatches(clients, state2) {
    return false;
  }
};

// node_modules/@colyseus/core/build/Transport.mjs
var ClientState = /* @__PURE__ */ ((ClientState2) => {
  ClientState2[ClientState2["JOINING"] = 0] = "JOINING";
  ClientState2[ClientState2["JOINED"] = 1] = "JOINED";
  ClientState2[ClientState2["RECONNECTED"] = 2] = "RECONNECTED";
  ClientState2[ClientState2["LEAVING"] = 3] = "LEAVING";
  return ClientState2;
})(ClientState || {});
var ClientArray = class extends Array {
  getById(sessionId) {
    return this.find((client) => client.sessionId === sessionId);
  }
  delete(client) {
    return spliceOne2(this, this.indexOf(client));
  }
};

// node_modules/@colyseus/core/build/serializer/SchemaSerializer.mjs
var SHARED_VIEW = {};
var SchemaSerializer = class {
  constructor() {
    this.id = "schema";
    this.hasFilters = false;
    this.needFullEncode = true;
    this.fullEncodeBuffer = Buffer.allocUnsafe(Encoder2.BUFFER_SIZE);
    this.sharedOffsetCache = { offset: 0 };
  }
  reset(newState) {
    this.encoder = new Encoder2(newState);
    this.hasFilters = this.encoder.context.hasFilters;
    this.fullEncodeBuffer[0] = Protocol.ROOM_STATE;
    if (this.hasFilters) {
      this.views = /* @__PURE__ */ new Map();
    }
  }
  getFullState(client) {
    if (this.needFullEncode || this.encoder.root.changes.length > 0) {
      this.sharedOffsetCache = { offset: 1 };
      this.fullEncodeCache = this.encoder.encodeAll(this.sharedOffsetCache, this.fullEncodeBuffer);
      this.needFullEncode = false;
    }
    if (this.hasFilters && (client == null ? void 0 : client.view)) {
      return this.encoder.encodeAllView(
        client.view,
        this.sharedOffsetCache.offset,
        __spreadValues({}, this.sharedOffsetCache),
        this.fullEncodeBuffer
      );
    } else {
      return this.fullEncodeCache;
    }
  }
  applyPatches(clients) {
    let numClients = clients.length;
    if (numClients == 0 || !this.encoder.hasChanges) {
      return false;
    }
    this.needFullEncode = true;
    if (debugPatch.enabled) {
      debugPatch.dumpChanges = dumpChanges(this.encoder.state);
    }
    const it = { offset: 1 };
    this.encoder.sharedBuffer[0] = Protocol.ROOM_STATE_PATCH;
    const encodedChanges = this.encoder.encode(it);
    if (!this.hasFilters) {
      while (numClients--) {
        const client = clients[numClients];
        if (client.state !== ClientState.JOINED) {
          continue;
        }
        client.raw(encodedChanges);
      }
    } else {
      const sharedOffset = it.offset;
      while (numClients--) {
        const client = clients[numClients];
        if (client.state !== ClientState.JOINED) {
          continue;
        }
        const view = client.view || SHARED_VIEW;
        let encodedView = this.views.get(view);
        if (encodedView === void 0) {
          encodedView = view === SHARED_VIEW ? encodedChanges : this.encoder.encodeView(client.view, sharedOffset, it);
          this.views.set(view, encodedView);
        }
        client.raw(encodedView);
      }
      this.views.clear();
    }
    this.encoder.discardChanges();
    if (debugPatch.enabled) {
      debugPatch(
        "%d bytes sent to %d clients, %j",
        encodedChanges.length,
        clients.length,
        debugPatch.dumpChanges
      );
    }
    return true;
  }
  handshake() {
    if (!this.handshakeCache) {
      this.handshakeCache = this.encoder.state && Reflection.encode(this.encoder);
    }
    return this.handshakeCache;
  }
};

// node_modules/@colyseus/core/build/errors/RoomExceptions.mjs
var OnCreateException = class extends Error {
  constructor(cause, message, options) {
    super(message, { cause });
    this.options = options;
    this.name = "OnCreateException";
  }
};
var OnAuthException = class extends Error {
  constructor(cause, message, client, options) {
    super(message, { cause });
    this.client = client;
    this.options = options;
    this.name = "OnAuthException";
  }
};
var OnJoinException = class extends Error {
  constructor(cause, message, client, options, auth) {
    super(message, { cause });
    this.client = client;
    this.options = options;
    this.auth = auth;
    this.name = "OnJoinException";
  }
};
var OnLeaveException = class extends Error {
  constructor(cause, message, client, consented) {
    super(message, { cause });
    this.client = client;
    this.consented = consented;
    this.name = "OnLeaveException";
  }
};
var OnDisposeException = class extends Error {
  constructor(cause, message) {
    super(message, { cause });
    this.name = "OnDisposeException";
  }
};
var OnMessageException = class extends Error {
  constructor(cause, message, client, payload, type2) {
    super(message, { cause });
    this.client = client;
    this.payload = payload;
    this.type = type2;
    this.name = "OnMessageException";
  }
};
var SimulationIntervalException = class extends Error {
  constructor(cause, message) {
    super(message, { cause });
    this.name = "SimulationIntervalException";
  }
};
var TimedEventException = class extends Error {
  constructor(cause, message, ...args) {
    super(message, { cause });
    this.name = "TimedEventException";
    this.args = args;
  }
};

// node_modules/@colyseus/core/build/Room.mjs
var DEFAULT_PATCH_RATE = 1e3 / 20;
var DEFAULT_SIMULATION_INTERVAL = 1e3 / 60;
var noneSerializer = new NoneSerializer();
var DEFAULT_SEAT_RESERVATION_TIME = Number(process.env.COLYSEUS_SEAT_RESERVATION_TIME || 15);
var __roomId, __roomName, __onLeaveConcurrent, __maxClientsReached, __maxClients, __autoDispose, __patchRate, __patchInterval, __state, __locked, __Room_instances, registerUncaughtExceptionHandlers_fn, _a3;
var Room = (_a3 = class {
  constructor() {
    __privateAdd(this, __Room_instances);
    __privateAdd(this, __roomId);
    __privateAdd(this, __roomName);
    __privateAdd(this, __onLeaveConcurrent);
    __privateAdd(this, __maxClientsReached);
    __privateAdd(this, __maxClients);
    __privateAdd(this, __autoDispose);
    __privateAdd(this, __patchRate);
    __privateAdd(this, __patchInterval);
    __privateAdd(this, __state);
    __privateAdd(this, __locked);
    this.clock = new src_default();
    __privateSet(this, __onLeaveConcurrent, 0);
    this.maxClients = Infinity;
    __privateSet(this, __maxClientsReached, false);
    this.autoDispose = true;
    this.patchRate = DEFAULT_PATCH_RATE;
    this.clients = new ClientArray();
    this._events = new import_events.EventEmitter();
    this.seatReservationTime = DEFAULT_SEAT_RESERVATION_TIME;
    this.reservedSeats = {};
    this.reservedSeatTimeouts = {};
    this._reconnections = {};
    this._reconnectingSessionId = /* @__PURE__ */ new Map();
    this.onMessageHandlers = {
      "__no_message_handler": {
        callback: (client, messageType, _) => {
          const errorMessage = `room onMessage for "${messageType}" not registered.`;
          debugAndPrintError(`${errorMessage} (roomId: ${this.roomId})`);
          if (isDevMode) {
            client.error(ErrorCode.INVALID_PAYLOAD, errorMessage);
          } else {
            client.leave(Protocol.WS_CLOSE_WITH_ERROR, errorMessage);
          }
        }
      }
    };
    this._serializer = noneSerializer;
    this._afterNextPatchQueue = [];
    this._internalState = 0;
    this._lockedExplicitly = false;
    __privateSet(this, __locked, false);
    this._events.once("dispose", () => {
      this._dispose().catch((e) => debugAndPrintError(`onDispose error: ${e && e.stack || e.message || e || "promise rejected"} (roomId: ${this.roomId})`)).finally(() => this._events.emit("disconnect"));
    });
    if (this.onUncaughtException !== void 0) {
      __privateMethod(this, __Room_instances, registerUncaughtExceptionHandlers_fn).call(this);
    }
  }
  /**
   * This property will change on these situations:
   * - The maximum number of allowed clients has been reached (`maxClients`)
   * - You manually locked, or unlocked the room using lock() or `unlock()`.
   *
   * @readonly
   */
  get locked() {
    return __privateGet(this, __locked);
  }
  get metadata() {
    return this.listing.metadata;
  }
  /**
   * This method is called by the MatchMaker before onCreate()
   * @internal
   */
  __init() {
    __privateSet(this, __state, this.state);
    __privateSet(this, __autoDispose, this.autoDispose);
    __privateSet(this, __patchRate, this.patchRate);
    __privateSet(this, __maxClients, this.maxClients);
    Object.defineProperties(this, {
      state: {
        enumerable: true,
        get: () => __privateGet(this, __state),
        set: (newState) => {
          if (newState[$changes] !== void 0) {
            this.setSerializer(new SchemaSerializer());
          } else if ("_definition" in newState) {
            throw new Error("@colyseus/schema v2 compatibility currently missing (reach out if you need it)");
          } else if ($changes === void 0) {
            throw new Error("Multiple @colyseus/schema versions detected. Please make sure you don't have multiple versions of @colyseus/schema installed.");
          }
          this._serializer.reset(newState);
          __privateSet(this, __state, newState);
        }
      },
      maxClients: {
        enumerable: true,
        get: () => __privateGet(this, __maxClients),
        set: (value) => {
          __privateSet(this, __maxClients, value);
          if (this._internalState === 1) {
            const hasReachedMaxClients = this.hasReachedMaxClients();
            if (!this._lockedExplicitly && __privateGet(this, __maxClientsReached) && !hasReachedMaxClients) {
              __privateSet(this, __maxClientsReached, false);
              __privateSet(this, __locked, false);
              this.listing.locked = false;
            }
            if (hasReachedMaxClients) {
              __privateSet(this, __maxClientsReached, true);
              __privateSet(this, __locked, true);
              this.listing.locked = true;
            }
            this.listing.maxClients = value;
            this.listing.save();
          }
        }
      },
      autoDispose: {
        enumerable: true,
        get: () => __privateGet(this, __autoDispose),
        set: (value) => {
          if (value !== __privateGet(this, __autoDispose) && this._internalState !== 2) {
            __privateSet(this, __autoDispose, value);
            this.resetAutoDisposeTimeout();
          }
        }
      },
      patchRate: {
        enumerable: true,
        get: () => __privateGet(this, __patchRate),
        set: (milliseconds) => {
          __privateSet(this, __patchRate, milliseconds);
          if (__privateGet(this, __patchInterval)) {
            clearInterval(__privateGet(this, __patchInterval));
            __privateSet(this, __patchInterval, void 0);
          }
          if (milliseconds !== null && milliseconds !== 0) {
            __privateSet(this, __patchInterval, setInterval(() => this.broadcastPatch(), milliseconds));
          }
        }
      }
    });
    this.patchRate = __privateGet(this, __patchRate);
    if (__privateGet(this, __state)) {
      this.state = __privateGet(this, __state);
    }
    this.resetAutoDisposeTimeout(this.seatReservationTime);
    this.clock.start();
  }
  /**
   * The name of the room you provided as first argument for `gameServer.define()`.
   *
   * @returns roomName string
   */
  get roomName() {
    return __privateGet(this, __roomName);
  }
  /**
   * Setting the name of the room. Overwriting this property is restricted.
   *
   * @param roomName
   */
  set roomName(roomName) {
    if (__privateGet(this, __roomName)) {
      throw new ServerError(ErrorCode.APPLICATION_ERROR, "'roomName' cannot be overwritten.");
    }
    __privateSet(this, __roomName, roomName);
  }
  /**
   * A unique, auto-generated, 9-character-long id of the room.
   * You may replace `this.roomId` during `onCreate()`.
   *
   * @returns roomId string
   */
  get roomId() {
    return __privateGet(this, __roomId);
  }
  /**
   * Setting the roomId, is restricted in room lifetime except upon room creation.
   *
   * @param roomId
   * @returns roomId string
   */
  set roomId(roomId) {
    if (this._internalState !== 0 && !isDevMode) {
      throw new ServerError(ErrorCode.APPLICATION_ERROR, "'roomId' can only be overridden upon room creation.");
    }
    __privateSet(this, __roomId, roomId);
  }
  onAuth(client, options, context) {
    return true;
  }
  static async onAuth(token, options, context) {
    return true;
  }
  /**
   * This method is called during graceful shutdown of the server process
   * You may override this method to dispose the room in your own way.
   *
   * Once process reaches room count of 0, the room process will be terminated.
   */
  onBeforeShutdown() {
    this.disconnect(
      isDevMode ? Protocol.WS_CLOSE_DEVMODE_RESTART : Protocol.WS_CLOSE_CONSENTED
    );
  }
  /**
   * Returns whether the sum of connected clients and reserved seats exceeds maximum number of clients.
   *
   * @returns boolean
   */
  hasReachedMaxClients() {
    return this.clients.length + Object.keys(this.reservedSeats).length >= this.maxClients || this._internalState === 2;
  }
  /**
   * Set the number of seconds a room can wait for a client to effectively join the room.
   * You should consider how long your `onAuth()` will have to wait for setting a different seat reservation time.
   * The default value is 15 seconds. You may set the `COLYSEUS_SEAT_RESERVATION_TIME`
   * environment variable if you'd like to change the seat reservation time globally.
   *
   * @default 15 seconds
   *
   * @param seconds - number of seconds.
   * @returns The modified Room object.
   */
  setSeatReservationTime(seconds) {
    this.seatReservationTime = seconds;
    return this;
  }
  hasReservedSeat(sessionId, reconnectionToken) {
    var _a4;
    const reservedSeat = this.reservedSeats[sessionId];
    if (reservedSeat === void 0) {
      return false;
    }
    if (reservedSeat[3]) {
      return reconnectionToken && ((_a4 = this._reconnections[reconnectionToken]) == null ? void 0 : _a4[0]) === sessionId && this._reconnectingSessionId.has(sessionId);
    } else {
      return reservedSeat[2] === false;
    }
  }
  checkReconnectionToken(reconnectionToken) {
    var _a4;
    const sessionId = (_a4 = this._reconnections[reconnectionToken]) == null ? void 0 : _a4[0];
    const reservedSeat = this.reservedSeats[sessionId];
    if (reservedSeat && reservedSeat[3]) {
      this._reconnectingSessionId.set(sessionId, reconnectionToken);
      return sessionId;
    } else {
      return void 0;
    }
  }
  /**
   * (Optional) Set a simulation interval that can change the state of the game.
   * The simulation interval is your game loop.
   *
   * @default 16.6ms (60fps)
   *
   * @param onTickCallback - You can implement your physics or world updates here!
   *  This is a good place to update the room state.
   * @param delay - Interval delay on executing `onTickCallback` in milliseconds.
   */
  setSimulationInterval(onTickCallback, delay = DEFAULT_SIMULATION_INTERVAL) {
    if (this._simulationInterval) {
      clearInterval(this._simulationInterval);
    }
    if (onTickCallback) {
      if (this.onUncaughtException !== void 0) {
        onTickCallback = wrapTryCatch(onTickCallback, this.onUncaughtException.bind(this), SimulationIntervalException, "setSimulationInterval");
      }
      this._simulationInterval = setInterval(() => {
        this.clock.tick();
        onTickCallback(this.clock.deltaTime);
      }, delay);
    }
  }
  /**
   * @deprecated Use `.patchRate=` instead.
   */
  setPatchRate(milliseconds) {
    this.patchRate = milliseconds;
  }
  /**
   * @deprecated Use `.state =` instead.
   */
  setState(newState) {
    this.state = newState;
  }
  setSerializer(serializer) {
    this._serializer = serializer;
  }
  async setMetadata(meta) {
    if (!this.listing.metadata) {
      this.listing.metadata = meta;
    } else {
      for (const field in meta) {
        if (!meta.hasOwnProperty(field)) {
          continue;
        }
        this.listing.metadata[field] = meta[field];
      }
      if ("markModified" in this.listing) {
        this.listing.markModified("metadata");
      }
    }
    if (this._internalState === 1) {
      await this.listing.save();
    }
  }
  async setPrivate(bool = true) {
    if (this.listing.private === bool) return;
    this.listing.private = bool;
    if (this._internalState === 1) {
      await this.listing.save();
    }
    this._events.emit("visibility-change", bool);
  }
  /**
   * Locking the room will remove it from the pool of available rooms for new clients to connect to.
   */
  async lock() {
    this._lockedExplicitly = arguments[0] === void 0;
    if (__privateGet(this, __locked)) {
      return;
    }
    __privateSet(this, __locked, true);
    await this.listing.updateOne({
      $set: { locked: __privateGet(this, __locked) }
    });
    this._events.emit("lock");
  }
  /**
   * Unlocking the room returns it to the pool of available rooms for new clients to connect to.
   */
  async unlock() {
    if (arguments[0] === void 0) {
      this._lockedExplicitly = false;
    }
    if (!__privateGet(this, __locked)) {
      return;
    }
    __privateSet(this, __locked, false);
    await this.listing.updateOne({
      $set: { locked: __privateGet(this, __locked) }
    });
    this._events.emit("unlock");
  }
  send(client, messageOrType, messageOrOptions, options) {
    logger.warn("DEPRECATION WARNING: use client.send(...) instead of this.send(client, ...)");
    client.send(messageOrType, messageOrOptions, options);
  }
  broadcast(type2, message, options) {
    if (options && options.afterNextPatch) {
      delete options.afterNextPatch;
      this._afterNextPatchQueue.push(["broadcast", arguments]);
      return;
    }
    this.broadcastMessageType(type2, message, options);
  }
  /**
   * Broadcast bytes (UInt8Arrays) to a particular room
   */
  broadcastBytes(type2, message, options) {
    if (options && options.afterNextPatch) {
      delete options.afterNextPatch;
      this._afterNextPatchQueue.push(["broadcastBytes", arguments]);
      return;
    }
    this.broadcastMessageType(type2, message, options);
  }
  /**
   * Checks whether mutations have occurred in the state, and broadcast them to all connected clients.
   */
  broadcastPatch() {
    if (this.onBeforePatch) {
      this.onBeforePatch(this.state);
    }
    if (!this._simulationInterval) {
      this.clock.tick();
    }
    if (!this.state) {
      return false;
    }
    const hasChanges = this._serializer.applyPatches(this.clients, this.state);
    this._dequeueAfterPatchMessages();
    return hasChanges;
  }
  onMessage(messageType, callback, validate) {
    this.onMessageHandlers[messageType] = this.onUncaughtException !== void 0 ? { validate, callback: wrapTryCatch(callback, this.onUncaughtException.bind(this), OnMessageException, "onMessage", false, messageType) } : { validate, callback };
    return () => delete this.onMessageHandlers[messageType];
  }
  /**
   * Disconnect all connected clients, and then dispose the room.
   *
   * @param closeCode WebSocket close code (default = 4000, which is a "consented leave")
   * @returns Promise<void>
   */
  disconnect(closeCode = Protocol.WS_CLOSE_CONSENTED) {
    if (this._internalState === 2) {
      return Promise.resolve(`disconnect() ignored: room (${this.roomId}) is already disposing.`);
    } else if (this._internalState === 0) {
      throw new Error("cannot disconnect during onCreate()");
    }
    this._internalState = 2;
    this.listing.remove();
    __privateSet(this, __autoDispose, true);
    const delayedDisconnection = new Promise((resolve) => this._events.once("disconnect", () => resolve()));
    for (const [_, reconnection] of Object.values(this._reconnections)) {
      reconnection.reject(new Error("disconnecting"));
    }
    let numClients = this.clients.length;
    if (numClients > 0) {
      while (numClients--) {
        this._forciblyCloseClient(this.clients[numClients], closeCode);
      }
    } else {
      this._events.emit("dispose");
    }
    return delayedDisconnection;
  }
  async ["_onJoin"](client, authContext) {
    var _a4;
    const sessionId = client.sessionId;
    client.reconnectionToken = generateId();
    if (this.reservedSeatTimeouts[sessionId]) {
      clearTimeout(this.reservedSeatTimeouts[sessionId]);
      delete this.reservedSeatTimeouts[sessionId];
    }
    if (this._autoDisposeTimeout) {
      clearTimeout(this._autoDisposeTimeout);
      this._autoDisposeTimeout = void 0;
    }
    const [joinOptions, authData, isConsumed, isWaitingReconnection] = this.reservedSeats[sessionId];
    if (isConsumed) {
      throw new ServerError(ErrorCode.MATCHMAKE_EXPIRED, "already consumed");
    }
    this.reservedSeats[sessionId][2] = true;
    debugMatchMaking("consuming seat reservation, sessionId: '%s' (roomId: %s)", client.sessionId, this.roomId);
    client._afterNextPatchQueue = this._afterNextPatchQueue;
    client.ref["onleave"] = (_) => client.state = ClientState.LEAVING;
    client.ref.once("close", client.ref["onleave"]);
    if (isWaitingReconnection) {
      const previousReconnectionToken = this._reconnectingSessionId.get(sessionId);
      if (previousReconnectionToken) {
        this.clients.push(client);
        await ((_a4 = this._reconnections[previousReconnectionToken]) == null ? void 0 : _a4[1].resolve(client));
      } else {
        const errorMessage = process.env.NODE_ENV === "production" ? "already consumed" : "bad reconnection token";
        throw new ServerError(ErrorCode.MATCHMAKE_EXPIRED, errorMessage);
      }
    } else {
      try {
        if (authData) {
          client.auth = authData;
        } else if (this.onAuth !== _a3.prototype.onAuth) {
          try {
            client.auth = await this.onAuth(client, joinOptions, authContext);
            if (!client.auth) {
              throw new ServerError(ErrorCode.AUTH_FAILED, "onAuth failed");
            }
          } catch (e) {
            delete this.reservedSeats[sessionId];
            await this._decrementClientCount();
            throw e;
          }
        }
        if (client.state === ClientState.LEAVING) {
          throw new ServerError(Protocol.WS_CLOSE_GOING_AWAY, "already disconnected");
        }
        this.clients.push(client);
        Object.defineProperty(this.reservedSeats, sessionId, {
          value: this.reservedSeats[sessionId],
          enumerable: false
        });
        if (this.onJoin) {
          await this.onJoin(client, joinOptions, client.auth);
        }
        if (client.state === ClientState.LEAVING) {
          throw new Error("early_leave");
        } else {
          delete this.reservedSeats[sessionId];
          this._events.emit("join", client);
        }
      } catch (e) {
        await this._onLeave(client, Protocol.WS_CLOSE_GOING_AWAY);
        delete this.reservedSeats[sessionId];
        if (!e.code) {
          e.code = ErrorCode.APPLICATION_ERROR;
        }
        throw e;
      }
    }
    if (client.state === ClientState.JOINING) {
      client.ref.removeListener("close", client.ref["onleave"]);
      client.ref["onleave"] = this._onLeave.bind(this, client);
      client.ref.once("close", client.ref["onleave"]);
      client.ref.on("message", this._onMessage.bind(this, client));
      client.raw(getMessageBytes[Protocol.JOIN_ROOM](
        client.reconnectionToken,
        this._serializer.id,
        this._serializer.handshake && this._serializer.handshake()
      ));
    }
  }
  /**
   * Allow the specified client to reconnect into the room. Must be used inside `onLeave()` method.
   * If seconds is provided, the reconnection is going to be cancelled after the provided amount of seconds.
   *
   * @param previousClient - The client which is to be waiting until re-connection happens.
   * @param seconds - Timeout period on re-connection in seconds.
   *
   * @returns Deferred<Client> - The differed is a promise like type.
   *  This type can forcibly reject the promise by calling `.reject()`.
   */
  allowReconnection(previousClient, seconds) {
    if (previousClient._enqueuedMessages !== void 0) {
      return Promise.reject(new Error("not joined"));
    }
    if (seconds === void 0) {
      console.warn('DEPRECATED: allowReconnection() requires a second argument. Using "manual" mode.');
      seconds = "manual";
    }
    if (seconds === "manual") {
      seconds = Infinity;
    }
    if (this._internalState === 2) {
      return Promise.reject(new Error("disposing"));
    }
    const sessionId = previousClient.sessionId;
    const reconnectionToken = previousClient.reconnectionToken;
    this._reserveSeat(sessionId, true, previousClient.auth, seconds, true);
    const reconnection = new Deferred();
    this._reconnections[reconnectionToken] = [sessionId, reconnection];
    if (seconds !== Infinity) {
      this.reservedSeatTimeouts[sessionId] = setTimeout(() => reconnection.reject(false), seconds * 1e3);
    }
    const cleanup = () => {
      delete this._reconnections[reconnectionToken];
      delete this.reservedSeats[sessionId];
      delete this.reservedSeatTimeouts[sessionId];
      this._reconnectingSessionId.delete(sessionId);
    };
    reconnection.then((newClient) => {
      newClient.auth = previousClient.auth;
      newClient.userData = previousClient.userData;
      previousClient.state = ClientState.RECONNECTED;
      previousClient.ref = newClient.ref;
      previousClient.reconnectionToken = newClient.reconnectionToken;
      clearTimeout(this.reservedSeatTimeouts[sessionId]);
      cleanup();
    }).catch(() => {
      cleanup();
      this.resetAutoDisposeTimeout();
    });
    return reconnection;
  }
  resetAutoDisposeTimeout(timeoutInSeconds = 1) {
    clearTimeout(this._autoDisposeTimeout);
    if (!__privateGet(this, __autoDispose)) {
      return;
    }
    this._autoDisposeTimeout = setTimeout(() => {
      this._autoDisposeTimeout = void 0;
      this._disposeIfEmpty();
    }, timeoutInSeconds * 1e3);
  }
  broadcastMessageType(type2, message, options = {}) {
    debugMessage("broadcast: %O (roomId: %s)", message, this.roomId);
    const encodedMessage = message instanceof Uint8Array ? getMessageBytes.raw(Protocol.ROOM_DATA_BYTES, type2, void 0, message) : getMessageBytes.raw(Protocol.ROOM_DATA, type2, message);
    const except = typeof options.except !== "undefined" ? Array.isArray(options.except) ? options.except : [options.except] : void 0;
    let numClients = this.clients.length;
    while (numClients--) {
      const client = this.clients[numClients];
      if (!except || !except.includes(client)) {
        client.enqueueRaw(encodedMessage);
      }
    }
  }
  sendFullState(client) {
    client.raw(this._serializer.getFullState(client));
  }
  _dequeueAfterPatchMessages() {
    const length = this._afterNextPatchQueue.length;
    if (length > 0) {
      for (let i = 0; i < length; i++) {
        const [target2, args] = this._afterNextPatchQueue[i];
        if (target2 === "broadcast") {
          this.broadcast.apply(this, args);
        } else {
          target2.raw.apply(target2, args);
        }
      }
      this._afterNextPatchQueue.splice(0, length);
    }
  }
  async _reserveSeat(sessionId, joinOptions = true, authData = void 0, seconds = this.seatReservationTime, allowReconnection = false, devModeReconnection) {
    if (!allowReconnection && this.hasReachedMaxClients()) {
      return false;
    }
    this.reservedSeats[sessionId] = [joinOptions, authData, false, allowReconnection];
    if (!allowReconnection) {
      await this._incrementClientCount();
      this.reservedSeatTimeouts[sessionId] = setTimeout(async () => {
        delete this.reservedSeats[sessionId];
        delete this.reservedSeatTimeouts[sessionId];
        await this._decrementClientCount();
      }, seconds * 1e3);
      this.resetAutoDisposeTimeout(seconds);
    }
    if (devModeReconnection) {
      this._reconnectingSessionId.set(sessionId, sessionId);
    }
    return true;
  }
  _disposeIfEmpty() {
    const willDispose = __privateGet(this, __onLeaveConcurrent) === 0 && // no "onLeave" calls in progress
    __privateGet(this, __autoDispose) && this._autoDisposeTimeout === void 0 && this.clients.length === 0 && Object.keys(this.reservedSeats).length === 0;
    if (willDispose) {
      this._events.emit("dispose");
    }
    return willDispose;
  }
  async _dispose() {
    this._internalState = 2;
    this.listing.remove();
    let userReturnData;
    if (this.onDispose) {
      userReturnData = this.onDispose();
    }
    if (__privateGet(this, __patchInterval)) {
      clearInterval(__privateGet(this, __patchInterval));
      __privateSet(this, __patchInterval, void 0);
    }
    if (this._simulationInterval) {
      clearInterval(this._simulationInterval);
      this._simulationInterval = void 0;
    }
    if (this._autoDisposeTimeout) {
      clearInterval(this._autoDisposeTimeout);
      this._autoDisposeTimeout = void 0;
    }
    this.clock.clear();
    this.clock.stop();
    return await (userReturnData || Promise.resolve());
  }
  _onMessage(client, buffer) {
    if (client.state === ClientState.LEAVING) {
      return;
    }
    const it = { offset: 1 };
    const code = buffer[0];
    if (!buffer) {
      debugAndPrintError(`${this.roomName} (roomId: ${this.roomId}), couldn't decode message: ${buffer}`);
      return;
    }
    if (code === Protocol.ROOM_DATA) {
      const messageType = decode2.stringCheck(buffer, it) ? decode2.string(buffer, it) : decode2.number(buffer, it);
      const messageTypeHandler = this.onMessageHandlers[messageType];
      let message;
      try {
        message = buffer.byteLength > it.offset ? unpack(buffer.subarray(it.offset, buffer.byteLength)) : void 0;
        debugMessage("received: '%s' -> %j (roomId: %s)", messageType, message, this.roomId);
        if ((messageTypeHandler == null ? void 0 : messageTypeHandler.validate) !== void 0) {
          message = messageTypeHandler.validate(message);
        }
      } catch (e) {
        debugAndPrintError(e);
        client.leave(Protocol.WS_CLOSE_WITH_ERROR);
        return;
      }
      if (messageTypeHandler) {
        messageTypeHandler.callback(client, message);
      } else {
        (this.onMessageHandlers["*"] || this.onMessageHandlers["__no_message_handler"]).callback(client, messageType, message);
      }
    } else if (code === Protocol.ROOM_DATA_BYTES) {
      const messageType = decode2.stringCheck(buffer, it) ? decode2.string(buffer, it) : decode2.number(buffer, it);
      const messageTypeHandler = this.onMessageHandlers[messageType];
      let message = buffer.subarray(it.offset, buffer.byteLength);
      debugMessage("received: '%s' -> %j (roomId: %s)", messageType, message, this.roomId);
      if ((messageTypeHandler == null ? void 0 : messageTypeHandler.validate) !== void 0) {
        message = messageTypeHandler.validate(message);
      }
      if (messageTypeHandler) {
        messageTypeHandler.callback(client, message);
      } else {
        (this.onMessageHandlers["*"] || this.onMessageHandlers["__no_message_handler"]).callback(client, messageType, message);
      }
    } else if (code === Protocol.JOIN_ROOM && client.state === ClientState.JOINING) {
      client.state = ClientState.JOINED;
      client._joinedAt = this.clock.elapsedTime;
      if (this.state) {
        this.sendFullState(client);
      }
      if (client._enqueuedMessages.length > 0) {
        client._enqueuedMessages.forEach((enqueued) => client.raw(enqueued));
      }
      delete client._enqueuedMessages;
    } else if (code === Protocol.LEAVE_ROOM) {
      this._forciblyCloseClient(client, Protocol.WS_CLOSE_CONSENTED);
    }
  }
  _forciblyCloseClient(client, closeCode) {
    client.ref.removeAllListeners("message");
    client.ref.removeListener("close", client.ref["onleave"]);
    this._onLeave(client, closeCode).then(() => client.leave(closeCode));
  }
  async _onLeave(client, code) {
    debugMatchMaking("onLeave, sessionId: '%s' (close code: %d, roomId: %s)", client.sessionId, code, this.roomId);
    client.state = ClientState.LEAVING;
    if (!this.clients.delete(client)) {
      return;
    }
    if (this.onLeave) {
      try {
        __privateWrapper(this, __onLeaveConcurrent)._++;
        await this.onLeave(client, code === Protocol.WS_CLOSE_CONSENTED);
      } catch (e) {
        debugAndPrintError(`onLeave error: ${e && e.message || e || "promise rejected"} (roomId: ${this.roomId})`);
      } finally {
        __privateWrapper(this, __onLeaveConcurrent)._--;
      }
    }
    if (this._reconnections[client.reconnectionToken]) {
      this._reconnections[client.reconnectionToken][1].catch(async () => {
        await this._onAfterLeave(client);
      });
    } else if (client.state !== ClientState.RECONNECTED) {
      await this._onAfterLeave(client);
    }
  }
  async _onAfterLeave(client) {
    const willDispose = await this._decrementClientCount();
    if (this.reservedSeats[client.sessionId] === void 0) {
      this._events.emit("leave", client, willDispose);
    }
  }
  async _incrementClientCount() {
    if (!__privateGet(this, __locked) && this.hasReachedMaxClients()) {
      __privateSet(this, __maxClientsReached, true);
      this.lock.call(this, true);
    }
    await this.listing.updateOne({
      $inc: { clients: 1 },
      $set: { locked: __privateGet(this, __locked) }
    });
  }
  async _decrementClientCount() {
    const willDispose = this._disposeIfEmpty();
    if (this._internalState === 2) {
      return true;
    }
    if (!willDispose) {
      if (__privateGet(this, __maxClientsReached) && !this._lockedExplicitly) {
        __privateSet(this, __maxClientsReached, false);
        this.unlock.call(this, true);
      }
      await this.listing.updateOne({
        $inc: { clients: -1 },
        $set: { locked: __privateGet(this, __locked) }
      });
    }
    return willDispose;
  }
}, __roomId = new WeakMap(), __roomName = new WeakMap(), __onLeaveConcurrent = new WeakMap(), __maxClientsReached = new WeakMap(), __maxClients = new WeakMap(), __autoDispose = new WeakMap(), __patchRate = new WeakMap(), __patchInterval = new WeakMap(), __state = new WeakMap(), __locked = new WeakMap(), __Room_instances = new WeakSet(), registerUncaughtExceptionHandlers_fn = function() {
  const onUncaughtException = this.onUncaughtException.bind(this);
  const originalSetTimeout = this.clock.setTimeout;
  this.clock.setTimeout = (cb, timeout, ...args) => {
    return originalSetTimeout.call(this.clock, wrapTryCatch(cb, onUncaughtException, TimedEventException, "setTimeout"), timeout, ...args);
  };
  const originalSetInterval = this.clock.setInterval;
  this.clock.setInterval = (cb, timeout, ...args) => {
    return originalSetInterval.call(this.clock, wrapTryCatch(cb, onUncaughtException, TimedEventException, "setInterval"), timeout, ...args);
  };
  if (this.onCreate !== void 0) {
    this.onCreate = wrapTryCatch(this.onCreate.bind(this), onUncaughtException, OnCreateException, "onCreate", true);
  }
  if (this.onAuth !== void 0) {
    this.onAuth = wrapTryCatch(this.onAuth.bind(this), onUncaughtException, OnAuthException, "onAuth", true);
  }
  if (this.onJoin !== void 0) {
    this.onJoin = wrapTryCatch(this.onJoin.bind(this), onUncaughtException, OnJoinException, "onJoin", true);
  }
  if (this.onLeave !== void 0) {
    this.onLeave = wrapTryCatch(this.onLeave.bind(this), onUncaughtException, OnLeaveException, "onLeave", true);
  }
  if (this.onDispose !== void 0) {
    this.onDispose = wrapTryCatch(this.onDispose.bind(this), onUncaughtException, OnDisposeException, "onDispose");
  }
}, _a3);

// node_modules/@colyseus/core/build/presence/LocalPresence.mjs
var import_path = __toESM(require("path"), 1);
var DEVMODE_CACHE_FILE_PATH = import_path.default.resolve(".devmode.json");

// node_modules/@colyseus/core/build/Stats.mjs
var local = {
  roomCount: 0,
  ccu: 0
};
import("@pm2/io").then((io) => {
  io.default.metric({ id: "app/stats/ccu", name: "ccu", value: () => local.ccu });
  io.default.metric({ id: "app/stats/roomcount", name: "roomcount", value: () => local.roomCount });
}).catch(() => {
});

// node_modules/@colyseus/core/build/MatchMaker.mjs
var events = new import_events2.EventEmitter();
var onReady = new Deferred();

// node_modules/@colyseus/core/build/rooms/RelayRoom.mjs
var Player = class extends Schema {
};
defineTypes(Player, {
  connected: "boolean",
  name: "string",
  sessionId: "string"
});
var State = class extends Schema {
  constructor() {
    super(...arguments);
    this.players = new MapSchema();
  }
};
defineTypes(State, {
  players: { map: Player }
});

// src-backend/ext/Room.ts
function getStateSize(room) {
  const hasState = room._serializer.encoder || // schema v3
  room._serializer.state || // schema v2
  room._serializer.previousState;
  const fullState = hasState && room._serializer.getFullState();
  return fullState && (fullState.byteLength || fullState.length) || 0;
}
Room.prototype.getAvailableData = function() {
  return {
    clients: this.clients.length,
    maxClients: this.maxClients,
    metadata: this.metadata,
    roomId: this.roomId
  };
};
Room.prototype.getRoomListData = async function() {
  const stateSize = getStateSize(this);
  const elapsedTime = this.clock.elapsedTime;
  const locked = this.locked;
  const data = this.getAvailableData();
  return __spreadProps(__spreadValues({}, data), { locked, elapsedTime, stateSize });
};
Room.prototype.getInspectData = async function() {
  const state2 = this.state;
  const stateSize = getStateSize(this);
  const roomElapsedTime = this.clock.elapsedTime;
  const data = this.getAvailableData();
  const clients = this.clients.map((client) => ({
    sessionId: client.sessionId,
    elapsedTime: roomElapsedTime - client._joinedAt
  }));
  const locked = this.locked;
  return __spreadProps(__spreadValues({}, data), { locked, clients, state: state2, stateSize });
};
Room.prototype._forceClientDisconnect = async function(sessionId) {
  for (let i = 0; i < this.clients.length; i++) {
    if (this.clients[i].sessionId === sessionId) {
      this.clients[i].leave();
      break;
    }
  }
};
Room.prototype._sendMessageToClient = async function(sessionId, type2, data) {
  for (let i = 0; i < this.clients.length; i++) {
    if (this.clients[i].sessionId === sessionId) {
      this.clients[i].send(type2, data);
      break;
    }
  }
};
