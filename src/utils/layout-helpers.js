// src/utils/layout-helpers.js

export function saveLayout(profile, layout) {
  localStorage.setItem(`dashboard_layout_${profile}`, JSON.stringify(layout));
}

export function loadLayout(profile) {
  const data = localStorage.getItem(`dashboard_layout_${profile}`);
  return data ? JSON.parse(data) : null;
}

export function resetLayout(profile, defaultLayout) {
  saveLayout(profile, defaultLayout);
  return defaultLayout;
}
