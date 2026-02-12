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
var role;
(function (role) {
    role[role["ADMIN"] = 0] = "ADMIN";
    role[role["READ_ONLY"] = 1] = "READ_ONLY";
    role[role["AUTHOR"] = 2] = "AUTHOR";
})(role || (role = {}));
var person = {
    name: "Arimeyaw",
    age: 22,
    nickname: "Tymer",
    hobbies: ["Sports", "Cooking"],
    role: role.ADMIN,
};
// person.role.push('admin');
// person.role[0]= 10;
// console.log(person.role);
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role === role.ADMIN) {
    console.log('This is admin');
}
