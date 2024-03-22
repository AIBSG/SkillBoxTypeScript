//№1 создал интерфес для создания новых актеров. Поменял тип у age для корректного отображения howOldWillBeActorAfterTwentyYears
interface actor {
    name: string;
    firstName: string;
    country: string;
    city: string;
    hasOskar: boolean;
    filmsCount: number;
    age: number;
    languages: string[];
} 
const actorEl:actor = {
      name: 'Michael',
      firstName: 'Ivanov',
      country: 'Russia',
      city: 'Makhachkala',
      hasOskar: false,
      filmsCount: 10,
      age: 14,
      languages: ['RU-ru', 'EN-us', 'TR-tr'],
};
const howOldWillBeActorAfterTwentyYears = (actorEl:actor) => {
    return actorEl.age + 20;
}
console.log(howOldWillBeActorAfterTwentyYears(actorEl)); //? 
  
  
  



