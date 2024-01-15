import './globals.css'

export const metadata = {
  title: 'Bhavya B | Portfolio',
  description: `Bhavya B Anil's portfolio in Next.Js-14`,
  other: {
    'theme-color': '#2c1250',
    'color-scheme': 'dark only',
    'og:url': 'https://bhavya-portfolio-iota.vercel.app/',
    'og:image':
      'https://drive.google.com/file/d/1lJl5tl7HbZzNj7MA6S5NK1cplIv4l7e2/view?usp=sharing',
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
