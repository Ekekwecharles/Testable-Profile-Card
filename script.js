"use strict";

const timeElement = document.querySelector('[data-testid="test-user-time"]');

function renderCurrentEpochTime() {
  if (!timeElement) {
    return;
  }
  timeElement.textContent = String(Date.now());
}

renderCurrentEpochTime();
window.setInterval(renderCurrentEpochTime, 1000);
