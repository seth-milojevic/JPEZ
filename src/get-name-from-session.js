export async function getNameFromSession(req, res, next, config) { 
    const aquery = promisify(config.CONN.query).bind(config.CONN);
    await aquery(`USE ${config.DB}`);

    let results = await aquery(`SELECT Name FROM Users WHERE Token=?;`, [Buffer.from(req.cookies["auth-token"], "hex")]);
    if (results.length === 0) {
        return undefined;
    } else {
        return results[0].Name;
    }
}