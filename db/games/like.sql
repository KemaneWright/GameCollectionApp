update games set likes = likes + 1 where id = $1
returning *
