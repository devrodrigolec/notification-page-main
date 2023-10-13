import { createDataNotifications } from "../createDataNotifications/createDataNotifications";
import { dataNotifications } from "./dataNotifications";

/**
 *
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
