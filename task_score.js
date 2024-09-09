let studentName = 'Ivan Ivanov';
let introModule = 50;
let jsModule = 45;
let gitModule = 37;


let studentAverageScore = () => {
    return Math.round(((introModule + jsModule + gitModule) / 3));
}
console.log(`${studentName} received a average grade of ${studentAverageScore()} for homework assignments in three modules.`);

