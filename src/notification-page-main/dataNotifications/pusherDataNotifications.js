import { createDataNotifications } from "../createDataNotifications/createDataNotifications";
import { dataNotifications } from "./dataNotifications";

/**
 * This function create a instance of the class createDataNotifications and push it into dataNotifications Array.
 * @param {URL} url
 * @param {String} nameUser
 * @param {String} textContent
 * @param {String} subject
 * @param {String} time
 * @param {Boolean} isNew
 * @param {String} message
 * @param {URL} commentedPicture
 */
export const pusherDataNotifications = (
  url,
  nameUser,
  textContent,
  subject,
  time,
  isNew,
  message,
  commentedPicture
) => {
  dataNotifications.push(
    new createDataNotifications(
      url,
      nameUser,
      textContent,
      subject,
      time,
      isNew,
      message,
      commentedPicture
    )
  );
};
