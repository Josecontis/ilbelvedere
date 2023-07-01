import { t } from "i18next";
import React from "react";
import "./AlertNotification.css";

export const AlertNotification = ({ Success }) => {
  return (
    <div className={Success ? "alert-success" : "alert-error"}>
      <span>{Success ? t("alert.success") : t("alert.error")} </span>
    </div>
  );
};
