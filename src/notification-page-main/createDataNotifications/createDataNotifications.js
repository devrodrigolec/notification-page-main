export class createDataNotifications {
  static totalNotifications = 0;

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
  constructor(
    url,
    nameUser,
    textContent = "",
    subject = "",
    time,
    isNew,
    message = "",
    commentedPicture = ""
  ) {
    this.url = url;
    this.nameUser = nameUser;
    this.textContent = textContent;
    this.subject = subject;
    this.time = time;
    this.isNew = isNew;
    this.message = message;
    this.commentedPicture = commentedPicture;

    createDataNotifications.totalNotifications++;
  }
}
