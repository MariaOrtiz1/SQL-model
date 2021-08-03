import pool from "../utils/pool";

export default class Pokebowl {
    id;
    base;
    proteinChoice;
    proteinAddition;
    toppings;
    sauce;

    constructor(row) {
        this.id = row.id;
        this.base = row.base;
        this.proteinChoice = row.protein_choice;
        this.proteinAddition = row.protein_addition;
        this.toppings = row.toppings;
        this.sauce = row.sauce;
    }

    static async insert({ base, proteinChoice, proteinAddition, toppings, sauce }) {
        const { rows } = await pool.query(
            'INSERT INTO pokebowls (base, protein_choice, protein_addition, toppings, sauce) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [base, proteinChoice, proteinAddition, toppings, sauce]
        );
        return new Pokebowl(rows[0]);
    }

    static async getById(id) {
        const { rows } = await pool.query(
            'SELECT * FROM pokebowls WHERE id=$1', [id]);

            return new Pokebowl(rows[0]);
    }
}
