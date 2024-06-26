import "./assets/styles/reset.css";
import "./assets/styles/global.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import Reservation from "./components/Reservation";
import Exhibition from "./components/Exhibition";
import MoreExhibition from "./components/MoreExhibition";
import Notice from "./components/Notice";
import User from "./components/User";
import ExhibitionIntro from "./components/ExhibitionIntro";
import ReservationPage from "./components/ReservationPage";
import ReservationComplete from "./components/ReservationComplete";
import ChangeInfomation from "./components/ChangeInfomation";
import BookingDetails from "./components/BookingDetails";
import BookingCancellation from "./components/BookingCancellation";
import BookingComplete from "./components/BookingComplete";
import ReservationDetails from "./components/ReservationDetails";
import QR from "./components/QR";
import ReservationCancle from "./components/ReservationCancle";
import BookingCompleteDetails from "./components/BookingCompleteDetails";
import ReservationCanclePage from "./components/ReservationCanclePage";
import CancleComplete from "./components/CancleComplete";
import CancelAccount from "./components/CancelAccount";
import Login from "./components/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/reservation/details" element={<ReservationDetails />} />
      <Route path="/reservation/cancle" element={<ReservationCancle />} />
      <Route path="/reservation/cancle/page" element={<ReservationCanclePage />} />
      <Route path="/reservation/cancle/page/complete" element={<CancleComplete />} />
      <Route path="/qr" element={<QR />} />
      <Route path="/reservationpage" element={<ReservationPage />} />
      <Route path="/reservationcomplete" element={<ReservationComplete />} />
      <Route path="/exhibition" element={<Exhibition />} />
      <Route path="/exhibitionintro" element={<ExhibitionIntro />} />
      <Route path="/exhibitionmore" element={<MoreExhibition />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/user" element={<User />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/cancle/account" element={<CancelAccount />} />
      <Route path="/user/change" element={<ChangeInfomation />} />
      <Route path="/bookingList" element={<BookingDetails />} />
      <Route path="/booking/cancel" element={<BookingCancellation />} />
      <Route path="/booking/completed" element={<BookingComplete />} />
      <Route path="/booking/completed/details" element={<BookingCompleteDetails />} />
    </Routes>
  );
};

export default App;