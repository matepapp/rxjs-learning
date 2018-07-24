import { ReplaySubject } from 'rxjs';

let subject = new ReplaySubject(30, 500);

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    error => addItem(error),
    () => addItem('Observer 1 Completed')
);

let i = 1;
let int = setInterval(() => subject.next(i++), 100);

setTimeout(() => subject.subscribe(data => addItem('Observer 2: ' + data)), 500);

function addItem(value: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}
