// src/data/orders.ts
// Date statice de exemplu pentru "Comenzile mele" si Admin. Inlocuiesti cu apiFetch("/api/orders") etc.
import type { OrderStatus } from "../components/shop/StatusBadge";

export interface OrderLine {
  name: string;
  variant?: string;
  qty: number;
  price: number; // total pe linie
}

export interface Order {
  id: string;
  customerName: string;
  customerPhone?: string;
  date: string; // afisare, ex "22 septembrie 2026"
  status: OrderStatus;
  lines: OrderLine[];
  deliveryFee: number;
  total: number;
  deliveryAddress?: string;
  deliverySlot?: string;
}

export const orders: Order[] = [
  {
    id: "DA-2026-0417",
    customerName: "Ana Popescu",
    customerPhone: "0722 123 456",
    date: "22 septembrie 2026",
    status: "noua",
    lines: [
      { name: "Tort Red Velvet", variant: "1kg", qty: 1, price: 160 },
      { name: "Eclere cu vanilie", qty: 4, price: 32 },
      { name: "Sărățele cu susan", qty: 2, price: 24 },
    ],
    deliveryFee: 40,
    total: 256,
    deliveryAddress: "Str. Florilor nr. 5, București",
    deliverySlot: "24 septembrie, 12:00–14:00",
  },
  {
    id: "DA-2026-0411",
    customerName: "Ioana Dumitru",
    date: "18 septembrie 2026",
    status: "pregatire",
    lines: [{ name: "Tort Red Velvet", variant: "1kg", qty: 1, price: 180 }],
    deliveryFee: 0,
    total: 180,
  },
  {
    id: "DA-2026-0402",
    customerName: "Radu Stan",
    date: "2 septembrie 2026",
    status: "livrata",
    lines: [
      { name: "Cheesecake New York", qty: 2, price: 36 },
      { name: "Cornulețe cu gouda și șuncă", qty: 6, price: 36 },
      { name: "Tartă cu fructe de pădure", qty: 1, price: 15 },
    ],
    deliveryFee: 40,
    total: 216,
  },
  {
    id: "DA-2026-0355",
    customerName: "Radu Stan",
    date: "14 august 2026",
    status: "anulata",
    lines: [{ name: "Prăjitură Snickers", qty: 4, price: 56 }],
    deliveryFee: 0,
    total: 64,
  },
];
