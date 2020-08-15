const CREATE_TABLE_SEARCH_HISTORY = `
    CREATE TABLE IF NOT EXISTS search_history(
        date TEXT,
        time TEXT,
        value TEXT
    );
`;

const CREATE_TABLE_FAVORITE_IMAGES = `
    CREATE TABLE IF NOT EXISTS favorite_images(
        id INTEGER,
        description TEXT,
        url TEXT
    );
`;

const SELECT_ALL_FROM_SEARCH_HISTORY = `
    SELECT * FROM search_history ORDER BY date DESC, time DESC;
`;

const INSERT_INTO_SEARCH_HISTORY = `
    INSERT INTO search_history(date, time, value) 
    VALUES (?, ?, ?);
`;

const SELECT_ALL_FROM_FAVORITE_IMAGES = `
    SELECT * FROM favorite_images;
`;

const INSERT_INTO_FAVORITE_IMAGES = `
    INSERT INTO favorite_images(id, description, url) 
    VALUES (?, ?, ?);
`;

module.exports = {
  CREATE_TABLE_SEARCH_HISTORY,
  CREATE_TABLE_FAVORITE_IMAGES,
  SELECT_ALL_FROM_SEARCH_HISTORY,
  INSERT_INTO_SEARCH_HISTORY,
  SELECT_ALL_FROM_FAVORITE_IMAGES,
  INSERT_INTO_FAVORITE_IMAGES,
};
