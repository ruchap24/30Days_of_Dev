export default function ArrayComponent() {
    let todos = [{
        title: "Buy milk",
        done: false
    }];
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arr2 = [...arr];
    let arr3 = arr.map((item) => item * 2);
    let arr4 = arr.filter((item) => item % 2 === 0);
    let arr5 = arr.reduce((acc, item) => acc + item, 0);

    return (
        <div>
            <h3>Array</h3>
            <p>Original array: {arr.join(",")}</p>
            <p>Copy of array: {arr2.join(",")}</p>
            <p>Array with all elements doubled: {arr3.join(",")}</p>
            <p>Array with only even elements: {arr4.join(",")}</p>
            <p>Sum of all elements: {arr5}</p>
            <p>Todos: {JSON.stringify(todos)}</p>
        </div>
    );
}