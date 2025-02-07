'use srtict';

function gameBot() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  function ListOfQuestions() {
    const userRequest = +prompt('Угадай число от 1 до 100');
  
    if (userRequest === null) {
      alert('Игра окончена');
      return;
    }
  
    if (isNaN(userRequest)) {
      alert('Введи число!');
      ListOfQuestions();
      return;
    }
  
    if (userRequest > randomNumber) {
      alert('Загаданное число меньше');
      ListOfQuestions();
      } else if (userRequest < randomNumber) {
      alert('Загаданное число больше');
      ListOfQuestions();
      } else {
        alert('Поздравляю, Вы угадали!!!')
      }
      
  }
  
  ListOfQuestions()

}

gameBot()

