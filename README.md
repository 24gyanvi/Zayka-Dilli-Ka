# Zayka-Dilli-Ka
A website for recommending cafes and restaurants of delhi based on real world data.
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

