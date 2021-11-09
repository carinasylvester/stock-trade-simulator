import React, { createContext, useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPreferences= window.localStorage.getItem("color-theme");
    if (typeof storedPreferences=== "string") {
      return storedPreferences;
    } const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};