// ============================================================
// MOCK DATA - ใช้แทน API จริงสำหรับ Demo/GitHub Pages
// ============================================================

// รูปภาพโปสเตอร์จาก Unsplash (ไม่ต้องใช้ backend)
export const POSTER_IMAGES = [
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&h=600&fit=crop",
];

// ข้อมูล concerts สำหรับหน้า Home (Card)
export const mockConcerts = [
  {
    Concert_id: 1,
    ConcertName: "BIG MOUNTAIN MUSIC FESTIVAL 2025",
    ShowDate: "2025-12-20",
    ShowDateTime: "2025-12-20T18:00:00",
    SaleDateTime: "2025-01-01T09:00:00",
    Place: "เขาใหญ่ อุทยานแห่งชาติ",
    Poster: POSTER_IMAGES[0],
    AvailableSeats: 150,
    Price: 3500,
  },
  {
    Concert_id: 2,
    ConcertName: "WONDERFRUIT FESTIVAL",
    ShowDate: "2025-12-27",
    ShowDateTime: "2025-12-27T16:00:00",
    SaleDateTime: "2025-01-15T09:00:00",
    Place: "พัทยา ชลบุรี",
    Poster: POSTER_IMAGES[1],
    AvailableSeats: 80,
    Price: 2800,
  },
  {
    Concert_id: 3,
    ConcertName: "MILLI LIVE CONCERT 2025",
    ShowDate: "2025-11-30",
    ShowDateTime: "2025-11-30T19:00:00",
    SaleDateTime: "2025-01-10T09:00:00",
    Place: "ไบเทค บางนา กรุงเทพฯ",
    Poster: POSTER_IMAGES[2],
    AvailableSeats: 200,
    Price: 1500,
  },
  {
    Concert_id: 4,
    ConcertName: "STAMP WORLD TOUR BANGKOK",
    ShowDate: "2025-10-25",
    ShowDateTime: "2025-10-25T19:30:00",
    SaleDateTime: "2025-09-01T10:00:00",
    Place: "อิมแพ็ค อารีนา เมืองทองธานี",
    Poster: POSTER_IMAGES[3],
    AvailableSeats: 0,
    Price: 2000,
  },
  {
    Concert_id: 5,
    ConcertName: "COCKTAIL LIVE IN CONCERT",
    ShowDate: "2026-02-14",
    ShowDateTime: "2026-02-14T20:00:00",
    SaleDateTime: "2026-02-01T09:00:00",
    Place: "เซ็นทรัล เวิลด์ กรุงเทพฯ",
    Poster: POSTER_IMAGES[4],
    AvailableSeats: 300,
    Price: 1800,
  },
  {
    Concert_id: 6,
    ConcertName: "PARADOX GOODBYE CONCERT",
    ShowDate: "2026-03-10",
    ShowDateTime: "2026-03-10T19:00:00",
    SaleDateTime: "2026-04-01T09:00:00", // ยังไม่เปิดขาย
    Place: "ราชมังคลากีฬาสถาน กรุงเทพฯ",
    Poster: POSTER_IMAGES[5],
    AvailableSeats: 500,
    Price: 2500,
  },
];

// ข้อมูล ratings (คอนเสิร์ตยอดฮิต)
export const mockRatings = [
  { ...mockConcerts[3], Rating: "4.8" },
  { ...mockConcerts[2], Rating: "4.6" },
  { ...mockConcerts[0], Rating: "4.5" },
  { ...mockConcerts[1], Rating: "4.3" },
];

// ข้อมูล concert detail (รายละเอียดคอนเสิร์ต)
export const mockConcertDetails = {
  1: {
    Concert_id: 1,
    ConcertName: "BIG MOUNTAIN MUSIC FESTIVAL 2025",
    OpenSaleDate: "2025-01-01",
    OpenSaleTimes: "09:00:00",
    ShowDate: "2025-12-20",
    Price: 3500,
    Place: "เขาใหญ่ อุทยานแห่งชาติ",
    Poster: POSTER_IMAGES[0],
    SaleDateTime: "2025-01-01T09:00:00",
    Details:
      "งานดนตรีที่ยิ่งใหญ่ที่สุดในเอเชียตะวันออกเฉียงใต้\nกลับมาอีกครั้งอย่างยิ่งใหญ่อลังการ ณ เขาใหญ่\n\nพบกับศิลปินกว่า 50 วง จาก 10 ประเทศ\n🎸 Rock | 🎵 Pop | 🎹 Electronic | 🎷 Jazz\n\nตั๋วบัตรรวมทุกวัน ราคา 3,500 บาท\nสิ่งอำนวยความสะดวก: ลานจอดรถ, food court, ห้องน้ำเคลื่อนที่",
    ShowRounds: [
      {
        ShowDate_id: 101,
        ShowDate: "2025-12-20",
        ShowDateTime: "2025-12-20T18:00:00",
        ShowStart: "18:00:00",
        AvailableSeats: 80,
      },
      {
        ShowDate_id: 102,
        ShowDate: "2025-12-21",
        ShowDateTime: "2025-12-21T18:00:00",
        ShowStart: "18:00:00",
        AvailableSeats: 150,
      },
    ],
  },
  2: {
    Concert_id: 2,
    ConcertName: "WONDERFRUIT FESTIVAL",
    OpenSaleDate: "2025-01-15",
    OpenSaleTimes: "09:00:00",
    ShowDate: "2025-12-27",
    Price: 2800,
    Place: "พัทยา ชลบุรี",
    Poster: POSTER_IMAGES[1],
    SaleDateTime: "2025-01-15T09:00:00",
    Details:
      "WONDERFRUIT FESTIVAL งานเทศกาลดนตรีและศิลปะระดับโลก\nบนชายหาดพัทยา ชลบุรี\n\nประสบการณ์สุดอัศจรรย์ที่ผสมผสานดนตรี ศิลปะ และธรรมชาติ\n3 วัน 3 คืน แห่งความสนุกสนาน\n\nราคาบัตร 2,800 บาท (รวม camping zone)",
    ShowRounds: [
      {
        ShowDate_id: 201,
        ShowDate: "2025-12-27",
        ShowDateTime: "2025-12-27T16:00:00",
        ShowStart: "16:00:00",
        AvailableSeats: 80,
      },
      {
        ShowDate_id: 202,
        ShowDate: "2025-12-28",
        ShowDateTime: "2025-12-28T16:00:00",
        ShowStart: "16:00:00",
        AvailableSeats: 120,
      },
    ],
  },
  3: {
    Concert_id: 3,
    ConcertName: "MILLI LIVE CONCERT 2025",
    OpenSaleDate: "2025-01-10",
    OpenSaleTimes: "10:00:00",
    ShowDate: "2025-11-30",
    Price: 1500,
    Place: "ไบเทค บางนา กรุงเทพฯ",
    Poster: POSTER_IMAGES[2],
    SaleDateTime: "2025-01-10T10:00:00",
    Details:
      "มิลลิ ศิลปินฮิปฮอปสาวจากประเทศไทย กลับมาพร้อม Live Concert สุดพิเศษ\n\nพบกับเพลงฮิตมากมาย อาทิ\n🎤 ทุเรียน, Mirror, แม่กูไม่ได้ขึ้นค่ายดนตรี\n\nราคาบัตร: 1,500 บาท\nรอบเดียวเท่านั้น! อย่าพลาด",
    ShowRounds: [
      {
        ShowDate_id: 301,
        ShowDate: "2025-11-30",
        ShowDateTime: "2025-11-30T19:00:00",
        ShowStart: "19:00:00",
        AvailableSeats: 200,
      },
    ],
  },
  4: {
    Concert_id: 4,
    ConcertName: "STAMP WORLD TOUR BANGKOK",
    OpenSaleDate: "2025-09-01",
    OpenSaleTimes: "10:00:00",
    ShowDate: "2025-10-25",
    Price: 2000,
    Place: "อิมแพ็ค อารีนา เมืองทองธานี",
    Poster: POSTER_IMAGES[3],
    SaleDateTime: "2025-09-01T10:00:00",
    Details:
      "STAMP APIWAT World Tour กลับมาสู่แผ่นดินเกิด\n\nคอนเสิร์ตระดับโลกที่คุณรอคอย\nพบกับเพลงฮิตทุกยุคทุกสมัย\n\n⚠️ บัตรหมดทุก Zone แล้ว",
    ShowRounds: [
      {
        ShowDate_id: 401,
        ShowDate: "2025-10-25",
        ShowDateTime: "2025-10-25T19:30:00",
        ShowStart: "19:30:00",
        AvailableSeats: 0,
      },
    ],
  },
  5: {
    Concert_id: 5,
    ConcertName: "COCKTAIL LIVE IN CONCERT",
    OpenSaleDate: "2026-02-01",
    OpenSaleTimes: "09:00:00",
    ShowDate: "2026-02-14",
    Price: 1800,
    Place: "เซ็นทรัล เวิลด์ กรุงเทพฯ",
    Poster: POSTER_IMAGES[4],
    SaleDateTime: "2026-02-01T09:00:00",
    Details:
      "Cocktail วงดนตรีอัลเทอร์เนทีฟชื่อดัง กลับมาพร้อมคอนเสิร์ต Valentine Special\n\nวันวาเลนไทน์นี้ ฉลองความรักด้วยดนตรีสุดโรแมนติก\n\nราคาบัตร 1,800 บาท",
    ShowRounds: [
      {
        ShowDate_id: 501,
        ShowDate: "2026-02-14",
        ShowDateTime: "2026-02-14T20:00:00",
        ShowStart: "20:00:00",
        AvailableSeats: 300,
      },
    ],
  },
  6: {
    Concert_id: 6,
    ConcertName: "PARADOX GOODBYE CONCERT",
    OpenSaleDate: "2026-04-01",
    OpenSaleTimes: "09:00:00",
    ShowDate: "2026-03-10",
    Price: 2500,
    Place: "ราชมังคลากีฬาสถาน กรุงเทพฯ",
    Poster: POSTER_IMAGES[5],
    SaleDateTime: "2026-04-01T09:00:00",
    Details:
      "PARADOX วงดนตรีที่แฟนๆ รักมายาวนาน\nกับคอนเสิร์ตอำลาที่ยิ่งใหญ่ที่สุด\n\nมาร่วมส่งวงที่รักด้วยกัน\nราคาบัตร 2,500 บาท\n\n⏳ เปิดจำหน่าย 1 เมษายน 2569",
    ShowRounds: [
      {
        ShowDate_id: 601,
        ShowDate: "2026-03-10",
        ShowDateTime: "2026-03-10T19:00:00",
        ShowStart: "19:00:00",
        AvailableSeats: 500,
      },
    ],
  },
};

// ข้อมูล seats (ที่นั่ง) สำหรับแต่ละรอบ
const generateSeats = (showDateId, concertId, concertName, showDate, showStart, poster, price) => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const seatsPerRow = 10;
  const seats = [];
  const bookedSeats = ["A3", "A7", "B2", "B5", "C1", "C8", "D4", "D9"];

  rows.forEach((row) => {
    for (let i = 1; i <= seatsPerRow; i++) {
      const seatNum = `${row}${i}`;
      seats.push({
        Seat_id: `${showDateId}_${seatNum}`,
        Seat_Number: seatNum,
        Status: bookedSeats.includes(seatNum) ? "จอง" : "ว่าง",
        ShowDate_id: showDateId,
        Concert_id: concertId,
        ConcertName: concertName,
        ShowDate: showDate,
        ShowStart: showStart,
        Poster: poster,
        Price: price,
      });
    }
  });
  return seats;
};

export const mockSeats = {
  101: generateSeats(101, 1, "BIG MOUNTAIN MUSIC FESTIVAL 2025", "2025-12-20", "18:00:00", POSTER_IMAGES[0], 3500),
  102: generateSeats(102, 1, "BIG MOUNTAIN MUSIC FESTIVAL 2025", "2025-12-21", "18:00:00", POSTER_IMAGES[0], 3500),
  201: generateSeats(201, 2, "WONDERFRUIT FESTIVAL", "2025-12-27", "16:00:00", POSTER_IMAGES[1], 2800),
  202: generateSeats(202, 2, "WONDERFRUIT FESTIVAL", "2025-12-28", "16:00:00", POSTER_IMAGES[1], 2800),
  301: generateSeats(301, 3, "MILLI LIVE CONCERT 2025", "2025-11-30", "19:00:00", POSTER_IMAGES[2], 1500),
  501: generateSeats(501, 5, "COCKTAIL LIVE IN CONCERT", "2026-02-14", "20:00:00", POSTER_IMAGES[4], 1800),
  601: generateSeats(601, 6, "PARADOX GOODBYE CONCERT", "2026-03-10", "19:00:00", POSTER_IMAGES[5], 2500),
};

// ข้อมูล mock user (ผู้ใช้จำลอง)
export const mockUser = {
  Member_id: 1,
  Firstname: "สมชาย",
  Lastname: "ใจดี",
  Email: "demo@concertticket.com",
  Telephone: "081-234-5678",
};

// ข้อมูล mock tickets (บัตรของฉัน)
export const mockTickets = [
  {
    Order_id: 1001,
    ConcertName: "MILLI LIVE CONCERT 2025",
    ShowDate: "2025-11-30",
    ShowDateTime: "2025-11-30T19:00:00",
    ShowStart: "19:00:00",
    Seat_Number: "A1, A2",
    Price: 1500,
    Status_id: 3,
    Status_Name: "ชำระเงินเสร็จสมบูรณ์",
    ShowDate_id: 301,
    Concert_id: 3,
    ShowTime: 2,
    Rating: "4.6",
    Poster: POSTER_IMAGES[2],
  },
  {
    Order_id: 1002,
    ConcertName: "STAMP WORLD TOUR BANGKOK",
    ShowDate: "2025-10-25",
    ShowDateTime: "2025-10-25T19:30:00",
    ShowStart: "19:30:00",
    Seat_Number: "B3",
    Price: 2000,
    Status_id: 4,
    Status_Name: "ชำระเงินสำเร็จรอการตรวจสอบ",
    ShowDate_id: 401,
    Concert_id: 4,
    ShowTime: 3,
    Rating: null,
    Poster: POSTER_IMAGES[3],
  },
  {
    Order_id: 1003,
    ConcertName: "BIG MOUNTAIN MUSIC FESTIVAL 2025",
    ShowDate: "2025-12-20",
    ShowDateTime: "2025-12-20T18:00:00",
    ShowStart: "18:00:00",
    Seat_Number: "C5, C6, C7",
    Price: 3500,
    Status_id: 1,
    Status_Name: "ยืนยันคำสั่งซื้อรอการชำระเงิน",
    ShowDate_id: 101,
    Concert_id: 1,
    ShowTime: 4,
    Rating: null,
    Poster: POSTER_IMAGES[0],
    expireTime: new Date(Date.now() + 15 * 60 * 1000).toISOString(), // 15 นาทีนับจากนี้
  },
];

// QR Code mock (base64 placeholder)
export const mockQRImage =
  "https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=DEMO-PAYMENT-1234567890&bgcolor=ffffff";
