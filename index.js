const fetch = require("node-fetch");
const schedule = require("node-schedule");
require('dotenv').config();

// Use the environment variables
const webhookURL = process.env.WEBHOOK_URL;

// Function to send the embed message
async function sendEmbed() {
    const embed = {
        title : process.env.Title,
        color: parseInt(process.env.Color, 10),
        description: process.env.Description,
        footer: {
            text: process.env.FooterText,
            icon_url: process.env.FooterIconURL
        }
    };

    const message = {
        embeds: [embed]
    };

    try {
        const response = await fetch(webhookURL, {
            method: "POST",
            body: JSON.stringify(message),
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error: ${response.statusText}, Details: ${errorText}`);
        }

        console.log("Embed sent successfully!");
    } catch (error) {
        console.error("Error sending embed:", error);
    }
}

// Schedule System
const scheduleTime = process.env.SCHEDULE_TIME ;

schedule.scheduleJob(scheduleTime, () => {
    console.log("Sending scheduled message...");
    sendEmbed();
});
console.log("✅ Successfully loaded the app.");