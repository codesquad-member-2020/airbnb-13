DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS room;
DROP TABLE IF EXISTS reservation;
DROP TABLE IF EXISTS reservation_date;

CREATE TABLE user
(
    id    BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(128) UNIQUE
);

CREATE TABLE room
(
    id           BIGINT PRIMARY KEY AUTO_INCREMENT,
    title        VARCHAR(512),
    thumbnail    VARCHAR(256),
    super_host   TINYINT(1),
    address      VARCHAR(512),
    location     VARCHAR(45),
    latitude     FLOAT,
    longitude    FLOAT,
    accommodates INT,
    price        INT,
    cleaning_fee INT,
    review_score FLOAT
);

CREATE TABLE reservation
(
    id      BIGINT PRIMARY KEY AUTO_INCREMENT,
    adult   INT,
    child   INT,
    infant  INT,
    user_id BIGINT REFERENCES user (id),
    room_id BIGINT REFERENCES room (id)
);

CREATE TABLE reservation_date
(
    id               BIGINT PRIMARY KEY AUTO_INCREMENT,
    reservation_date DATE,
    reservation_id   BIGINT REFERENCES reservation (id),
    reservation_key  INT
);

