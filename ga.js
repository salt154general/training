// GA4初期化
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

// GA4の計測IDを指定
gtag('config', 'YOUR_GA4_MEASUREMENT_ID', {
    'send_page_view': false  // 自動でのページビュー送信をオフにする
});

let isLoggedIn = false;  // ログイン状態のフラグ
let userName = null;

// ページが読み込まれた際にpage_viewイベントを送信
function sendPageView() {
    gtag('event', 'page_view', {
        'member_status': isLoggedIn ? '会員' : '非会員'
    });
}

// ページロード時にページビュー送信
window.onload = function () {
    sendPageView();
};

// 購入リンクのクリックイベントをトラッキング
document.querySelectorAll('.button a').forEach(function (element, index) {
    element.addEventListener('click', function () {
        // 商品情報を取得
        const productContainer = element.closest('.product-container');
        const productName = productContainer.querySelector('.product-info p:nth-child(1)').innerText.split(": ")[1];
        const productCategory = productContainer.querySelector('.product-info p:nth-child(2)').innerText.split(": ")[1];
        const productPrice = productContainer.querySelector('.product-info p:nth-child(3)').innerText.split(": ")[1].replace('円', '');

        // purchaseイベントを送信
        gtag('event', 'purchase', {
            'transaction_id': 'TRX-' + index,  // 例: トランザクションID
            'value': productPrice,  // 商品価格
            'currency': 'JPY',  // 通貨
            'items': [{
                'item_name': productName,
                'item_category': productCategory,
                'price': productPrice,
                'quantity': 1
            }]
        });
    });
});
