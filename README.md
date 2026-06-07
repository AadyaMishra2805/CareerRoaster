# 💀 Career Roast AI

AI-powered career evaluation platform that analyzes resumes, optionally evaluates GitHub profiles, generates ATS scores, career readiness reports, personalized roadmaps, and finishes with a fun roast.

---

## 🚀 Overview

Career Roast AI is an automated career assessment platform designed to help candidates understand how their profiles align with their desired career paths.

The system accepts:

* Resume PDF Upload
* Optional GitHub Profile
* Career Domain Selection
* Target Role Selection

It then generates a detailed recruiter-style career report powered by AI.

---

# ✨ Features

### 📄 Resume Analysis

* PDF Resume Upload
* Automatic Resume Text Extraction
* Resume Parsing

### 🐙 GitHub Integration

* Optional GitHub Profile Analysis
* Repository Statistics
* Contribution Signals
* Project Visibility Assessment
* Public Profile Analysis

### 📊 Career Evaluation

* ATS Score Calculation
* Internship Readiness Assessment
* Preparedness Percentage
* Strength Analysis
* Improvement Areas
* Missing Skills Detection

### 🛣 Career Guidance

* Personalized Career Roadmap
* Short-Term Goals
* Medium-Term Goals
* Long-Term Goals
* Project Recommendations

### 💀 Career Roast Section

* Fun motivational roast
* Profile-based humor
* Non-insulting evaluation style

---

# 🛠 Tech Stack

## Frontend

* HTML
* CSS
* JavaScript

## Backend / Automation

* n8n Workflow Automation
* Webhooks
* PDF Processing

## AI Layer

* OpenAI Models

## External APIs

* GitHub API

---

# 🏗 System Architecture

```text id="gkl5gl"
User Uploads Resume + GitHub + Role

↓

Frontend Sends Data

↓

Webhook Trigger

↓

Resume PDF Extraction

↓

GitHub API Fetch (Optional)

↓

Merge Resume + GitHub Data

↓

AI Career Evaluation

↓

HTML Report Generation

↓

Frontend Displays Report
```

---

# 📂 Project Structure

```text id="b80fna"
CAREER-ROAST-AI/

├── .vscode/
│   └── settings.json
│
├── demo/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── reports/
│
├── career_roaster.mp4
│
├── carrer_roaster_final.json
│
├── n8n.png
│
└── README.md
```

---

# ⚙️ Workflow Explanation

## 1. Webhook Trigger

Receives:

* Resume PDF
* GitHub URL
* Career Domain
* Target Role

---

## 2. Resume Extraction

Extracts:

* Resume text
* Skills
* Education
* Projects
* Experience

---

## 3. GitHub Processing

If GitHub exists:

* Fetch user data
* Get repository statistics
* Analyze profile activity

If absent:

* Continue evaluation normally

---

## 4. AI Evaluation

Generates:

* Summary
* ATS Score
* Internship Readiness
* Preparedness Score
* Strength Analysis
* Missing Skills
* Roadmap
* Projects
* Roast

---

## 5. HTML Report Generation

Produces structured recruiter-style report.

---

# 📋 Generated Report Sections

### 1 Summary

Candidate profile overview.

### 2 ATS Score

Resume visibility assessment.

### 3 Internship Readiness

Preparation stage estimation.

### 4 Preparedness Percentage

Role readiness estimate.

### 5 Strengths

Evidence-based strengths.

### 6 Improvement Areas

Growth opportunities.

### 7 Missing Skills

Role-specific competency gaps.

### 8 Career Roadmap

Short

Medium

Long-term guidance.

### 9 Project Suggestions

Recommended practical projects.

### 10 Funny Roast Section

Motivational humor.

---

# 🌍 Supported Career Domains

Technical:

* AI / ML
* Data Science
* Software Engineering
* Cybersecurity
* Cloud Computing
* Data Analytics

Engineering:

* Mechanical
* Civil
* Electrical
* Electronics

Business:

* Finance
* Marketing
* HR
* Operations
* Product Management

General:

* Any career domain supported through role adaptation

---

# 🚀 Setup Instructions

## Clone Repository

```bash id="mzrt7d"
git clone YOUR_REPO_LINK
```

## Open Project

```bash id="sljlwm"
cd career-roast-ai
```

## Frontend

Open:

```text id="g39abj"
frontend/index.html
```

## n8n Workflow

Import:

```text id="ghu1mh"
carrer_roaster_final.json
```

Configure:

* Webhook URL
* OpenAI Credentials
* Activate Workflow

Run Workflow.

---

# 📸 Screenshots

Add:

* Homepage UI
* Generated Report
* n8n Workflow
* Demo Screenshots

---

# 🎥 Demo

Add:

```text id="3xudsl"
career_roaster.mp4
```

to showcase workflow.

---

# 🔮 Future Improvements

* PDF Export
* Better ATS Engine
* Skill Gap Visualizations
* Authentication
* Resume Comparison
* User History
* Dashboard Analytics

---

# 🤝 Contributing

Contributions are welcome.

1 Fork Repository

2 Create Branch

3 Commit Changes

4 Push Branch

5 Open Pull Request

---

# 💀 Career Roast AI

### “Because recruiters judge anyway — might as well let AI do it first.”

Built with AI + n8n + automation.
