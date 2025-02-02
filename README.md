## .env file
```env
PORT=<port>
GMAIL_USER=<sender-email>
GMAIL_PASSWORD=<sender-email-app-password>
```

## Request body
```json
{
  "to": "<receiver-email>",
  "subject": "Test Notification",
  "body": "<h1>Hello !!, this is a test email!</h1><p>This is the body.</p>" // HTML or plain text
}
```
