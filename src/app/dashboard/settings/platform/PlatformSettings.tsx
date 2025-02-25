"use client";

import { useState } from "react";

const PlatformSettings = () => {
  const [settings, setSettings] = useState({
    storeName: "AutoStore",
    themeColor: "#ff0000",
    emailNotifications: true,
    securityMode: "Standard",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    // Narrow down the type of e.target to HTMLInputElement for checkboxes
    if (type === "checkbox" && "checked" in e.target) {
      setSettings((prevSettings) => ({
        ...prevSettings,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setSettings((prevSettings) => ({
        ...prevSettings,
        [name]: value,
      }));
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Platform Configuration</h3>

      {/* Store Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Store Name</label>
        <input
          type="text"
          name="storeName"
          value={settings.storeName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Theme Color */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Theme Color</label>
        <input
          type="color"
          name="themeColor"
          value={settings.themeColor}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Email Notifications */}
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <span>Enable Email Notifications</span>
        </label>
      </div>

      {/* Security Mode */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Security Mode</label>
        <select
          name="securityMode"
          value={settings.securityMode}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Standard">Standard</option>
          <option value="High">High</option>
          <option value="Strict">Strict</option>
        </select>
      </div>

      <button className="bg-blue-500 text-white p-2 rounded">Save Settings</button>
    </div>
  );
};

export default PlatformSettings;