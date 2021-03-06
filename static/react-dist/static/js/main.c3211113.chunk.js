!(function (e, t) {
  'object' === typeof exports && 'object' === typeof module
    ? (module.exports = t())
    : 'function' === typeof define && define.amd
    ? define([], t)
    : 'object' === typeof exports
    ? (exports['micro-react-main'] = t())
    : (e['micro-react-main'] = t())
})(window, function () {
  return (window['webpackJsonp_micro-react'] = window['webpackJsonp_micro-react'] || []).push([
    [0],
    {
      102: function (e, t, n) {
        e.exports = n(161)
      },
      109: function (e, t, n) {},
      161: function (e, t, n) {
        'use strict'
        n.r(t),
          n.d(t, 'bootstrap', function () {
            return C
          }),
          n.d(t, 'mount', function () {
            return x
          }),
          n.d(t, 'unmount', function () {
            return S
          })
        var a = n(25),
          o = n.n(a),
          r = n(44),
          c = n(0),
          u = n.n(c),
          l = n(2),
          i = n.n(l),
          m = n(46),
          s = n(4),
          p = n(164),
          f = (n(108), n(109), n(163)),
          d = function () {
            return u.a.createElement(
              u.a.Fragment,
              null,
              u.a.createElement('h1', { className: 'app-title' }, 'React Demo'),
              u.a.createElement('p', { className: 'app-lib' }, 'React version: ', c.version, ', AntD version: ', f.a)
            )
          },
          b = n(99),
          E = n(35),
          w = n(165),
          h = function () {
            var e = Object(c.useState)(!1),
              t = Object(b.a)(e, 2),
              n = t[0],
              a = t[1]
            return u.a.createElement(
              u.a.Fragment,
              null,
              u.a.createElement(
                E.a,
                {
                  onClick: function () {
                    return a(!0)
                  }
                },
                'CLICK ME'
              ),
              u.a.createElement(
                w.a,
                {
                  visible: n,
                  onOk: function () {
                    return a(!1)
                  },
                  onCancel: function () {
                    return a(!1)
                  },
                  title: 'qiankun'
                },
                'Probably the most complete micro-frontends solution you ever met'
              )
            )
          },
          _ = function () {
            return u.a.createElement('h2', { className: 'app-nav-item', style: { borderColor: 'red' } }, 'Home')
          },
          v = Object(c.lazy)(function () {
            return n.e(3).then(n.bind(null, 166))
          }),
          y = function () {
            return u.a.createElement(
              m.a,
              { basename: window.__POWERED_BY_QIANKUN__ ? '/react' : '/' },
              u.a.createElement(
                'nav',
                null,
                u.a.createElement(m.b, { to: '/' }, 'Home'),
                u.a.createElement(p.a, { type: 'vertical' }),
                u.a.createElement(m.b, { to: '/about' }, 'About')
              ),
              u.a.createElement(
                c.Suspense,
                { fallback: null },
                u.a.createElement(
                  s.c,
                  null,
                  u.a.createElement(s.a, { path: '/', exact: !0, component: _ }),
                  u.a.createElement(s.a, { path: '/about', component: v })
                )
              )
            )
          }
        function k() {
          return u.a.createElement(
            'div',
            { className: 'app-main' },
            u.a.createElement(d, null),
            u.a.createElement(h, null),
            u.a.createElement(p.a, null),
            u.a.createElement(y, null)
          )
        }
        Boolean(
          'localhost' === window.location.hostname ||
            '[::1]' === window.location.hostname ||
            window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
        )
        function N(e) {
          var t = e.container
          i.a.render(u.a.createElement(k, null), t ? t.querySelector('#root') : document.querySelector('#root'))
        }
        function g(e) {
          e.onGlobalStateChange(function (t, n) {
            return console.log('[onGlobalStateChange - '.concat(e.name, ']:'), t, n)
          }, !0),
            e.setGlobalState({ ignore: e.name, user: { name: e.name } })
        }
        function C() {
          return j.apply(this, arguments)
        }
        function j() {
          return (j = Object(r.a)(
            o.a.mark(function e() {
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      console.log('[react16] react app bootstraped')
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )).apply(this, arguments)
        }
        function x(e) {
          return O.apply(this, arguments)
        }
        function O() {
          return (O = Object(r.a)(
            o.a.mark(function e(t) {
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      console.log('[react16] props from main framework', t), g(t), N(t)
                    case 3:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )).apply(this, arguments)
        }
        function S(e) {
          return A.apply(this, arguments)
        }
        function A() {
          return (A = Object(r.a)(
            o.a.mark(function e(t) {
              var n
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      ;(n = t.container),
                        i.a.unmountComponentAtNode(n ? n.querySelector('#root') : document.querySelector('#root'))
                    case 2:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )).apply(this, arguments)
        }
        window.__POWERED_BY_QIANKUN__ ? (n.p = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__) : N({}),
          'serviceWorker' in navigator &&
            navigator.serviceWorker.ready.then(function (e) {
              e.unregister()
            })
      }
    },
    [[102, 1, 2]]
  ])
})
//# sourceMappingURL=main.c3211113.chunk.js.map
