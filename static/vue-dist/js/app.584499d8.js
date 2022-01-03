;(function (e, t) {
  'object' === typeof exports && 'object' === typeof module
    ? (module.exports = t())
    : 'function' === typeof define && define.amd
    ? define([], t)
    : 'object' === typeof exports
    ? (exports['micro-vue-app'] = t())
    : (e['micro-vue-app'] = t())
})(window, function () {
  return (function (e) {
    function t(t) {
      for (var n, u, l = t[0], i = t[1], s = t[2], c = 0, f = []; c < l.length; c++)
        (u = l[c]), Object.prototype.hasOwnProperty.call(o, u) && o[u] && f.push(o[u][0]), (o[u] = 0)
      for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
      p && p(t)
      while (f.length) f.shift()()
      return a.push.apply(a, s || []), r()
    }
    function r() {
      for (var e, t = 0; t < a.length; t++) {
        for (var r = a[t], n = !0, u = 1; u < r.length; u++) {
          var i = r[u]
          0 !== o[i] && (n = !1)
        }
        n && (a.splice(t--, 1), (e = l((l.s = r[0]))))
      }
      return e
    }
    var n = {},
      o = { app: 0 },
      a = []
    function u(e) {
      return l.p + 'js/' + ({ about: 'about' }[e] || e) + '.' + { about: '9a6b885e' }[e] + '.js'
    }
    function l(t) {
      if (n[t]) return n[t].exports
      var r = (n[t] = { i: t, l: !1, exports: {} })
      return e[t].call(r.exports, r, r.exports, l), (r.l = !0), r.exports
    }
    ;(l.e = function (e) {
      var t = [],
        r = o[e]
      if (0 !== r)
        if (r) t.push(r[2])
        else {
          var n = new Promise(function (t, n) {
            r = o[e] = [t, n]
          })
          t.push((r[2] = n))
          var a,
            i = document.createElement('script')
          ;(i.charset = 'utf-8'), (i.timeout = 120), l.nc && i.setAttribute('nonce', l.nc), (i.src = u(e))
          var s = new Error()
          a = function (t) {
            ;(i.onerror = i.onload = null), clearTimeout(c)
            var r = o[e]
            if (0 !== r) {
              if (r) {
                var n = t && ('load' === t.type ? 'missing' : t.type),
                  a = t && t.target && t.target.src
                ;(s.message = 'Loading chunk ' + e + ' failed.\n(' + n + ': ' + a + ')'),
                  (s.name = 'ChunkLoadError'),
                  (s.type = n),
                  (s.request = a),
                  r[1](s)
              }
              o[e] = void 0
            }
          }
          var c = setTimeout(function () {
            a({ type: 'timeout', target: i })
          }, 12e4)
          ;(i.onerror = i.onload = a), document.head.appendChild(i)
        }
      return Promise.all(t)
    }),
      (l.m = e),
      (l.c = n),
      (l.d = function (e, t, r) {
        l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
      }),
      (l.r = function (e) {
        'undefined' !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (l.t = function (e, t) {
        if ((1 & t && (e = l(e)), 8 & t)) return e
        if (4 & t && 'object' === typeof e && e && e.__esModule) return e
        var r = Object.create(null)
        if ((l.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var n in e)
            l.d(
              r,
              n,
              function (t) {
                return e[t]
              }.bind(null, n)
            )
        return r
      }),
      (l.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e['default']
              }
            : function () {
                return e
              }
        return l.d(t, 'a', t), t
      }),
      (l.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (l.p = '/'),
      (l.oe = function (e) {
        throw (console.error(e), e)
      })
    var i = (window['webpackJsonp_micro-vue'] = window['webpackJsonp_micro-vue'] || []),
      s = i.push.bind(i)
    ;(i.push = t), (i = i.slice())
    for (var c = 0; c < i.length; c++) t(i[c])
    var p = s
    return a.push([0, 'chunk-vendors']), r()
  })({
    0: function (e, t, r) {
      e.exports = r('56d7')
    },
    '0992': function (e, t, r) {},
    '56d7': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'bootstrap', function () {
          return A
        }),
        r.d(t, 'mount', function () {
          return N
        }),
        r.d(t, 'unmount', function () {
          return I
        })
      var n = r('1da1'),
        o = (r('e260'), r('e6cf'), r('cca6'), r('a79d'), r('96cf'), r('b0c0'), r('2b0e')),
        a = r('8c4f'),
        u = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t
          return r(
            'div',
            { attrs: { id: 'app' } },
            [
              r(
                'div',
                { attrs: { id: 'nav' } },
                [
                  r('router-link', { attrs: { to: '/' } }, [e._v('Home')]),
                  e._v(' | '),
                  r('router-link', { attrs: { to: '/about' } }, [e._v('About')])
                ],
                1
              ),
              r('router-view')
            ],
            1
          )
        },
        l = [],
        i = (r('5c0b'), r('2877')),
        s = {},
        c = Object(i['a'])(s, u, l, !1, null, null, null),
        p = c.exports,
        f =
          (r('d3b7'),
          r('3ca3'),
          r('ddb0'),
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n(
              'div',
              { staticClass: 'home' },
              [
                n('img', { attrs: { alt: 'Vue logo', src: r('cf05') } }),
                n('HelloWorld', { attrs: { msg: 'Welcome to Your Vue.js App' } })
              ],
              1
            )
          }),
        v = [],
        h = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t
          return r('div', { staticClass: 'hello' }, [
            r('h1', [e._v(e._s(e.msg))]),
            e._m(0),
            r('h3', [e._v('Installed CLI Plugins')]),
            e._m(1),
            r('h3', [e._v('Essential Links')]),
            e._m(2),
            r('h3', [e._v('Ecosystem')]),
            e._m(3)
          ])
        },
        m = [
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t
            return r('p', [
              e._v(' For a guide and recipes on how to configure / customize this project,'),
              r('br'),
              e._v(' check out the '),
              r('a', { attrs: { href: 'https://cli.vuejs.org', target: '_blank', rel: 'noopener' } }, [
                e._v('vue-cli documentation')
              ]),
              e._v('. ')
            ])
          },
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t
            return r('ul', [
              r('li', [
                r(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
                      target: '_blank',
                      rel: 'noopener'
                    }
                  },
                  [e._v('babel')]
                )
              ]),
              r('li', [
                r(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router',
                      target: '_blank',
                      rel: 'noopener'
                    }
                  },
                  [e._v('router')]
                )
              ]),
              r('li', [
                r(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex',
                      target: '_blank',
                      rel: 'noopener'
                    }
                  },
                  [e._v('vuex')]
                )
              ])
            ])
          },
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t
            return r('ul', [
              r('li', [
                r('a', { attrs: { href: 'https://vuejs.org', target: '_blank', rel: 'noopener' } }, [e._v('Core Docs')])
              ]),
              r('li', [
                r('a', { attrs: { href: 'https://forum.vuejs.org', target: '_blank', rel: 'noopener' } }, [
                  e._v('Forum')
                ])
              ]),
              r('li', [
                r('a', { attrs: { href: 'https://chat.vuejs.org', target: '_blank', rel: 'noopener' } }, [
                  e._v('Community Chat')
                ])
              ]),
              r('li', [
                r('a', { attrs: { href: 'https://twitter.com/vuejs', target: '_blank', rel: 'noopener' } }, [
                  e._v('Twitter')
                ])
              ]),
              r('li', [
                r('a', { attrs: { href: 'https://news.vuejs.org', target: '_blank', rel: 'noopener' } }, [e._v('News')])
              ])
            ])
          },
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t
            return r('ul', [
              r('li', [
                r('a', { attrs: { href: 'https://router.vuejs.org', target: '_blank', rel: 'noopener' } }, [
                  e._v('vue-router')
                ])
              ]),
              r('li', [
                r('a', { attrs: { href: 'https://vuex.vuejs.org', target: '_blank', rel: 'noopener' } }, [e._v('vuex')])
              ]),
              r('li', [
                r(
                  'a',
                  {
                    attrs: {
                      href: 'https://github.com/vuejs/vue-devtools#vue-devtools',
                      target: '_blank',
                      rel: 'noopener'
                    }
                  },
                  [e._v('vue-devtools')]
                )
              ]),
              r('li', [
                r('a', { attrs: { href: 'https://vue-loader.vuejs.org', target: '_blank', rel: 'noopener' } }, [
                  e._v('vue-loader')
                ])
              ]),
              r('li', [
                r('a', { attrs: { href: 'https://github.com/vuejs/awesome-vue', target: '_blank', rel: 'noopener' } }, [
                  e._v('awesome-vue')
                ])
              ])
            ])
          }
        ],
        d = { name: 'HelloWorld', props: { msg: String } },
        _ = d,
        b = (r('e2d3'), Object(i['a'])(_, h, m, !1, null, '1dfc7223', null)),
        g = b.exports,
        w = { name: 'Home', components: { HelloWorld: g } },
        j = w,
        y = Object(i['a'])(j, f, v, !1, null, null, null),
        k = y.exports
      o['a'].use(a['a'])
      var x = [
          { path: '/', name: 'Home', component: k },
          {
            path: '/about',
            name: 'About',
            component: function () {
              return r.e('about').then(r.bind(null, 'f820'))
            }
          }
        ],
        O = x,
        E = r('2f62')
      o['a'].use(E['a'])
      var P = new E['a'].Store({ state: {}, mutations: {}, actions: {}, modules: {} })
      o['a'].config.productionTip = !1
      var C = null,
        S = null
      function $() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.container
        ;(C = new a['a']({ base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/', mode: 'history', routes: O })),
          (S = new o['a']({
            router: C,
            store: P,
            render: function (e) {
              return e(p)
            }
          }).$mount(t ? t.querySelector('#app') : '#app'))
      }
      function T(e) {
        e.onGlobalStateChange &&
          e.onGlobalStateChange(function (t, r) {
            return console.log('[onGlobalStateChange - '.concat(e.name, ']:'), t, r)
          }, !0),
          e.setGlobalState && e.setGlobalState({ ignore: e.name, user: { name: e.name } })
      }
      function A() {
        return H.apply(this, arguments)
      }
      function H() {
        return (
          (H = Object(n['a'])(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      console.log('[vue] vue app bootstraped')
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )),
          H.apply(this, arguments)
        )
      }
      function N(e) {
        return R.apply(this, arguments)
      }
      function R() {
        return (
          (R = Object(n['a'])(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      console.log('[vue] props from main framework', t), T(t), $(t)
                    case 3:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )),
          R.apply(this, arguments)
        )
      }
      function I() {
        return L.apply(this, arguments)
      }
      function L() {
        return (
          (L = Object(n['a'])(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      S.$destroy(), (S.$el.innerHTML = ''), (S = null), (C = null)
                    case 4:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )),
          L.apply(this, arguments)
        )
      }
      window.__POWERED_BY_QIANKUN__ ? (r.p = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__) : $()
    },
    '5c0b': function (e, t, r) {
      'use strict'
      r('9c0c')
    },
    '9c0c': function (e, t, r) {},
    cf05: function (e, t, r) {
      e.exports = r.p + 'img/logo.82b9c7a5.png'
    },
    e2d3: function (e, t, r) {
      'use strict'
      r('0992')
    }
  })
})
//# sourceMappingURL=app.584499d8.js.map
