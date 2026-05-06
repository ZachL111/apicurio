import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 56, slack: 48, drag: 29, confidence: 77 };
assert.equal(domainReviewScore(item), 150);
assert.equal(domainReviewLane(item), "ship");
