"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [725], {
        34459: function(g, e, a) {
            var b = a(85893);
            a(67294);
            var c = a(89583),
                d = a(53854),
                f = a(63750);
            e.Z = function() {
                return (0, b.jsxs)("div", {
                    className: "py-8 text-center px-4 footer",
                    children: [(0, b.jsx)("p", {
                        className: "text-primary pt-3 text-3xl",
                        children: "Audit Partner"
                    }), (0, b.jsxs)("div", {
                        className: "grid grid-cols-2 gap-2 justify-center items-center my-10",
                        children: [(0, b.jsx)("a", {
                            href: "https://www.bit-control.com/audited-projects",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "ml-auto inline-block max-w-max",
                            children: (0, b.jsx)("img", {
                                src: "/AUDIT.JPG",
                                alt: "",
                                className: "max-w-[100px] w-[90%] "
                            })
                        }), (0, b.jsx)("a", {
                            href: "https://www.encryptosecurity.com/AuditRecord?project=54#SoccerBUSD",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "mr-auto inline-block max-w-max",
                            children: (0, b.jsx)("img", {
                                src: "/audit2.png",
                                alt: "",
                                className: "w-full md:max-w-[200px] "
                            })
                        })]
                    }), (0, b.jsx)("div", {
                        className: "flex flex-wrap md:grid md:grid-flow-col justify-center items-center ",
                        children: h.map(function(a, c) {
                            return (0, b.jsxs)("a", {
                                className: "flex items-center text-primary text-[22px]",
                                href: a.link,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, b.jsx)("span", {
                                    className: "block mr-2",
                                    children: a.icon
                                }), (0, b.jsx)("p", {
                                    children: a.text
                                }), c !== h.length - 1 && (0, b.jsx)("p", {
                                    className: "mx-2",
                                    children: "||"
                                })]
                            }, c)
                        })
                    })]
                })
            };
            var h = [{
                text: "Twitter",
                icon: (0, b.jsx)(c.fWC, {}),
                link: "https://twitter.com/SoccerBUSD"
            }, {
                text: "Telegram",
                icon: (0, b.jsx)(c.AGi, {}),
                link: "https://t.me/SoccerBUSD"
            }, {
                text: "Audit 1",
                icon: (0, b.jsx)(d.ivT, {}),
                link: "AUDIT.pdf"
            }, {
                text: "Audit 2",
                icon: (0, b.jsx)(d.ivT, {}),
                link: "https://www.encryptosecurity.com/AuditRecord?project=54#SoccerBUSD"
            }, {
                text: "Bscscan",
                icon: (0, b.jsx)(f.hrr, {}),
                link: "https://bscscan.com/address/0xc9baa0bcfa920dd8f6febd9bfa2fda74b34e69fb#code"
            }, ]
        },
        40412: function(c, b, a) {
            var d = a(85893),
                e = a(69795),
                f = a(67294),
                g = a(89522);
            b.Z = function(c) {
                var i = c.connect,
                    a = (0, f.useState)(!1);
                a[0], a[1];
                var b = (0, e.Ge)().account;
                return (0, d.jsxs)("div", {
                    className: "max-w-8xl mx-auto w-full py-4 flex md:flex-row flex-col justify-between items-center px-4",
                    children: [(0, d.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0, d.jsx)("div", {
                            children: (0, d.jsx)("img", {
                                src: "/logo.png",
                                className: "w-[200px]",
                                alt: ""
                            })
                        }), (0, d.jsx)("ul", {
                            className: "flex sm:flex-row flex-col items-center",
                            children: h.map(function(a, b) {
                                return (0, d.jsx)("li", {
                                    children: (0, d.jsx)("a", {
                                        href: a.link,
                                        target: "_blank",
                                        className: "uppercase text-gray-300 font-bold text-lg px-3 block",
                                        rel: "noreferrer",
                                        children: a.text
                                    })
                                }, b)
                            })
                        })]
                    }), (0, d.jsx)("button", {
                        className: "bg-primary rounded-md text-black border border-white py-2.5 px-6 block sm:w-auto w-full mt-4 sm:mt-0",
                        onClick: i,
                        children: b ? (0, g.sC)(b) : "CONNECT WALLET"
                    })]
                })
            };
            var h = [{
                text: "Whitepaper",
                link: "WHITEPAPER.pdf"
            }, {
                text: "Audit 1",
                link: "AUDIT.pdf"
            }, {
                text: "Audit 2",
                link: "https://www.encryptosecurity.com/AuditRecord?project=54#SoccerBUSD"
            }, ]
        },
        95090: function(j, b, a) {
            a.d(b, {
                Z: function() {
                    return K
                }
            });
            var k = a(47568),
                c = a(34051),
                l = a.n(c),
                m = a(85893),
                n = a(67294);
            a(74855);
            var d = a(74566),
                e = a(11496);
            (0, e.ZP)(d.ZP)({
                color: "#FF4683",
                height: 8,
                "& .MuiSlider-track": {
                    border: "none"
                },
                "& .MuiSlider-thumb": {
                    height: 24,
                    width: 24,
                    backgroundColor: "#fff",
                    border: "2px solid currentColor",
                    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                        boxShadow: "inherit"
                    },
                    "&:before": {
                        display: "none"
                    }
                },
                "& .MuiSlider-valueLabel": {
                    lineHeight: 1.2,
                    fontSize: 12,
                    background: "unset",
                    padding: 0,
                    width: 32,
                    height: 32,
                    borderRadius: "50% 50% 50% 0",
                    backgroundColor: "#FF4683",
                    transformOrigin: "bottom left",
                    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
                    "&:before": {
                        display: "none"
                    },
                    "&.MuiSlider-valueLabelOpen": {
                        transform: "translate(50%, -100%) rotate(-45deg) scale(1)"
                    },
                    "& > *": {
                        transform: "rotate(45deg)"
                    }
                }
            });
            var o = a(89522),
                p = a(69795),
                q = a(227),
                r = a(57200),
                s = function(b) {
                    var j, z = b.refAddress,
                        A = b.checkConnect,
                        c = (0, n.useState)(50),
                        s = c[0],
                        B = c[1],
                        d = (0, p.Ge)(),
                        t = d.library,
                        u = d.account,
                        e = (0, n.useState)(0),
                        v = e[0],
                        C = e[1],
                        f = (0, n.useState)(0),
                        a = f[0],
                        D = f[1],
                        g = (0, n.useState)(0),
                        w = g[0],
                        E = g[1],
                        h = (0, n.useState)(0),
                        x = h[0],
                        F = h[1],
                        i = (0, n.useState)(!1),
                        y = i[0],
                        G = i[1],
                        H = (j = (0, k.Z)(l().mark(function a() {
                            var b, c, d, e, f, g, h, i, j, k, m;
                            return l().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (!u) {
                                            a.next = 43;
                                            break
                                        }
                                        return a.next = 3, (0, o.uN)(t);
                                    case 3:
                                        return c = (b = a.sent).ok, d = b.contract, a.next = 8, (0, o.uN)(t, r.K);
                                    case 8:
                                        if (f = (e = a.sent).ok, g = e.contract, !(!c || !f)) {
                                            a.next = 13;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 13:
                                        return a.prev = 13, a.next = 16, g.methods.balanceOf(u).call();
                                    case 16:
                                        return h = a.sent, C(h = Number(h = (0, o.PE)(h)).toFixed()), a.next = 22, g.methods.allowance(u, q.i).call();
                                    case 22:
                                        return G(Number(i = a.sent) > 0), a.next = 26, d.methods.investments(u).call();
                                    case 26:
                                        return j = (j = a.sent)[1], D((0, o.PE)(j)), a.next = 31, d.methods.DailyRoi(j).call();
                                    case 31:
                                        return k = a.sent, E((0, o.PE)(k)), a.next = 35, d.methods.totalWithdraw(u).call();
                                    case 35:
                                        m = a.sent, F(m = (0, o.PE)(m[1])), a.next = 43;
                                        break;
                                    case 40:
                                        a.prev = 40, a.t0 = a.catch(13), console.log(a.t0);
                                    case 43:
                                    case "end":
                                        return a.stop()
                                }
                            }, a, null, [
                                [13, 40]
                            ])
                        })), function() {
                            return j.apply(this, arguments)
                        });
                    return (0, n.useEffect)(function() {
                        var a = setInterval(function() {
                            H()
                        }, 5e3);
                        return function() {
                            clearInterval(a)
                        }
                    }, [u, t]), (0, m.jsxs)("div", {
                        className: "bg-primary border border-white rounded-md p-4 text-black",
                        children: [(0, m.jsx)("h2", {
                            className: "text-2xl font-bold border-b border-black pb-2 border-opacity-50",
                            children: "Investment Portal"
                        }), (0, m.jsxs)("div", {
                            className: "flex justify-between py-2 border-b border-black mt-4",
                            children: [(0, m.jsx)("span", {
                                className: "text-xl font-bold",
                                children: "Wallet Balance"
                            }), (0, m.jsxs)("span", {
                                className: "text-lg",
                                children: [v, " BUSD"]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "flex justify-between py-2 border-b border-black ",
                            children: [(0, m.jsx)("span", {
                                className: "text-xl font-bold",
                                children: "User Invested"
                            }), (0, m.jsxs)("span", {
                                className: "text-lg",
                                children: [a, " BUSD"]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "flex justify-between py-2 border-b border-black ",
                            children: [(0, m.jsx)("span", {
                                className: "text-xl font-bold",
                                children: "5x Profit"
                            }), (0, m.jsxs)("span", {
                                className: "text-lg",
                                children: [5 * a, " BUSD"]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "flex justify-between py-2 border-b border-black ",
                            children: [(0, m.jsx)("span", {
                                className: "text-xl font-bold",
                                children: "5x Remaining"
                            }), (0, m.jsxs)("span", {
                                className: "text-lg",
                                children: [5 * a - x, " BUSD"]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "flex justify-between py-2 border-b border-black ",
                            children: [(0, m.jsx)("span", {
                                className: "text-xl font-bold",
                                children: "Daily User ROI"
                            }), (0, m.jsxs)("span", {
                                className: "text-lg",
                                children: [w, " BUSD"]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "flex justify-between py-2 border-b border-black ",
                            children: [(0, m.jsx)("div", {
                                className: "bg-white max-w-[150px] text-center",
                                children: (0, m.jsx)("input", {
                                    type: "number",
                                    className: "text-primary py-2 px-4 w-full h-full focus:outline-none text-center bg-transparent",
                                    value: s,
                                    onChange: function(a) {
                                        return B(a.target.value)
                                    }
                                })
                            }), (0, m.jsx)("button", {
                                onClick: function() {
                                    A() && (0, o.u6)(t, s, z)
                                },
                                className: "btn bg-black rounded-md border border-white text-white px-6 py-2 uppercase ml-2 hover:shadow-xl",
                                children: y ? "Deposit" : "Approve"
                            })]
                        }), (0, m.jsx)("div", {
                            className: "flex justify-center mt-2 py-2 ",
                            children: (0, m.jsx)("button", {
                                className: "btn bg-black rounded-md border border-white text-white px-6 py-2 uppercase",
                                onClick: function() {
                                    A() && (0, o.fD)(t)
                                },
                                children: "Emergency Withdraw"
                            })
                        })]
                    })
                },
                t = a(3688),
                f = a(27484),
                g = a.n(f),
                h = a(70178),
                i = a.n(h),
                u = a(74931),
                v = a(98130),
                w = function(f) {
                    var h = f.timestamp,
                        a = (0, n.useState)(0),
                        b = a[0],
                        o = a[1],
                        c = (0, n.useState)(0),
                        i = c[0],
                        p = c[1],
                        d = (0, n.useState)(0),
                        j = d[0],
                        q = d[1],
                        e = (0, n.useState)(0),
                        k = e[0],
                        r = e[1],
                        l = +g()(1e3 * h) - 1e3 * g()().utc().unix();
                    return (0, n.useEffect)(function() {
                        var a = setTimeout(function() {
                            l > 0 && (o(Math.floor(l / 864e5)), p(Math.floor(l / 36e5 % 24)), q(Math.floor(l / 1e3 / 60 % 60)), r(Math.floor(l / 1e3 % 60)))
                        }, 1e3);
                        return function() {
                            clearTimeout(a)
                        }
                    }), (0, m.jsx)(m.Fragment, {
                        children: l > 0 ? (0, m.jsxs)("span", {
                            children: [b && "".concat(b, " d"), " ", (0, v.Bu)(i), " hr ", (0, v.Bu)(j), " mins", " ", (0, v.Bu)(k), " sec", " "]
                        }) : (0, m.jsx)("span", {
                            children: "0"
                        })
                    })
                };
            g().extend(i());
            var x = function(v) {
                    var F = v.checkConnect,
                        a = (0, p.Ge)(),
                        x = a.library,
                        y = a.account,
                        b = (0, n.useState)(0),
                        z = b[0],
                        G = b[1],
                        c = (0, n.useState)(0),
                        A = c[0],
                        H = c[1],
                        d = (0, n.useState)(0);
                    d[0], d[1];
                    var B, e = (0, n.useState)(0),
                        C = e[0],
                        I = e[1],
                        f = (0, n.useState)(0),
                        h = f[0],
                        J = f[1],
                        i = (0, n.useState)(0),
                        D = i[0],
                        K = i[1],
                        j = (0, n.useState)(0),
                        q = j[0],
                        L = j[1],
                        s = (0, n.useState)(0),
                        E = s[0],
                        M = s[1],
                        N = (B = (0, k.Z)(l().mark(function a() {
                            var b, c, d, e, f, g, h, i, j, k, m;
                            return l().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (!y) {
                                            a.next = 45;
                                            break
                                        }
                                        return a.next = 3, (0, o.uN)(x);
                                    case 3:
                                        return c = (b = a.sent).ok, d = b.contract, a.next = 8, (0, o.uN)(x, r.K);
                                    case 8:
                                        if (f = (e = a.sent).ok, g = e.contract, !(!c || !f)) {
                                            a.next = 13;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 13:
                                        return a.prev = 13, a.next = 16, d.methods.totalWithdraw(y).call();
                                    case 16:
                                        return h = a.sent, G(h = (0, o.PE)(h[1])), a.next = 21, d.methods.approvedWithdrawal(y).call();
                                    case 21:
                                        return i = a.sent, H((i = (0, o.PE)(i[1])) > 0 ? Number(i) : 0), console.log(i), a.next = 27, d.methods.userReward(y).call();
                                    case 27:
                                        return j = a.sent, I(Number(j = (0, o.PE)(j)).toFixed(4)), a.next = 32, d.methods.claimTime(y).call();
                                    case 32:
                                        return J((k = a.sent)[1]), K(k[2]), a.next = 37, d.methods.weekly(y).call();
                                    case 37:
                                        L((m = a.sent)[1]), M(m[2]), a.next = 45;
                                        break;
                                    case 42:
                                        a.prev = 42, a.t0 = a.catch(13), console.log(a.t0);
                                    case 45:
                                    case "end":
                                        return a.stop()
                                }
                            }, a, null, [
                                [13, 42]
                            ])
                        })), function() {
                            return B.apply(this, arguments)
                        });
                    (0, n.useEffect)(function() {
                        var a = setInterval(function() {
                            N()
                        }, 5e3);
                        return function() {
                            clearInterval(a)
                        }
                    }, [y, x]);
                    var O = function() {
                        return g()().utc().unix()
                    };
                    return (0, m.jsxs)("div", {
                        className: "bg-primary border border-white rounded-md p-4 text-black",
                        children: [(0, m.jsx)("h2", {
                            className: "text-2xl font-bold border-b border-black pb-2 border-opacity-50",
                            children: "Statistics"
                        }), (0, m.jsxs)("div", {
                            className: "flex justify-between py-2 border-b border-black mt-4 items-center",
                            children: [(0, m.jsxs)("div", {
                                children: [(0, m.jsx)("p", {
                                    className: "text-base font-bold",
                                    children: "Daily Rewards"
                                }), (0, m.jsxs)("p", {
                                    className: "text-base font-normal",
                                    children: [C, " BUSD"]
                                })]
                            }), (0, m.jsx)("button", {
                                onClick: function() {
                                    if (F()) {
                                        var a = O();
                                        if (Number(D) > a) {
                                            console.log(a, D), u.ZP.error("Claim is not allowed before deadline is reached");
                                            return
                                        }
                                        if (!Number(C)) {
                                            u.ZP.error(" You don\u2019t have any balance to be claimed");
                                            return
                                        }(0, o.Xv)(x)
                                    }
                                },
                                className: "btn bg-black rounded-md border border-white text-white px-6 py-2 uppercase",
                                children: "Claim"
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "flex justify-between py-2 border-b border-black mt-4",
                            children: [(0, m.jsxs)("div", {
                                children: [(0, m.jsx)("p", {
                                    className: "text-base font-bold",
                                    children: "Last Claim"
                                }), (0, m.jsx)("p", {
                                    className: "text-base font-normal",
                                    children: h > 0 ? (0, m.jsx)(t.Z, {
                                        datetime: 1e3 * Number(h)
                                    }) : 0
                                })]
                            }), (0, m.jsxs)("div", {
                                children: [(0, m.jsx)("p", {
                                    className: "text-base font-bold text-right",
                                    children: "Next Claim"
                                }), (0, m.jsx)("p", {
                                    className: "text-base font-normal text-right",
                                    children: (0, m.jsx)(w, {
                                        timestamp: D
                                    })
                                })]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "flex justify-between py-2 border-b border-black mt-4 items-center",
                            children: [(0, m.jsxs)("div", {
                                children: [(0, m.jsx)("p", {
                                    className: "text-base font-bold",
                                    children: "Available Withdrawal 50% Allowed"
                                }), (0, m.jsxs)("p", {
                                    className: "text-base font-normal",
                                    children: [A, " BUSD"]
                                })]
                            }), (0, m.jsx)("button", {
                                onClick: function() {
                                    if (F()) {
                                        var a = O();
                                        if (Number(E) > a) {
                                            console.log(a, D), u.ZP.error("Withdrawal is not allowed before deadline is reached");
                                            return
                                        }
                                        if (!Number(A)) {
                                            u.ZP.error(" You don\u2019t have any balance to be claimed");
                                            return
                                        }(0, o.Zd)(x)
                                    }
                                },
                                className: "btn bg-black rounded-md border border-white text-white px-6 py-4 uppercase ",
                                children: "Withdraw"
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "flex justify-between py-2 border-b border-black mt-4",
                            children: [(0, m.jsxs)("div", {
                                children: [(0, m.jsx)("p", {
                                    className: "text-base font-bold",
                                    children: "Last Withdrawal"
                                }), (0, m.jsxs)("p", {
                                    className: "text-base font-normal",
                                    children: [" ", q > 0 ? (0, m.jsx)(t.Z, {
                                        datetime: 1e3 * Number(q)
                                    }) : 0]
                                })]
                            }), (0, m.jsxs)("div", {
                                children: [(0, m.jsx)("p", {
                                    className: "text-base font-bold text-right",
                                    children: "Next Withdrawal"
                                }), (0, m.jsx)("p", {
                                    className: "text-base font-normal text-right",
                                    children: (0, m.jsx)(w, {
                                        timestamp: E
                                    })
                                })]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "flex justify-between py-2 border-b border-black ",
                            children: [(0, m.jsx)("span", {
                                className: "text-xl font-bold",
                                children: "Total Withdrawn"
                            }), (0, m.jsxs)("span", {
                                className: "text-lg",
                                children: [z, " BUSD"]
                            })]
                        })]
                    })
                },
                y = function() {
                    var e, b = (0, p.Ge)(),
                        f = b.library,
                        a = b.account,
                        c = (0, n.useState)(0),
                        g = c[0],
                        q = c[1],
                        d = (0, n.useState)(0),
                        h = d[0],
                        s = d[1],
                        i = window.location.origin ? window.location.origin : "",
                        j = "".concat(i, "/").concat(a),
                        t = (e = (0, k.Z)(l().mark(function b() {
                            var c, d, e, g, h, i, j, k;
                            return l().wrap(function(b) {
                                for (;;) switch (b.prev = b.next) {
                                    case 0:
                                        if (!a) {
                                            b.next = 29;
                                            break
                                        }
                                        return b.next = 3, (0, o.uN)(f);
                                    case 3:
                                        return d = (c = b.sent).ok, e = c.contract, b.next = 8, (0, o.uN)(f, r.K);
                                    case 8:
                                        if (h = (g = b.sent).ok, i = g.contract, !(!d || !h)) {
                                            b.next = 13;
                                            break
                                        }
                                        return b.abrupt("return");
                                    case 13:
                                        return b.prev = 13, b.next = 16, e.methods.refTotalWithdraw(a).call();
                                    case 16:
                                        return j = b.sent, q(j = (0, o.PE)(j[1])), b.next = 21, e.methods.refferal(a).call();
                                    case 21:
                                        k = b.sent, s(j = (0, o.PE)(k[1])), b.next = 29;
                                        break;
                                    case 26:
                                        b.prev = 26, b.t0 = b.catch(13), console.log(b.t0);
                                    case 29:
                                    case "end":
                                        return b.stop()
                                }
                            }, b, null, [
                                [13, 26]
                            ])
                        })), function() {
                            return e.apply(this, arguments)
                        });
                    return (0, n.useEffect)(function() {
                        var a = setInterval(function() {
                            t()
                        }, 5e3);
                        return function() {
                            clearInterval(a)
                        }
                    }, [a, f]), (0, m.jsxs)("div", {
                        className: "grid gap-6",
                        children: [(0, m.jsxs)("div", {
                            className: "bg-primary border border-white rounded-md p-4 text-black",
                            children: [(0, m.jsx)("h2", {
                                className: "text-2xl font-bold border-b border-black pb-2 border-opacity-50",
                                children: "Referral Rewards 10%"
                            }), (0, m.jsxs)("div", {
                                className: "flex justify-between py-2 border-b border-black mt-4",
                                children: [(0, m.jsx)("span", {
                                    className: "text-xl ",
                                    children: "Referral Rewards"
                                }), (0, m.jsxs)("span", {
                                    className: "text-lg",
                                    children: [h, " BUSD"]
                                })]
                            }), (0, m.jsxs)("div", {
                                className: "flex justify-between py-2 border-b border-black ",
                                children: [(0, m.jsx)("span", {
                                    className: "text-xl ",
                                    children: "Total Withdrawn"
                                }), (0, m.jsxs)("span", {
                                    className: "text-lg",
                                    children: [g, " BUSD"]
                                })]
                            }), (0, m.jsx)("div", {
                                className: "flex justify-center py-2 ",
                                children: (0, m.jsx)("button", {
                                    onClick: function() {
                                        return (0, o.bn)(f)
                                    },
                                    className: "btn bg-black rounded-md border border-white text-white px-6 py-3 mt-4 uppercase",
                                    children: "Withdraw Rewards"
                                })
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "bg-primary border border-white rounded-md p-4 text-black",
                            children: [(0, m.jsx)("h2", {
                                className: "text-2xl font-bold border-b border-black pb-2 border-opacity-50",
                                children: "Referral Link"
                            }), (0, m.jsxs)("div", {
                                className: " py-2 mt-2",
                                children: [(0, m.jsx)("p", {
                                    className: " font-bold",
                                    children: "Share your Referral Link To Earn 10% of BUSD"
                                }), (0, m.jsxs)("div", {
                                    className: "bg-white",
                                    children: [" ", (0, m.jsx)("input", {
                                        type: "text",
                                        className: " bg-transparent w-full focus:outline-none px-4 py-1 text-black",
                                        defaultValue: a ? j : "Connect Wallet"
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                z = {
                    ROI: 16,
                    WITHDRAWFEE: 10,
                    DEPOSITFEEMARKETING: 4,
                    DEV: 2
                },
                A = function() {
                    var b = (0, n.useState)(50),
                        a = b[0],
                        c = b[1];
                    return (0, n.useState)(8)[0], (0, m.jsxs)("div", {
                        className: "bg-primary border border-white rounded-md text-black",
                        children: [(0, m.jsx)("p", {
                            className: "font-bold p-4 border-b border-black",
                            children: "Investment Calculator"
                        }), (0, m.jsxs)("div", {
                            className: "flex flex-col md:flex-row md:items-center justify-between p-4",
                            children: [(0, m.jsxs)("div", {
                                children: [(0, m.jsx)("h2", {
                                    className: "text-2xl ",
                                    children: "BUSD AMOUNT"
                                }), (0, m.jsx)("div", {
                                    className: "bg-white max-w-[500px]",
                                    children: (0, m.jsx)("input", {
                                        type: "number",
                                        className: "bg-transparent text-primary focus:outline-none px-4 w-full py-1",
                                        value: a,
                                        onChange: function(a) {
                                            return c(a.target.value)
                                        }
                                    })
                                }), (0, m.jsx)("p", {
                                    className: "font-bold",
                                    children: "Amount of returns calculated on the basis of investment amount."
                                }), (0, m.jsx)("p", {
                                    className: "font-bold",
                                    children: "Note: Min investment is 50 BUSD & max amount of investment in 100k BUSD."
                                })]
                            }), (0, m.jsxs)("div", {
                                className: "text-left md:text-right mt-4 md:mt-0",
                                children: [(0, m.jsx)("h2", {
                                    className: "text-2xl ",
                                    children: "Return of Investment"
                                }), (0, m.jsxs)("p", {
                                    className: "font-bold",
                                    children: ["Daily Return: ", a * z.ROI / 100, " BUSD"]
                                }), (0, m.jsxs)("p", {
                                    className: "font-bold",
                                    children: ["Weekly Return: ", a * z.ROI * 7 / 100, " BUSD"]
                                }), (0, m.jsxs)("p", {
                                    className: "font-bold",
                                    children: ["Monthly Return: ", a * z.ROI * 30 / 100, " BUSD"]
                                })]
                            })]
                        })]
                    })
                };
            a(34459);
            var B = a(11163),
                C = a(70603),
                D = a(84808),
                E = a(85333),
                F = a(11111),
                G = a(61988),
                H = a(89583),
                I = {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxWidth: 400,
                    width: "100%",
                    bgcolor: "transparent",
                    p: 2
                };

            function J() {
                var b = (0, C.Z)(n.useState(!1), 2),
                    c = b[0],
                    d = b[1],
                    a = function() {
                        sessionStorage.setItem("soccer-busd-loadmodal", !1), d(!1)
                    };
                return n.useEffect(function() {
                    var a = sessionStorage.getItem("soccer-busd-loadmodal");
                    null === localStorage.getItem("soccer-busd-loadmodal") && (null === a ? (sessionStorage.setItem("soccer-busd-loadmodal", !0), d(!0)) : (console.log(a), d("false" !== a)))
                }, []), (0, m.jsx)("div", {
                    children: (0, m.jsx)(F.Z, {
                        open: c,
                        onClose: a,
                        closeAfterTransition: !0,
                        disableAutoFocus: !0,
                        BackdropComponent: D.Z,
                        BackdropProps: {
                            timeout: 500
                        },
                        children: (0, m.jsx)(G.Z, { in: c,
                            children: (0, m.jsx)(E.Z, {
                                sx: I,
                                children: (0, m.jsxs)("div", {
                                    className: "rounded-xl overflow-hidden relative",
                                    children: [(0, m.jsx)("button", {
                                        className: "text-white right-0 absolute p-4 text-xl ",
                                        onClick: a,
                                        children: (0, m.jsx)(H.aHS, {})
                                    }), (0, m.jsx)("div", {
                                        className: "max-h-[150px] overflow-hidden",
                                        children: (0, m.jsx)("img", {
                                            src: "/POPUP.jpg",
                                            alt: "POPUP"
                                        })
                                    }), (0, m.jsxs)("div", {
                                        className: "bg-primary px-6 py-7 text-white",
                                        children: [(0, m.jsxs)("h2", {
                                            className: "text-sm sm:text-xl text-center font-medium uppercase",
                                            children: ["HEY HAVE YOU deposited AT LEAST", " ", (0, m.jsx)("span", {
                                                className: "font-black",
                                                children: " 1990"
                                            }), " BUSD OR MORE IN OUR PROTOCOL?"]
                                        }), (0, m.jsxs)("p", {
                                            className: "text-xs sm:text-sm text-center font-medium mt-4",
                                            children: ["WELL, CONGRATULATIONS, YOU ARE A", " ", (0, m.jsx)("span", {
                                                className: "font-black",
                                                children: "WHALE!"
                                            }), " JOIN OUR TELEGRAM GROUP AND ASK FOR", " ", (0, m.jsx)("span", {
                                                className: "font-black",
                                                children: "THE EXCLUSIVE PRIVATE VIP GROUP!"
                                            }), " ", "CLICK THE BUTTON BELOW"]
                                        }), (0, m.jsx)("a", {
                                            href: "https://t.me/SoccerBUSD",
                                            onClick: a,
                                            target: "_blank",
                                            className: "btn bg-black px-6 rounded-lg py-2 border border-white block max-w-max mx-auto mt-4",
                                            rel: "noreferrer",
                                            children: "Join Now"
                                        }), (0, m.jsxs)("div", {
                                            className: "grid grid-flow-col justify-center items-center gap-2 mt-4",
                                            children: [(0, m.jsx)("input", {
                                                type: "checkbox",
                                                name: "check",
                                                className: "rounded",
                                                id: "check",
                                                onChange: function() {
                                                    null === localStorage.getItem("soccer-busd-loadmodal") ? localStorage.setItem("soccer-busd-loadmodal", !0) : localStorage.removeItem("soccer-busd-loadmodal")
                                                }
                                            }), (0, m.jsx)("label", {
                                                htmlFor: "check",
                                                children: "Don't Show Again"
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })
            }
            var K = function(h) {
                var t = h.connectHandler,
                    i = (0, B.useRouter)(),
                    c = (0, p.Ge)(),
                    a = c.account,
                    j = c.library,
                    d = (0, n.useState)(0),
                    q = d[0],
                    u = d[1],
                    e = (0, n.useState)(0),
                    v = (e[0], e[1]),
                    f = (0, n.useState)(0),
                    w = (f[0], f[1]),
                    g = i.query.id;
                console.log(g), (0, n.useEffect)(function() {
                    var b;
                    (b = (0, k.Z)(l().mark(function b() {
                        var c, d, e, f, g, h;
                        return l().wrap(function(b) {
                            for (;;) switch (b.prev = b.next) {
                                case 0:
                                    if (!a) {
                                        b.next = 27;
                                        break
                                    }
                                    return b.next = 3, (0, o.uN)(j);
                                case 3:
                                    if (d = (c = b.sent).ok, e = c.contract, d) {
                                        b.next = 8;
                                        break
                                    }
                                    return b.abrupt("return");
                                case 8:
                                    return b.prev = 8, b.next = 11, e.methods.getBalance().call();
                                case 11:
                                    return f = b.sent, console.log(f), u((0, o.PE)(f)), b.next = 16, e.methods.roi().call();
                                case 16:
                                    return v(g = b.sent), b.next = 20, e.methods.withdraw_fee().call();
                                case 20:
                                    w(h = b.sent), b.next = 27;
                                    break;
                                case 24:
                                    b.prev = 24, b.t0 = b.catch(8), console.log(b.t0);
                                case 27:
                                case "end":
                                    return b.stop()
                            }
                        }, b, null, [
                            [8, 24]
                        ])
                    })), function() {
                        return b.apply(this, arguments)
                    })()
                }, [a, j]);
                var r = [{
                        title: "Contract Balance",
                        desc: "".concat(a ? q + " BUSD" : "Connect wallet to see contract balance "),
                        small: !a
                    }, {
                        title: "Daily ROI",
                        desc: "".concat(z.ROI, "%")
                    }, {
                        title: "Withdrawal Fee",
                        desc: "".concat(z.WITHDRAWFEE, "%")
                    }, {
                        title: "Deposit Fee",
                        desc: "Marketing ".concat(z.DEPOSITFEEMARKETING, "% + Dev ").concat(z.DEV, "% ")
                    }, ],
                    b = function() {
                        return !!a || (t(), !1)
                    };
                return (0, m.jsxs)("div", {
                    className: "main px-4",
                    children: [(0, m.jsx)(J, {}), (0, m.jsxs)("div", {
                        className: "max-w-7xl w-full mx-auto py-10 ",
                        children: [(0, m.jsx)("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6",
                            children: r.map(function(a, b) {
                                return (0, m.jsxs)("div", {
                                    className: "bg-primary border border-white rounded-md p-4 text-black text-center text-[24px]",
                                    children: [(0, m.jsx)("h2", {
                                        children: a.title
                                    }), (0, m.jsx)("p", {
                                        className: "".concat(a.small && "text-sm"),
                                        children: a.desc
                                    })]
                                }, b)
                            })
                        }), (0, m.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-6",
                            children: [(0, m.jsx)(s, {
                                refAddress: g,
                                checkConnect: b
                            }), (0, m.jsx)(x, {
                                checkConnect: b
                            }), (0, m.jsx)(y, {
                                checkConnect: b
                            })]
                        }), (0, m.jsx)("div", {
                            className: "mt-6",
                            children: (0, m.jsx)(A, {})
                        }), (0, m.jsx)("div", {
                            children: (0, m.jsxs)("div", {
                                className: "bg-primary border border-white rounded-md p-4 text-black text-center text-[24px] mt-6 max-w-xl mx-auto w-full",
                                children: [(0, m.jsx)("h1", {
                                    className: "text-3xl font-bold",
                                    children: "STRATEGY"
                                }), (0, m.jsx)("p", {
                                    className: " uppercase text-lg max-w-[400px] mx-auto w-full mt-2",
                                    children: "In order to keep the miner pool always healthy"
                                }), (0, m.jsxs)("p", {
                                    className: "max-w-[400px] w-full mx-auto uppercase text-lg",
                                    children: [(0, m.jsx)("b", {
                                        children: "3 Times"
                                    }), " Per month deposit again the amount you earn"]
                                }), (0, m.jsxs)("p", {
                                    className: "max-w-[400px] w-full mx-auto uppercase text-lg",
                                    children: [(0, m.jsx)("b", {
                                        children: "1 Time"
                                    }), " Per month withdraw and keep them in your pocket"]
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        4843: function(d, b, a) {
            a.d(b, {
                Z: function() {
                    return n
                }
            });
            var e = a(85893),
                f = a(67294),
                g = a(85333),
                h = a(11111),
                i = {
                    src: "/_next/static/media/walletConnect.75198947.svg",
                    height: 512,
                    width: 512
                },
                j = {
                    src: "/_next/static/media/meta.40618fd6.svg",
                    height: 355,
                    width: 397
                },
                k = a(98517),
                c = a(25675),
                l = a.n(c),
                m = {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxWidth: 400,
                    width: "90%",
                    bgcolor: "white",
                    boxShadow: 24,
                    p: 2,
                    borderRadius: 4
                };

            function n(a) {
                var b = a.open,
                    c = (a.setOpen, a.handleClose),
                    n = (a.handleOpen, a.connect),
                    d = [{
                        name: "Metamask",
                        logo: j,
                        description: "Connect with the provider in your Browser",
                        handler: function() {
                            return console.log("CONNECT TO METAMASK")
                        },
                        connecter: k.Lj
                    }, {
                        name: "WalletConnect",
                        logo: i,
                        description: "Scan with WalletConnect to connect",
                        handler: function() {
                            return console.log("CONNECT TO WalletConnect")
                        },
                        connecter: k.Lw
                    }, ];
                return (0, e.jsx)("div", {
                    children: (0, e.jsx)(h.Z, {
                        open: b,
                        onClose: c,
                        "aria-labelledby": "modal-modal-title",
                        "aria-describedby": "modal-modal-description",
                        children: (0, e.jsx)(g.Z, {
                            sx: m,
                            children: d.map(function(a, b) {
                                return (0, e.jsxs)(f.Fragment, {
                                    children: [(0, e.jsxs)("button", {
                                        className: "  block w-full text-black py-4 md:py-6 hover:bg-gray-100 rounded-md transition-all duration-300 font-serif",
                                        onClick: function() {
                                            return n(a.connecter, a.name)
                                        },
                                        children: [(0, e.jsx)("div", {
                                            className: " w-8 md:w-12 mx-auto",
                                            children: (0, e.jsx)(l(), {
                                                src: a.logo,
                                                alt: ""
                                            })
                                        }), (0, e.jsx)("h2", {
                                            className: " font-bold text-lg md:text-xl mt-4 mb-2",
                                            children: a.name
                                        }), (0, e.jsx)("p", {
                                            className: "text-sm md:text-base text-gray-500 ",
                                            children: a.description
                                        })]
                                    }, b), b + 1 !== d.length && (0, e.jsx)("hr", {})]
                                }, b)
                            })
                        })
                    })
                })
            }
        },
        98517: function(f, b, a) {
            a.d(b, {
                GU: function() {
                    return g
                },
                Lj: function() {
                    return i
                },
                Lw: function() {
                    return h
                }
            });
            var c = a(30950),
                d = a(83929),
                e = a(97452),
                g = new e.J({
                    url: "https://mainnet.infura.io/v3/".concat("84842078b09946638c03157f83405213"),
                    appName: "",
                    supportedChainIds: [4]
                }),
                h = new d.zw({
                    rpc: {
                        1: "https://mainnet.infura.io/v3/84842078b09946638c03157f83405213"
                    },
                    bridge: "https://bridge.walletconnect.org",
                    qrcode: !0,
                    pollingInterval: 12e3,
                    chainId: 56
                }),
                i = new c._k({
                    supportedChainIds: [56]
                })
        },
        227: function(c, a, b) {
            b.d(a, {
                V: function() {
                    return e
                },
                i: function() {
                    return d
                }
            });
            var d = "0xC9baa0Bcfa920dd8F6feBd9BFA2fda74B34e69fB",
                e = [{
                    inputs: [],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "previousOwner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }, ],
                    name: "OwnershipTransferred",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "DailyRoi",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "Ref_Withdraw",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "alreadyInvested",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "approvedWithdrawal",
                    outputs: [{
                        internalType: "address",
                        name: "user_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }, ],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "checkAlready",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "claimDailyRewards",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "claimTime",
                    outputs: [{
                        internalType: "address",
                        name: "user_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "startTime",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, ],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_ref",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }, ],
                    name: "deposit",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "depositFee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [],
                    name: "dev",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "fee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getBalance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "init",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "investments",
                    outputs: [{
                        internalType: "address",
                        name: "user_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "invested",
                        type: "uint256"
                    }, ],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "max",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "min",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "refFee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "refTotalWithdraw",
                    outputs: [{
                        internalType: "address",
                        name: "ref_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "totalWithdraw",
                        type: "uint256"
                    }, ],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "ref_fee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "refferal",
                    outputs: [{
                        internalType: "address",
                        name: "ref_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "reward",
                        type: "uint256"
                    }, ],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "roi",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "signal_market",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "tokenAdress",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "totalRewards",
                    outputs: [{
                        internalType: "address",
                        name: "user_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }, ],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "totalWithdraw",
                    outputs: [{
                        internalType: "address",
                        name: "user_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }, ],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "unStake",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_userAddress",
                        type: "address"
                    }, ],
                    name: "userReward",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "weekly",
                    outputs: [{
                        internalType: "address",
                        name: "user_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "startTime",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, ],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "withdrawFee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [],
                    name: "withdraw_fee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "withdrawal",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, ]
        },
        57200: function(c, a, b) {
            b.d(a, {
                K: function() {
                    return e
                },
                T: function() {
                    return d
                }
            });
            var d = [{
                    inputs: [],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }, ],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }, ],
                    name: "Transfer",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, ],
                    name: "allowance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }, ],
                    name: "approve",
                    outputs: [{
                        internalType: "bool",
                        name: "success",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        internalType: "uint8",
                        name: "",
                        type: "uint8"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "name",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }, ],
                    name: "transfer",
                    outputs: [{
                        internalType: "bool",
                        name: "success",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }, ],
                    name: "transferFrom",
                    outputs: [{
                        internalType: "bool",
                        name: "success",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, ],
                e = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
        },
        89522: function(m, d, a) {
            a.d(d, {
                PE: function() {
                    return t
                },
                Xv: function() {
                    return w
                },
                Zd: function() {
                    return x
                },
                bn: function() {
                    return y
                },
                fD: function() {
                    return v
                },
                sC: function() {
                    return s
                },
                u6: function() {
                    return z
                },
                uN: function() {
                    return u
                }
            });
            var e, n, f, b = a(47568),
                g = a(34051),
                c = a.n(g),
                h = a(3283),
                o = a.n(h),
                p = a(227),
                q = a(57200),
                r = a(74931),
                s = function(a) {
                    return a ? a.length < 10 ? a : "".concat(a.slice(0, 5), "...").concat(a.slice(-5)) : ""
                },
                t = function(a) {
                    if (a) return a.length < 1 ? a : o().utils.fromWei(a, "ether")
                },
                u = (e = (0, b.Z)(c().mark(function a(b, d) {
                    var e;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                if (a.prev = 0, e = null, !d) {
                                    a.next = 8;
                                    break
                                }
                                return a.next = 5, new b.eth.Contract(q.T, d);
                            case 5:
                                e = a.sent, a.next = 11;
                                break;
                            case 8:
                                return a.next = 10, new b.eth.Contract(p.V, p.i);
                            case 10:
                                e = a.sent;
                            case 11:
                                return a.abrupt("return", {
                                    ok: !0,
                                    contract: e
                                });
                            case 14:
                                return a.prev = 14, a.t0 = a.catch(0), console.log(a.t0), a.abrupt("return", {
                                    ok: !1,
                                    contract: null
                                });
                            case 18:
                            case "end":
                                return a.stop()
                        }
                    }, a, null, [
                        [0, 14]
                    ])
                })), function(a, b) {
                    return e.apply(this, arguments)
                });
            (0, b.Z)(c().mark(function a(b, d) {
                var e;
                return c().wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                        case 0:
                            return a.prev = 0, a.next = 3, b.eth.getBalance(d);
                        case 3:
                            return e = t(e = a.sent), a.abrupt("return", Number(e).toFixed(4));
                        case 8:
                            return a.prev = 8, a.t0 = a.catch(0), console.log(a.t0), a.abrupt("return", 0);
                        case 12:
                        case "end":
                            return a.stop()
                    }
                }, a, null, [
                    [0, 8]
                ])
            }));
            var i, j, k, l, v = (f = (0, b.Z)(c().mark(function a(d) {
                    var e, f, g, h, i;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, u(d);
                            case 2:
                                if (f = (e = a.sent).ok, g = e.contract, f) {
                                    a.next = 8;
                                    break
                                }
                                return r.ZP.error("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"), a.abrupt("return");
                            case 8:
                                return h = r.ZP.loading("Please Wait Transaction is processing"), a.next = 11, d.eth.getAccounts();
                            case 11:
                                i = a.sent, r.ZP.loading("Please Confirm Transaction..", {
                                    id: h
                                }), g.methods.unStake().send({
                                    from: i[0]
                                }).on("transactionHash", function() {
                                    r.ZP.loading("Please wait to get confirmation of the transaction from blockchain", {
                                        id: h
                                    })
                                }).on("confirmation", function(a) {
                                    console.log("CONFIRMATION", a)
                                }).on("receipt", function() {
                                    var a = (0, b.Z)(c().mark(function a(b) {
                                        return c().wrap(function(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    r.ZP.success("Transaction Completed Successfully", {
                                                        id: h
                                                    }), setTimeout(function() {
                                                        window.location.reload(!1)
                                                    }, 1e3);
                                                case 2:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }, a)
                                    }));
                                    return function(b) {
                                        return a.apply(this, arguments)
                                    }
                                }()).on("error", function(a, b) {
                                    4001 === a.code ? r.ZP.error("Transaction Rejected", {
                                        id: h
                                    }) : r.ZP.error("Transaction Failed", {
                                        id: h
                                    })
                                });
                            case 14:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                })), function(a) {
                    return f.apply(this, arguments)
                }),
                w = (i = (0, b.Z)(c().mark(function a(d) {
                    var e, f, g, h, i;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, u(d);
                            case 2:
                                if (f = (e = a.sent).ok, g = e.contract, f) {
                                    a.next = 8;
                                    break
                                }
                                return r.ZP.error("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"), a.abrupt("return");
                            case 8:
                                return h = r.ZP.loading("Please Wait Transaction is processing"), a.next = 11, d.eth.getAccounts();
                            case 11:
                                i = a.sent, r.ZP.loading("Please Confirm Transaction..", {
                                    id: h
                                }), g.methods.claimDailyRewards().send({
                                    from: i[0]
                                }).on("transactionHash", function() {
                                    r.ZP.loading("Please wait to get confirmation of the transaction from blockchain", {
                                        id: h
                                    })
                                }).on("confirmation", function(a) {
                                    console.log("CONFIRMATION", a)
                                }).on("receipt", function() {
                                    var a = (0, b.Z)(c().mark(function a(b) {
                                        return c().wrap(function(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    r.ZP.success("Transaction Completed Successfully", {
                                                        id: h
                                                    }), setTimeout(function() {
                                                        window.location.reload(!1)
                                                    }, 1e3);
                                                case 2:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }, a)
                                    }));
                                    return function(b) {
                                        return a.apply(this, arguments)
                                    }
                                }()).on("error", function(a, b) {
                                    4001 === a.code ? r.ZP.error("Transaction Rejected", {
                                        id: h
                                    }) : r.ZP.error("Transaction Failed", {
                                        id: h
                                    })
                                });
                            case 14:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                })), function(a) {
                    return i.apply(this, arguments)
                }),
                x = (j = (0, b.Z)(c().mark(function a(d) {
                    var e, f, g, h, i;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, u(d);
                            case 2:
                                if (f = (e = a.sent).ok, g = e.contract, f) {
                                    a.next = 8;
                                    break
                                }
                                return r.ZP.error("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"), a.abrupt("return");
                            case 8:
                                return h = r.ZP.loading("Please Wait Transaction is processing"), a.next = 11, d.eth.getAccounts();
                            case 11:
                                i = a.sent, r.ZP.loading("Please Confirm Transaction..", {
                                    id: h
                                }), g.methods.withdrawal().send({
                                    from: i[0]
                                }).on("transactionHash", function() {
                                    r.ZP.loading("Please wait to get confirmation of the transaction from blockchain", {
                                        id: h
                                    })
                                }).on("confirmation", function(a) {
                                    console.log("CONFIRMATION", a)
                                }).on("receipt", function() {
                                    var a = (0, b.Z)(c().mark(function a(b) {
                                        return c().wrap(function(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    r.ZP.success("Transaction Completed Successfully", {
                                                        id: h
                                                    }), setTimeout(function() {
                                                        window.location.reload(!1)
                                                    }, 1e3);
                                                case 2:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }, a)
                                    }));
                                    return function(b) {
                                        return a.apply(this, arguments)
                                    }
                                }()).on("error", function(a, b) {
                                    4001 === a.code ? r.ZP.error("Transaction Rejected", {
                                        id: h
                                    }) : r.ZP.error("Transaction Failed", {
                                        id: h
                                    })
                                });
                            case 14:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                })), function(a) {
                    return j.apply(this, arguments)
                }),
                y = (k = (0, b.Z)(c().mark(function a(d) {
                    var e, f, g, h, i;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, u(d);
                            case 2:
                                if (f = (e = a.sent).ok, g = e.contract, f) {
                                    a.next = 8;
                                    break
                                }
                                return r.ZP.error("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"), a.abrupt("return");
                            case 8:
                                return h = r.ZP.loading("Please Wait Transaction is processing"), a.next = 11, d.eth.getAccounts();
                            case 11:
                                i = a.sent, r.ZP.loading("Please Confirm Transaction..", {
                                    id: h
                                }), g.methods.Ref_Withdraw().send({
                                    from: i[0]
                                }).on("transactionHash", function() {
                                    r.ZP.loading("Please wait to get confirmation of the transaction from blockchain", {
                                        id: h
                                    })
                                }).on("confirmation", function(a) {
                                    console.log("CONFIRMATION", a)
                                }).on("receipt", function() {
                                    var a = (0, b.Z)(c().mark(function a(b) {
                                        return c().wrap(function(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    r.ZP.success("Transaction Completed Successfully", {
                                                        id: h
                                                    }), setTimeout(function() {
                                                        window.location.reload(!1)
                                                    }, 1e3);
                                                case 2:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }, a)
                                    }));
                                    return function(b) {
                                        return a.apply(this, arguments)
                                    }
                                }()).on("error", function(a, b) {
                                    4001 === a.code ? r.ZP.error("Transaction Rejected", {
                                        id: h
                                    }) : r.ZP.error("Transaction Failed", {
                                        id: h
                                    })
                                });
                            case 14:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                })), function(a) {
                    return k.apply(this, arguments)
                }),
                z = (l = (0, b.Z)(c().mark(function a(d, e, f) {
                    var g, h, i, j, k, l, m, n, s, v, w, x;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, u(d, q.K);
                            case 2:
                                return h = (g = a.sent).ok, i = g.contract, a.next = 7, u(d);
                            case 7:
                                if (k = (j = a.sent).ok, l = j.contract, !(!h || !k)) {
                                    a.next = 13;
                                    break
                                }
                                return r.ZP.error("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"), a.abrupt("return");
                            case 13:
                                if (!(!e || 50 > Number(e))) {
                                    a.next = 16;
                                    break
                                }
                                return r.ZP.error("Minimum Stake amount is 50 BUSD."), a.abrupt("return");
                            case 16:
                                return m = r.ZP.loading("Please Wait Transaction is processing"), a.next = 19, d.eth.getAccounts();
                            case 19:
                                return n = a.sent, a.next = 22, i.methods.balanceOf(n[0]).call();
                            case 22:
                                if (s = t(s = a.sent), console.log(s), !(+s < e || 50 > +s)) {
                                    a.next = 28;
                                    break
                                }
                                return r.ZP.error("You dont have sufficient balance.", {
                                    id: m
                                }), a.abrupt("return");
                            case 28:
                                return a.next = 30, i.methods.allowance(n[0], p.i).call();
                            case 30:
                                return v = a.sent, a.next = 33, i.methods.totalSupply().call();
                            case 33:
                                if (w = a.sent, console.log(v, w), x = f || "0x8623A5F0920a0fd1d813a1E5d22435aaE75f02d1", !(+v > 0)) {
                                    a.next = 39;
                                    break
                                }
                                return l.methods.deposit(x, o().utils.toWei("".concat(e), "ether")).send({
                                    from: n[0]
                                }).on("transactionHash", function() {
                                    r.ZP.loading("Please wait to get confirmation of the transaction from blockchain", {
                                        id: m
                                    })
                                }).on("confirmation", function(a) {
                                    console.log("CONFIRMATION", a)
                                }).on("receipt", function() {
                                    var a = (0, b.Z)(c().mark(function a(b) {
                                        return c().wrap(function(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    r.ZP.success("Transaction Completed Successfully", {
                                                        id: m
                                                    }), setTimeout(function() {
                                                        window.location.reload(!1)
                                                    }, 1e3);
                                                case 2:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }, a)
                                    }));
                                    return function(b) {
                                        return a.apply(this, arguments)
                                    }
                                }()).on("error", function(a, b) {
                                    4001 === a.code ? r.ZP.error("Transaction Rejected", {
                                        id: m
                                    }) : r.ZP.error("Transaction Failed", {
                                        id: m
                                    })
                                }), a.abrupt("return");
                            case 39:
                                r.ZP.loading("Please Allow our protocal to use your token", {
                                    id: m
                                }), i.methods.approve(p.i, w).send({
                                    from: n[0]
                                }).on("transactionHash", function() {
                                    r.ZP.loading("Please wait to get confirmation of the transaction from blockchain", {
                                        id: m
                                    })
                                }).on("confirmation", function(a) {
                                    console.log("CONFIRMATION", a)
                                }).on("receipt", function() {
                                    var a = (0, b.Z)(c().mark(function a(d) {
                                        return c().wrap(function(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    r.ZP.loading("Please confirm transaction to deposit", {
                                                        id: m
                                                    }), l.methods.deposit(f, o().utils.toWei(e, "ether")).send({
                                                        from: n[0]
                                                    }).on("transactionHash", function() {
                                                        r.ZP.loading("Please wait to get confirmation of the transaction from blockchain", {
                                                            id: m
                                                        })
                                                    }).on("confirmation", function(a) {
                                                        console.log("CONFIRMATION", a)
                                                    }).on("receipt", function() {
                                                        var a = (0, b.Z)(c().mark(function a(b) {
                                                            return c().wrap(function(a) {
                                                                for (;;) switch (a.prev = a.next) {
                                                                    case 0:
                                                                        r.ZP.success("Transaction Completed Successfully", {
                                                                            id: m
                                                                        }), setTimeout(function() {
                                                                            window.location.reload(!1)
                                                                        }, 1e3);
                                                                    case 2:
                                                                    case "end":
                                                                        return a.stop()
                                                                }
                                                            }, a)
                                                        }));
                                                        return function(b) {
                                                            return a.apply(this, arguments)
                                                        }
                                                    }()).on("error", function(a, b) {
                                                        4001 === a.code ? r.ZP.error("Transaction Rejected", {
                                                            id: m
                                                        }) : r.ZP.error("Transaction Failed", {
                                                            id: m
                                                        })
                                                    });
                                                case 2:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }, a)
                                    }));
                                    return function(b) {
                                        return a.apply(this, arguments)
                                    }
                                }()).on("error", function(a, b) {
                                    4001 === a.code ? r.ZP.error("Transaction Rejected", {
                                        id: m
                                    }) : r.ZP.error("Transaction Failed", {
                                        id: m
                                    })
                                });
                            case 41:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                })), function(a, b, c) {
                    return l.apply(this, arguments)
                })
        }
    }
])