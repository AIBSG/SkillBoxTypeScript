//___№ 1___________________________________________________________________ 
const actor: {
    name: string;
    firstName: string;
    country: string;
    city: string;
    hasOskar: boolean;
    filmsCount: number;
    age: number;
    languages: string[];
  } = {
      name: 'Michael',
      firstName: 'Ivanov',
      country: 'Russia',
      city: 'Makhachkala',
      hasOskar: false,
      filmsCount: 10,
      age: 14,
      //у поля age должен быть тип number. Такая строгая типизация позволит избежать ошибки во время вычисления howOldWillBeActorAfterTwentyYears
      languages: ['RU-ru', 'EN-us', 'TR-tr'],
  };
  const howOldWillBeActorAfterTwentyYears = (actor) => {
      return actor.age + 20;
  }
  console.log(howOldWillBeActorAfterTwentyYears(actor)); //? 
  
  
  
  //___№ 2___________________________________________________________________
  document.addEventListener('click', (e) => {
    const coords:number[]= [e.x, e.y];
    console.log(`Point is ${coords[0]}, ${coords[1]}`);
});