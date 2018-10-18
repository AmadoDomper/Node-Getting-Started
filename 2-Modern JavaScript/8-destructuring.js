
const { PI, E, SQRT2 } = Math;

const circle = {
    label: 'circleX',
    radius: 2,
};

const circleArea = ({ radius }, {precision  = 2} = {}) => 
    (PI * radius * radius).toFixed(precision);

console.log(
    circleArea(circle)
);

const [first, second,,forth] = [10, 20, 30, 40];

console.log(forth);