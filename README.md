# Zayka-Dilli-Ka

## About the project
A machine learning based website for exploring various eateries of Delhi. This site recommends cafes and restaurants of delhi based on real world data. As there are 3 ways of recommendation available namely:
* Collaborative
* Content-based
* Demographic
<br>In this project, I am making use of `content-based filtering`. It basically calculates the similarity score between two restaurants.
### Salient Features
* The front page shows eateries based on the ranking algorithm which is a combined score of both the rating and the number of people who participated in the rating so as to get an unbiased rank.
* The front page also shows a few cafes, restaurants, romantic outings and family outings eateries based on their category and ambience sorted on the basis of its ratings.
* The recommend page gives various salient details about the eatery chosen and also redirects to the zomato page of that eatery so that one can order or book a dine-in.
* The recommend page shows the information about the particular eatery chosen and also shows some similar results on the basis of the chosen eatery's category which includes cuisines and its type, locality, special food items and the kind of ambience.
* The search page shows the results on the basis of the keyword searched, basically it helps finding a type of restaurant, or eateries famous for a particular cuisine or food item.
### Compatible Devices
Laptops, desktops, Tablet PCs and Mobile Phones
### Built With
#### Website:
* Front-end: HTML, CSS, Bootstrap, Javascript
* View Engine: Pug
* Backend: Node.js, Express.js
* Database: mysql
#### Recommendation Engine and Ranking System:
* Python
#### Datasets
* Images: Python using Google Image Scraper
* DelhiNCR_Restaurants: From [Kaggle](https://www.kaggle.com/datasets/aestheteaman01/zomato-restaurants-in-delhi-ncr)
* Ranking_lcfa: After calculating score based on rating and number of people who rated
* lcfa_rest: After data preprocessing in Python

## Running
1. Download Node.js and npm from [nodejs.org](https://nodejs.org/en/download/)
2. Clone the repo and run `npm install`
3. Execute zdk.sql file
4. Create a user in Mysql with username : your_mysql_username and enter password in conn.js file of db folder in src folder.
5. Run the given command `ALTER USER 'your_username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password'` on your Mysql workbench.
6. Then start the server by `npm run dev`
7. Open the browser and go to http://localhost:3000/

## Snippets
### Front Page showing a few top restaurants of Delhi based on rating and number of people who rated
![image](https://user-images.githubusercontent.com/88244007/170837978-0e122833-5156-4ae4-bc91-452e6f93833d.png)
### Front Page showing a few top rated cafes, restaurants, romantic outings and family outings
![image](https://user-images.githubusercontent.com/88244007/170838039-f576a078-452d-452a-80c8-19857816fbb9.png)
### Recommend Page showing the details of the restaurant
![image](https://user-images.githubusercontent.com/88244007/170838187-16e57265-52db-40f5-9fab-aea47a8afd3c.png)
### Recommend Page showing the similar results based on the restaurant the viewer chose
![image](https://user-images.githubusercontent.com/88244007/170838255-6bb0702f-792a-4c9c-ab58-b85640394189.png)
### Search Page showing the search results
![image](https://user-images.githubusercontent.com/88244007/170838394-888a5af3-61dc-4da1-9166-f5b8e319ed24.png)

## Implementation
* Ranking System: This system basically works on the dining rating and dining rating count, so as to get an unbiased ranking for restaurants. Consider an example of restaurant A and B, which have dining rating 5 and 4.9 with dining rating count as 5 and 50 respectively. So if we consider only rating then restaurant A would be ranked first while restaurant B is better, so therefore accomodating both the dining rating and dining rating count helps us overcome this problem.
We have done this task using the formula given in [Ranking Generator](https://github.com/24gyanvi/Zayka-Dilli-Ka/blob/main/models/Ranking_generator.ipynb)
* Recommendation Engine: This system recommends restaurants on the basis of their locality, cuisines, famous food items, their ambience and their ctegory. This is done using `bag of words` and `cosine similarity`. It basically calculates the similarity score between two restaurants which can be seen in [lcfa_rest.ipynb](https://github.com/24gyanvi/Zayka-Dilli-Ka/blob/main/models/Lcfa_rest.ipynb). After implementing it on the dataset, the similarity matrix was converted to a list which was then converted to a json file named [lcfa_rest.json](https://github.com/24gyanvi/Zayka-Dilli-Ka/blob/main/Json%20files/lcfa_rest.json), which is then imported into [app.js](https://github.com/24gyanvi/Zayka-Dilli-Ka/blob/main/src/app.js) and used.

## Future Scope
* To sort the recommendations list on the basis of rating/pricing for 2/ distance.
* To add authentication to the website so that a person could get personalised choices
