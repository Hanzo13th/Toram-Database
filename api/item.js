import items from "../coryn_all_items.json";

export default function handler(req, res) {

    const name = req.query.name;

    if (!name) {
        return res.json({
            error: "No item name provided"
        });
    }

    const result = items.find(
        item => item.name.toLowerCase() === name.toLowerCase()
    );

    if (!result) {
        return res.json({
            error: "Item not found"
        });
    }

    res.json(result);
}
