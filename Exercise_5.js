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
        // Untuk mencari total nilai
        let totalNilai = item.nilai.reduce((acc, element) => acc + element, 0)
        // Untuk mencari ada berapa nilai ujian
        let adaBerapaUjian = item.nilai.length
        
        let rataRata = totalNilai / adaBerapaUjian
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