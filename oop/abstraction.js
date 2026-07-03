class Payment {
    constructor() {
        this.saldo = 50000
        this.bonus = 100000
        this.total = this.bonus + this.saldo
    }

    pay() {
        return this.total
    }
}

class CBA extends Payment {
    pay() {
        return "Pembayaran melalui CBA sukses"
    }
}

let hasil = new CBA()
console.log(hasil.pay())