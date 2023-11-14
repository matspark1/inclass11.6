import { addFormListener, formAdders } from "./app.js";

var recipes = [];

// NAVIGATION DONT TOUCH
export function changePage(pageName) {
  $("#app .formHolder div").off("click", "**");
  $("#app .formHolder .submit").off("click", "**");

  if (pageName == "addRecipe") {
    $.get(`pages/${pageName}.html`, (data) => {
      $("#app").html(data);
      addFormListener();
      formAdders();
    }).fail((error) => {
      console.log("Error: " + error);
    });
  } else {
    $.get(`pages/${pageName}.html`, (data) => {
      $("#app").html(data);
      if (recipes.length == 0) {
        $(".vr").append(`<p>You have no recipes.</p>`);
      } else {
        $.each(recipes, (idx, recipe) => {
          $(".recipe-holder").append(`<div class="recipe">
      <div class="imageHolder">
        <img
          src="${recipe.imagePath}"
        />
      </div>
      <div class="titleDesc">
        <h4>${recipe.itemName}</h4>
      </div>
      <div class="descriptions">
        <ul>
         ${recipe.descriptions
           .map((description, idx) => {
             let keyName = "description" + idx;
             return `<li>${description[keyName]}</li>`;
           })
           .join("")}
        </ul>
      </div>
      <div class="instructions">
        <ol>
              ${(() => {
                let instrucString = "";
                $.each(recipe.instructions, (idx, instruction) => {
                  let keyName = "instruction" + idx;
                  instrucString += `<li>${instruction[keyName]}</li>`;
                });
                return instrucString;
              })()}
        </ol>
      </div>
    </div>`);
        });
      }
    }).fail((error) => {
      console.log("Error: " + error);
    });
  }
}
// NAVIGATION DONT TOUCH

export function addRecipe(newRecipe) {
  recipes.push(newRecipe);
  console.log(recipes);
}
