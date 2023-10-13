export const notificationsRenderGenerator = (
  objectNotifications,
  elementHTML
) => {
  const singleNotification = document.createElement("div");
  singleNotification.classList.add("single-notification");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const img = document.createElement("img");
  img.setAttribute("src", objectNotifications.url);
  img.setAttribute("alt", "Profile Picture");
  img.classList.add("profile-picture");
  imgContainer.appendChild(img);

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  const textNotification = document.createElement("p");
  textNotification.classList.add("text-notification");
  textContainer.appendChild(textNotification);

  const userSpan = document.createElement("span");
  userSpan.classList.add("user");
  userSpan.textContent = objectNotifications.nameUser + " ";
  const textContentSpan = document.createElement("span");
  textContentSpan.classList.add("text-content");
  textContentSpan.textContent = objectNotifications.textContent + " ";

  textNotification.appendChild(userSpan);
  textNotification.appendChild(textContentSpan);

  if (objectNotifications.subject != "") {
    const subjectSpan = document.createElement("span");
    subjectSpan.classList.add("subject");
    subjectSpan.textContent = objectNotifications.subject;
    textNotification.appendChild(subjectSpan);
  }
  if (objectNotifications.isNew) {
    singleNotification.classList.add("unread");
    const ballNewNotificationSpan = document.createElement("span");
    ballNewNotificationSpan.classList.add("ball-new-notification");
    textNotification.appendChild(ballNewNotificationSpan);
  }

  const timeSpan = document.createElement("span");
  timeSpan.classList.add("time");
  timeSpan.textContent = objectNotifications.time;
  textContainer.appendChild(timeSpan);

  if (objectNotifications.message != "") {
    const messageUser = document.createElement("p");
    messageUser.classList.add("message");
    messageUser.textContent = objectNotifications.message;
    textContainer.appendChild(messageUser);
  }

  singleNotification.appendChild(imgContainer);
  singleNotification.appendChild(textContainer);

  if (objectNotifications.commentedPicture != "") {
    const commentedPicture = document.createElement("div");
    commentedPicture.classList.add("commented-picture-container");

    const imgCommentedPicture = document.createElement("img");
    imgCommentedPicture.classList.add("commented-picture");
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
