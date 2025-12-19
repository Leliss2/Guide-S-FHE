// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity ^0.8.24;

import {FHE} from "@fhevm/solidity/lib/FHE.sol";
import {CoprocessorConfig} from "@fhevm/solidity/lib/Impl.sol";

/**
 * @title   SepoliaConfig.
 * @notice  This library returns the FHEVM config for Sepolia testnet
 *          with the contract addresses for (1) ACL, (2) CoprocessorAddress, (3) KMSVerifier,
 *          which are deployed & maintained by Zama.
 * @dev     Sepolia chainId = 11155111
 */
library SepoliaConfigLib {
    /// @notice Returned if the chain is not Sepolia
    error NotSepoliaNetwork();

    /// @dev Sepolia protocol id
    function getSepoliaProtocolId() internal pure returns (uint256) {
        // Zama Ethereum Sepolia protocol id is '10001'
        return 10001;
    }

    /// @dev Sepolia coprocessor config
    function getSepoliaCoprocessorConfig() internal pure returns (CoprocessorConfig memory) {
        return
            CoprocessorConfig({
                ACLAddress: 0xf0Ffdc93b7E186bC2f8CB3dAA75D86d1930A433D,
                CoprocessorAddress: 0x92C920834Ec8941d2C77D188936E1f7A6f49c127,
                KMSVerifierAddress: 0xbE0E383937d564D7FF0BC3b46c51f0bF8d5C311A
            });
    }

    /// @dev Local Hardhat config for testing
    function getLocalCoprocessorConfig() internal pure returns (CoprocessorConfig memory) {
        return
            CoprocessorConfig({
                ACLAddress: 0x50157CFfD6bBFA2DECe204a89ec419c23ef5755D,
                CoprocessorAddress: 0xe3a9105a3a932253A70F126eb1E3b589C643dD24,
                KMSVerifierAddress: 0x901F8942346f7AB3a01F6D7613119Bca447Bb030
            });
    }

    function getLocalProtocolId() internal pure returns (uint256) {
        return type(uint256).max;
    }
}

/**
 * @title   SepoliaConfig.
 * @dev     This contract can be inherited by a contract wishing to use the FHEVM contracts provided by Zama
 *          on the Sepolia (testnet) network (chainId = 11155111) or local Hardhat (chainId = 31337).
 */
abstract contract SepoliaConfig {
    constructor() {
        if (block.chainid == 11155111) {
            FHE.setCoprocessor(SepoliaConfigLib.getSepoliaCoprocessorConfig());
        } else if (block.chainid == 31337) {
            FHE.setCoprocessor(SepoliaConfigLib.getLocalCoprocessorConfig());
        } else {
            revert SepoliaConfigLib.NotSepoliaNetwork();
        }
    }

    function confidentialProtocolId() public view returns (uint256) {
        if (block.chainid == 11155111) {
            return SepoliaConfigLib.getSepoliaProtocolId();
        } else if (block.chainid == 31337) {
            return SepoliaConfigLib.getLocalProtocolId();
        }
        return 0;
    }
}
