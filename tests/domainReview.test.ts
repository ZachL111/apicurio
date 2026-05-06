function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 56, slack: 48, drag: 29, confidence: 77 };
equal(domainReviewScore(item), 150);
equal(domainReviewLane(item), "ship");
