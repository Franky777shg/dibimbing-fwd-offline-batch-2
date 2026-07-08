let data = [
    {
        nama: "Andi",
        nilai: [80, 90, 85]
    },
    {
        nama: "Budi",
        nilai: [70, 75, 80]
    }
]

const dataStudentProcessor = (dataStudent) => {
    dataStudent.forEach((item, index) => {
        let rataRata = item.nilai.reduce((acc, hasilPerUjian) => acc + hasilPerUjian, 0) / item.nilai.length // [80, 90, 85].length
        let grade = ""

        if (rataRata >= 90) {
            grade = "A"
        } else if (rataRata >= 80) {
            grade = "B"
        } else if (rataRata >= 70) {
            grade = "C"
        } else if (rataRata >= 60) {
            grade = "D"
        } else {
            grade = "E"
        }

        console.log(`Nama: ${item.nama}`)
        console.log(`Rata Rata: ${rataRata}`)
        console.log(`Grade: ${grade}`)
        console.log("===================")
    })   
}
dataStudentProcessor(data)