import items from "../coryn_all_items.json";

export default function handler(req, res) {
    const { name, id } = req.query;

    let item = null;

    if (id) {
        item = items.find(
            x => String(x.id) === String(id)
        );
    }

    if (name) {
        item = items.find(
            x => x.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (!item) {
        return res.status(404).json({
            error: "Item not found"
        });
    }

    res.status(200).json(item);
}
