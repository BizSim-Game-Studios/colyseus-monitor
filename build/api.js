var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/node-os-utils/lib/bucket.js
var require_bucket = __commonJS({
  "node_modules/node-os-utils/lib/bucket.js"(exports2, module2) {
    module2.exports = {
      options: {
        NOT_SUPPORTED_VALUE: "not supported",
        INTERVAL: 1e3
      },
      isNotSupported(res) {
        return res === this.options.NOT_SUPPORTED_VALUE;
      }
    };
  }
});

// node_modules/node-os-utils/lib/cpu.js
var require_cpu = __commonJS({
  "node_modules/node-os-utils/lib/cpu.js"() {
    var bucket = require_bucket();
    var os = require("os");
    bucket.cpu = {
      average: function() {
        var totalIdle = 0;
        var totalTick = 0;
        var cpus = os.cpus();
        for (var i = 0, len = cpus.length; i < len; i++) {
          var cpu = cpus[i];
          for (var type in cpu.times) {
            totalTick += cpu.times[type];
          }
          totalIdle += cpu.times.idle;
        }
        return {
          totalIdle,
          totalTick,
          avgIdle: totalIdle / cpus.length,
          avgTotal: totalTick / cpus.length
        };
      },
      usage: function(interval) {
        var self = this;
        if (!interval) {
          interval = bucket.options.INTERVAL;
        }
        return new Promise(function(resolve) {
          if (typeof interval !== "number") {
            throw new TypeError("interval must be a number!");
          }
          var startMeasure = self.average();
          setTimeout(function() {
            var endMeasure = self.average();
            var idleDifference = endMeasure.avgIdle - startMeasure.avgIdle;
            var totalDifference = endMeasure.avgTotal - startMeasure.avgTotal;
            var cpuPercentage = (1e4 - Math.round(1e4 * idleDifference / totalDifference)) / 100;
            return resolve(cpuPercentage);
          }, interval);
        });
      },
      free: function(interval) {
        var self = this;
        if (!interval) {
          interval = bucket.options.INTERVAL;
        }
        return new Promise(function(resolve) {
          if (typeof interval !== "number") {
            throw new TypeError("interval must be a number!");
          }
          self.usage(interval).then(function(cpuPercentage) {
            return resolve(100 - cpuPercentage);
          });
        });
      },
      count: function() {
        return os.cpus().length;
      },
      model: function() {
        return os.cpus()[0].model;
      },
      loadavg: function() {
        return os.loadavg();
      },
      loadavgTime: function(time) {
        time = parseInt(time, 10);
        var loads = os.loadavg();
        switch (time) {
          case 5:
            return loads[1];
          case 15:
            return loads[2];
          default:
            return loads[0];
        }
      }
    };
  }
});

// node_modules/node-os-utils/lib/exec.js
var require_exec = __commonJS({
  "node_modules/node-os-utils/lib/exec.js"(exports2, module2) {
    var cp = require("child_process");
    var bucket = require_bucket();
    function exec(command) {
      return new Promise(function(resolve) {
        var runCommand = 'LC_ALL="en_US.UTF-8";LANG="en_US.UTF-8";LANGUAGE="en_US:en";' + command;
        cp.exec(runCommand, { shell: true }, function(err, stdout, stderr) {
          if (err || !stdout) {
            return resolve(bucket.options.NOT_SUPPORTED_VALUE);
          }
          return resolve(stdout);
        });
      });
    }
    module2.exports = exec;
    module2.exports.wrapExec = function(command) {
      return function() {
        return exec(command);
      };
    };
  }
});

// node_modules/node-os-utils/lib/drive.js
var require_drive = __commonJS({
  "node_modules/node-os-utils/lib/drive.js"() {
    var bucket = require_bucket();
    var exec = require_exec();
    var DISK_PATTERN = /^(\S+)\n?\s+(\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s+(.+?)\n/mg;
    function createDiskInfo(headlineArgs, args) {
      var info = {};
      headlineArgs.forEach(function(h, i) {
        info[h] = args[i];
      });
      return info;
    }
    function parseDfStdout(stdout) {
      var dfInfo = [];
      var headline;
      stdout.replace(DISK_PATTERN, function() {
        var args = Array.prototype.slice.call(arguments, 1, 7);
        if (arguments[7] === 0) {
          headline = args;
          return;
        }
        dfInfo.push(createDiskInfo(headline, args));
      });
      return dfInfo;
    }
    bucket.drive = {
      info: function(diskName) {
        if (!diskName) {
          diskName = "/";
        }
        return exec("df -kP").then(function(out) {
          var diskInfo = null;
          var main = null;
          var lines = parseDfStdout(out);
          for (var i = 0; i < lines.length; i++) {
            if (lines[i]["Mounted on"] === diskName) {
              diskInfo = lines[i];
              continue;
            }
            if (lines[i]["Mounted on"] === "/") {
              main = lines[i];
              continue;
            }
          }
          if (diskInfo === null) {
            if (main === null) {
              throw new Error("disk name invalid and / not found");
            }
            console.info("disk name invalid, using / as default");
            diskInfo = main;
          }
          var used = Math.ceil(diskInfo.Used * 1024 / Math.pow(1024, 2));
          var free = Math.ceil((diskInfo.Available || diskInfo.Avail) * 1024 / Math.pow(1024, 2));
          var total = used + free;
          var totalGb = (total / 1024).toFixed(1);
          var usedGb = (used / 1024).toFixed(1);
          var freeGb = (free / 1024).toFixed(1);
          var usedPercentage = (100 * used / total).toFixed(1);
          var freePercentage = (100 * free / total).toFixed(1);
          return Promise.resolve({
            totalGb,
            usedGb,
            freeGb,
            usedPercentage,
            freePercentage
          });
        });
      },
      free: function(diskName) {
        var self = this;
        return self.info(diskName).then(function(res) {
          return Promise.resolve({
            totalGb: res.totalGb,
            freeGb: res.freeGb,
            freePercentage: res.freePercentage
          });
        });
      },
      used: function(diskName) {
        var self = this;
        return self.info(diskName).then(function(res) {
          return Promise.resolve({
            totalGb: res.totalGb,
            usedGb: res.usedGb,
            usedPercentage: res.usedPercentage
          });
        });
      }
    };
  }
});

// node_modules/node-os-utils/util/co.js
var require_co = __commonJS({
  "node_modules/node-os-utils/util/co.js"(exports2, module2) {
    var slice = Array.prototype.slice;
    module2.exports = co["default"] = co.co = co;
    co.wrap = function(fn) {
      createPromise.__generatorFunction__ = fn;
      return createPromise;
      function createPromise() {
        return co.call(this, fn.apply(this, arguments));
      }
    };
    function co(gen) {
      var ctx = this;
      var args = slice.call(arguments, 1);
      return new Promise(function(resolve, reject) {
        if (typeof gen === "function") gen = gen.apply(ctx, args);
        if (!gen || typeof gen.next !== "function") return resolve(gen);
        onFulfilled();
        function onFulfilled(res) {
          var ret;
          try {
            ret = gen.next(res);
          } catch (e) {
            return reject(e);
          }
          next(ret);
        }
        function onRejected(err) {
          var ret;
          try {
            ret = gen.throw(err);
          } catch (e) {
            return reject(e);
          }
          next(ret);
        }
        function next(ret) {
          if (ret.done) return resolve(ret.value);
          var value = toPromise.call(ctx, ret.value);
          if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
          return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, but the following object was passed: "' + String(ret.value) + '"'));
        }
      });
    }
    function toPromise(obj) {
      if (!obj) return obj;
      if (isPromise(obj)) return obj;
      if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
      if (typeof obj === "function") return thunkToPromise.call(this, obj);
      if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
      if (isObject(obj)) return objectToPromise.call(this, obj);
      return obj;
    }
    function thunkToPromise(fn) {
      var ctx = this;
      return new Promise(function(resolve, reject) {
        fn.call(ctx, function(err, res) {
          if (err) return reject(err);
          if (arguments.length > 2) res = slice.call(arguments, 1);
          resolve(res);
        });
      });
    }
    function arrayToPromise(obj) {
      return Promise.all(obj.map(toPromise, this));
    }
    function objectToPromise(obj) {
      var results = new obj.constructor();
      var keys = Object.keys(obj);
      var promises = [];
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var promise = toPromise.call(this, obj[key]);
        if (promise && isPromise(promise)) defer(promise, key);
        else results[key] = obj[key];
      }
      return Promise.all(promises).then(function() {
        return results;
      });
      function defer(promise2, key2) {
        results[key2] = void 0;
        promises.push(promise2.then(function(res) {
          results[key2] = res;
        }));
      }
    }
    function isPromise(obj) {
      return typeof obj.then === "function";
    }
    function isGenerator(obj) {
      return typeof obj.next === "function" && typeof obj.throw === "function";
    }
    function isGeneratorFunction(obj) {
      var constructor = obj.constructor;
      if (!constructor) return false;
      if (constructor.name === "GeneratorFunction" || constructor.displayName === "GeneratorFunction") return true;
      return isGenerator(constructor.prototype);
    }
    function isObject(val) {
      return Object === val.constructor;
    }
  }
});

// node_modules/node-os-utils/util/index.js
var require_util = __commonJS({
  "node_modules/node-os-utils/util/index.js"(exports2) {
    exports2.isNumber = function(num) {
      return num !== true && num !== false && Boolean(num === 0 || num && !isNaN(num));
    };
    require("util");
  }
});

// node_modules/node-os-utils/lib/mem.js
var require_mem = __commonJS({
  "node_modules/node-os-utils/lib/mem.js"() {
    var bucket = require_bucket();
    var os = require("os");
    var fs = require("fs");
    var co = require_co();
    var util = require_util();
    var exec = require_exec();
    var linuxFreeMemory = function() {
      return new Promise(function(resolve) {
        fs.readFile("/proc/meminfo", "utf8", function(err, out) {
          if (err) {
            return resolve(bucket.options.NOT_SUPPORTED_VALUE);
          }
          var memInfo = {};
          var usage = out.toString().trim().split("\n");
          usage.forEach((line) => {
            var pair = line.split(":");
            memInfo[pair[0]] = parseInt(pair[1], 10);
          });
          var totalMem = parseInt(memInfo.MemTotal, 10) * 1024;
          if (!memInfo.MemAvailable) {
            memInfo.MemAvailable = memInfo["MemFree"] + memInfo["Buffers"] + memInfo["Cached"] + memInfo["SReclaimable"] - memInfo["Shmem"];
          }
          var freeMem = memInfo.MemAvailable * 1024;
          if (os.release() < "3.14") {
            freeMem = ((memInfo.MemFree || 0) + (memInfo.Buffers || 0) + (memInfo.Cached || 0)) * 1024;
          }
          return resolve({ totalMem, freeMem });
        });
      });
    };
    var osxFreeMemory = co.wrap(function* () {
      var totalMem = os.totalmem();
      var mappings = {
        "Pages purgeable": "purgeable",
        "Pages wired down": "wired",
        "Pages active": "active",
        "Pages inactive": "inactive",
        "Pages occupied by compressor": "compressed"
      };
      var [vmStat, pagePageable] = yield Promise.all([
        exec("vm_stat"),
        exec("sysctl vm.page_pageable_internal_count")
      ]);
      vmStat = vmStat.toString().trim();
      pagePageable = pagePageable.toString().trim();
      var pageSize = 4096;
      var matchdPageSize = /page size of (\d+) bytes/.exec(vmStat);
      if (matchdPageSize && util.isNumber(matchdPageSize[1])) {
        pageSize = Number(matchdPageSize[1]);
      }
      var [, pageableValue] = pagePageable.split(":");
      if (!util.isNumber(pageableValue)) {
        return {
          totalMem,
          freeMem: os.freemem()
        };
      }
      pageableValue = Number(pageableValue) * pageSize;
      var lines = vmStat.split("\n").filter((x) => x !== "");
      var stats = {};
      lines.forEach((x) => {
        var parts = x.split(":");
        var key = parts[0];
        var val = parts[1].replace(".", "").trim();
        if (mappings[key]) {
          var ky = mappings[key];
          stats[ky] = val * pageSize;
        }
      });
      var appMemory = pageableValue - stats.purgeable;
      var wiredMemory = stats.wired;
      var compressedMemory = stats.compressed;
      var used = appMemory + wiredMemory + compressedMemory;
      return {
        totalMem,
        freeMem: totalMem - used
      };
    });
    bucket.mem = {
      info: co.wrap(function* () {
        var totalMem = null;
        var freeMem = null;
        var memInfo = yield linuxFreeMemory();
        if (bucket.isNotSupported(memInfo)) {
          totalMem = os.totalmem();
          freeMem = os.freemem();
          if (os.platform() === "darwin") {
            var mem = yield osxFreeMemory();
            totalMem = mem.totalMem;
            freeMem = mem.freeMem;
          }
        } else {
          totalMem = memInfo.totalMem;
          freeMem = memInfo.freeMem;
        }
        var totalMemMb = parseFloat((totalMem / 1024 / 1024).toFixed(2));
        var usedMemMb = parseFloat(((totalMem - freeMem) / 1024 / 1024).toFixed(2));
        var freeMemMb = parseFloat((totalMemMb - usedMemMb).toFixed(2));
        var usedMemPercentage = parseFloat((100 * ((totalMem - freeMem) / totalMem)).toFixed(2));
        var freeMemPercentage = parseFloat((100 * (freeMem / totalMem)).toFixed(2));
        return {
          totalMemMb,
          usedMemMb,
          freeMemMb,
          usedMemPercentage,
          freeMemPercentage
        };
      }),
      free: function() {
        var self = this;
        return self.info().then(function(res) {
          return Promise.resolve({
            totalMemMb: res.totalMemMb,
            freeMemMb: res.freeMemMb
          });
        });
      },
      used: function() {
        var self = this;
        return self.info().then(function(res) {
          return Promise.resolve({
            totalMemMb: res.totalMemMb,
            usedMemMb: res.usedMemMb
          });
        });
      },
      totalMem: function() {
        return os.totalmem();
      }
    };
  }
});

// node_modules/node-os-utils/lib/netstat.js
var require_netstat = __commonJS({
  "node_modules/node-os-utils/lib/netstat.js"() {
    var bucket = require_bucket();
    var co = require_co();
    var exec = require_exec();
    var ifconfig = {
      breakIntoBlocks: function breakIntoBlocks(fullText) {
        var blocks = [];
        var lines = fullText.split("\n");
        var currentBlock = [];
        lines.forEach(function(line) {
          if (line.length > 0 && ["	", " "].indexOf(line[0]) === -1 && currentBlock.length > 0) {
            blocks.push(currentBlock);
            currentBlock = [];
          }
          if (line.trim()) {
            currentBlock.push(line);
          }
        });
        if (currentBlock.length > 0) {
          blocks.push(currentBlock);
        }
        return blocks;
      },
      parseSingleBlock: function parseSingleBlock(block) {
        var data = {};
        block.forEach(function(line, i) {
          var match = line.match(/^(\S+)\s+Link/);
          if (i === 0) {
            var match2 = line.match(/([a-zA-Z0-9]+):\s/);
            if (match === null && match2) {
              match = match2;
            }
          }
          if (match) {
            data.device = match[1];
            var link = {};
            match = line.match(/encap:(\S+)/);
            if (match) {
              link.encap = match[1];
            }
            match = line.match(/HWaddr\s+(\S+)/);
            if (match) {
              link.hwaddr = match[1];
            }
            data.link = link;
          } else {
            var section = data.other || {};
            if (match = line.match(/collisions:(\S+)/)) {
              section.collisions = parseInt(match[1]);
            }
            if (match = line.match(/txqueuelen:(\S+)/)) {
              section.txqueuelen = parseInt(match[1]);
            }
            if (match = line.match(/RX bytes:(\S+)/)) {
              section.rxBytes = parseInt(match[1]);
            }
            if (match = line.match(/RX packets (\S+) {2}bytes (\S+)/)) {
              section.rxBytes = parseInt(match[2]);
            }
            if (match = line.match(/TX bytes:(\S+)/)) {
              section.txBytes = parseInt(match[1]);
            }
            if (match = line.match(/TX packets (\S+) {2}bytes (\S+)/)) {
              section.txBytes = parseInt(match[2]);
            }
            data.other = section;
          }
        });
        return data;
      }
    };
    function ifconfigStats() {
      return co(function* () {
        var res = yield exec("ifconfig");
        if (bucket.isNotSupported(res)) return res;
        var blocks = ifconfig.breakIntoBlocks(res);
        var stats = [];
        blocks.forEach(function(block, index) {
          blocks[index] = ifconfig.parseSingleBlock(block);
          stats[index] = {
            "interface": blocks[index].device,
            "inputBytes": blocks[index].other && blocks[index].other.rxBytes || 0,
            "outputBytes": blocks[index].other && blocks[index].other.txBytes || 0
          };
        });
        return stats;
      });
    }
    bucket.netstat = {
      stats: co.wrap(function* () {
        var out = yield exec("ip -s link");
        if (bucket.isNotSupported(out)) return ifconfigStats();
        var names = new RegExp(/[0-9]+: ([\S]+): /g);
        var RX = new RegExp(/^\s+RX:\s+bytes\s+packets\s+errors\s+dropped\s+(overrun|missed)\s+mcast\s*\n\s*([0-9]+)\s+/gm);
        var TX = new RegExp(/^\s+TX:\s+bytes\s+packets\s+errors\s+dropped\s+carrier\s+collsns\s*\n\s*([0-9]+)\s+/gm);
        var stats = [];
        var i = 0;
        var res = [];
        while ((res = names.exec(out)) !== null) {
          stats[i++] = {
            interface: res[1]
          };
        }
        i = 0;
        while ((res = RX.exec(out)) !== null) {
          stats[i++].inputBytes = res[2];
        }
        i = 0;
        while ((res = TX.exec(out)) !== null) {
          stats[i++].outputBytes = res[1];
        }
        return stats;
      }),
      inOut: function(interval) {
        var self = this;
        if (!interval) {
          interval = bucket.options.INTERVAL;
        }
        return Promise.all([
          self.stats(),
          function() {
            return new Promise(function(resolve) {
              setTimeout(function() {
                self.stats().then(resolve);
              }, interval);
            });
          }()
        ]).then(function(stats) {
          var oldStats = stats[0];
          var newStats = stats[1];
          var metrics = {
            total: {
              inputMb: 0,
              outputMb: 0
            }
          };
          var nbProblems = 0;
          for (var i = 0; i < oldStats.length; i++) {
            if (oldStats[i].interface !== "lo" && oldStats[i].interface !== "lo0" && oldStats[i].inputBytes > 0 && oldStats[i].outputBytes > 0) {
              metrics[oldStats[i].interface] = {};
              metrics[oldStats[i].interface]["inputMb"] = parseFloat(((newStats[i].inputBytes - oldStats[i].inputBytes) / 1e6).toFixed(2));
              metrics[oldStats[i].interface]["outputMb"] = parseFloat(((newStats[i].outputBytes - oldStats[i].outputBytes) / 1e6).toFixed(2));
              metrics.total["inputMb"] += parseFloat(metrics[oldStats[i].interface]["inputMb"]);
              metrics.total["outputMb"] += parseFloat(metrics[oldStats[i].interface]["outputMb"]);
            } else {
              nbProblems++;
            }
          }
          if (nbProblems === oldStats.length) {
            return Promise.resolve(bucket.options.NOT_SUPPORTED_VALUE);
          }
          return Promise.resolve(metrics);
        });
      }
    };
  }
});

// node_modules/node-os-utils/lib/openfiles.js
var require_openfiles = __commonJS({
  "node_modules/node-os-utils/lib/openfiles.js"() {
    var bucket = require_bucket();
    var fs = require("fs");
    bucket.openfiles = {
      openFd: function() {
        return new Promise(function(resolve) {
          fs.readFile("/proc/sys/fs/file-nr", function(err, out) {
            if (err) {
              return resolve(bucket.options.NOT_SUPPORTED_VALUE);
            }
            var result = out.toString().replace(/\n/g, "").split(" ")[0];
            result = parseInt(result, 10);
            return resolve(result);
          });
        });
      }
    };
  }
});

// node_modules/node-os-utils/lib/osCmd.js
var require_osCmd = __commonJS({
  "node_modules/node-os-utils/lib/osCmd.js"() {
    var bucket = require_bucket();
    var exec = require_exec();
    var wrapExec = exec.wrapExec;
    bucket.osCmd = {
      topCpu: wrapExec("ps -eo pcpu,user,args --no-headers | sort -k 1 -n | tail -n 10 | sort -k 1 -nr | cut -c 1-70"),
      topMem: wrapExec("ps -eo pmem,pid,cmd | sort -k 1 -n | tail -n 10 | sort -k 1 -nr | cut -c 1-70"),
      vmstats: wrapExec("vmstat -S m"),
      processesUsers: wrapExec("ps hax -o user | sort | uniq -c"),
      diskUsage: wrapExec("df -h"),
      who: wrapExec("who"),
      whoami: wrapExec("whoami"),
      openPorts: wrapExec("lsof -Pni4 | grep ESTABLISHED"),
      ifconfig: wrapExec("ifconfig")
    };
  }
});

// node_modules/node-os-utils/lib/os.js
var require_os = __commonJS({
  "node_modules/node-os-utils/lib/os.js"() {
    var bucket = require_bucket();
    var fs = require("fs");
    var os = require("os");
    var co = require_co();
    var exec = require_exec();
    var originalOperatingSystem = {
      checkLastResort: co.wrap(function* () {
        return exec("uname -sr");
      }),
      darwin: function() {
        var self = this;
        return co(function* () {
          var res = yield exec("sw_vers");
          if (bucket.isNotSupported(res)) return self.checkLastResort();
          var version = res.match(/[\n\r].*ProductVersion:\s*([^\n\r]*)/)[1];
          var distribution = res.match(/.*ProductName:\s*([^\n\r]*)/)[1];
          return distribution + " " + version;
        });
      },
      linux: function() {
        var self = this;
        return new Promise(function(resolve) {
          fs.readFile("/etc/issue", function(err, out) {
            if (err) {
              return self.checkLastResort(resolve);
            }
            out = out.toString();
            var version = out.match(/[\d]+(\.[\d][\d]?)?/);
            if (version !== null) {
              version = version[0];
            }
            var distribution = out.match(/[\w]*/)[0];
            if (version !== null && distribution !== null) {
              var resultOs = distribution + " " + version;
              return resolve(resultOs);
            } else if (distribution !== null && distribution !== "") {
              return resolve(distribution);
            } else if (version === null) {
              fs.readFile("/etc/redhat-release", function(err2, out2) {
                if (err2) {
                  return self.checkLastResort(resolve);
                }
                out2 = out2.toString();
                version = out2.match(/[\d]+(\.[\d][\d]?)?/);
                if (version !== null) {
                  version = version[0];
                }
                var resultOs2 = "Red Hat " + version;
                return resolve(resultOs2);
              });
            }
          });
        });
      }
    };
    bucket.os = {
      oos: function() {
        var platform = os.platform();
        if (platform === "linux") {
          return originalOperatingSystem.linux();
        }
        if (platform === "darwin") {
          return originalOperatingSystem.darwin();
        }
        return originalOperatingSystem.checkLastResort();
      },
      platform: function() {
        return os.platform();
      },
      uptime: function() {
        return os.uptime();
      },
      ip: function() {
        var platform = os.platform();
        var interfaces = os.networkInterfaces();
        var ip = "";
        var i = 0;
        try {
          if (platform === "linux" && interfaces.eth0) {
            for (i = 0; i < interfaces.eth0.length; i++) {
              if (os.networkInterfaces().eth0[i].family === "IPv4") {
                ip = os.networkInterfaces().eth0[i].address;
                break;
              }
            }
            return ip;
          }
          if (platform === "darwin") {
            for (i = 0; i < interfaces.en0.length; i++) {
              if (os.networkInterfaces().en0[i].family === "IPv4") {
                ip = os.networkInterfaces().en0[i].address;
                break;
              }
            }
            return ip;
          }
          for (i in interfaces) {
            var item = interfaces[i];
            for (var j in item) {
              if (item[j]["internal"] === false && item[j]["family"] === "IPv4") {
                ip = item[j]["address"];
                break;
              }
            }
          }
        } catch (error) {
          ip = "LOCALHOST";
        }
        return ip;
      },
      hostname: function() {
        return os.hostname();
      },
      type: function() {
        return os.type();
      },
      arch: function() {
        return os.arch();
      }
    };
  }
});

// node_modules/node-os-utils/lib/proc.js
var require_proc = __commonJS({
  "node_modules/node-os-utils/lib/proc.js"() {
    var bucket = require_bucket();
    var exec = require_exec();
    var os = require("os");
    var co = require_co();
    bucket.proc = {
      totalProcesses: co.wrap(function* () {
        var res = yield exec("top -bn1 | awk 'NR > 7 && $8 ~ /R|S|D|T/ { print $12 }'");
        if (bucket.isNotSupported(res)) {
          if (os.platform() === "darwin") {
            var nb = yield exec("ps -A");
            nb = nb.toString().split("\n");
            return nb.length - 1;
          }
          return res;
        }
        var resultProc = res.split("\n").length;
        return resultProc;
      }),
      zombieProcesses: co.wrap(function* () {
        var res = yield exec("top -bn1 | awk 'NR > 7 && $8 ~ /Z/ { print $12 }'");
        if (bucket.isNotSupported(res)) return res;
        return res.split("\n").length;
      })
    };
  }
});

// node_modules/node-os-utils/lib/users.js
var require_users = __commonJS({
  "node_modules/node-os-utils/lib/users.js"() {
    var bucket = require_bucket();
    var exec = require_exec();
    var co = require_co();
    bucket.users = {
      openedCount: co.wrap(function* () {
        var res = yield exec("who | grep -v localhost | wc -l");
        if (bucket.isNotSupported(res)) return res;
        return parseInt(res, 10);
      })
    };
  }
});

// node_modules/node-os-utils/index.js
var require_node_os_utils = __commonJS({
  "node_modules/node-os-utils/index.js"(exports2, module2) {
    require_cpu();
    require_drive();
    require_mem();
    require_netstat();
    require_openfiles();
    require_osCmd();
    require_os();
    require_proc();
    require_users();
    module2.exports = require_bucket();
  }
});

// src-backend/api.ts
var api_exports = {};
__export(api_exports, {
  getAPI: () => getAPI
});
module.exports = __toCommonJS(api_exports);
var import_express = __toESM(require("express"));
var import_node_os_utils = __toESM(require_node_os_utils());
var UNAVAILABLE_ROOM_ERROR = "@colyseus/monitor: room $roomId is not available anymore.";
function getAPI(opts, matchMakerInstance) {
  const api = import_express.default.Router();
  api.get("/", async (req, res) => {
    try {
      if (!matchMakerInstance) {
        throw new Error("matchMaker not provided to monitor");
      }
      const rooms = await matchMakerInstance.query({});
      const columns = opts.columns || ["roomId", "name", "clients", "maxClients", "locked", "elapsedTime"];
      if (!opts.columns && rooms[0] && rooms[0].publicAddress !== void 0) {
        columns.push("publicAddress");
      }
      let connections = 0;
      res.json({
        columns,
        rooms: rooms.map((room) => {
          const data = JSON.parse(JSON.stringify(room));
          connections += room.clients;
          data.locked = room.locked || false;
          data.private = room.private;
          data.maxClients = `${room.maxClients}`;
          data.elapsedTime = Date.now() - new Date(room.createdAt).getTime();
          return data;
        }),
        connections,
        cpu: await import_node_os_utils.default.cpu.usage(),
        memory: await import_node_os_utils.default.mem.used()
      });
    } catch (e) {
      const message = e.message;
      console.error(message);
      res.status(500);
      res.json({ message });
    }
  });
  api.get("/room", async (req, res) => {
    const roomId = req.query.roomId;
    try {
      if (!matchMakerInstance) {
        throw new Error("matchMaker not provided to monitor");
      }
      const inspectData = await matchMakerInstance.remoteRoomCall(roomId, "getInspectData");
      res.json(inspectData);
    } catch (e) {
      const message = UNAVAILABLE_ROOM_ERROR.replace("$roomId", roomId);
      console.error(message);
      res.status(500);
      res.json({ message });
    }
  });
  api.get("/room/call", async (req, res) => {
    const roomId = req.query.roomId;
    const method = req.query.method;
    const args = JSON.parse(req.query.args);
    try {
      if (!matchMakerInstance) {
        throw new Error("matchMaker not provided to monitor");
      }
      const data = await matchMakerInstance.remoteRoomCall(roomId, method, args);
      res.json(data);
    } catch (e) {
      const message = UNAVAILABLE_ROOM_ERROR.replace("$roomId", roomId);
      console.error(message);
      res.status(500);
      res.json({ message });
    }
  });
  return api;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getAPI
});
