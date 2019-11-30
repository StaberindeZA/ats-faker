import React from 'react';
import baseFormat from '../formats/baseFormat';

class Download extends React.Component {
  downloadCSV() {
    let baseObject = new baseFormat();
    
    let csvInput = 'Employee_ID,';
    let filename = 'testfile.csv';
    var csvFile;
    var downloadLink;

    csvInput = baseObject.outputAsCSV();
    console.log(csvInput);

    // csvFile = new Blob([csvInput], {type:"text/csv"});
    // downloadLink = document.createElement("a");
    // downloadLink.download = filename;
    // downloadLink.href = window.URL.createObjectURL(csvFile);
    // downloadLink.style.display = "none";
    // document.body.appendChild(downloadLink);
    // downloadLink.click();
  }
  
  render() {
    return (
      <div>
        <button onClick={this.downloadCSV}>
          Download CSV
        </button>
      </div>
    );
  }
}

export default Download;