select * from games join users on games.user_id = users.user_id where users.user_id = $1 order by title
