import baseLoader from './baseLoader';
import { random, name, date, phone, internet, address } from 'faker';

class hrDataLoader extends baseLoader {

  constructor(objInputData) {
    super(objInputData)
    this.loaderFunctions = {
      'Social_Security_Number': this.loaderSSN,
      'First_Name': this.loaderFirstName,
      'Last_Name': this.loaderLastName,
      'Middle_Name': this.loaderMiddleName,
      'Hire_Date': this.loaderHireDate,
      'FLSA_Status': this.loaderFLSAStatus,
      'Labor_Status': this.loaderLaborStatus,
      'Pay_Type': this.loaderPayType,
      'Standard_Hours': this.loaderStandardHours,
      'Reports_To_ID': this.loaderReportsTo,
      'Birth_Date': this.loaderBirthDate,
      'Gender': this.loaderGender,
      'Ethnicity': this.loaderEthnicity,
      'Marital_Status': this.loaderMaritalStatus,
      'Disability_Status': this.loaderDisabilityStatus,
      'Veteran_Status': this.loaderVeteranStatus,
      'Phone_Number_1': this.loaderPhone1,
      'Phone_Number_2': this.loaderPhone2,
      'Email': this.loaderEmail,
      'Home_Address_Street1': this.loaderStreet1,
      'Home_Address_Street2': this.loaderNull,
      'Home_Address_City': this.loaderCity,
      'Home_Address_Zip': this.loaderZip,
      'Home_Address_Country_Code': this.loaderCountryCode,
      'Home_Address_State': this.loaderState,
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

  loaderMiddleName() {
    return name.firstName();
  }

  loaderHireDate() {
    return '10/15/2019';
  }

  loaderFLSAStatus() {
    return 'Non-exempt';
  }
  
  loaderLaborStatus() {
    return 'PartTime';
  }

  loaderPayType() {
    return 'Hourly';
  }

  loaderStandardHours() {
    return '40';
  }

  loaderReportsTo() {
    return '1234568014';
  }

  loaderBirthDate() {
    const birthDate = date.between('1960/01/01', '1999/12/31');
    return `${birthDate.getMonth() + 1}/${birthDate.getDate()}/${birthDate.getFullYear()}`;
  }
  
  loaderGender() {
    return 'F';
  }
  
  loaderEthnicity() {
    return 'White';
  }
  
  loaderMaritalStatus() {
    return 'S';
  }
  
  loaderDisabilityStatus() {
    return 'No';
  }
  
  loaderVeteranStatus() {
    return 'I am NOT a protected Veteran';
  }
  
  loaderPhone1() {
    return phone.phoneNumber('##########');
  }
  
  loaderPhone2() {
    return phone.phoneNumber('##########');
  }
  
  loaderEmail() {
    return internet.email();
  }
  
  loaderStreet1() {
    return address.streetAddress();
  }
  
  loaderCity() {
    return address.city();
  }
  
  loaderState() {
    return address.state('US');
  }
  
  loaderCountryCode() {
    return 'US';
  }
  
  loaderZip() {
    return address.zipCode('#####');
  }
  
}

export default hrDataLoader;