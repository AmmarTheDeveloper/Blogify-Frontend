import { ForgetPasswordForm } from "./ForgetPasswordForm";
import { ForgetPasswordOtpForm } from "./ForgetPasswordOtpForm";
import { ResetPasswordForm } from "./ResetPasswordForm";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setOTPSent } from "../../redux/slice/forgetPasswordSlice";

export const ForgetPassword = () => {
  const dispatch = useDispatch();
  const { isOTPSent, isOTPVerified } = useSelector(
    (state) => state.forgetPasswordState
  );
  useEffect(() => {
    if (!isOTPSent) {
      let forgetPasswordEmail = localStorage.getItem("forgetPasswordEmail");
      let isForgetPasswordOTPSent = localStorage.getItem(
        "isForgetPasswordOTPSent"
      );
      if (forgetPasswordEmail) dispatch(setEmail(forgetPasswordEmail));
      if (isForgetPasswordOTPSent)
        dispatch(setOTPSent(isForgetPasswordOTPSent));
    }
  }, []);
  return (
    <>
      {!isOTPSent ? (
        <ForgetPasswordForm />
      ) : !isOTPVerified ? (
        <ForgetPasswordOtpForm />
      ) : (
        <ResetPasswordForm />
      )}
    </>
  );
};
