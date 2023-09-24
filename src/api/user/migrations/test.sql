
CREATE TABLE users (
    user_id         UUID DEFAULT gen_random_uuid() NOT NULL,
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
    post_id         UUID DEFAULT gen_random_uuid() NOT NULL,
    user_id         INT,
    content         TEXT NOT NULL,
    created_date    DATE NOT NULL DEFAULT CURRENT_DATE,
    update_date     DATE DEFAULT NULL,
    likes           INT,  
    commentaries    TEXT[] DEFAULT ARRAY[]::TEXT[] , 
    PRIMARY KEY(post_id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES users (user_id)    
);