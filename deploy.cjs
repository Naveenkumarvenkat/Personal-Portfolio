const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const TOKEN = 'nfc_yrq3u96pmDPYruhZNCr3EdhGJSra9Ewt8020';
const ACCOUNT_ID = '69c4e3aaf53f3e244255d7e1';
const SITE_NAME = 'naveen-kumar-v-portfolio-' + Math.floor(Math.random() * 10000);


const createSite = () => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ name: SITE_NAME });
    const options = {
      hostname: 'api.netlify.com',
      port: 443,
      path: `/api/v1/sites?account_id=${ACCOUNT_ID}`,


      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (d) => body += d);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(body));
        } else {
          reject(`Failed to create site: ${res.statusCode} ${body}`);
        }
      });
    });

    req.on('error', (e) => reject(e));
    req.write(data);
    req.end();
  });
};

async function main() {
  try {
    console.log('Creating new site...');
    const site = await createSite();
    fs.writeFileSync('site_id.txt', site.id);
    console.log(`Site ID saved: ${site.id}`);
  } catch (err) {
    console.error(err);
  }
}



main();
