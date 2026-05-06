# Review Journal

I treated `apicurio` as a project where the smallest useful behavior should still be inspectable.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its api tooling focus without claiming live deployment or external usage.

## Cases

- `baseline`: `contract drift`, score 150, lane `ship`
- `stress`: `schema width`, score 165, lane `ship`
- `edge`: `breaking risk`, score 174, lane `ship`
- `recovery`: `consumer reach`, score 255, lane `ship`
- `stale`: `contract drift`, score 188, lane `ship`

## Note

This file is intentionally plain so the fixture remains the source of truth.
