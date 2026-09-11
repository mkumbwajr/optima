import {cpSync,existsSync,mkdirSync,rmSync} from 'node:fs';
import {resolve} from 'node:path';

const source=resolve('public');
const target=resolve('dist');

if(!existsSync(source))throw new Error('The public directory is missing.');
rmSync(target,{recursive:true,force:true});
mkdirSync(target,{recursive:true});
cpSync(source,target,{recursive:true});
