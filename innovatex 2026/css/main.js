import { initCountdown } from './countdown.js';
import { renderEvents } from './events.js';
import { initFormValidation } from './validation.js';

document.addEventListener('DOMContentLoaded', () => {
  // Set target date to November 15, 2026
  const festTargetDate = new Date('November 15, 2026 09:00:00').getTime();
  
  // Initialize Modules
  initCountdown(festTargetDate);
  renderEvents();
  initFormValidation();
});