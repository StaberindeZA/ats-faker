class baseFormat {
  outputFormat = ['Employee_ID', 'Social_Security_Number', 'First_Name', 'Last_Name', 'Legal_Entity',
                  'Cost_Center'];
  
  Employee_ID;
  Social_Security_Number;
  First_Name;
  Last_Name;
  Legal_Entity;
  Cost_Center;

  constructor() {
    // Use the Constructor to set default values.
    this.Legal_Entity = 'LE-1';
    this.Cost_Center = 'CC-1';
  }

  outputAsCSV() {
    let output = '';

    this.outputFormat.forEach((column, key, arr) => {
       
      output += this[column] === undefined ? '' : this[column];
      output += Object.is(arr.length - 1, key) ? '' : ',';
    })

    return output;
  }

}

export default baseFormat;