const menu = [
  {
    id: 301,
    name: "Pasta",
    category: "Main Course",
    price: 12.99,
    ingredients: ["Penne", "Tomato Sauce", "Parmesan", "Basil"],
  },
  {
    id: 302,
    name: "Caesar Salad",
    category: "Salad",
    price: 8.99,
    ingredients: ["Lettuce", "Croutons", "Caesar Dressing", "Parmesan"],
  },
  {
    id: 303,
    name: "Burger",
    category: "Main Course",
    price: 10.99,
    ingredients: ["Beef Patty", "Lettuce", "Tomato", "Cheese", "Bun"],
  },
  {
    id: 304,
    name: "French Fries",
    category: "Side Dish",
    price: 4.99,
    ingredients: ["Potatoes", "Salt", "Oil"],
  },
  {
    id: 305,
    name: "Cheesecake",
    category: "Dessert",
    price: 6.99,
    ingredients: ["Cream Cheese", "Graham Cracker Crust", "Strawberries"],
  },
];

//q1

function getMenuItemName(menuItem) {
  return menuItem.name;
}
console.log(getMenuItemName(menu[0]));

//----------------------------------------------------------
//q2
function isMenuItemInCategory(menuItem, category) {
  if (category == menuItem.category) {
    return true;
  } else {
    return false;
  }
}

console.log(isMenuItemInCategory(menu[1], "Salad"));

//
//q3--------------------------------------------------------

function addMenuItem(menu, menuItem) {
  menu.push(menuItem);
  return menu;
}
const newMenuItem = {
  id: 306,
  name: "Pizza",
  category: "Main Course",
  price: 14.99,
  ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Pepperoni"],
};

console.log(addMenuItem(menu, newMenuItem));

//
// q4 ------------------------------------------------------------
let countMainCourseItems = (menu) => {
  let cOfMainCorse = menu.filter((menu) => {
    if (menu.category == "Main Course") {
      return true;
    } else {
      return false;
    }
  });
  return cOfMainCorse.length;
};

console.log(countMainCourseItems(menu));

//
//q5 --------------------------------------------------------------
function listMenuItemNamesByCategory(menu, category) {
  let names = [];
  menu.forEach((items) => {
    if (items.category == category) {
      names.push(items.name);
    }
  });
  return names;
}
console.log(listMenuItemNamesByCategory(menu, "Main Course"));

//

//q6 -----------------------------------------------------
function getCheapestMenuItem(menu) {
  let chepest = menu[0];
  menu.forEach((item) => {
    if (item.price < chepest.price) {
      chepest = item;
    }
  });
  return chepest;
}
console.log(getCheapestMenuItem(menu));

//
//q7 --------------------------------------------------------------
let getMenuItemsByIngredient = (menu, ingredient) => {
  return menu.filter((item) => {
    if (item.ingredients.includes(ingredient)) {
      return true;
    }
  });
};

console.log(getMenuItemsByIngredient(menu, "Parmesan"));

//
//q8 -------------------------------------------------------------------
function removeMenuItemById(menu, menuItemId) {
  return menu.filter((menuItem) => {
    if (menuItem.id != menuItemId) return true;
  });
}
console.log(removeMenuItemById(menu, 302));
