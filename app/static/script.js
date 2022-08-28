console.log("Hello? Its me...");

function addRecipe(id) {
  let request = fetch(`/api/addrecipe/${id}`, {
    method: "POST",
    headers: { "x-access-token": `Bearer ${window.userToken}` },
  }).then((response) => {
    alert("fuckin right");
    console.log(response);
  });
}

async function clickedEvent(id = "") {
  if (id == "") {
    let request = fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => {
        if (response.ok) {
          // console.log('Is this happening too?');
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then((recipe) => {
        console.log(recipe);
        displayRecipe(recipe);
      })
      .catch((error) => console.error("FUNKY FETCH ERROR:", error));
  } else {
    let request = fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.phpi=${id}`
    )
      .then((response) => {
        if (response.ok) {
          // console.log('Is this happening too?');
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then((recipe) => {
        console.log(recipe);
        displayRecipe(recipe);
      })
      .catch((error) => console.error("FUNKY FETCH ERROR:", error));
  }
}
function displayRecipe(recipe) {
  const recipe_name = recipe.meals[0].strMeal;
  const recipe_id = recipe.meals[0].idMeal;
  const recipe_img = recipe.meals[0].strMealThumb;
  const recipe_instructions = recipe.meals[0].strInstructions;
  console.log(`Recipe name: ${recipe_name}, recipe id: ${recipe_id}`);

  const recipeDiv = document.getElementById("RecipeDiv");
  let displayHTML = `<li class="list-group-item"><h5>Recipe Name: ${recipe_name}</h5></li>`;
  displayHTML = `<li class="list-group-item"><button onclick="addRecipe(${recipe_id})">Do a thing</button></li>`;
  displayHTML += `<li class="list-group-item"><h6>Recipe ID: ${recipe_id}</h6></li>`;
  displayHTML += `<li><img src=${recipe_img}></li>`;
  displayHTML += `<li>${recipe_instructions}</li>`;
  recipeDiv.innerHTML = displayHTML;
}
clickedEvent();
