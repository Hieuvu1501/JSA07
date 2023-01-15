const student = [
    {
        id : 1,
        name : 'Hieu',
        age : 15,
        gender : 'male'
    },
    {
        id : 2,
        name : 'Nguyen',
        age : 16,
        gender : 'male'
    },
    {
        id : 3,
        name : 'Quyet',
        age : 16,
        gender : 'male'
    },
    {
        id : 4,
        name : 'QDat',
        age : 16,
        gender : 'male'
    },
    {
        id : 5,
        name : 'Thanh',
        age : 15,
        gender : 'female'
    },
]

const studentAge = student.map(
    (item, index) => { return item.age+1}
)
console.log(studentAge);

const studentName = student.map(
    (item,index) => {return item.name}
)
console.log(studentName);

const studentFilter = student.filter(
    (item,index) => {return item.age>15}
)
console.log(studentFilter);

const studentFemale = student.filter(
    (item,index) => {return item.gender == 'female'}
) 
console.log(studentFemale);

const studentDivide3 = student.filter(
    (item,index) => {return item.age %3 == 0}
)
console.log(studentDivide3);