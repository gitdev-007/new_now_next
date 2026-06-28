import os
import requests
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("MAILJET_API_KEY")
secret_key = os.getenv("MAILJET_SECRET_KEY")

url = "https://api.mailjet.com/v3.1/send"

data = {
    "Messages": [
        {
            "From": {
                "Email": os.getenv("MAIL_FROM"),
                "Name": "OpenCode"
            },
            "To": [
                {
                    "Email": os.getenv("MAIL_TO"),
                    "Name": "Harshit"
                }
            ],
            "Subject": "✅ OpenCode Task Completed",
            "TextPart": "OpenCode has successfully completed your task.",
            "HTMLPart": """
            <h2>✅ OpenCode Finished</h2>
            <p>Your task has completed successfully.</p>
            <p>You can now check the project.</p>
            """
        }
    ]
}

response = requests.post(
    url,
    auth=(api_key, secret_key),
    json=data
)

print(response.status_code)
print(response.text)