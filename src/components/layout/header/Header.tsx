"use client";

import { Box, Button, Typography, Link } from "@mui/material";
import Image from "next/image";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Box className={styles.logoSection}>
        <Image
          src="/assets/images/offerpet-logo.png"
          alt="Petsbroz Logo"
          width={50}
          height={50}
        />
        <Typography variant="h5" className={styles.logoText}>
          PETSBROZ
        </Typography>
      </Box>

      <Box className={styles.navSection}>
        <Button variant="outlined" className={styles.buySellButton}>
          BUY/SELL
        </Button>
        <Link href="#" underline="none" className={styles.navLink}>
          ABOUT US
        </Link>
        <Link href="#" underline="none" className={styles.navLink}>
          CONTACT
        </Link>
        <Button variant="contained" className={styles.signInButton}>
          Sign in
        </Button>
        <Button variant="contained" className={styles.registerButton}>
          REGISTER
        </Button>
      </Box>
    </header>
  );
}
