# uvera Movie Dashboard

## Overview
This project is an Angular-based movie browser application that interacts with the [TMDB API](https://www.themoviedb.org/documentation/api). It allows users to discover movies, TV shows, and their details, including banners, videos, and popular listings. The app leverages reusable components, custom pipes, and modular architecture for scalability and maintainability.

## Features
- Browse popular movies and TV shows.
- View detailed information about a selected movie, including banners and trailers.
- Dynamic image and video handling using custom pipes.
- A responsive and reusable carousel component for showcasing media.

## Tech Stack
- **Framework**: Angular
- **Styling**: SCSS
- **HTTP Client**: Angular's `HttpClient` for API interactions
- **Pipes**: Custom pipes for image and description transformations
- **API**: TMDB API for fetching movie and TV show data

## Directory Structure
```
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── components/
│   │   │   │   ├── banner/
│   │   │   │   └── header/
│   │   │   └── services/
│   │   │       └── movie.service.ts
│   │   ├── pages/
│   │   │   └── browse/
│   │   │       └── browse.component.ts
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   ├── models/
│   │   │   │   └── video-content.interface.ts
│   │   │   ├── pipes/
│   │   │   │   ├── description.pipe.ts
│   │   │   │   └── image.pipe.ts
│   │   └── app.component.ts
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or later)
- Angular CLI

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/movie-browser.git
   cd movie-browser
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
1. Start the development server:
   ```bash
   ng serve
   ```
2. Open your browser and navigate to `http://localhost:4200/`.

### Testing
Run unit tests using:
```bash
ng test
```

## API Details
The application uses endpoints from the TMDB API. Ensure you have an API key before running the app. Update the `Authorization` header in `movie.service.ts` with your Bearer token.

### Endpoints Used
- **Movies**: `https://api.themoviedb.org/3/discover/movie`
- **TV Shows**: `https://api.themoviedb.org/3/discover/tv`
- **Banner Images**: `https://api.themoviedb.org/3/movie/{id}/images`
- **Banner Videos**: `https://api.themoviedb.org/3/movie/{id}/videos`
- **Now Playing**: `https://api.themoviedb.org/3/movie/now_playing`
- **Popular Movies**: `https://api.themoviedb.org/3/movie/popular`
- **Top Rated**: `https://api.themoviedb.org/3/movie/top_rated`
- **Upcoming Movies**: `https://api.themoviedb.org/3/movie/upcoming`

## Architectural Insights
- **Modular Design**: Components and services are split into logical modules, ensuring scalability and separation of concerns.
- **Reusable Components**: E.g., `MovieCarouselComponent` and `BannerComponent`.
- **Custom Pipes**: Simplify data transformation in templates.
- **HTTP Services**: Centralized API calls in `MovieService`.

### Suggested Enhancements
- Implement **state management** (e.g., NgRx or Akita) for better handling of global data.
- Add **lazy loading** for routes to optimize performance.
- Use **environment configurations** for API keys and URLs.

## Future Enhancements
- Add user authentication and personalization features.
- Include advanced search and filter options.
- Enhance UI/UX with animations and themes.

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License.

---
Feel free to reach out with any questions or suggestions!

