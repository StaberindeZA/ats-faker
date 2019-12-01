import baseLoader from "./baseLoader";

class foundationalDataLoader extends baseLoader {

  constructor(objInputData) {
    super(objInputData);
    this.loaderFunctions = {
      'Job_Code': this.loaderJobCode,
      'Contract': this.loaderContract,
      'Department': this.loaderDepartment,
      'Location': this.loaderLocation,
      'Cost_Center': this.loaderCostCenter,
      'Legal_Entity': this.loaderLegalEntity,
      'Workers_Comp_Code': this.loaderWorkersCompCode,
      'Associate_Classification': this.loaderA2C,
    };
  }

  loaderJobCode() {
    return '41';
  }
  
  loaderContract() {
    return 'PTNE';
  }

  loaderDepartment() {
    return 'DEP-2';
  }

  loaderLocation() {
    return 'OL-264';
  }

  loaderLegalEntity() {
    return 'LE-2';
  }

  loaderCostCenter() {
    return 'CC-2';
  }

  loaderWorkersCompCode() {
    return '9053';
  }

  loaderA2C() {
    return 'Executivies'
  }

}

export default foundationalDataLoader;