// Imports
import {
    toMetaplexFile
} from '@metaplex-foundation/js';
import fs from 'fs';
import { createMetaplexInstance } from './01_metaplex.js';

// Main Driver Code
async function main () {
    const metaplex = createMetaplexInstance();
    const buffer = fs.readFileSync("./picture.jpeg");
    const file = toMetaplexFile(buffer, "picture.jpeg");

    const imageUri = await metaplex.storage().upload(file);
    console.log(imageUri);
}

// Execute
main();