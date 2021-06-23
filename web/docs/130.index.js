(self["webpackChunkkind_web"] = self["webpackChunkkind_web"] || []).push([[130],{

/***/ 130:
/***/ ((module) => {

module.exports = (function() {
    function word_to_u16(w) {
        var u = 0;
        for (var i = 0; i < 16; ++i) {
            u = u | (w._ === 'Word.i' ? 1 << i : 0);
            w = w.pred;
        };
        return u;
    };

    function u16_to_word(u) {
        var w = {
            _: 'Word.e'
        };
        for (var i = 0; i < 16; ++i) {
            w = {
                _: (u >>> (16 - i - 1)) & 1 ? 'Word.i' : 'Word.o',
                pred: w
            };
        };
        return w;
    };

    function u16_to_bits(x) {
        var s = '';
        for (var i = 0; i < 16; ++i) {
            s = (x & 1 ? '1' : '0') + s;
            x = x >>> 1;
        }
        return s;
    };

    function word_to_u32(w) {
        var u = 0;
        for (var i = 0; i < 32; ++i) {
            u = u | (w._ === 'Word.i' ? 1 << i : 0);
            w = w.pred;
        };
        return u;
    };

    function u32_to_word(u) {
        var w = {
            _: 'Word.e'
        };
        for (var i = 0; i < 32; ++i) {
            w = {
                _: (u >>> (32 - i - 1)) & 1 ? 'Word.i' : 'Word.o',
                pred: w
            };
        };
        return w;
    };

    function u32_for(state, from, til, func) {
        for (var i = from; i < til; ++i) {
            state = func(i)(state);
        }
        return state;
    };

    function word_to_u64(w) {
        var u = 0n;
        for (var i = 0n; i < 64n; i += 1n) {
            u = u | (w._ === 'Word.i' ? 1n << i : 0n);
            w = w.pred;
        };
        return u;
    };

    function u64_to_word(u) {
        var w = {
            _: 'Word.e'
        };
        for (var i = 0n; i < 64n; i += 1n) {
            w = {
                _: (u >> (64n - i - 1n)) & 1n ? 'Word.i' : 'Word.o',
                pred: w
            };
        };
        return w;
    };

    function u32array_to_buffer32(a) {
        function go(a, buffer) {
            switch (a._) {
                case 'Array.tip':
                    buffer.push(a.value);
                    break;
                case 'Array.tie':
                    go(a.lft, buffer);
                    go(a.rgt, buffer);
                    break;
            }
            return buffer;
        };
        return new Uint32Array(go(a, []));
    };

    function buffer32_to_u32array(b) {
        function go(b) {
            if (b.length === 1) {
                return {
                    _: 'Array.tip',
                    value: b[0]
                };
            } else {
                var lft = go(b.slice(0, b.length / 2));
                var rgt = go(b.slice(b.length / 2));
                return {
                    _: 'Array.tie',
                    lft,
                    rgt
                };
            };
        };
        return go(b);
    };

    function buffer32_to_depth(b) {
        return BigInt(Math.log(b.length) / Math.log(2));
    };
    const inst_unit = x => x(null);
    const elim_unit = (x => {
        var $1 = (() => c0 => {
            var self = x;
            switch ("unit") {
                case 'unit':
                    var $0 = c0;
                    return $0;
            };
        })();
        return $1;
    });
    const inst_bool = x => x(true)(false);
    const elim_bool = (x => {
        var $4 = (() => c0 => c1 => {
            var self = x;
            if (self) {
                var $2 = c0;
                return $2;
            } else {
                var $3 = c1;
                return $3;
            };
        })();
        return $4;
    });
    const inst_nat = x => x(0n)(x0 => 1n + x0);
    const elim_nat = (x => {
        var $8 = (() => c0 => c1 => {
            var self = x;
            if (self === 0n) {
                var $5 = c0;
                return $5;
            } else {
                var $6 = (self - 1n);
                var $7 = c1($6);
                return $7;
            };
        })();
        return $8;
    });
    const inst_u16 = x => x(x0 => word_to_u16(x0));
    const elim_u16 = (x => {
        var $11 = (() => c0 => {
            var self = x;
            switch ('u16') {
                case 'u16':
                    var $9 = u16_to_word(self);
                    var $10 = c0($9);
                    return $10;
            };
        })();
        return $11;
    });
    const inst_u32 = x => x(x0 => word_to_u32(x0));
    const elim_u32 = (x => {
        var $14 = (() => c0 => {
            var self = x;
            switch ('u32') {
                case 'u32':
                    var $12 = u32_to_word(self);
                    var $13 = c0($12);
                    return $13;
            };
        })();
        return $14;
    });
    const inst_u64 = x => x(x0 => word_to_u64(x0));
    const elim_u64 = (x => {
        var $17 = (() => c0 => {
            var self = x;
            switch ('u64') {
                case 'u64':
                    var $15 = u64_to_word(self);
                    var $16 = c0($15);
                    return $16;
            };
        })();
        return $17;
    });
    const inst_string = x => x('')(x0 => x1 => (String.fromCharCode(x0) + x1));
    const elim_string = (x => {
        var $22 = (() => c0 => c1 => {
            var self = x;
            if (self.length === 0) {
                var $18 = c0;
                return $18;
            } else {
                var $19 = self.charCodeAt(0);
                var $20 = self.slice(1);
                var $21 = c1($19)($20);
                return $21;
            };
        })();
        return $22;
    });
    const inst_buffer32 = x => x(x0 => x1 => u32array_to_buffer32(x1));
    const elim_buffer32 = (x => {
        var $26 = (() => c0 => {
            var self = x;
            switch ('b32') {
                case 'b32':
                    var $23 = buffer32_to_depth(self);
                    var $24 = buffer32_to_u32array(self);
                    var $25 = c0($23)($24);
                    return $25;
            };
        })();
        return $26;
    });

    function App$new$(_init$2, _draw$3, _when$4, _tick$5, _post$6) {
        var $27 = ({
            _: 'App.new',
            'init': _init$2,
            'draw': _draw$3,
            'when': _when$4,
            'tick': _tick$5,
            'post': _post$6
        });
        return $27;
    };
    const App$new = x0 => x1 => x2 => x3 => x4 => App$new$(x0, x1, x2, x3, x4);

    function Pair$new$(_fst$3, _snd$4) {
        var $28 = ({
            _: 'Pair.new',
            'fst': _fst$3,
            'snd': _snd$4
        });
        return $28;
    };
    const Pair$new = x0 => x1 => Pair$new$(x0, x1);
    const App$State$new = Pair$new$(null, null);
    const App$Hello$State = App$State$new;

    function App$Store$new$(_local$2, _global$3) {
        var $29 = ({
            _: 'App.Store.new',
            'local': _local$2,
            'global': _global$3
        });
        return $29;
    };
    const App$Store$new = x0 => x1 => App$Store$new$(x0, x1);
    const App$Hello$init = App$Store$new$(0n, 0n);

    function DOM$node$(_tag$1, _props$2, _style$3, _children$4) {
        var $30 = ({
            _: 'DOM.node',
            'tag': _tag$1,
            'props': _props$2,
            'style': _style$3,
            'children': _children$4
        });
        return $30;
    };
    const DOM$node = x0 => x1 => x2 => x3 => DOM$node$(x0, x1, x2, x3);

    function BBL$(_K$1, _V$2) {
        var $31 = null;
        return $31;
    };
    const BBL = x0 => x1 => BBL$(x0, x1);

    function Pair$fst$(_pair$3) {
        var self = _pair$3;
        switch (self._) {
            case 'Pair.new':
                var $33 = self.fst;
                var $34 = $33;
                var $32 = $34;
                break;
        };
        return $32;
    };
    const Pair$fst = x0 => Pair$fst$(x0);

    function Pair$snd$(_pair$3) {
        var self = _pair$3;
        switch (self._) {
            case 'Pair.new':
                var $36 = self.snd;
                var $37 = $36;
                var $35 = $37;
                break;
        };
        return $35;
    };
    const Pair$snd = x0 => Pair$snd$(x0);

    function BBL$bin$(_size$3, _key$4, _val$5, _left$6, _right$7) {
        var $38 = ({
            _: 'BBL.bin',
            'size': _size$3,
            'key': _key$4,
            'val': _val$5,
            'left': _left$6,
            'right': _right$7
        });
        return $38;
    };
    const BBL$bin = x0 => x1 => x2 => x3 => x4 => BBL$bin$(x0, x1, x2, x3, x4);

    function U32$new$(_value$1) {
        var $39 = word_to_u32(_value$1);
        return $39;
    };
    const U32$new = x0 => U32$new$(x0);

    function Nat$apply$(_n$2, _f$3, _x$4) {
        var Nat$apply$ = (_n$2, _f$3, _x$4) => ({
            ctr: 'TCO',
            arg: [_n$2, _f$3, _x$4]
        });
        var Nat$apply = _n$2 => _f$3 => _x$4 => Nat$apply$(_n$2, _f$3, _x$4);
        var arg = [_n$2, _f$3, _x$4];
        while (true) {
            let [_n$2, _f$3, _x$4] = arg;
            var R = (() => {
                var self = _n$2;
                if (self === 0n) {
                    var $40 = _x$4;
                    return $40;
                } else {
                    var $41 = (self - 1n);
                    var $42 = Nat$apply$($41, _f$3, _f$3(_x$4));
                    return $42;
                };
            })();
            if (R.ctr === 'TCO') arg = R.arg;
            else return R;
        }
    };
    const Nat$apply = x0 => x1 => x2 => Nat$apply$(x0, x1, x2);

    function Word$(_size$1) {
        var $43 = null;
        return $43;
    };
    const Word = x0 => Word$(x0);
    const Word$e = ({
        _: 'Word.e'
    });

    function Word$i$(_pred$2) {
        var $44 = ({
            _: 'Word.i',
            'pred': _pred$2
        });
        return $44;
    };
    const Word$i = x0 => Word$i$(x0);

    function Word$o$(_pred$2) {
        var $45 = ({
            _: 'Word.o',
            'pred': _pred$2
        });
        return $45;
    };
    const Word$o = x0 => Word$o$(x0);

    function Word$inc$(_word$2) {
        var self = _word$2;
        switch (self._) {
            case 'Word.o':
                var $47 = self.pred;
                var $48 = Word$i$($47);
                var $46 = $48;
                break;
            case 'Word.i':
                var $49 = self.pred;
                var $50 = Word$o$(Word$inc$($49));
                var $46 = $50;
                break;
            case 'Word.e':
                var $51 = Word$e;
                var $46 = $51;
                break;
        };
        return $46;
    };
    const Word$inc = x0 => Word$inc$(x0);

    function Word$zero$(_size$1) {
        var self = _size$1;
        if (self === 0n) {
            var $53 = Word$e;
            var $52 = $53;
        } else {
            var $54 = (self - 1n);
            var $55 = Word$o$(Word$zero$($54));
            var $52 = $55;
        };
        return $52;
    };
    const Word$zero = x0 => Word$zero$(x0);

    function Nat$to_word$(_size$1, _n$2) {
        var $56 = Nat$apply$(_n$2, Word$inc, Word$zero$(_size$1));
        return $56;
    };
    const Nat$to_word = x0 => x1 => Nat$to_word$(x0, x1);

    function Nat$succ$(_pred$1) {
        var $57 = 1n + _pred$1;
        return $57;
    };
    const Nat$succ = x0 => Nat$succ$(x0);
    const Nat$zero = 0n;
    const Nat$to_u32 = a0 => (Number(a0) >>> 0);
    const BBL$tip = ({
        _: 'BBL.tip'
    });

    function BBL$singleton$(_key$3, _val$4) {
        var $58 = BBL$bin$(1, _key$3, _val$4, BBL$tip, BBL$tip);
        return $58;
    };
    const BBL$singleton = x0 => x1 => BBL$singleton$(x0, x1);

    function BBL$size$(_map$3) {
        var self = _map$3;
        switch (self._) {
            case 'BBL.bin':
                var $60 = self.size;
                var $61 = $60;
                var $59 = $61;
                break;
            case 'BBL.tip':
                var $62 = 0;
                var $59 = $62;
                break;
        };
        return $59;
    };
    const BBL$size = x0 => BBL$size$(x0);
    const Bool$false = false;
    const Bool$true = true;

    function Word$adder$(_a$2, _b$3, _c$4) {
        var self = _a$2;
        switch (self._) {
            case 'Word.o':
                var $64 = self.pred;
                var $65 = (_b$7 => {
                    var self = _b$7;
                    switch (self._) {
                        case 'Word.o':
                            var $67 = self.pred;
                            var $68 = (_a$pred$10 => {
                                var self = _c$4;
                                if (self) {
                                    var $70 = Word$i$(Word$adder$(_a$pred$10, $67, Bool$false));
                                    var $69 = $70;
                                } else {
                                    var $71 = Word$o$(Word$adder$(_a$pred$10, $67, Bool$false));
                                    var $69 = $71;
                                };
                                return $69;
                            });
                            var $66 = $68;
                            break;
                        case 'Word.i':
                            var $72 = self.pred;
                            var $73 = (_a$pred$10 => {
                                var self = _c$4;
                                if (self) {
                                    var $75 = Word$o$(Word$adder$(_a$pred$10, $72, Bool$true));
                                    var $74 = $75;
                                } else {
                                    var $76 = Word$i$(Word$adder$(_a$pred$10, $72, Bool$false));
                                    var $74 = $76;
                                };
                                return $74;
                            });
                            var $66 = $73;
                            break;
                        case 'Word.e':
                            var $77 = (_a$pred$8 => {
                                var $78 = Word$e;
                                return $78;
                            });
                            var $66 = $77;
                            break;
                    };
                    var $66 = $66($64);
                    return $66;
                });
                var $63 = $65;
                break;
            case 'Word.i':
                var $79 = self.pred;
                var $80 = (_b$7 => {
                    var self = _b$7;
                    switch (self._) {
                        case 'Word.o':
                            var $82 = self.pred;
                            var $83 = (_a$pred$10 => {
                                var self = _c$4;
                                if (self) {
                                    var $85 = Word$o$(Word$adder$(_a$pred$10, $82, Bool$true));
                                    var $84 = $85;
                                } else {
                                    var $86 = Word$i$(Word$adder$(_a$pred$10, $82, Bool$false));
                                    var $84 = $86;
                                };
                                return $84;
                            });
                            var $81 = $83;
                            break;
                        case 'Word.i':
                            var $87 = self.pred;
                            var $88 = (_a$pred$10 => {
                                var self = _c$4;
                                if (self) {
                                    var $90 = Word$i$(Word$adder$(_a$pred$10, $87, Bool$true));
                                    var $89 = $90;
                                } else {
                                    var $91 = Word$o$(Word$adder$(_a$pred$10, $87, Bool$true));
                                    var $89 = $91;
                                };
                                return $89;
                            });
                            var $81 = $88;
                            break;
                        case 'Word.e':
                            var $92 = (_a$pred$8 => {
                                var $93 = Word$e;
                                return $93;
                            });
                            var $81 = $92;
                            break;
                    };
                    var $81 = $81($79);
                    return $81;
                });
                var $63 = $80;
                break;
            case 'Word.e':
                var $94 = (_b$5 => {
                    var $95 = Word$e;
                    return $95;
                });
                var $63 = $94;
                break;
        };
        var $63 = $63(_b$3);
        return $63;
    };
    const Word$adder = x0 => x1 => x2 => Word$adder$(x0, x1, x2);

    function Word$add$(_a$2, _b$3) {
        var $96 = Word$adder$(_a$2, _b$3, Bool$false);
        return $96;
    };
    const Word$add = x0 => x1 => Word$add$(x0, x1);
    const U32$add = a0 => a1 => ((a0 + a1) >>> 0);

    function Word$shift_left$one$go$(_word$2, _prev$3) {
        var self = _word$2;
        switch (self._) {
            case 'Word.o':
                var $98 = self.pred;
                var self = _prev$3;
                if (self) {
                    var $100 = Word$i$(Word$shift_left$one$go$($98, Bool$false));
                    var $99 = $100;
                } else {
                    var $101 = Word$o$(Word$shift_left$one$go$($98, Bool$false));
                    var $99 = $101;
                };
                var $97 = $99;
                break;
            case 'Word.i':
                var $102 = self.pred;
                var self = _prev$3;
                if (self) {
                    var $104 = Word$i$(Word$shift_left$one$go$($102, Bool$true));
                    var $103 = $104;
                } else {
                    var $105 = Word$o$(Word$shift_left$one$go$($102, Bool$true));
                    var $103 = $105;
                };
                var $97 = $103;
                break;
            case 'Word.e':
                var $106 = Word$e;
                var $97 = $106;
                break;
        };
        return $97;
    };
    const Word$shift_left$one$go = x0 => x1 => Word$shift_left$one$go$(x0, x1);

    function Word$shift_left$one$(_word$2) {
        var self = _word$2;
        switch (self._) {
            case 'Word.o':
                var $108 = self.pred;
                var $109 = Word$o$(Word$shift_left$one$go$($108, Bool$false));
                var $107 = $109;
                break;
            case 'Word.i':
                var $110 = self.pred;
                var $111 = Word$o$(Word$shift_left$one$go$($110, Bool$true));
                var $107 = $111;
                break;
            case 'Word.e':
                var $112 = Word$e;
                var $107 = $112;
                break;
        };
        return $107;
    };
    const Word$shift_left$one = x0 => Word$shift_left$one$(x0);

    function Word$shift_left$(_n$2, _value$3) {
        var Word$shift_left$ = (_n$2, _value$3) => ({
            ctr: 'TCO',
            arg: [_n$2, _value$3]
        });
        var Word$shift_left = _n$2 => _value$3 => Word$shift_left$(_n$2, _value$3);
        var arg = [_n$2, _value$3];
        while (true) {
            let [_n$2, _value$3] = arg;
            var R = (() => {
                var self = _n$2;
                if (self === 0n) {
                    var $113 = _value$3;
                    return $113;
                } else {
                    var $114 = (self - 1n);
                    var $115 = Word$shift_left$($114, Word$shift_left$one$(_value$3));
                    return $115;
                };
            })();
            if (R.ctr === 'TCO') arg = R.arg;
            else return R;
        }
    };
    const Word$shift_left = x0 => x1 => Word$shift_left$(x0, x1);

    function Word$mul$go$(_a$3, _b$4, _acc$5) {
        var Word$mul$go$ = (_a$3, _b$4, _acc$5) => ({
            ctr: 'TCO',
            arg: [_a$3, _b$4, _acc$5]
        });
        var Word$mul$go = _a$3 => _b$4 => _acc$5 => Word$mul$go$(_a$3, _b$4, _acc$5);
        var arg = [_a$3, _b$4, _acc$5];
        while (true) {
            let [_a$3, _b$4, _acc$5] = arg;
            var R = (() => {
                var self = _a$3;
                switch (self._) {
                    case 'Word.o':
                        var $116 = self.pred;
                        var $117 = Word$mul$go$($116, Word$shift_left$(1n, _b$4), _acc$5);
                        return $117;
                    case 'Word.i':
                        var $118 = self.pred;
                        var $119 = Word$mul$go$($118, Word$shift_left$(1n, _b$4), Word$add$(_b$4, _acc$5));
                        return $119;
                    case 'Word.e':
                        var $120 = _acc$5;
                        return $120;
                };
            })();
            if (R.ctr === 'TCO') arg = R.arg;
            else return R;
        }
    };
    const Word$mul$go = x0 => x1 => x2 => Word$mul$go$(x0, x1, x2);

    function Word$to_zero$(_word$2) {
        var self = _word$2;
        switch (self._) {
            case 'Word.o':
                var $122 = self.pred;
                var $123 = Word$o$(Word$to_zero$($122));
                var $121 = $123;
                break;
            case 'Word.i':
                var $124 = self.pred;
                var $125 = Word$o$(Word$to_zero$($124));
                var $121 = $125;
                break;
            case 'Word.e':
                var $126 = Word$e;
                var $121 = $126;
                break;
        };
        return $121;
    };
    const Word$to_zero = x0 => Word$to_zero$(x0);

    function Word$mul$(_a$2, _b$3) {
        var $127 = Word$mul$go$(_a$2, _b$3, Word$to_zero$(_a$2));
        return $127;
    };
    const Word$mul = x0 => x1 => Word$mul$(x0, x1);
    const U32$mul = a0 => a1 => ((a0 * a1) >>> 0);
    const BBL$w = 3;

    function Cmp$as_ltn$(_cmp$1) {
        var self = _cmp$1;
        switch (self._) {
            case 'Cmp.ltn':
                var $129 = Bool$true;
                var $128 = $129;
                break;
            case 'Cmp.eql':
            case 'Cmp.gtn':
                var $130 = Bool$false;
                var $128 = $130;
                break;
        };
        return $128;
    };
    const Cmp$as_ltn = x0 => Cmp$as_ltn$(x0);
    const Cmp$ltn = ({
        _: 'Cmp.ltn'
    });
    const Cmp$gtn = ({
        _: 'Cmp.gtn'
    });

    function Word$cmp$go$(_a$2, _b$3, _c$4) {
        var self = _a$2;
        switch (self._) {
            case 'Word.o':
                var $132 = self.pred;
                var $133 = (_b$7 => {
                    var self = _b$7;
                    switch (self._) {
                        case 'Word.o':
                            var $135 = self.pred;
                            var $136 = (_a$pred$10 => {
                                var $137 = Word$cmp$go$(_a$pred$10, $135, _c$4);
                                return $137;
                            });
                            var $134 = $136;
                            break;
                        case 'Word.i':
                            var $138 = self.pred;
                            var $139 = (_a$pred$10 => {
                                var $140 = Word$cmp$go$(_a$pred$10, $138, Cmp$ltn);
                                return $140;
                            });
                            var $134 = $139;
                            break;
                        case 'Word.e':
                            var $141 = (_a$pred$8 => {
                                var $142 = _c$4;
                                return $142;
                            });
                            var $134 = $141;
                            break;
                    };
                    var $134 = $134($132);
                    return $134;
                });
                var $131 = $133;
                break;
            case 'Word.i':
                var $143 = self.pred;
                var $144 = (_b$7 => {
                    var self = _b$7;
                    switch (self._) {
                        case 'Word.o':
                            var $146 = self.pred;
                            var $147 = (_a$pred$10 => {
                                var $148 = Word$cmp$go$(_a$pred$10, $146, Cmp$gtn);
                                return $148;
                            });
                            var $145 = $147;
                            break;
                        case 'Word.i':
                            var $149 = self.pred;
                            var $150 = (_a$pred$10 => {
                                var $151 = Word$cmp$go$(_a$pred$10, $149, _c$4);
                                return $151;
                            });
                            var $145 = $150;
                            break;
                        case 'Word.e':
                            var $152 = (_a$pred$8 => {
                                var $153 = _c$4;
                                return $153;
                            });
                            var $145 = $152;
                            break;
                    };
                    var $145 = $145($143);
                    return $145;
                });
                var $131 = $144;
                break;
            case 'Word.e':
                var $154 = (_b$5 => {
                    var $155 = _c$4;
                    return $155;
                });
                var $131 = $154;
                break;
        };
        var $131 = $131(_b$3);
        return $131;
    };
    const Word$cmp$go = x0 => x1 => x2 => Word$cmp$go$(x0, x1, x2);
    const Cmp$eql = ({
        _: 'Cmp.eql'
    });

    function Word$cmp$(_a$2, _b$3) {
        var $156 = Word$cmp$go$(_a$2, _b$3, Cmp$eql);
        return $156;
    };
    const Word$cmp = x0 => x1 => Word$cmp$(x0, x1);

    function Word$ltn$(_a$2, _b$3) {
        var $157 = Cmp$as_ltn$(Word$cmp$(_a$2, _b$3));
        return $157;
    };
    const Word$ltn = x0 => x1 => Word$ltn$(x0, x1);
    const U32$ltn = a0 => a1 => (a0 < a1);
    const U32$from_nat = a0 => (Number(a0) >>> 0);

    function BBL$node$(_key$3, _val$4, _left$5, _right$6) {
        var _size_left$7 = BBL$size$(_left$5);
        var _size_right$8 = BBL$size$(_right$6);
        var _new_size$9 = ((1 + ((_size_left$7 + _size_right$8) >>> 0)) >>> 0);
        var $158 = BBL$bin$(_new_size$9, _key$3, _val$4, _left$5, _right$6);
        return $158;
    };
    const BBL$node = x0 => x1 => x2 => x3 => BBL$node$(x0, x1, x2, x3);

    function Cmp$as_gtn$(_cmp$1) {
        var self = _cmp$1;
        switch (self._) {
            case 'Cmp.ltn':
            case 'Cmp.eql':
                var $160 = Bool$false;
                var $159 = $160;
                break;
            case 'Cmp.gtn':
                var $161 = Bool$true;
                var $159 = $161;
                break;
        };
        return $159;
    };
    const Cmp$as_gtn = x0 => Cmp$as_gtn$(x0);

    function Word$gtn$(_a$2, _b$3) {
        var $162 = Cmp$as_gtn$(Word$cmp$(_a$2, _b$3));
        return $162;
    };
    const Word$gtn = x0 => x1 => Word$gtn$(x0, x1);
    const U32$gtn = a0 => a1 => (a0 > a1);

    function BBL$balance$(_k$3, _v$4, _l$5, _r$6) {
        var _size_l$7 = BBL$size$(_l$5);
        var _size_r$8 = BBL$size$(_r$6);
        var _size_l_plus_size_r$9 = ((_size_l$7 + _size_r$8) >>> 0);
        var _w_x_size_l$10 = ((BBL$w * _size_l$7) >>> 0);
        var _w_x_size_r$11 = ((BBL$w * _size_r$8) >>> 0);
        var self = (_size_l_plus_size_r$9 < 2);
        if (self) {
            var $164 = BBL$node$(_k$3, _v$4, _l$5, _r$6);
            var $163 = $164;
        } else {
            var self = (_size_r$8 > _w_x_size_l$10);
            if (self) {
                var self = _r$6;
                switch (self._) {
                    case 'BBL.bin':
                        var $167 = self.key;
                        var $168 = self.val;
                        var $169 = self.left;
                        var $170 = self.right;
                        var _size_rl$17 = BBL$size$($169);
                        var _size_rr$18 = BBL$size$($170);
                        var self = (_size_rl$17 < _size_rr$18);
                        if (self) {
                            var _new_key$19 = $167;
                            var _new_val$20 = $168;
                            var _new_left$21 = BBL$node$(_k$3, _v$4, _l$5, $169);
                            var _new_right$22 = $170;
                            var $172 = BBL$node$(_new_key$19, _new_val$20, _new_left$21, _new_right$22);
                            var $171 = $172;
                        } else {
                            var self = $169;
                            switch (self._) {
                                case 'BBL.bin':
                                    var $174 = self.key;
                                    var $175 = self.val;
                                    var $176 = self.left;
                                    var $177 = self.right;
                                    var _new_key$24 = $174;
                                    var _new_val$25 = $175;
                                    var _new_left$26 = BBL$node$(_k$3, _v$4, _l$5, $176);
                                    var _new_right$27 = BBL$node$($167, $168, $177, $170);
                                    var $178 = BBL$node$(_new_key$24, _new_val$25, _new_left$26, _new_right$27);
                                    var $173 = $178;
                                    break;
                                case 'BBL.tip':
                                    var $179 = BBL$node$(_k$3, _v$4, _l$5, _r$6);
                                    var $173 = $179;
                                    break;
                            };
                            var $171 = $173;
                        };
                        var $166 = $171;
                        break;
                    case 'BBL.tip':
                        var $180 = BBL$node$(_k$3, _v$4, _l$5, _r$6);
                        var $166 = $180;
                        break;
                };
                var $165 = $166;
            } else {
                var self = (_size_l$7 > _w_x_size_r$11);
                if (self) {
                    var self = _l$5;
                    switch (self._) {
                        case 'BBL.bin':
                            var $183 = self.key;
                            var $184 = self.val;
                            var $185 = self.left;
                            var $186 = self.right;
                            var _size_ll$17 = BBL$size$($185);
                            var _size_lr$18 = BBL$size$($186);
                            var self = (_size_lr$18 < _size_ll$17);
                            if (self) {
                                var _new_key$19 = $183;
                                var _new_val$20 = $184;
                                var _new_left$21 = $185;
                                var _new_right$22 = BBL$node$(_k$3, _v$4, $186, _r$6);
                                var $188 = BBL$node$(_new_key$19, _new_val$20, _new_left$21, _new_right$22);
                                var $187 = $188;
                            } else {
                                var self = $186;
                                switch (self._) {
                                    case 'BBL.bin':
                                        var $190 = self.key;
                                        var $191 = self.val;
                                        var $192 = self.left;
                                        var $193 = self.right;
                                        var _new_key$24 = $190;
                                        var _new_val$25 = $191;
                                        var _new_left$26 = BBL$node$($183, $184, $185, $192);
                                        var _new_right$27 = BBL$node$(_k$3, _v$4, $193, _r$6);
                                        var $194 = BBL$node$(_new_key$24, _new_val$25, _new_left$26, _new_right$27);
                                        var $189 = $194;
                                        break;
                                    case 'BBL.tip':
                                        var $195 = BBL$node$(_k$3, _v$4, _l$5, _r$6);
                                        var $189 = $195;
                                        break;
                                };
                                var $187 = $189;
                            };
                            var $182 = $187;
                            break;
                        case 'BBL.tip':
                            var $196 = BBL$node$(_k$3, _v$4, _l$5, _r$6);
                            var $182 = $196;
                            break;
                    };
                    var $181 = $182;
                } else {
                    var $197 = BBL$node$(_k$3, _v$4, _l$5, _r$6);
                    var $181 = $197;
                };
                var $165 = $181;
            };
            var $163 = $165;
        };
        return $163;
    };
    const BBL$balance = x0 => x1 => x2 => x3 => BBL$balance$(x0, x1, x2, x3);

    function BBL$insert$(_cmp$3, _key$4, _val$5, _map$6) {
        var self = _map$6;
        switch (self._) {
            case 'BBL.bin':
                var $199 = self.key;
                var $200 = self.val;
                var $201 = self.left;
                var $202 = self.right;
                var self = _cmp$3(_key$4)($199);
                switch (self._) {
                    case 'Cmp.ltn':
                        var _new_key$12 = $199;
                        var _new_val$13 = $200;
                        var _new_left$14 = BBL$insert$(_cmp$3, _key$4, _val$5, $201);
                        var _new_right$15 = $202;
                        var $204 = BBL$balance$(_new_key$12, _new_val$13, _new_left$14, _new_right$15);
                        var $203 = $204;
                        break;
                    case 'Cmp.eql':
                        var $205 = BBL$node$(_key$4, _val$5, $201, $202);
                        var $203 = $205;
                        break;
                    case 'Cmp.gtn':
                        var _new_key$12 = $199;
                        var _new_val$13 = $200;
                        var _new_left$14 = $201;
                        var _new_right$15 = BBL$insert$(_cmp$3, _key$4, _val$5, $202);
                        var $206 = BBL$balance$(_new_key$12, _new_val$13, _new_left$14, _new_right$15);
                        var $203 = $206;
                        break;
                };
                var $198 = $203;
                break;
            case 'BBL.tip':
                var $207 = BBL$singleton$(_key$4, _val$5);
                var $198 = $207;
                break;
        };
        return $198;
    };
    const BBL$insert = x0 => x1 => x2 => x3 => BBL$insert$(x0, x1, x2, x3);

    function BBL$from_list$go$(_cmp$3, _acc$4, _xs$5) {
        var BBL$from_list$go$ = (_cmp$3, _acc$4, _xs$5) => ({
            ctr: 'TCO',
            arg: [_cmp$3, _acc$4, _xs$5]
        });
        var BBL$from_list$go = _cmp$3 => _acc$4 => _xs$5 => BBL$from_list$go$(_cmp$3, _acc$4, _xs$5);
        var arg = [_cmp$3, _acc$4, _xs$5];
        while (true) {
            let [_cmp$3, _acc$4, _xs$5] = arg;
            var R = (() => {
                var self = _xs$5;
                switch (self._) {
                    case 'List.cons':
                        var $208 = self.head;
                        var $209 = self.tail;
                        var _key$8 = Pair$fst$($208);
                        var _val$9 = Pair$snd$($208);
                        var _new_acc$10 = BBL$insert$(_cmp$3, _key$8, _val$9, _acc$4);
                        var $210 = BBL$from_list$go$(_cmp$3, _new_acc$10, $209);
                        return $210;
                    case 'List.nil':
                        var $211 = _acc$4;
                        return $211;
                };
            })();
            if (R.ctr === 'TCO') arg = R.arg;
            else return R;
        }
    };
    const BBL$from_list$go = x0 => x1 => x2 => BBL$from_list$go$(x0, x1, x2);

    function BBL$from_list$(_cmp$3, _xs$4) {
        var $212 = BBL$from_list$go$(_cmp$3, BBL$tip, _xs$4);
        return $212;
    };
    const BBL$from_list = x0 => x1 => BBL$from_list$(x0, x1);
    const U16$ltn = a0 => a1 => (a0 < a1);

    function Cmp$as_eql$(_cmp$1) {
        var self = _cmp$1;
        switch (self._) {
            case 'Cmp.ltn':
            case 'Cmp.gtn':
                var $214 = Bool$false;
                var $213 = $214;
                break;
            case 'Cmp.eql':
                var $215 = Bool$true;
                var $213 = $215;
                break;
        };
        return $213;
    };
    const Cmp$as_eql = x0 => Cmp$as_eql$(x0);

    function Word$eql$(_a$2, _b$3) {
        var $216 = Cmp$as_eql$(Word$cmp$(_a$2, _b$3));
        return $216;
    };
    const Word$eql = x0 => x1 => Word$eql$(x0, x1);
    const U16$eql = a0 => a1 => (a0 === a1);

    function U16$cmp$(_a$1, _b$2) {
        var self = (_a$1 < _b$2);
        if (self) {
            var $218 = Cmp$ltn;
            var $217 = $218;
        } else {
            var self = (_a$1 === _b$2);
            if (self) {
                var $220 = Cmp$eql;
                var $219 = $220;
            } else {
                var $221 = Cmp$gtn;
                var $219 = $221;
            };
            var $217 = $219;
        };
        return $217;
    };
    const U16$cmp = x0 => x1 => U16$cmp$(x0, x1);

    function String$cmp$(_a$1, _b$2) {
        var String$cmp$ = (_a$1, _b$2) => ({
            ctr: 'TCO',
            arg: [_a$1, _b$2]
        });
        var String$cmp = _a$1 => _b$2 => String$cmp$(_a$1, _b$2);
        var arg = [_a$1, _b$2];
        while (true) {
            let [_a$1, _b$2] = arg;
            var R = (() => {
                var self = _a$1;
                if (self.length === 0) {
                    var self = _b$2;
                    if (self.length === 0) {
                        var $223 = Cmp$eql;
                        var $222 = $223;
                    } else {
                        var $224 = self.charCodeAt(0);
                        var $225 = self.slice(1);
                        var $226 = Cmp$ltn;
                        var $222 = $226;
                    };
                    return $222;
                } else {
                    var $227 = self.charCodeAt(0);
                    var $228 = self.slice(1);
                    var self = _b$2;
                    if (self.length === 0) {
                        var $230 = Cmp$gtn;
                        var $229 = $230;
                    } else {
                        var $231 = self.charCodeAt(0);
                        var $232 = self.slice(1);
                        var self = U16$cmp$($227, $231);
                        switch (self._) {
                            case 'Cmp.ltn':
                                var $234 = Cmp$ltn;
                                var $233 = $234;
                                break;
                            case 'Cmp.eql':
                                var $235 = String$cmp$($228, $232);
                                var $233 = $235;
                                break;
                            case 'Cmp.gtn':
                                var $236 = Cmp$gtn;
                                var $233 = $236;
                                break;
                        };
                        var $229 = $233;
                    };
                    return $229;
                };
            })();
            if (R.ctr === 'TCO') arg = R.arg;
            else return R;
        }
    };
    const String$cmp = x0 => x1 => String$cmp$(x0, x1);

    function Map$from_list$(_xs$2) {
        var $237 = BBL$from_list$(String$cmp, _xs$2);
        return $237;
    };
    const Map$from_list = x0 => Map$from_list$(x0);
    const List$nil = ({
        _: 'List.nil'
    });

    function Pair$(_A$1, _B$2) {
        var $238 = null;
        return $238;
    };
    const Pair = x0 => x1 => Pair$(x0, x1);

    function List$cons$(_head$2, _tail$3) {
        var $239 = ({
            _: 'List.cons',
            'head': _head$2,
            'tail': _tail$3
        });
        return $239;
    };
    const List$cons = x0 => x1 => List$cons$(x0, x1);

    function DOM$text$(_value$1) {
        var $240 = ({
            _: 'DOM.text',
            'value': _value$1
        });
        return $240;
    };
    const DOM$text = x0 => DOM$text$(x0);

    function String$cons$(_head$1, _tail$2) {
        var $241 = (String.fromCharCode(_head$1) + _tail$2);
        return $241;
    };
    const String$cons = x0 => x1 => String$cons$(x0, x1);
    const String$concat = a0 => a1 => (a0 + a1);

    function List$fold$(_list$2, _nil$4, _cons$5) {
        var self = _list$2;
        switch (self._) {
            case 'List.cons':
                var $243 = self.head;
                var $244 = self.tail;
                var $245 = _cons$5($243)(List$fold$($244, _nil$4, _cons$5));
                var $242 = $245;
                break;
            case 'List.nil':
                var $246 = _nil$4;
                var $242 = $246;
                break;
        };
        return $242;
    };
    const List$fold = x0 => x1 => x2 => List$fold$(x0, x1, x2);

    function Either$(_A$1, _B$2) {
        var $247 = null;
        return $247;
    };
    const Either = x0 => x1 => Either$(x0, x1);

    function Either$left$(_value$3) {
        var $248 = ({
            _: 'Either.left',
            'value': _value$3
        });
        return $248;
    };
    const Either$left = x0 => Either$left$(x0);

    function Either$right$(_value$3) {
        var $249 = ({
            _: 'Either.right',
            'value': _value$3
        });
        return $249;
    };
    const Either$right = x0 => Either$right$(x0);

    function Nat$sub_rem$(_n$1, _m$2) {
        var Nat$sub_rem$ = (_n$1, _m$2) => ({
            ctr: 'TCO',
            arg: [_n$1, _m$2]
        });
        var Nat$sub_rem = _n$1 => _m$2 => Nat$sub_rem$(_n$1, _m$2);
        var arg = [_n$1, _m$2];
        while (true) {
            let [_n$1, _m$2] = arg;
            var R = (() => {
                var self = _m$2;
                if (self === 0n) {
                    var $250 = Either$left$(_n$1);
                    return $250;
                } else {
                    var $251 = (self - 1n);
                    var self = _n$1;
                    if (self === 0n) {
                        var $253 = Either$right$(Nat$succ$($251));
                        var $252 = $253;
                    } else {
                        var $254 = (self - 1n);
                        var $255 = Nat$sub_rem$($254, $251);
                        var $252 = $255;
                    };
                    return $252;
                };
            })();
            if (R.ctr === 'TCO') arg = R.arg;
            else return R;
        }
    };
    const Nat$sub_rem = x0 => x1 => Nat$sub_rem$(x0, x1);

    function Nat$div_mod$go$(_n$1, _m$2, _d$3) {
        var Nat$div_mod$go$ = (_n$1, _m$2, _d$3) => ({
            ctr: 'TCO',
            arg: [_n$1, _m$2, _d$3]
        });
        var Nat$div_mod$go = _n$1 => _m$2 => _d$3 => Nat$div_mod$go$(_n$1, _m$2, _d$3);
        var arg = [_n$1, _m$2, _d$3];
        while (true) {
            let [_n$1, _m$2, _d$3] = arg;
            var R = (() => {
                var self = Nat$sub_rem$(_n$1, _m$2);
                switch (self._) {
                    case 'Either.left':
                        var $256 = self.value;
                        var $257 = Nat$div_mod$go$($256, _m$2, Nat$succ$(_d$3));
                        return $257;
                    case 'Either.right':
                        var $258 = Pair$new$(_d$3, _n$1);
                        return $258;
                };
            })();
            if (R.ctr === 'TCO') arg = R.arg;
            else return R;
        }
    };
    const Nat$div_mod$go = x0 => x1 => x2 => Nat$div_mod$go$(x0, x1, x2);
    const Nat$div_mod = a0 => a1 => (({
        _: 'Pair.new',
        'fst': a0 / a1,
        'snd': a0 % a1
    }));

    function List$(_A$1) {
        var $259 = null;
        return $259;
    };
    const List = x0 => List$(x0);

    function Nat$to_base$go$(_base$1, _nat$2, _res$3) {
        var Nat$to_base$go$ = (_base$1, _nat$2, _res$3) => ({
            ctr: 'TCO',
            arg: [_base$1, _nat$2, _res$3]
        });
        var Nat$to_base$go = _base$1 => _nat$2 => _res$3 => Nat$to_base$go$(_base$1, _nat$2, _res$3);
        var arg = [_base$1, _nat$2, _res$3];
        while (true) {
            let [_base$1, _nat$2, _res$3] = arg;
            var R = (() => {
                var self = (({
                    _: 'Pair.new',
                    'fst': _nat$2 / _base$1,
                    'snd': _nat$2 % _base$1
                }));
                switch (self._) {
                    case 'Pair.new':
                        var $260 = self.fst;
                        var $261 = self.snd;
                        var self = $260;
                        if (self === 0n) {
                            var $263 = List$cons$($261, _res$3);
                            var $262 = $263;
                        } else {
                            var $264 = (self - 1n);
                            var $265 = Nat$to_base$go$(_base$1, $260, List$cons$($261, _res$3));
                            var $262 = $265;
                        };
                        return $262;
                };
            })();
            if (R.ctr === 'TCO') arg = R.arg;
            else return R;
        }
    };
    const Nat$to_base$go = x0 => x1 => x2 => Nat$to_base$go$(x0, x1, x2);

    function Nat$to_base$(_base$1, _nat$2) {
        var $266 = Nat$to_base$go$(_base$1, _nat$2, List$nil);
        return $266;
    };
    const Nat$to_base = x0 => x1 => Nat$to_base$(x0, x1);
    const String$nil = '';

    function Nat$mod$go$(_n$1, _m$2, _r$3) {
        var Nat$mod$go$ = (_n$1, _m$2, _r$3) => ({
            ctr: 'TCO',
            arg: [_n$1, _m$2, _r$3]
        });
        var Nat$mod$go = _n$1 => _m$2 => _r$3 => Nat$mod$go$(_n$1, _m$2, _r$3);
        var arg = [_n$1, _m$2, _r$3];
        while (true) {
            let [_n$1, _m$2, _r$3] = arg;
            var R = (() => {
                var self = _m$2;
                if (self === 0n) {
                    var $267 = Nat$mod$go$(_n$1, _r$3, _m$2);
                    return $267;
                } else {
                    var $268 = (self - 1n);
                    var self = _n$1;
                    if (self === 0n) {
                        var $270 = _r$3;
                        var $269 = $270;
                    } else {
                        var $271 = (self - 1n);
                        var $272 = Nat$mod$go$($271, $268, Nat$succ$(_r$3));
                        var $269 = $272;
                    };
                    return $269;
                };
            })();
            if (R.ctr === 'TCO') arg = R.arg;
            else return R;
        }
    };
    const Nat$mod$go = x0 => x1 => x2 => Nat$mod$go$(x0, x1, x2);
    const Nat$mod = a0 => a1 => (a0 % a1);
    const Bool$and = a0 => a1 => (a0 && a1);
    const Nat$gtn = a0 => a1 => (a0 > a1);
    const Nat$lte = a0 => a1 => (a0 <= a1);

    function Maybe$(_A$1) {
        var $273 = null;
        return $273;
    };
    const Maybe = x0 => Maybe$(x0);
    const Maybe$none = ({
        _: 'Maybe.none'
    });

    function Maybe$some$(_value$2) {
        var $274 = ({
            _: 'Maybe.some',
            'value': _value$2
        });
        return $274;
    };
    const Maybe$some = x0 => Maybe$some$(x0);

    function List$at$(_index$2, _list$3) {
        var List$at$ = (_index$2, _list$3) => ({
            ctr: 'TCO',
            arg: [_index$2, _list$3]
        });
        var List$at = _index$2 => _list$3 => List$at$(_index$2, _list$3);
        var arg = [_index$2, _list$3];
        while (true) {
            let [_index$2, _list$3] = arg;
            var R = (() => {
                var self = _list$3;
                switch (self._) {
                    case 'List.cons':
                        var $275 = self.head;
                        var $276 = self.tail;
                        var self = _index$2;
                        if (self === 0n) {
                            var $278 = Maybe$some$($275);
                            var $277 = $278;
                        } else {
                            var $279 = (self - 1n);
                            var $280 = List$at$($279, $276);
                            var $277 = $280;
                        };
                        return $277;
                    case 'List.nil':
                        var $281 = Maybe$none;
                        return $281;
                };
            })();
            if (R.ctr === 'TCO') arg = R.arg;
            else return R;
        }
    };
    const List$at = x0 => x1 => List$at$(x0, x1);

    function Nat$show_digit$(_base$1, _n$2) {
        var _m$3 = (_n$2 % _base$1);
        var _base64$4 = List$cons$(48, List$cons$(49, List$cons$(50, List$cons$(51, List$cons$(52, List$cons$(53, List$cons$(54, List$cons$(55, List$cons$(56, List$cons$(57, List$cons$(97, List$cons$(98, List$cons$(99, List$cons$(100, List$cons$(101, List$cons$(102, List$cons$(103, List$cons$(104, List$cons$(105, List$cons$(106, List$cons$(107, List$cons$(108, List$cons$(109, List$cons$(110, List$cons$(111, List$cons$(112, List$cons$(113, List$cons$(114, List$cons$(115, List$cons$(116, List$cons$(117, List$cons$(118, List$cons$(119, List$cons$(120, List$cons$(121, List$cons$(122, List$cons$(65, List$cons$(66, List$cons$(67, List$cons$(68, List$cons$(69, List$cons$(70, List$cons$(71, List$cons$(72, List$cons$(73, List$cons$(74, List$cons$(75, List$cons$(76, List$cons$(77, List$cons$(78, List$cons$(79, List$cons$(80, List$cons$(81, List$cons$(82, List$cons$(83, List$cons$(84, List$cons$(85, List$cons$(86, List$cons$(87, List$cons$(88, List$cons$(89, List$cons$(90, List$cons$(43, List$cons$(47, List$nil))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
        var self = ((_base$1 > 0n) && (_base$1 <= 64n));
        if (self) {
            var self = List$at$(_m$3, _base64$4);
            switch (self._) {
                case 'Maybe.some':
                    var $284 = self.value;
                    var $285 = $284;
                    var $283 = $285;
                    break;
                case 'Maybe.none':
                    var $286 = 35;
                    var $283 = $286;
                    break;
            };
            var $282 = $283;
        } else {
            var $287 = 35;
            var $282 = $287;
        };
        return $282;
    };
    const Nat$show_digit = x0 => x1 => Nat$show_digit$(x0, x1);

    function Nat$to_string_base$(_base$1, _nat$2) {
        var $288 = List$fold$(Nat$to_base$(_base$1, _nat$2), String$nil, (_n$3 => _str$4 => {
            var $289 = String$cons$(Nat$show_digit$(_base$1, _n$3), _str$4);
            return $289;
        }));
        return $288;
    };
    const Nat$to_string_base = x0 => x1 => Nat$to_string_base$(x0, x1);

    function Nat$show$(_n$1) {
        var $290 = Nat$to_string_base$(10n, _n$1);
        return $290;
    };
    const Nat$show = x0 => Nat$show$(x0);

    function App$Hello$draw$(_state$1) {
        var $291 = DOM$node$("div", Map$from_list$(List$nil), Map$from_list$(List$cons$(Pair$new$("border", "1px solid black"), List$nil)), List$cons$(DOM$node$("div", Map$from_list$(List$nil), Map$from_list$(List$cons$(Pair$new$("font-weight", "bold"), List$nil)), List$cons$(DOM$text$("Hello, world!"), List$nil)), List$cons$(DOM$node$("div", Map$from_list$(List$nil), Map$from_list$(List$nil), List$cons$(DOM$text$(("Clicks: " + Nat$show$((() => {
            var self = _state$1;
            switch (self._) {
                case 'App.Store.new':
                    var $292 = self.local;
                    var $293 = $292;
                    return $293;
            };
        })()))), List$nil)), List$cons$(DOM$node$("div", Map$from_list$(List$nil), Map$from_list$(List$nil), List$cons$(DOM$text$(("Visits: " + Nat$show$((() => {
            var self = _state$1;
            switch (self._) {
                case 'App.Store.new':
                    var $294 = self.global;
                    var $295 = $294;
                    return $295;
            };
        })()))), List$nil)), List$nil))));
        return $291;
    };
    const App$Hello$draw = x0 => App$Hello$draw$(x0);

    function IO$(_A$1) {
        var $296 = null;
        return $296;
    };
    const IO = x0 => IO$(x0);
    const App$State$local = Pair$fst;

    function IO$ask$(_query$2, _param$3, _then$4) {
        var $297 = ({
            _: 'IO.ask',
            'query': _query$2,
            'param': _param$3,
            'then': _then$4
        });
        return $297;
    };
    const IO$ask = x0 => x1 => x2 => IO$ask$(x0, x1, x2);

    function IO$bind$(_a$3, _f$4) {
        var self = _a$3;
        switch (self._) {
            case 'IO.end':
                var $299 = self.value;
                var $300 = _f$4($299);
                var $298 = $300;
                break;
            case 'IO.ask':
                var $301 = self.query;
                var $302 = self.param;
                var $303 = self.then;
                var $304 = IO$ask$($301, $302, (_x$8 => {
                    var $305 = IO$bind$($303(_x$8), _f$4);
                    return $305;
                }));
                var $298 = $304;
                break;
        };
        return $298;
    };
    const IO$bind = x0 => x1 => IO$bind$(x0, x1);

    function IO$end$(_value$2) {
        var $306 = ({
            _: 'IO.end',
            'value': _value$2
        });
        return $306;
    };
    const IO$end = x0 => IO$end$(x0);

    function IO$monad$(_new$2) {
        var $307 = _new$2(IO$bind)(IO$end);
        return $307;
    };
    const IO$monad = x0 => IO$monad$(x0);
    const Unit$new = null;

    function IO$do$(_call$1, _param$2) {
        var $308 = IO$ask$(_call$1, _param$2, (_answer$3 => {
            var $309 = IO$end$(Unit$new);
            return $309;
        }));
        return $308;
    };
    const IO$do = x0 => x1 => IO$do$(x0, x1);
    const App$pass = IO$monad$((_m$bind$2 => _m$pure$3 => {
        var $310 = _m$pure$3;
        return $310;
    }))(Maybe$none);

    function App$do$(_call$2, _param$3) {
        var $311 = IO$monad$((_m$bind$4 => _m$pure$5 => {
            var $312 = _m$bind$4;
            return $312;
        }))(IO$do$(_call$2, _param$3))((_$4 => {
            var $313 = App$pass;
            return $313;
        }));
        return $311;
    };
    const App$do = x0 => x1 => App$do$(x0, x1);

    function App$watch$(_room$2) {
        var $314 = App$do$("watch", _room$2);
        return $314;
    };
    const App$watch = x0 => App$watch$(x0);
    const App$room_zero = "0x00000000000000";

    function App$new_post$(_room$2, _data$3) {
        var $315 = IO$monad$((_m$bind$4 => _m$pure$5 => {
            var $316 = _m$bind$4;
            return $316;
        }))(App$do$("post", (_room$2 + (";" + _data$3))))((_$4 => {
            var $317 = App$pass;
            return $317;
        }));
        return $315;
    };
    const App$new_post = x0 => x1 => App$new_post$(x0, x1);
    const App$empty_post = "0x0000000000000000000000000000000000000000000000000000000000000000";

    function App$set_local$(_value$2) {
        var $318 = IO$monad$((_m$bind$3 => _m$pure$4 => {
            var $319 = _m$pure$4;
            return $319;
        }))(Maybe$some$(_value$2));
        return $318;
    };
    const App$set_local = x0 => App$set_local$(x0);
    const Nat$add = a0 => a1 => (a0 + a1);

    function App$Hello$when$(_event$1, _state$2) {
        var self = _event$1;
        switch (self._) {
            case 'App.Event.init':
                var $321 = IO$monad$((_m$bind$6 => _m$pure$7 => {
                    var $322 = _m$bind$6;
                    return $322;
                }))(App$watch$(App$room_zero))((_$6 => {
                    var $323 = App$new_post$(App$room_zero, App$empty_post);
                    return $323;
                }));
                var $320 = $321;
                break;
            case 'App.Event.frame':
            case 'App.Event.mouse_up':
            case 'App.Event.key_down':
            case 'App.Event.key_up':
            case 'App.Event.mouse_move':
            case 'App.Event.mouse_over':
            case 'App.Event.mouse_click':
            case 'App.Event.input':
                var $324 = App$pass;
                var $320 = $324;
                break;
            case 'App.Event.mouse_down':
                var $325 = App$set_local$(((() => {
                    var self = _state$2;
                    switch (self._) {
                        case 'App.Store.new':
                            var $326 = self.local;
                            var $327 = $326;
                            return $327;
                    };
                })() + 1n));
                var $320 = $325;
                break;
        };
        return $320;
    };
    const App$Hello$when = x0 => x1 => App$Hello$when$(x0, x1);

    function App$no_tick$(_tick$2, _glob$3) {
        var $328 = _glob$3;
        return $328;
    };
    const App$no_tick = x0 => x1 => App$no_tick$(x0, x1);
    const App$Hello$tick = App$no_tick;

    function App$Hello$post$(_time$1, _room$2, _addr$3, _data$4, _global_state$5) {
        var $329 = (_global_state$5 + 1n);
        return $329;
    };
    const App$Hello$post = x0 => x1 => x2 => x3 => x4 => App$Hello$post$(x0, x1, x2, x3, x4);
    const App$Hello = App$new$(App$Hello$init, App$Hello$draw, App$Hello$when, App$Hello$tick, App$Hello$post);
    return {
        'App.new': App$new,
        'Pair.new': Pair$new,
        'App.State.new': App$State$new,
        'App.Hello.State': App$Hello$State,
        'App.Store.new': App$Store$new,
        'App.Hello.init': App$Hello$init,
        'DOM.node': DOM$node,
        'BBL': BBL,
        'Pair.fst': Pair$fst,
        'Pair.snd': Pair$snd,
        'BBL.bin': BBL$bin,
        'U32.new': U32$new,
        'Nat.apply': Nat$apply,
        'Word': Word,
        'Word.e': Word$e,
        'Word.i': Word$i,
        'Word.o': Word$o,
        'Word.inc': Word$inc,
        'Word.zero': Word$zero,
        'Nat.to_word': Nat$to_word,
        'Nat.succ': Nat$succ,
        'Nat.zero': Nat$zero,
        'Nat.to_u32': Nat$to_u32,
        'BBL.tip': BBL$tip,
        'BBL.singleton': BBL$singleton,
        'BBL.size': BBL$size,
        'Bool.false': Bool$false,
        'Bool.true': Bool$true,
        'Word.adder': Word$adder,
        'Word.add': Word$add,
        'U32.add': U32$add,
        'Word.shift_left.one.go': Word$shift_left$one$go,
        'Word.shift_left.one': Word$shift_left$one,
        'Word.shift_left': Word$shift_left,
        'Word.mul.go': Word$mul$go,
        'Word.to_zero': Word$to_zero,
        'Word.mul': Word$mul,
        'U32.mul': U32$mul,
        'BBL.w': BBL$w,
        'Cmp.as_ltn': Cmp$as_ltn,
        'Cmp.ltn': Cmp$ltn,
        'Cmp.gtn': Cmp$gtn,
        'Word.cmp.go': Word$cmp$go,
        'Cmp.eql': Cmp$eql,
        'Word.cmp': Word$cmp,
        'Word.ltn': Word$ltn,
        'U32.ltn': U32$ltn,
        'U32.from_nat': U32$from_nat,
        'BBL.node': BBL$node,
        'Cmp.as_gtn': Cmp$as_gtn,
        'Word.gtn': Word$gtn,
        'U32.gtn': U32$gtn,
        'BBL.balance': BBL$balance,
        'BBL.insert': BBL$insert,
        'BBL.from_list.go': BBL$from_list$go,
        'BBL.from_list': BBL$from_list,
        'U16.ltn': U16$ltn,
        'Cmp.as_eql': Cmp$as_eql,
        'Word.eql': Word$eql,
        'U16.eql': U16$eql,
        'U16.cmp': U16$cmp,
        'String.cmp': String$cmp,
        'Map.from_list': Map$from_list,
        'List.nil': List$nil,
        'Pair': Pair,
        'List.cons': List$cons,
        'DOM.text': DOM$text,
        'String.cons': String$cons,
        'String.concat': String$concat,
        'List.fold': List$fold,
        'Either': Either,
        'Either.left': Either$left,
        'Either.right': Either$right,
        'Nat.sub_rem': Nat$sub_rem,
        'Nat.div_mod.go': Nat$div_mod$go,
        'Nat.div_mod': Nat$div_mod,
        'List': List,
        'Nat.to_base.go': Nat$to_base$go,
        'Nat.to_base': Nat$to_base,
        'String.nil': String$nil,
        'Nat.mod.go': Nat$mod$go,
        'Nat.mod': Nat$mod,
        'Bool.and': Bool$and,
        'Nat.gtn': Nat$gtn,
        'Nat.lte': Nat$lte,
        'Maybe': Maybe,
        'Maybe.none': Maybe$none,
        'Maybe.some': Maybe$some,
        'List.at': List$at,
        'Nat.show_digit': Nat$show_digit,
        'Nat.to_string_base': Nat$to_string_base,
        'Nat.show': Nat$show,
        'App.Hello.draw': App$Hello$draw,
        'IO': IO,
        'App.State.local': App$State$local,
        'IO.ask': IO$ask,
        'IO.bind': IO$bind,
        'IO.end': IO$end,
        'IO.monad': IO$monad,
        'Unit.new': Unit$new,
        'IO.do': IO$do,
        'App.pass': App$pass,
        'App.do': App$do,
        'App.watch': App$watch,
        'App.room_zero': App$room_zero,
        'App.new_post': App$new_post,
        'App.empty_post': App$empty_post,
        'App.set_local': App$set_local,
        'Nat.add': Nat$add,
        'App.Hello.when': App$Hello$when,
        'App.no_tick': App$no_tick,
        'App.Hello.tick': App$Hello$tick,
        'App.Hello.post': App$Hello$post,
        'App.Hello': App$Hello,
    };
})();

/***/ })

}]);
//# sourceMappingURL=130.index.js.map