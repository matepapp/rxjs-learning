import { Observable } from 'rxjs';

let observable = Observable.create((observer: any) => {
    observer.next('Hey guys');
});

observable.subscribe((next: any) => addItem(next));

function addItem(value: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}
