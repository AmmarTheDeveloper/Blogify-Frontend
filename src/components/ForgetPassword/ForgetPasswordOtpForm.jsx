import React, { useState, useEffect } from "react";
// import { handleForm } from "./validateForgetPasswordForm";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { sendOTP } from "./sendOTP";
import { useSelector, useDispatch } from "react-redux";
import { verifyOTP } from "./verifyOTP";
export const ForgetPasswordOtpForm = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const otpExpiryTime = 60;
  const [expiryTime, setExpiryTime] = useState(() => {
    const storedExpiryTime = localStorage.getItem(
      "forgetPasswordOTPexpiryTime"
    );
    return storedExpiryTime ? parseInt(storedExpiryTime) : otpExpiryTime;
  });
  const [isTimerRestarted, setTimerRestarted] = useState(false);
  const [otp, setOtp] = useState("");

  const { email } = useSelector((state) => state.forgetPasswordState);

  const setMessageAndStatus = (message, status) => {
    setMessage(message);
    setStatus(status);
  };

  const handleResedOTPButton = () => {
    sendOTP(email);
    setTimerRestarted(true);
    setExpiryTime(otpExpiryTime);
    localStorage.setItem(
      "forgetPasswordOTPexpiryTime",
      otpExpiryTime.toString()
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setExpiryTime((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(interval);
          setTimerRestarted(false);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRestarted]);

  useEffect(() => {
    if (expiryTime != 0) {
      localStorage.setItem(
        "forgetPasswordOTPexpiryTime",
        expiryTime.toString()
      );
    } else {
      localStorage.removeItem("forgetPasswordOTPexpiryTime");
      localStorage.removeItem("forgetPasswordEmail");
      localStorage.removeItem("isForgetPasswordOTPSent");
    }
  }, [expiryTime]);

  return (
    <>
      <div className="flex items-center justify-center w-[100%]">
        <form
          onSubmit={(e) =>
            verifyOTP(e, otp, setMessageAndStatus, email, dispatch)
          }
          className="max-w-sm mx-auto w-[400px] max-w-[100%] shadow shadow-gray-500/80  p-[20px] rounded"
        >
          <h1 className="text-center text-[25px] font-[500] mb-5">
            Forget Password
          </h1>
          <div
            className="bg-blue-100 rounded-md mb-5 text-blue-700 px-4 py-3"
            role="alert"
          >
            <p className="font-bold">OTP Send!</p>
            <p className="text-sm">
              An otp has been sent to your email account.
            </p>
          </div>
          {/* <div className="mb-5">
            <label
              htmlFor="otp"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter OTP :
            </label>
            <input
              name="otp"
              type="text"
              id="otp"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your OTP"
            />
          </div> */}

          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            shouldAutoFocus
            renderInput={(props) => (
              <input
                {...props}
                className="border border-gray-200 focus:border-blue-400 outline-none rounded p-[10px] m-[5px] text-center text-[16px]10 "
                style={{ width: "15%", height: "40px" }}
              />
            )}
          />
          {expiryTime > 0 ? (
            <p className="text-center my-5">
              OTP will expire in {expiryTime} s
            </p>
          ) : (
            <button
              onClick={handleResedOTPButton}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Resend OTP
            </button>
          )}
          <div
            className={`text-[14px] mb-2 ${
              status == "success" ? "text-[#14A44D]" : "text-[#DC4C64]"
            }`}
          >
            {message}
          </div>
          <div className="text-[16px] mb-2">
            remember password ?{" "}
            <Link to="/signin" className="text-[blue] hover:underline">
              Sign in
            </Link>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
