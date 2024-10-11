// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
const Node = require('./node');

function levelWidth(root) {
    if (!root) return [];

    const queue = [root]; 
    const levelWidths = []; 

    while (queue.length > 0) {
        const currentWidth = queue.length;
        levelWidths.push(currentWidth); 

       
        for (let i = 0; i < currentWidth; i++) {
            const currentNode = queue.shift(); 

            
            for (let child of currentNode.children) {
                if (child) {
                    queue.push(child); 
                }
            }
        }
    }

    return levelWidths; 
}


module.exports = levelWidth;
