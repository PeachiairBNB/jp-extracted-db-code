CREATE TABLE listingTable (
  _id    INT PRIMARY KEY,
  id     INT NOT NULL,
  name  VARCHAR (100) NOT NULL,
  capacity INT NOT NULL,
  cleaningFee INT NOT NULL,
  numReviews INT NOT NULL,
  price INT NOT NULL,
  availability VARCHAR (150) NOT NULL
);

-- COPY 'records.csv' TO listingtable WITH (FORMAT csv);

-- (id, name, capacity, cleaningFee, numReviews, price, availability, _id)

-- COPY listingtable FROM '/Users/justinposer/Documents/HackReactor/SDC/LS-Module/newVersion/records.csv' CSV HEADER;