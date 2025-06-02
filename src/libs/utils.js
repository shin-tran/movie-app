export const currencyFormatter = (number, currency = "USD") => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  });
  return formatter.format(number);
};

export const saveTabState = (tabSectionId, activeTabId) => {
  sessionStorage.setItem(`tab-state-${tabSectionId}`, activeTabId);
};

export const getTabState = (tabSectionId, defaultTabId) => {
  const savedTabId = sessionStorage.getItem(`tab-state-${tabSectionId}`);
  return savedTabId || defaultTabId;
};
