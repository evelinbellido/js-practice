const scoreOfJhon = 80;
const scoreOfNick = 44;
const pass = 51;

if (scoreOfJhon >= pass && scoreOfNick >= pass) {
    console.log('Both students passed');

}else if (scoreOfJhon >= pass || scoreOfNick >= pass) {
    console.log('One of the students passed');
    if (scoreOfJhon > scoreOfNick) {
        console.log('and it is Jhon with ' + scoreOfJhon + ' points');
    }else {
        console.log('and it is Nick with ' + scoreOfNick + ' points');
    }
}else {
    console.log('Both of the students failed');
}