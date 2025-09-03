
import "./globals.css";
import { Roboto } from 'next/font/google'
// import { Racing_Sans_One } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto'
})
// const racing_sans_one = Racing_Sans_One({
//   subsets: ['latin'],
//   variable: '--font-racing_sans_one'
// })

export const metadata = {
  title: {
    template: "%s | David Simonsen",
    default: "Landrup Dans"
  },
  description: "En App hvor du kan tilmelde dig forskellige arktivitetter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={roboto.variable}>
      <body

      >

        {children}
      </body>
    </html>
  );
}
