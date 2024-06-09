# NetFlix GRT

1.CRA
2.Configured tailwind in our react app.
3.Routing
3.Header
4.Login-form
6.Sign Up form
7.useRef hook
8.Form Validation
9.Firebase set up
10.Deploying our app to production
11.Lets sign up user
12.implement sign in
13.Created our redux store with userSlice
14.Implemented sign out.
15.Update profile
16.Fetch TMDB Movies.
17.BugFix : Sign up user display name and profile picture update
18.BugFix : If the user is not logged in then direct to /browse page and vice versa.
19.Unsubscribed to the onAuthStateChange callback.
20.Add hardcoded values to constant files.
21.Registered in TMDB API , create an app and get the access token.
22.Get the data from TMDB now playing API.
23.Created movieSlice .
24.Custom hook for getting now playing movies data
25.Update the store with movies data.
26.Planing for MainContainer
27.Custom hook for getting trailer data.
28.Update the store with trailer data.
29.Embedded the YouTube Video and make it auto play and mute and added tailwind for styling.
30.We will build secondary component. 31. Built the Secondary Component. 32. Built MovieList. 33. Built MovieCard. 34. Add the TMDB poster image CDN to constant file. 35. Used custom hooks like useNowPlayingMovies , usePopularMovies , useTopRatedMovies , useUpComingMovies for now playing movies, popular movies, top rated movies and upcoming movies respectively.
36.Created GptSearch (parent) , GptSearchBar (child), GptMovieSuggestions(child) Components.
37.Created redux store with gptSlice .
38.Added the GptSearch component as taggable while click on Gpt button in header component using redux store.
39.Added multilingual feature in our app.
40.Integrate GPT APT
41.Added the functionality to search movies using GPT.
42.Added a .env file for in root directory to make api secure.
43.Added responsive features for large , medium and small screen.
44.Added hover effect to the MovieCard Component.
45.Used conditional rendering ofMovieDetails component for pop up modal trailer video and info .
46.Created a new state modalTrailerVideo in movieSlice in redux store.
47.and update that state using addModalTrailerVideo action (dispatch action)
48.Subscribe that store using usSelector hook provided by react-redux and update the MovieDetails component.
49.Added the functionality to close the modal (MovieDetails component) by subscribing to store , dispatch an action and conditional rendering.
50.Created Recommend , RecommendCard component and used custom hook like useMovieRecommend to get recommended movies as per a particular movieId.
51.Stored recommended movie data in recommendedMovies state in movieSlice in redux store.
52.Subscribe that store by useSelector hook and update the UI of Recommend component.
53.Also created a separate component like About to have complete movie details below Recommend component and the data is coming to this component as props.
54.Created FullTrailer component to view the full trailer in a separate route like /watch when we click on on the play button on poster in MovieDetails component and play button on VideoTitle component.
55.Did router configuration for FullTrailer component.
56.Used ref variable using useRef hook for conditional rendering of MovieDetails component and routing to FullTrailer component.
57.Did error handling and navigate to error route if any error comes.
58.Worked on recommended card text and decrease its length conditionally.
59.Expand and collapse the recommended cards lists by clicking on arrow button . 


# Features -

- login/Sign up page
  - log in/Sign up form
  - after logged in it will redirect to browse screen
- Browse page (only comes after authentication )
  - Header
    -Main Movie
  - Trailer in background
  - Title and description
  - MovieSuggestion
    - MovieLists
- NetFlix gpt
  -Search bar
  -Movie Suggestion
