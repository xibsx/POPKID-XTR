const { cmd } = require("../command");

// Command: friends
cmd({
    pattern: "friends",
    alias: ["myfriends", "bffs"],
    desc: "Show a stylish list of your friends",
    category: "fun",
    react: "🤍",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    try {
        // ✅ Customize your friends here
        const friendsList = [
            "👑 Icekid",
            "🔥 Sparta",
            "💎 Rammah",
            "🌟 bilal",
            "⚡ Hussein"
        ];

        let msg = `╔══✦❘༻༺❘✦══╗
   💖 *MY FRIENDS LIST* 💖
╚══✦❘༻༺❘✦══╝

${friendsList.join("\n")}

✨ Always loyal • Always shining ✨`;

        reply(msg);
    } catch (err) {
        reply("❌ Error showing friends list.");
        console.error(err);
    }
});
