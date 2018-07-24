import { Observable, Observer } from 'rxjs';

let observable: Observable<any> = Observable.create((observer: Observer<any>) => {
    observer.next('Hey guys!');
    observer.next('How are you?');
    setInterval(() => observer.next("I am good."), 2000);
});

let observer = observable.subscribe(
    (next: any) => addItem(next),
    (error: any) => addItem(error),
    () => addItem('Completed!')
);

let observer2 = observable.subscribe(next => addItem(next));
observer.add(observer2);

setTimeout(() => observer.unsubscribe(), 6001);

function addItem(value: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}
