import fs from "fs";

export default function handler(req, res) {
    const items = JSON.parse(
        fs.readFileSync("./coryn_all_items.json", "utf8")
    );

    const { name, id } = req.query;

    let item;

    if (id) {
        item = items.find(
            x => String(x.id) === String(id)
        );
    } 
    else if (name) {
        item = items.find(
            x => x.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (!item) {
        return res.status(404).json({
            error: "Item not found"
        });
    }

    res.json(item);
}
