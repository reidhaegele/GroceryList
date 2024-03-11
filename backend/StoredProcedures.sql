CREATE PROCEDURE add_user @Username varchar(255), @Password varchar(255)
AS
INSERT into users (username,password)
VALUES (Username,Password)
GO;

CREATE PROCEDURE remove_user @ID int
AS
DELETE FROM user WHERE id = ID
GO;

CREATE PROCEDURE update_username @ID int, @Username varchar(255)
AS
UPDATE user
SET username = @Username
WHERE id = ID
GO;

CREATE PROCEDURE update_password @ID int, @Password varchar(255)
AS 
UPDATE user 
SET password = @Password
WHERE id = ID
GO;

CREATE PROCEDURE add_list @UserID int, @List_name varchar(255)
AS
INSERT into lists (user_id,list_name)
VALUES (UserID,List_name)
GO;

CREATE PROCEDURE remove_list @ID int
AS
DELETE FROM lists WHERE list_id = ID
GO;

CREATE PROCEDURE update_listname @ID int, @ListName varchar(255)
AS
UPDATE lists
SET username = @ListName
WHERE list_id = ID
GO;
