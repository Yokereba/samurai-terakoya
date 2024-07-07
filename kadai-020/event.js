const btn = document.getElementById('btn');

// const parentList = document.getElementById('parent-list');

// btn.addEventListener('click' , () => {
//     const childList = document.createElement('li');
//     childList.textContent = 'これはリスト要素です';
//     parentList.appendChild(childList);
// });

document.getElementById("btn").onclick = function() {
    document.getElementById("text").innerHTML = "ボタンをクリックしました"
    }
    
