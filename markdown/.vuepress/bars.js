const Arrays = require("./arrays.js");
const NavBar = require("./arrays.js").NavBar;
const { GroupOrder } = Arrays;

// Uses GroupOrder to generateSideBarOrder. The input is the indice of your array in GroupOrder.
const WikiSideBar = generateSideBarOrder(0);
const AboutSideBar = generateSideBarOrder(1);
const ContributeSideBar = generateSideBarOrder(2);
const PatchSideBar = generateSideBarOrder(3);

/** Defines path specified, generated sidebars */
const SideBar = {
  "/wiki/": WikiSideBar,
  "/about/": AboutSideBar,
  "/contribute/": ContributeSideBar,
  "/patchnotes/": PatchSideBar,
};

module.exports = { SideBar, NavBar };
// WARNING: Everything below is just function definitions.
// Do not touch if you don't understand.

/**
 * Eats the path object and returns children with paths specified by path object.
 * Implements relative to parent pathing, just like prefix in Vuepress v2, under object property `path`.
 * Only works with syntax for Group Sidebars.
 * Should not be used. Use generateSideBarOrder instead.
 * @param {string} arrays - Takes the name of a const and turns it into a sidebar. Will error on incorrect syntax in the object.
 * @returns {array} - A sidebar array
 */
function generateSideBar(arrays) {
  /** Recursively process the children array to handle nested objects */
  const processChildren = (children, parentPath) => {
    return children.map((child) => {
      if (typeof child === "string") {
        return parentPath + child;
      } else {
        return {
          title: child.title,
          collapsable:
            child.collapsable !== undefined ? child.collapsable : true, // Default to true
          sidebarDepth: child.sidebarDepth || 2, // Default to 2 if not defined
          children: processChildren(
            child.children,
            parentPath + child.path + "/"
          ), // Recursively process children with parenthPath
        };
      }
    });
  };
  return {
    title: arrays.title,
    collapsable: arrays.collapsable !== undefined ? arrays.collapsable : true, // Default to true
    sidebarDepth: arrays.sidebarDepth || 2, // Default to 2 if not defined
    children: processChildren(arrays.children, arrays.path), // Process the children
  };
}
/**
 * Checks the const given by GroupOrder and checks if it is an Array or Object.
 * Works with automatic sidebar generation via headers when given .md files.
 * Maps an array called GroupOrder that defines the order of appearance of Grouped Sidebars on the sidebar array.
 * @param {int} - Takes an indice of GroupOrder
 * @returns {array} - A sidebar array
 */
function generateSideBarOrder(order) {
  var currentArray = GroupOrder[order].map((order) => {
    return Arrays[order];
  }); // [0] is there because .map() returns the values within its own array. We don't want that when checking if currentArray is an object or not
  var isArr =
    Object.prototype.toString.call(currentArray[0]) == "[object Array]"; // Check if it is truly an array or an object
  if (isArr) {
    // If it is just an array, use headers to define SideBar
    return currentArray[0];
  } else {
    // If it is an object, generate the sidebar according to its properties
    return GroupOrder[order].map((category) => {
      return generateSideBar(Arrays[category]);
    });
  }
}
