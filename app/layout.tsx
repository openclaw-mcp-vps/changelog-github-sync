import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Changelog GitHub Sync — Auto-sync GitHub releases to changelog pages",
  description: "Automatically generates and updates changelog pages from GitHub releases and PR descriptions. For open source maintainers and product teams."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="58a9c41f-caad-415a-b50c-1b361f7c8426"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen antialiased">{children}</body>
    </html>
  )
}
