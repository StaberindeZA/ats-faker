import baseLoader from './baseLoader';
import { random, name } from 'faker';

class payrollDataLoader extends baseLoader {

  constructor(objInputData) {
    super(objInputData)
    this.loaderFunctions = {
      'Social_Security_Number': this.loaderSSN,
      'First_Name': this.loaderFirstName,
      'Last_Name': this.loaderLastName,
    };
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

}

export default payrollDataLoader;