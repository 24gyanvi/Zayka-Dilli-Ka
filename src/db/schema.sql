-- Creating a daaabase schema
Create database restaurants;

-- Using the database
use restaurants;

-- Creating a table lcfa_rest
create table lcfa_rest(
 id int unique not null,
 old_id int primary key not null,
 restaurant_name varchar(150) not null,
 category varchar(500) not null,
 pricing_for_two bigint not null,
 locality varchar(500) not null,
 dining_rating double default 0,
 dining_review_count bigint not null,
 website varchar(5000) not null,
 known_for2 varchar(5000),
 known_for22 varchar(5000) 
 );

-- Creating a table lcfa_ranking
create table lcfa_ranking(
 id int primary key auto_increment not null,
 restaurant_name varchar(150) not null,
 category varchar(500) not null,
 pricing_for_two bigint not null,
 locality varchar(500) not null,
 dining_rating double default 0,
 dining_review_count bigint not null,
 website varchar(5000) not null,
 known_for2 varchar(5000),
 known_for22 varchar(5000),
 score double default 0,
 foreign key(id) references lcfa_rest(old_id)
);

-- Creating a table images
create table images(
id int primary key not null,
link varchar(2000),
foreign key(id) references lcfa_rest(id)
);


-- Creating a table lcfa
create table lcfa(
id int unique not null,
 old_id int primary key not null,
 restaurant_name varchar(150) not null,
 category varchar(500) not null,
 pricing_for_two bigint not null,
 locality varchar(500) not null,
 dining_rating double default 0,
 dining_review_count bigint not null,
 website varchar(4000) not null,
 known_for2 varchar(3000),
 known_for22 varchar(3000),
 link varchar(2000)
);

-- Creating a table ranking
create table ranking(
id int unique not null,
 old_id int primary key not null,
 restaurant_name varchar(150) not null,
 category varchar(500) not null,
 pricing_for_two bigint not null,
 locality varchar(500) not null,
 dining_rating double default 0,
 dining_review_count bigint not null,
 website varchar(4000) not null,
 known_for2 varchar(3000),
 known_for22 varchar(3000),
 link varchar(2000),
 score double default 0
);
