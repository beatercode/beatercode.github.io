(window.webpackJsonp = window.webpackJsonp || []).push([
	[8], {
		733: function(t, e, r) {
			"use strict";
			var l = r(16),
				n = r(10),
				o = r(106),
				c = r(41),
				h = r(56),
				d = r(23),
				f = r(13),
				m = r(381),
				v = r(235),
				k = r(734),
				_ = r(735),
				y = r(128),
				C = r(736),
				w = [],
				x = n(w.sort),
				B = n(w.push),
				A = f((function() {
					w.sort(void 0)
				})),
				F = f((function() {
					w.sort(null)
				})),
				E = v("sort"),
				S = !f((function() {
					if (y) return y < 70;
					if (!(k && k > 3)) {
						if (_) return !0;
						if (C) return C < 603;
						var code, t, e, r, l = "";
						for (code = 65; code < 76; code++) {
							switch (t = String.fromCharCode(code), code) {
								case 66:
								case 69:
								case 70:
								case 72:
									e = 3;
									break;
								case 68:
								case 71:
									e = 4;
									break;
								default:
									e = 2
							}
							for (r = 0; r < 47; r++) w.push({
								k: t + r,
								v: e
							})
						}
						for (w.sort((function(a, b) {
								return b.v - a.v
							})), r = 0; r < w.length; r++) t = w[r].k.charAt(0), l.charAt(l.length - 1) !== t && (l += t);
						return "DGBEFHACIJK" !== l
					}
				}));
			l({
				target: "Array",
				proto: !0,
				forced: A || !F || !E || !S
			}, {
				sort: function(t) {
					void 0 !== t && o(t);
					var e = c(this);
					if (S) return void 0 === t ? x(e) : x(e, t);
					var r, l, n = [],
						f = h(e);
					for (l = 0; l < f; l++) l in e && B(n, e[l]);
					for (m(n, function(t) {
							return function(e, r) {
								return void 0 === r ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, r) || 0 : d(e) > d(r) ? 1 : -1
							}
						}(t)), r = n.length, l = 0; l < r;) e[l] = n[l++];
					for (; l < f;) delete e[l++];
					return e
				}
			})
		},
		734: function(t, e, r) {
			var l = r(105).match(/firefox\/(\d+)/i);
			t.exports = !!l && +l[1]
		},
		735: function(t, e, r) {
			var l = r(105);
			t.exports = /MSIE|Trident/.test(l)
		},
		736: function(t, e, r) {
			var l = r(105).match(/AppleWebKit\/(\d+)\./);
			t.exports = !!l && +l[1]
		},
		739: function(t, e, r) {
			var content = r(753);
			content.__esModule && (content = content.default), "string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, r(234).default)("533a4b3a", content, !0, {
				sourceMap: !1
			})
		},
		752: function(t, e, r) {
			"use strict";
			r(739)
		},
		753: function(t, e, r) {
			var l = r(233)(!1);
			l.push([t.i, '.img-fluid{min-width:100%}.single-partner-wrap{min-height:300px;border-radius:10px;content:"spinner-grow text-primary"}.big-checkbox{width:20px;height:20px}.chLabel{padding-left:10px}', ""]), t.exports = l
		},
		771: function(t, e, r) {
			"use strict";
			r.r(e);
			var l = r(15),
				n = (r(55), r(68), r(236), r(104), r(733), r(129), r(130), r(42), r(131), r(21), r(132), r(82), r(67), {
					head: {
						title: "avaxbayc | Gallery"
					},
					data: function() {
						return {
							allRanks: [],
							punks: [],
							allPunks: [],
							legends: [15, 1093, 1142, 2306, 4412, 4441, 5027, 5046, 5068, 5767, 5788, 5818, 7387, 7420, 7450, 8663, 8686, 8708, 9491, 9522, 9536, 9943, 9969],
							legendSelect: !1,
							boredSelect: !1,
							last_add: !1,
							loading: !1,
							typing: !1,
							showAttributes: !1,
							searchById: "",
							filterId: "",
							tmpFilters: "",
							allFilters: "",
							checkedFilters: {},
							checkedBackground: {},
							tmpBackgrounds: "",
							allBackgrounds: "",
							tmpHat: "",
							allHat: "",
							tmpEyes: "",
							allEyes: "",
							tmpClothes: "",
							allClothes: "",
							tmpMouth: "",
							allMouth: "",
							tmpFur: "",
							allFur: "",
							tmpEarring: "",
							allEarring: "",
							searchBackground: "",
							searchHat: "",
							searchEyes: "",
							searchClothes: "",
							searchMouth: "",
							searchFur: "",
							searchEarring: "",
							sortBy: {
								token_id_highest: !0
							},
							checkbox: {
								all: !0
							},
							types: {
								all: !0
							},
							attr_count: {
								all: !0
							}
						}
					},
					mounted: function() {
						this.getAllPunks(), NioApp.components.docReady[21](jQuery), NioApp.components.winLoad[0](jQuery)
					},
					created: function() {
						var t = this;
						window.onscroll = function() {
							document.documentElement.scrollTop + window.innerHeight + 400 > document.documentElement.offsetHeight && ("" !== t.filterId || t.legendSelect || t.addPunks())
						}
					},
					methods: {
						filterAttributesFront: function(t) {
							if ("Background" == t) {
								this.tmpBackgrounds = {};
								for (var e = 0, r = Object.keys(this.allBackgrounds); e < r.length; e++) {
									var l = r[e];
									l.toLowerCase().startsWith(this.searchBackground.toLowerCase()) > 0 && (this.tmpBackgrounds["".concat(l)] = this.allBackgrounds[l])
								}
							}
							if ("Hat" == t) {
								this.tmpHat = {};
								for (var n = 0, o = Object.keys(this.allHat); n < o.length; n++) {
									var c = o[n];
									c.toLowerCase().startsWith(this.searchHat.toLowerCase()) > 0 && (this.tmpHat["".concat(c)] = this.allHat[c])
								}
							}
							if ("Eyes" == t) {
								this.tmpEyes = {};
								for (var h = 0, d = Object.keys(this.allEyes); h < d.length; h++) {
									var f = d[h];
									f.toLowerCase().startsWith(this.searchEyes.toLowerCase()) > 0 && (this.tmpEyes["".concat(f)] = this.allEyes[f])
								}
							}
							if ("Mouth" == t) {
								this.tmpMouth = {};
								for (var m = 0, v = Object.keys(this.allMouth); m < v.length; m++) {
									var k = v[m];
									k.toLowerCase().startsWith(this.searchMouth.toLowerCase()) > 0 && (this.tmpMouth["".concat(k)] = this.allMouth[k])
								}
							}
							if ("Fur" == t) {
								this.tmpFur = {};
								for (var _ = 0, y = Object.keys(this.allFur); _ < y.length; _++) {
									var C = y[_];
									C.toLowerCase().startsWith(this.searchFur.toLowerCase()) > 0 && (this.tmpFur["".concat(C)] = this.allFur[C])
								}
							}
							if ("Earring" == t) {
								this.tmpEarring = {};
								for (var w = 0, x = Object.keys(this.allEarring); w < x.length; w++) {
									var B = x[w];
									B.toLowerCase().startsWith(this.searchEarring.toLowerCase()) > 0 && (this.tmpEarring["".concat(B)] = this.allEarring[B])
								}
							}
							if ("Clothes" == t) {
								this.tmpClothes = {};
								for (var A = 0, F = Object.keys(this.allClothes); A < F.length; A++) {
									var E = F[A];
									E.toLowerCase().startsWith(this.searchClothes.toLowerCase()) > 0 && (this.tmpClothes["".concat(E)] = this.allClothes[E])
								}
							}
						},
						changeSortBy: function(t) {
							var e = this;
							for (var r in this.searchById = "", this.sortBy) this.sortBy[r] = t.target.getAttribute("data-id") == r;
							setTimeout((function() {
								e.filterAttr()
							}), 200)
						},
						changeType: function(t) {
							var e = this;
							if (this.searchById = "", "all" == t.target.getAttribute("data-id") && this.types.all)
								for (var r in this.types) "all" != r && (this.types[r] = !1);
							else this.types.all = "";
							setTimeout((function() {
								e.filterAttr()
							}), 200)
						},
						addPunks: function() {
							var t = this;
							this.loading = !0, this.last_add || (this.last_add = setTimeout((function() {
								var e = !1;
								for (var s in t.sortBy) t.sortBy[s] && (e = s);
								e && t.allPunks.sort((function(a, b) {
									return b.rank = t.allRanks[b.tokenId], a.rank = t.allRanks[a.tokenId], "token_id_lowest" === e ? a.offerPrice - b.offerPrice : "token_id_highest" === e ? b.offerPrice - a.offerPrice : "rank_highest" === e ? a.rank - b.rank : "rank_lowest" === e ? b.rank - a.rank : void 0
								}));
								for (var r = t.punks.length, i = r; i < r + 15 && i < t.allPunks.length; i++) t.allPunks[i].rank = t.allRanks[t.allPunks[i].tokenId], t.boredSelect && t.legends.includes(t.allPunks[i].tokenId) || t.punks.push(t.allPunks[i]);
								clearTimeout(t.last_add), t.last_add = !1, t.loading = !1
							}), 500))
						},
						resetAttributes: function() {
							var t = this;
							this.allBackgrounds = [], this.tmpBackgrounds = [], this.allHat = [], this.tmpHat = [], this.allEyes = [], this.tmpEyes = [], this.allClothes = [], this.tmpClothes = [], this.allMouth = [], this.tmpMouth = [], this.allFur = [], this.tmpFur = [], this.allEarring = [], this.tmpEarring = [], this.searchBackground = "", this.searchHat = "", this.searchEyes = "", this.searchClothes = "", this.searchMouth = "", this.searchFur = "", this.searchEarring = "", this.checkedFilters = [], this.legendSelect = !1, this.boredSelect = !1, setTimeout((function() {
								t.getAttributes()
							}), 500), setTimeout((function() {
								t.filterAttr()
							}), 1e3)
						},
						getAttributes: function() {
							this.allBackgrounds = [], this.allHat = [], this.allEyes = [], this.allClothes = [], this.allMouth = [], this.allFur = [], this.allEarring = [], this.allFilters = JSON.parse(JSON.stringify(this.$filterList));
							for (var i = 0; i < this.allFilters.length; i++) "Background" == this.allFilters[i].title && (this.allBackgrounds = this.allFilters[i].items), "Hat" == this.allFilters[i].title && (this.allHat = this.allFilters[i].items), "Eyes" == this.allFilters[i].title && (this.allEyes = this.allFilters[i].items), "Clothes" == this.allFilters[i].title && (this.allClothes = this.allFilters[i].items), "Mouth" == this.allFilters[i].title && (this.allMouth = this.allFilters[i].items), "Fur" == this.allFilters[i].title && (this.allFur = this.allFilters[i].items), "Earring" == this.allFilters[i].title && (this.allEarring = this.allFilters[i].items);
							this.tmpBackgrounds = this.allBackgrounds, this.tmpClothes = this.allClothes, this.tmpHat = this.allHat, this.tmpEyes = this.allEyes, this.tmpFur = this.allFur, this.tmpMouth = this.allMouth, this.tmpEarring = this.allEarring
						},
						fetchSomething: function() {
							var t = this;
							return Object(l.a)(regeneratorRuntime.mark((function e() {
								var r, l, n, o, c, p;
								return regeneratorRuntime.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return r = JSON.parse(JSON.stringify(t.$apeList)), e.next = 3, t.$axios.$get("https://avaxbayc.com/backend/all");
										case 3:
											for (c in l = e.sent, n = JSON.parse(l.msg), o = [], t.countLegends = 0, t.countBids = 0, t.countOffered = 0, n) p = r[n[c].token_id], n[c].data.punksOfferedForSale && n[c].data.punksOfferedForSale[1] && n[c].data.punksOfferedForSale[3] > 0 && (t.countOffered++, p.offerPrice = window.web3.utils.fromWei(n[c].data.punksOfferedForSale[3]), p.bid = n[c].data.punkBids, p.offer = n[c].data.punksOfferedForSale, p.owner = n[c].data.owner, o.push(p));
											t.allPunks = o;
										case 11:
										case "end":
											return e.stop()
									}
								}), e)
							})))()
						},
						getAllPunks: function() {
							this.legendSelect = !1, this.boredSelect = !1, this.fetchSomething(), this.allRanks = JSON.parse(JSON.stringify(this.$apeRanks))[0], this.getAttributes(), this.filterAttr()
						},
						searchingById: function() {
							var t = this;
							if (this.punks = [], this.loading = !0, 0 == this.filterId.length) this.filterAttr();
							else
								for (var e = function(i) {
										if (t.allPunks[i].rank = t.allRanks[t.allPunks[i].tokenId], t.allPunks[i].tokenId == t.filterId) return setTimeout((function() {
											t.punks.push(t.allPunks[i])
										}), 500), "break"
									}, i = 0; i < this.allPunks.length; i++) {
									if ("break" === e(i)) break
								}
							this.loading = !1
						},
						showLegends: function() {
							this.legendSelect = !0, this.boredSelect = !1, this.filterAttr()
						},
						showBoreds: function() {
							this.legendSelect = !1, this.boredSelect = !0, this.filterAttr()
						},
						setFiltersAttributes: function(t, e) {
							var r = e.target.value;
							r = r.toString().replace(/\s/g, "_"), this.checkedFilters[t + "_" + r] = e.target.checked, this.filterAttr()
						},
						filterAttr: function() {
							var t = this;
							this.loading = !0, this.punks = [];
							for (var e = this.allPunks, r = [], l = 0, n = Object.keys(this.checkedFilters); l < n.length; l++) {
								var o = n[l];
								this.checkedFilters[o] && r.push(o)
							}
							var c = [],
								h = [];
							r.map((function(t) {
								c = e.filter((function(e) {
									return e.attributes.includes(t)
								}))
							})), c.length > 0 && (h = c), h.length > 0 && (e = h);
							var d = !1;
							for (var s in this.sortBy) this.sortBy[s] && (d = s);
							d && e.sort((function(a, b) {
								return b.rank = t.allRanks[b.tokenId], a.rank = t.allRanks[a.tokenId], "token_id_lowest" === d ? a.offerPrice - b.offerPrice : "token_id_highest" === d ? b.offerPrice - a.offerPrice : "rank_highest" === d ? a.rank - b.rank : "rank_lowest" === d ? b.rank - a.rank : void 0
							}));
							for (var i = 0; i < 15 && i < e.length; i++) e[i].rank = this.allRanks[e[i].tokenId], this.punks.push(e[i]);
							this.loading = !1
						}
					},
					watch: {
						filterId: function(t, e) {
							var r = this;
							this.loading = !0, this.typing || setTimeout((function() {
								r.searchingById(), r.typing = !1
							}), 1e3), this.typing = !0
						},
						searchBackground: function(t, e) {
							this.filterAttributesFront("Background")
						},
						searchHat: function(t, e) {
							this.filterAttributesFront("Hat")
						},
						searchEyes: function(t, e) {
							this.filterAttributesFront("Eye")
						},
						searchClothes: function(t, e) {
							this.filterAttributesFront("Clothes")
						},
						searchMouth: function(t, e) {
							this.filterAttributesFront("Mouth")
						},
						searchFur: function(t, e) {
							this.filterAttributesFront("Fur")
						},
						searchEarring: function(t, e) {
							this.filterAttributesFront("Earring")
						}
					}
				}),
				o = (r(752), r(40)),
				component = Object(o.a)(n, (function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("div", {
						staticClass: "main"
					}, [t._m(0), t._v(" "), r("div", {
						staticClass: "modal fade",
						attrs: {
							id: "exampleModal",
							tabindex: "-1",
							role: "dialog",
							"aria-labelledby": "exampleModalLabel",
							"aria-hidden": "true"
						}
					}, [r("div", {
						staticClass: "modal-dialog",
						attrs: {
							role: "document"
						}
					}, [r("div", {
						staticClass: "modal-content"
					}, [t._m(1), t._v(" "), r("div", {
						staticClass: "modal-body"
					}, [r("ul", [r("li", [t._m(2), t._v(" "), r("div", {
						staticClass: "collapse",
						attrs: {
							id: "collapseBG"
						}
					}, [r("div", {
						staticClass: "card card-body",
						staticStyle: {
							padding: "0rem"
						}
					}, [r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.searchBackground,
							expression: "searchBackground"
						}],
						staticClass: "form-control input",
						attrs: {
							type: "text",
							placeholder: "Filter Backgrounds"
						},
						domProps: {
							value: t.searchBackground
						},
						on: {
							input: function(e) {
								e.target.composing || (t.searchBackground = e.target.value)
							}
						}
					}), t._v(" "), t._l(t.tmpBackgrounds, (function(e, l, n) {
						return r("div", [r("div", {
							staticClass: "form-check d-flex align-items-center text-center",
							staticStyle: {
								direction: "ltr"
							}
						}, [r("input", {
							staticClass: "form-check-input mt-0 mr-3",
							attrs: {
								type: "checkbox",
								id: "check" + l
							},
							domProps: {
								value: "" + l
							},
							on: {
								change: function(e) {
									return t.setFiltersAttributes("Background", e)
								}
							}
						}), t._v(" "), r("label", {
							staticClass: "form-check-label small",
							staticStyle: {
								"padding-left": "20%",
								"font-size": "100%"
							},
							attrs: {
								for: "check" + l
							}
						}, [r("strong", [t._v(t._s(l))]), t._v(" (" + t._s(e) + ")\n                        ")])])])
					}))], 2)])]), t._v(" "), r("li", [t._m(3), t._v(" "), r("div", {
						staticClass: "collapse",
						attrs: {
							id: "collapseHat"
						}
					}, [r("div", {
						staticClass: "card card-body",
						staticStyle: {
							padding: "0rem"
						}
					}, [r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.searchHat,
							expression: "searchHat"
						}],
						staticClass: "form-control input",
						attrs: {
							type: "text",
							placeholder: "Filter Hat"
						},
						domProps: {
							value: t.searchHat
						},
						on: {
							input: function(e) {
								e.target.composing || (t.searchHat = e.target.value)
							}
						}
					}), t._v(" "), t._l(t.tmpHat, (function(e, l, n) {
						return r("div", [r("div", {
							staticClass: "form-check d-flex align-items-center text-center",
							staticStyle: {
								direction: "ltr"
							}
						}, [r("input", {
							staticClass: "form-check-input mt-0 mr-3",
							attrs: {
								type: "checkbox",
								id: "check" + l
							},
							domProps: {
								value: "" + l
							},
							on: {
								change: function(e) {
									return t.setFiltersAttributes("Hat", e)
								}
							}
						}), t._v(" "), r("label", {
							staticClass: "form-check-label small",
							staticStyle: {
								"padding-left": "20%",
								"font-size": "100%"
							},
							attrs: {
								for: "check" + l
							}
						}, [r("strong", [t._v(t._s(l))]), t._v(" (" + t._s(e) + ")\n                        ")])])])
					}))], 2)])]), t._v(" "), r("li", [t._m(4), t._v(" "), r("div", {
						staticClass: "collapse",
						attrs: {
							id: "collapseEarring"
						}
					}, [r("div", {
						staticClass: "card card-body",
						staticStyle: {
							padding: "0rem"
						}
					}, [r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.searchEarring,
							expression: "searchEarring"
						}],
						staticClass: "form-control input",
						attrs: {
							type: "text",
							placeholder: "Filter Earring"
						},
						domProps: {
							value: t.searchEarring
						},
						on: {
							input: function(e) {
								e.target.composing || (t.searchEarring = e.target.value)
							}
						}
					}), t._v(" "), t._l(t.tmpEarring, (function(e, l, n) {
						return r("div", [r("div", {
							staticClass: "form-check d-flex align-items-center text-center",
							staticStyle: {
								direction: "ltr"
							}
						}, [r("input", {
							staticClass: "form-check-input mt-0 mr-3",
							attrs: {
								type: "checkbox",
								id: "check" + l
							},
							domProps: {
								value: "" + l
							},
							on: {
								change: function(e) {
									return t.setFiltersAttributes("Earring", e)
								}
							}
						}), t._v(" "), r("label", {
							staticClass: "form-check-label small",
							staticStyle: {
								"padding-left": "20%",
								"font-size": "100%"
							},
							attrs: {
								for: "check" + l
							}
						}, [r("strong", [t._v(t._s(l))]), t._v(" (" + t._s(e) + ")\n                        ")])])])
					}))], 2)])]), t._v(" "), r("li", [t._m(5), t._v(" "), r("div", {
						staticClass: "collapse",
						attrs: {
							id: "collapseMouth"
						}
					}, [r("div", {
						staticClass: "card card-body",
						staticStyle: {
							padding: "0rem"
						}
					}, [r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.searchMouth,
							expression: "searchMouth"
						}],
						staticClass: "form-control input",
						attrs: {
							type: "text",
							placeholder: "Filter Mouth"
						},
						domProps: {
							value: t.searchMouth
						},
						on: {
							input: function(e) {
								e.target.composing || (t.searchMouth = e.target.value)
							}
						}
					}), t._v(" "), t._l(t.tmpMouth, (function(e, l, n) {
						return r("div", [r("div", {
							staticClass: "form-check d-flex align-items-center text-center",
							staticStyle: {
								direction: "ltr"
							}
						}, [r("input", {
							staticClass: "form-check-input mt-0 mr-3",
							attrs: {
								type: "checkbox",
								id: "check" + l
							},
							domProps: {
								value: "" + l
							},
							on: {
								change: function(e) {
									return t.setFiltersAttributes("Earring", e)
								}
							}
						}), t._v(" "), r("label", {
							staticClass: "form-check-label small",
							staticStyle: {
								"padding-left": "20%",
								"font-size": "100%"
							},
							attrs: {
								for: "check" + l
							}
						}, [r("strong", [t._v(t._s(l))]), t._v(" (" + t._s(e) + ")\n                        ")])])])
					}))], 2)])]), t._v(" "), r("li", [t._m(6), t._v(" "), r("div", {
						staticClass: "collapse",
						attrs: {
							id: "collapseClothes"
						}
					}, [r("div", {
						staticClass: "card card-body",
						staticStyle: {
							padding: "0rem"
						}
					}, [r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.searchClothes,
							expression: "searchClothes"
						}],
						staticClass: "form-control input",
						attrs: {
							type: "text",
							placeholder: "Filter Clothes"
						},
						domProps: {
							value: t.searchClothes
						},
						on: {
							input: function(e) {
								e.target.composing || (t.searchClothes = e.target.value)
							}
						}
					}), t._v(" "), t._l(t.tmpClothes, (function(e, l, n) {
						return r("div", [r("div", {
							staticClass: "form-check d-flex align-items-center text-center",
							staticStyle: {
								direction: "ltr"
							}
						}, [r("input", {
							staticClass: "form-check-input mt-0 mr-3",
							attrs: {
								type: "checkbox",
								id: "check" + l
							},
							domProps: {
								value: "" + l
							},
							on: {
								change: function(e) {
									return t.setFiltersAttributes("Clothes", e)
								}
							}
						}), t._v(" "), r("label", {
							staticClass: "form-check-label small",
							staticStyle: {
								"padding-left": "20%",
								"font-size": "100%"
							},
							attrs: {
								for: "check" + l
							}
						}, [r("strong", [t._v(t._s(l))]), t._v(" (" + t._s(e) + ")\n                        ")])])])
					}))], 2)])]), t._v(" "), r("li", [t._m(7), t._v(" "), r("div", {
						staticClass: "collapse",
						attrs: {
							id: "collapseFur"
						}
					}, [r("div", {
						staticClass: "card card-body",
						staticStyle: {
							padding: "0rem"
						}
					}, [r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.searchFur,
							expression: "searchFur"
						}],
						staticClass: "form-control input",
						attrs: {
							type: "text",
							placeholder: "Filter Fur"
						},
						domProps: {
							value: t.searchFur
						},
						on: {
							input: function(e) {
								e.target.composing || (t.searchFur = e.target.value)
							}
						}
					}), t._v(" "), t._l(t.tmpFur, (function(e, l, n) {
						return r("div", [r("div", {
							staticClass: "form-check d-flex align-items-center text-center",
							staticStyle: {
								direction: "ltr"
							}
						}, [r("input", {
							staticClass: "form-check-input mt-0 mr-3",
							attrs: {
								type: "checkbox",
								id: "check" + l
							},
							domProps: {
								value: "" + l
							},
							on: {
								change: function(e) {
									return t.setFiltersAttributes("Fur", e)
								}
							}
						}), t._v(" "), r("label", {
							staticClass: "form-check-label small",
							staticStyle: {
								"padding-left": "20%",
								"font-size": "100%"
							},
							attrs: {
								for: "check" + l
							}
						}, [r("strong", [t._v(t._s(l))]), t._v(" (" + t._s(e) + ")\n                        ")])])])
					}))], 2)])]), t._v(" "), r("li", [t._m(8), t._v(" "), r("div", {
						staticClass: "collapse",
						attrs: {
							id: "collapseEyes"
						}
					}, [r("div", {
						staticClass: "card card-body",
						staticStyle: {
							padding: "0rem"
						}
					}, [r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.searchEyes,
							expression: "searchEyes"
						}],
						staticClass: "form-control input",
						attrs: {
							type: "text",
							placeholder: "Filter Eyes"
						},
						domProps: {
							value: t.searchEyes
						},
						on: {
							input: function(e) {
								e.target.composing || (t.searchEyes = e.target.value)
							}
						}
					}), t._v(" "), t._l(t.tmpEyes, (function(e, l, n) {
						return r("div", [r("div", {
							staticClass: "form-check d-flex align-items-center text-center",
							staticStyle: {
								direction: "ltr"
							}
						}, [r("input", {
							staticClass: "form-check-input mt-0 mr-3",
							attrs: {
								type: "checkbox",
								id: "check" + l
							},
							domProps: {
								value: "" + l
							},
							on: {
								change: function(e) {
									return t.setFiltersAttributes("Eyes", e)
								}
							}
						}), t._v(" "), r("label", {
							staticClass: "form-check-label small",
							staticStyle: {
								"padding-left": "20%",
								"font-size": "100%"
							},
							attrs: {
								for: "check" + l
							}
						}, [r("strong", [t._v(t._s(l))]), t._v(" (" + t._s(e) + ")\n                        ")])])])
					}))], 2)])])])]), t._v(" "), r("div", {
						staticClass: "modal-footer"
					}, [r("button", {
						staticClass: "btn btn-secondary",
						attrs: {
							type: "button",
							"data-dismiss": "modal"
						}
					}, [t._v("Close")]), t._v(" "), r("button", {
						staticClass: "btn btn-danger",
						attrs: {
							type: "button"
						},
						on: {
							click: t.resetAttributes
						}
					}, [t._v("Reset Filter")])])])])]), t._v(" "), r("div", {
						staticClass: "module ptb-100"
					}, [r("div", {
						staticClass: "container"
					}, [r("div", {
						staticClass: "row"
					}, [r("div", {
						staticClass: "col-lg-3 col-md-3 sidebar"
					}, [r("aside", {
						staticClass: "widget widget-categories"
					}, [r("h3", {
						staticClass: "text-primary"
					}, [t._v("Found\n                "), r("strong", {
						staticClass: "text-primary-alt"
					}, [t._v(t._s(this.allPunks.length.toLocaleString()))])]), t._v(" "), r("ul", [r("li", [r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.filterId,
							expression: "filterId"
						}],
						staticClass: "form-control input bring-to-front",
						attrs: {
							type: "text",
							id: "byId",
							name: "byId",
							placeholder: "Search By Id"
						},
						domProps: {
							value: t.filterId
						},
						on: {
							input: function(e) {
								e.target.composing || (t.filterId = e.target.value)
							}
						}
					})]), t._v(" "), t._m(9), t._v(" "), r("div", {
						staticClass: "text-white-50"
					}, [r("p", {
						staticClass: "sidebarHeader mt-2 text-white-50"
					}, [t._v("\n                    Sort By\n                  ")]), t._v(" "), r("div", [r("div", {
						staticClass: "form-group form-check-inline text-white-50"
					}, [r("div", {
						staticClass: "chContainer"
					}, [r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.sortBy.token_id_highest,
							expression: "sortBy.token_id_highest"
						}],
						staticClass: "big-checkbox bring-to-front",
						attrs: {
							id: "token_id_highest",
							"data-id": "token_id_highest",
							type: "checkbox"
						},
						domProps: {
							checked: Array.isArray(t.sortBy.token_id_highest) ? t._i(t.sortBy.token_id_highest, null) > -1 : t.sortBy.token_id_highest
						},
						on: {
							change: [function(e) {
								var r = t.sortBy.token_id_highest,
									l = e.target,
									n = !!l.checked;
								if (Array.isArray(r)) {
									var o = t._i(r, null);
									l.checked ? o < 0 && t.$set(t.sortBy, "token_id_highest", r.concat([null])) : o > -1 && t.$set(t.sortBy, "token_id_highest", r.slice(0, o).concat(r.slice(o + 1)))
								} else t.$set(t.sortBy, "token_id_highest", n)
							}, function(e) {
								return t.changeSortBy(e)
							}]
						}
					}), t._v(" "), r("span", {
						staticClass: "checkmark"
					})]), t._v(" "), r("label", {
						staticClass: "form-check-label chLabel bring-to-front",
						attrs: {
							for: "token_id_highest"
						}
					}, [t._v("Highest\n                        Price")])])]), t._v(" "), r("div", {
						staticClass: "form-group form-check-inline"
					}, [r("div", {
						staticClass: "chContainer "
					}, [r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.sortBy.token_id_lowest,
							expression: "sortBy.token_id_lowest"
						}],
						staticClass: "big-checkbox bring-to-front",
						attrs: {
							id: "token_id_lowest",
							"data-id": "token_id_lowest",
							type: "checkbox"
						},
						domProps: {
							checked: Array.isArray(t.sortBy.token_id_lowest) ? t._i(t.sortBy.token_id_lowest, null) > -1 : t.sortBy.token_id_lowest
						},
						on: {
							change: [function(e) {
								var r = t.sortBy.token_id_lowest,
									l = e.target,
									n = !!l.checked;
								if (Array.isArray(r)) {
									var o = t._i(r, null);
									l.checked ? o < 0 && t.$set(t.sortBy, "token_id_lowest", r.concat([null])) : o > -1 && t.$set(t.sortBy, "token_id_lowest", r.slice(0, o).concat(r.slice(o + 1)))
								} else t.$set(t.sortBy, "token_id_lowest", n)
							}, function(e) {
								return t.changeSortBy(e)
							}]
						}
					}), t._v(" "), r("span", {
						staticClass: "checkmark"
					})]), t._v(" "), r("label", {
						staticClass: "form-check-label chLabel bring-to-front",
						attrs: {
							for: "token_id_lowest"
						}
					}, [t._v("Lowest Price")])])]), t._v(" "), r("div", [r("div", {
						staticClass: "form-group form-check-inline text-white-50"
					}, [r("div", {
						staticClass: "chContainer"
					}, [r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.sortBy.rank_lowest,
							expression: "sortBy.rank_lowest"
						}],
						staticClass: "big-checkbox bring-to-front",
						attrs: {
							id: "rank_lowest",
							"data-id": "rank_lowest",
							type: "checkbox"
						},
						domProps: {
							checked: Array.isArray(t.sortBy.rank_lowest) ? t._i(t.sortBy.rank_lowest, null) > -1 : t.sortBy.rank_lowest
						},
						on: {
							change: [function(e) {
								var r = t.sortBy.rank_lowest,
									l = e.target,
									n = !!l.checked;
								if (Array.isArray(r)) {
									var o = t._i(r, null);
									l.checked ? o < 0 && t.$set(t.sortBy, "rank_lowest", r.concat([null])) : o > -1 && t.$set(t.sortBy, "rank_lowest", r.slice(0, o).concat(r.slice(o + 1)))
								} else t.$set(t.sortBy, "rank_lowest", n)
							}, function(e) {
								return t.changeSortBy(e)
							}]
						}
					}), t._v(" "), r("span", {
						staticClass: "checkmark"
					})]), t._v(" "), r("label", {
						staticClass: "form-check-label chLabel bring-to-front",
						attrs: {
							for: "rank_lowest"
						}
					}, [t._v("Low Rarity")])])]), t._v(" "), r("div", [r("div", {
						staticClass: "form-group form-check-inline text-white-50"
					}, [r("div", {
						staticClass: "chContainer"
					}, [r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.sortBy.rank_highest,
							expression: "sortBy.rank_highest"
						}],
						staticClass: "big-checkbox bring-to-front",
						attrs: {
							id: "rank_highest",
							"data-id": "rank_highest",
							type: "checkbox"
						},
						domProps: {
							checked: Array.isArray(t.sortBy.rank_highest) ? t._i(t.sortBy.rank_highest, null) > -1 : t.sortBy.rank_highest
						},
						on: {
							change: [function(e) {
								var r = t.sortBy.rank_highest,
									l = e.target,
									n = !!l.checked;
								if (Array.isArray(r)) {
									var o = t._i(r, null);
									l.checked ? o < 0 && t.$set(t.sortBy, "rank_highest", r.concat([null])) : o > -1 && t.$set(t.sortBy, "rank_highest", r.slice(0, o).concat(r.slice(o + 1)))
								} else t.$set(t.sortBy, "rank_highest", n)
							}, function(e) {
								return t.changeSortBy(e)
							}]
						}
					}), t._v(" "), r("span", {
						staticClass: "checkmark"
					})]), t._v(" "), r("label", {
						staticClass: "form-check-label chLabel bring-to-front",
						attrs: {
							for: "rank_highest"
						}
					}, [t._v("Top Rarity")])])]), t._v(" "), r("div", [r("div", {
						staticClass: "form-group form-check-inline text-white-50"
					}, [r("div", {
						staticClass: "chContainer"
					}, [r("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.showAttributes,
							expression: "showAttributes"
						}],
						staticClass: "big-checkbox bring-to-front",
						attrs: {
							id: "showAttributes",
							"data-id": "showAttributes",
							type: "checkbox"
						},
						domProps: {
							checked: Array.isArray(t.showAttributes) ? t._i(t.showAttributes, null) > -1 : t.showAttributes
						},
						on: {
							change: [function(e) {
								var r = t.showAttributes,
									l = e.target,
									n = !!l.checked;
								if (Array.isArray(r)) {
									var o = t._i(r, null);
									l.checked ? o < 0 && (t.showAttributes = r.concat([null])) : o > -1 && (t.showAttributes = r.slice(0, o).concat(r.slice(o + 1)))
								} else t.showAttributes = n
							}, function(e) {
								t.showAttributes
							}]
						}
					}), t._v(" "), r("span", {
						staticClass: "checkmark"
					})]), t._v(" "), r("label", {
						staticClass: "form-check-label chLabel bring-to-front",
						attrs: {
							for: "showAttributes"
						}
					}, [t._v("Show\n                      Attributes")])])]), t._v(" "), r("li", {
						attrs: {
							hidden: ""
						}
					}, [r("input", {
						staticClass: "btn-check",
						attrs: {
							type: "radio",
							name: "options-outlined",
							id: "option1",
							autocomplete: "off",
							checked: ""
						}
					}), t._v(" "), r("label", {
						staticClass: "btn btn-outline-primary",
						attrs: {
							for: "option1"
						},
						on: {
							click: function(e) {
								return t.getAllPunks()
							}
						}
					}, [t._v("All Apes\n                    (10,000)")])]), t._v(" "), r("li", {
						attrs: {
							hidden: ""
						}
					}, [r("input", {
						staticClass: "btn-check",
						attrs: {
							type: "radio",
							name: "options-outlined",
							id: "success-outlined",
							autocomplete: "off"
						}
					}), t._v(" "), r("label", {
						staticClass: "btn btn-outline-primary",
						attrs: {
							for: "success-outlined"
						},
						on: {
							click: function(e) {
								return t.showLegends()
							}
						}
					}, [t._v(" Legends Apes\n                    (23)")])]), t._v(" "), r("li", {
						attrs: {
							hidden: ""
						}
					}, [r("input", {
						staticClass: "btn-check",
						attrs: {
							type: "radio",
							name: "options-outlined",
							id: "option4",
							autocomplete: "off"
						}
					}), t._v(" "), r("label", {
						staticClass: "btn btn-outline-primary",
						attrs: {
							for: "option4"
						},
						on: {
							click: function(e) {
								return t.showBoreds()
							}
						}
					}, [t._v("Bored Apes\n                    (9,977)")])])])])]), t._v(" "), r("div", {
						staticClass: "col-lg-9 col-md-9"
					}, [r("div", {
						staticClass: "row"
					}, t._l(t.punks, (function(e, l) {
						return r("div", {
							staticClass: "col-md-4 col-lg-3"
						}, [r("NuxtLink", {
							attrs: {
								to: "/detail/" + e.tokenId
							}
						}, [r("div", {
							staticClass: "item"
						}, [r("div", {
							staticClass: "team team-s1 team-odd"
						}, [r("div", {
							staticClass: "team-photo team-photo-s3"
						}, [r("img", {
							attrs: {
								src: "assets/BaycImages/ape/" + e.tokenId + ".png",
								alt: "AvaxBayc #" + e.tokenId
							}
						}), t._v(" "), r("h3", {
							staticClass: "text-success"
						}, [t._v(t._s(e.offerPrice) + " "), r("small", {
							staticClass: "text-white-50",
							staticStyle: {
								"font-size": "small"
							}
						}, [t._v("Avalanche")])])]), t._v(" "), r("h5", {
							staticClass: "team-name title title-md"
						}, [t._v("avaxbayc # " + t._s(e.tokenId))]), t._v(" "), r("h6", {
							staticClass: "text-danger"
						}, [t._v("Rarity Rank # " + t._s(e.rank))]), t._v(" "), t._l(e.traits, (function(e, l, n) {
							return t.showAttributes ? r("label", {
								staticClass: "text-left",
								staticStyle: {
									display: "block"
								}
							}, ["Background" != l ? r("h5", {
								staticClass: "text-white-50"
							}, [t._v(t._s(l))]) : t._e(), "Background" != l ? r("span", {
								staticClass: "text-secondary"
							}, [t._v(t._s(e))]) : t._e()]) : t._e()
						}))], 2)])])], 1)
					})), 0), t._v(" "), t.loading ? r("div", {
						staticClass: "text-center"
					}, [r("i", {
						staticClass: "spinner-grow text-primary"
					}), t._v(" "), r("i", {
						staticClass: "spinner-grow text-primary"
					}), t._v(" "), r("i", {
						staticClass: "spinner-grow text-primary"
					})]) : t._e()])])])])])
				}), [function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("section", {
						staticClass: "section bg-theme tc-light ov-h mb-100",
						attrs: {
							id: "gallery"
						}
					}, [r("div", {
						staticClass: "container"
					}, [r("div", {
						staticClass: "row align-items-center justify-content-center"
					}, [r("div", {
						staticClass: "col-md-9 col-lg-7"
					}, [r("div", {
						staticClass: "page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0"
					}, [r("h1", {
						staticClass: "text-white mb-0"
					}, [t._v("Marketplace")])])])])])])
				}, function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("div", {
						staticClass: "modal-header"
					}, [r("h5", {
						staticClass: "modal-title",
						attrs: {
							id: "exampleModalLabel"
						}
					}, [t._v("Filter Attributes")]), t._v(" "), r("button", {
						staticClass: "close",
						attrs: {
							type: "button",
							"data-dismiss": "modal",
							"aria-label": "Close"
						}
					}, [r("span", {
						attrs: {
							"aria-hidden": "true"
						}
					}, [t._v("Ã—")])])])
				}, function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("a", {
						attrs: {
							"data-toggle": "collapse",
							href: "#collapseBG"
						}
					}, [r("strong", [t._v("\n                    Background\n                  ")])])
				}, function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("a", {
						attrs: {
							"data-toggle": "collapse",
							href: "#collapseHat"
						}
					}, [r("strong", [t._v("\n                    Hat\n                  ")])])
				}, function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("a", {
						attrs: {
							"data-toggle": "collapse",
							href: "#collapseEarring"
						}
					}, [r("strong", [t._v("\n                    Earring\n                  ")])])
				}, function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("a", {
						attrs: {
							"data-toggle": "collapse",
							href: "#collapseMouth"
						}
					}, [r("strong", [t._v("\n                    Mouth\n                  ")])])
				}, function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("a", {
						attrs: {
							"data-toggle": "collapse",
							href: "#collapseClothes"
						}
					}, [r("strong", [t._v("\n                    Clothes\n                  ")])])
				}, function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("a", {
						attrs: {
							"data-toggle": "collapse",
							href: "#collapseFur"
						}
					}, [r("strong", [t._v("\n                    Fur\n                  ")])])
				}, function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("a", {
						attrs: {
							"data-toggle": "collapse",
							href: "#collapseEyes"
						}
					}, [r("strong", [t._v("\n                    Eyes\n                  ")])])
				}, function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("li", [r("button", {
						staticClass: "btn btn-primary btn-sm form-control mt-2",
						staticStyle: {
							"margin-bottom": "5px"
						},
						attrs: {
							"data-toggle": "modal",
							"data-target": "#exampleModal",
							type: "button"
						}
					}, [r("i", {
						staticClass: "fa fa-filter"
					}), t._v("\n                    Filter\n                  ")])])
				}], !1, null, null, null);
			e.default = component.exports
		}
	}
]);