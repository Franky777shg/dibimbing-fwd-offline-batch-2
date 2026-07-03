class Hewan {
    constructor(nama, suara) {
        this.nama = nama
        this.suara = suara
        this.bisaDiganti = 20
    }
}

class Kucing extends Hewan {
    constructor(nama, suara) {
        super(nama, suara)
        this.kaki = 4
    }
}

class Burung extends Hewan {
    constructor(nama, suara) {
        super(nama, suara)
        this.kaki = 4
        this.bisaDiganti = 12
    }
}

let kucing1 = new Kucing("Lala", "Rawr")
let kucing2 = new Kucing("Lili", "Ngeong")
let burung1 = new Burung("Kicau", "Pikk")
// console.log(kucing1);
// console.log(kucing2);
console.log(burung1);
