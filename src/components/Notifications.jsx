import React from "react";

const SingleNotification = ({
  avatar,
  notifier,
  children,
  event,
  unread,
  notiRef,
  time,
  piComment,
  picCommentImg,
  group,
}) => {
  return (
    <div
      className={`${
        unread && "bg-neutral-100 border border-neutral-200"
      }  rounded-md px-3 md:px-5 py-3`}
    >
      <div className={`${piComment && "flex justify-between"}`}>
        <div>
          {/* Avatar */}
          <div className="float-left mr-4">
            <img
              src={avatar}
              alt="Avatar-1"
              className="md:w-10 md:h-10 w-8 h-8"
            />
          </div>
          <div className="flex flex-col space-y-1">
            {/* Notification content */}
            <div
              className={` ${
                (unread || piComment) && "md:flex items-center space-x-1"
              }  single_content`}
            >
              <div>
                <a href="http://" className="user md:text-base !text-sm">
                  {notifier}
                </a>
                <span className="neutral mx-1.5">{event}</span>
                <a
                  href="http://"
                  className={`${
                    group ? "text-blue" : "text-neutral-500"
                  } font-bold hover:text-blue`}
                >
                  {notiRef}
                </a>
              </div>
              {unread && (
                <div className="bg-red w-2 h-2 rounded-full float-right" />
              )}
            </div>

            {/* Time */}
            <p className="text-neutral-400 text-sm">{time}</p>
            {children && <div className="pt-2">{children}</div>}
          </div>
        </div>
        {piComment && (
          <div className="ml-2 md:ml-0">
            <img
              src={picCommentImg}
              alt=""
              className="md:w-10 md:h-10 w-8 h-8"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleNotification;
