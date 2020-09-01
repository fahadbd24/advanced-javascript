const students = [
    {id:21, name: 'Sakib Khan'},
    {id:31, name: 'Ananta Jalil'},
    {id:41, name: 'Misha'},
    {id:71, name: 'Hero Alom'}
]

const name = students.map (s => s.name);
const ids = students.map ( s => s.id);
const bigger = students.filter (s => s.id>40);
const bigger1 = students.find (s => s.id>40)
console.log(bigger1);