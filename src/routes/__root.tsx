import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Chery Events — Luxury Wedding & Event Planners" },
      { name: "description", content: "Chery Events crafts unforgettable luxury weddings, birthdays and celebrations with bespoke design, premium décor and flawless execution." },
      { name: "author", content: "Chery Events" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Chery Events — Luxury Wedding & Event Planners" },
      { name: "twitter:title", content: "Chery Events — Luxury Wedding & Event Planners" },
      { property: "og:description", content: "Chery Events crafts unforgettable luxury weddings, birthdays and celebrations with bespoke design, premium décor and flawless execution." },
      { name: "twitter:description", content: "Chery Events crafts unforgettable luxury weddings, birthdays and celebrations with bespoke design, premium décor and flawless execution." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/93cc6f3f-df53-48d7-be63-029fc0e420db/id-preview-f56ff068--d352dfc7-7134-4183-a684-4a594ad51d19.lovable.app-1777096017078.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/93cc6f3f-df53-48d7-be63-029fc0e420db/id-preview-f56ff068--d352dfc7-7134-4183-a684-4a594ad51d19.lovable.app-1777096017078.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
