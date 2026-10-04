// トップページ：作品一覧を works.js から表示する

const workList = document.getElementById("workList");

WORKS.forEach((work) => {
    const card = el("a", "work-card");
    card.href = `work.html?id=${encodeURIComponent(work.id)}`;

    card.appendChild(createThumbnail(work));

    const body = el("div", "work-card-body");
    body.appendChild(el("h3", "", work.title));
    body.appendChild(el("p", "work-catch", work.catchCopy));
    body.appendChild(createTagList(work.tags));
    card.appendChild(body);

    workList.appendChild(card);
});
