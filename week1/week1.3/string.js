function result(str){
    console.log(str);
    console.log(str.length);
}
result("HelloWorld");

function Index(str,target){
    console.log(str.indexOf(target));
    console.log(str.lastIndexOf(target));

}
Index("Hello World World","World");

function getSlice(str){
    console.log(str.slice(2,3)); //slice(startingIndex,lastIndex-1)
}
getSlice("HelloWorld");

function get_substr(str){
    console.log(str.substr(2,3)); //substr(startingIndex,length of substring)
}
get_substr("HelloWorld");

const str="Hello World";
console.log(str.replace("World","JS"));

const str1="Hello Mayank How are you";
const arr=str1.split(" ");
console.log(arr);

const str2="Hello.Mayank.How are you";
const arr2=str1.split(",");
console.log(arr2);

const str3="                     Hello.Mayank.How are you                     ";
const st3=str1.trim(); // remove space from front and last ;
console.log(st3);