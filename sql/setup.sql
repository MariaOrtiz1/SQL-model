DROP TABLE IF EXISTS pokebowl;
CREATE TABLE pokebowl (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    base TEXT NOT NULL,
    protein_choice TEXT NOT NULL,
    protein_addition TEXT,
    toppings TEXT,
    sauce TEXT
)