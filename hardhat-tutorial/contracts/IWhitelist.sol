// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

interface IWhitelist {
    function whitelistedAddresses(address) external view returns (bool);
}
