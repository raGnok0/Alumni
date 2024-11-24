CREATE TABLE Alumni (
  alumni_id SERIAL PRIMARY KEY,   
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(15),
  email VARCHAR(100) NOT NULL,
  remarks TEXT
);

CREATE TABLE JNU (
  jnu_id SERIAL PRIMARY KEY,
  alumni_id INT REFERENCES Alumni(alumni_id) ON DELETE CASCADE, 
  school VARCHAR(100) NOT NULL,
  subjects VARCHAR(200) NOT NULL,
  years INT NOT NULL,
  degree VARCHAR(100) NOT NULL
);

CREATE TABLE Company (
  company_id SERIAL PRIMARY KEY,
  alumni_id INT REFERENCES Alumni(alumni_id) ON DELETE CASCADE,  
  designation VARCHAR(100) NOT NULL,
  companyName VARCHAR(100) NOT NULL,
  city VARCHAR(50) NOT NULL
);