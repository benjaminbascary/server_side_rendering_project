import tours from "./tours";

const deleteTour = (req, res) => {
    const index = tours.findIndex(tour => tour.id === parseInt(req.params.id));
    if (index < 0) {
        return res.json({error : 'No such tour exists'});
    }
    tours.slice(index, 1);
    res.json({ success: true });
}
