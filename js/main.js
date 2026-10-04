// トップページ：作品一覧を works.js から表示する

const workList = document.getElementById("workList");

WORKS.forEach((work, index) => {
    const card = el("a", "work-card");
    card.href = `work.html?id=${encodeURIComponent(work.id)}`;
    if (work.recommended) card.classList.add("is-recommended");

    card.appendChild(createThumbnail(work));

    const body = el("div", "work-card-body");
    body.appendChild(el("p", "number", String(index + 1).padStart(2, "0")));
    body.appendChild(el("h3", "", work.title));
    body.appendChild(el("p", "work-catch", work.catchCopy));
    body.appendChild(createTagList(work.tags));
    card.appendChild(body);

    workList.appendChild(card);
});

// PLAYボタンで作品一覧までスクロール
document.getElementById("playButton").addEventListener("click", () => {
    document.getElementById("works").scrollIntoView({ behavior: "smooth" });
});
