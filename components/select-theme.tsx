"use client";
import config from "@/tailwind.config";
import React, { useEffect } from "react";
import { themeChange } from "theme-change";

const SelectTheme = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <select className="select select-bordered w-full max-w-xs" data-choose-theme>
        {config.daisyui.themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectTheme;
