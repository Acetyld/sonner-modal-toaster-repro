# Repro: toast() hidden behind a Modal on Android

Not run yet, written from the issue.

1. `npm install`, run on Android.
2. Tap Open modal, then Show toast in modal.
3. Expected: the toast is visible above the Modal. Reported: the toast renders behind the Modal (root Toaster only).
