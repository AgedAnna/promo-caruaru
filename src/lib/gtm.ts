// lib/gtm.ts
declare global {
  interface Window {
    dataLayer: Array<Record<string, any>>;
  }
}

function pushDL(event: Record<string, any>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

// 2) Page load -> ga4_page_view
export function gtmPageView() {
  pushDL({ event: "ga4_page_view" });
}

// 3) Click -> click_button com props
export function gtmClickButton(button_name: string, button_category: string) {
  pushDL({
    event: "click_button",
    button_name,
    button_category,
  });
}
