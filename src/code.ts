import { Subject } from 'rxjs';

let subject = new Subject();

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    error => addItem(error),
    () => addItem('Observer 1 Completed')
);

subject.next('The first thing has been sent');

let observer2 = subject.subscribe(
    data => addItem('Observer 2: ' + data),
    error => addItem(error),
    () => addItem('Observer 2 Completed')
);

subject.next('The second thing has been sent');
subject.next('The third thing has been sent');

observer2.unsubscribe();

subject.next('A final thing has been sent');

function addItem(value: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}
