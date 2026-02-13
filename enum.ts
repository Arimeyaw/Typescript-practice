// const person: {
//     name:string,
//     age:number,
//     nickname:string,
// } ={
// const person:{
//     name: string,
//     age: number,
//     nickname: string,
//     hobbies:string[],
//     role: [number, string]
// } = {
//   name: "Arimeyaw",
//   age: 22,
//   nickname: "Tymer",
//   hobbies: ['Sports', 'Cooking'],
//   role:[2, 'author']
// };

enum role{ADMIN, READ_ONLY, AUTHOR}

const person = {
  name: "Arimeyaw",
  age: 22,
  nickname: "Tymer",
  hobbies: ["Sports", "Cooking"],
  role: role.ADMIN,
};

// person.role.push('admin');
// person.role[0]= 10;
// console.log(person.role);
 

let favoriteActivities: string[];
favoriteActivities = ["Sports"];
console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby);
}

if(
    person.role === role.ADMIN
){
    console.log('This is admin')

}