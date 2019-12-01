import React from 'react';
import hrDataLoader from '../loaders/hrDataLoader';
import foundationalDataLoader from  '../loaders/foundationalDataLoader';
import baseFormat from '../formats/baseFormat';
import baseLoader from '../loaders/baseLoader';

class Download extends React.Component {
  downloadCSV() {
    let baseObject = new baseFormat();
    let objHRData = new hrDataLoader();
    let objFoundtionData = new foundationalDataLoader();
    
    let csvInput;
    let filename = 'testfile.csv';
    var csvFile;
    var downloadLink;

    objHRData.setData(baseObject);
    baseObject = objHRData.getData();    

    objFoundtionData.setData(baseObject);
    baseObject = objFoundtionData.getData();

    csvInput = baseObject.outputAsCSV();
    console.log(csvInput);

    // // Build Header
    // let header = '';

    // baseObject.outputFormat.forEach((column, key, arr) => {
    //   header += column;
    //   header += Object.is(arr.length - 1, key) ? '' : ',';
    // })

    // let output = header + '\n' + csvInput;

    // csvFile = new Blob([output], {type:"text/csv"});
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