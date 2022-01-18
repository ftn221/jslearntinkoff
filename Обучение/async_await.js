//Async/await - специальный синтаксис для работы с промисами

async function f() {
    return 1;
}

//У слова async один простой смысл: эта функция всегда возвращает промис. Значения других типов оборачиваются в завершившийся успешно промис автоматически.

//функция возвратит выполненный промис с результатом 1:
async function f() {
    return 1;
}
f().then(alert); // 1
//синтаксис выше аналогичен
async function f() {
    return Promise.resolve(1);
}
f().then(alert); // 1
//Так что ключевое слово async перед функцией гарантирует, что эта функция в любом случае вернёт промис.
//Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.
async function f() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 1000)
    });  
    let result = await promise; // будет ждать, пока промис не выполнится (*)  
    alert(result); // "готово!"
  }
f();
//await нельзя использовать в обычных функциях
//Асинхронные методы классов
class Waiter {
    async wait() {
      return await Promise.resolve(1);
    }
  }
  
  new Waiter()
    .wait()
    .then(alert); // 1

//Обработка ошибок
//Когда промис завершается успешно, await promise возвращает результат. Когда завершается с ошибкой – будет выброшено исключение. Как если бы на этом месте находилось выражение throw.
async function f() {
    await Promise.reject(new Error("Упс!"));
  }
//аналогичен
async function f() {
    throw new Error("Упс!");
  }
//обработка через try catch
async function f() {

    try {
      let response = await fetch('http://no-such-url');
    } catch(err) {
      alert(err); // TypeError: failed to fetch
    }
  }
  
  f();

