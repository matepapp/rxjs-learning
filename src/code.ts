import { Observable, Observer } from 'rxjs';

let observable = Observable.create((observer: Observer<any>) => {
    observer.next('Hey guys!');
    observer.next('How are you?');
    observer.complete()
    observer.next('This item will not send.');
});

observable.subscribe(
    (next: any) => addItem(next),
    (error: any) => addItem(error),
    () => addItem('Completed!')
);

function addItem(value: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}
