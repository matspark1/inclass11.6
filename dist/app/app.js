var initalDescCount = 3;
var initalInstrCount = 3;
var recipes = [];
function initListeners() {
  formAdders();
}

function formAdders() {
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

    console.log(newItemObj);
    $(".formDesc input").each(function (index, data) {
      var value = $(this).val();
      console.log("this", $(this));
      if (value != "") {
        let keyName = "description" + index;
        let descObj = {};
        descObj[keyName] = value;
        newItemObj.descriptions.push(descObj);

        console.log("desc: " + newItemObj);
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
        console.log("instruct: " + newItemObj);
      }
    });
    if (imagePath != "" && itemName != "") {
      recipes.push(newItemObj);
    } else {
      alert("Please insert an Image and Recipe Name");
    }
  });
}

$(document).ready(function () {
  initListeners();
});
