import "./style.css";
import {
  App,
  markAllAsRead,
  refreshNotificationsCouter,
  dataNotifications,
  notificationsRenderGenerator,
} from "./src/notification-page-main/index";

const insertComponent = document.querySelector("#app");

App(insertComponent);

const containerNotifications = document.querySelector(
  "#container-notifications"
);

for (let data of dataNotifications) {
  notificationsRenderGenerator(data, containerNotifications);
}

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
