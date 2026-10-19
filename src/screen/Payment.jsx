import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import "dayjs/locale/th";
import Breadcrumbs from "../components/Admin/Breadcrumbs";
import { mockGetSeats, mockCancelOrder, mockPayment, mockGenerateQR } from "../mock/mockApi";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { ShowDate_id } = useParams();
  const memberId = localStorage.getItem("memberId");

  const { selectedSeats, totalPrice, Order_id, Status_id, ConcertName } =
    location.state || {
      selectedSeats: [],
      totalPrice: 0,
      Order_id: null,
      Status_id: null,
      ConcertName,
    };

  const [paymentSlip, setPaymentSlip] = useState(null);
  const [concert, setConcert] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 นาที demo
  const [qrImage, setQrImage] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const isPaidRef = useRef(isPaid);

  useEffect(() => {
    isPaidRef.current = isPaid;
  }, [isPaid]);

  // โหลดข้อมูล concert (mock)
  useEffect(() => {
    mockGetSeats(ShowDate_id)
      .then((data) => setConcert(data[0] || null))
      .catch((err) => console.error(err));
  }, [ShowDate_id]);

  // นับถอยหลัง demo
  useEffect(() => {
    if (isPaid) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (!isPaidRef.current) {
            autoCancel();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isPaid]);

  // โหลด QR Code (mock)
  useEffect(() => {
    const fetchQR = async () => {
      try {
        const response = await mockGenerateQR(totalPrice);
        setQrImage(response.qrImage);
      } catch (error) {
        console.error("Error fetching QR:", error);
      }
    };

    if (totalPrice > 0) {
      fetchQR();
    }
  }, [totalPrice]);

  const formatTime = (seconds) => {
    if (!seconds || seconds <= 0) return "--:--";
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const autoCancel = async () => {
    try {
      await mockCancelOrder({
        Member_id: memberId,
        Seat_Number: selectedSeats,
        Order_id,
        Status_id,
        ShowDate_id,
      });

      Swal.fire({
        title: "หมดเวลาการชำระเงิน",
        text: "คำสั่งซื้อถูกยกเลิกแล้ว",
        icon: "info",
      }).then(() => navigate("/MyTicket"));
    } catch (err) {
      console.error("Auto cancel error:", err);
    }
  };

  const handleFileChange = (e) => setPaymentSlip(e.target.files[0]);

  // state
  const [slipDate, setSlipDate] = useState("");
  const [slipTime, setSlipTime] = useState("");

  const handlePayment = async () => {
    if (!paymentSlip) {
      Swal.fire({ title: "กรุณาอัปโหลดสลิปการโอนเงิน", icon: "warning" });
      return;
    }

    try {
      const response = await mockPayment({
        Slip: paymentSlip,
        Order_id,
        Slip_date: slipDate,
        Slip_time: slipTime,
        Status_id,
      });

      if (response.success) {
        setIsPaid(true);
        setTimeLeft(0);
        await Swal.fire({ title: "ชำระเงินเรียบร้อย", icon: "success" });
        navigate("/MyTicket");
      } else {
        Swal.fire({
          title: response.message || "เกิดข้อผิดพลาด",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="kanit-medium bg-base-100 flex min-h-screen flex-col">
      <Navbar />
      <div className="ml-4">
        <Breadcrumbs
          items={[
            { label: "หน้าหลัก", path: "/" },
            { label: "ข้อมูลคอนเสิร์ต", path: `/Detail/${concert?.Concert_id || ""}` },
            { label: "เลือกที่นั่ง", path: `/seats/${ShowDate_id}` },
            { label: "กรอกเลขบัตรประชาชน", path: `/Idcard/${ShowDate_id}` },
            { label: "ชำระเงิน", path: `/Payment/${ShowDate_id}` },
          ]}
        />
      </div>
      <div className="flex flex-grow flex-col items-center justify-center">
        <div className="w-full max-w-5xl md:p-12">
          {/* Header */}
          <h1 className="mb-4 text-center text-3xl font-bold text-green-600 md:text-4xl">
            การชำระเงิน
          </h1>

          {/* QR + Info Section */}
          <div className="mb-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            {/* Left: Concert Info */}
            <div className="bg-base-200 rounded-xl p-6 shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-green-600">
                รายละเอียดคอนเสิร์ต
              </h2>
              <p className="text-base-content mb-2 text-lg">
                <span className="font-semibold">ชื่อคอนเสิร์ต:</span>{" "}
                {concert?.ConcertName || ConcertName}
              </p>
              <p className="text-base-content mb-2 text-lg">
                <span className="font-semibold">รอบการแสดง:</span>{" "}
                {dayjs(concert?.ShowDate).locale("th").format("D MMMM YYYY")}{" "}
                {concert?.ShowStart?.slice(0, 5)} น.
              </p>
              <p className="text-base-content mb-2 text-lg">
                <span className="font-semibold">ที่นั่ง:</span>{" "}
                {selectedSeats.join(", ")}
              </p>
              <p className="mt-4 text-lg font-bold text-green-600">
                <span className="font-semibold">ราคารวม:</span> {totalPrice} บาท
              </p>
            </div>

            {/* Right: QR Code */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.bot.or.th/content/dam/bot/icons/icon-thaiqr.png"
                alt="PromptPay Logo"
                className="mb-4 w-32"
              />
              {qrImage && (
                <div className="bg-base-100 border-base-300 w-fit rounded-2xl border p-4 shadow-xl">
                  <img
                    src={qrImage}
                    alt="PromptPay QR"
                    className="h-64 w-64 object-contain"
                  />
                </div>
              )}
              <p className="text-base-content mt-4 text-lg">
                สแกนเพื่อชำระเงินผ่าน{" "}
                <span className="font-bold text-blue-600">PromptPay</span>
              </p>
              <p className="text-md text-gray-500">
                จำนวนเงิน:{" "}
                <span className="font-bold text-green-600">
                  {Number(totalPrice).toLocaleString()} บาท
                </span>
              </p>
              {/* Countdown */}
              {!isPaid && (
                <p className="mb-8 text-center text-lg font-bold text-red-500">
                  เวลาที่เหลือในการชำระเงิน: {formatTime(timeLeft)}
                </p>
              )}
            </div>
          </div>

          {/* Upload Slip */}
          <div className="mb-8">
            <label className="text-base-content mb-2 block text-lg">
              อัปโหลดสลิปการโอนเงิน
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border-base-300 text-base-content bg-base-100 w-full cursor-pointer rounded-lg border p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />

            {/* วันที่โอน */}
            <label className="text-base-content mt-4 mb-2 block text-lg">
              วันที่โอนเงิน
            </label>
            <input
              type="date"
              value={slipDate}
              onChange={(e) => setSlipDate(e.target.value)}
              className="border-base-300 text-base-content bg-base-100 w-full cursor-pointer rounded-lg border p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />

            {/* เวลาโอน */}
            <label className="text-base-content mt-4 mb-2 block text-lg">
              เวลาโอนเงิน
            </label>
            <input
              type="time"
              value={slipTime}
              onChange={(e) => setSlipTime(e.target.value)}
              className="border-base-300 text-base-content bg-base-100 w-full cursor-pointer rounded-lg border p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Buttons */}
          <div>
            <button
              onClick={handlePayment}
              className="btn btn-success w-full rounded-xl py-3 text-white shadow-lg "
            >
              ยืนยันการชำระเงิน
            </button>
          </div>

          <p className="text-base-content mt-6 text-center text-sm">
            กรุณาตรวจสอบข้อมูลก่อนทำการยืนยัน
          </p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
