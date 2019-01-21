console.log("App.js: loaded");
import { element } from "./html-util.js";


export class App {
    mount(){
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector("#js-todo-count")
        let todoItemCount = 0;
        formElement.addEventListener("submit", (event) => {
            event.preventDefault(); // stop submitting
/*

event.preventDefaultメソッドは、submitイベントの発生元であるフォームがもつデフォルトの動作をキャンセルするメソッドです。

フォームがもつデフォルトの動作とは、フォームの内容を指定したURLへ送信するという動作です。 ここではform要素に送信先が指定されていないため、現在のURLに対してフォームを送信が行われます。


*/

             // 追加するTodoアイテムの要素(li要素)を作成する
             const todoItemElement = element`<li>${inputElement.value}</li>`;
             // Todoアイテムをcontainerに追加する
             containerElement.appendChild(todoItemElement);
             // Todoアイテム数を+1し、表示されてるテキストを更新する
             todoItemCount += 1;
             todoItemCountElement.textContent = `Items: ${todoItemCount}`;
             // 入力欄を空文字にしてリセットする
             inputElement.value = "";

        }
        );
        
    }
}