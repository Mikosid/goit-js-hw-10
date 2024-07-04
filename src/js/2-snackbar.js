import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector('label > input');
let delay;

input.addEventListener('input', evt => {
  delay = evt.currentTarget.value;
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  function promise(delay, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  }

  promise(delay, form.elements.state.value)
    .then(value => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${value} ms`,
        messageColor: '#FFFFFF',
        backgroundColor: '#59A10D',
        position: 'topRight',
      });
    })
    .catch(value => {
      iziToast.show({
        message: `❌ Rejected promise in ${value} ms`,
        messageColor: '#FFFFFF',
        backgroundColor: '#EF4040',
        position: 'topRight',
      });
    });
  form.reset();
});
