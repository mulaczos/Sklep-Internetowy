CREATE TABLE IF NOT EXISTS ORDERS (
    ID LONG NOT NULL PRIMARY KEY AUTO_INCREMENT,
    SUMMARY DOUBLE NOT NULL,
    DELETED BOOLEAN NOT NULL DEFAULT FALSE,
    STATE VARCHAR(255) NOT NULL,
    USER_ID VARCHAR(255),
    CUSTOMER_NAME VARCHAR(50) NOT NULL,
    CUSTOMER_LASTNAME VARCHAR(50) NOT NULL,
    CUSTOMER_EMAIL VARCHAR(100) NOT NULL,
    CUSTOMER_ADDRESS VARCHAR(255),
    CUSTOMER_CITY VARCHAR(255),
    CUSTOMER_ZIPCODE LONG
);

ALTER TABLE ITEMS ADD ORDER_ID LONG;
ALTER TABLE PUBLIC.ITEMS ADD FOREIGN KEY(ORDER_ID) REFERENCES PUBLIC.ORDERS(ID);
ALTER TABLE PUBLIC.ORDERS ADD FOREIGN KEY(USER_ID) REFERENCES PUBLIC.USERS(USERNAME);

