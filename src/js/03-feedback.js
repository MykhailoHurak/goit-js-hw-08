
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

console.dir(refs.textarea);
console.dir(refs.email);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputForm, 500));

const feedbackFormState = localStorage.getItem('feedbackFormState')
  ? JSON.parse(localStorage.getItem('feedbackFormState'))
  : {};
  
onSavedTextareaInput();

function onInputForm(evt) {
  feedbackFormState[evt.target.name] = evt.target.value;
  console.log(feedbackFormState);
  localStorage.setItem('feedbackFormState', JSON.stringify(feedbackFormState));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedbackFormState');
}

function onSavedTextareaInput(evt) {
  if (!localStorage.getItem('feedbackFormState')) {
    return;
  }
  const savedMessage = JSON.parse(localStorage.getItem('feedbackFormState'));

  if (savedMessage) {
    if (savedMessage.email) {
      refs.email.value = savedMessage.email;
    }
    if (savedMessage.message) {
      refs.textarea.value = savedMessage.message;
    }
  }
}

// =====================================
// Завдання 3 - форма зворотного зв'язку

// HTML містить розмітку форми. 
// Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:
//    1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, 
// у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".
//    2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. 
// В іншому випадку поля повинні бути порожніми.
//    3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
//    4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. 
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.