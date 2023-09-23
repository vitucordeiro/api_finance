CREATE TABLE user (
    user_id         INT uuid_generate_v4(),
    fist_name       VARCHAR(50) ,
    last_name       VARCHAR(50) ,
    complete_name   VARCHAR(50) ,
    email           VARCHAR(60),
    PRIMARY KEY(user_id),
    CONSTRAINT username_email_notnull CHECK (
    NOT (
     ( first_name IS NULL  OR  first_name = '' )
     AND
     ( last_name IS NULL  OR  last_name = '' )
     AND
     ( complete_name IS NULL OR complete_name = '')
     AND
     ( email IS NULL OR email = '')
   )
 )
);
CREATE TABLE post (
    post_id         INT uuid_generate_v4(),
    user_id         INT,
    content         TEXT NOT NULL,
    data_post       DATE NOT NULL DEFAULT CURRENT_DATE  

    PRIMARY KEY(post_id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES user(user_id)
);