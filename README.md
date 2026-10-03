# LifeMap frontend

Eight-screen dependency-free customer demo with a unified deep teal, warm ivory and blue visual identity for 0x11 / codeLinc 11. The supplied workspace had no project or framework; the original empty `Frontend` file was preserved. No backend, AI or financial calculation code was added or modified.

## Run

From `/Users/isayaamosmgasa/Frontend`:

```sh
npm run dev
```

Open http://127.0.0.1:5173. Requires Python 3 and npm; no npm install needed. Alternatively run `python3 -m http.server 5173 --bind 127.0.0.1`. Inter from Google Fonts is optional; local sans-serif fonts provide a fallback.

## Click through

Get started → Start my plan → send four replies (or Use example) → Review my information → edit any fields → Calculate my plan → See full breakdown → Try a life scenario → choose a milestone. Use the sidebar for Home, My Plan, Future Simulator, Coverage Breakdown, and Ask LifeMap. My Plan is selected during intake and review. Mobile navigation opens with the menu button.

Hash routes: `#landing`, `#home`, `#intake`, `#review`, `#results`, `#breakdown`, `#simulator`, `#learn`. Landing anchor: `#features`. How It Works, Watch Demo, FAQ, Settings and the Amos dropdown use lightweight informational dialogs. Direct results/breakdown links show a useful empty state until a result is requested.

## Files and ownership

All implementation files are new; no existing code was modified.

- `index.html`: entry document.
- `package.json`: local preview and contract-test commands; no framework dependencies.
- `src/app.js`: navigation, page presentation and frontend interaction state.
- `src/styles.css`: reference blue/white palette, desktop/tablet/mobile styling, focus and reduced-motion support.
- `src/assets/protection-illustration.svg`: original shield/home/heart illustration with family and policy symbols.
- `src/theme.css`: shared teal/ivory/blue design for landing and every application screen.
- `src/two-tone.css`: saved two-color experiment, currently inactive; the single-color teal version is selected.
- `src/assets/teal-landscape.svg`: retained prior landscape, currently unused.
- `src/landing.css`: scoped deep teal, warm stone and ivory styling inspired by the latest user reference.
- `src/assets/family-placeholder.svg`: retained earlier illustration, currently unused.
- `src/data/mockConversation.js`: isolated guided demo questions and responses.
- `src/types/contracts.js`: documented contract names and frontend input validation.
- `src/data/mockProfile.js`: exact synthetic profile from the supplied contract.
- `src/data/mockResult.js`: isolated illustrative LifeNeedsResult; no financial formula.
- `src/data/mockScenarios.js`: fixed timelines and before/after scenario fixtures.
- `src/services/planService.js`: AI, backend and explanation adapters.
- `tests/contracts.test.js`: meaningful adapter boundary and validation tests.
- `tests/browser-check.cjs`: optional browser journey and mobile QA helper.
- `artifacts/`: browser screenshots from completed QA.

## Integration boundaries

**AI owner:** Replace `sendIntakeMessage` in `src/services/planService.js`: customer messages → AI → LifeNeedsProfile updates and assistant reply. Currently arbitrary text selects the question's synthetic fixture value and is explicitly labeled as a demo; there is no natural-language extraction. The intake covers four initial questions; the review presents all 14 fields. Live AI should drive required-field questions dynamically through this adapter.

**Backend owner:** Replace `calculatePlan` in the same service: POST complete LifeNeedsProfile → validated LifeNeedsResult. Keep errors surfaced to the review UI. Replace the fixture provider without changing the result presentation. No endpoint URL was supplied.

**AI explanation:** Replace `explainPlan`: verified LifeNeedsResult → plain-language explanation. Numbers stay owned by the backend.

**Shared contract:** Exact top-level field names and synthetic profile are preserved. The supplied contract does not specify breakdown item types. `{label, amount}` is a frontend fixture convention only; agree on the real item schema and map it at the service boundary. Numeric types/rates reflect the synthetic fixture; rates are fractional in data and displayed as percentages in review.

## Demo limits

No authentication, persistence, AI extraction, live calculations or scenario formulas. Login enters the demo. Profile edits are functional but intentionally do not alter the fixed result or scenario values; this is explained visibly. Reload resets the demo. Education is static. Artificial waits are short and show understanding/calculation/explanation states. Adapter errors and invalid fields are surfaced. The public landing uses the selected single-color deep teal version with blue accents. The public landing and application share the requested palette: floating warm-ivory navigation, a centered serif headline, a protection illustration, deep teal shading, blue CTAs and three quiet benefits. Welcome has two cards and an Ask input; review uses editable rows with advanced fields in an expandable section. The simulator has one blue line and tooltips available on hover, focus, or selection. Before integration, normalize and validate real responses, agree on breakdown types, and connect the live AI's question protocol with the AI owner.

## Verification

`npm test`: four checks passed (profile validation, fixed results independent of edits, natural text not extracted, invalid profile rejection).

Chrome QA passed the complete customer journey, main buttons and dialogs, profile row editing and invalid-age validation, all five scenario comparisons, chart hover/selection and keyboard interaction, mobile menu, and educational/question interactions. All eight routes were checked at 1440×1000, 768×1024, and 390×844 with no horizontal overflow. No console errors or uncaught page exceptions. Screenshots of all eight desktop/mobile screens are in `artifacts/`.

The optional browser helper requires Playwright and Chrome. Set `PLAYWRIGHT_MODULE_PATH` to an installed Playwright package or install Playwright in a separate QA environment, then run `node tests/browser-check.cjs` while the preview server runs.
