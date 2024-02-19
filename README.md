# Watch Wave

Watch Wave is a web application built using Next.js and the TMDB API, allowing users to explore information about movies, TV shows, and actors. Users can create an account using email, GitHub, or Google authentication and save their favorite items to a personalized list.

## Table of Contents

- [Motivation](#motivation)
- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Motivation

The idea behind Watch Wave stemmed from the desire to create a user-friendly platform where movie and TV show enthusiasts can easily access information about their favorite entertainment content. With the proliferation of streaming services and the vast amount of content available, it can be overwhelming for users to keep track of what they want to watch. Watch Wave aims to simplify this process by providing a centralized hub where users can discover, save, and organize their preferred movies, TV shows, and actors.

## Features

- **User Authentication:** Users can sign up and log in using email, GitHub, or Google accounts.
- **Browse Content:** Explore a vast library of movies, TV shows, and actor information fetched from the TMDB API.
- **Favorite List:** Users can add items to their favorite list for easy access later.
- **Search Functionality:** Search for specific movies, TV shows, or actors.
- **Responsive Design:** The application is responsive and works seamlessly across different devices.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/watch-wave.git
2. Navigate to the project directory:

   ```bash
    cd watch-wave
   ``` 
3. Install the dependencies:

   ```bash
   npm install
   ```
4. This project using the following environment variables:
    1. Prisma, mongodb to handel authentication, authorization with JWT, Google and Github OAuth and add favorite list.
   2. Next Auth to handle Google and Github OAuth.
   3. TMDB API to fetch movies, tv shows and actors data.
   4. TMBD_BASE_URL and TMBD_IMAGE_BASE_URL to fetch images and other data from TMDB API.



   ```bash
   DATABASE_URL=
  NEXTAUTH_JWT_SECRET=
  NEXTAUTH_SECRET=
  GITHUB_ID=
  GITHUB_SECRET=
  GOOGLE_CLIENT_ID=
  GOOGLE_CLIENT_SECRET=
  TMDB_API_KEY=
  TMBD_BASE_URL=
  TMBD_IMAGE_BASE_URL=
   ```

5. Run the development server:

   ```bash
    npm run dev
    ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
7. To build the application for production, run:

   ```bash
   npm run build
   npm run start
   ```

## Usage
- Upon accessing the application, users can sign up or log in using their preferred method.
- Once logged in, users can browse through movies, TV shows, and actors using the navigation menu.
- Users can search for specific items using the search functionality.
- To add an item to their favorites list, users can click on the "Add to Favorites" button.
- Users can view their favorite list by navigating to the Favorites section in the navigation menu.

## Technologies Used
- Next.js
- React
- TMDB API
- Tailwind CSS
- Next Auth
- Prisma
- MongoDB
- Google OAuth
- GitHub OAuth


## Contributing

Contributions are welcome! To contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/improvement).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature/improvement).
6. Create a new Pull Request.
