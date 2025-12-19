# Guide-S-FHE

Guide-S-FHE is an educational decentralized application (dApp) built on **Zama FHEVM**. Its purpose is to guide developers step-by-step in building confidential dApps using **Fully Homomorphic Encryption (FHE)** on Ethereum.

The project is designed for **beginners**: clear UI, real Sepolia deployment, and real FHE flows (encrypt → compute → decrypt).

---

## ✨ Key Features

* 🔐 Confidential smart contracts using **Zama FHEVM**
* 🧠 Step-by-step learning dApp for new FHE developers
* 🔗 Mandatory wallet connection & Sepolia network check
* 🧪 Fully tested backend (local + Sepolia)
* 🧱 Clean separation between **backend (Hardhat)** and **frontend (React)**
* 🌍 Uses official **Zama Solidity libraries & Relayer SDK only**

---

## 🧭 User Flow

1. User opens the dApp
2. User must **connect wallet**
3. User must **switch to Sepolia network**
4. Only after correct network → learning content is unlocked
5. User interacts with FHE smart contracts (encrypted progress)

This design prevents spam and ensures real on-chain interaction, aligned with the **Zama Developer Program evaluation criteria**.

---

## 🔧 Tech Stack

### Backend

* Solidity ^0.8.20
* Hardhat
* Zama FHEVM Solidity Library
* Zama Hardhat Plugin
* Sepolia Testnet

### Frontend

* React
* Ethers.js
* `@zama-fhe/relayer-sdk`
* MetaMask (or compatible wallet)

---

## 📜 Smart Contract Overview

### GuideSFHE.sol

* Stores **encrypted learning progress** per user
* Accepts **encrypted inputs** via Zama relayer
* Uses **ACL (allow / isSenderAllowed)** correctly
* Decryption is handled **off-chain** in the frontend

Mandatory imports (per FHEVM requirements):

```solidity
import {FHE, euint32, externalEuint32} from "@fhevm/solidity/lib/FHE.sol";
import {SepoliaConfig} from "@fhevm/solidity/config/ZamaConfig.sol";
```

---

## 🚀 Getting Started (Backend)

### 1. Clone repository

```bash
git clone https://github.com/your-username/Guide-S-FHE.git
cd Guide-S-FHE/backend
npm install
```

### 2. Configure environment variables

Use Hardhat built-in variable manager:

```bash
npx hardhat vars set MNEMONIC
npx hardhat vars set INFURA_API_KEY
npx hardhat vars set ETHERSCAN_API_KEY
```

Example values (for development only):

```txt
MNEMONIC = rude cement panic hip elevator tenant local winter oval word carbon bone
INFURA_API_KEY = YOUR_INFURA_KEY
ETHERSCAN_API_KEY = YOUR_ETHERSCAN_KEY
```

---

## 🧪 Run Tests

### Local FHEVM tests

```bash
npx hardhat test
```

### Sepolia integration test

```bash
npx hardhat test test/GuideSFHE.sepolia.ts --network sepolia
```

Relayer used:

```
https://relayer.testnet.zama.org
```

---

## 📦 Deploy to Sepolia

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

After deployment, copy the contract address into:

* Sepolia test file
* Frontend config

---

## 🔐 Encryption & Decryption Flow

1. Frontend creates encrypted input using Relayer SDK
2. Encrypted value + attestation sent to smart contract
3. Smart contract stores encrypted state
4. Frontend decrypts data using:

   * `userDecrypt()` (private)
   * or `publicDecrypt()` (public data)

No plaintext is ever stored on-chain.

---

## 📚 Learning Resources

This project is built strictly following official Zama documentation:

* FHEVM Solidity Quick Start
* FHEVM Hardhat Template
* FHEVM React Template
* Zama Developer Program FAQ

---

## 🧑‍💻 Target Audience

* Developers new to FHE
* Solidity developers exploring privacy
* Hackathon participants
* Zama Developer Program applicants

---

## ⚠️ Important Notes

* Only **official Zama libraries** are used
* No deprecated packages (e.g. `@fhevm-js/relayer`)
* No FHE operations inside `view` or `pure` functions
* Sepolia testnet only

---

## 🛣️ Roadmap

* [ ] Interactive tutorial UI
* [ ] More FHE examples (voting, quiz, score)
* [ ] Public vs private decryption demos
* [ ] Multilingual support (Vietnamese / English)

---

## 📄 License

MIT License

---

## 🙌 Acknowledgements

Built with ❤️ using **Zama FHEVM**.

Confidential smart contracts for everyone.
