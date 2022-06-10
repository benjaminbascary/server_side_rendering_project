export const headerRequest = (req, res) => {
    res.type('text/plain');
    const headers = Object.entries(req.headers).map(([key, value]) => {     
        return `${key} : ${value}`;
    })
    res.send(headers.join('\n'));
}