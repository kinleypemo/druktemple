CREATE DATABASE admin;

-- CREATE TABLE lhakhangss(
--     id SERIAL PRIMARY KEY,
--     lhakhang_name VARCHAR(30),
--     landing_img VARCHAR(255)
-- )

-- CREATE TABLE users(
--     email VARCHAR(255) PRIMARY KEY,
--     hashed_password VARCHAR(255)
-- )

CREATE TABLE feedbacks(
    email VARCHAR(255),
    feedbacks VARCHAR(255)
)

CREATE TABLE lhakhang(id SERIAL PRIMARY KEY,lhakhang_name VARCHAR(30),lhakhang_detail VARCHAR(5000),location VARCHAR(30),images text[]);

CREATE TABLE events(id SERIAL PRIMARY KEY,event_name VARCHAR(30),event_detail VARCHAR(5000),location VARCHAR(30),date VARCHAR(30),time VARCHAR(30));

CREATE TABLE donations(id SERIAL PRIMARY KEY,lhakhang_name VARCHAR(50),purpose VARCHAR(5000),account_number INT,account_holder VARCHAR(30));

CREATE TABLE donations_report(id SERIAL PRIMARY KEY,name VARCHAR(50),amount INT,jrl_number INT);

CREATE TABLE users(id SERIAL PRIMARY KEY,username VARCHAR(50),password VARCHAR(50));

