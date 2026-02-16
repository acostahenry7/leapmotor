"use client";

import React, { useState } from "react";
import { X, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems?: MenuItem[];
}

const defaultMenuItems: MenuItem[] = [
  {
    label: "Our Models",
    children: [
      { label: "C10", href: "/models/c10" },
      //   { label: "B06", href: "#" },
      //   { label: "B07", href: "#" },
      //   { label: "B08", href: "#" },
    ],
  },
  {
    label: "Brand",
    children: [
      { label: "About Us", href: "#" },
      { label: "News", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

interface MenuItemProps {
  item: MenuItem;
  isExpanded: boolean;
  onToggle: () => void;
  level?: number;
}

const MenuItemComponent = ({
  item,
  isExpanded,
  onToggle,
  level = 0,
}: MenuItemProps) => {
  const hasChildren = item.children && item.children.length > 0;
  const isMainLevel = level === 0;

  return (
    <div>
      {hasChildren ? (
        <button
          onClick={onToggle}
          className={`w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-100 transition ${
            isMainLevel
              ? "text-lg font-semibold text-gray-800"
              : "text-gray-700"
          }`}
        >
          <span>{item.label}</span>
          <ChevronRight
            size={20}
            className={`text-gray-600 transition-transform ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </button>
      ) : (
        <a
          href={item.href || "#"}
          className="w-full flex items-center py-3 px-4 rounded-lg hover:bg-gray-100 transition text-gray-700"
        >
          {item.label}
        </a>
      )}

      {hasChildren && isExpanded && (
        <div className={`space-y-2 mt-2 ${level > 0 ? "pl-4" : "pl-4"}`}>
          {item.children!.map((child, index) => (
            <MenuItemRender key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

interface MenuItemRenderProps {
  item: MenuItem;
  level?: number;
}

const MenuItemRender = ({ item, level = 0 }: MenuItemRenderProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <MenuItemComponent
        item={item}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
        level={level}
      />
    );
  }

  return (
    <a
      href={item.href || "#"}
      className="block py-2 text-gray-700 hover:text-gray-900 transition"
    >
      {item.label}
    </a>
  );
};

const Sidebar = ({
  isOpen,
  onClose,
  menuItems = defaultMenuItems,
}: SidebarProps) => {
  const { t } = useLanguage();

  // Translate menu items
  const translatedMenuItems = [
    {
      label: t("sidebar.ourModels"),
      children: [{ label: "C10", href: "/models/c10" }],
    },
    {
      label: t("sidebar.brand"),
      children: [
        { label: t("sidebar.aboutUs"), href: "#" },
        { label: t("sidebar.news"), href: "#" },
        { label: t("sidebar.contact"), href: "#" },
      ],
    },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-white z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header with Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-gray-900 transition"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="px-6 space-y-4">
          {translatedMenuItems.map((item, index) => (
            <MenuItemRender key={index} item={item} level={0} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
