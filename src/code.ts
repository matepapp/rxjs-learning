import { fromEvent, Observable, Observer } from 'rxjs';

let observable = fromEvent(document, 'mousemove');

setTimeout(() => observable.subscribe(event => addItem(event)), 2000);

function addItem(value: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}
