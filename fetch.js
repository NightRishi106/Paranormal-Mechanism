import fs from 'fs';
import https from 'https';

const urls = [
  'https://paranormalmechanism.com/images/eye.mp4',
  'https://paranormalmechanism.com/images/hero.mp4',
  'https://paranormalmechanism.com/video/hero.mp4',
  'https://paranormalmechanism.com/assets/video/hero.mp4'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${url}: ${res.statusCode}`);
  });
});
