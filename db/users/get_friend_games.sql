select * from games join users on games.user_id = users.user_id where games.user_id = $1 order by title
