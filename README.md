# AWS Static Website Deployment with CDK (Python)

This project demonstrates how to deploy a static website on AWS using:

* Amazon S3
* Amazon CloudFront
* AWS CDK (Python)

The website consists of simple frontend files:

* `index.html`
* `styles.css`
* `script.js`

Infrastructure is fully defined as code using AWS CDK, making deployments repeatable, scalable, and easy to maintain.

---

# Architecture

```text
User
  |
CloudFront
  |
Private S3 Bucket
```

CloudFront serves the website globally while the S3 bucket remains private and accessible only through CloudFront.

---

# Features

* Static website hosting with Amazon S3
* Global content delivery using CloudFront
* Infrastructure as Code with AWS CDK
* Secure private S3 bucket
* Automatic website deployment to S3
* Automatic CloudFront cache invalidation
* Simple frontend with smooth scrolling navigation

---

# Project Structure

```text
static-website-cdk/
│
├── app.py
├── cdk.json
├── requirements.txt
├── README.md
├── .gitignore
│
├── website/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
└── aws_static_website/
    ├── __init__.py
    └── aws_static_website_stack.py
```

---

# Prerequisites

Before starting, install:

* Python 3.11+
* Node.js
* AWS CLI
* AWS CDK

Install AWS CDK globally:

```bash
npm install -g aws-cdk
```

Configure AWS credentials:

```bash
aws configure
```

---

# Install Dependencies

Create and activate a virtual environment:

## Linux/macOS

```bash
python -m venv .venv

source .venv/bin/activate
```

## Windows

```powershell
python -m venv .venv

.venv\Scripts\activate
```

Install Python dependencies:

```bash
pip install -r requirements.txt
```

---

# Bootstrap CDK

Bootstrap your AWS environment before the first deployment:

```bash
cdk bootstrap
```

---

# Deploy the Website

Deploy the infrastructure and upload the website files:

```bash
cdk deploy
```

After deployment, CDK outputs the CloudFront domain URL.

Example:

```text
https://d123abc.cloudfront.net
```

Open the URL in your browser to access the website.

---

# Synthesize CloudFormation Templates

Generate the CloudFormation template locally:

```bash
cdk synth
```

The generated templates are stored inside:

```text
cdk.out/
```

Generate YAML templates:

```bash
cdk synth --yaml
```

---

# Update the Website

Modify files inside the `website/` folder and redeploy:

```bash
cdk deploy
```

CDK automatically:

* Uploads updated files to S3
* Invalidates CloudFront cache
* Publishes the latest version globally

---

# Security Best Practices

This project follows AWS security best practices:

* The S3 bucket is private
* Public access is blocked
* CloudFront accesses S3 through Origin Access Identity (OAI)
* Website content is delivered securely through CloudFront

---

# Useful Commands

```bash
# Synthesize CloudFormation template
cdk synth

# Deploy stack
cdk deploy

# Destroy stack
cdk destroy

# View CDK differences
cdk diff
```

---

# Technologies Used

* AWS CDK v2
* Python
* Amazon S3
* Amazon CloudFront
* HTML
* CSS
* JavaScript

---

# License

This project is open-source and available for learning and educational purposes.
