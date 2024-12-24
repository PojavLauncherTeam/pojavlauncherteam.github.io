const Arrays = require('./arrays.js');
const NavBar = require('./arrays.js').NavBar;
const { CategoryOrder } = Arrays;



// Disgusting spam but readable
const WikiSideBar = (CategoryOrder[0]).map(category => generateSideBar(Arrays[category])); // Uses CategoryOrder to generate wiki sidebar
const ContributeSideBar = (require('./arrays.js').Contribute); // Just use page headers for sidebar
const AboutSideBar = (require('./arrays.js').About);
const PatchSideBar = (require('./arrays.js').Patch_Notes);

const SideBar = {
	'/wiki/': WikiSideBar,
	'/contribute/': ContributeSideBar,
	'/about/': AboutSideBar,
	'/patchnotes/': PatchSideBar,
}

module.exports = { SideBar, NavBar };


// WARNING: Everything below is just function definitions.
// Do not touch if you don't understand.


// Rant:
// I wrote this all originally with import/export syntax.
// I had ChatGPT turn it into module.export()/require() syntax by CommonJS
// Fuck you CommonJS
// arrays.js is allowed to use ES Module syntax because idfk
// Probably something with vuepress v1 implementation of config.js
// The documentation doesn't match behaviour

// Takes the title of the collapsable sidebar object
// and corresponding object that contains path and children
function generateSideBar(arrays) {
  // Recursively process the children array to handle nested objects
  const processChildren = (children, parentPath) => {
    return children.map(child => {
      // If it's a string, return the path with the currentPath prepended
      if (typeof child === 'string') {
        return parentPath + child;  // Prepend current path to string
      } else {
        // If it's an object, recursively process it with updated path
        return {
          title: child.title,
          collapsable: child.collapsable !== undefined ? child.collapsable : true,  // Default to true
          sidebarDepth: child.sidebarDepth || 2,  // Default to 2 if not defined
          children: processChildren(child.children, parentPath + child.path + '/')  // Recursively process children with updated path
        };
      }
    });
  };

  return {
    title: arrays.title,
    collapsable: arrays.collapsable !== undefined ? arrays.collapsable : true,
    sidebarDepth: arrays.sidebarDepth || 2,  // Default to 2 if undefined
    children: processChildren(arrays.children, arrays.path)  // Process the children
  };
}
