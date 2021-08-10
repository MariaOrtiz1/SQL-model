DROP TABLE IF EXISTS pokebowls;
CREATE TABLE pokebowls (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    base TEXT NOT NULL,
    protein_choice TEXT NOT NULL,
    protein_addition TEXT NOT NULL,
    toppings TEXT,
    sauce TEXT
);