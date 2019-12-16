// function main() {
//     console.log("START");
//     if(true){
//         var lang = "vi";
//         var target = "en-us";
//         console.log("inside block");
//         console.log(target);
//     }
//     console.log(lang);
//     console.log(target);
// }
// main();
// function main() {
//     var x=5;
//     console.log(x);
//     var x=10;
//     console.log(x);
//     var y = 55;
//     console.log(y);
//     var y=100;
//     console.log(y);
// }
// main();
function main() {
    let message: string;
    let total: number = 100;
    var isProduction = true;
    let prices: Array<number>  = [120, 88, 60];
    let languages: string[] = ['vi', 'en-us'];
    let now = new Date();
    let unknown: any;
    enum Direction{
        UP,
        DOWN,
        LEFT,
        RIGHT,
    }
};
function log(msg:string):void{
    console.log(msg)
}
interface IPost {
    id:string;
    title: string;
    body?: string;
}

