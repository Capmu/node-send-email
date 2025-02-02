## .env file
```env
PORT=<port>
GMAIL_USER=<sender-email>
GMAIL_PASSWORD=<sender-email-app-password>
```

## Request url
`{host}/api/v1/notification`

## Request body
```json
{
  "to": "<receiver-email>",
  "subject": "Test Notification",
  "body": "<h1>Hello !!, this is a test email!</h1><p>This is the body.</p>"
}
```
