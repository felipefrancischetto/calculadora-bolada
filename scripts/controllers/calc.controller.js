class CalcController {

    constructor() {
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#date');
        this._timeEl = document.querySelector('#time');
        this._currentDate;
        this.initialize();
    }

    initialize() {
        this._displayCalcEl.innerHTML = '0';
        this.setDisplayDateTime();
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);
    }

    setDisplayDateTime() {
        this._dateEl.innerHTML = new Date().toLocaleDateString(this._locale);
        this._timeEl.innerHTML = new Date().toLocaleTimeString(this._locale);
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get displayTime() {
        return this._dateEl.innerHTML;
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return this._currentDate.innerHTML;
    }

    set currentDate(value) {
        this._currentDate.innerHTML = value;
    }

}
