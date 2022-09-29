DROP DATABASE IF EXISTS LB_Webshop;
CREATE DATABASE LB_Webshop;
USE LB_Webshop;

CREATE USER LB_Webshop@'%' IDENTIFIED BY '<Password>';
GRANT ALL ON LB_Webshop.* to 'LB_Webshop'@'%';