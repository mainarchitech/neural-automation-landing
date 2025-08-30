import './globals.css'

export const metadata = {
  title: 'NeuralAutomate - AI-Powered Automation Solutions',
  description: 'Revolutionize your business with cutting-edge neural network automation technologies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}