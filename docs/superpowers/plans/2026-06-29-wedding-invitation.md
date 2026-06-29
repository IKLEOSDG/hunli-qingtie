# Wedding Invitation H5 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a mobile-first wedding invitation H5 with configurable content, lightweight animation, and a reusable cat-photo-rain interaction.

**Architecture:** Use a single-page React app composed from focused presentation components plus one interactive rain layer. Keep all invitation content in `src/invitationConfig.js`, keep countdown/copy/rain logic inside small components, and use CSS-only styling/animation for visual polish.

**Tech Stack:** Vite, React, CSS, Vitest, React Testing Library

---

### Task 1: Project Scaffold And Test Harness

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/test/setup.js`

- [ ] **Step 1: Write the failing test command expectation**

```text
Run: npm test
Expected: command fails because package.json and test setup do not exist yet
```

- [ ] **Step 2: Verify the failure**

```text
Run: npm test
Expected: npm error about missing package.json
```

- [ ] **Step 3: Write the minimal scaffold**

```js
// package.json
{
  "name": "wedding-invitation",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest run"
  }
}
```

- [ ] **Step 4: Run tests again**

```text
Run: npm test
Expected: Vitest starts and fails because no tests exist yet
```

### Task 2: Config And App Smoke Test

**Files:**
- Create: `src/invitationConfig.js`
- Create: `src/App.jsx`
- Create: `src/App.test.jsx`

- [ ] **Step 1: Write the failing smoke test**

```jsx
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders invitation title and couple names from config", () => {
  render(<App />);
  expect(screen.getByText("我们要结婚啦")).toBeInTheDocument();
  expect(screen.getByText(/新郎姓名/)).toBeInTheDocument();
  expect(screen.getByText(/新娘姓名/)).toBeInTheDocument();
});
```

- [ ] **Step 2: Verify the failure**

```text
Run: npm test -- App.test.jsx
Expected: FAIL because App/config files do not exist
```

- [ ] **Step 3: Write minimal implementation**

```jsx
export default function App() {
  return <main>...</main>;
}
```

- [ ] **Step 4: Run the test to green**

```text
Run: npm test -- App.test.jsx
Expected: PASS
```

### Task 3: Date, Location, And Timeline Behaviors

**Files:**
- Create: `src/components/DateCard.jsx`
- Create: `src/components/LocationCard.jsx`
- Create: `src/components/Timeline.jsx`
- Create: `src/components/InfoCards.test.jsx`

- [ ] **Step 1: Write failing behavior tests**

```jsx
test("shows a live countdown before the wedding", () => {
  vi.setSystemTime(new Date("2026-09-30T11:18:00"));
  render(<DateCard invitation={invitation} />);
  expect(screen.getByText(/距离婚礼还有/)).toBeInTheDocument();
});

test("shows started message after the wedding time", () => {
  vi.setSystemTime(new Date("2026-10-02T11:18:00"));
  render(<DateCard invitation={invitation} />);
  expect(screen.getByText("幸福已开启")).toBeInTheDocument();
});
```

- [ ] **Step 2: Verify the failure**

```text
Run: npm test -- InfoCards.test.jsx
Expected: FAIL because DateCard/LocationCard/Timeline do not exist
```

- [ ] **Step 3: Implement minimal cards**

```jsx
// DateCard computes countdown with setInterval and fallback text
// LocationCard copies address and conditionally renders map button
// Timeline maps schedule items into a vertical list
```

- [ ] **Step 4: Run the focused tests**

```text
Run: npm test -- InfoCards.test.jsx
Expected: PASS
```

### Task 4: Cat Blessing And Rain Interactions

**Files:**
- Create: `src/components/EmojiRain.jsx`
- Create: `src/components/CatBlessing.jsx`
- Create: `src/components/Interactions.test.jsx`

- [ ] **Step 1: Write failing interaction tests**

```jsx
test("triggers one rain burst on initial load", async () => {
  render(<App />);
  expect(await screen.findAllByTestId("rain-item")).not.toHaveLength(0);
});

test("triggers another burst when blessing button is clicked", async () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /猫猫祝福雨/ });
  await userEvent.click(button);
  expect(await screen.findAllByTestId("rain-item")).not.toHaveLength(0);
});
```

- [ ] **Step 2: Verify the failure**

```text
Run: npm test -- Interactions.test.jsx
Expected: FAIL because rain layer and handlers do not exist
```

- [ ] **Step 3: Implement minimal interaction layer**

```jsx
// EmojiRain accepts a trigger key and spawns 25-40 random items
// CatBlessing renders main image, speech bubble, and click handler
// App owns the trigger state and passes callbacks to button and cat area
```

- [ ] **Step 4: Run the focused tests**

```text
Run: npm test -- Interactions.test.jsx
Expected: PASS
```

### Task 5: Styling, Assets, And Final Verification

**Files:**
- Create: `src/components/HeaderCard.jsx`
- Create: `src/components/CoupleCard.jsx`
- Create: `src/styles.css`
- Create: `public/images/cats/cat-main.png`
- Create: `public/images/cats/cat-1.png`
- Create: `public/images/cats/cat-2.png`
- Create: `public/images/cats/cat-3.png`
- Create: `public/images/cats/paw.png`
- Create: `public/images/cats/heart.png`

- [ ] **Step 1: Write a failing structure/style assertion**

```jsx
test("renders all major invitation sections", () => {
  render(<App />);
  expect(screen.getByText("Wedding Invitation")).toBeInTheDocument();
  expect(screen.getByText(/婚礼地点/)).toBeInTheDocument();
  expect(screen.getByText(/婚礼流程/)).toBeInTheDocument();
});
```

- [ ] **Step 2: Verify the failure**

```text
Run: npm test -- App.test.jsx
Expected: FAIL until all sections are rendered
```

- [ ] **Step 3: Implement final section layout and CSS**

```text
Add cream/gold palette variables, rounded cards, floating accents, responsive 430px shell, button states, and rain overlay styles with pointer-events: none.
```

- [ ] **Step 4: Run full verification**

```text
Run: npm test
Expected: all tests pass

Run: npm run build
Expected: Vite build succeeds and writes dist/
```
