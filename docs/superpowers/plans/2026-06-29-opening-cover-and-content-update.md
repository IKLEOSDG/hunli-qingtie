# Opening Cover And Content Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a click-to-open invitation cover animation and replace placeholder wedding content with the confirmed real invitation details.

**Architecture:** Introduce a small `OpeningCover` component controlled by top-level app state so the opening flow stays isolated from the existing invitation page. Keep invitation data centralized in `src/invitationConfig.js`, simplify date rendering for no-countdown mode, and add a lightweight optional background-music controller without making playback required for initial render.

**Tech Stack:** Vite, React, CSS, Vitest, React Testing Library

---

### Task 1: Opening Cover Tests

**Files:**
- Modify: `src/App.test.jsx`
- Modify: `src/components/Interactions.test.jsx`

- [ ] **Step 1: Add failing tests for the opening cover**

```jsx
test("shows opening cover before the invitation content", () => {
  render(<App />);
  expect(screen.getByRole("button", { name: "开启请帖" })).toBeInTheDocument();
});

test("reveals the invitation after opening", async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole("button", { name: "开启请帖" }));
  expect(screen.getByText("婚礼地点")).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the focused test file and confirm it fails**

```text
Run: npx vitest run src/App.test.jsx --reporter verbose --no-threads
Expected: FAIL because no opening cover exists yet
```

### Task 2: Content Configuration Update

**Files:**
- Modify: `src/invitationConfig.js`
- Modify: `src/components/DateCard.jsx`
- Modify: `src/components/InfoCards.test.jsx`

- [ ] **Step 1: Add failing assertions for the confirmed invitation details**

```jsx
expect(screen.getByText("周寅")).toBeInTheDocument();
expect(screen.getByText("钟雅馨")).toBeInTheDocument();
expect(screen.getByText("汉庭宁波奉化江口酒店")).toBeInTheDocument();
expect(screen.getByText(/中午和晚上/)).toBeInTheDocument();
```

- [ ] **Step 2: Run the focused tests and confirm failure**

```text
Run: npx vitest run src/App.test.jsx src/components/InfoCards.test.jsx --reporter verbose --no-threads
Expected: FAIL because placeholder content is still rendered
```

### Task 3: Implement Opening Cover, No-Countdown Date, And BGM Hook

**Files:**
- Create: `src/components/OpeningCover.jsx`
- Create: `public/audio/bgm.mp3`
- Modify: `src/App.jsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Implement the minimal opening cover and state flow**

```text
Add an OpeningCover component with a cover card, names, and an “开启请帖” button. App should render the cover first, switch to an opening state on click, then reveal the page after a short timeout.
```

- [ ] **Step 2: Add lightweight audio control**

```text
Add an optional audio element and a small music toggle button. Attempt playback after opening, but keep the page usable if autoplay is blocked or the placeholder file is silent/missing.
```

- [ ] **Step 3: Run the focused tests again**

```text
Run: npx vitest run src/App.test.jsx src/components/InfoCards.test.jsx src/components/Interactions.test.jsx --reporter verbose --no-threads
Expected: PASS
```

### Task 4: Full Verification

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Finalize CSS for the cover animation**

```text
Add the envelope-like top flap, click feedback, reveal transition, and mobile-safe layout rules without breaking the existing page shell.
```

- [ ] **Step 2: Run full verification**

```text
Run: npm test
Expected: all tests pass

Run: npm run build
Expected: build succeeds and writes dist/
```
