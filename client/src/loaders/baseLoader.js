class baseLoader {
  objData = {};
  loaderFunctions = {};

  constructor(objInputData) {
    this.objData = objInputData;
  }

  callLoaderFunctions() {
    for ( const loader in this.loaderFunctions ) {
      if(this.objData.outputFormat.includes(loader)) {     
        this.objData[loader] = this.loaderFunctions[loader] !== '' ? this.loaderFunctions[loader]() : this.objData[loader];
      };
    }
  }

  setData(objInputData) {
    this.objData = objInputData;
  }
  
  getData() {
    this.callLoaderFunctions();

    return this.objData;
  }

  outputCSV() {
    return this.objData.outputAsCSV();
  }

  loaderNull() {
    return '';
  }
}

export default baseLoader;