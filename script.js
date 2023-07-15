let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map((item) => {
      if (item.profession === "developer") {
        console.log(item);
      }
    });
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach((item) => {
      if (item.profession === "developer") {
        console.log(item);
      }
    });
  }
  
  function addData() {
    const newData = { id: 4, name: "emma", age: "22", profession: "admin" };
    arr.push(newData);
    console.log(arr);
  }
  
  function removeAdmin() {
    const filteredArray = arr.filter((item) => item.profession !== "admin");
    console.log(filteredArray);
  }
  
  function concatenateArray() {
    const newArray = arr.map((item) => item.name.toUpperCase());
    const concatenatedString = newArray.join(", ");
    console.log(concatenatedString);
  }
  
  // Example usage
  PrintDeveloperbyMap(); // Prints developers using map
  PrintDeveloperbyForEach(); // Prints developers using forEach
  addData(); // Adds new data to the array and prints the updated array
  removeAdmin(); // Removes admins from the array and prints the filtered array
  concatenateArray(); // Prints concatenated names in uppercase
  