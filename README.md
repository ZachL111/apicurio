# apicurio

`apicurio` is a TypeScript project in api tooling. Its focus is to diff OpenAPI fragments and classify breaking or additive changes.

## Why It Exists

The project exists to keep a narrow engineering decision visible and testable. For this repo, that decision is how contract drift and breaking risk should influence a review result.

## Apicurio Review Notes

`recovery` and `baseline` are the cases worth reading first. They show the optimistic and cautious ends of the fixture.

## Features

- `fixtures/domain_review.csv` adds cases for contract drift and schema width.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/apicurio-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `consumer reach` and `contract drift`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Architecture Notes

The core code exposes a scoring path and the added review layer uses `signal`, `slack`, `drag`, and `confidence`. The domain terms are `contract drift`, `schema width`, `breaking risk`, and `consumer reach`.

The added TypeScript path is deliberately direct, with fixtures doing most of the explaining.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Tests

The check exercises the source code and the review fixture. `recovery` is the high score at 255; `baseline` is the low score at 150.

## Limitations And Roadmap

The fixture set is small enough to audit by hand. The next useful expansion is malformed input coverage, not extra surface area.
