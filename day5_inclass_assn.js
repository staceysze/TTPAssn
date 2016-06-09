var student = {
  Name : "Stacey",
  Major : "CSCI"
}
for(i in student) {
  console.log(i);
}



<!-- create a constructor -->
function Multiplier() {
  this.currentValue = "1";
  multiply : function(num_supplied) {
    currentValue = num_supplied*currentValue;
  };
  getCurrentValue : function() {
    return currentValue;
  };
}
