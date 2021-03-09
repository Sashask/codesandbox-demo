import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了のTODOリストから指定要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了のリストに追加
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerHTML = text;

  //button生成
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    //未完了リストから削除
    deleteFromIncompleteList(completebutton.parentNode);

    const addTarget = completebutton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    //div配下の要素のみ初期化し空のdivタグを作る
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //戻すボタンの親タグを完了リストから削除
      const deleteTarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backbutton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //div配下に子要素配置
    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);

    //完了済みTODOリストへ移動
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    //未完了リストから削除
    deleteFromIncompleteList(deletebutton.parentNode);
  });
  //divタグの子要素に要素設定
  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
