
-- @block Creating zus_coffee_shops table

CREATE TABLE zus_coffee_shops (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  postal_code VARCHAR(10) NOT NULL,
  latitude DECIMAL(9, 6),
  longitude DECIMAL(9, 6),
  phone_number VARCHAR(15),
  email VARCHAR(255),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- @block Inserting data zus_coffee_shops

INSERT INTO zus_coffee_shops (name, address, city, state, postal_code, latitude, longitude, phone_number, email)
VALUES 
(
  'ZUS Coffee - Dataran Glomac', 
  'C-G-05 (Ground Floor, Jalan SS 6/5b, Dataran Glomac',
  'Petaling Jaya',
  'Selangor',
  '47301',
  3.10273,
  101.6001,
  '0128161340',
  'support@zuscoffee.com'
),
(
  'ZUS Coffee - Paradigm Mall', 
  'UGK-02 (Upper Ground), No, 1, Jalan SS7/26A, Ss 7',
  'Petaling Jaya',
  'Selangor',
  '47301',
  3.1051,
  101.596,
  '+60128161340',
  'support@zuscoffee.com'
),
(
  'ZUS Coffee - Citta Mall', 
  'G-48 7 G-48A, Ground Floor, Citta Mall, 1, Jalan PJU 1a/48',
  'Petaling Jaya',
  'Selangor',
  '47301',
  3.11261,
  101.57923,
  '0128161340',
  'support@zuscoffee.com'
);