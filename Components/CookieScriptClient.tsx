"use client";
import Script from "next/script";
import React from "react";
import type {JSX} from "react"
export default function CookieScriptClient(): JSX.Element {
  return (
    <Script
      id="cookieyes"
      src="https://cdn-cookieyes.com/client_data/d1a6e1bca70e208ef6368a084758dfe7/script.js"
      strategy="afterInteractive"
      onLoad={() => console.log("CookieYes script loaded")}
      onError={(e) => console.error("CookieYes failed to load", e)}
    />
  );
}
