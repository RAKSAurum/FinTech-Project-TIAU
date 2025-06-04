// src/components/AI/PersonalizationEngine.js

/**
 * PersonalizationEngine
 * Selects a dashboard layout template based on user profile or behavior.
 * Extend this with AI/ML or LLM integration as your backend grows.
 */

import { traderProfiles } from "../../config/trader-profiles";

/**
 * Returns the layout for the given user profile.
 * @param {Object} userProfile - { type: "dayTrader" | "investor" | ... }
 * @returns {Array} Layout config for react-grid-layout
 */
export function getPersonalizedLayout(userProfile) {
  // In the future, analyze user behavior here or call an LLM backend.
  if (!userProfile || !userProfile.type) {
    // Default to 'dayTrader' if no profile is given
    return traderProfiles.dayTrader;
  }

  // Example: If user is an investor, return investor layout
  if (userProfile.type === "investor") {
    return traderProfiles.investor;
  }

  // Add more profiles as you expand
  // e.g., if (userProfile.type === "swingTrader") { ... }

  // Fallback
  return traderProfiles.dayTrader;
}
