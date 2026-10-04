// 各ページで共通して使う関数

// 要素を作る。text は textContent に入れるので、HTMLとして解釈されない。
function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

// タグのチップを並べた要素を返す
function createTagList(tags) {
    const list = el("ul", "tags");
    tags.forEach((tag) => list.appendChild(el("li", "tag", tag)));
    return list;
}

// サムネイル。画像がまだない作品は、タイトルの頭文字で仮の表示にする。
function createThumbnail(work) {
    const box = el("div", "thumb");
    if (work.thumbnail) {
        const img = el("img");
        img.src = work.thumbnail;
        img.alt = work.title;
        img.loading = "lazy";
        box.appendChild(img);
    } else {
        box.classList.add("thumb-placeholder");
        box.appendChild(el("span", "", work.title.charAt(0)));
    }
    return box;
}

// フッターの年を自動で入れる
document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
});
