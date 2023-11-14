import { changePage, addRecipe } from "../app/model.js";

var initalDescCount = 3;
var initalInstrCount = 3;

function initListeners() {
  formAdders();
  // NAVIGATION DONT TOUCH
  $("nav a").on("click", (e) => {
    e.preventDefault();
    let btnID = e.currentTarget.id;
    changePage(btnID);
  });
  // NAVIGATION DONT TOUCH
}

export function formAdders() {
  $(".descBtn").on("click", (e) => {
    initalDescCount++;
    $(".formDesc").append(
      `<input id="desc${(initalDescCount -= 1)}" type="text" placeholder="Description #${(initalDescCount += 1)}" />`
    );
  });
  $(".instrBtn").on("click", (e) => {
    initalInstrCount++;
    $(".formInstr").append(
      `<input id="instr${(initalInstrCount -= 1)}" type="text" placeholder="Instruction #${(initalInstrCount += 1)}" />`
    );
  });

  $(".submit").on("click", (e) => {
    console.log("submit");
    let newItemObj = {};

    let imagePath = $("#imagePath").val();
    let itemName = $("#itemName").val();

    newItemObj.imagePath = imagePath;
    newItemObj.itemName = itemName;

    newItemObj.descriptions = [];

    $(".formDesc input").each(function (index, data) {
      var value = $(this).val();
      if (value != "") {
        let keyName = "description" + index;
        let descObj = {};
        descObj[keyName] = value;
        newItemObj.descriptions.push(descObj);
      }
    });

    newItemObj.instructions = [];

    $(".formInstr input").each(function (index, data) {
      var value = $(this).val();
      if (value != "") {
        let keyName = "instruction" + index;
        let instrObj = {};
        instrObj[keyName] = value;
        newItemObj.instructions.push(instrObj);
      }
    });
    addRecipe(newItemObj);
  });
}

export function addFormListener() {
  console.log("form listen");
}

$(document).ready(function () {
  initListeners();
  changePage("viewRecipe");
});
