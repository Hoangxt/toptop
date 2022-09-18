import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GoVerified } from "react-icons/go";
import axios from "axios";

import VideoCard from "../../components/VideoCard";
import NoResults from "../../components/NoResults";
import { IUser, Video } from "../../types";
import { BASE_URL } from "../../utils";

interface IProps {
  data: {
    user: IUser;
    userVideos: Video[];
    userLikeVideos: Video[];
  };
}
// cho typescript hieu dc data props truyen vao nhan tu profile api
const Profile = ({ data }: IProps) => {
  const { user, userVideos, userLikeVideos } = data;

  const [showUserVideos, setShowUserVideos] = useState<Boolean>(true);
  const [videosList, setVideosList] = useState<Video[]>([]);

  const videos = showUserVideos ? "border-b-2 border-black" : "text-gray-400";
  const liked = !showUserVideos ? "border-b-2 border-black" : "text-gray-400";

  useEffect(() => {
    if (showUserVideos) {
      setVideosList(userVideos);
    } else {
      setVideosList(userLikeVideos);
    }
  }, [showUserVideos, userVideos, userLikeVideos]);

  return (
    <div className="p-full">
      <div className="flex gap-6 md:gap-1 mb-4 bg-white w-full">
        <div className="w-16 h-16 md:w-32 md:h-32">
          <Image
            src={user.image}
            alt="user profile"
            width={120}
            height={120}
            className="rounded-full"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className=" md:text-2xl tracking-wider flex gap-1 items-center justify-center lowercase text-primary font-bold">
            {user.userName.replaceAll(" ", "")}
            <GoVerified className="text-blue-400" />
          </p>
          <p className="capitalize text-gray-400 text-sm md:text-xl">
            {user.userName}
          </p>
        </div>
      </div>
      {/* -------------- */}
      {/* Video and like */}
      <div>
        <div className="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
          <p
            className={`text-xl font-semibold cursor-pointer ${videos} mt-2`}
            onClick={() => setShowUserVideos(true)}
          >
            Videos
          </p>
          <p
            className={`text-xl font-semibold cursor-pointer ${liked} mt-2`}
            onClick={() => setShowUserVideos(false)}
          >
            Liked
          </p>
        </div>
        {/* ----- */}
        <div className="flex gap-6 flex-wrap md:justify-start">
          {videosList.length > 0 ? (
            videosList.map((post: Video, idx: number) => (
              <VideoCard post={post} key={idx} />
            ))
          ) : (
            <NoResults
              text={`No ${showUserVideos ? "" : "Liked"} Videos Yet`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({
  params: { userId },
}: {
  params: { userId: string };
}) => {
  const res = await axios.get(`${BASE_URL}/api/profile/${userId}`);

  return {
    props: { data: res.data },
  };
};

export default Profile;
