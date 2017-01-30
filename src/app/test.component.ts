import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dev-test-app',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.css']
})
export class DevTestComponent {

  inputText: string;
  nbLines: number = 0;
  nbChar: number = 0;
  nbLetters: number = 0;
  nbDigits: number = 0;
  nbWords: number = 0;

  calculateStats() {
    this.nbLines = this.inputText.split('\n').length;

    this.nbChar = this.inputText.length;

    let onlyLetters: string = this.inputText.replace(/\W/g, '');
    onlyLetters = onlyLetters.replace(/\d/g, '');
    this.nbLetters = onlyLetters.length;

    let onlyDigits: string = this.inputText.replace(/\D/g, '');
    this.nbDigits = onlyDigits.length;
  }
}
