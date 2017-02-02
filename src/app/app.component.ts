import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  inputText: string;
  nbLines: number = 0;
  nbChar: number = 0;
  nbLetters: number = 0;
  nbDigits: number = 0;
  nbWords: number = 0;
  wordsCount: any[];

  calculateStats() {
    this.nbLines = this.inputText.split(/\r|\r\n|\n/).length;

    this.nbChar = this.inputText.replace(/\r|\r\n|\n/g, '').length;

    let onlyLetters: string = this.inputText.replace(/\W/g, '');
    onlyLetters = onlyLetters.replace(/\d/g, '');
    this.nbLetters = onlyLetters.length;

    let onlyDigits: string = this.inputText.replace(/\D/g, '');
    this.nbDigits = onlyDigits.length;

    let cleanInput = this.inputText.replace(/\r|\r\n|\n/g, ' ');

    let words = cleanInput.split(' ')
      .filter((word) => word.length > 0);

    this.nbWords = words.length;

    let wordsMap = {};
    words.forEach((word) => {
      let length: string = word.length.toString();

      wordsMap[length] = wordsMap[length] !== undefined ? wordsMap[length] + 1 : 1;
    });

    this.wordsCount = [];
    for (let length in wordsMap) {
      this.wordsCount.push({length: length, count: wordsMap[length]});
    }
  }

  onChanges() {
    this.calculateStats();
  }
}
