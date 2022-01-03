;(function (e) {
  function n(n) {
    for (var o, l, i = n[0], c = n[1], u = n[2], p = 0, f = []; p < i.length; p++)
      (l = i[p]), Object.prototype.hasOwnProperty.call(r, l) && r[l] && f.push(r[l][0]), (r[l] = 0)
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o])
    s && s(n)
    while (f.length) f.shift()()
    return a.push.apply(a, u || []), t()
  }
  function t() {
    for (var e, n = 0; n < a.length; n++) {
      for (var t = a[n], o = !0, i = 1; i < t.length; i++) {
        var c = t[i]
        0 !== r[c] && (o = !1)
      }
      o && (a.splice(n--, 1), (e = l((l.s = t[0]))))
    }
    return e
  }
  var o = {},
    r = { app: 0 },
    a = []
  function l(n) {
    if (o[n]) return o[n].exports
    var t = (o[n] = { i: n, l: !1, exports: {} })
    return e[n].call(t.exports, t, t.exports, l), (t.l = !0), t.exports
  }
  ;(l.m = e),
    (l.c = o),
    (l.d = function (e, n, t) {
      l.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t })
    }),
    (l.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (l.t = function (e, n) {
      if ((1 & n && (e = l(e)), 8 & n)) return e
      if (4 & n && 'object' === typeof e && e && e.__esModule) return e
      var t = Object.create(null)
      if ((l.r(t), Object.defineProperty(t, 'default', { enumerable: !0, value: e }), 2 & n && 'string' != typeof e))
        for (var o in e)
          l.d(
            t,
            o,
            function (n) {
              return e[n]
            }.bind(null, o)
          )
      return t
    }),
    (l.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e['default']
            }
          : function () {
              return e
            }
      return l.d(n, 'a', n), n
    }),
    (l.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n)
    }),
    (l.p = '/')
  var i = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    c = i.push.bind(i)
  ;(i.push = n), (i = i.slice())
  for (var u = 0; u < i.length; u++) n(i[u])
  var s = c
  a.push([0, 'chunk-vendors']), t()
})({
  0: function (e, n, t) {
    e.exports = t('56d7')
  },
  '034f': function (e, n, t) {
    'use strict'
    t('85ec')
  },
  '56d7': function (e, n, t) {
    'use strict'
    t.r(n)
    var o = t('2b0e'),
      r = function () {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n
        return t('div', { staticClass: 'mainapp' }, [
          e._m(0),
          t('div', { staticClass: 'mainapp-main' }, [
            t('ul', { staticClass: 'mainapp-sidemenu' }, [
              t(
                'li',
                {
                  on: {
                    click: function (n) {
                      return e.push('/vue')
                    }
                  }
                },
                [e._v('Vue')]
              ),
              t(
                'li',
                {
                  on: {
                    click: function (n) {
                      return e.push('/react')
                    }
                  }
                },
                [e._v('React')]
              )
            ]),
            t('main', { staticClass: 'subapp-container' }, [
              e.loading ? t('h4', { staticClass: 'subapp-loading' }, [e._v('Loading...')]) : e._e(),
              t('div', { attrs: { id: 'subapp-viewport' } })
            ])
          ])
        ])
      },
      a = [
        function () {
          var e = this,
            n = e.$createElement,
            t = e._self._c || n
          return t('header', { staticClass: 'mainapp-header' }, [t('h1', [e._v('QianKun')])])
        }
      ],
      l = {
        name: 'App',
        props: { loading: Boolean },
        methods: {
          push(e) {
            history.pushState(null, e, e)
          }
        }
      },
      i = l,
      c = (t('034f'), t('2877')),
      u = Object(c['a'])(i, r, a, !1, null, null, null),
      s = u.exports,
      p = t('34ac9'),
      f = t('e223'),
      d = t('07ec')
    let b = null
    function v({ loading: e }) {
      b
        ? (b.loading = e)
        : (b = new o['a']({
            el: '#app',
            data() {
              return { loading: e }
            },
            render(e) {
              return e(s, { props: { loading: this.loading } })
            }
          }))
    }
    v({ loading: !0 })
    const g = e => v({ loading: e })
    Object(p['b'])(
      [
        { name: 'vue', entry: '//localhost:8001', container: '#subapp-viewport', loader: g, activeRule: '/vue' },
        { name: 'react', entry: '//localhost:8002', container: '#subapp-viewport', loader: g, activeRule: '/react' }
      ],
      {
        beforeLoad: [
          e => {
            console.log('[LifeCycle] before load %c%s', 'color: green', e.name)
          }
        ],
        beforeMount: [
          e => {
            console.log('[LifeCycle] before mount %c%s', 'color: green', e.name)
          }
        ],
        afterUnmount: [
          e => {
            console.log('[LifeCycle] after unmount %c%s', 'color: green', e.name)
          }
        ]
      }
    )
    const { onGlobalStateChange: h, setGlobalState: m } = Object(f['b'])({ user: 'qiankun' })
    h((e, n) => console.log('[onGlobalStateChange - master]:', e, n)),
      m({ ignore: 'master', user: { name: 'master' } }),
      Object(d['b'])('/vue'),
      Object(p['c'])(),
      Object(d['a'])(() => {
        console.log('[MainApp] first app mounted')
      })
  },
  '85ec': function (e, n, t) {}
})
//# sourceMappingURL=app.bbd5d6b8.js.map