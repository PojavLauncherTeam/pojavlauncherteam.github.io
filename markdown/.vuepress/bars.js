const Arrays = require('./arrays.js');
const NavBar = require('./arrays.js').NavBar;
const { GroupOrder } = Arrays;

// Disgusting spam but readable
const WikiSideBar = (GroupOrder[0]).map(category => generateSideBar(Arrays[category])); // Uses GroupOrder to generate wiki sidebar
const AboutSideBar = (require('./arrays.js').about); // Just use page headers for sidebar
const ContributeSideBar = (require('./arrays.js').contribute); 
const PatchSideBar = (require('./arrays.js').patchnotes);

// Defines path specified sidebars
const SideBar = {
	'/wiki/': WikiSideBar,
  '/about/': AboutSideBar,
	'/contribute/': ContributeSideBar,
	'/patchnotes/': PatchSideBar,
}

module.exports = { SideBar, NavBar };


// WARNING: Everything below is just function definitions.
// Do not touch if you don't understand.


// Eats the path object and returns children with paths specified by path object.
// Implements relative to parent pathing, just like prefix in Vuepress v2.
function generateSideBar(arrays) {
  // Recursively process the children array to handle nested objects
  const processChildren = (children, parentPath) => {
    return children.map(child => {
      if (typeof child === 'string') { return parentPath + child; } // Affix parenthPath to children if string
      else { // If its not a string, assume it is a nested object and process like parent.
		return {
          title: child.title,
          collapsable: child.collapsable !== undefined ? child.collapsable : true,  // Default to true
          sidebarDepth: child.sidebarDepth || 2,  // Default to 2 if not defined
          children: processChildren(child.children, parentPath + child.path + '/')  // Recursively process children with parenthPath
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
