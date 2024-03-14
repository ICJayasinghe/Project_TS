import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-calculator';

  calValue: number = 0;
  funT: any = 'NoFuntion';

  calNumber: string = 'noValue';

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(val: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(val);
    }
    else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    }
    else {
      this.calNumber = val;
    }

    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {

    if (val == 'c') {
      this.clearAll();
    }

    else if(this.funT == 'NoFunction'){
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funT = val;
    }
    else if (this.funT != 'Nofunction') {
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string) {
    if (this.funT == '+') {
      const Total = this.firstNumber + this.secondNumber
      this.totalAssignValues(Total, val);
    }
    if (this.funT == '-') {
      const Total = this.firstNumber - this.secondNumber
      this.totalAssignValues(Total, val); 
    }
    if (this.funT == '*') {
      const Total = this.firstNumber * this.secondNumber
      this.totalAssignValues(Total, val); 
    }
    if (this.funT == '/') {
      const Total = this.firstNumber / this.secondNumber
      this.totalAssignValues(Total, val); 
    }
    if (this.funT == '%') {
      const Total = this.firstNumber % this.secondNumber
      this.totalAssignValues(Total, val); 
    }
  }

  totalAssignValues(Total: number, val: string) {
    this.calValue = Total;
    this.firstNumber = Total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funT = val;
    if(val == '=') {this.onEqualPress() }
  }

  onEqualPress () {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funT = 'NoFunction';
    this.calNumber = 'noValue';
  }

  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funT = 'NoFunction';
    this.calNumber = 'noValue';
  }

}
