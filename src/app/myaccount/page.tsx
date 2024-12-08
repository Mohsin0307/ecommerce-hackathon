// app/account/page.tsx
import { Breadcrumb } from "@/components/breadcrumb";
import { Card } from "@/components/ui/card";

export default function MyAccount() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-purple-900">My Account</h1>
          <Breadcrumb
            items={[
              { label: "Home", link: "/" },
              { label: "Pages", link: "/pages" },
              { label: "My Account", link: "/account" },
            ]}
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Account Details */}
          <Card className="p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              Welcome, User!
            </h2>
            <p className="text-gray-600">
              Manage your account details, track orders, and update your
              preferences here.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
