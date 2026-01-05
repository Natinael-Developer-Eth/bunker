# Deployment & Domain Guide

This guide explains how to publish your **Bunker Digital Menu** to the internet and connect a custom domain name (e.g., `www.bunker-menu.com`).

## Step 1: Push Code to GitHub

Before deploying, ensure your latest code is on GitHub.

1.  Open your terminal/command prompt.
2.  Run the following commands:
    ```bash
    git add .
    git commit -m "Finalizing menu with Arabic support"
    git push
    ```

## ❓ Do I need a Database?

**NO**, not for this version.
*   Currently, your menu data (coffee list, prices, images) is stored directly in the code (`src/data/menuData.ts`).
*   This makes your website **Faster**, **Cheaper** (Free Hosting), and **More Secure**.
*   You only need "Web Hosting", not "Database Hosting".

## Step 2: Deploy to Vercel (Recommended Hosting)

Since you already have a **Domain**, you need a "Host" (a place to store your website files online). Vercel is the best host for this project because:
1.  It handles React/Vite automatically.
2.  It is **Free** for personal/hobby use.
3.  It makes connecting your custom Domain very easy.

1.  **Create an Account**: Go to [vercel.com](https://vercel.com/signup) and sign up.
2.  **Import Project**:
    *   On your Vercel dashboard, click **"Add New..."** -> **"Project"**.
    *   Find your `bunker-digital-menu` repository in the list and click **"Import"**.
3.  **Deploy**:
    *   Leave the default settings (Framework Preset: Vite).
    *   Click **"Deploy"**.
    *   Wait about a minute. Your site will be live at a URL like `bunker-digital-menu.vercel.app`.

## Step 3: Connect Your Domain

Once deployed, you can add your custom domain.

### Option A: You already own a domain (GoDaddy, Namecheap, etc.)

1.  Go to your project dashboard on Vercel.
2.  Click **Settings** (top tab) -> **Domains** (side menu).
3.  Enter your domain name (e.g., `bunkercoffee.com`) in the input box and click **Add**.
4.  Vercel will show you **DNS Records** (usually an **A Record** or **CNAME**).
5.  **Log in to your Domain Registrar** (where you bought the domain):
    *   Find "DNS Settings" or "Manage DNS".
    *   Add the records shown by Vercel.
        *   *Type*: `A`
        *   *Name*: `@`
        *   *Value*: `76.76.21.21` (Example, check Vercel for the exact IP)
    *   Add the www record:
        *   *Type*: `CNAME`
        *   *Name*: `www`
        *   *Value*: `cname.vercel-dns.com`
6.  Wait a few minutes (up to 24h) for propagation. Vercel will show a green checkmark when connected.

### Option B: You want to buy a domain

1.  You can buy a domain directly through Vercel in the **Domains** tab.
2.  Type the name you want -> Click **Buy**.
3.  It will be automatically configured for your project.

## Step 4: Update SEO (Optional)

Once your domain is connected, remember to update the URL in your `package.json` or any SEO meta tags if you hardcoded the old URL.
