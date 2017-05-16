insert into games (img, title, genre, dateReleased, summary, user_id)
  values ($1, $2, $3, $4, $5, $6)
  returning *;
