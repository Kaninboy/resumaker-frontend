import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Resumaker",
  description: "Resumaker is a resume maker app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-basebg px-4">
        <Providers>
          <nav className="sticky top-0 left-0 right-0 bg-basebg z-50">
            <Flex minWidth="max-content" alignItems="center" py="16px">
              <Flex alignItems="center" gap="4px">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.5273 0.697519C9.26077 0.506758 10.0148 0.928691 10.2116 1.63993L11.2799 5.5026C11.4767 6.21384 11.0415 6.94506 10.3081 7.13582C9.5746 7.32658 8.82053 6.90465 8.62381 6.19341L7.55543 2.33074C7.35871 1.6195 7.79383 0.88828 8.5273 0.697519ZM19.1535 3.45719C19.6905 3.97789 19.6905 4.82211 19.1535 5.34281L16.2358 8.17215C15.6988 8.69285 14.8282 8.69285 14.2912 8.17215C13.7543 7.65145 13.7543 6.80723 14.2912 6.28653L17.209 3.45719C17.7459 2.9365 18.6165 2.9365 19.1535 3.45719ZM0.749153 8.23871C0.945812 7.52745 1.69984 7.10546 2.43333 7.29616L6.41808 8.33216C7.15156 8.52286 7.58675 9.25404 7.39009 9.9653C7.19343 10.6766 6.4394 11.0986 5.70591 10.9079L1.72116 9.87185C0.987678 9.68115 0.552494 8.94997 0.749153 8.23871ZM10.4027 10.0572C10.7805 9.69089 11.3428 9.56991 11.8449 9.74695L26.9699 15.0803C27.5058 15.2692 27.8658 15.7593 27.8748 16.3122C27.8839 16.865 27.5401 17.366 27.0107 17.5713L22.0718 19.487L27.4723 24.7239C28.0092 25.2446 28.0092 26.0888 27.4723 26.6095C26.9353 27.1302 26.0647 27.1302 25.5277 26.6095L20.1272 21.3726L18.1517 26.1619C17.9399 26.6752 17.4233 27.0086 16.8532 26.9998C16.283 26.9911 15.7776 26.642 15.5828 26.1223L10.0828 11.4557C9.90021 10.9688 10.025 10.4235 10.4027 10.0572ZM18.6527 18.0572C18.5091 18.1965 18.4038 18.359 18.337 18.5322L16.9362 21.9282L13.6741 13.2295L22.6447 16.3927L19.1426 17.7511C18.9639 17.8158 18.7964 17.9179 18.6527 18.0572ZM8.45693 13.8274C8.99416 14.3479 8.99457 15.1921 8.45785 15.713L5.54285 18.5424C5.00613 19.0633 4.13553 19.0637 3.59831 18.5433C3.06108 18.0228 3.06067 17.1786 3.59739 16.6576L6.51239 13.8283C7.04911 13.3074 7.91971 13.307 8.45693 13.8274Z"
                    fill="#4A8CF8"
                  />
                </svg>
                <Text fontSize="28px" color="primary.700" as="b">
                  RESUMAKER
                </Text>
                <Box pb="3px">
                  <Badge variant="outline" colorScheme="primary">
                    BETA
                  </Badge>
                </Box>
              </Flex>
              <Spacer />
              <ButtonGroup gap="22px">
                <Button variant="link" colorScheme="primary">
                  Login
                </Button>
                <Button colorScheme="primary">Sign Up</Button>
              </ButtonGroup>
            </Flex>
          </nav>
          {children}
        </Providers>
      </body>
      <footer className="p-2"></footer>
    </html>
  );
}
