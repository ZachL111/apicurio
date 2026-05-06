function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
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
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
