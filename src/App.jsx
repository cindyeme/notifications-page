import { useState } from "react";

import av1 from "./assets/images/avatar-mark-webber.webp";
import av2 from "./assets/images/avatar-angela-gray.webp";
import av3 from "./assets/images/avatar-jacob-thompson.webp";
import av4 from "./assets/images/avatar-rizky-hasanuddin.webp";
import av5 from "./assets/images/avatar-kimberly-smith.webp";
import av6 from "./assets/images/avatar-nathan-peterson.webp";
import av7 from "./assets/images/avatar-anna-kim.webp";
import imgChess from "./assets/images/image-chess.webp";
import SingleNotification from "./components/Notifications";

function App() {
  const [unread, setUnread] = useState(true);
  const [notificationNum, setNotificationNum] = useState(3);

  const handleMarkAllRead = () => {
    setUnread(false);
    setNotificationNum(0);
  };

  return (
    <>
      <main className="App bg-neutral-100 w-full z-10 md:py-16">
        <div className="max-w-2xl mx-auto h-full overflow-y-auto relative bg-white rounded-lg px-4 md:px-6 py-6 shadow">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center space-x-3">
                <h3 className="text-[1.2rem] md:text-[1.4rem] font-bold text-neutral-600">
                  Notifications
                </h3>
                <p className="bg-blue text-white rounded text-xs sm:text-sm px-1.5 md:px-2 py-px">
                  {notificationNum}
                </p>
              </div>
              <button
                className="hover:text-blue text-neutral-500 font-semibold focus:text-blue md:text-base text-[15px]"
                onClick={handleMarkAllRead}
              >
                Mark all as read
              </button>
            </div>

            {/* 1st item */}
            <SingleNotification
              avatar={av1}
              notifier="Mark Webber"
              event="reacted to your recent post"
              notiRef="My first tournament today!"
              time="1m ago"
              unread={unread}
            />
            {/* 2nd Item */}
            <SingleNotification
              avatar={av2}
              notifier="Angela Gray"
              event="followed you"
              time="5m ago"
              unread={unread}
            />
            {/* 3rd item */}
            <SingleNotification
              avatar={av3}
              notifier="Jacob Thompson"
              event="has joined your group"
              notiRef="Chess Club"
              time="1 day ago"
              unread={unread}
              group={true}
            />
            {/* 4th item */}
            <SingleNotification
              avatar={av4}
              notifier="Rizky Hasanuddin"
              event="sent you a private message"
              notiRef="Chess Club"
              time="5 days ago"
            >
              <div className="border rounded-md bg-white p-4 hover:bg-neutral-200 cursor-pointer hover:border-neutral-200">
                <a
                  href="https://cindyeme-notification-page.netlify.app"
                  className="text-neutral-500 text-[15px]"
                >
                  Hello, thanks for setting up the Chess Club. I've been a
                  member for a few weeks now and I'm already having lots of fun
                  and improving my game.
                </a>
              </div>
            </SingleNotification>
            {/* 5th item */}
            <SingleNotification
              avatar={av5}
              notifier="Kimberly Smith"
              event="commented on your picture"
              time="1 week ago"
              piComment={true}
              picCommentImg={imgChess}
            />
            {/* 6th item */}
            <SingleNotification
              avatar={av6}
              notifier="Nathan Peterson"
              event="reacted to your recent post"
              notiRef="5 end-game strategies to increase your win rate"
              time="2 weeks ago"
            />
            {/* 7th item */}
            <SingleNotification
              avatar={av7}
              notifier="Anna Kim"
              event="left the group"
              notiRef="Chess Club"
              time="2 weeks ago"
              group={true}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
