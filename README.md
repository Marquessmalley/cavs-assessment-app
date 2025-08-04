# 🏀 Cleveland Player Profile

A web application built with **Next.js** that displays NBA player statistics using the NBA API.

## 🚀 Getting Started

Follow these instructions to get the project running locally.

### 📦 Prerequisites

- Gather API KEY provided in the assessment documentation.

# Getting Started

1.  Clone repo to local dev environment.
2.  Create .env file in root folder.
    - NBA_API_KEY=your_api_key_here
3.  Install dependencies & run the development server
    ```bash
    npm install
    npm run dev
    ```

# Calculating stats per game & per 36 minutes

- Stats Per Game

  - To calculate stats per game, the total for each stat is divided by the number of games played.

  ```bash
   perGame = totalStat / gamesPlayed
  ```

- Stats Per 36 Minutes

  - To calculate stats per 36 minutes, the total for each stat is divided by the to minutes played and multiplied by 36.

  ```bash
  per36 = (totalStat / totalMinutesPlayed) * 36
  ```
