const student = {
  name: "Budi",
  age: 20
};

// Buat function updateStudent
const updateStudent = (data, ...hobby) => {
    console.log({
        ...data,
        hobbies: hobby
    })
}

// Cara memanggilnya
updateStudent(
  student,
  "Gaming",
  "Reading"
);
