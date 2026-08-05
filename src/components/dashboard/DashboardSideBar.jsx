"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import {
  ChartColumn,
  Person,
  Box,
  Heart,
  Briefcase,
  ShoppingCart,
  Plus,
  Cubes3,
  ListCheck,
  SquareListUl,
  Persons,
  ChartLineArrowUp,
} from "@gravity-ui/icons";

const DashboardSideBar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const role = user?.role || "buyer";
//   console.log(role);
  // Role-based menu configuration
  const sidebarLinks = {
    buyer: [
      { name: "Overview", href: "/dashboard/buyer", icon: ChartColumn },
      { name: "My Profile", href: "/dashboard/buyer/profile", icon: Person },
      { name: "My Orders", href: "/dashboard/buyer/orders", icon: Box },
      { name: "Wishlist", href: "/dashboard/buyer/wishlist", icon: Heart },
      { name: "Cart", href: "/dashboard/buyer/cart", icon: Briefcase },
      { name: "Support", href: "/dashboard/buyer/support", icon: ShoppingCart },
    ],

    seller: [
      { name: "Overview", href: "/dashboard/seller", icon: ChartColumn },
      { name: "My Profile", href: "/dashboard/seller/profile", icon: Person },
      {
        name: "Add Product",
        href: "/dashboard/seller/add-product",
        icon: Plus,
      },
      {
        name: "My Products",
        href: "/dashboard/seller/my-products",
        icon: Cubes3,
      },
      {
        name: "Manage Orders",
        href: "/dashboard/seller/manage-orders",
        icon: ListCheck,
      },
      {
        name: "Analytics",
        href: "/dashboard/seller/analytics",
        icon: ChartLineArrowUp,
      },
    ],

    admin: [
      { name: "Overview", href: "/dashboard/admin", icon: ChartColumn },
      { name: "My Profile", href: "/dashboard/admin/profile", icon: Person },
      {
        name: "Manage Users",
        href: "/dashboard/admin/manage-users",
        icon: Persons,
      },
      {
        name: "Manage Products",
        href: "/dashboard/admin/manage-products",
        icon: Cubes3,
      },
      {
        name: "Manage Orders",
        href: "/dashboard/admin/manage-orders",
        icon: SquareListUl,
      },
      {
        name: "Analytics",
        href: "/dashboard/admin/analytics",
        icon: ChartLineArrowUp,
      },
    ],
  };
  const menu = sidebarLinks[role];
  return (
    <div>
      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center gap-1 px-4 hover:bg-gray-100"
          >
            <span><item.icon /></span>{item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default DashboardSideBar;
