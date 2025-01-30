# CrimeFlix
##### _All the crime you can handle_

##### Click [here](https://crimeflix.herokuapp.com/) to visit CrimeFlix.


##### If you don't want to make an account, that's okay! Please use the following when signing in:
-- Username: admin
-- password: password
## Approach Taken
- Designed a wireframe based off Netflix's web design.
- Created 4 separate controllers in order to better organize and control all the routes.
    -- User Controller - controls the sign in and register side of the application.
    -- Home Controller - controls the home page and reviews page which includes both movies and shows.
    -- Movies Contoller - controls the movies show page as well as the movie reviews edit page.
    -- Shows Controller - controls the shows show page as well as the movie reviews eidt page.
- Also created 3 separate models (User, Movies, and Shows).
- Created 5 separate views for the users, home, movies, shows, and partials to link my header and footer to all pages.  
- Focused on adding functionality to my pages while simultaneously adding CSS to them so I can have a better visual of my pages.

## Technologies Used
- Express
- Mongoose
- CRUD
- Node.js
- EJS

## Unsolved Problems
- Need to add a 'delete' button to each review which the current users posts so they have the ability to delete it if they like.
- Need to display the current user's username whereever I have '@username' currently displaying.

##
- Need to add better fuctionality for the user. Start with resolving the issues listed in 'Unsolved Problems'.

## User Stories
1. When the user clicks Sign Up, they should be redirected to a sign up page and be able to create an account there.
2. When the user clicks Sign In, they should be redirected to a sign in page and be abel to sign in there.
3. User cannot access any other pages unless they’re signed in.
4. On the home page, when user hovers over a movie/show, the movie/show card should get bigger in size and show movie details such as description and year released.
5. When user clicks home, movies, show, and/or submit review buttons, they will be taken to those pages.
6. When user submits a new review, it should be added to the latest reviews and reviews for the specific movie which the review was added for.
7. When user clicks a movie/show, they should be redirected to the movie page which shows description, year released and its reviews.
8. Movies/shows should be organized on the home page by their release date.
9. As a user I want to be able to edit and/or delete personal reviews.

## Wireframe
##### Click [here](https://www.figma.com/file/JyupYTp0EQbqcBNDBNQe3i/Movies%2FShows?node-id=11%3A210) to view my wireframe.
