// ログイン状態を確認して維持
function checkLoginStatus() {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
        isLoggedIn = true;
        userName = storedUserName;
        document.getElementById('auth-button').innerText = 'ログアウト';  // ボタンを「ログアウト」に変更
        document.getElementById('header-content').innerText = `ようこそ, ${userName}さん`;  // ユーザー名を表示
    }
}

window.onload = function () {
    checkLoginStatus();
};

// ログインボタンクリック時の処理
document.getElementById('auth-button').addEventListener('click', function () {
    if (!isLoggedIn) {
        // ログイン処理
        userName = prompt("ユーザー名を入力してください:");
        if (userName) {
            isLoggedIn = true;
            document.getElementById('auth-button').innerText = 'ログアウト';  // ボタンを「ログアウト」に変更
            document.getElementById('header-content').innerText = `ようこそ, ${userName}さん`;  // ユーザー名を表示
            localStorage.setItem('userName', userName);  // ユーザー名をlocalStorageに保存
        }
    } else {
        // ログアウト処理
        isLoggedIn = false;
        userName = null;
        document.getElementById('auth-button').innerText = 'ログイン';  // ボタンを「ログイン」に戻す
        document.getElementById('header-content').innerText = '';  // ユーザー名の表示をクリア
        localStorage.removeItem('userName');  // localStorageからユーザー名を削除
    }
});
