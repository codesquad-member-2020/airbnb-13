drop table if exists user;
drop table if exists room;
drop table if exists reservation;
drop table if exists reservation_date;

create table user
(
    id    int primary key auto_increment,
    email varchar(128) unique
);

create table room
(
    id           int primary key auto_increment,
    title        varchar(512),
    thumbnail    varchar(256),
    super_host   tinyint(1),
    address      varchar(512),
    location     varchar(45),
    latitude     float,
    longitude    float,
    accommodates int,
    price        int,
    cleaning_fee int,
    review_score float
);

create table reservation
(
    id      int auto_increment primary key,
    adult   int,
    child   int,
    infant  int,
    user_id int references user (id),
    room_id int references room (id)
);

create table reservation_date
(
    id               int auto_increment primary key,
    reservation_date DATETIME,
    reservation_id   int references reservation (id)
);

