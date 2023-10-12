import "./style.css";
import { App } from "./src/notification-page-main/app";
import { markAllAsRead } from "./src/notification-page-main/uses-cases/mark-all-as-read";
import { refreshNotificationsCouter } from "./src/notification-page-main/uses-cases/refresh-notifications-counter";
const insertComponent = document.querySelector("#app");

App(insertComponent);

const unreadNotifications = document.querySelectorAll(".unread");
const unreadNotificationsCounter = document.querySelector(
  ".notifications-number"
);
const markAsRead = document.querySelector(".as-read");

unreadNotificationsCounter.textContent = unreadNotifications.length;

markAsRead.addEventListener("click", () => {
  markAllAsRead(unreadNotifications);
  refreshNotificationsCouter();
});
