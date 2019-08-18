// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Phoenician`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x01091F
  ],
  ranges: [
    [0x010900, 0x01091B]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Phoenician}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Phoenician}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Phnx}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Phnx}"
);
testPropertyEscapes(
  /^\p{scx=Phoenician}+$/u,
  matchSymbols,
  "\\p{scx=Phoenician}"
);
testPropertyEscapes(
  /^\p{scx=Phnx}+$/u,
  matchSymbols,
  "\\p{scx=Phnx}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0108FF],
    [0x01091C, 0x01091E],
    [0x010920, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Phoenician}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Phoenician}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Phnx}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Phnx}"
);
testPropertyEscapes(
  /^\P{scx=Phoenician}+$/u,
  nonMatchSymbols,
  "\\P{scx=Phoenician}"
);
testPropertyEscapes(
  /^\P{scx=Phnx}+$/u,
  nonMatchSymbols,
  "\\P{scx=Phnx}"
);
