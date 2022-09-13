'use strict'
// const User = new user {
//     firstName,
//     lastName,
//     email,
//     age,
//     isLoggedIn
// }
function User(firstName, lastName, email, age, isLoggedIn){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.isLoggedIn = isLoggedIn;
};

const userNameProto = {
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    logout: function(){
        return this.isLoggedIn = false;
    },
    login: function(){
        return this.isLoggedIn = true;
    }
};

User.prototype = userNameProto;

const User1 = new User ('Vova', 'Bukin', 'bukin@gmail.com', 55, true);

console.log(User1);