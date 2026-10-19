// ============================================================
// MOCK API SERVICE - จำลอง API calls แทน backend จริง
// ใช้สำหรับ Demo / GitHub Pages
// ============================================================

import {
  mockConcerts,
  mockRatings,
  mockConcertDetails,
  mockSeats,
  mockUser,
  mockTickets,
  mockQRImage,
} from "./mockData";

const delay = (ms = 300) => new Promise((res) => setTimeout(res, ms));

// Mock Auth state (เก็บ in-memory)
let currentUser = null;

// ========== Auth ==========
export const mockCheckAuth = async () => {
  await delay(200);
  const storedUser = localStorage.getItem("mockUser");
  if (storedUser) {
    currentUser = JSON.parse(storedUser);
    return { user: currentUser };
  }
  throw new Error("Not authenticated");
};

export const mockLogin = async (email, password) => {
  await delay(400);
  // demo credentials
  if (email === "demo@concertticket.com" && password === "demo1234") {
    const userData = { ...mockUser };
    currentUser = userData;
    localStorage.setItem("mockUser", JSON.stringify(userData));
    localStorage.setItem("memberId", String(userData.Member_id));
    return { userData, role: "member" };
  }
  if (email === "admin@concertticket.com" && password === "admin1234") {
    const adminData = { Admin_id: 1, Firstname: "แอดมิน", Email: email };
    localStorage.setItem("adminId", "1");
    return { userData: adminData, role: "admin" };
  }
  const err = new Error("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
  err.response = { status: 400, data: { message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" } };
  throw err;
};

export const mockLogout = async () => {
  await delay(200);
  currentUser = null;
  localStorage.removeItem("mockUser");
  localStorage.removeItem("memberId");
  return { success: true };
};

// ========== Concerts ==========
export const mockGetConcerts = async () => {
  await delay(400);
  return mockConcerts;
};

export const mockGetRatings = async () => {
  await delay(300);
  return mockRatings;
};

export const mockGetConcertDetail = async (id) => {
  await delay(400);
  const detail = mockConcertDetails[Number(id)];
  if (!detail) throw new Error("Concert not found");
  return detail;
};

// ========== Seats ==========
export const mockGetSeats = async (showDateId) => {
  await delay(400);
  return mockSeats[Number(showDateId)] || [];
};

export const mockGetMemberSeats = async (memberId, showDateId) => {
  await delay(200);
  return { success: true, count: 0 };
};

export const mockSelectSeats = async (payload) => {
  await delay(500);
  return { success: true, Order_id: Math.floor(Math.random() * 9000) + 1000 };
};

// ========== Orders / Tickets ==========
export const mockGetMyTickets = async (memberId) => {
  await delay(400);
  return { success: true, data: mockTickets };
};

export const mockGetOrder = async (orderId) => {
  await delay(300);
  const ticket = mockTickets.find((t) => t.Order_id === Number(orderId));
  if (!ticket) return { success: false };
  return {
    success: true,
    data: {
      ...ticket,
      expireTime: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
    },
  };
};

export const mockCancelOrder = async () => {
  await delay(300);
  return { success: true };
};

export const mockPayment = async () => {
  await delay(600);
  return { success: true };
};

export const mockGenerateQR = async (amount) => {
  await delay(400);
  return {
    qrImage: `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=PROMPTPAY-0812345678-${amount}THB&bgcolor=ffffff`,
  };
};

export const mockAddRating = async () => {
  await delay(300);
  return { success: true };
};

// ========== Profile ==========
export const mockUpdateProfile = async (formdata) => {
  await delay(400);
  const updated = { ...mockUser, ...formdata };
  localStorage.setItem("mockUser", JSON.stringify(updated));
  return { success: true };
};

// ========== QR Code ==========
export const mockGetQRCode = async (orderId) => {
  await delay(300);
  const ticket = mockTickets.find((t) => t.Order_id === Number(orderId));
  return {
    success: true,
    data: ticket || mockTickets[0],
    qrData: `CONCERT-TICKET-${orderId}-DEMO`,
  };
};
