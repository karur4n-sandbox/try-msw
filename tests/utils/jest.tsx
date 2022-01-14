import { AppProvider } from "@shopify/polaris";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import jaTranslations from "@shopify/polaris/locales/ja.json";
import React from "react";

const Providers: React.VFC<{ children: React.ReactNode }> = (props) => {
  return <AppProvider i18n={jaTranslations}>{props.children}</AppProvider>;
};

export function renderWithProviders(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
): RenderResult {
  return render(ui, { wrapper: Providers, ...options });
}
