import React from 'react';
import hrDataLoad from '../loaders/hrDataLoad';

class Download extends React.Component {
  downloadCSV() {
    let baseObject = new hrDataLoad();
    
    let csvInput = 'Employee_ID,';
    let filename = 'testfile.csv';
    var csvFile;
    var downloadLink;

    csvInput = baseObject.outputCSV();
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