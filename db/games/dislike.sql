update games set dislikes = dislikes + 1 where id = $1
returning *
