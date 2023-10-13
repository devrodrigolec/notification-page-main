/**
 *
 * @param {Array} unreadNotifications
 */
export const markAllAsRead = (unreadNotifications) => {
  const ballNewNotification = document.querySelectorAll(
    ".ball-new-notification"
  );

  unreadNotifications.forEach((element) => {
    element.classList.remove("unread");
    ballNewNotification.forEach((element) => {
      element.classList.add("no-red-ball");
    });
  });
};
