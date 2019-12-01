class baseFormat {
  outputFormat = ['Employee_ID', 'Social_Security_Number', 'First_Name', 'Last_Name', 'Middle_Name', 'Hire_Date', 
  'Job_Code', 'FLSA_Status', 'Labor_Status', 'Pay_Type', 'Standard_Hours', 'Contract', 'Department', 'Location', 
  'Cost_Center', 'Legal_Entity', 'Reports_To_ID', 'Workers_Comp_Code', 'Birth_Date', 'Gender', 'Ethnicity', 
  'Marital_Status', 'Disability_Status', 'Veteran_Status', 'Phone_Number_1', 'Phone_Number_2', 'Email', 
  'Home_Address_Street1', 'Home_Address_Street2', 'Home_Address_City', 'Home_Address_Zip', 'Home_Address_Country_Code', 
  'Home_Address_State', 'Pay_Rate', 'Pay_Group', 'Calculate_FLSA', 'Direct_Deposit_Account_Number_1', 
  'Direct_Deposit_Routing_Number_1', 'Direct_Deposit_Account_Type_1', 'Direct_Deposit_Distribution_Value_1', 
  'Direct_Deposit_Distribution_Type_1', 'Direct_Deposit_Account_Number_2', 'Direct_Deposit_Routing_Number_2', 
  'Direct_Deposit_Account_Type_2', 'Direct_Deposit_Distribution_Value_2', 'Direct_Deposit_Distribution_Type_2', 
  'Federal_Tax_Block','FT_Withholding_Allowances', 'FT_Additional_Withholding_Amount', 'FT_Marital_Status', 
  'ST1_Tax_Block', 'ST1_State', 'ST1_Withholding_Allowances', 'ST1_Additional_Withholding_Amount', 
  'ST1_Marital_Status', 'TimeZone', 'Pay_Rule', 'eTime_Employee_Type', 'eTime_Accrual_Profile', 
  'Emergency_Contact1_First_Name', 'Emergency_Contact1_Last_Name', 'Emergency_Contact1_Relationship', 
  'Emergency_Contact1_Phone', 'Emergency_Contact2_First_Name', 'Emergency_Contact2_Last_Name', 
  'Emergency_Contact2_Relationship', 'Emergency_Contact2_Phone', 'External_ID', 'Associate_Classification' ]; 

  
  Employee_ID;
  Social_Security_Number;
  First_Name;
  Last_Name;
  Legal_Entity;
  Cost_Center;

  constructor() {
    // Use the Constructor to set default values.
    this.Employee_ID = 500001;
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