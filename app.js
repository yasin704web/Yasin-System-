"use strict";


/* =========================================================
   STORAGE
========================================================= */

const STORAGE_KEY = "YASIN_SYSTEM_FINAL_V1";


/* =========================================================
   RANKS
========================================================= */

const RANKS = [

    {
        name: "E",
        minLevel: 1
    },

    {
        name: "D",
        minLevel: 3
    },

    {
        name: "C",
        minLevel: 7
    },

    {
        name: "B",
        minLevel: 12
    },

    {
        name: "A",
        minLevel: 18
    },

    {
        name: "S",
        minLevel: 25
    },

    {
        name: "SS",
        minLevel: 35
    },

    {
        name: "SSS",
        minLevel: 50
    },

    {
        name: "GALACTIC",
        minLevel: 65
    },

    {
        name: "CLEAR WORLD",
        minLevel: 80
    },

    {
        name: "GOD",
        minLevel: 100
    }

];


/* =========================================================
   DAILY TASK POOLS
========================================================= */

const DAILY_POOLS = {

    coding: [

        {
            title: "CODING START",
            description: "۱۰ دقیقه روی برنامه‌نویسی کار کن.",
            icon: "💻",
            xp: 100,
            gold: 20
        },

        {
            title: "CODE PRACTICE",
            description: "یک تمرین برنامه‌نویسی حل کن.",
            icon: "⌨️",
            xp: 120,
            gold: 25
        },

        {
            title: "PROJECT MODE",
            description: "۱۵ دقیقه روی پروژه شخصی کار کن.",
            icon: "🏗️",
            xp: 150,
            gold: 35
        },

        {
            title: "BUG HUNTER",
            description: "یک خطا یا مشکل در پروژه پیدا و بررسی کن.",
            icon: "🐛",
            xp: 180,
            gold: 40
        },

        {
            title: "DEEP CODING",
            description: "۲۰ دقیقه تمرکز روی یک مسئله برنامه‌نویسی.",
            icon: "🧠",
            xp: 220,
            gold: 55
        }

    ],


    training: [

        {
            title: "BODY ACTIVATION",
            description: "چند دقیقه حرکت و نرمش سبک متناسب با توانت.",
            icon: "💪",
            xp: 70,
            gold: 15
        },

        {
            title: "FLEXIBILITY",
            description: "چند دقیقه کشش و نرمش سبک.",
            icon: "🧘",
            xp: 60,
            gold: 12
        },

        {
            title: "WALKING QUEST",
            description: "یک پیاده‌روی کوتاه و آرام.",
            icon: "🚶",
            xp: 70,
            gold: 15
        },

        {
            title: "CORE QUEST",
            description: "یک تمرین ساده میان‌تنه متناسب با توانت.",
            icon: "🔥",
            xp: 80,
            gold: 18
        },

        {
            title: "LEG QUEST",
            description: "یک تمرین سبک پا مثل اسکوات در حد توان.",
            icon: "⚡",
            xp: 80,
            gold: 18
        }

    ],


    learning: [

        {
            title: "KNOWLEDGE EXPANSION",
            description: "۱۵ دقیقه یک موضوع جدید یاد بگیر.",
            icon: "📚",
            xp: 100,
            gold: 20
        },

        {
            title: "READING QUEST",
            description: "۱۰ دقیقه مطالعه مفید.",
            icon: "📖",
            xp: 90,
            gold: 18
        },

        {
            title: "NEW CONCEPT",
            description: "یک مفهوم جدید یاد بگیر و یک نکته از آن بنویس.",
            icon: "🧠",
            xp: 130,
            gold: 25
        },

        {
            title: "REVIEW",
            description: "مطالبی را که قبلاً یاد گرفتی مرور کن.",
            icon: "🔄",
            xp: 100,
            gold: 20
        }

    ],


    productivity: [

        {
            title: "DESK RESET",
            description: "محیط مطالعه یا کار خود را مرتب کن.",
            icon: "🧹",
            xp: 60,
            gold: 10
        },

        {
            title: "FOCUS PROTOCOL",
            description: "یک کار مهم را بدون حواس‌پرتی شروع کن.",
            icon: "🎯",
            xp: 110,
            gold: 22
        },

        {
            title: "FINISH ONE THING",
            description: "یک کار کوچک عقب‌افتاده را کامل کن.",
            icon: "✅",
            xp: 100,
            gold: 20
        },

        {
            title: "PLAN TOMORROW",
            description: "برای روز بعد یک برنامه کوتاه بنویس.",
            icon: "📅",
            xp: 80,
            gold: 15
        }

    ]

};


/* =========================================================
   12H QUEST POOL
========================================================= */

const QUEST_POOL = [

    {
        title: "FOCUS PROTOCOL",
        description: "یک کار مهم را با تمرکز انجام بده.",
        icon: "🎯",
        xp: 100,
        gold: 20,
        minLevel: 1
    },

    {
        title: "KNOWLEDGE EXPANSION",
        description: "یک مفهوم جدید یاد بگیر.",
        icon: "🧠",
        xp: 120,
        gold: 25,
        minLevel: 1
    },

    {
        title: "CODE HUNTER",
        description: "روی یک تمرین برنامه‌نویسی کار کن.",
        icon: "💻",
        xp: 160,
        gold: 35,
        minLevel: 3
    },

    {
        title: "BUG HUNTER",
        description: "یک مشکل در پروژه پیدا کن و بررسی کن.",
        icon: "🐛",
        xp: 180,
        gold: 40,
        minLevel: 3
    },

    {
        title: "DEEP WORK",
        description: "یک جلسه تمرکز عمیق انجام بده.",
        icon: "⚡",
        xp: 250,
        gold: 55,
        minLevel: 7
    },

    {
        title: "BUILD SOMETHING",
        description: "یک قابلیت واقعی به پروژه اضافه کن.",
        icon: "🏗️",
        xp: 300,
        gold: 70,
        minLevel: 7
    },

    {
        title: "PROBLEM SOLVER",
        description: "یک مسئله سخت را مرحله‌به‌مرحله حل کن.",
        icon: "♟️",
        xp: 400,
        gold: 90,
        minLevel: 12
    },

    {
        title: "SYSTEM ARCHITECT",
        description: "یک بخش مهم از پروژه را طراحی کن.",
        icon: "🏛️",
        xp: 500,
        gold: 120,
        minLevel: 18
    },

    {
        title: "ELITE PROJECT",
        description: "یک بخش جدی از پروژه را تکمیل کن.",
        icon: "👑",
        xp: 700,
        gold: 170,
        minLevel: 25
    },

    {
        title: "MASTER TRIAL",
        description: "یک هدف بزرگ را به چند مرحله تقسیم کن و یک مرحله را انجام بده.",
        icon: "🌌",
        xp: 900,
        gold: 230,
        minLevel: 35
    },

    {
        title: "LIMIT BREAK",
        description: "یک چالش بزرگ و واقعی را شروع کن.",
        icon: "🔥",
        xp: 1200,
        gold: 350,
        minLevel: 50
    }

];


/* =========================================================
   SKILLS
========================================================= */

const SKILLS = [

    {
        id: "focus",
        title: "FOCUS I",
        description: "Focus Training unlocked.",
        level: 3,
        icon: "🎯"
    },

    {
        id: "coding",
        title: "CODING I",
        description: "Advanced coding quests unlocked.",
        level: 5,
        icon: "💻"
    },

    {
        id: "discipline",
        title: "DISCIPLINE I",
        description: "Discipline missions unlocked.",
        level: 7,
        icon: "⚔️"
    },

    {
        id: "memory",
        title: "MEMORY I",
        description: "Advanced learning missions unlocked.",
        level: 10,
        icon: "🧠"
    },

    {
        id: "builder",
        title: "BUILDER",
        description: "Project building quests unlocked.",
        level: 15,
        icon: "🏗️"
    },

    {
        id: "strategist",
        title: "STRATEGIST",
        description: "Complex missions unlocked.",
        level: 25,
        icon: "♟️"
    },

    {
        id: "elite",
        title: "ELITE MIND",
        description: "Elite missions unlocked.",
        level: 35,
        icon: "👑"
    },

    {
        id: "system_master",
        title: "SYSTEM MASTER",
        description: "Endgame system path unlocked.",
        level: 50,
        icon: "🌌"
    }

];


/* =========================================================
   TROPHIES
========================================================= */

const TROPHIES = [

    {
        id: "bronze",
        title: "BRONZE TROPHY",
        icon: "🥉",
        description: "اولین مرحله‌های سفر را کامل کن.",
        condition: p => p.completed >= 10
    },

    {
        id: "silver",
        title: "SILVER TROPHY",
        icon: "🥈",
        description: "به ۳۰ Quest کامل‌شده برس.",
        condition: p => p.completed >= 30
    },

    {
        id: "gold",
        title: "GOLDEN TROPHY",
        icon: "🥇",
        description: "با عبور از مرحله Clear World این Trophy را به دست بیاور.",
        condition: p =>
            getRank(p.level) === "CLEAR WORLD" ||
            getRank(p.level) === "GOD" ||
            p.trophies.includes("gold")
    },

    {
        id: "legend",
        title: "LEGEND TROPHY",
        icon: "🏆",
        description: "به مسیر Endgame برس.",
        condition: p => p.level >= 50
    }

];


/* =========================================================
   GUARDIANS
========================================================= */

const GUARDIANS = [

    {
        rank: "D",
        name: "IRON GUARDIAN",
        icon: "🛡️",
        description: "Guardian of Discipline."
    },

    {
        rank: "C",
        name: "SHADOW GUARDIAN",
        icon: "🌑",
        description: "Guardian of Focus."
    },

    {
        rank: "B",
        name: "VOID GUARDIAN",
        icon: "🌀",
        description: "Guardian of Growth."
    },

    {
        rank: "A",
        name: "ARCANE GUARDIAN",
        icon: "🔮",
        description: "Guardian of Knowledge."
    },

    {
        rank: "S",
        name: "DRAGON GUARDIAN",
        icon: "🐉",
        description: "Guardian of Elite Progress."
    },

    {
        rank: "SS",
        name: "CELESTIAL GUARDIAN",
        icon: "☄️",
        description: "Guardian of Mastery."
    },

    {
        rank: "SSS",
        name: "ETERNAL GUARDIAN",
        icon: "♾️",
        description: "Guardian of Endurance."
    },

    {
        rank: "GALACTIC",
        name: "GALACTIC GUARDIAN",
        icon: "🌌",
        description: "Guardian of the Galactic Path."
    },

    {
        rank: "CLEAR WORLD",
        name: "CLEAR WORLD GUARDIAN",
        icon: "👁️",
        description: "Guardian of the Clear World."
    },

    {
        rank: "GOD",
        name: "DIVINE GUARDIAN",
        icon: "👑",
        description: "Final System Guardian."
    }

];


/* =========================================================
   DEFAULT PLAYER
========================================================= */

const DEFAULT_PLAYER = {

    level: 1,

    xp: 0,

    totalXP: 0,

    gold: 0,

    energy: 100,

    streak: 0,

    bestStreak: 0,

    completed: 0,

    skillPoints: 0,

    skills: [],

    activeDays: 0,

    lastLoginDate: null,

    lastDailyDate: null,

    dailyTasks: [],

    questReset: 0,

    quests: [],

    trainingDate: null,

    training: [],

    goals: [],

    trophies: [],

    guardians: [],

    currentGuardian: null,

    rankHistory: [],

    history: [],

    godUnlocked: false,

    createdAt: Date.now()

};


/* =========================================================
   LOAD
========================================================= */

let player =
    loadPlayer();


function loadPlayer() {

    try {

        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );


        if (!saved) {

            return {
                ...DEFAULT_PLAYER
            };

        }


        const parsed =
            JSON.parse(saved);


        return {

            ...DEFAULT_PLAYER,

            ...parsed

        };

    }

    catch (error) {

        console.error(error);

        return {
            ...DEFAULT_PLAYER
        };

    }

}


/* =========================================================
   SAVE
========================================================= */

function save() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(player)
    );

}


/* =========================================================
   DATE KEY
========================================================= */

function getDateKey() {

    const date =
        new Date();

    return [

        date.getFullYear(),

        String(
            date.getMonth() + 1
        ).padStart(2, "0"),

        String(
            date.getDate()
        ).padStart(2, "0")

    ].join("-");

}


/* =========================================================
   REAL LOGIN
========================================================= */

function registerLogin() {

    const today =
        getDateKey();


    if (
        player.lastLoginDate === today
    ) {

        return false;

    }


    const previous =
        player.lastLoginDate;


    player.lastLoginDate =
        today;


    player.activeDays++;


    if (previous) {

        const previousDate =
            new Date(previous);


        const currentDate =
            new Date(today);


        const difference =
            Math.round(
                (
                    currentDate -
                    previousDate
                ) /
                86400000
            );


        if (difference === 1) {

            player.streak++;

        }

        else {

            player.streak = 1;

        }

    }

    else {

        player.streak = 1;

    }


    player.bestStreak =
        Math.max(
            player.bestStreak,
            player.streak
        );


    player.energy = 100;


    log(
        `ACTIVE LOGIN REGISTERED • DAY ${player.activeDays}`
    );


    save();

    return true;

}


/* =========================================================
   RANK
========================================================= */

function getRank(level) {

    let current =
        "E";


    for (
        const rank of RANKS
    ) {

        if (
            level >=
            rank.minLevel
        ) {

            current =
                rank.name;

        }

    }


    return current;

}


/* =========================================================
   NEXT RANK
========================================================= */

function getNextRank() {

    const current =
        player.level;


    for (
        const rank of RANKS
    ) {

        if (
            current <
            rank.minLevel
        ) {

            return rank.name;

        }

    }


    return "MAX";

}


/* =========================================================
   XP REQUIREMENT
========================================================= */

function getRequiredXP() {

    const level =
        player.level;


    if (level < 3) {

        return 500 + level * 150;

    }


    if (level < 7) {

        return Math.floor(
            900 +
            level * 250
        );

    }


    if (level < 12) {

        return Math.floor(
            2000 +
            Math.pow(
                level - 7,
                1.5
            ) * 600
        );

    }


    if (level < 18) {

        return Math.floor(
            5000 +
            Math.pow(
                level - 12,
                1.7
            ) * 1000
        );

    }


    if (level < 25) {

        return Math.floor(
            12000 +
            Math.pow(
                level - 18,
                1.8
            ) * 1800
        );

    }


    if (level < 35) {

        return Math.floor(
            30000 +
            Math.pow(
                level - 25,
                2
            ) * 3000
        );

    }


    return Math.floor(
        70000 +
        Math.pow(
            level - 35,
            2.2
        ) * 6000
    );

}


/* =========================================================
   RANDOM
========================================================= */

function randomItem(array) {

    return array[
        Math.floor(
            Math.random() *
            array.length
        )
    ];

}


/* =========================================================
   CREATE DAILY
========================================================= */

function createDailyTasks() {

    const categories = [

        "coding",

        "training",

        "learning",

        "productivity"

    ];


    const selected = [];


    for (
        const category of categories
    ) {

        const task =
            randomItem(
                DAILY_POOLS[
                    category
                ]
            );


        selected.push({

            id:
                crypto.randomUUID
                ? crypto.randomUUID()
                :
                String(
                    Date.now() +
                    Math.random()
                ),

            category,

            ...task,

            completed: false

        });

    }


    return selected;

}


/* =========================================================
   DAILY RESET
========================================================= */

function setupDaily() {

    const today =
        getDateKey();


    if (
        player.lastDailyDate !== today
        ||
        player.dailyTasks.length !== 4
    ) {

        player.dailyTasks =
            createDailyTasks();


        player.lastDailyDate =
            today;


        log(
            "4 NEW DAILY CHALLENGES GENERATED."
        );


        save();

    }

}


/* =========================================================
   12H RESET
========================================================= */

function setup12HourQuests() {

    const now =
        Date.now();


    if (
        !player.questReset
        ||
        now >= player.questReset
        ||
        player.quests.length !== 4
    ) {

        const available =
            QUEST_POOL.filter(
                q =>
                    player.level >=
                    q.minLevel
            );


        const pool =
            available.length
                ? available
                : QUEST_POOL;


        player.quests = [];


        while (
            player.quests.length < 4
        ) {

            const quest =
                randomItem(pool);


            player.quests.push({

                id:
                    crypto.randomUUID
                    ? crypto.randomUUID()
                    :
                    String(
                        Date.now() +
                        Math.random()
                    ),

                ...quest,

                completed: false

            });

        }


        player.questReset =
            now +
            12 *
            60 *
            60 *
            1000;


        log(
            "12H QUESTS RESET."
        );


        save();

    }

}


/* =========================================================
   TRAINING
========================================================= */

function setupTraining() {

    const today =
        getDateKey();


    if (
        player.trainingDate !== today
    ) {

        player.training =
            DAILY_POOLS.training
                .sort(
                    () =>
                        Math.random() -
                        0.5
                )
                .slice(0, 3)
                .map(
                    task => ({

                        ...task,

                        id:
                            crypto.randomUUID
                            ? crypto.randomUUID()
                            :
                            String(
                                Date.now() +
                                Math.random()
                            ),

                        completed: false

                    })
                );


        player.trainingDate =
        
