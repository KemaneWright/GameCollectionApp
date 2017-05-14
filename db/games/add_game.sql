insert into games (img, title, genre, dateReleased, summary)
  values ($1, $2, $3, $4, $5)
  returning *;
