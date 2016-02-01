/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.6 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

/*! Shim Utility SingleDrop Module | (c) 2013 digital-telepathy | opensource.org/licenses/MIT */

/*!
 * jQuery JavaScript Library v1.10.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-05-30T21:49Z
 */

/*!
 * Sizzle CSS Selector Engine v1.9.4-pre
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-05-27
 */

/*! Location Utility SingleDrop Module | (c) 2013 digital-telepathy | opensource.org/licenses/MIT */

(function() {
    var requirejs, require, define;
    (function(global) {
        function isFunction(e) {
            return ostring.call(e) === "[object Function]"
        }
        function isArray(e) {
            return ostring.call(e) === "[object Array]"
        }
        function each(e, t) {
            if (e) {
                var n;
                for (n = 0; n < e.length; n += 1)
                    if (e[n] && t(e[n], n, e))
                        break
            }
        }
        function eachReverse(e, t) {
            if (e) {
                var n;
                for (n = e.length - 1; n>-1; n -= 1)
                    if (e[n] && t(e[n], n, e))
                        break
            }
        }
        function hasProp(e, t) {
            return hasOwn.call(e, t)
        }
        function getOwn(e, t) {
            return hasProp(e, t) && e[t]
        }
        function eachProp(e, t) {
            var n;
            for (n in e)
                if (hasProp(e, n) && t(e[n], n))
                    break
        }
        function mixin(e, t, n, r) {
            return t && eachProp(t, function(t, i) {
                if (n ||!hasProp(e, i))
                    r && typeof t != "string" ? (e[i] || (e[i] = {}), mixin(e[i], t, n, r)) : e[i] = t
            }), e
        }
        function bind(e, t) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        function scripts() {
            return document.getElementsByTagName("script")
        }
        function defaultOnError(e) {
            throw e
        }
        function getGlobal(e) {
            if (!e)
                return e;
            var t = global;
            return each(e.split("."), function(e) {
                t = t[e]
            }), t
        }
        function makeError(e, t, n, r) {
            var i = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
            return i.requireType = e, i.requireModules = r, n && (i.originalError = n), i
        }
        function newContext(e) {
            function v(e) {
                var t, n;
                for (t = 0; e[t]; t += 1) {
                    n = e[t];
                    if (n === ".")
                        e.splice(t, 1), t -= 1;
                    else if (n === "..") {
                        if (t === 1 && (e[2] === ".." || e[0] === ".."))
                            break;
                        t > 0 && (e.splice(t - 1, 2), t -= 2)
                    }
                }
            }
            function m(e, t, n) {
                var r, i, s, u, a, f, l, c, h, p, d, m = t && t.split("/"), g = m, y = o.map, b = y && y["*"];
                e && e.charAt(0) === "." && (t ? (getOwn(o.pkgs, t) ? g = m = [t] : g = m.slice(0, m.length - 1), e = g.concat(e.split("/")), v(e), i = getOwn(o.pkgs, r = e[0]), e = e.join("/"), i && e === r + "/" + i.main && (e = r)) : e.indexOf("./") === 0 && (e = e.substring(2)));
                if (n && y && (m || b)) {
                    u = e.split("/");
                    for (a = u.length; a > 0; a -= 1) {
                        l = u.slice(0, a).join("/");
                        if (m)
                            for (f = m.length; f > 0; f -= 1) {
                                s = getOwn(y, m.slice(0, f).join("/"));
                                if (s) {
                                    s = getOwn(s, l);
                                    if (s) {
                                        c = s, h = a;
                                        break
                                    }
                                }
                            }
                        if (c)
                            break;
                        !p && b && getOwn(b, l) && (p = getOwn(b, l), d = a)
                    }
                    !c && p && (c = p, h = d), c && (u.splice(0, h, c), e = u.join("/"))
                }
                return e
            }
            function g(e) {
                isBrowser && each(scripts(), function(t) {
                    if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === r.contextName)
                        return t.parentNode.removeChild(t), !0
                })
            }
            function y(e) {
                var t = getOwn(o.paths, e);
                if (t && isArray(t) && t.length > 1)
                    return g(e), t.shift(), r.require.undef(e), r.require([e]), !0
            }
            function b(e) {
                var t, n = e ? e.indexOf("!"): - 1;
                return n>-1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
            }
            function w(e, t, n, i) {
                var s, o, u, a, f = null, l = t ? t.name: null, h = e, v=!0, g = "";
                return e || (v=!1, e = "_@r" + (p += 1)), a = b(e), f = a[0], e = a[1], f && (f = m(f, l, i), o = getOwn(c, f)), e && (f ? o && o.normalize ? g = o.normalize(e, function(e) {
                    return m(e, l, i)
                }) : g = m(e, l, i) : (g = m(e, l, i), a = b(g), f = a[0], g = a[1], n=!0, s = r.nameToUrl(g))), u = f&&!o&&!n ? "_unnormalized" + (d += 1) : "", {
                    prefix: f,
                    name: g,
                    parentMap: t,
                    unnormalized: !!u,
                    url: s,
                    originalName: h,
                    isDefine: v,
                    id: (f ? f + "!" + g : g) + u
                }
            }
            function E(e) {
                var t = e.id, n = getOwn(u, t);
                return n || (n = u[t] = new r.Module(e)), n
            }
            function S(e, t, n) {
                var r = e.id, i = getOwn(u, r);
                hasProp(c, r) && (!i || i.defineEmitComplete) ? t === "defined" && n(c[r]) : (i = E(e), i.error && t === "error" ? n(i.error) : i.on(t, n))
            }
            function x(e, t) {
                var n = e.requireModules, r=!1;
                t ? t(e) : (each(n, function(t) {
                    var n = getOwn(u, t);
                    n && (n.error = e, n.events.error && (r=!0, n.emit("error", e)))
                }), r || req.onError(e))
            }
            function T() {
                globalDefQueue.length && (apsp.apply(l, [l.length - 1, 0].concat(globalDefQueue)), globalDefQueue = [])
            }
            function N(e) {
                delete u[e], delete a[e]
            }
            function C(e, t, n) {
                var r = e.map.id;
                e.error ? e.emit("error", e.error) : (t[r]=!0, each(e.depMaps, function(r, i) {
                    var s = r.id, o = getOwn(u, s);
                    o&&!e.depMatched[i]&&!n[s] && (getOwn(t, s) ? (e.defineDep(i, c[s]), e.check()) : C(o, t, n))
                }), n[r]=!0)
            }
            function k() {
                var e, n, i, u, f = o.waitSeconds * 1e3, l = f && r.startTime + f < (new Date).getTime(), c = [], h = [], p=!1, d=!0;
                if (t)
                    return;
                t=!0, eachProp(a, function(t) {
                    e = t.map, n = e.id;
                    if (!t.enabled)
                        return;
                    e.isDefine || h.push(t);
                    if (!t.error)
                        if (!t.inited && l)
                            y(n) ? (u=!0, p=!0) : (c.push(n), g(n));
                        else if (!t.inited && t.fetched && e.isDefine) {
                            p=!0;
                            if (!e.prefix)
                                return d=!1
                        }
                });
                if (l && c.length)
                    return i = makeError("timeout", "Load timeout for modules: " + c, null, c), i.contextName = r.contextName, x(i);
                d && each(h, function(e) {
                    C(e, {}, {})
                }), (!l || u) && p && (isBrowser || isWebWorker)&&!s && (s = setTimeout(function() {
                    s = 0, k()
                }, 50)), t=!1
            }
            function L(e) {
                hasProp(c, e[0]) || E(w(e[0], null, !0)).init(e[1], e[2])
            }
            function A(e, t, n, r) {
                e.detachEvent&&!isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(n, t, !1)
            }
            function O(e) {
                var t = e.currentTarget || e.srcElement;
                return A(t, r.onScriptLoad, "load", "onreadystatechange"), A(t, r.onScriptError, "error"), {
                    node: t,
                    id: t && t.getAttribute("data-requiremodule")
                }
            }
            function M() {
                var e;
                T();
                while (l.length) {
                    e = l.shift();
                    if (e[0] === null)
                        return x(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                    L(e)
                }
            }
            var t, n, r, i, s, o = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                pkgs: {},
                shim: {},
                config: {}
            }, u = {}, a = {}, f = {}, l = [], c = {}, h = {}, p = 1, d = 1;
            return i = {
                require: function(e) {
                    return e.require ? e.require : e.require = r.makeRequire(e.map)
                },
                exports: function(e) {
                    e.usingExports=!0;
                    if (e.map.isDefine)
                        return e.exports ? e.exports : e.exports = c[e.map.id] = {}
                },
                module: function(e) {
                    return e.module ? e.module: e.module = {
                        id: e.map.id,
                        uri: e.map.url,
                        config: function() {
                            var t,
                            n = getOwn(o.pkgs,
                            e.map.id);
                            return t = n ? getOwn(o.config,
                            e.map.id + "/" + n.main): getOwn(o.config,
                            e.map.id),
                            t || {}
                        }, exports: c[e.map.id]
                    }
                }
            }, n = function(e) {
                this.events = getOwn(f, e.id) || {}, this.map = e, this.shim = getOwn(o.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
            }, n.prototype = {
                init: function(e, t, n, r) {
                    r = r || {};
                    if (this.inited)
                        return;
                    this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function(e) {
                        this.emit("error", e)
                    })), this.depMaps = e && e.slice(0), this.errback = n, this.inited=!0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check()
                },
                defineDep: function(e, t) {
                    this.depMatched[e] || (this.depMatched[e]=!0, this.depCount -= 1, this.depExports[e] = t)
                },
                fetch: function() {
                    if (this.fetched)
                        return;
                    this.fetched=!0, r.startTime = (new Date).getTime();
                    var e = this.map;
                    if (!this.shim)
                        return e.prefix ? this.callPlugin() : this.load();
                    r.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this, function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    }))
                },
                load: function() {
                    var e = this.map.url;
                    h[e] || (h[e]=!0, r.load(this.map.id, e))
                },
                check: function() {
                    if (!this.enabled || this.enabling)
                        return;
                    var e, t, n = this.map.id, i = this.depExports, s = this.exports, o = this.factory;
                    if (!this.inited)
                        this.fetch();
                    else if (this.error)
                        this.emit("error", this.error);
                    else if (!this.defining) {
                        this.defining=!0;
                        if (this.depCount < 1&&!this.defined) {
                            if (isFunction(o)) {
                                if (this.events.error && this.map.isDefine || req.onError !== defaultOnError)
                                    try {
                                        s = r.execCb(n, o, i, s)
                                    } catch (u) {
                                    e = u
                                } else 
                                    s = r.execCb(n, o, i, s);
                                this.map.isDefine && (t = this.module, t && t.exports !== undefined && t.exports !== this.exports ? s = t.exports : s === undefined && this.usingExports && (s = this.exports));
                                if (e)
                                    return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", x(this.error = e)
                                } else 
                                    s = o;
                            this.exports = s, this.map.isDefine&&!this.ignore && (c[n] = s, req.onResourceLoad && req.onResourceLoad(r, this.map, this.depMaps)), N(n), this.defined=!0
                        }
                        this.defining=!1, this.defined&&!this.defineEmitted && (this.defineEmitted=!0, this.emit("defined", this.exports), this.defineEmitComplete=!0)
                    }
                },
                callPlugin: function() {
                    var e = this.map, t = e.id, n = w(e.prefix);
                    this.depMaps.push(n), S(n, "defined", bind(this, function(n) {
                        var i, s, a, f = this.map.name, l = this.map.parentMap ? this.map.parentMap.name: null, c = r.makeRequire(e.parentMap, {
                            enableBuildCallback: !0
                        });
                        if (this.map.unnormalized) {
                            n.normalize && (f = n.normalize(f, function(e) {
                                return m(e, l, !0)
                            }) || ""), s = w(e.prefix + "!" + f, this.map.parentMap), S(s, "defined", bind(this, function(e) {
                                this.init([], function() {
                                    return e
                                }, null, {
                                    enabled: !0,
                                    ignore: !0
                                })
                            })), a = getOwn(u, s.id), a && (this.depMaps.push(s), this.events.error && a.on("error", bind(this, function(e) {
                                this.emit("error", e)
                            })), a.enable());
                            return 
                        }
                        i = bind(this, function(e) {
                            this.init([], function() {
                                return e
                            }, null, {
                                enabled: !0
                            })
                        }), i.error = bind(this, function(e) {
                            this.inited=!0, this.error = e, e.requireModules = [t], eachProp(u, function(e) {
                                e.map.id.indexOf(t + "_unnormalized") === 0 && N(e.map.id)
                            }), x(e)
                        }), i.fromText = bind(this, function(n, s) {
                            var u = e.name, a = w(u), f = useInteractive;
                            s && (n = s), f && (useInteractive=!1), E(a), hasProp(o.config, t) && (o.config[u] = o.config[t]);
                            try {
                                req.exec(n)
                            } catch (l) {
                                return x(makeError("fromtexteval", "fromText eval for " + t + " failed: " + l, l, [t]))
                            }
                            f && (useInteractive=!0), this.depMaps.push(a), r.completeLoad(u), c([u], i)
                        }), n.load(e.name, c, i, o)
                    })), r.enable(n, this), this.pluginMaps[n.id] = n
                },
                enable: function() {
                    a[this.map.id] = this, this.enabled=!0, this.enabling=!0, each(this.depMaps, bind(this, function(e, t) {
                        var n, s, o;
                        if (typeof e == "string") {
                            e = w(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, o = getOwn(i, e.id);
                            if (o) {
                                this.depExports[t] = o(this);
                                return 
                            }
                            this.depCount += 1, S(e, "defined", bind(this, function(e) {
                                this.defineDep(t, e), this.check()
                            })), this.errback && S(e, "error", bind(this, this.errback))
                        }
                        n = e.id, s = u[n], !hasProp(i, n) && s&&!s.enabled && r.enable(e, this)
                    })), eachProp(this.pluginMaps, bind(this, function(e) {
                        var t = getOwn(u, e.id);
                        t&&!t.enabled && r.enable(e, this)
                    })), this.enabling=!1, this.check()
                },
                on: function(e, t) {
                    var n = this.events[e];
                    n || (n = this.events[e] = []), n.push(t)
                },
                emit: function(e, t) {
                    each(this.events[e], function(e) {
                        e(t)
                    }), e === "error" && delete this.events[e]
                }
            }, r = {
                config: o,
                contextName: e,
                registry: u,
                defined: c,
                urlFetched: h,
                defQueue: l,
                Module: n,
                makeModuleMap: w,
                nextTick: req.nextTick,
                onError: x,
                configure: function(e) {
                    e.baseUrl && e.baseUrl.charAt(e.baseUrl.length - 1) !== "/" && (e.baseUrl += "/");
                    var t = o.pkgs, n = o.shim, i = {
                        paths: !0,
                        config: !0,
                        map: !0
                    };
                    eachProp(e, function(e, t) {
                        i[t] ? t === "map" ? (o.map || (o.map = {}), mixin(o[t], e, !0, !0)) : mixin(o[t], e, !0) : o[t] = e
                    }), e.shim && (eachProp(e.shim, function(e, t) {
                        isArray(e) && (e = {
                            deps: e
                        }), (e.exports || e.init)&&!e.exportsFn && (e.exportsFn = r.makeShimExports(e)), n[t] = e
                    }), o.shim = n), e.packages && (each(e.packages, function(e) {
                        var n;
                        e = typeof e == "string" ? {
                            name: e
                        } : e, n = e.location, t[e.name] = {
                            name: e.name,
                            location: n || e.name,
                            main: (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                        }
                    }), o.pkgs = t), eachProp(u, function(e, t) {
                        !e.inited&&!e.map.unnormalized && (e.map = w(t))
                    }), (e.deps || e.callback) && r.require(e.deps || [], e.callback)
                },
                makeShimExports: function(e) {
                    function t() {
                        var t;
                        return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                    }
                    return t
                },
                makeRequire: function(t, n) {
                    function s(o, a, f) {
                        var l, h, p;
                        return n.enableBuildCallback && a && isFunction(a) && (a.__requireJsBuild=!0), typeof o == "string" ? isFunction(a) ? x(makeError("requireargs", "Invalid require call"), f) : t && hasProp(i, o) ? i[o](u[t.id]) : req.get ? req.get(r, o, t, s) : (h = w(o, t, !1, !0), l = h.id, hasProp(c, l) ? c[l] : x(makeError("notloaded", 'Module name "' + l + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (M(), r.nextTick(function() {
                            M(), p = E(w(null, t)), p.skipMap = n.skipMap, p.init(o, a, f, {
                                enabled: !0
                            }), k()
                        }), s)
                    }
                    return n = n || {}, mixin(s, {
                        isBrowser: isBrowser,
                        toUrl: function(e) {
                            var n, i = e.lastIndexOf("."), s = e.split("/")[0], o = s === "." || s === "..";
                            return i!==-1 && (!o || i > 1) && (n = e.substring(i, e.length), e = e.substring(0, i)), r.nameToUrl(m(e, t && t.id, !0), n, !0)
                        },
                        defined: function(e) {
                            return hasProp(c, w(e, t, !1, !0).id)
                        },
                        specified: function(e) {
                            return e = w(e, t, !1, !0).id, hasProp(c, e) || hasProp(u, e)
                        }
                    }), t || (s.undef = function(e) {
                        T();
                        var n = w(e, t, !0), r = getOwn(u, e);
                        delete c[e], delete h[n.url], delete f[e], r && (r.events.defined && (f[e] = r.events), N(e))
                    }), s
                },
                enable: function(e) {
                    var t = getOwn(u, e.id);
                    t && E(e).enable()
                },
                completeLoad: function(e) {
                    var t, n, r, i = getOwn(o.shim, e) || {}, s = i.exports;
                    T();
                    while (l.length) {
                        n = l.shift();
                        if (n[0] === null) {
                            n[0] = e;
                            if (t)
                                break;
                            t=!0
                        } else 
                            n[0] === e && (t=!0);
                        L(n)
                    }
                    r = getOwn(u, e);
                    if (!t&&!hasProp(c, e) && r&&!r.inited) {
                        if (o.enforceDefine && (!s ||!getGlobal(s))) {
                            if (y(e))
                                return;
                            return x(makeError("nodefine", "No define call for " + e, null, [e]))
                        }
                        L([e, i.deps || [], i.exportsFn])
                    }
                    k()
                },
                nameToUrl: function(e, t, n) {
                    var r, i, s, u, a, f, l, c, h;
                    if (req.jsExtRegExp.test(e))
                        c = e + (t || "");
                    else {
                        r = o.paths, i = o.pkgs, a = e.split("/");
                        for (f = a.length; f > 0; f -= 1) {
                            l = a.slice(0, f).join("/"), s = getOwn(i, l), h = getOwn(r, l);
                            if (h) {
                                isArray(h) && (h = h[0]), a.splice(0, f, h);
                                break
                            }
                            if (s) {
                                e === s.name ? u = s.location + "/" + s.main : u = s.location, a.splice(0, f, u);
                                break
                            }
                        }
                        c = a.join("/"), c += t || (/\?/.test(c) || n ? "" : ".js"), c = (c.charAt(0) === "/" || c.match(/^[\w\+\.\-]+:/) ? "" : o.baseUrl) + c
                    }
                    return o.urlArgs ? c + ((c.indexOf("?")===-1 ? "?" : "&") + o.urlArgs) : c
                },
                load: function(e, t) {
                    req.load(r, e, t)
                },
                execCb: function(e, t, n, r) {
                    return t.apply(r, n)
                },
                onScriptLoad: function(e) {
                    if (e.type === "load" || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                        interactiveScript = null;
                        var t = O(e);
                        r.completeLoad(t.id)
                    }
                },
                onScriptError: function(e) {
                    var t = O(e);
                    if (!y(t.id))
                        return x(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
                }
            }, r.require = r.makeRequire(), r
        }
        function getInteractiveScript() {
            return interactiveScript && interactiveScript.readyState === "interactive" ? interactiveScript : (eachReverse(scripts(), function(e) {
                if (e.readyState === "interactive")
                    return interactiveScript = e
            }), interactiveScript)
        }
        var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.6", commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg, cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/, currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty, ap = Array.prototype, apsp = ap.splice, isBrowser = typeof window != "undefined"&&!!navigator&&!!window.document, isWebWorker=!isBrowser && typeof importScripts != "undefined", readyRegExp = isBrowser && navigator.platform === "PLAYSTATION 3" ? /^complete$/ : /^(complete|loaded)$/, defContextName = "_", isOpera = typeof opera != "undefined" && opera.toString() === "[object Opera]", contexts = {}, cfg = {}, globalDefQueue = [], useInteractive=!1;
        if (typeof define != "undefined")
            return;
        if (typeof requirejs != "undefined") {
            if (isFunction(requirejs))
                return;
            cfg = requirejs, requirejs = undefined
        }
        typeof require != "undefined"&&!isFunction(require) && (cfg = require, require = undefined), req = requirejs = function(e, t, n, r) {
            var i, s, o = defContextName;
            return !isArray(e) && typeof e != "string" && (s = e, isArray(t) ? (e = t, t = n, n = r) : e = []), s && s.context && (o = s.context), i = getOwn(contexts, o), i || (i = contexts[o] = req.s.newContext(o)), s && i.configure(s), i.require(e, t, n)
        }, req.config = function(e) {
            return req(e)
        }, req.nextTick = typeof setTimeout != "undefined" ? function(e) {
            setTimeout(e, 4)
        } : function(e) {
            e()
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
            req[e] = function() {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments)
            }
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.load = function(e, t, n) {
            var r = e && e.config || {}, i;
            if (isBrowser)
                return i = r.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script"), i.type = r.scriptType || "text/javascript", i.charset = "utf-8", i.async=!0, i.setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), i.attachEvent&&!(i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0)&&!isOpera ? (useInteractive=!0, i.attachEvent("onreadystatechange", e.onScriptLoad)) : (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)), i.src = n, currentlyAddingScript = i, baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i), currentlyAddingScript = null, i;
            if (isWebWorker)
                try {
                    importScripts(n), e.completeLoad(t)
            } catch (s) {
                e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, s, [t]))
            }
        }, isBrowser && eachReverse(scripts(), function(e) {
            head || (head = e.parentNode), dataMain = e.getAttribute("data-main");
            if (dataMain)
                return mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
        }), define = function(e, t, n) {
            var r, i;
            typeof e != "string" && (n = t, t = e, e = null), isArray(t) || (n = t, t = null), !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(e, n) {
                t.push(n)
            }), t = (n.length === 1 ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (r = currentlyAddingScript || getInteractiveScript(), r && (e || (e = r.getAttribute("data-requiremodule")), i = contexts[r.getAttribute("data-requirecontext")])), (i ? i.defQueue : globalDefQueue).push([e, t, n])
        }, define.amd = {
            jQuery: !0
        }, req.exec = function(text) {
            return eval(text)
        }, req(cfg)
    })(this), define("requireLib", function() {}), define("helpers/shim", {
        obj_keys: function(e) {
            var t = [];
            for (var n in e)
                t.push(n);
            return t
        },
        array_diff: function(e, t) {
            var n = {}, r = {}, i = [], s, o, u;
            for (s = 0, o = e.length; s < o; s++)
                n[e[s]]=!0;
            for (s = 0, o = t.length; s < o; s++)
                r[t[s]]=!0;
            for (u in n)
                u in r || i.push(u);
            for (u in r)
                u in n || i.push(u);
            return i
        },
        array_uniq: function(e) {
            var t = {}, n, r = e.length, i = [];
            for (n = 0; n < r; n += 1)
                t[e[n]] = e[n];
            for (n in t)
                i.push(t[n]);
            return i
        }
    }), define("helpers/parse_url", [], function() {
        return function(e) {
            var t = {}, n = document.createElement("a");
            return n.href = e, t.hash = n.hash, t.host = n.host, t.hostname = n.hostname, t.href = n.href, t.origin = n.origin, t.pathname = n.pathname, t.protocol = n.protocol, t.search = n.search, t
        }
    }), define("helpers/location_obj", ["module", "helpers/parse_url"], function(e, t) {
        var n = window.location;
        if (n.host == e.config().applicationHost && n.pathname.match(new RegExp(e.config().tunnelMatch))) {
            var r = decodeURIComponent(n.search.match(new RegExp(e.config().tunnelUrlParam + "=([^&]+)"))[1]);
            n = t(r)
        }
        return n
    }), function(e, t) {
        function H(e) {
            var t = e.length, n = w.type(e);
            return w.isWindow(e)?!1 : e.nodeType === 1 && t?!0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
        }
        function j(e) {
            var t = B[e] = {};
            return w.each(e.match(S) || [], function(e, n) {
                t[n]=!0
            }), t
        }
        function q(e, n, r, i) {
            if (!w.acceptData(e))
                return;
            var s, o, u = w.expando, a = e.nodeType, f = a ? w.cache: e, l = a ? e[u]: e[u] && u;
            if ((!l ||!f[l] ||!i&&!f[l].data) && r === t && typeof n == "string")
                return;
            l || (a ? l = e[u] = c.pop() || w.guid++ : l = u), f[l] || (f[l] = a ? {} : {
                toJSON: w.noop
            });
            if (typeof n == "object" || typeof n == "function")
                i ? f[l] = w.extend(f[l], n) : f[l].data = w.extend(f[l].data, n);
            return o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[w.camelCase(n)] = r), typeof n == "string" ? (s = o[n], s == null && (s = o[w.camelCase(n)])) : s = o, s
        }
        function R(e, t, n) {
            if (!w.acceptData(e))
                return;
            var r, i, s = e.nodeType, o = s ? w.cache: e, u = s ? e[w.expando]: w.expando;
            if (!o[u])
                return;
            if (t) {
                r = n ? o[u] : o[u].data;
                if (r) {
                    w.isArray(t) ? t = t.concat(w.map(t, w.camelCase)) : t in r ? t = [t] : (t = w.camelCase(t), t in r ? t = [t] : t = t.split(" ")), i = t.length;
                    while (i--)
                        delete r[t[i]];
                    if (n?!z(r) : !w.isEmptyObject(r)
                        )return 
                }
            }
            if (!n) {
                delete o[u].data;
                if (!z(o[u]))
                    return 
            }
            s ? w.cleanData([e], !0) : w.support.deleteExpando || o != o.window ? delete o[u] : o[u] = null
        }
        function U(e, n, r) {
            if (r === t && e.nodeType === 1) {
                var i = "data-" + n.replace(I, "-$1").toLowerCase();
                r = e.getAttribute(i);
                if (typeof r == "string") {
                    try {
                        r = r === "true"?!0 : r === "false"?!1 : r === "null" ? null : + r + "" === r?+r : F.test(r) ? w.parseJSON(r) : r
                    } catch (s) {}
                    w.data(e, n, r)
                } else 
                    r = t
            }
            return r
        }
        function z(e) {
            var t;
            for (t in e) {
                if (t === "data" && w.isEmptyObject(e[t]))
                    continue;
                if (t !== "toJSON")
                    return !1
            }
            return !0
        }
        function it() {
            return !0
        }
        function st() {
            return !1
        }
        function ot() {
            try {
                return o.activeElement
            } catch (e) {}
        }
        function ct(e, t) {
            do 
                e = e[t];
            while (e && e.nodeType !== 1);
            return e
        }
        function ht(e, t, n) {
            if (w.isFunction(t))
                return w.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                });
            if (t.nodeType)
                return w.grep(e, function(e) {
                    return e === t !== n
                });
            if (typeof t == "string") {
                if (ut.test(t))
                    return w.filter(t, e, n);
                t = w.filter(t, e)
            }
            return w.grep(e, function(e) {
                return w.inArray(e, t) >= 0 !== n
            })
        }
        function pt(e) {
            var t = dt.split("|"), n = e.createDocumentFragment();
            if (n.createElement)
                while (t.length)
                    n.createElement(t.pop());
            return n
        }
        function Mt(e, t) {
            return w.nodeName(e, "table") && w.nodeName(t.nodeType === 1 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }
        function _t(e) {
            return e.type = (w.find.attr(e, "type") !== null) + "/" + e.type, e
        }
        function Dt(e) {
            var t = Ct.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }
        function Pt(e, t) {
            var n, r = 0;
            for (; (n = e[r]) != null; r++)
                w._data(n, "globalEval", !t || w._data(t[r], "globalEval"))
        }
        function Ht(e, t) {
            if (t.nodeType !== 1 ||!w.hasData(e))
                return;
            var n, r, i, s = w._data(e), o = w._data(t, s), u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; r < i; r++)
                        w.event.add(t, n, u[n][r])
            }
            o.data && (o.data = w.extend({}, o.data))
        }
        function Bt(e, t) {
            var n, r, i;
            if (t.nodeType !== 1)
                return;
            n = t.nodeName.toLowerCase();
            if (!w.support.noCloneEvent && t[w.expando]) {
                i = w._data(t);
                for (r in i.events)
                    w.removeEvent(t, r, i.handle);
                t.removeAttribute(w.expando)
            }
            if (n === "script" && t.text !== e.text)
                _t(t).text = e.text, Dt(t);
            else if (n === "object")
                t.parentNode && (t.outerHTML = e.outerHTML), w.support.html5Clone && e.innerHTML&&!w.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
            else if (n === "input" && xt.test(e.type))
                t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
            else if (n === "option")
                t.defaultSelected = t.selected = e.defaultSelected;
            else if (n === "input" || n === "textarea")
                t.defaultValue = e.defaultValue
        }
        function jt(e, n) {
            var r, s, o = 0, u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*"): typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*"): t;
            if (!u)
                for (u = [], r = e.childNodes || e; (s = r[o]) != null; o++)
                    !n || w.nodeName(s, n) ? u.push(s) : w.merge(u, jt(s, n));
            return n === t || n && w.nodeName(e, n) ? w.merge([e], u) : u
        }
        function Ft(e) {
            xt.test(e.type) && (e.defaultChecked = e.checked)
        }
        function tn(e, t) {
            if (t in e)
                return t;
            var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
            while (i--) {
                t = en[i] + n;
                if (t in e)
                    return t
            }
            return r
        }
        function nn(e, t) {
            return e = t || e, w.css(e, "display") === "none" ||!w.contains(e.ownerDocument, e)
        }
        function rn(e, t) {
            var n, r, i, s = [], o = 0, u = e.length;
            for (; o < u; o++) {
                r = e[o];
                if (!r.style)
                    continue;
                s[o] = w._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && nn(r) && (s[o] = w._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && n !== "none" ||!i) && w._data(r, "olddisplay", i ? n : w.css(r, "display")))
            }
            for (o = 0; o < u; o++) {
                r = e[o];
                if (!r.style)
                    continue;
                if (!t || r.style.display === "none" || r.style.display === "")
                    r.style.display = t ? s[o] || "" : "none"
            }
            return e
        }
        function sn(e, t, n) {
            var r = $t.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }
        function on(e, t, n, r, i) {
            var s = n === (r ? "border" : "content") ? 4: t === "width" ? 1: 0, o = 0;
            for (; s < 4; s += 2)
                n === "margin" && (o += w.css(e, n + Zt[s], !0, i)), r ? (n === "content" && (o -= w.css(e, "padding" + Zt[s], !0, i)), n !== "margin" && (o -= w.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += w.css(e, "padding" + Zt[s], !0, i), n !== "padding" && (o += w.css(e, "border" + Zt[s] + "Width", !0, i)));
            return o
        }
        function un(e, t, n) {
            var r=!0, i = t === "width" ? e.offsetWidth : e.offsetHeight, s = qt(e), o = w.support.boxSizing && w.css(e, "boxSizing", !1, s) === "border-box";
            if (i <= 0 || i == null) {
                i = Rt(e, t, s);
                if (i < 0 || i == null)
                    i = e.style[t];
                if (Jt.test(i))
                    return i;
                r = o && (w.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px"
        }
        function an(e) {
            var t = o, n = Qt[e];
            if (!n) {
                n = fn(e, t);
                if (n === "none" ||!n)
                    It = (It || w("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach();
                Qt[e] = n
            }
            return n
        }
        function fn(e, t) {
            var n = w(t.createElement(e)).appendTo(t.body), r = w.css(n[0], "display");
            return n.remove(), r
        }
        function vn(e, t, n, r) {
            var i;
            if (w.isArray(t))
                w.each(t, function(t, i) {
                    n || cn.test(e) ? r(e, i) : vn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
                });
            else if (!n && w.type(t) === "object")
                for (i in t)
                    vn(e + "[" + i + "]", t[i], n, r);
            else 
                r(e, t)
        }
        function _n(e) {
            return function(t, n) {
                typeof t != "string" && (n = t, t = "*");
                var r, i = 0, s = t.toLowerCase().match(S) || [];
                if (w.isFunction(n))
                    while (r = s[i++])
                        r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }
        function Dn(e, t, n, r) {
            function o(u) {
                var a;
                return i[u]=!0, w.each(e[u] || [], function(e, u) {
                    var f = u(t, n, r);
                    if (typeof f == "string"&&!s&&!i[f])
                        return t.dataTypes.unshift(f), o(f), !1;
                    if (s)
                        return !(a = f)
                }), a
            }
            var i = {}, s = e === An;
            return o(t.dataTypes[0]) ||!i["*"] && o("*")
        }
        function Pn(e, n) {
            var r, i, s = w.ajaxSettings.flatOptions || {};
            for (i in n)
                n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
            return r && w.extend(!0, e, r), e
        }
        function Hn(e, n, r) {
            var i, s, o, u, a = e.contents, f = e.dataTypes;
            while (f[0] === "*")
                f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
            if (s)
                for (u in a)
                    if (a[u] && a[u].test(s)) {
                        f.unshift(u);
                        break
                    }
            if (f[0]in r)
                o = f[0];
            else {
                for (u in r) {
                    if (!f[0] || e.converters[u + " " + f[0]]) {
                        o = u;
                        break
                    }
                    i || (i = u)
                }
                o = o || i
            }
            if (o)
                return o !== f[0] && f.unshift(o), r[o]
        }
        function Bn(e, t, n, r) {
            var i, s, o, u, a, f = {}, l = e.dataTypes.slice();
            if (l[1])
                for (o in e.converters)
                    f[o.toLowerCase()] = e.converters[o];
            s = l.shift();
            while (s) {
                e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
                if (s)
                    if (s === "*")
                        s = a;
                    else if (a !== "*" && a !== s) {
                        o = f[a + " " + s] || f["* " + s];
                        if (!o)
                            for (i in f) {
                                u = i.split(" ");
                                if (u[1] === s) {
                                    o = f[a + " " + u[0]] || f["* " + u[0]];
                                    if (o) {
                                        o===!0 ? o = f[i] : f[i]!==!0 && (s = u[0], l.unshift(u[1]));
                                        break
                                    }
                                }
                            }
                            if (o!==!0)
                                if (o && e["throws"])
                                    t = o(t);
                                else 
                                    try {
                                        t = o(t)
                                    } catch (c) {
                                        return {
                                            state: "parsererror",
                                            error: o ? c: "No conversion from " + a + " to " + s
                                        }
                                    }
                }
            }
            return {
                state: "success",
                data: t
            }
        }
        function zn() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }
        function Wn() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }
        function Yn() {
            return setTimeout(function() {
                Xn = t
            }), Xn = w.now()
        }
        function Zn(e, t, n) {
            var r, i = (Gn[t] || []).concat(Gn["*"]), s = 0, o = i.length;
            for (; s < o; s++)
                if (r = i[s].call(n, t, e))
                    return r
        }
        function er(e, t, n) {
            var r, i, s = 0, o = Qn.length, u = w.Deferred().always(function() {
                delete a.elem
            }), a = function() {
                if (i)
                    return !1;
                var t = Xn || Yn(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length;
                for (; o < a; o++)
                    f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
            }, f = u.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Yn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = w.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0, r = t ? f.tweens.length: 0;
                    if (i)
                        return this;
                    i=!0;
                    for (; n < r; n++)
                        f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }), l = f.props;
            tr(l, f.opts.specialEasing);
            for (; s < o; s++) {
                r = Qn[s].call(f, e, l, f.opts);
                if (r)
                    return r
            }
            return w.map(l, Zn, f), w.isFunction(f.opts.start) && f.opts.start.call(e, f), w.fx.timer(w.extend(a, {
                elem: e,
                anim: f,
                queue: f.opts.queue
            })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
        }
        function tr(e, t) {
            var n, r, i, s, o;
            for (n in e) {
                r = w.camelCase(n), i = t[r], s = e[n], w.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = w.cssHooks[r];
                if (o && "expand"in o) {
                    s = o.expand(s), delete e[r];
                    for (n in s)
                        n in e || (e[n] = s[n], t[n] = i)
                    } else 
                        t[r] = i
            }
        }
        function nr(e, t, n) {
            var r, i, s, o, u, a, f = this, l = {}, c = e.style, h = e.nodeType && nn(e), p = w._data(e, "fxshow");
            n.queue || (u = w._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
                u.unqueued || a()
            }), u.unqueued++, f.always(function() {
                f.always(function() {
                    u.unqueued--, w.queue(e, "fx").length || u.empty.fire()
                })
            })), e.nodeType === 1 && ("height"in t || "width"in t) && (n.overflow = [c.overflow, c.overflowX, c.overflowY], w.css(e, "display") === "inline" && w.css(e, "float") === "none" && (!w.support.inlineBlockNeedsLayout || an(e.nodeName) === "inline" ? c.display = "inline-block" : c.zoom = 1)), n.overflow && (c.overflow = "hidden", w.support.shrinkWrapBlocks || f.always(function() {
                c.overflow = n.overflow[0], c.overflowX = n.overflow[1], c.overflowY = n.overflow[2]
            }));
            for (r in t) {
                i = t[r];
                if ($n.exec(i)) {
                    delete t[r], s = s || i === "toggle";
                    if (i === (h ? "hide" : "show"))
                        continue;
                    l[r] = p && p[r] || w.style(e, r)
                }
            }
            if (!w.isEmptyObject(l)) {
                p ? "hidden"in p && (h = p.hidden) : p = w._data(e, "fxshow", {}), s && (p.hidden=!h), h ? w(e).show() : f.done(function() {
                    w(e).hide()
                }), f.done(function() {
                    var t;
                    w._removeData(e, "fxshow");
                    for (t in l)
                        w.style(e, t, l[t])
                });
                for (r in l)
                    o = Zn(h ? p[r] : 0, r, f), r in p || (p[r] = o.start, h && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
            }
        }
        function rr(e, t, n, r, i) {
            return new rr.prototype.init(e, t, n, r, i)
        }
        function ir(e, t) {
            var n, r = {
                height: e
            }, i = 0;
            t = t ? 1 : 0;
            for (; i < 4; i += 2 - t)
                n = Zt[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }
        function sr(e) {
            return w.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
        }
        var n, r, i = typeof t, s = e.location, o = e.document, u = o.documentElement, a = e.jQuery, f = e.$, l = {}, c = [], h = "1.10.1", p = c.concat, d = c.push, v = c.slice, m = c.indexOf, g = l.toString, y = l.hasOwnProperty, b = h.trim, w = function(e, t) {
            return new w.fn.init(e, t, r)
        }, E = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, S = /\S+/g, x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, C = /^[\],:{}\s]*$/, k = /(?:^|:|,)(?:\s*\[)+/g, L = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, O = /^-ms-/, M = /-([\da-z])/gi, _ = function(e, t) {
            return t.toUpperCase()
        }, D = function(e) {
            if (o.addEventListener || e.type === "load" || o.readyState === "complete")
                P(), w.ready()
        }, P = function() {
            o.addEventListener ? (o.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)) : (o.detachEvent("onreadystatechange", D), e.detachEvent("onload", D))
        };
        w.fn = w.prototype = {
            jquery: h,
            constructor: w,
            init: function(e, n, r) {
                var i, s;
                if (!e)
                    return this;
                if (typeof e == "string") {
                    e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = T.exec(e);
                    if (i && (i[1] ||!n)) {
                        if (i[1]) {
                            n = n instanceof w ? n[0] : n, w.merge(this, w.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0));
                            if (N.test(i[1]) && w.isPlainObject(n))
                                for (i in n)
                                    w.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                            return this
                        }
                        s = o.getElementById(i[2]);
                        if (s && s.parentNode) {
                            if (s.id !== i[2])
                                return r.find(e);
                            this.length = 1, this[0] = s
                        }
                        return this.context = o, this.selector = e, this
                    }
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return v.call(this)
            },
            get: function(e) {
                return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = w.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return w.each(this, e, t)
            },
            ready: function(e) {
                return w.ready.promise().done(e), this
            },
            slice: function() {
                return this.pushStack(v.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            eq: function(e) {
                var t = this.length, n =+ e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack(w.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: d,
            sort: [].sort,
            splice: [].splice
        }, w.fn.init.prototype = w.fn, w.extend = w.fn.extend = function() {
            var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments.length, l=!1;
            typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object"&&!w.isFunction(u) && (u = {}), f === a && (u = this, --a);
            for (; a < f; a++)
                if ((s = arguments[a]) != null)
                    for (i in s) {
                        e = u[i], r = s[i];
                        if (u === r)
                            continue;
                            l && r && (w.isPlainObject(r) || (n = w.isArray(r))) ? (n ? (n=!1, o = e && w.isArray(e) ? e : []) : o = e && w.isPlainObject(e) ? e : {}, u[i] = w.extend(l, o, r)) : r !== t && (u[i] = r)
                    }
            return u
        }, w.extend({
            expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
            noConflict: function(t) {
                return e.$ === w && (e.$ = f), t && e.jQuery === w && (e.jQuery = a), w
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? w.readyWait++ : w.ready(!0)
            },
            ready: function(e) {
                if (e===!0?--w.readyWait : w.isReady)
                    return;
                if (!o.body)
                    return setTimeout(w.ready);
                w.isReady=!0;
                if (e!==!0&&--w.readyWait > 0)
                    return;
                n.resolveWith(o, [w]), w.fn.trigger && w(o).trigger("ready").off("ready")
            },
            isFunction: function(e) {
                return w.type(e) === "function"
            },
            isArray: Array.isArray || function(e) {
                return w.type(e) === "array"
            },
            isWindow: function(e) {
                return e != null && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? l[g.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                var n;
                if (!e || w.type(e) !== "object" || e.nodeType || w.isWindow(e))
                    return !1;
                try {
                    if (e.constructor&&!y.call(e, "constructor")&&!y.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (r) {
                    return !1
                }
                if (w.support.ownLast)
                    for (n in e)
                        return y.call(e, n);
                for (n in e);
                return n === t || y.call(e, n)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || typeof e != "string")
                    return null;
                typeof t == "boolean" && (n = t, t=!1), t = t || o;
                var r = N.exec(e), i=!n && [];
                return r ? [t.createElement(r[1])] : (r = w.buildFragment([e], t, i), i && w(i).remove(), w.merge([], r.childNodes))
            },
            parseJSON: function(t) {
                if (e.JSON && e.JSON.parse)
                    return e.JSON.parse(t);
                if (t === null)
                    return t;
                if (typeof t == "string") {
                    t = w.trim(t);
                    if (t && C.test(t.replace(L, "@").replace(A, "]").replace(k, "")))
                        return (new Function("return " + t))()
                }
                w.error("Invalid JSON: " + t)
            },
            parseXML: function(n) {
                var r, i;
                if (!n || typeof n != "string")
                    return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (s) {
                    r = t
                }
                return (!r ||!r.documentElement || r.getElementsByTagName("parsererror").length) && w.error("Invalid XML: " + n), r
            },
            noop: function() {},
            globalEval: function(t) {
                t && w.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(O, "ms-").replace(M, _)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var r, i = 0, s = e.length, o = H(e);
                if (n)
                    if (o)
                        for (; i < s; i++) {
                            r = t.apply(e[i], n);
                            if (r===!1)
                                break
                        } else 
                            for (i in e) {
                                r = t.apply(e[i], n);
                                if (r===!1)
                                    break
                            } else if (o)
                    for (; i < s; i++) {
                        r = t.call(e[i], i, e[i]);
                        if (r===!1)
                            break
                    } else 
                        for (i in e) {
                            r = t.call(e[i], i, e[i]);
                            if (r===!1)
                                break
                        }
                return e
            },
            trim: b&&!b.call("﻿ ") ? function(e) {
                return e == null ? "" : b.call(e)
            }
            : function(e) {
                return e == null ? "" : (e + "").replace(x, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return e != null && (H(Object(e)) ? w.merge(n, typeof e == "string" ? [e] : e) : d.call(n, e)), n
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (m)
                        return m.call(t, e, n);
                    r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                    for (; n < r; n++)
                        if (n in t && t[n] === e)
                            return n
                }
                return - 1
            },
            merge: function(e, n) {
                var r = n.length, i = e.length, s = 0;
                if (typeof r == "number")
                    for (; s < r; s++)
                        e[i++] = n[s];
                else 
                    while (n[s] !== t)
                        e[i++] = n[s++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                var r, i = [], s = 0, o = e.length;
                n=!!n;
                for (; s < o; s++)
                    r=!!t(e[s], s), n !== r && i.push(e[s]);
                return i
            },
            map: function(e, t, n) {
                var r, i = 0, s = e.length, o = H(e), u = [];
                if (o)
                    for (; i < s; i++)
                        r = t(e[i], i, n), r != null && (u[u.length] = r);
                else 
                    for (i in e)
                        r = t(e[i], i, n), r != null && (u[u.length] = r);
                return p.apply([], u)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, s;
                return typeof n == "string" && (s = e[n], n = e, e = s), w.isFunction(e) ? (r = v.call(arguments, 2), i = function() {
                    return e.apply(n || this, r.concat(v.call(arguments)))
                }, i.guid = e.guid = e.guid || w.guid++, i) : t
            },
            access: function(e, n, r, i, s, o, u) {
                var a = 0, f = e.length, l = r == null;
                if (w.type(r) === "object") {
                    s=!0;
                    for (a in r)
                        w.access(e, n, a, r[a], !0, o, u)
                } else if (i !== t) {
                    s=!0, w.isFunction(i) || (u=!0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
                        return l.call(w(e), n)
                    }));
                    if (n)
                        for (; a < f; a++)
                            n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
                }
                return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(e, t, n, r) {
                var i, s, o = {};
                for (s in t)
                    o[s] = e.style[s], e.style[s] = t[s];
                i = n.apply(e, r || []);
                for (s in t)
                    e.style[s] = o[s];
                return i
            }
        }), w.ready.promise = function(t) {
            if (!n) {
                n = w.Deferred();
                if (o.readyState === "complete")
                    setTimeout(w.ready);
                else if (o.addEventListener)
                    o.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1);
                else {
                    o.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
                    var r=!1;
                    try {
                        r = e.frameElement == null && o.documentElement
                    } catch (i) {}
                    r && r.doScroll && function s() {
                        if (!w.isReady) {
                            try {
                                r.doScroll("left")
                            } catch (e) {
                                return setTimeout(s, 50)
                            }
                            P(), w.ready()
                        }
                    }()
                }
            }
            return n.promise(t)
        }, w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            l["[object " + t + "]"] = t.toLowerCase()
        }), r = w(o), function(e, t) {
            function ot(e, t, n, i) {
                var s, o, u, a, f, l, p, m, g, w;
                (t ? t.ownerDocument || t : E) !== h && c(t), t = t || h, n = n || [];
                if (!e || typeof e != "string")
                    return n;
                if ((a = t.nodeType) !== 1 && a !== 9)
                    return [];
                if (d&&!i) {
                    if (s = Z.exec(e))
                        if (u = s[1]) {
                            if (a === 9) {
                                o = t.getElementById(u);
                                if (!o ||!o.parentNode)
                                    return n;
                                    if (o.id === u)
                                        return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && y(t, o) && o.id === u)
                                return n.push(o), n
                        } else {
                            if (s[2])
                                return H.apply(n, t.getElementsByTagName(e)), n;
                                if ((u = s[3]) && r.getElementsByClassName && t.getElementsByClassName)
                                    return H.apply(n, t.getElementsByClassName(u)), n
                        }
                    if (r.qsa && (!v ||!v.test(e))) {
                        m = p = b, g = t, w = a === 9 && e;
                        if (a === 1 && t.nodeName.toLowerCase() !== "object") {
                            l = bt(e), (p = t.getAttribute("id")) ? m = p.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = l.length;
                            while (f--)
                                l[f] = m + wt(l[f]);
                            g = $.test(e) && t.parentNode || t, w = l.join(",")
                        }
                        if (w)
                            try {
                                return H.apply(n, g.querySelectorAll(w)), n
                        } catch (S) {} finally {
                            p || t.removeAttribute("id")
                        }
                    }
                }
                return Lt(e.replace(W, "$1"), t, n, i)
            }
            function ut(e) {
                return Y.test(e + "")
            }
            function at() {
                function t(n, r) {
                    return e.push(n += " ") > s.cacheLength && delete t[e.shift()], t[n] = r
                }
                var e = [];
                return t
            }
            function ft(e) {
                return e[b]=!0, e
            }
            function lt(e) {
                var t = h.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }
            function ct(e, t, n) {
                e = e.split("|");
                var r, i = e.length, o = n ? null: t;
                while (i--)
                    if (!(r = s.attrHandle[e[i]]) || r === t)
                        s.attrHandle[e[i]] = o
            }
            function ht(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : e[t]===!0 ? t.toLowerCase() : null
            }
            function pt(e, t) {
                return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
            }
            function dt(e) {
                if (e.nodeName.toLowerCase() === "input")
                    return e.defaultValue
            }
            function vt(e, t) {
                var n = t && e, r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || O) - (~e.sourceIndex || O);
                if (r)
                    return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t)
                            return - 1;
                return e ? 1 : - 1
            }
            function mt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return n === "input" && t.type === e
                }
            }
            function gt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return (n === "input" || n === "button") && t.type === e
                }
            }
            function yt(e) {
                return ft(function(t) {
                    return t =+ t, ft(function(n, r) {
                        var i, s = e([], n.length, t), o = s.length;
                        while (o--)
                            n[i = s[o]] && (n[i]=!(r[i] = n[i]))
                    })
                })
            }
            function bt(e, t) {
                var n, r, i, o, u, a, f, l = N[e + " "];
                if (l)
                    return t ? 0 : l.slice(0);
                u = e, a = [], f = s.preFilter;
                while (u) {
                    if (!n || (r = X.exec(u)))
                        r && (u = u.slice(r[0].length) || u), a.push(i = []);
                    n=!1;
                    if (r = V.exec(u))
                        n = r.shift(), i.push({
                            value: n,
                            type: r[0].replace(W, " ")
                        }), u = u.slice(n.length);
                    for (o in s.filter)(r = G[o].exec(u)
                        ) && (!f[o] || (r = f[o](r))) && (n = r.shift(), i.push({
                            value: n,
                            type: o,
                            matches: r
                        }), u = u.slice(n.length));
                    if (!n)
                        break
                }
                return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
            }
            function wt(e) {
                var t = 0, n = e.length, r = "";
                for (; t < n; t++)
                    r += e[t].value;
                return r
            }
            function Et(e, t, n) {
                var r = t.dir, s = n && r === "parentNode", o = x++;
                return t.first ? function(t, n, i) {
                    while (t = t[r])
                        if (t.nodeType === 1 || s)
                            return e(t, n, i)
                } : function(t, n, u) {
                    var a, f, l, c = S + " " + o;
                    if (u) {
                        while (t = t[r])
                            if (t.nodeType === 1 || s)
                                if (e(t, n, u))
                                    return !0
                    } else 
                        while (t = t[r])
                            if (t.nodeType === 1 || s) {
                                l = t[b] || (t[b] = {});
                                if ((f = l[r]) && f[0] === c) {
                                    if ((a = f[1])===!0 || a === i)
                                        return a===!0
                                } else {
                                    f = l[r] = [c], f[1] = e(t, n, u) || i;
                                    if (f[1]===!0)
                                        return !0
                                }
                            }
                }
            }
            function St(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r))
                            return !1;
                    return !0
                } : e[0]
            }
            function xt(e, t, n, r, i) {
                var s, o = [], u = 0, a = e.length, f = t != null;
                for (; u < a; u++)
                    if (s = e[u])
                        if (!n || n(s, r, i))
                            o.push(s), f && t.push(u);
                return o
            }
            function Tt(e, t, n, r, i, s) {
                return r&&!r[b] && (r = Tt(r)), i&&!i[b] && (i = Tt(i, s)), ft(function(s, o, u, a) {
                    var f, l, c, h = [], p = [], d = o.length, v = s || kt(t || "*", u.nodeType ? [u] : u, []), m = e && (s ||!t) ? xt(v, h, e, u, a): v, g = n ? i || (s ? e : d || r) ? []: o: m;
                    n && n(m, g, u, a);
                    if (r) {
                        f = xt(g, p), r(f, [], u, a), l = f.length;
                        while (l--)
                            if (c = f[l])
                                g[p[l]]=!(m[p[l]] = c)
                    }
                    if (s) {
                        if (i || e) {
                            if (i) {
                                f = [], l = g.length;
                                while (l--)(c = g[l]) && f.push(m[l] = c);
                                i(null, g = [], f, a)
                            }
                            l = g.length;
                            while (l--)(c = g[l]) && (f = i ? j.call(s, c) : h[l])>-1 && (s[f]=!(o[f] = c))
                            }
                    } else 
                        g = xt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : H.apply(o, g)
                })
            }
            function Nt(e) {
                var t, n, r, i = e.length, o = s.relative[e[0].type], u = o || s.relative[" "], a = o ? 1: 0, l = Et(function(e) {
                    return e === t
                }, u, !0), c = Et(function(e) {
                    return j.call(t, e)>-1
                }, u, !0), h = [function(e, n, r) {
                    return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                }
                ];
                for (; a < i; a++)
                    if (n = s.relative[e[a].type])
                        h = [Et(St(h), n)];
                    else {
                        n = s.filter[e[a].type].apply(null, e[a].matches);
                        if (n[b]) {
                            r=++a;
                            for (; r < i; r++)
                                if (s.relative[e[r].type])
                                    break;
                                    return Tt(a > 1 && St(h), a > 1 && wt(e.slice(0, a - 1).concat({
                                        value: e[a - 2].type === " " ? "*": ""
                                    })).replace(W, "$1"), n, a < r && Nt(e.slice(a, r)), r < i && Nt(e = e.slice(r)), r < i && wt(e))
                                }
                                h.push(n)
                    }
                return St(h)
            }
            function Ct(e, t) {
                var n = 0, r = t.length > 0, o = e.length > 0, u = function(u, a, l, c, p) {
                    var d, v, m, g = [], y = 0, b = "0", w = u && [], E = p != null, x = f, T = u || o && s.find.TAG("*", p && a.parentNode || a), N = S += x == null ? 1: Math.random() || .1;
                    E && (f = a !== h && a, i = n);
                    for (; (d = T[b]) != null; b++) {
                        if (o && d) {
                            v = 0;
                            while (m = e[v++])
                                if (m(d, a, l)) {
                                    c.push(d);
                                    break
                                }
                            E && (S = N, i=++n)
                        }
                        r && ((d=!m && d) && y--, u && w.push(d))
                    }
                    y += b;
                    if (r && b !== y) {
                        v = 0;
                        while (m = t[v++])
                            m(w, g, a, l);
                        if (u) {
                            if (y > 0)
                                while (b--)!w[b]&&!g[b] && (g[b] = D.call(c));
                            g = xt(g)
                        }
                        H.apply(c, g), E&&!u && g.length > 0 && y + t.length > 1 && ot.uniqueSort(c)
                    }
                    return E && (S = N, f = x), w
                };
                return r ? ft(u) : u
            }
            function kt(e, t, n) {
                var r = 0, i = t.length;
                for (; r < i; r++)
                    ot(e, t[r], n);
                return n
            }
            function Lt(e, t, n, i) {
                var o, u, f, l, c, h = bt(e);
                if (!i && h.length === 1) {
                    u = h[0] = h[0].slice(0);
                    if (u.length > 2 && (f = u[0]).type === "ID" && r.getById && t.nodeType === 9 && d && s.relative[u[1].type]) {
                        t = (s.find.ID(f.matches[0].replace(rt, it), t) || [])[0];
                        if (!t)
                            return n;
                        e = e.slice(u.shift().value.length)
                    }
                    o = G.needsContext.test(e) ? 0 : u.length;
                    while (o--) {
                        f = u[o];
                        if (s.relative[l = f.type])
                            break;
                        if (c = s.find[l])
                            if (i = c(f.matches[0].replace(rt, it), $.test(u[0].type) && t.parentNode || t)) {
                                u.splice(o, 1), e = i.length && wt(u);
                                if (!e)
                                    return H.apply(n, i), n;
                                    break
                            }
                    }
                }
                return a(e, h)(i, t, !d, n, $.test(e)), n
            }
            function At() {}
            var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b = "sizzle" + - (new Date), E = e.document, S = 0, x = 0, T = at(), N = at(), C = at(), k=!1, L = function() {
                return 0
            }, A = typeof t, O = 1<<31, M = {}.hasOwnProperty, _ = [], D = _.pop, P = _.push, H = _.push, B = _.slice, j = _.indexOf || function(e) {
                var t = 0, n = this.length;
                for (; t < n; t++)
                    if (this[t] === e)
                        return t;
                return - 1
            }, F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", I = "[\\x20\\t\\r\\n\\f]", q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", R = q.replace("w", "w#"), U = "\\[" + I + "*(" + q + ")" + I + "*(?:([*^$|!~]?=)" + I + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + R + ")|)|)" + I + "*\\]", z = ":(" + q + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + U.replace(3, 8) + ")*)|.*)\\)|)", W = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"), X = new RegExp("^" + I + "*," + I + "*"), V = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"), $ = new RegExp(I + "*[+~]"), J = new RegExp("=" + I + "*([^\\]'\"]*)" + I + "*\\]", "g"), K = new RegExp(z), Q = new RegExp("^" + R + "$"), G = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + U),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"), it = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r>>10 | 55296, r & 1023 | 56320)
            };
            try {
                H.apply(_ = B.call(E.childNodes), E.childNodes), _[E.childNodes.length].nodeType
            } catch (st) {
                H = {
                    apply: _.length ? function(e, t) {
                        P.apply(e, B.call(t))
                    }
                    : function(e, t) {
                        var n = e.length, r = 0;
                        while (e[n++] = t[r++]);
                        e.length = n - 1
                    }
                }
            }
            u = ot.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            }, r = ot.support = {}, c = ot.setDocument = function(e) {
                var t = e ? e.ownerDocument || e: E, n = t.parentWindow;
                if (t === h || t.nodeType !== 9 ||!t.documentElement)
                    return h;
                h = t, p = t.documentElement, d=!u(t), n && n.frameElement && n.attachEvent("onbeforeunload", function() {
                    c()
                }), r.attributes = lt(function(e) {
                    return e.innerHTML = "<a href='#'></a>", ct("type|href|height|width", pt, e.firstChild.getAttribute("href") === "#"), ct(F, ht, e.getAttribute("disabled") == null), e.className = "i", !e.getAttribute("className")
                }), r.input = lt(function(e) {
                    return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
                }), ct("value", dt, r.attributes && r.input), r.getElementsByTagName = lt(function(e) {
                    return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
                }), r.getElementsByClassName = lt(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", e.getElementsByClassName("i").length === 2
                }), r.getById = lt(function(e) {
                    return p.appendChild(e).id = b, !t.getElementsByName ||!t.getElementsByName(b).length
                }), r.getById ? (s.find.ID = function(e, t) {
                    if (typeof t.getElementById !== A && d) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, s.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete s.find.ID, s.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), s.find.TAG = r.getElementsByTagName ? function(e, t) {
                    if (typeof t.getElementsByTagName !== A)
                        return t.getElementsByTagName(e)
                } : function(e, t) {
                    var n, r = [], i = 0, s = t.getElementsByTagName(e);
                    if (e === "*") {
                        while (n = s[i++])
                            n.nodeType === 1 && r.push(n);
                        return r
                    }
                    return s
                }, s.find.CLASS = r.getElementsByClassName && function(e, t) {
                    if (typeof t.getElementsByClassName !== A && d)
                        return t.getElementsByClassName(e)
                }, m = [], v = [];
                if (r.qsa = ut(t.querySelectorAll))
                    lt(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + F + ")"), e.querySelectorAll(":checked").length || v.push(":checked")
                    }), lt(function(e) {
                        var n = t.createElement("input");
                        n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                    });
                return (r.matchesSelector = ut(g = p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt(function(e) {
                    r.disconnectedMatch = g.call(e, "div"), g.call(e, "[s!='']:x"), m.push("!=", z)
                }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), y = ut(p.contains) || p.compareDocumentPosition ? function(e, t) {
                    var n = e.nodeType === 9 ? e.documentElement: e, r = t && t.parentNode;
                    return e === r||!!r && r.nodeType === 1&&!!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e)
                                return !0;
                    return !1
                }, r.sortDetached = lt(function(e) {
                    return e.compareDocumentPosition(t.createElement("div")) & 1
                }), L = p.compareDocumentPosition ? function(e, n) {
                    if (e === n)
                        return k=!0, 0;
                    var i = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                    if (i)
                        return i & 1 ||!r.sortDetached && n.compareDocumentPosition(e) === i ? e === t || y(E, e)?-1 : n === t || y(E, n) ? 1 : l ? j.call(l, e) - j.call(l, n) : 0 : i & 4?-1 : 1;
                    return e.compareDocumentPosition?-1 : 1
                } : function(e, n) {
                    var r, i = 0, s = e.parentNode, o = n.parentNode, u = [e], a = [n];
                    if (e === n)
                        return k=!0, 0;
                    if (!s ||!o)
                        return e === t?-1 : n === t ? 1 : s?-1 : o ? 1 : l ? j.call(l, e) - j.call(l, n) : 0;
                    if (s === o)
                        return vt(e, n);
                    r = e;
                    while (r = r.parentNode)
                        u.unshift(r);
                    r = n;
                    while (r = r.parentNode)
                        a.unshift(r);
                    while (u[i] === a[i])
                        i++;
                    return i ? vt(u[i], a[i]) : u[i] === E?-1 : a[i] === E ? 1 : 0
                }, t
            }, ot.matches = function(e, t) {
                return ot(e, null, null, t)
            }, ot.matchesSelector = function(e, t) {
                (e.ownerDocument || e) !== h && c(e), t = t.replace(J, "='$1']");
                if (r.matchesSelector && d && (!m ||!m.test(t)) && (!v ||!v.test(t)))
                    try {
                        var n = g.call(e, t);
                        if (n || r.disconnectedMatch || e.document && e.document.nodeType !== 11)
                            return n
                } catch (i) {}
                return ot(t, h, null, [e]).length > 0
            }, ot.contains = function(e, t) {
                return (e.ownerDocument || e) !== h && c(e), y(e, t)
            }, ot.attr = function(e, n) {
                (e.ownerDocument || e) !== h && c(e);
                var i = s.attrHandle[n.toLowerCase()], o = i && M.call(s.attrHandle, n.toLowerCase()) ? i(e, n, !d): t;
                return o === t ? r.attributes ||!d ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o
            }, ot.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ot.uniqueSort = function(e) {
                var t, n = [], i = 0, s = 0;
                k=!r.detectDuplicates, l=!r.sortStable && e.slice(0), e.sort(L);
                if (k) {
                    while (t = e[s++])
                        t === e[s] && (i = n.push(s));
                    while (i--)
                        e.splice(n[i], 1)
                }
                return e
            }, o = ot.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (!i)
                    for (; t = e[r]; r++)
                        n += o(t);
                else if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent == "string")
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (i === 3 || i === 4)
                    return e.nodeValue;
                return n
            }, s = ot.selectors = {
                cacheLength: 50,
                createPseudo: ft,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ot.error(e[0]), e[4] =+ (e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] =+ (e[7] + e[8] || e[3] === "odd")) : e[3] && ot.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var n, r=!e[5] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && K.test(r) && (n = bt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(rt, it).toLowerCase();
                        return e === "*" ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && T(e, function(e) {
                            return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = ot.attr(r, e);
                            return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n)>-1 : t === "$=" ? n && i.slice( - n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n)>-1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var s = e.slice(0, 3) !== "nth", o = e.slice( - 4) !== "last", u = t === "of-type";
                        return r === 1 && i === 0 ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, a) {
                            var f, l, c, h, p, d, v = s !== o ? "nextSibling": "previousSibling", m = t.parentNode, g = u && t.nodeName.toLowerCase(), y=!a&&!u;
                            if (m) {
                                if (s) {
                                    while (v) {
                                        c = t;
                                        while (c = c[v])
                                            if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1)
                                                return !1;
                                        d = v = e === "only"&&!d && "nextSibling"
                                    }
                                    return !0
                                }
                                d = [o ? m.firstChild: m.lastChild];
                                if (o && y) {
                                    l = m[b] || (m[b] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
                                    while (c=++p && c && c[v] || (h = p = 0) || d.pop()
                                        )if (c.nodeType === 1&&++h && c === t) {
                                        l[e] = [S, p, h];
                                        break
                                    }
                                } else if (y && (f = (t[b] || (t[b] = {}))[e]) && f[0] === S)
                                    h = f[1];
                                else 
                                    while (c=++p && c && c[v] || (h = p = 0) || d.pop()
                                        )if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1)&&++h) {
                                    y && ((c[b] || (c[b] = {}))[e] = [S, h]);
                                    if (c === t)
                                        break
                                }
                                return h -= i, h === r || h%r === 0 && h / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = s.pseudos[e] || s.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                        return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], s.setFilters.hasOwnProperty(e.toLowerCase()) ? ft(function(e, n) {
                            var i, s = r(e, t), o = s.length;
                            while (o--)
                                i = j.call(e, s[o]), e[i]=!(n[i] = s[o])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ft(function(e) {
                        var t = [], n = [], r = a(e.replace(W, "$1"));
                        return r[b] ? ft(function(e, t, n, i) {
                            var s, o = r(e, null, i, []), u = e.length;
                            while (u--)
                                if (s = o[u])
                                    e[u]=!(t[u] = s)
                        }) : function(e, i, s) {
                            return t[0] = e, r(t, null, s, n), !n.pop()
                        }
                    }),
                    has: ft(function(e) {
                        return function(t) {
                            return ot(e, t).length > 0
                        }
                    }),
                    contains: ft(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || o(t)).indexOf(e)>-1
                        }
                    }),
                    lang: ft(function(e) {
                        return Q.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function(t) {
                            var n;
                            do 
                                if (n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                            while ((t = t.parentNode) && t.nodeType === 1);
                            return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus())&&!!(e.type || e.href||~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled===!1
                    },
                    disabled: function(e) {
                        return e.disabled===!0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input"&&!!e.checked || t === "option"&&!!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected===!0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !s.pseudos.empty(e)
                    },
                    header: function(e) {
                        return tt.test(e.nodeName)
                    },
                    input: function(e) {
                        return et.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    text: function(e) {
                        var t;
                        return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                    },
                    first: yt(function() {
                        return [0]
                    }),
                    last: yt(function(e, t) {
                        return [t - 1]
                    }),
                    eq: yt(function(e, t, n) {
                        return [n < 0 ? n + t: n]
                    }),
                    even: yt(function(e, t) {
                        var n = 0;
                        for (; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: yt(function(e, t) {
                        var n = 1;
                        for (; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: yt(function(e, t, n) {
                        var r = n < 0 ? n + t: n;
                        for (; --r >= 0;)
                            e.push(r);
                        return e
                    }),
                    gt: yt(function(e, t, n) {
                        var r = n < 0 ? n + t: n;
                        for (; ++r < t;)
                            e.push(r);
                        return e
                    })
                }
            };
            for (n in{
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                s.pseudos[n] = mt(n);
            for (n in{
                submit: !0,
                reset: !0
            })
                s.pseudos[n] = gt(n);
            a = ot.compile = function(e, t) {
                var n, r = [], i = [], s = C[e + " "];
                if (!s) {
                    t || (t = bt(e)), n = t.length;
                    while (n--)
                        s = Nt(t[n]), s[b] ? r.push(s) : i.push(s);
                    s = C(e, Ct(i, r))
                }
                return s
            }, s.pseudos.nth = s.pseudos.eq, At.prototype = s.filters = s.pseudos, s.setFilters = new At, r.sortStable = b.split("").sort(L).join("") === b, c(), [0, 0].sort(L), r.detectDuplicates = k, w.find = ot, w.expr = ot.selectors, w.expr[":"] = w.expr.pseudos, w.unique = ot.uniqueSort, w.text = ot.getText, w.isXMLDoc = ot.isXML, w.contains = ot.contains
        }(e);
        var B = {};
        w.Callbacks = function(e) {
            e = typeof e == "string" ? B[e] || j(e) : w.extend({}, e);
            var n, r, i, s, o, u, a = [], f=!e.once && [], l = function(t) {
                r = e.memory && t, i=!0, o = u || 0, u = 0, s = a.length, n=!0;
                for (; a && o < s; o++)
                    if (a[o].apply(t[0], t[1])===!1 && e.stopOnFalse) {
                        r=!1;
                        break
                    }
                n=!1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
            }, c = {
                add: function() {
                    if (a) {
                        var t = a.length;
                        (function i(t) {
                            w.each(t, function(t, n) {
                                var r = w.type(n);
                                r === "function" ? (!e.unique ||!c.has(n)) && a.push(n) : n && n.length && r !== "string" && i(n)
                            })
                        })(arguments), n ? s = a.length : r && (u = t, l(r))
                    }
                    return this
                },
                remove: function() {
                    return a && w.each(arguments, function(e, t) {
                        var r;
                        while ((r = w.inArray(t, a, r))>-1)
                            a.splice(r, 1), n && (r <= s && s--, r <= o && o--)
                    }), this
                },
                has: function(e) {
                    return e ? w.inArray(e, a)>-1 : !!a&&!!a.length
                },
                empty: function() {
                    return a = [], s = 0, this
                },
                disable: function() {
                    return a = f = r = t, this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return f = t, r || c.disable(), this
                },
                locked: function() {
                    return !f
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice(): t], a && (!i || f) && (n ? f.push(t) : l(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
            return c
        }, w.extend({
            Deferred: function(e) {
                var t = [["resolve", "done", w.Callbacks("once memory"), "resolved"], ["reject", "fail", w.Callbacks("once memory"), "rejected"], ["notify", "progress", w.Callbacks("memory")]], n = "pending", r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return w.Deferred(function(n) {
                            w.each(t, function(t, s) {
                                var o = s[0], u = w.isFunction(e[t]) && e[t];
                                i[s[1]](function() {
                                    var e = u && u.apply(this, arguments);
                                    e && w.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return e != null ? w.extend(e, r) : r
                    }
                }, i = {};
                return r.pipe = r.then, w.each(t, function(e, s) {
                    var o = s[2], u = s[3];
                    r[s[1]] = o.add, u && o.add(function() {
                        n = u
                    }, t[e^1][2].disable, t[2][2].lock), i[s[0]] = function() {
                        return i[s[0] + "With"](this === i ? r : this, arguments), this
                    }, i[s[0] + "With"] = o.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t = 0, n = v.call(arguments), r = n.length, i = r !== 1 || e && w.isFunction(e.promise) ? r: 0, s = i === 1 ? e: w.Deferred(), o = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? v.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                }, u, a, f;
                if (r > 1) {
                    u = new Array(r), a = new Array(r), f = new Array(r);
                    for (; t < r; t++)
                        n[t] && w.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
                }
                return i || s.resolveWith(f, n), s.promise()
            }
        }), w.support = function(t) {
            var n, r, s, u, a, f, l, c, h, p = o.createElement("div");
            p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], r = p.getElementsByTagName("a")[0];
            if (!r ||!r.style ||!n.length)
                return t;
            u = o.createElement("select"), f = u.appendChild(o.createElement("option")), s = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = p.className !== "t", t.leadingWhitespace = p.firstChild.nodeType === 3, t.tbody=!p.getElementsByTagName("tbody").length, t.htmlSerialize=!!p.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = r.getAttribute("href") === "/a", t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat=!!r.style.cssFloat, t.checkOn=!!s.value, t.optSelected = f.selected, t.enctype=!!o.createElement("form").enctype, t.html5Clone = o.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", t.inlineBlockNeedsLayout=!1, t.shrinkWrapBlocks=!1, t.pixelPosition=!1, t.deleteExpando=!0, t.noCloneEvent=!0, t.reliableMarginRight=!0, t.boxSizingReliable=!0, s.checked=!0, t.noCloneChecked = s.cloneNode(!0).checked, u.disabled=!0, t.optDisabled=!f.disabled;
            try {
                delete p.test
            } catch (d) {
                t.deleteExpando=!1
            }
            s = o.createElement("input"), s.setAttribute("value", ""), t.input = s.getAttribute("value") === "", s.value = "t", s.setAttribute("type", "radio"), t.radioValue = s.value === "t", s.setAttribute("checked", "t"), s.setAttribute("name", "t"), a = o.createDocumentFragment(), a.appendChild(s), t.appendChecked = s.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
                t.noCloneEvent=!1
            }), p.cloneNode(!0).click());
            for (h in{
                submit: !0,
                change: !0,
                focusin: !0
            })
                p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando===!1;
            p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = p.style.backgroundClip === "content-box";
            for (h in w(t))
                break;
            return t.ownLast = h !== "0", w(function() {
                var n, r, s, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = o.getElementsByTagName("body")[0];
                if (!a)
                    return;
                n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = p.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", w.swap(a, a.style.zoom != null ? {
                    zoom: 1
                } : {}, function() {
                    t.boxSizing = p.offsetWidth === 4
                }), e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(p, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(p, null) || {
                    width: "4px"
                }).width === "4px", r = p.appendChild(o.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight=!parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = p.offsetWidth !== 3, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = s = r = null
            }), n = u = a = f = r = s = null, t
        }({});
        var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, I = /([A-Z])/g;
        w.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando], !!e&&!z(e)
            },
            data: function(e, t, n) {
                return q(e, t, n)
            },
            removeData: function(e, t) {
                return R(e, t)
            },
            _data: function(e, t, n) {
                return q(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return R(e, t, !0)
            },
            acceptData: function(e) {
                if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9)
                    return !1;
                var t = e.nodeName && w.noData[e.nodeName.toLowerCase()];
                return !t || t!==!0 && e.getAttribute("classid") === t
            }
        }), w.fn.extend({
            data: function(e, n) {
                var r, i, s = null, o = 0, u = this[0];
                if (e === t) {
                    if (this.length) {
                        s = w.data(u);
                        if (u.nodeType === 1&&!w._data(u, "parsedAttrs")) {
                            r = u.attributes;
                            for (; o < r.length; o++)
                                i = r[o].name, i.indexOf("data-") === 0 && (i = w.camelCase(i.slice(5)), U(u, i, s[i]));
                            w._data(u, "parsedAttrs", !0)
                        }
                    }
                    return s
                }
                return typeof e == "object" ? this.each(function() {
                    w.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    w.data(this, e, n)
                }) : u ? U(u, e, w.data(u, e)) : null
            },
            removeData: function(e) {
                return this.each(function() {
                    w.removeData(this, e)
                })
            }
        }), w.extend({
            queue: function(e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue", r = w._data(e, t), n && (!r || w.isArray(n) ? r = w._data(e, t, w.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = w.queue(e, t), r = n.length, i = n.shift(), s = w._queueHooks(e, t), o = function() {
                    w.dequeue(e, t)
                };
                i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return w._data(e, n) || w._data(e, n, {
                    empty: w.Callbacks("once memory").add(function() {
                        w._removeData(e, t + "queue"), w._removeData(e, n)
                    })
                })
            }
        }), w.fn.extend({
            queue: function(e, n) {
                var r = 2;
                return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? w.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = w.queue(this, e, n);
                    w._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && w.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    w.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = w.fx ? w.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var r, i = 1, s = w.Deferred(), o = this, u = this.length, a = function() {
                    --i || s.resolveWith(o, [o])
                };
                typeof e != "string" && (n = e, e = t), e = e || "fx";
                while (u--)
                    r = w._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
                return a(), s.promise(n)
            }
        });
        var W, X, V = /[\t\r\n\f]/g, $ = /\r/g, J = /^(?:input|select|textarea|button|object)$/i, K = /^(?:a|area)$/i, Q = /^(?:checked|selected)$/i, G = w.support.getSetAttribute, Y = w.support.input;
        w.fn.extend({
            attr: function(e, t) {
                return w.access(this, w.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    w.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return w.access(this, w.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = w.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function(e) {
                var t, n, r, i, s, o = 0, u = this.length, a = typeof e == "string" && e;
                if (w.isFunction(e))
                    return this.each(function(t) {
                        w(this).addClass(e.call(this, t, this.className))
                    });
                if (a) {
                    t = (e || "").match(S) || [];
                    for (; o < u; o++) {
                        n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(V, " ") : " ");
                        if (r) {
                            s = 0;
                            while (i = t[s++])
                                r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            n.className = w.trim(r)
                        }
                    }
                }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, s, o = 0, u = this.length, a = arguments.length === 0 || typeof e == "string" && e;
                if (w.isFunction(e))
                    return this.each(function(t) {
                        w(this).removeClass(e.call(this, t, this.className))
                    });
                if (a) {
                    t = (e || "").match(S) || [];
                    for (; o < u; o++) {
                        n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(V, " ") : "");
                        if (r) {
                            s = 0;
                            while (i = t[s++])
                                while (r.indexOf(" " + i + " ") >= 0)
                                    r = r.replace(" " + i + " ", " ");
                            n.className = e ? w.trim(r) : ""
                        }
                    }
                }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e, r = typeof t == "boolean";
                return w.isFunction(e) ? this.each(function(n) {
                    w(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if (n === "string") {
                        var s, o = 0, u = w(this), a = t, f = e.match(S) || [];
                        while (s = f[o++])
                            a = r ? a : !u.hasClass(s), u[a ? "addClass": "removeClass"](s)
                    } else if (n === i || n === "boolean")
                        this.className && w._data(this, "__className__", this.className), this.className = this.className || e===!1 ? "" : w._data(this, "__className__") || ""
                })
            },
            hasClass: function(e) {
                var t = " " + e + " ", n = 0, r = this.length;
                for (; n < r; n++)
                    if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(V, " ").indexOf(t) >= 0)
                        return !0;
                return !1
            },
            val: function(e) {
                var n, r, i, s = this[0];
                if (!arguments.length) {
                    if (s)
                        return r = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()], r && "get"in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, typeof n == "string" ? n.replace($, "") : n == null ? "" : n);
                    return 
                }
                return i = w.isFunction(e), this.each(function(n) {
                    var s;
                    if (this.nodeType !== 1)
                        return;
                    i ? s = e.call(this, n, w(this).val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : w.isArray(s) && (s = w.map(s, function(e) {
                        return e == null ? "" : e + ""
                    })), r = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()];
                    if (!r ||!("set"in r) || r.set(this, s, "value") === t)
                        this.value = s
                })
            }
        }), w.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = w.find.attr(e, "value");
                        return t != null ? t : e.text
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0, o = s ? null: [], u = s ? i + 1: r.length, a = i < 0 ? u: s ? i: 0;
                        for (; a < u; a++) {
                            n = r[a];
                            if ((n.selected || a === i) && (w.support.optDisabled?!n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled ||!w.nodeName(n.parentNode, "optgroup"))
                                ) {
                                t = w(n).val();
                                if (s)
                                    return t;
                                o.push(t)
                            }
                        }
                        return o
                    },
                    set: function(e, t) {
                        var n, r, i = e.options, s = w.makeArray(t), o = i.length;
                        while (o--) {
                            r = i[o];
                            if (r.selected = w.inArray(w(r).val(), s) >= 0)
                                n=!0
                        }
                        return n || (e.selectedIndex =- 1), s
                    }
                }
            },
            attr: function(e, n, r) {
                var s, o, u = e.nodeType;
                if (!e || u === 3 || u === 8 || u === 2)
                    return;
                if (typeof e.getAttribute === i)
                    return w.prop(e, n, r);
                if (u !== 1 ||!w.isXMLDoc(e))
                    n = n.toLowerCase(), s = w.attrHooks[n] || (w.expr.match.bool.test(n) ? X : W);
                if (r === t)
                    return s && "get"in s && (o = s.get(e, n)) !== null ? o : (o = w.find.attr(e, n), o == null ? t : o);
                if (r !== null)
                    return s && "set"in s && (o = s.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r);
                w.removeAttr(e, n)
            },
            removeAttr: function(e, t) {
                var n, r, i = 0, s = t && t.match(S);
                if (s && e.nodeType === 1)
                    while (n = s[i++])
                        r = w.propFix[n] || n, w.expr.match.bool.test(n) ? Y && G ||!Q.test(n) ? e[r]=!1 : e[w.camelCase("default-" + n)] = e[r]=!1 : w.attr(e, n, ""), e.removeAttribute(G ? n : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!w.support.radioValue && t === "radio" && w.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, n, r) {
                var i, s, o, u = e.nodeType;
                if (!e || u === 3 || u === 8 || u === 2)
                    return;
                return o = u !== 1 ||!w.isXMLDoc(e), o && (n = w.propFix[n] || n, s = w.propHooks[n]), r !== t ? s && "set"in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get"in s && (i = s.get(e, n)) !== null ? i : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = w.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : J.test(e.nodeName) || K.test(e.nodeName) && e.href ? 0 : - 1
                    }
                }
            }
        }), X = {
            set: function(e, t, n) {
                return t===!1 ? w.removeAttr(e, n) : Y && G ||!Q.test(n) ? e.setAttribute(!G && w.propFix[n] || n, n) : e[w.camelCase("default-" + n)] = e[n]=!0, n
            }
        }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, n) {
            var r = w.expr.attrHandle[n] || w.find.attr;
            w.expr.attrHandle[n] = Y && G ||!Q.test(n) ? function(e, n, i) {
                var s = w.expr.attrHandle[n], o = i ? t: (w.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase(): null;
                return w.expr.attrHandle[n] = s, o
            } : function(e, n, r) {
                return r ? t : e[w.camelCase("default-" + n)] ? n.toLowerCase() : null
            }
        });
        if (!Y ||!G)
            w.attrHooks.value = {
                set: function(e, t, n) {
                    if (!w.nodeName(e, "input"))
                        return W && W.set(e, t, n);
                        e.defaultValue = t
                    }
                };
        G || (W = {
            set: function(e, n, r) {
                var i = e.getAttributeNode(r);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", r === "value" || n === e.getAttribute(r) ? n : t
            }
        }, w.expr.attrHandle.id = w.expr.attrHandle.name = w.expr.attrHandle.coords = function(e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.value !== "" ? i.value : null
        }, w.valHooks.button = {
            get: function(e, n) {
                var r = e.getAttributeNode(n);
                return r && r.specified ? r.value : t
            },
            set: W.set
        }, w.attrHooks.contenteditable = {
            set: function(e, t, n) {
                W.set(e, t === ""?!1 : t, n)
            }
        }, w.each(["width", "height"], function(e, t) {
            w.attrHooks[t] = {
                set: function(e, n) {
                    if (n === "")
                        return e.setAttribute(t, "auto"), n
                }
            }
        })), w.support.hrefNormalized || w.each(["href", "src"], function(e, t) {
            w.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), w.support.style || (w.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }), w.support.optSelected || (w.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            w.propFix[this.toLowerCase()] = this
        }), w.support.enctype || (w.propFix.enctype = "encoding"), w.each(["radio", "checkbox"], function() {
            w.valHooks[this] = {
                set: function(e, t) {
                    if (w.isArray(t))
                        return e.checked = w.inArray(w(e).val(), t) >= 0
                }
            }, w.support.checkOn || (w.valHooks[this].get = function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            })
        });
        var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;
        w.event = {
            global: {},
            add: function(e, n, r, s, o) {
                var u, a, f, l, c, h, p, d, v, m, g, y = w._data(e);
                if (!y)
                    return;
                r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = w.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function(e) {
                    return typeof w === i||!!e && w.event.triggered === e.type ? t : w.event.dispatch.apply(h.elem, arguments)
                }, h.elem = e), n = (n || "").match(S) || [""], f = n.length;
                while (f--) {
                    u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort();
                    if (!v)
                        continue;
                    c = w.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = w.event.special[v] || {}, p = w.extend({
                        type: v,
                        origType: g,
                        data: s,
                        handler: r,
                        guid: r.guid,
                        selector: o,
                        needsContext: o && w.expr.match.needsContext.test(o),
                        namespace: m.join(".")
                    }, l);
                    if (!(d = a[v])) {
                        d = a[v] = [], d.delegateCount = 0;
                        if (!c.setup || c.setup.call(e, s, m, h)===!1)
                            e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h)
                        }
                    c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), w.event.global[v]=!0
                }
                e = null
            },
            remove: function(e, t, n, r, i) {
                var s, o, u, a, f, l, c, h, p, d, v, m = w.hasData(e) && w._data(e);
                if (!m ||!(l = m.events))
                    return;
                t = (t || "").match(S) || [""], f = t.length;
                while (f--) {
                    u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                    if (!p) {
                        for (p in l)
                            w.event.remove(e, p + t[f], n, r, !0);
                        continue
                    }
                    c = w.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                    while (s--)
                        o = h[s], (i || v === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                    a&&!h.length && ((!c.teardown || c.teardown.call(e, d, m.handle)===!1) && w.removeEvent(e, p, m.handle), delete l[p])
                }
                w.isEmptyObject(l) && (delete m.handle, w._removeData(e, "events"))
            },
            trigger: function(n, r, i, s) {
                var u, a, f, l, c, h, p, d = [i || o], v = y.call(n, "type") ? n.type: n, m = y.call(n, "namespace") ? n.namespace.split("."): [];
                f = h = i = i || o;
                if (i.nodeType === 3 || i.nodeType === 8)
                    return;
                if (nt.test(v + w.event.triggered))
                    return;
                v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = v.indexOf(":") < 0 && "on" + v, n = n[w.expando] ? n : new w.Event(v, typeof n == "object" && n), n.isTrigger = s ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = r == null ? [n] : w.makeArray(r, [n]), c = w.event.special[v] || {};
                if (!s && c.trigger && c.trigger.apply(i, r)===!1)
                    return;
                if (!s&&!c.noBubble&&!w.isWindow(i)) {
                    l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode);
                    for (; f; f = f.parentNode)
                        d.push(f), h = f;
                    h === (i.ownerDocument || o) && d.push(h.defaultView || h.parentWindow || e)
                }
                p = 0;
                while ((f = d[p++])&&!n.isPropagationStopped())
                    n.type = p > 1 ? l : c.bindType || v, u = (w._data(f, "events") || {})[n.type] && w._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && w.acceptData(f) && u.apply && u.apply(f, r)===!1 && n.preventDefault();
                n.type = v;
                if (!s&&!n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), r)===!1) && w.acceptData(i) && a && i[v]&&!w.isWindow(i)) {
                    h = i[a], h && (i[a] = null), w.event.triggered = v;
                    try {
                        i[v]()
                    } catch (g) {}
                    w.event.triggered = t, h && (i[a] = h)
                }
                return n.result
            },
            dispatch: function(e) {
                e = w.event.fix(e);
                var n, r, i, s, o, u = [], a = v.call(arguments), f = (w._data(this, "events") || {})[e.type] || [], l = w.event.special[e.type] || {};
                a[0] = e, e.delegateTarget = this;
                if (l.preDispatch && l.preDispatch.call(this, e)===!1)
                    return;
                u = w.event.handlers.call(this, e, f), n = 0;
                while ((s = u[n++])&&!e.isPropagationStopped()) {
                    e.currentTarget = s.elem, o = 0;
                    while ((i = s.handlers[o++])&&!e.isImmediatePropagationStopped())
                        if (!e.namespace_re || e.namespace_re.test(i.namespace))
                            e.handleObj = i, e.data = i.data, r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r)===!1 && (e.preventDefault(), e.stopPropagation())
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            },
            handlers: function(e, n) {
                var r, i, s, o, u = [], a = n.delegateCount, f = e.target;
                if (a && f.nodeType && (!e.button || e.type !== "click"))
                    for (; f != this; f = f.parentNode || this)
                        if (f.nodeType === 1 && (f.disabled!==!0 || e.type !== "click")) {
                            s = [];
                            for (o = 0; o < a; o++)
                                i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? w(r, this).index(f) >= 0 : w.find(r, this, null, [f]).length), s[r] && s.push(i);
                                s.length && u.push({
                                    elem: f,
                                    handlers: s
                                })
                        }
                return a < n.length && u.push({
                    elem: this,
                    handlers: n.slice(a)
                }), u
            },
            fix: function(e) {
                if (e[w.expando])
                    return e;
                var t, n, r, i = e.type, s = e, u = this.fixHooks[i];
                u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new w.Event(s), t = r.length;
                while (t--)
                    n = r[t], e[n] = s[n];
                return e.target || (e.target = s.srcElement || o), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey=!!e.metaKey, u.filter ? u.filter(e, s) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, s, u = n.button, a = n.fromElement;
                    return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || o, s = i.documentElement, r = i.body, e.pageX = n.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== ot() && this.focus)
                            try {
                                return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === ot() && this.blur)
                            return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (w.nodeName(this, "input") && this.type === "checkbox" && this.click)
                            return this.click(), !1
                    },
                    _default: function(e) {
                        return w.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = w.extend(new w.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? w.event.trigger(i, null, t) : w.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, w.removeEvent = o.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
        }, w.Event = function(e, t) {
            if (!(this instanceof w.Event))
                return new w.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue===!1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || w.now(), this[w.expando]=!0
        }, w.Event.prototype = {
            isDefaultPrevented: st,
            isPropagationStopped: st,
            isImmediatePropagationStopped: st,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = it;
                if (!e)
                    return;
                e.preventDefault ? e.preventDefault() : e.returnValue=!1
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = it;
                if (!e)
                    return;
                e.stopPropagation && e.stopPropagation(), e.cancelBubble=!0
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = it, this.stopPropagation()
            }
        }, w.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            w.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this, i = e.relatedTarget, s = e.handleObj;
                    if (!i || i !== r&&!w.contains(r, i))
                        e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                    return n
                }
            }
        }), w.support.submitBubbles || (w.event.special.submit = {
            setup: function() {
                if (w.nodeName(this, "form"))
                    return !1;
                w.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target, r = w.nodeName(n, "input") || w.nodeName(n, "button") ? n.form: t;
                    r&&!w._data(r, "submitBubbles") && (w.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble=!0
                    }), w._data(r, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode&&!e.isTrigger && w.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                if (w.nodeName(this, "form"))
                    return !1;
                w.event.remove(this, "._submit")
            }
        }), w.support.changeBubbles || (w.event.special.change = {
            setup: function() {
                if (Z.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio")
                        w.event.add(this, "propertychange._change", function(e) {
                            e.originalEvent.propertyName === "checked" && (this._just_changed=!0)
                        }), w.event.add(this, "click._change", function(e) {
                            this._just_changed&&!e.isTrigger && (this._just_changed=!1), w.event.simulate("change", this, e, !0)
                        });
                    return !1
                }
                w.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Z.test(t.nodeName)&&!w._data(t, "changeBubbles") && (w.event.add(t, "change._change", function(e) {
                        this.parentNode&&!e.isSimulated&&!e.isTrigger && w.event.simulate("change", this.parentNode, e, !0)
                    }), w._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox")
                    return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return w.event.remove(this, "._change"), !Z.test(this.nodeName)
            }
        }), w.support.focusinBubbles || w.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0, r = function(e) {
                w.event.simulate(t, e.target, w.event.fix(e), !0)
            };
            w.event.special[t] = {
                setup: function() {
                    n++===0 && o.addEventListener(e, r, !0)
                },
                teardown: function() {
                    --n === 0 && o.removeEventListener(e, r, !0)
                }
            }
        }), w.fn.extend({
            on: function(e, n, r, i, s) {
                var o, u;
                if (typeof e == "object") {
                    typeof n != "string" && (r = r || n, n = t);
                    for (o in e)
                        this.on(o, n, r, e[o], s);
                    return this
                }
                r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
                if (i===!1)
                    i = st;
                else if (!i)
                    return this;
                return s === 1 && (u = i, i = function(e) {
                    return w().off(e), u.apply(this, arguments)
                }, i.guid = u.guid || (u.guid = w.guid++)), this.each(function() {
                    w.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, s;
                if (e && e.preventDefault && e.handleObj)
                    return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if (typeof e == "object") {
                    for (s in e)
                        this.off(s, n, e[s]);
                    return this
                }
                if (n===!1 || typeof n == "function")
                    r = n, n = t;
                return r===!1 && (r = st), this.each(function() {
                    w.event.remove(this, e, r, n)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    w.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return w.event.trigger(e, t, n, !0)
            }
        });
        var ut = /^.[^:#\[\.,]*$/, at = /^(?:parents|prev(?:Until|All))/, ft = w.expr.match.needsContext, lt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        w.fn.extend({
            find: function(e) {
                var t, n = [], r = this, i = r.length;
                if (typeof e != "string")
                    return this.pushStack(w(e).filter(function() {
                        for (t = 0; t < i; t++)
                            if (w.contains(r[t], this))
                                return !0
                            }));
                for (t = 0; t < i; t++)
                    w.find(e, r[t], n);
                return n = this.pushStack(i > 1 ? w.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            has: function(e) {
                var t, n = w(e, this), r = n.length;
                return this.filter(function() {
                    for (t = 0; t < r; t++)
                        if (w.contains(this, n[t]))
                            return !0
                })
            },
            not: function(e) {
                return this.pushStack(ht(this, e || [], !0))
            },
            filter: function(e) {
                return this.pushStack(ht(this, e || [], !1))
            },
            is: function(e) {
                return !!ht(this, typeof e == "string" && ft.test(e) ? w(e) : e || [], !1).length
            },
            closest: function(e, t) {
                var n, r = 0, i = this.length, s = [], o = ft.test(e) || typeof e != "string" ? w(e, t || this.context): 0;
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n)>-1 : n.nodeType === 1 && w.find.matchesSelector(n, e))) {
                            n = s.push(n);
                            break
                        }
                return this.pushStack(s.length > 1 ? w.unique(s) : s)
            },
            index: function(e) {
                return e ? typeof e == "string" ? w.inArray(this[0], w(e)) : w.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
            },
            add: function(e, t) {
                var n = typeof e == "string" ? w(e, t): w.makeArray(e && e.nodeType ? [e] : e), r = w.merge(this.get(), n);
                return this.pushStack(w.unique(r))
            },
            addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        }), w.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function(e) {
                return w.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return w.dir(e, "parentNode", n)
            },
            next: function(e) {
                return ct(e, "nextSibling")
            },
            prev: function(e) {
                return ct(e, "previousSibling")
            },
            nextAll: function(e) {
                return w.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return w.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return w.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return w.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return w.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return w.sibling(e.firstChild)
            },
            contents: function(e) {
                return w.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : w.merge([], e.childNodes)
            }
        }, function(e, t) {
            w.fn[e] = function(n, r) {
                var i = w.map(this, t, n);
                return e.slice( - 5) !== "Until" && (r = n), r && typeof r == "string" && (i = w.filter(r, i)), this.length > 1 && (lt[e] || (i = w.unique(i)), at.test(e) && (i = i.reverse())), this.pushStack(i)
            }
        }), w.extend({
            filter: function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
                    return e.nodeType === 1
                }))
            },
            dir: function(e, n, r) {
                var i = [], s = e[n];
                while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 ||!w(s).is(r)))
                    s.nodeType === 1 && i.push(s), s = s[n];
                return i
            },
            sibling: function(e, t) {
                var n = [];
                for (; e; e = e.nextSibling)
                    e.nodeType === 1 && e !== t && n.push(e);
                return n
            }
        });
        var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", vt = / jQuery\d+="(?:null|\d+)"/g, mt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"), gt = /^\s+/, yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, wt = /<tbody/i, Et = /<|&#?\w+;/, St = /<(?:script|style|link)/i, xt = /^(?:checkbox|radio)$/i, Tt = /checked\s*(?:[^=]|=\s*.checked.)/i, Nt = /^$|\/(?:java|ecma)script/i, Ct = /^true\/(.*)/, kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: w.support.htmlSerialize ? [0, "", ""]: [1, "X<div>", "</div>"]
        }, At = pt(o), Ot = At.appendChild(o.createElement("div"));
        Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, w.fn.extend({
            text: function(e) {
                return w.access(this, function(e) {
                    return e === t ? w.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Mt(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Mt(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                var n, r = e ? w.filter(e, this): this, i = 0;
                for (; (n = r[i]) != null; i++)
                    !t && n.nodeType === 1 && w.cleanData(jt(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                var e, t = 0;
                for (; (e = this[t]) != null; t++) {
                    e.nodeType === 1 && w.cleanData(jt(e, !1));
                    while (e.firstChild)
                        e.removeChild(e.firstChild);
                    e.options && w.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = e == null?!1 : e, t = t == null ? e : t, this.map(function() {
                    return w.clone(this, e, t)
                })
            },
            html: function(e) {
                return w.access(this, function(e) {
                    var n = this[0] || {}, r = 0, i = this.length;
                    if (e === t)
                        return n.nodeType === 1 ? n.innerHTML.replace(vt, "") : t;
                    if (typeof e == "string"&&!St.test(e) && (w.support.htmlSerialize ||!mt.test(e)) && (w.support.leadingWhitespace ||!gt.test(e))&&!Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(yt, "<$1></$2>");
                        try {
                            for (; r < i; r++)
                                n = this[r] || {}, n.nodeType === 1 && (w.cleanData(jt(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (s) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = w.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }), t = 0;
                return this.domManip(arguments, function(n) {
                    var r = e[t++], i = e[t++];
                    i && (r && r.parentNode !== i && (r = this.nextSibling), w(this).remove(), i.insertBefore(n, r))
                }, !0), t ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t, n) {
                e = p.apply([], e);
                var r, i, s, o, u, a, f = 0, l = this.length, c = this, h = l - 1, d = e[0], v = w.isFunction(d);
                if (v ||!(l <= 1 || typeof d != "string" || w.support.checkClone ||!Tt.test(d)))
                    return this.each(function(r) {
                        var i = c.eq(r);
                        v && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
                    });
                if (l) {
                    a = w.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = a.firstChild, a.childNodes.length === 1 && (a = r);
                    if (r) {
                        o = w.map(jt(a, "script"), _t), s = o.length;
                        for (; f < l; f++)
                            i = a, f !== h && (i = w.clone(i, !0, !0), s && w.merge(o, jt(i, "script"))), t.call(this[f], i, f);
                        if (s) {
                            u = o[o.length - 1].ownerDocument, w.map(o, Dt);
                            for (f = 0; f < s; f++)
                                i = o[f], Nt.test(i.type || "")&&!w._data(i, "globalEval") && w.contains(u, i) && (i.src ? w._evalUrl(i.src) : w.globalEval((i.text || i.textContent || i.innerHTML || "").replace(kt, "")))
                            }
                        a = r = null
                    }
                }
                return this
            }
        }), w.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            w.fn[e] = function(e) {
                var n, r = 0, i = [], s = w(e), o = s.length - 1;
                for (; r <= o; r++)
                    n = r === o ? this : this.clone(!0), w(s[r])[t](n), d.apply(i, n.get());
                return this.pushStack(i)
            }
        }), w.extend({
            clone: function(e, t, n) {
                var r, i, s, o, u, a = w.contains(e.ownerDocument, e);
                w.support.html5Clone || w.isXMLDoc(e) ||!mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild));
                if ((!w.support.noCloneEvent ||!w.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11)&&!w.isXMLDoc(e)) {
                    r = jt(s), u = jt(e);
                    for (o = 0; (i = u[o]) != null; ++o)
                        r[o] && Bt(i, r[o])
                }
                if (t)
                    if (n) {
                        u = u || jt(e), r = r || jt(s);
                        for (o = 0; (i = u[o]) != null; o++)
                            Ht(i, r[o])
                    } else 
                        Ht(e, s);
                return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
            },
            buildFragment: function(e, t, n, r) {
                var i, s, o, u, a, f, l, c = e.length, h = pt(t), p = [], d = 0;
                for (; d < c; d++) {
                    s = e[d];
                    if (s || s === 0)
                        if (w.type(s) === "object")
                            w.merge(p, s.nodeType ? [s] : s);
                        else if (!Et.test(s))
                            p.push(t.createTextNode(s));
                        else {
                            u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                            while (i--)
                                u = u.lastChild;
                                !w.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0]));
                                if (!w.support.tbody) {
                                    s = a === "table"&&!wt.test(s) ? u.firstChild : l[1] === "<table>"&&!wt.test(s) ? u : 0, i = s && s.childNodes.length;
                                    while (i--)
                                        w.nodeName(f = s.childNodes[i], "tbody")&&!f.childNodes.length && s.removeChild(f)
                                    }
                                    w.merge(p, u.childNodes), u.textContent = "";
                                    while (u.firstChild)
                                        u.removeChild(u.firstChild);
                                        u = h.lastChild
                            }
                    }
                u && h.removeChild(u), w.support.appendChecked || w.grep(jt(p, "input"), Ft), d = 0;
                while (s = p[d++]) {
                    if (r && w.inArray(s, r)!==-1)
                        continue;
                    o = w.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u);
                    if (n) {
                        i = 0;
                        while (s = u[i++])
                            Nt.test(s.type || "") && n.push(s)
                        }
                }
                return u = null, h
            },
            cleanData: function(e, t) {
                var n, r, s, o, u = 0, a = w.expando, f = w.cache, l = w.support.deleteExpando, h = w.event.special;
                for (; (n = e[u]) != null; u++)
                    if (t || w.acceptData(n)) {
                        s = n[a], o = s && f[s];
                        if (o) {
                            if (o.events)
                                for (r in o.events)
                                    h[r] ? w.event.remove(n, r) : w.removeEvent(n, r, o.handle);
                                    f[s] && (delete f[s], l ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, c.push(s))
                                }
                    }
                },
            _evalUrl: function(e) {
                return w.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), w.fn.extend({
            wrapAll: function(e) {
                if (w.isFunction(e))
                    return this.each(function(t) {
                        w(this).wrapAll(e.call(this, t))
                    });
                if (this[0]) {
                    var t = w(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        var e = this;
                        while (e.firstChild && e.firstChild.nodeType === 1)
                            e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return w.isFunction(e) ? this.each(function(t) {
                    w(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = w(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = w.isFunction(e);
                return this.each(function(n) {
                    w(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    w.nodeName(this, "body") || w(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var It, qt, Rt, Ut = /alpha\([^)]*\)/i, zt = /opacity\s*=\s*([^)]*)/, Wt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Vt = /^margin/, $t = new RegExp("^(" + E + ")(.*)$", "i"), Jt = new RegExp("^(" + E + ")(?!px)[a-z%]+$", "i"), Kt = new RegExp("^([+-])=(" + E + ")", "i"), Qt = {
            BODY: "block"
        }, Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Yt = {
            letterSpacing: 0,
            fontWeight: 400
        }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
        w.fn.extend({
            css: function(e, n) {
                return w.access(this, function(e, n, r) {
                    var i, s, o = {}, u = 0;
                    if (w.isArray(n)) {
                        s = qt(e), i = n.length;
                        for (; u < i; u++)
                            o[n[u]] = w.css(e, n[u], !1, s);
                        return o
                    }
                    return r !== t ? w.style(e, n, r) : w.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return rn(this, !0)
            },
            hide: function() {
                return rn(this)
            },
            toggle: function(e) {
                var t = typeof e == "boolean";
                return this.each(function() {
                    (t ? e : nn(this)) ? w(this).show() : w(this).hide()
                })
            }
        }), w.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Rt(e, "opacity");
                            return n === "" ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": w.support.cssFloat ? "cssFloat": "styleFloat"
            },
            style: function(e, n, r, i) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 ||!e.style)
                    return;
                var s, o, u, a = w.camelCase(n), f = e.style;
                n = w.cssProps[a] || (w.cssProps[a] = tn(f, a)), u = w.cssHooks[n] || w.cssHooks[a];
                if (r === t)
                    return u && "get"in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
                o = typeof r, o === "string" && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(w.css(e, n)), o = "number");
                if (r == null || o === "number" && isNaN(r))
                    return;
                o === "number"&&!w.cssNumber[a] && (r += "px"), !w.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
                if (!u ||!("set"in u) || (r = u.set(e, r, i)) !== t)
                    try {
                        f[n] = r
                } catch (l) {}
            },
            css: function(e, n, r, i) {
                var s, o, u, a = w.camelCase(n);
                return n = w.cssProps[a] || (w.cssProps[a] = tn(e.style, a)), u = w.cssHooks[n] || w.cssHooks[a], u && "get"in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), o === "normal" && n in Yt && (o = Yt[n]), r === "" || r ? (s = parseFloat(o), r===!0 || w.isNumeric(s) ? s || 0 : o) : o
            }
        }), e.getComputedStyle ? (qt = function(t) {
            return e.getComputedStyle(t, null)
        }, Rt = function(e, n, r) {
            var i, s, o, u = r || qt(e), a = u ? u.getPropertyValue(n) || u[n]: t, f = e.style;
            return u && (a === ""&&!w.contains(e.ownerDocument, e) && (a = w.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
        }) : o.documentElement.currentStyle && (qt = function(e) {
            return e.currentStyle
        }, Rt = function(e, n, r) {
            var i, s, o, u = r || qt(e), a = u ? u[n]: t, f = e.style;
            return a == null && f && f[n] && (a = f[n]), Jt.test(a)&&!Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
        }), w.each(["height", "width"], function(e, t) {
            w.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n)
                        return e.offsetWidth === 0 && Xt.test(w.css(e, "display")) ? w.swap(e, Gt, function() {
                            return un(e, t, r)
                        }) : un(e, t, r)
                },
                set: function(e, n, r) {
                    var i = r && qt(e);
                    return sn(e, n, r ? on(e, t, r, w.support.boxSizing && w.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
                }
            }
        }), w.support.opacity || (w.cssHooks.opacity = {
            get: function(e, t) {
                return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style, r = e.currentStyle, i = w.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")": "", s = r && r.filter || n.filter || "";
                n.zoom = 1;
                if ((t >= 1 || t === "") && w.trim(s.replace(Ut, "")) === "" && n.removeAttribute) {
                    n.removeAttribute("filter");
                    if (t === "" || r&&!r.filter)
                        return 
                }
                n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i
            }
        }), w(function() {
            w.support.reliableMarginRight || (w.cssHooks.marginRight = {
                get: function(e, t) {
                    if (t)
                        return w.swap(e, {
                            display: "inline-block"
                        }, Rt, [e, "marginRight"])
                }
            }), !w.support.pixelPosition && w.fn.position && w.each(["top", "left"], function(e, t) {
                w.cssHooks[t] = {
                    get: function(e, n) {
                        if (n)
                            return n = Rt(e, t), Jt.test(n) ? w(e).position()[t] + "px" : n
                    }
                }
            })
        }), w.expr && w.expr.filters && (w.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 ||!w.support.reliableHiddenOffsets && (e.style && e.style.display || w.css(e, "display")) === "none"
        }, w.expr.filters.visible = function(e) {
            return !w.expr.filters.hidden(e)
        }), w.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            w.cssHooks[e + t] = {
                expand: function(n) {
                    var r = 0, i = {}, s = typeof n == "string" ? n.split(" "): [n];
                    for (; r < 4; r++)
                        i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                    return i
                }
            }, Vt.test(e) || (w.cssHooks[e + t].set = sn)
        });
        var ln = /%20/g, cn = /\[\]$/, hn = /\r?\n/g, pn = /^(?:submit|button|image|reset|file)$/i, dn = /^(?:input|select|textarea|keygen)/i;
        w.fn.extend({
            serialize: function() {
                return w.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = w.prop(this, "elements");
                    return e ? w.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name&&!w(this).is(":disabled") && dn.test(this.nodeName)&&!pn.test(e) && (this.checked ||!xt.test(e))
                }).map(function(e, t) {
                    var n = w(this).val();
                    return n == null ? null : w.isArray(n) ? w.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(hn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(hn, "\r\n")
                    }
                }).get()
            }
        }), w.param = function(e, n) {
            var r, i = [], s = function(e, t) {
                t = w.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            n === t && (n = w.ajaxSettings && w.ajaxSettings.traditional);
            if (w.isArray(e) || e.jquery&&!w.isPlainObject(e))
                w.each(e, function() {
                    s(this.name, this.value)
                });
            else 
                for (r in e)
                    vn(r, e[r], n, s);
            return i.join("&").replace(ln, "+")
        }, w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            w.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), w.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var mn, gn, yn = w.now(), bn = /\?/, wn = /#.*$/, En = /([?&])_=[^&]*/, Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Tn = /^(?:GET|HEAD)$/, Nn = /^\/\//, Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, kn = w.fn.load, Ln = {}, An = {}, On = "*/".concat("*");
        try {
            gn = s.href
        } catch (Mn) {
            gn = o.createElement("a"), gn.href = "", gn = gn.href
        }
        mn = Cn.exec(gn.toLowerCase()) || [], w.fn.load = function(e, n, r) {
            if (typeof e != "string" && kn)
                return kn.apply(this, arguments);
            var i, s, o, u = this, a = e.indexOf(" ");
            return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), w.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (o = "POST"), u.length > 0 && w.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: n
            }).done(function(e) {
                s = arguments, u.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
            }).complete(r && function(e, t) {
                u.each(r, s || [e.responseText, t, e])
            }), this
        }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            w.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), w.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: gn,
                type: "GET",
                isLocal: xn.test(mn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": On,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": w.parseJSON,
                    "text xml": w.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Pn(Pn(e, w.ajaxSettings), t) : Pn(w.ajaxSettings, e)
            },
            ajaxPrefilter: _n(Ln),
            ajaxTransport: _n(An),
            ajax: function(e, n) {
                function N(e, n, r, i) {
                    var l, g, y, E, S, T = n;
                    if (b === 2)
                        return;
                    b = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || e === 304, r && (E = Hn(c, x, r)), E = Bn(c, E, x, l);
                    if (l)
                        c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (w.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (w.etag[s] = S)), e === 204 || c.type === "HEAD" ? T = "nocontent" : e === 304 ? T = "notmodified" : (T = E.state, g = E.data, y = E.error, l=!y);
                    else {
                        y = T;
                        if (e ||!T)
                            T = "error", e < 0 && (e = 0)
                    }
                    x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g: y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --w.active || w.event.trigger("ajaxStop"))
                }
                typeof e == "object" && (n = e, e = t), n = n || {};
                var r, i, s, o, u, a, f, l, c = w.ajaxSetup({}, n), h = c.context || c, p = c.context && (h.nodeType || h.jquery) ? w(h): w.event, d = w.Deferred(), v = w.Callbacks("once memory"), m = c.statusCode || {}, g = {}, y = {}, b = 0, E = "canceled", x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (b === 2) {
                            if (!l) {
                                l = {};
                                while (t = Sn.exec(o))
                                    l[t[1].toLowerCase()] = t[2]
                            }
                            t = l[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return b === 2 ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (c.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e)
                                    m[t] = [m[t], e[t]];
                            else 
                                x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || E;
                        return f && f.abort(t), N(0, t), this
                    }
                };
                d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = w.trim(c.dataType || "*").toLowerCase().match(S) || [""], c.crossDomain == null && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain=!(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || (r[1] === "http:" ? "80" : "443")) === (mn[3] || (mn[1] === "http:" ? "80" : "443")))), c.data && c.processData && typeof c.data != "string" && (c.data = w.param(c.data, c.traditional)), Dn(Ln, c, n, x);
                if (b === 2)
                    return x;
                a = c.global, a && w.active++===0 && w.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent=!Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache===!1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (w.lastModified[s] && x.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && x.setRequestHeader("If-None-Match", w.etag[s])), (c.data && c.hasContent && c.contentType!==!1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
                for (i in c.headers)
                    x.setRequestHeader(i, c.headers[i]);
                if (!c.beforeSend || c.beforeSend.call(h, x, c)!==!1 && b !== 2) {
                    E = "abort";
                    for (i in{
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                        x[i](c[i]);
                    f = Dn(An, c, n, x);
                    if (!f)
                        N( - 1, "No Transport");
                    else {
                        x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                            x.abort("timeout")
                        }, c.timeout));
                        try {
                            b = 1, f.send(g, N)
                        } catch (T) {
                            if (!(b < 2))
                                throw T;
                            N( - 1, T)
                        }
                    }
                    return x
                }
                return x.abort()
            },
            getJSON: function(e, t, n) {
                return w.get(e, t, n, "json")
            },
            getScript: function(e, n) {
                return w.get(e, t, n, "script")
            }
        }), w.each(["get", "post"], function(e, n) {
            w[n] = function(e, r, i, s) {
                return w.isFunction(r) && (s = s || i, i = r, r = t), w.ajax({
                    url: e,
                    type: n,
                    dataType: s,
                    data: r,
                    success: i
                })
            }
        }), w.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return w.globalEval(e), e
                }
            }
        }), w.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache=!1), e.crossDomain && (e.type = "GET", e.global=!1)
        }), w.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, r = o.head || w("head")[0] || o.documentElement;
                return {
                    send: function(t, i) {
                        n = o.createElement("script"), n.async=!0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                            if (t ||!n.readyState || /loaded|complete/.test(n.readyState))
                                n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")
                        }, r.insertBefore(n, r.firstChild)
                    },
                    abort: function() {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
        var jn = [], Fn = /(=)\?(?=&|$)|\?\?/;
        w.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = jn.pop() || w.expando + "_" + yn++;
                return this[e]=!0, e
            }
        }), w.ajaxPrefilter("json jsonp", function(n, r, i) {
            var s, o, u, a = n.jsonp!==!1 && (Fn.test(n.url) ? "url" : typeof n.data == "string"&&!(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
            if (a || n.dataTypes[0] === "jsonp")
                return s = n.jsonpCallback = w.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp!==!1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
                    return u || w.error(s + " was not called"), u[0]
                }, n.dataTypes[0] = "json", o = e[s], e[s] = function() {
                    u = arguments
                }, i.always(function() {
                    e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && w.isFunction(o) && o(u[0]), u = o = t
                }), "script"
        });
        var In, qn, Rn = 0, Un = e.ActiveXObject && function() {
            var e;
            for (e in In)
                In[e](t, !0)
        };
        w.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && zn() || Wn()
        } : zn, qn = w.ajaxSettings.xhr(), w.support.cors=!!qn && "withCredentials"in qn, qn = w.support.ajax=!!qn, qn && w.ajaxTransport(function(n) {
            if (!n.crossDomain || w.support.cors) {
                var r;
                return {
                    send: function(i, s) {
                        var o, u, a = n.xhr();
                        n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                        if (n.xhrFields)
                            for (u in n.xhrFields)
                                a[u] = n.xhrFields[u];
                        n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain&&!i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (u in i)
                                a.setRequestHeader(u, i[u])
                        } catch (f) {}
                        a.send(n.hasContent && n.data || null), r = function(e, i) {
                            var u, f, l, c;
                            try {
                                if (r && (i || a.readyState === 4)) {
                                    r = t, o && (a.onreadystatechange = w.noop, Un && delete In[o]);
                                    if (i)
                                        a.readyState !== 4 && a.abort();
                                    else {
                                        c = {}, u = a.status, f = a.getAllResponseHeaders(), typeof a.responseText == "string" && (c.text = a.responseText);
                                        try {
                                            l = a.statusText
                                        } catch (h) {
                                            l = ""
                                        }
                                        !u && n.isLocal&&!n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                    }
                                }
                            } catch (p) {
                                i || s( - 1, p)
                            }
                            c && s(u, l, c, f)
                        }, n.async ? a.readyState === 4 ? setTimeout(r) : (o=++Rn, Un && (In || (In = {}, w(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(t, !0)
                    }
                }
            }
        });
        var Xn, Vn, $n = /^(?:toggle|show|hide)$/, Jn = new RegExp("^(?:([+-])=|)(" + E + ")([a-z%]*)$", "i"), Kn = /queueHooks$/, Qn = [nr], Gn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t), r = n.cur(), i = Jn.exec(t), s = i && i[3] || (w.cssNumber[e] ? "" : "px"), o = (w.cssNumber[e] || s !== "px"&&+r) && Jn.exec(w.css(n.elem, e)), u = 1, a = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], i = i || [], o =+ r || 1;
                    do 
                        u = u || ".5", o/=u, w.style(n.elem, e, o + s);
                    while (u !== (u = n.cur() / r) && u !== 1&&--a)
                    }
                return i && (o = n.start =+ o||+r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : + i[2]), n
            }
            ]
        };
        w.Animation = w.extend(er, {
            tweener: function(e, t) {
                w.isFunction(e) ? (t = e, e = ["*"]): e = e.split(" ");
                var n,
                r = 0,
                i = e.length;
                for (;
                r < i;
                r++)n = e[r],
                Gn[n] = Gn[n] || [],
                Gn[n].unshift(t)
            }, prefilter : function(e, t) {
                t ? Qn.unshift(e) : Qn.push(e)
            }
        }), w.Tween = rr, rr.prototype = {
            constructor: rr,
            init: function(e, t, n, r, i, s) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (w.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = rr.propHooks[this.prop];
                return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = rr.propHooks[this.prop];
                return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
            }
        }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return e.elem[e.prop] == null||!!e.elem.style && e.elem.style[e.prop] != null ? (t = w.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
                },
                set: function(e) {
                    w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (e.elem.style[w.cssProps[e.prop]] != null || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, w.each(["toggle", "show", "hide"], function(e, t) {
            var n = w.fn[t];
            w.fn[t] = function(e, r, i) {
                return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
            }
        }), w.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(nn).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = w.isEmptyObject(e), s = w.speed(t, n, r), o = function() {
                    var t = er(this, w.extend({}, e), s);
                    (i || w._data(this, "finish")) && t.stop(!0)
                };
                return o.finish = o, i || s.queue===!1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(e, n, r) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                };
                return typeof e != "string" && (r = n, n = e, e = t), n && e!==!1 && this.queue(e || "fx", []), this.each(function() {
                    var t=!0, n = e != null && e + "queueHooks", s = w.timers, o = w._data(this);
                    if (n)
                        o[n] && o[n].stop && i(o[n]);
                    else 
                        for (n in o)
                            o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                    for (n = s.length; n--;)
                        s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t=!1, s.splice(n, 1));
                    (t ||!r) && w.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e!==!1 && (e = e || "fx"), this.each(function() {
                    var t, n = w._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = w.timers, o = r ? r.length: 0;
                    n.finish=!0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
                    for (t = s.length; t--;)
                        s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < o; t++)
                        r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), w.each({
            slideDown: ir("show"),
            slideUp: ir("hide"),
            slideToggle: ir("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            w.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), w.speed = function(e, t, n) {
            var r = e && typeof e == "object" ? w.extend({}, e): {
                complete: n ||!n && t || w.isFunction(e) && e,
                duration: e,
                easing: n && t || t&&!w.isFunction(t) && t
            };
            r.duration = w.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default;
            if (r.queue == null || r.queue===!0)
                r.queue = "fx";
            return r.old = r.complete, r.complete = function() {
                w.isFunction(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
            }, r
        }, w.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, w.timers = [], w.fx = rr.prototype.init, w.fx.tick = function() {
            var e, n = w.timers, r = 0;
            Xn = w.now();
            for (; r < n.length; r++)
                e = n[r], !e() && n[r] === e && n.splice(r--, 1);
            n.length || w.fx.stop(), Xn = t
        }, w.fx.timer = function(e) {
            e() && w.timers.push(e) && w.fx.start()
        }, w.fx.interval = 13, w.fx.start = function() {
            Vn || (Vn = setInterval(w.fx.tick, w.fx.interval))
        }, w.fx.stop = function() {
            clearInterval(Vn), Vn = null
        }, w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, w.fx.step = {}, w.expr && w.expr.filters && (w.expr.filters.animated = function(e) {
            return w.grep(w.timers, function(t) {
                return e === t.elem
            }).length
        }), w.fn.offset = function(e) {
            if (arguments.length)
                return e === t ? this : this.each(function(t) {
                    w.offset.setOffset(this, e, t)
                });
            var n, r, s = {
                top: 0,
                left: 0
            }, o = this[0], u = o && o.ownerDocument;
            if (!u)
                return;
            return n = u.documentElement, w.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
                top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : s
        }, w.offset = {
            setOffset: function(e, t, n) {
                var r = w.css(e, "position");
                r === "static" && (e.style.position = "relative");
                var i = w(e), s = i.offset(), o = w.css(e, "top"), u = w.css(e, "left"), a = (r === "absolute" || r === "fixed") && w.inArray("auto", [o, u])>-1, f = {}, l = {}, c, h;
                a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), w.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using"in t ? t.using.call(e, f) : i.css(f)
            }
        }, w.fn.extend({
            position: function() {
                if (!this[0])
                    return;
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return w.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), w.nodeName(e[0], "html") || (n = e.offset()), n.top += w.css(e[0], "borderTopWidth", !0), n.left += w.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - w.css(r, "marginTop", !0),
                    left: t.left - n.left - w.css(r, "marginLeft", !0)
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent || u;
                    while (e&&!w.nodeName(e, "html") && w.css(e, "position") === "static")
                        e = e.offsetParent;
                    return e || u
                })
            }
        }), w.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var r = /Y/.test(n);
            w.fn[e] = function(i) {
                return w.access(this, function(e, i, s) {
                    var o = sr(e);
                    if (s === t)
                        return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                    o ? o.scrollTo(r ? w(o).scrollLeft() : s, r ? s : w(o).scrollTop()) : e[i] = s
                }, e, i, arguments.length, null)
            }
        }), w.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            w.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(r, i) {
                w.fn[i] = function(i, s) {
                    var o = arguments.length && (r || typeof i != "boolean"), u = r || (i===!0 || s===!0 ? "margin" : "border");
                    return w.access(this, function(n, r, i) {
                        var s;
                        return w.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? w.css(n, r, u) : w.style(n, r, i, u)
                    }, n, o ? i : t, o, null)
                }
            })
        }), w.fn.size = function() {
            return this.length
        }, w.fn.andSelf = w.fn.addBack, typeof module == "object" && module && typeof module.exports == "object" ? module.exports = w : typeof define == "function" && define.amd && define("jquery", [], function() {
            return w.noConflict(!0)
        })
    }(window), define("helpers/location_filter_deployment", ["jquery"], function(e) {
        return function(t, n, r, i) {
            var s = "", o=!1;
            t = t || "", n = n || "", r = r || [], i = i || "";
            switch (n) {
            case"head":
                s = "^" + t;
                break;
            case"exact":
                s = "^" + t + "/?$";
                break;
            case"tail":
                s = "^" + t + ".+$"
            }
            o=!!(i.match(new RegExp(s)) || []).length;
            for (var u = 0; u < r.length; u++) {
                var a = r[u], f = "";
                switch (a.subject) {
                case"url":
                    switch (a.operator) {
                    case"contains":
                        f = a.content, i.match(new RegExp(f, "i")) || (o=!1);
                        break;
                    case"not_contain":
                        f = a.content, i.match(new RegExp(f, "i")) && (o=!1);
                        break;
                    case"starts":
                        f = "^/?" + a.content, i.match(new RegExp(f, "i")) || (o=!1);
                        break;
                    case"ends":
                        f = a.content + "/?$", i.match(new RegExp(f, "i")) || (o=!1)
                    }
                    break;
                case"text":
                    var l = e("html").text();
                    switch (a.operator) {
                    case"contains":
                        f = a.content, l.match(new RegExp(f, "i")) || (o=!1);
                        break;
                    case"not_contain":
                        f = a.content, l.match(new RegExp(f, "i")) && (o=!1)
                    }
                    break;
                case"jq_selector":
                    switch (a.operator) {
                    case"matches":
                        jQueryRule = a.content, e(jQueryRule).length === 0 && (o=!1);
                        break;
                    case"not_match":
                        jQueryRule = a.content, e(jQueryRule).length > 0 && (o=!1)
                    }
                }
            }
            return o
        }
    }), define("helpers/location", ["module", "helpers/shim", "helpers/location_obj", "helpers/location_filter_deployment"], function(e, t, n, r) {
        return {
            hash: n.hash,
            host: n.host,
            protocol: n.protocol,
            uri: n.pathname,
            tld: n.host.match(/[^.]+.[^.]+$/)[0],
            config: function(e) {
                var n = {}, i=!1, s = [], o = "", u = 0;
                if (host = e[this.host]) {
                    s = t.obj_keys(host);
                    for (u = 0; u < s.length; u++)
                        o = s[u], i = r(e[this.host][o].uri, e[this.host][o].match_type, e[this.host][o].rules, this.uri), i && (n[o] = e[this.host][o].instances)
                }
                return n
            }
        }
    }), function() {
        var e = {
            baseUrl: "//filamentapp-assets.s3.amazonaws.com/assets",
            config: {
                main: {
                    "test.urbansherpas.es": {},
                    "garni.ca": {}
                },
                "helpers/stylesheet": {
                    baseUrl: "//filamentapp-assets.s3.amazonaws.com/assets"
                },
                "helpers/location_obj": {
                    applicationHost: "app.filament.io",
                    tunnelMatch: "((/product_deployments/\\d+/tunnel)|(/domains/\\d+/canvas))",
                    tunnelUrlParam: "url"
                },
                "lib/flare": {
                    statsUrl: "//filament-stats.herokuapp.com"
                },
                "products/passport": {},
                "products/flare": {},
                "products/codedrop": {},
                "products/google_analytics": {},
                "products/mailchimp": {}
            },
            paths: {
                jquery: "jquery-1.10.1"
            },
            shim: {
                underscore: {
                    exports: "_"
                }
            }
        };
        e.shim.underscore.init = function() {
            return this._.noConflict()
        }, requirejs.config(e), define("main", ["module", "helpers/location", "helpers/shim"], function(t, n, r) {
            if (host = t.config()[n.host]) {
                var i = [], s = {}, o = r.obj_keys(host);
                for (var u = 0; u < o.length; u++) {
                    var a = o[u];
                    i = i.concat(e.config.main[n.host][a].require || [])
                }
                i = r.array_uniq(i), require(i)
            }
        }), require(["main"])
    }(), define("a69df9f21617c6422256380f107fa5f1", function() {}), require(["a69df9f21617c6422256380f107fa5f1"])
})();
