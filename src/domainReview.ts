export interface DomainReview {
  signal: number;
  slack: number;
  drag: number;
  confidence: number;
}

export function domainReviewScore(item: DomainReview): number {
  return item.signal * 2 + item.slack + item.confidence - item.drag * 3;
}

export function domainReviewLane(item: DomainReview): "ship" | "watch" | "hold" {
  const score = domainReviewScore(item);
  if (score >= 140) return "ship";
  if (score >= 105) return "watch";
  return "hold";
}
