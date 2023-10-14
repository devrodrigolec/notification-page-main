import { createHTMLTag } from "./createHTMLTag";

/**
 * This function create a single notifications and render it in the HTML
 * @param {Object } objectNotifications => {}
 * @param {ElementHTML} elementHTML
 */
export const notificationsRenderGenerator = (
  objectNotifications,
  elementHTML
) => {
  const singleNotification = createHTMLTag("div", "single-notification");

  const imgContainer = createHTMLTag("div", "img-container");
  const img = createHTMLTag("img", "profile-picture");
  img.setAttribute("src", objectNotifications.url);
  img.setAttribute("alt", "Profile Picture");
  imgContainer.appendChild(img);

  const textContainer = createHTMLTag("div", "text-container");

  const textNotification = createHTMLTag("p", "text-notification");
  textContainer.appendChild(textNotification);

  const userSpan = createHTMLTag(
    "span",
    "user",
    objectNotifications.nameUser + " "
  );

  const textContentSpan = createHTMLTag(
    "span",
    "text-content",
    objectNotifications.textContent + " "
  );

  textNotification.appendChild(userSpan);
  textNotification.appendChild(textContentSpan);

  if (objectNotifications.subject != "") {
    const subjectSpan = createHTMLTag(
      "span",
      "subject",
      objectNotifications.subject
    );
    textNotification.appendChild(subjectSpan);
  }

  if (objectNotifications.isNew) {
    singleNotification.classList.add("unread");
    const ballNewNotificationSpan = createHTMLTag(
      "span",
      "ball-new-notification"
    );
    textNotification.appendChild(ballNewNotificationSpan);
  }

  const timeSpan = createHTMLTag("span", "time", objectNotifications.time);
  textContainer.appendChild(timeSpan);

  if (objectNotifications.message != "") {
    const messageUser = createHTMLTag(
      "p",
      "message",
      objectNotifications.message
    );
    textContainer.appendChild(messageUser);
  }

  singleNotification.appendChild(imgContainer);
  singleNotification.appendChild(textContainer);

  if (objectNotifications.commentedPicture != "") {
    const commentedPicture = createHTMLTag(
      "div",
      "commented-picture-container"
    );

    const imgCommentedPicture = createHTMLTag("img", "commented-picture");
    imgCommentedPicture.setAttribute(
      "src",
      objectNotifications.commentedPicture
    );
    imgCommentedPicture.setAttribute("alt", "Picture");
    commentedPicture.appendChild(imgCommentedPicture);
    singleNotification.appendChild(commentedPicture);
  }

  elementHTML.appendChild(singleNotification);
};

/* <div class="single-notification">
      <div class="img-container">
        <img
          src="./assets/images/avatar-kimberly-smith.webp"
          alt="Profile Picture"
          class="profile-picture"
        />
      </div>
      <div class="text-container">
        <p class="text-notification">
          <span class="user">Kimberly Smith </span
          ><span class="text-content"> commented on your picture </span>
          <span class="time">1 week ago</span>
        </p>
      </div>

      <div class="commented-picture-container">
        <img
          class="commented-picture"
          src="./assets/images/image-chess.webp"
          alt="picture"
        />
      </div>
    </div> */
