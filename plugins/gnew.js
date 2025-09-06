const { cmd } = require("../command");

//
// 🚀 Promote
//
cmd({
  pattern: "promote1",
  desc: "Promote a member to admin",
  category: "group",
  react: "🆙",
  filename: __filename
}, async (conn, mek, m, { from, isGroup, isAdmin, isBotAdmin, reply, args }) => {
  try {
    if (!isGroup) return reply("❌ This command works only in groups.");
    if (!isAdmin) return reply("❌ Only group admins can use this command.");
    if (!isBotAdmin) return reply("❌ I need to be an *admin* to promote someone.");

    let target;
    if (mek.message.extendedTextMessage?.contextInfo?.mentionedJid) {
      target = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
    } else if (args[0]) {
      target = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    } else {
      return reply("❌ Mention or provide the number of the user to promote.");
    }

    await conn.groupParticipantsUpdate(from, [target], "promote");
    reply(`✅ Promoted @${target.split("@")[0]} to *admin*!`);
  } catch (err) {
    console.error(err);
    reply("❌ Failed to promote user.");
  }
});

//
// 🔽 Demote
//
cmd({
  pattern: "demote1",
  desc: "Demote an admin to member",
  category: "group",
  react: "🔽",
  filename: __filename
}, async (conn, mek, m, { from, isGroup, isAdmin, isBotAdmin, reply, args }) => {
  try {
    if (!isGroup) return reply("❌ This command works only in groups.");
    if (!isAdmin) return reply("❌ Only group admins can use this command.");
    if (!isBotAdmin) return reply("❌ I need to be an *admin* to demote someone.");

    let target;
    if (mek.message.extendedTextMessage?.contextInfo?.mentionedJid) {
      target = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
    } else if (args[0]) {
      target = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    } else {
      return reply("❌ Mention or provide the number of the user to demote.");
    }

    await conn.groupParticipantsUpdate(from, [target], "demote");
    reply(`✅ Demoted @${target.split("@")[0]} to *member*!`);
  } catch (err) {
    console.error(err);
    reply("❌ Failed to demote user.");
  }
});

//
// ❌ Kick
//
cmd({
  pattern: "kick1",
  desc: "Remove a member from the group",
  category: "group",
  react: "🚪",
  filename: __filename
}, async (conn, mek, m, { from, isGroup, isAdmin, isBotAdmin, reply, args }) => {
  try {
    if (!isGroup) return reply("❌ This command works only in groups.");
    if (!isAdmin) return reply("❌ Only group admins can use this command.");
    if (!isBotAdmin) return reply("❌ I need to be an *admin* to kick someone.");

    let target;
    if (mek.message.extendedTextMessage?.contextInfo?.mentionedJid) {
      target = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
    } else if (args[0]) {
      target = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    } else {
      return reply("❌ Mention or provide the number of the user to kick.");
    }

    await conn.groupParticipantsUpdate(from, [target], "remove");
    reply(`✅ Kicked @${target.split("@")[0]} from the group!`);
  } catch (err) {
    console.error(err);
    reply("❌ Failed to kick user.");
  }
});

//
// ➕ Add
//
cmd({
  pattern: "add1",
  desc: "Add a member to the group",
  category: "group",
  react: "➕",
  filename: __filename
}, async (conn, mek, m, { from, isGroup, isAdmin, isBotAdmin, reply, args }) => {
  try {
    if (!isGroup) return reply("❌ This command works only in groups.");
    if (!isAdmin) return reply("❌ Only group admins can use this command.");
    if (!isBotAdmin) return reply("❌ I need to be an *admin* to add someone.");

    if (!args[0]) return reply("❌ Provide a number to add. Example: `.add 254700000000`");

    let number = args[0].replace(/[^0-9]/g, "");
    let target = number + "@s.whatsapp.net";

    await conn.groupParticipantsUpdate(from, [target], "add");
    reply(`✅ Added @${number} to the group!`);
  } catch (err) {
    console.error(err);
    reply("❌ Failed to add user. (Check if the number is on WhatsApp)");
  }
});
