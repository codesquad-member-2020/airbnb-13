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
    location     varchar(45),
    price        int,
    review_score float,
    thumbnail    varchar(256),
    super_host    tinyint(1),
    cleaning_fee int,
    title        varchar(512),
    address      varchar(512),
    accommodates int
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
    id             int auto_increment primary key,
    date           DATETIME,
    reservation_id int references reservation (id)
);

