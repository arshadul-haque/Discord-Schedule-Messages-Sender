# Discord Schedule Messages Sender

A Node.js app to send scheduled embed messages to a Discord channel using webhooks.

## Features

- Sends a custom embed message to a Discord webhook.
- Schedule messages using cron syntax.
- All settings are configurable via a `.env` file.

## Setup

1. **Clone the repository**  
   ```
   git clone <your-repo-url>
   cd Prayer Log Webhook
   ```

2. **Install dependencies**  
   ```
   npm install
   ```

3. **Configure environment variables**  
   Edit the `.env` file with your values:
   ```
   Title=Your embed title
   Color=3447003
   Description=Your embed description
   FooterText=Your footer text
   FooterIconURL=https://your.icon.url/here.png
   WEBHOOK_URL=https://discord.com/api/webhooks/your_webhook_url
   SCHEDULE_TIME=0 0 * * *   # Every day at 12:00 AM
   ```

   - `Color` should be a decimal integer (not hex or string).
   - `SCHEDULE_TIME` uses cron syntax.

4. **Run the app**  
   ```
   npm start
   ```

## Cron Schedule Examples

| Time           | SCHEDULE_TIME      |
|----------------|--------------------|
| Every day 12AM | `0 0 * * *`        |
| Every day 6PM  | `0 18 * * *`       |
| Every Monday   | `0 9 * * 1`        |

## Troubleshooting

- Make sure there are **no spaces** before or after `=` in `.env`.
- `Color` must be a number, not a string.
- Check your webhook URL is correct.

## License

This project includes Chromium and other open-source components. See [LICENSE](LICENSE) for details.
