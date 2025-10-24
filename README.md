# Blockchain-Based Certificate Verification System

## Overview
A decentralized application (DApp) that prevents certificate forgery and ensures authenticity for educational institutions by storing immutable certificate hashes on the blockchain. This project leverages Ethereum and IPFS to build a transparent, secure, and scalable verification ecosystem.

## Key Features
- React-based responsive frontend for institutions and students.
- IPFS integration to generate distributed, tamper-proof certificate hashes.
- Solidity smart contracts deployed on Ethereum to manage certificate records.
- End-to-end integration through Web3.js ensuring blockchain interaction from the React client.
- Streamlined certificate validation reducing time and human intervention.

## Tech Stack
- **Frontend:** React.js, HTML, CSS
- **Blockchain:** Ethereum
- **Smart Contract Language:** Solidity
- **Storage:** IPFS
- **Libraries/Tools:** Web3.js, Node.js

## Architecture
1. Certificate is uploaded via frontend.
2. Certificate is converted to a hash and stored on IPFS.
3. The IPFS hash is recorded on the Ethereum blockchain via a Solidity contract.
4. Validators can verify authenticity by cross-referencing the stored hash.

## Setup and Installation
1. Clone the repository
git clone https://github.com/Krupa-Patil/CERTIFICATION-VALIDATION-SYSTEM.git
2. Install dependencies
npm install
3. Run the frontend
npm start
4. Deploy the smart contract using Remix IDE or Truffle (ensure Metamask and local Ganache setup).

## Usage
- Upload and verify digital certificates.
- Validate authenticity via Ethereum transaction logs and stored IPFS hashes.

## Future Enhancements
- Implement role-based access control for institutions.
- Integrate multi-chain support for scalability.
- Enable QR code verification for user-friendly validation.
