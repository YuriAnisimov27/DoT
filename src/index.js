import './css/style.css';

window.addEventListener('load', () => {
  const submitBtn = document.querySelector('.count__form-btn');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const fights = document.querySelector('.count__form-fights');
    const gems = document.querySelector('.count__form-gems');
    const ratio = document.querySelector('#ratio');
    const souls = document.querySelector('#souls');
    const ratioValue = parseFloat(ratio.value);
    const soulsValue = +souls.value;

    if (Number.isNaN(ratioValue)) {
      fights.innerHTML = 'Не верно указан коэфициент! должно быть 1, 1.1, 1.2...';
      return;
    }

    if (Number.isNaN(soulsValue)) {
      gems.innerHTML = 'Не верно указано количество душ! должно быть 1, 48, 1100, 26000...';
      return;
    }

    const fightsCount = Math.ceil(soulsValue / (10 * parseFloat(ratioValue)));
    const gemsCount = fightsCount * 18;

    if (Number.isNaN(fightsCount)) {
      fights.innerHTML = 'Проверьте данные которые вы вводите';
    }

    fights.innerHTML = `Боев: <span class="count__form-fightsCount">${fightsCount}</span>`;
    gems.innerHTML = `Красных: <span class="count__form-gemsCount">${gemsCount}</span>`;
  });
});
