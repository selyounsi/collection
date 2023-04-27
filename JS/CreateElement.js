/**
 * createEle
 * 
 * @param {object} child 
 * @param {dom} parent 
 * @param {bool} before 
 * @returns Create and returns Child Element
 */
function createEle(child, parent, before = false) {

    let ele = document.createElement(child["ele"]);
    let dataset = child?.dataset ? child.dataset : false;

    delete child["ele"];
    delete child["dataset"];

    for(let type in child) {
        ele[type] = child[type];
    }

    if(dataset) {
        for(let type in dataset) {
         ele.dataset[type] = dataset[type];
        }  
    }

    before ? parent.insertBefore(ele, parent.firstChild) : parent.appendChild(ele);
    return ele;
}
  
// Create Unordered List element
let ul = createEle({ele: 'ul', classList: "myList"}, flc);
// Create List Item
let li = createEle({ele: 'li', innerText: "List Item 1", dataset: {listId: 1}}, ul);