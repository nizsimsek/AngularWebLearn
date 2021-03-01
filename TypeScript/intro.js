"use strict";
exports.__esModule = true;
exports.Renk = void 0;
function selamVer(isim) {
    return "Merhaba " + isim;
}
var mesaj = selamVer('Nizam');
console.log(mesaj);
var sayi;
sayi = 10;
sayi = 10.4;
var sehir;
sehir = "Ankara";
sehir = "İstanbul";
var dogruMu;
dogruMu = true;
var sayilar = [1, 2, 3];
var sayilar2 = [1, 2, 3];
var dizi = [2, "Ankara"];
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk = exports.Renk || (exports.Renk = {}));
;
var renk;
var deger = "Ankara";
deger = 2;
console.log(deger);
console.log(Renk.Kirmizi);
