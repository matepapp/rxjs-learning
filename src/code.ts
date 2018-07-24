import { AsyncSubject } from 'rxjs';

let subject = new AsyncSubject();

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    () => addItem('Observer 1 Completed')
);

let i = 1;
setInterval(() => subject.next(i++), 100);

setTimeout(() => {
    subject.subscribe(data => addItem('Observer 2: ' + data))
    subject.complete();
}, 500);

function addItem(value: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}
