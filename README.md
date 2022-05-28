# Zayka-Dilli-Ka
## About the project
A website for exploring various eateries of Delhi. This site recommends cafes and restaurants of delhi based on real world data.
### Salient Features
* The front page shows eateries based on the ranking algorithm which is a combined score of both the rating and the number of people who participated in the rating so as to get an unbiased rank.
* The front page also shows a few cafes, restaurants, romantic outings and family outings eateries based on their category and ambience sorted on the basis of its ratings.
* The recommend page gives various salient details about the eatery chosen and also redirects to the zomato page of that eatery so that one can order or book a dine-in.
* The recommend page shows the information about the particular eatery chosen and also shows some similar results on the basis of the chosen eatery's category which includes cuisines and its type, locality, special food items and the kind of ambience.
* The search page shows the results on the basis of the keyword searched, basically it helps finding a type of restaurant, or eateries famous for a particular cuisine or food item.
### Compatible Devices
Laptops, desktops, Tablet PCs and Mobile Phones
### Built With
* Front-end: HTML, CSS, Bootstrap, Javascript
* Backend: Node.js, Express.js, Python
* Database: mysql
## Running
1. Clone the repo and run `npm install`
2. Create a database using zdk.sql file
3. Create a user in Mysql with username : root and enter password in conn.js file of db folder in src folder.
4. Run the given command `ALTER USER 'your_username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password'` on your Mysql workbench.
5. Then start the server by `npm run dev`

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

