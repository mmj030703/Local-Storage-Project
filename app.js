const studentsContainer = document.querySelector('.students_container');
const nameInput = document.querySelector('.nameInput');
const ageInput = document.querySelector('.ageInput');
const rollInput = document.querySelector('.rollInput');
const submitBtn = document.querySelector('.submitBtn');

const students = JSON.parse(localStorage.getItem('students')) || [];

const addStudent = (name, age, roll) => {
    const student = {
        name,
        age,
        roll
    };    
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
    return student;
}

const appendStudent = ({name, age, roll}) => {
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');

    studentName.textContent = "Student Name: " + name;
    studentAge.textContent = "Student Age: " + age;
    studentRoll.textContent = "Student Roll: " + roll;

    studentDiv.append(studentName, studentAge, studentRoll);
    studentsContainer.appendChild(studentDiv);
}

const submitHandler = (e) => {
    e.preventDefault();
    const newStudent = addStudent(
        nameInput.value, 
        ageInput.value, 
        rollInput.value
    );
    appendStudent(newStudent);

    nameInput.value = ""; 
    ageInput.value = "";
    rollInput.value = "";
}

students.forEach(appendStudent);

submitBtn.addEventListener('click', submitHandler);