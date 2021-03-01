function selamVer(isim: string) {
    return "Merhaba " + isim
}

let mesaj = selamVer('Nizam')

console.log(mesaj)

let sayi: number
sayi = 10
sayi = 10.4

let sehir: string
sehir = "Ankara"
sehir = "İstanbul"

let dogruMu: boolean
dogruMu = true

let sayilar: number[] = [1, 2, 3]
let sayilar2: Array<number> = [1, 2, 3]

let dizi: [number, string] = [2, "Ankara"]

export enum Renk {
    Kirmizi = 1,
    Siyah,
    Mavi
};
let renk: Renk.Kirmizi

let deger: any = "Ankara"
deger = 2

let deger2: void = undefined

function selamVer2(): void {
    console.log("Merhaba")
}

