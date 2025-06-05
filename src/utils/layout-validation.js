// Validation based on search results recommendations
export const validateLayoutItem = (item) => {
  // Ensure positive dimensions (search result [3])
  const w = Math.max(1, Number(item.w) || 4);
  const h = Math.max(1, Number(item.h) || 4);
  
  // Calculate safe min/max values to prevent collisions (search result [7])
  const safeMinW = Math.max(1, Math.min(w, Number(item.minW) || 1));
  const safeMaxW = Math.max(w, Number(item.maxW) || 12);
  const safeMinH = Math.max(1, Math.min(h, Number(item.minH) || 1));
  const safeMaxH = Math.max(h, Number(item.maxH) || 12);
  
  return {
    i: item.i,
    x: Math.max(0, Number(item.x) || 0),
    y: Math.max(0, Number(item.y) || 0),
    w: w,
    h: h,
    minW: safeMinW,
    maxW: safeMaxW,
    minH: safeMinH,
    maxH: safeMaxH
  };
};

export const validateLayouts = (layouts) => {
  if (!layouts || typeof layouts !== 'object') {
    return { lg: [], md: [], sm: [], xs: [] };
  }
  
  const validated = {};
  Object.keys(layouts).forEach(breakpoint => {
    if (Array.isArray(layouts[breakpoint])) {
      validated[breakpoint] = layouts[breakpoint].map(validateLayoutItem);
    } else {
      validated[breakpoint] = [];
    }
  });
  
  return validated;
};

