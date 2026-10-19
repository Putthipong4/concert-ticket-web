// ============================================================
// MOCK DATA - ใช้แทน API จริงสำหรับ Demo/GitHub Pages
// วันที่ทั้งหมดคำนวณจากวันปัจจุบัน เพื่อให้ demo ไม่หมดอายุ
// ============================================================
import dayjs from "dayjs";
import "dayjs/locale/th";

// รูปภาพโปสเตอร์จาก Unsplash (ไม่ต้องใช้ backend)
export const POSTER_IMAGES = [
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&h=600&fit=crop",
];

// สร้างวันที่แบบ relative จากวันนี้ (offset เป็นจำนวนวัน)
const today = dayjs().startOf("day");
const dateAt = (offsetDays) => today.add(offsetDays, "day").format("YYYY-MM-DD");
const dateTimeAt = (offsetDays, time) => `${dateAt(offsetDays)}T${time}`;
const thaiDate = (offsetDays) =>
  today.add(offsetDays, "day").locale("th").format("D MMMM YYYY");

// ข้อมูลตั้งต้นของคอนเสิร์ต (saleOffset / round.offset = จำนวนวันจากวันนี้)
const concertSeeds = [
  {
    Concert_id: 1,
    ConcertName: "BIG MOUNTAIN MUSIC FESTIVAL",
    Place: "เขาใหญ่ อุทยานแห่งชาติ",
    Poster: POSTER_IMAGES[0],
    Price: 3500,
    saleOffset: -30,
    saleTime: "09:00:00",
    rounds: [
      { ShowDate_id: 101, offset: 60, time: "18:00:00", AvailableSeats: 80 },
      { ShowDate_id: 102, offset: 61, time: "18:00:00", AvailableSeats: 150 },
    ],
    Details:
      "งานดนตรีที่ยิ่งใหญ่ที่สุดในเอเชียตะวันออกเฉียงใต้\nกลับมาอีกครั้งอย่างยิ่งใหญ่อลังการ ณ เขาใหญ่\n\nพบกับศิลปินกว่า 50 วง จาก 10 ประเทศ\n🎸 Rock | 🎵 Pop | 🎹 Electronic | 🎷 Jazz\n\nตั๋วบัตรรวมทุกวัน ราคา 3,500 บาท\nสิ่งอำนวยความสะดวก: ลานจอดรถ, food court, ห้องน้ำเคลื่อนที่",
  },
  {
    Concert_id: 2,
    ConcertName: "WONDERFRUIT FESTIVAL",
    Place: "พัทยา ชลบุรี",
    Poster: POSTER_IMAGES[1],
    Price: 2800,
    saleOffset: -20,
    saleTime: "09:00:00",
    rounds: [
      { ShowDate_id: 201, offset: 67, time: "16:00:00", AvailableSeats: 80 },
      { ShowDate_id: 202, offset: 68, time: "16:00:00", AvailableSeats: 120 },
    ],
    Details:
      "WONDERFRUIT FESTIVAL งานเทศกาลดนตรีและศิลปะระดับโลก\nบนชายหาดพัทยา ชลบุรี\n\nประสบการณ์สุดอัศจรรย์ที่ผสมผสานดนตรี ศิลปะ และธรรมชาติ\n3 วัน 3 คืน แห่งความสนุกสนาน\n\nราคาบัตร 2,800 บาท (รวม camping zone)",
  },
  {
    // แสดงไปแล้ว — ใช้กับบัตรที่ให้คะแนนแล้วในหน้า "บัตรของฉัน"
    Concert_id: 3,
    ConcertName: "MILLI LIVE CONCERT",
    Place: "ไบเทค บางนา กรุงเทพฯ",
    Poster: POSTER_IMAGES[2],
    Price: 1500,
    saleOffset: -90,
    saleTime: "10:00:00",
    rounds: [{ ShowDate_id: 301, offset: -20, time: "19:00:00", AvailableSeats: 200 }],
    Details:
      "มิลลิ ศิลปินฮิปฮอปสาวจากประเทศไทย กลับมาพร้อม Live Concert สุดพิเศษ\n\nพบกับเพลงฮิตมากมาย อาทิ\n🎤 ทุเรียน, Mirror, แม่กูไม่ได้ขึ้นค่ายดนตรี\n\nราคาบัตร: 1,500 บาท\nรอบเดียวเท่านั้น! อย่าพลาด",
  },
  {
    Concert_id: 4,
    ConcertName: "STAMP WORLD TOUR BANGKOK",
    Place: "อิมแพ็ค อารีนา เมืองทองธานี",
    Poster: POSTER_IMAGES[3],
    Price: 2000,
    saleOffset: -45,
    saleTime: "10:00:00",
    rounds: [{ ShowDate_id: 401, offset: 10, time: "19:30:00", AvailableSeats: 0 }],
    Details:
      "STAMP APIWAT World Tour กลับมาสู่แผ่นดินเกิด\n\nคอนเสิร์ตระดับโลกที่คุณรอคอย\nพบกับเพลงฮิตทุกยุคทุกสมัย\n\n⚠️ บัตรหมดทุก Zone แล้ว",
  },
  {
    Concert_id: 5,
    ConcertName: "COCKTAIL LIVE IN CONCERT",
    Place: "เซ็นทรัล เวิลด์ กรุงเทพฯ",
    Poster: POSTER_IMAGES[4],
    Price: 1800,
    saleOffset: -5,
    saleTime: "09:00:00",
    rounds: [{ ShowDate_id: 501, offset: 45, time: "20:00:00", AvailableSeats: 300 }],
    Details:
      "Cocktail วงดนตรีอัลเทอร์เนทีฟชื่อดัง กลับมาพร้อมคอนเสิร์ตสุดพิเศษ\n\nฉลองความรักด้วยดนตรีสุดโรแมนติก\n\nราคาบัตร 1,800 บาท",
  },
  {
    Concert_id: 6,
    ConcertName: "PARADOX GOODBYE CONCERT",
    Place: "ราชมังคลากีฬาสถาน กรุงเทพฯ",
    Poster: POSTER_IMAGES[5],
    Price: 2500,
    saleOffset: 15, // ยังไม่เปิดขาย
    saleTime: "09:00:00",
    rounds: [{ ShowDate_id: 601, offset: 90, time: "19:00:00", AvailableSeats: 500 }],
    Details: `PARADOX วงดนตรีที่แฟนๆ รักมายาวนาน\nกับคอนเสิร์ตอำลาที่ยิ่งใหญ่ที่สุด\n\nมาร่วมส่งวงที่รักด้วยกัน\nราคาบัตร 2,500 บาท\n\n⏳ เปิดจำหน่าย ${thaiDate(15)}`,
  },
  {
    Concert_id: 7,
    ConcertName: "BODYSLAM FEST วิชาตัวเบา",
    Place: "ราชมังคลากีฬาสถาน กรุงเทพฯ",
    Poster: POSTER_IMAGES[0],
    Price: 2200,
    saleOffset: -10,
    saleTime: "10:00:00",
    rounds: [
      { ShowDate_id: 701, offset: 30, time: "19:00:00", AvailableSeats: 400 },
      { ShowDate_id: 702, offset: 31, time: "19:00:00", AvailableSeats: 350 },
    ],
    Details:
      "BODYSLAM FEST คอนเสิร์ตใหญ่ประจำปีของวงร็อกอันดับหนึ่ง\n\n🎸 เพลงฮิตครบทุกอัลบั้ม\n🔥 โปรดักชันจัดเต็ม 2 รอบการแสดง\n\nราคาบัตร 2,200 บาท",
  },
  {
    Concert_id: 8,
    ConcertName: "SCRUBB ACOUSTIC NIGHT",
    Place: "ธันเดอร์โดม เมืองทองธานี",
    Poster: POSTER_IMAGES[1],
    Price: 1200,
    saleOffset: -3,
    saleTime: "12:00:00",
    rounds: [{ ShowDate_id: 801, offset: 21, time: "19:30:00", AvailableSeats: 120 }],
    Details:
      "SCRUBB ในบรรยากาศอะคูสติกสุดอบอุ่น\n\n🎶 ฟังเพลงโปรดในเวอร์ชันใหม่แบบใกล้ชิด\n\nราคาบัตร 1,200 บาท",
  },
  {
    Concert_id: 9,
    ConcertName: "TATTOO COLOUR SUMMER PARTY",
    Place: "ลานกิจกรรม สยามพารากอน กรุงเทพฯ",
    Poster: POSTER_IMAGES[2],
    Price: 1600,
    saleOffset: 7, // ยังไม่เปิดขาย
    saleTime: "10:00:00",
    rounds: [{ ShowDate_id: 901, offset: 75, time: "18:30:00", AvailableSeats: 250 }],
    Details: `Tattoo Colour ชวนมาสนุกในปาร์ตี้หน้าร้อน\n\n🌈 ดนตรีสดพร้อมกิจกรรมตลอดงาน\n\nราคาบัตร 1,600 บาท\n\n⏳ เปิดจำหน่าย ${thaiDate(7)}`,
  },
];

// ข้อมูล concerts สำหรับหน้า Home (Card) — ใช้รอบแรกของแต่ละคอนเสิร์ต
export const mockConcerts = concertSeeds.map((c) => {
  const first = c.rounds[0];
  return {
    Concert_id: c.Concert_id,
    ConcertName: c.ConcertName,
    ShowDate: dateAt(first.offset),
    ShowDateTime: dateTimeAt(first.offset, first.time),
    SaleDateTime: dateTimeAt(c.saleOffset, c.saleTime),
    Place: c.Place,
    Poster: c.Poster,
    AvailableSeats: c.rounds.reduce((sum, r) => sum + r.AvailableSeats, 0),
    Price: c.Price,
  };
});

const concertById = (id) => mockConcerts.find((c) => c.Concert_id === id);

// ข้อมูล ratings (คอนเสิร์ตยอดฮิต)
export const mockRatings = [
  { ...concertById(4), Rating: "4.8" },
  { ...concertById(3), Rating: "4.6" },
  { ...concertById(1), Rating: "4.5" },
  { ...concertById(7), Rating: "4.4" },
  { ...concertById(2), Rating: "4.3" },
  { ...concertById(8), Rating: "4.1" },
];

// ข้อมูล concert detail (รายละเอียดคอนเสิร์ต)
export const mockConcertDetails = Object.fromEntries(
  concertSeeds.map((c) => [
    c.Concert_id,
    {
      Concert_id: c.Concert_id,
      ConcertName: c.ConcertName,
      OpenSaleDate: dateAt(c.saleOffset),
      OpenSaleTimes: c.saleTime,
      ShowDate: dateAt(c.rounds[0].offset),
      Price: c.Price,
      Place: c.Place,
      Poster: c.Poster,
      SaleDateTime: dateTimeAt(c.saleOffset, c.saleTime),
      Details: c.Details,
      ShowRounds: c.rounds.map((r) => ({
        ShowDate_id: r.ShowDate_id,
        ShowDate: dateAt(r.offset),
        ShowDateTime: dateTimeAt(r.offset, r.time),
        ShowStart: r.time,
        AvailableSeats: r.AvailableSeats,
      })),
    },
  ])
);

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

// สร้างที่นั่งให้ทุกรอบที่ยังมีที่ว่าง
export const mockSeats = Object.fromEntries(
  concertSeeds.flatMap((c) =>
    c.rounds
      .filter((r) => r.AvailableSeats > 0)
      .map((r) => [
        r.ShowDate_id,
        generateSeats(r.ShowDate_id, c.Concert_id, c.ConcertName, dateAt(r.offset), r.time, c.Poster, c.Price),
      ])
  )
);

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
    ConcertName: "MILLI LIVE CONCERT",
    ShowDate: dateAt(-20),
    ShowDateTime: dateTimeAt(-20, "19:00:00"),
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
    ShowDate: dateAt(10),
    ShowDateTime: dateTimeAt(10, "19:30:00"),
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
    ConcertName: "BIG MOUNTAIN MUSIC FESTIVAL",
    ShowDate: dateAt(60),
    ShowDateTime: dateTimeAt(60, "18:00:00"),
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
