CREATE TABLE storebenefit (
	No INT AUTO_INCREMENT NOT NULL,
	StoreName varchar (30),
	Week_1 float (8, 2),
	Week_2 float (8, 2),
	Week_3 float (8, 2),
	Week_4 float (8, 2),
	PRIMARY KEY(No)
);

INSERT INTO storebenefit VALUES (Null, 'Newport News Deco. Inc.', 12850.50, 9750.25, 37333.43, 5421.26);

INSERT INTO storebenefit VALUES (Null, 'Yorktown Deco. Inc.', 22567.25, 7853.28, 750.45, 12700.33);

INSERT INTO storebenefit VALUES (Null, 'Poquoson Deco. Inc.', 917.95, 3250.00, 17800.77, 4892.26);

INSERT INTO storebenefit VALUES (Null, 'Hampton Deco. Inc.', 77892.92, 2287.46, 8841.43, 44673.26);