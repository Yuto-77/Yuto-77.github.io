// 作品詳細ページ：URLの ?id=xxx に合う作品を works.js から探して表示する

const params = new URLSearchParams(location.search);
const work = WORKS.find((w) => w.id === params.get("id"));
const root = document.getElementById("workDetail");

if (!work) {
    root.appendChild(el("h1", "", "作品が見つかりませんでした"));
    const back = el("a", "link", "← 作品一覧へ");
    back.href = "index.html#works";
    root.appendChild(back);
} else {
    document.title = `${work.title} | Yuto-77`;
    render(work);
}

function render(work) {
    // 見出し
    const head = el("header", "work-head");
    head.appendChild(createTagList(work.tags));
    head.appendChild(el("h1", "", work.title));
    head.appendChild(el("p", "work-catch", work.catchCopy));
    root.appendChild(head);

    // 動画（なければサムネイル）
    if (work.video) {
        const frame = el("iframe", "video");
        frame.src = `https://www.youtube.com/embed/${encodeURIComponent(work.video)}`;
        frame.title = `${work.title} の紹介動画`;
        frame.allowFullscreen = true;
        frame.loading = "lazy";
        root.appendChild(frame);
    } else {
        root.appendChild(createThumbnail(work));
    }

    // リンク（App Store・unityroom など）
    const links = [...work.links];
    if (work.repo) links.push({ label: "GitHub リポジトリ", url: work.repo });
    if (links.length > 0) {
        const box = el("div", "work-links");
        links.forEach((link) => {
            const a = el("a", "pill", `${link.label} →`);
            a.href = link.url;
            a.target = "_blank";
            a.rel = "noopener";
            box.appendChild(a);
        });
        root.appendChild(box);
    }

    // Story
    const story = section("Story");
    work.story.forEach((p) => story.appendChild(el("p", "", p)));

    // 新たに挑戦したこと
    if (work.challenges.length > 0) {
        const challenge = section("新たに挑戦したこと");
        const list = el("dl", "challenges");
        work.challenges.forEach((c) => {
            list.appendChild(el("dt", "", c.title));
            list.appendChild(el("dd", "", c.text));
        });
        challenge.appendChild(list);
    }

    // スクリーンショット
    if (work.screenshots.length > 0) {
        const shots = section("Screenshots");
        const grid = el("div", "screenshots");
        work.screenshots.forEach((src) => {
            const img = el("img");
            img.src = src;
            img.alt = `${work.title} のスクリーンショット`;
            img.loading = "lazy";
            grid.appendChild(img);
        });
        shots.appendChild(grid);
    }

    // 情報（表）
    const info = section("Information");
    const table = el("dl", "info");
    addRow(table, "制作体制", work.team.size);
    if (work.team.members.length > 0) {
        addRow(table, "メンバー", work.team.members.map((m) => `${m.role}：${m.name}`).join(" / "));
    }
    addRow(table, "担当", work.role.join(" / "));
    if (work.period.prep) addRow(table, "準備期間", work.period.prep);
    addRow(table, "開発期間", work.period.dev);
    addRow(table, "技術スタック", work.stack.join(" / "));
    if (work.awards.length > 0) addRow(table, "受賞", work.awards.join(" / "));
    if (work.events.length > 0) addRow(table, "展示・出展", work.events.join(" / "));
    addRow(table, "操作方法", work.controls);
    info.appendChild(table);

    const back = el("a", "link", "← 作品一覧へ");
    back.href = "index.html#works";
    root.appendChild(back);
}

function section(title) {
    const s = el("section", "work-section");
    s.appendChild(el("h2", "", title));
    root.appendChild(s);
    return s;
}

function addRow(table, label, value) {
    if (!value) return;
    table.appendChild(el("dt", "", label));
    table.appendChild(el("dd", "", value));
}
