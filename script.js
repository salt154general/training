// ログイン処理
function handleAuthButton() {
    const username = prompt("ユーザー名を入力してください:");

    if (username) {
        // ログイン成功
        localStorage.setItem('username', username);
        updateHeader(username);
    }
}

// ヘッダーの更新
function updateHeader(username) {
    document.getElementById('header-content').innerText = username;
    document.getElementById('auth-button').innerText = "ログアウト";
    document.getElementById('auth-button').setAttribute('onclick', 'handleLogout()');
}

// ログアウト処理
function handleLogout() {
    localStorage.removeItem('username');
    document.getElementById('header-content').innerText = "";
    document.getElementById('auth-button').innerText = "ログイン";
    document.getElementById('auth-button').setAttribute('onclick', 'handleAuthButton()');
}

// ページ読み込み時の処理
window.onload = function() {
    const username = localStorage.getItem('username');
    if (username) {
        updateHeader(username);
    }
};
