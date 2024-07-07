const btn = document.getElementById('btn');

// const parentList = document.getElementById('parent-list');

// btn.addEventListener('click' , () => {
//     const childList = document.createElement('li');
//     childList.textContent = 'これはリスト要素です';
//     parentList.appendChild(childList);
// });

const textChange =document.getElementById('text');

btn.addEventListener('click', () => {
    console.log('ボタンをクリックしました');

    textChange.textContent = 'ボタンをクリックしました';
});
    
