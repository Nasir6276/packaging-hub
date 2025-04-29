import type { Metadata } from 'next'
import '../../styles/global.scss'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import localFont from 'next/font/local'
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  mantineHtmlProps,
  MantineProvider,
  MantineThemeOverride,
} from '@mantine/core'
import { colors } from '@/constant/themes'
import Header from '@/component/Header'
import Footer from '@/component/Footer'

const interTight = localFont({
  src: [
    {
      path: '../../assets/fonts/InterTight-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/InterTight-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/InterTight-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/InterTight-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/InterTight-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/InterTight-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
})

const theme: MantineThemeOverride = {
  fontFamily: interTight.className,
  colors: {
    primary: [...colors.primary],
    lightPurple: [...colors.lightPurple],
    lightShade: [...colors.lightShade],
    darkShade: [...colors.darkShade],
  },
  primaryColor: 'primary',
  primaryShade: 0,
  defaultRadius: 'xs',
}

export const metadata: Metadata = {
  title: 'Packaging Hub',
  description: 'Everything Na Packaging',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <body className={interTight.className}>
        <MantineProvider theme={theme}>
          <AppShell
            layout="default"
            header={{ height: 80 }}
            // padding="xl"
            styles={{
              header: {
                backgroundColor: 'var(--ph-dark-purple)',
                height: '80px',
              },
              main: { paddingBottom: 0 },
            }}
          >
            <AppShellHeader withBorder={false} bg={'var(--ph-dark-purple)'} px={0}>
              <Header />
            </AppShellHeader>

            <AppShellMain px={0}>
              {children}
              <Footer />
            </AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}
