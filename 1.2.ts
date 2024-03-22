//№ 2 в документации посмотрел как получить позицию клика и поменял
document.addEventListener('click', (e) => {
    const coords:number[]= [e.clientX, e.clientX];
    console.log(`Point is ${coords[0]}, ${coords[1]}`);
});