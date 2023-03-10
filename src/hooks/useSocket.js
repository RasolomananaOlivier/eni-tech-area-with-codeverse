import { useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { selectUserId } from "../redux/selectors/userSelector";
import config from "../config/index";
import token from "../utils/token";

const socketConnect = () => {
  return io(config.BASE_URL, {
    extraHeaders: {
      Authorization: "Bearer " + token.get(),
    },
  });
};

export const useSocket = () => {
  const userId = useSelector(selectUserId);

  const socket = socketConnect();

  useEffect(() => {
    socket.onAny((...arg) => console.log(arg));
    socket.on("hello", (arg) => console.log(arg));

    socket.on("notification:store", (data) => {
      console.log("socket", data);
    });

    return () => {
      socket.off("notification:store");
    };
  }, []);
};
