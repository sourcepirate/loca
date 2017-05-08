import path from 'path';
import fs from 'fs';

const configdir = process.env.LOCA_CONFIG_DIR || path.join(__dirname, '..', 'config');

const website = JSON.parse(fs.readFileSync(path.join(configdir, 'website.json'), 'utf8'));
const demomode = false; //!(process.env.LOCA_DEMOMODE !== undefined && process.env.LOCA_DEMOMODE.toLowerCase() === 'false');
export default Object.assign(website, {
    businesslogic: 'FR',
    productive: true,
    subscription: true,
    demomode,
    database: demomode ? 'demodb' : process.env.LOCA_DBNAME || 'demodb'
});
