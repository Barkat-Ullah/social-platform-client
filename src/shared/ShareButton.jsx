import { FacebookShareButton } from "react-share";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { CiFacebook } from "react-icons/ci";

const ShareButton = ({ post }) => {
  const axiosPublic = useAxiosPublic();
  const { _id, postName } = post;

  console.log(post);
  const shareUrl = `https://online-meet-platform-server.vercel.app/post/${_id}`;
  return (
    <div>
      <FacebookShareButton url={shareUrl} quote={postName}>
        <div className="flex border border-violet-600-300 p-3 space-x-2">
        <span className="text-violet-500 ">share on</span>
        <CiFacebook className="text-2xl text-violet-500"/>
        </div>
      </FacebookShareButton>
    </div>
  );
};

export default ShareButton;
