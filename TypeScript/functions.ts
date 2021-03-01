//Js fonksiyon
function topla(x, y) {
    return x + y;
}
//Ts fonksiyon (veri tipi tanımlanır)
function topla2(x: number, y: number): number {
    return x + y;
}

let topla3 = function (x: number, y: number): number {
    return x + y;
}

console.log(topla(2, 3));
console.log(topla("Ankara", 2));
console.log(topla2(2, 4));
console.log(topla3(4, 8));
//Default
function topla4(x: number, y: number = 4): number {
    return x + y;
}

console.log(topla4(3))
//Opsiyonel
// y? tarzında tanımlama yaparsak y undefined olur.
function topla5(x: number, y?: number): number {
    if (y) {
        return x + y;
    }
    return x;
}

console.log("Sadece x değeri girilirse : " + topla5(3))
console.log("X ve Y değeri girilirse : " + topla5(3, 40))

function davetEt(ilkDavetli: string, ...digerleri: string[]): string {
    return ilkDavetli + " " + digerleri.join(" ")
}
// Üstte bulunan fonksiyon ile aynı fakat okunurluk açısından üstte bulunan güzel
// function davetEt2(...digerleri: string[]): string {
//     return digerleri.join(" ")
// }

console.log(davetEt("Nizam","Deniz","Ege"))