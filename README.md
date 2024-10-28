tbl_user
tbl_categories
tbl_songs
tbl_reviews
tbl_details

tbl_user:-
id
name
email
password
phone
age
gender
address
image
role(user/admin)
createdAt
updatedAt

categories:-
id
name
image
createdAt
updatedAt

songs:-
id
title
cover
description
release year
file
categoryid(foreign key)
createdAt
updatedAt

reviews:-
id
message
rating
tbl_user(foreign key)
createdAt
updatedAt

details:-
id
about
image
createdAt
updatedAt






