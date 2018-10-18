
// var i = 1
// const Mensaje = t => {
//     console.log('Hello');
//     if(i == t){
//         console.log('Done');
//         clearTimeout(timerId);
//     }
//     i++;
// };

// const timerId = setInterval(Mensaje,1000, 5);


let counter = 0;

const intervalId = setInterval(() => {
        console.log('Hello World');
        counter += 1;

        if(counter === 5){
            console.log('Done');
            clearInterval(intervalId);
        }

    },
    1000
);