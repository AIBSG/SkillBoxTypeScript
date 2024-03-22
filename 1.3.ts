//№3
// Первая часть кода: Наверное эта функция будет считать количество элементов, которые будут удволтворять логическому выражению 

function someFunc1(data) {
    return data.reduce((acc, current) => {
        acc + Number(current.age > 18 && current.isMale), 0);
    };
    }
    
    // Вторая часть кода: Функция будет считаль людей старше 18 и пол которых мужской
    
    type Human = {
        name: string,
        age: number,
        gender: 'male' | 'female',
    }
    function someFunc2(data: Human[]): number {
      return data.reduce((acc: number, current: Human) => {
            acc + Number(current.age > 18 && current.gender === 'male'), 0);
        };
    }