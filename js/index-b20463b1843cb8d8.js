(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        75557: function(a, b, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return c(53678)
            }])
        },
        53678: function(e, b, a) {
            "use strict";
            a.r(b), a.d(b, {
                default: function() {
                    return s
                }
            });
            var f = a(47568),
                g = a(82670),
                c = a(34051),
                h = a.n(c),
                i = a(85893),
                j = a(4843),
                k = a(69795),
                l = a(98517),
                m = a(67294),
                n = a(74931),
                o = a(95090);
            a(89522);
            var d = a(9008),
                p = a.n(d),
                q = a(40412),
                r = a(34459);

            function s() {
                var b = (0, m.useState)(!1),
                    d = b[0],
                    e = b[1],
                    a = (0, k.Ge)(),
                    w = a.account,
                    x = a.activate,
                    y = a.deactivate,
                    s = a.error;
                (0, m.useEffect)(function() {
                    (0, g.Z)(s, k.Uu) && n.ZP.error("Unsupported Chain, Supported chain is Binance mainnet")
                }, [s]);
                var t, u = function() {
                        return e(!0)
                    },
                    v = (t = (0, f.Z)(h().mark(function a(b, c) {
                        return h().wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (a.prev = 0, "Metamask" !== c) {
                                        a.next = 11;
                                        break
                                    }
                                    if (!window.ethereum) {
                                        a.next = 8;
                                        break
                                    }
                                    return a.next = 5, x(b);
                                case 5:
                                    window.localStorage.setItem("WEB3_REACT_CURRENT_PROVIDER", c), a.next = 9;
                                    break;
                                case 8:
                                    window.location.href = "https://metamask.app.link/dapp/".concat(window.location.host);
                                case 9:
                                    a.next = 14;
                                    break;
                                case 11:
                                    return a.next = 13, x(b);
                                case 13:
                                    window.localStorage.setItem("WEB3_REACT_CURRENT_PROVIDER", c);
                                case 14:
                                    e(!1), a.next = 20;
                                    break;
                                case 17:
                                    a.prev = 17, a.t0 = a.catch(0), console.log(a.t0);
                                case 20:
                                case "end":
                                    return a.stop()
                            }
                        }, a, null, [
                            [0, 17]
                        ])
                    })), function(a, b) {
                        return t.apply(this, arguments)
                    });
                (0, m.useEffect)(function() {
                    var a = window.localStorage.getItem("WEB3_REACT_CURRENT_PROVIDER");
                    "Metamask" === a ? v(l.Lj, "Metamask") : "WalletConnect" === a ? v(l.Lw, "WalletConnect") : "CoinBase" === a && v(l.GU, "CoinBase")
                }, []);
                var c = function() {
                    w ? w && (y(), window.localStorage.clear(), window.location.reload()) : u()
                };
                return (0, i.jsxs)("div", {
                    className: "min-h-screen bg-black text-white flex flex-col ",
                    children: [(0, i.jsxs)(p(), {
                        children: [(0, i.jsx)("title", {
                            children: "SOCCER BUSD"
                        }), (0, i.jsx)("meta", {
                            name: "viewport",
                            content: "initial-scale=1.0, width=device-width"
                        })]
                    }), (0, i.jsx)(q.Z, {
                        connect: c
                    }), (0, i.jsx)(n.x7, {
                        containerClassName: "text-sm"
                    }), (0, i.jsx)(o.Z, {
                        connectHandler: c
                    }), (0, i.jsx)(r.Z, {}), (0, i.jsx)(j.Z, {
                        open: d,
                        setOpen: e,
                        handleClose: function() {
                            return e(!1)
                        },
                        handleOpen: u,
                        connect: v
                    })]
                })
            }
        }
    },
    function(a) {
        a.O(0, [445, 13, 556, 860, 725, 774, 888, 179], function() {
            var b;
            return a(a.s = 75557)
        }), _N_E = a.O()
    }
])