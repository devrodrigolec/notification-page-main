export const refreshNotificationsCouter = () => {
  const unreadNotifications = document.querySelectorAll(".unread");
  const unreadNotificationsCounter = document.querySelector(
    ".notifications-number"
  );
  unreadNotificationsCounter.textContent = unreadNotifications.length;
};
