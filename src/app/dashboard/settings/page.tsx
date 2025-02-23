"use client";

import Link from "next/link";

const SettingsPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Payment Settings */}
        <Link href="/dashboard/settings/payments" className="p-5 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">💳 Payment Settings</h3>
          <p>Manage available payment methods and transactions.</p>
        </Link>

        {/* Shipping Settings */}
        <Link href="/dashboard/settings/shipping" className="p-5 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">🚚 Shipping Settings</h3>
          <p>Configure shipping rates and delivery options.</p>
        </Link>

        {/* Admin Roles */}
        <Link href="/dashboard/settings/roles" className="p-5 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">🔑 Admin Roles</h3>
          <p>Manage admin user roles and permissions.</p>
        </Link>

        {/* Platform Settings */}
        <Link href="/dashboard/settings/platform" className="p-5 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">⚙️ Platform Configuration</h3>
          <p>Customize platform branding, email settings, and security.</p>
        </Link>
      </div>
    </div>
  );
};

export default SettingsPage;
