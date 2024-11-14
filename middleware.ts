import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
  ...routing,
  // Uncomment if you want to use the default language as a fallback
  defaultLocale: "pt",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt|en|fr|es)/:path*"],
};
