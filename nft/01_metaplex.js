// Imports
import 'dotenv/config';
import base58 from 'bs58';
import * as Web3 from '@solana/web3.js';
import {
    Metaplex,
    keypairIdentity,
    bundlrStorage,
} from '@metaplex-foundation/js';

// Establishing a connection to devnet
const url = Web3.clusterApiUrl('devnet');
const connection = new Web3.Connection(url);

// Providing keypair from secret key
const decoded = base58.decode(process.env.PRIVATE_KEY)
const keyPair = Web3.Keypair.fromSecretKey(decoded);

// Helper function to initialize
export const createMetaplexInstance = () => {
    const metaplex = Metaplex.make(connection)
        .use(keypairIdentity(keyPair))
        .use(bundlrStorage({
            address: 'https://devnet.bundlr.network',
            providerUrl: url,
            timeout: 60000
        }))

    return metaplex;
}