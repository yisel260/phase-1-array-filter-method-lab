// Code your solution her



//function findMatching(drivers, passedInName) {
   // return drivers.filter(function(driver) {
    //  return driver.name.toLowerCase() === passedInName.toLowerCase();
   // });
 // }


  //function findMatching(drivers, passedInName) {
   // return drivers.filter(function(driver) {
   //   return driver.name.toLowerCase() === passedInName.toLowerCase();
   // });
 // }

  //function findMatching(drivers, passedInName) {
   // const filteredDrivers = drivers.filter(function(driver) {
   //   return driver.name.toLowerCase() === passedInName.toLowerCase();
   // });
  
  //  return filteredDrivers;
  //}

  function findMatching(drivers, passedInName) {
    const filteredDrivers = drivers.filter(function(driver) {
      return driver.toLowerCase() === passedInName.toLowerCase();
    });
  
    return filteredDrivers;
  }

  function fuzzyMatch(drivers, string ){
    const fuzzyDrivers = drivers.filter(function (driver){
        return driver.charAt(0) === string.charAt(0)
    });
    return fuzzyDrivers
  }

  function matchName(drivers, string){
    const matchedNames = drivers.filter(function (drivers){
       return  drivers.name === string 
    })
    return matchedNames
  }