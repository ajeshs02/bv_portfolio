import './globals.css'

export const metadata = {
  title: 'Bhavya B | Portfolio',
  description: `Bhavya B Anil's portfolio in Next.Js-14`,
  other: {
    'theme-color': '#2c1250',
    'color-scheme': 'dark only',
    'og:url': 'https://bhavya-portfolio-iota.vercel.app/',
    // 'og:image':
    //   'https://cdn.sanity.io/images/stq2zs7v/production/f5f70d04a0a726c422bc61dc6422f6638846364c-1801x1080.webp',
    'og:type': 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
