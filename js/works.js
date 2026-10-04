// 作品データ
// 作品を追加するときは、この配列に1件足すだけでよい。
// 一覧（index.html）と詳細（work.html?id=xxx）の両方がここから表示される。
// 「TODO」と書いてある部分は、あとで中身を埋める。

const WORKS = [
    {
        id: "shitsugen-blocker",
        title: "失言ブロッカー",
        catchCopy: "TODO：一行の説明",
        tags: ["Game", "Unity", "Team"],
        recommended: true,
        thumbnail: "", // 例："images/works/shitsugen-blocker/thumbnail.webp"
        date: "2026-10",

        story: [
            "TODO：企画意図・こだわり（なぜこのゲームを作ったか、どんな体験を届けたいか）"
        ],
        challenges: [
            {
                title: "仕様が決まる前にインターフェースを先に実装",
                text: "プランナーからの仕様を待たずに、必要になりそうなインターフェースを予測して先に実装し、開発が止まらないようにした。"
            },
            {
                title: "会話パートとのつなぎの設計",
                text: "コトノハゲーム部分をほぼ一人で担当することになり、会話パートとの接続部分の設計をチームで話し合いながら決めた。"
            },
            {
                title: "R3・UniTaskの導入",
                text: "TODO：どこでどう使ったか"
            }
        ],

        team: {
            size: "TODO：人数",
            members: [] // 例：{ role: "プランナー", name: "〇〇" }（掲載の許可を取ってから）
        },
        role: ["コトノハゲームのメインプログラマ"],
        period: {
            prep: "",
            dev: "TODO：開発期間"
        },
        stack: ["Unity", "C#", "R3", "UniTask"],
        awards: [],
        events: ["東北大学祭 2026 展示", "東京ゲームダンジョン 出展（2026/10/31）"],
        controls: "TODO：操作方法",

        video: "", // YouTubeの動画ID（https://www.youtube.com/watch?v=XXXX の XXXX）
        screenshots: [],
        links: [],
        repo: ""
    },
    {
        id: "ccc",
        title: "Change Change Change",
        catchCopy: "ルールを操作する2人協力ゲーム",
        tags: ["Game", "Unity", "Team", "Awarded"],
        recommended: true,
        thumbnail: "",
        date: "2026-09",

        story: [
            "CyberAgent プロトスプリントリーグのお題「かえる」から、2人がコミュニケーションを取りながらわちゃわちゃ楽しめる、協力して数式を完成させるゲームを作りました。",
            "TODO：こだわり"
        ],
        challenges: [
            {
                title: "準備期間1週間で必要な技術を習得",
                text: "実装できるのが2日間しかないため、準備期間の1週間はチームで図書館に集まり、必要な技術とクラス設計を事前に学んだ。"
            }
        ],

        team: {
            size: "TODO：人数",
            members: []
        },
        role: ["判定処理", "正解演出との接続"],
        period: {
            prep: "1週間（企画・技術の学習）",
            dev: "2日間"
        },
        stack: ["Unity", "C#"],
        awards: ["CyberAgent プロトスプリントリーグ 最優秀賞"],
        events: ["東北大学祭 2026 展示"],
        controls: "TODO：操作方法",

        video: "",
        screenshots: [],
        links: [
            // { label: "App Store", url: "https://apps.apple.com/..." }
        ],
        repo: ""
    },
    {
        id: "reversi",
        title: "どこでもリバーシ",
        catchCopy: "平面じゃない盤面で遊ぶリバーシ",
        tags: ["Game", "Unity", "Solo"],
        recommended: false,
        thumbnail: "",
        date: "TODO",

        story: [
            "「リバーシの盤面が平面じゃなかったら、AIはどう動くんだろう？」",
            "円柱、球、トーラスなど、様々な形の盤面でリバーシを動かしてみました。"
        ],
        challenges: [
            {
                title: "TODO：曲面上での隣接マスの判定",
                text: "TODO：どう実装したか"
            }
        ],

        team: {
            size: "個人制作",
            members: []
        },
        role: ["企画・プログラム・グラフィック"],
        period: {
            prep: "",
            dev: "TODO：開発期間"
        },
        stack: ["Unity", "C#"],
        awards: [],
        events: [],
        controls: "TODO：操作方法",

        video: "",
        screenshots: [],
        links: [
            { label: "unityroom で遊ぶ（PC）", url: "https://unityroom.com/games/curvedriversi" }
        ],
        repo: ""
    },

    {
        id: "tetrage",
        title: "Tetrage",
        catchCopy: "",
        tags: ["Game", "Unity", "Team"],
        recommended: false,
        thumbnail: "",
        date: "TODO",

        story: [
            "TODO"
        ],
        challenges: [
            {
                title: "TODO",
                text: "TODO"
            }
        ],

        team: {
            size: "TODO",
            members: []
        },
        role: ["企画・プログラム・グラフィック"],
        period: {
            prep: "",
            dev: "TODO：開発期間"
        },
        stack: ["Unity", "C#"],
        awards: [],
        events: [],
        controls: "TODO：操作方法",

        video: "",
        screenshots: [],
        links: [
            { label: "" }
        ],
        repo: ""
    }
];
