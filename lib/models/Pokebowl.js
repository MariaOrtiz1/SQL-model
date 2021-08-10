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

    static async getAll() {
        const { rows } = await pool.query(
            'SELECT * from pokebowls');

        return rows.map((row) => new Pokebowl(row));
    }

    static async updateById(id, { base, proteinChoice, proteinAddition, toppings, sauce }) {
        const existingPokebowl = await Pokebowl.getById(id);
        const newBase = base ?? existingPokebowl.base;
        const newProteinChoice = proteinChoice ?? existingPokebowl.proteinChoice;
        const newProteinAddition = proteinAddition ?? existingPokebowl.proteinAddition;
        const newToppings = toppings ?? existingPokebowl.toppings;
        const newSauce = sauce ?? existingPokebowl.sauce;

        const { rows } = await pool.query(
            'UPDATE pokebowls SET base=$1, protein_choice=$2, protein_addition=$3, toppings=$4, sauce=$5 WHERE id=$6 RETURNING *',
            [newBase, newProteinChoice, newProteinAddition, newToppings, newSauce, id]
            );

        return new Pokebowl(rows[0]);
    }

    static async deleteById(id) {
        const { rows } = await pool.query(
            'DELETE FROM pokebowls WHERE id=$1 RETURNING *', [id]);

            return new Pokebowl(rows[0]);
    }

}
