var module=angular.module("ADEModule", []); // created module with name ADEModule
module.controller("ADEController", ADECtrl); // created controller ADEController and registered module in controller

function ADECtrl()
{
  this.editMode="false"; // used to show and hide buttons
  this.lists=["DashBoard", "Admin Console", "Claims","Payroll"];
    this.addNewModule=function() // to add a module
    {
        this.lists.push(this.AddNew);
        this.AddNew=""; // to make input blank after adding using ADD button
    }

    this.editModule=function() // edit module
    {
        this.editMode=!this.editMode;
                                    // editted vallue automatically bind in $scope
    }

    this.deleteModule=function(index) // delete module by passing $index which is predefined in repeat
    {
        this.lists.splice(index,1); // Splice(starting point, count) to delete.
    }

}
