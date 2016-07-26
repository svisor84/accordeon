//Первая домашка,
function prepend(newElement,container)
{
  container.insertBefore(newElement, container.firstChild)
}

var container = document.querySelector("#container")
var newElement = document.createElement('p')
newElement.innerText = 'hello'
prepend(newElement,container)

//вторая домашка
(function(){
export  function clearTextNodes(container){
        let childNodes = container.childNodes;
        for(let i=0; i<childNodes.length; i++){
          let node = childNodes[i];
          if(node.nodeType == 3){
            node.remove();
          }
          if(node.nodeType ==1){
                clearTextNodes(node);
          }
        }
      }
})();
