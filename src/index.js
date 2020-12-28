import './css/style.css';

window.addEventListener('load', () => {
  const submitBtn = document.querySelector('.count__form-btn');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const fights = document.querySelector('.count__form-fights');
    const gems = document.querySelector('.count__form-gems');
    const ratio = document.querySelector('#ratio');
    const souls = document.querySelector('#souls');
    const ratioValue = parseFloat(ratio.value.replace(',', '.'));
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
    const gemsCount = Math.ceil(18 * (soulsValue / (10 * parseFloat(ratioValue))));

    if (Number.isNaN(fightsCount)) {
      fights.innerHTML = 'Проверьте данные которые вы вводите';
    }

    fights.innerHTML = `Боев: <span class="count__form-fightsCount">${fightsCount}</span>`;
    gems.innerHTML = `Красных: <span class="count__form-gemsCount">${gemsCount}</span>`;
  });

  const eventRelicBtns = document.querySelectorAll('.eventRelic-btnsGroup-btn');
  const eventRatio = document.querySelector('#ratio-event');
  const starCountedField = document.querySelector('.eventRecic-counter');
  const resultEventRelic = document.querySelector('.eventRecic-result');
  const resetEventData = document.querySelector('.eventRecic-reset');

  function updateResultEventRelic(i) {
    const ratioEventValue = +(eventRatio.value.replace(',', '.'));
    switch (i) {
      case 0:
        resultEventRelic.innerHTML = +resultEventRelic.textContent
          + (10 + 10 * 3) * 8 * ratioEventValue;
        break;
      case 1:
        resultEventRelic.innerHTML = +resultEventRelic.textContent
          + (10 + 10 * 4.5) * 8 * ratioEventValue;
        break;
      case 2:
        resultEventRelic.innerHTML = +resultEventRelic.textContent
          + (10 + 10 * 9) * 8 * ratioEventValue;
        break;
      case 3:
        resultEventRelic.innerHTML = +resultEventRelic.textContent
          + (10 + 10 * 18) * 8 * ratioEventValue;
        break;
      default:
        resultEventRelic.innerHTML = +resultEventRelic.textContent
          + (10 + 10 * 36) * 8 * ratioEventValue;
        break;
    }
  }

  eventRelicBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      starCountedField.innerHTML = `${starCountedField.innerHTML} ${btn.innerHTML}`;
      updateResultEventRelic(index);
    });
  });

  resetEventData.addEventListener('click', () => {
    starCountedField.innerHTML = '';
    resultEventRelic.textContent = 0;
  });
});
