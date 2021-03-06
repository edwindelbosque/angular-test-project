import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  passwordLength = 0;

  onChangeLength = (value: number) => {
    this.passwordLength = value;
  };

  onChangeUseLetters = () => {
    this.includeLetters = !this.includeLetters;
  };

  onChangeUseNumbers = () => {
    this.includeNumbers = !this.includeNumbers;
  };

  onChangeUseSymbols = () => {
    this.includeSymbols = !this.includeSymbols;
  };

  onButtonClick = () => {
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let validCharacters = '';

    if (this.includeLetters) {
      validCharacters += letters;
    }

    if (this.includeNumbers) {
      validCharacters += numbers;
    }

    if (this.includeSymbols) {
      validCharacters += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validCharacters.length);
      generatedPassword += validCharacters[index];
    }

    this.password = generatedPassword;
  };
}
