# <img src="./client/public/favicon.png" alt="Logo" width="40" height="30" > Guide Through

**Guide Through** is a social web app designed to streamline decision-making by providing a platform for users to share and benefit from each other's insights and experiences.

## Table of Contents

- [Project description](#project-description)
- [Features](#features) 
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Queries](#queries)
- [Detail Documentation](#detail-documentation)
- [Note](#note)
- [Get Started](#get-started)

## Project description
In today's fast-paced world, individuals often face confusion and uncertainty due to a lack of clear guidance and reliable information. The overwhelming volume of unstructured and scattered information available online makes it challenging to find trustworthy advice. **Guide Through** addresses this problem by organizing content into different categories to share insights and experiences, facilitating community interaction and support. **Guide Through** aims to reduce the time users spend on decision-making and planning, enabling them to focus more on executing their tasks rather than wasting time figuring things out.

## Features

- **Categorized Content**: Insights and experiences across various categories such as health, education, travel, food, gardening, pets, finance, and more.
- **User Contributions**: post concise snippets in the "Advices" and "No-goes" sections or comprehensive guides in the "Blog" section.
- **Q&A Section**: Ask and answer questions to foster community interaction and support. Receive notifications for responses to the questions you asked.
- **Interactive Options**: Agree, disagree, like, share, and save posts.
- **Personalization**: Select interests to receive daily tips via email and in-app notifications.
- **Content Management**: Edit posts to ensure information remains up-to-date and relevant. Manage your profile: edit your interests, unsave saved content, and view, edit, and delete your posted content.
- **Sorting and Searching**: Sort posts by likes, upvotes, and recency. Search posts by keywords using MongoDB's query capabilities.


## Tech Stack
 
**Guide Through** is built using the MERN stack:
- **MongoDB**: NoSQL database for storing data in flexible, JSON-like documents.
- **Express.js**: Web application framework for building APIs and web servers.
- **React**: JavaScript library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side scripting.
- **Material-UI (MUI)**: React UI framework for building responsive user interfaces.
- **CSS**: Used in combination with React and Material-UI for styling the application.
- **JWT (JSON Web Token)**: Used for secure authentication and authorization in the application.


## Installation

To run **Guide Through** locally, follow these steps:

1)Clone the repository:
   
   <pre>git clone https://github.com/niharikab04/Guide-Through</pre>
   
  (or)

  Downloading the Project ZIP File

    -Navigate to the GitHub repository (https://github.com/niharikab04/Guide-Through).
    -Click on the "Code" button and select "Download ZIP".
    -Extract the ZIP file to a directory on your computer.
   
 2) Navigate to the project directory:

   <pre>cd Guide-Through</pre>

# Server Setup

## Environment variables
First, create the environment variables file `.env` in the server folder. The `.env` file contains the following environment variables:
     <pre>DB_URL = 'your MongoDB URL'
      JWT_SECRET = 'any secret key - must be secured'
      USER = 'guidethrough4@gmail.com'
      PASSWORD = 'ongs zhhl oiki ocym '</pre>


## Set Up MongoDB:

1. Setting up MongoDB involves a few steps:
    - Visit MongoDB Atlas Website
        - Go to the MongoDB Atlas website: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).

    - Create an Account
    - Log in to your MongoDB Atlas account.
    - Create a New Cluster
    - Choose a Cloud Provider and Region
    - Configure Cluster Settings
    - Create Cluster
    - Wait for Cluster to Deploy
    - Create Database User
    - Set Up IP Whitelist
    - Connect to Cluster
    - Configure the Application
    - Test the Connection
2. Create a new database and configure the `.env` file with the MongoDB connection URL.
   
## Steps to run server

1. Open the project in any editor of choice.
2. Navigate into the server directory `cd server`.
3. Run `npm i` or `npm install` to install the packages.
4. Run `npm run start:dev` to start the server.



## Steps to run client

1. Navigate into the client directory `cd client`.
2. Run `npm i` or `npm install` to install the packages.
3. Run `npm start` to run the app on `http://localhost:3000`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

To effectively use **Guide Through**, follow these steps:

1. **Accessing the Application**:
   - Open your web browser and navigate to the URL where the application is hosted ([https://gt-frontend-fawn.vercel.app/](https://gt-frontend-fawn.vercel.app/)).

2. **Creating an Account**:
   - If you are a new user, click on the "Sign Up" or "Register" button to create a new account.
   - Enter your email address and password.
   - Check your email for a verification code to complete the registration process.

3. **Logging In**:
   - Once registered, click on the "Login" button.
   - Enter your registered email address and password.

4. **Exploring Content**:
   - After logging in, you will land on the homepage.
   - Click the Explore button for different categories such as health, education, travel, food, gardening, pets, finance, etc.
   - Click on a category for subcategories and select one to view posts and content related to that topic.

5. **Interacting with Posts**:
   - Read posts shared by other users in the categories that interest you.
   - Use interactive options such as liking, sharing, and saving posts that you find useful.
   - Participate in discussions by commenting on posts or asking questions in the Q&A section.

6. **Personalizing Your Experience**:
   - Navigate to your profile settings to customize your interests.
   - Receive daily tips based on your selected categories.

7. **Creating and Managing Posts**:
   - If you have insights or experiences to share.
   - Choose the appropriate section (Blog, Advices, No-goes, Q&A) and click on the "write" icon to write your content.
   - Edit or delete your posts as needed from your profile management section.

8. **Searching and Sorting**:
   - Use the search bar to find specific topics or keywords within posts.
   - Sort posts by popularity (likes, upvotes), recency, or relevance to find the most relevant content quickly.

9. **Logging Out**:
   - When you're done using the application, click on the "Logout" button to securely log out of your account.

10. **Additional Features**:
    - Explore additional features like user profiles, content management, and notifications to enhance your experience.
## Future Enhancements

- **Integration with Other Platforms**: Enable users to share content directly to social media platforms.

- **User Reputation System**: Implement a reputation system to showcase user rankings and achievements, motivating greater participation.

- **Customizable User Profiles**: Allow users to personalize their profiles with themes, profile pictures, bios, and links to their social media.

- **Rich Media Support**: Support uploading and embedding of rich media such as videos, images, and infographics within posts and answers.
  
- **Browser Compatibility**: Ensure compatibility across all major web browsers to improve accessibility and user experience. Currently optimized for Firefox (both desktop and mobile versions).

## Queries

For any questions or inquiries regarding **Guide Through**, please contact us at [guidethrough4@gmail.com](mailto:guidethrough4@gmail.com).

## Detail Documentation

For a comprehensive understanding of **Guide Through**, please refer to our [Full Detail Documentation](https://1drv.ms/b/s!Ag9Ge0qNoAKwjYhAnXq-qumGXhWfDQ?e=fTNHoG).

## Note

This application works best on Firefox (both desktop and mobile versions). There are known issues with other browsers that we plan to address in future updates.


## Get Started

Ready to **glide through** life with ease? Sign up now and join our community of users committed to making life simpler and more fulfilling.
