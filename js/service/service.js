

var gProjects = [
    {
        id: "mello",
        name: "Mello",
        title: "Project manager",
        description: `A trello clone made from scratch using Vue.js and Node.js.`,
        url: "https://melloapp.up.railway.app/#/board",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "memeGenerator",
        name: "Meme Generator",
        title: "Don't let your memes be dreams",
        description: `Simple site for the creation of memes.`,
        url: "https://alon-hoffman.github.io/Meme-generator/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "bookStore",
        name: "Book Store",
        title: "Book manager",
        description: `Simple book store web service that allows user to
         manage inventory of a book store. Book Store supports hebrew and english.`,
        url: "https://alon-hoffman.github.io/Book-Store/?price=100&rating=0",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "trueRecoil",
        name: "True Recoil",
        title: "A zero Gravity platformer",
        description: "A zero gravity platformer. Maneuver around via your gun’s recoil. Tap/Click to shoot, you can slow down time by holding the mouse button/screen. The game is also available on Google play",
        url: "https://alonmakegames.itch.io/true-recoil",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "achilles",
        name: "Achilles",
        title: "Destroy the trojans",
        description: `Achilles is a game created as a solo developer as part of the Totem
        mythology "game jam".`,
        url: "https://alonmakegames.itch.io/achilles",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "mineSweeper",
        name: "MineSweeper",
        title: "A twist on the classic game",
        description: "Made in vanilla JavaScript, the classic game with extra powerUps!",
        url: "https://alonmakegames.itch.io/achilles",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "amazonCrime",
        name: "Amazon Crime",
        title: "Stash all the packages",
        description: `Amazon Crime was made as part of the Make Games JLM game jam in
        under 40 hours.`,
        url: "https://alon-hoffman.github.io/touch-num/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
]

function getProjects() {
    return gProjects
}

function getProject(id) {
    return gProjects.find(project => id == project.id)
}
