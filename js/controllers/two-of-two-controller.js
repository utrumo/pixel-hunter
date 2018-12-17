import TwoOfTwoView from '../views/two-of-two-view';

export default class TwoOfTwoController {

  constructor(level, statsTemplate, continueGame) {
    const twoOfTwoView = new TwoOfTwoView(level, statsTemplate);

    twoOfTwoView.onFormChange = (form) => {
      const formData = new FormData(form);
      const isFilled = formData.has(`question1`) && formData.has(`question2`);
      if (!isFilled) {
        return;
      }
      const answers = {
        question1: formData.get(`question1`),
        question2: formData.get(`question2`),
      };
      continueGame(answers);
    };

    this._element = twoOfTwoView.element;
  }

  get element() {
    return this._element;
  }

}