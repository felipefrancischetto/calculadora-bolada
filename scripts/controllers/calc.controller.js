class CalcController {

    constructor() {
        this._displayCalc = '0';
        this._currentDate;
        this.initialize();
    }

    initialize() {
        let displayCalcEl = document.querySelector('#display');
        let dateEl = document.querySelector('#date');
        let timeEl = document.querySelector('#time');

        displayCalcEl.innerHTML = '230';
        dateEl.innerHTML = '24/06/2018';
        timeEl.innerHTML = '21:06';
    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(value) {
        this._displayCalc = value;
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(value) {
        this._currentDate = value;
    }

}
