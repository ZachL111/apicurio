import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 84,
    "capacity": 104,
    "latency": 18,
    "risk": 9,
    "weight": 11,
    "score": 237,
    "decision": "accept"
  },
  {
    "name": "case_2",
    "demand": 71,
    "capacity": 75,
    "latency": 11,
    "risk": 6,
    "weight": 9,
    "score": 204,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 106,
    "capacity": 83,
    "latency": 24,
    "risk": 21,
    "weight": 13,
    "score": 186,
    "decision": "accept"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
