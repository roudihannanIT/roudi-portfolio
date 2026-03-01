import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale ?? "en";
  const messagesModule = await import(`../messages/${resolvedLocale}.json`);
  return {
    locale: resolvedLocale,
    messages: messagesModule.default
  };
});