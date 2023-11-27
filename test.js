var myFirstCurry = function(word) {
    return function(user) {
           return [word , ", " , user].join("");
    };
};
let greeter = myFirstCurry("Namaste");
console.log(greeter("InfoWorld"));