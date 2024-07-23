function add(n1,n2)
{
    return n1+n2;
}

// console.log(add(1,2))

let addtwo = (n) =>
    {
        return n+2;
    }
    
    console.log(addtwo(4))


let obj={
    name:"crj",
    age:19,
    email:"crj@gmail.com"
}

function objval(anyobject)
{
    console.log(` My name is ${name} and my age is ${age}`);
}

const {name,age,email}=obj;

objval(obj); 



const user = {
    username:"chaitanya",
    email:"chaitanya@gmail.com",
    price:999,
    welcomeMessage: function(){
        return `Welcome ${this.username} to the application`;
    }
}


let newarray = [1,2,3,4]

// reduce()

// let total = newarray.reduce((total,currentval)=> total+currentval,0);
// console.log(total);


let total = newarray.reduce((total,currentval)=> {
    console.log(`total :${total}  and currentval : ${currentval}`);
    return total+currentval;

    },0);
console.log(total);



let str ="This23 is45 t32est message";

for(let i=0;i<str.length;i++)
{
    if(str[i]===" ")
    {
        console.log();
    }
}

console.log(newstr);