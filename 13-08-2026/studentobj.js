let student ={
    name:"shubh",
    roll:111,
    marks:12,
    ispass : true
};
console.log(student)

let info= [
    {
        name: "shubh",
        city: "A",
        cgpa: "9.5",
    }
,
    {
        name: "sid",
        city: "L",
        cgpa:"6",

    }
,
    {
        name:"gupta",
        city:"G",
        cgpa:"9.5",
    } 
]

console.table(info);

for(let i=0;i<info.length;i++)
{if(info[i].cgpa<8){
    console.log(info[i].name);
}

}