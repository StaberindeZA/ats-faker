import { random, name } from 'faker';
import baseFormat from '../formats/baseFormat';

class hrDataLoad {
  objBase;
  faker;
  loaderFunctions;

  constructor() {
    this.objBase = new baseFormat();
    this.loaderFunctions = {
      'Employee_ID': '',
      'Social_Security_Number': this.loaderSSN,
      'First_Name': this.loaderFirstName,
      'Last_Name': this.loaderLastName,
      'Legal_Entity': '',
      'Cost_Center': '',
    };
  }

  tester() {
    this.objBase.outputFormat.forEach((column) => {
      this.objBase[column] = this.loaderFunctions[column] !== '' ? this.loaderFunctions[column]() : this.objBase[column];
    });
  }

  outputCSV() {
    this.tester();

    return this.objBase.outputAsCSV();
  }

  loaderSSN() {
    return random.number({min: 100000000, max: 999999999});
  }

  loaderFirstName() {
    return name.firstName();
  }

  loaderLastName() {
    return name.lastName();
  }

  loaderNull() {
    return '';
  }

}

export default hrDataLoad;