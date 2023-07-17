import { Img, Link } from "@chakra-ui/react";
import liked from "../../assets/images/seta-active.png";
import { useContext } from "react";
import { GlobalContext } from "../../globalContext/globalContext";

export default function ButtonLike({
  updateLikeComments,
  updateLikePosts,
  like,
  dislike,
  postId,
  commentId,
}) {
  const context = useContext(GlobalContext);
  const { getComments,  getAllPosts,getPostById } = context;

  const doLike = () => {
    if (commentId) {
      updateLikeComments(commentId, { like: true });
      getComments(postId);
    } else {
      updateLikePosts(postId, { like: true });
      getPostById(postId);
      getAllPosts()
    }
    
  };
 
  if (like  >= 0 && dislike === 0) {
    return (
      <Link onClick={doLike} rounded={"2xl"}>
        <Img w="18px" src={liked} transform={"rotate(180deg)"} />
      </Link>
    );
  } else {
    return (
      <Link onClick={doLike} rounded={"2xl"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22px"
          height="22px"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M9.09076 1.53713C9.82256 0.613067 11.2243 0.611341 11.9581 1.53392L17.0657 7.95525C17.8337 8.92047 17.1539 10.3466 15.9208 10.3587L14.5331 10.3725L14.5318 15.0372C14.5318 15.2776 14.4844 15.5156 14.3923 15.7377C14.3002 15.9598 14.1652 16.1616 13.9951 16.3315C13.825 16.5014 13.6231 16.6361 13.4009 16.728C13.1788 16.8198 12.9407 16.867 12.7002 16.8668L8.34195 16.8628C7.85699 16.8623 7.39208 16.6692 7.04935 16.3261C6.70662 15.983 6.51408 15.5179 6.51404 15.033L6.51355 10.3735L5.15815 10.3727C3.91958 10.372 3.22869 8.94266 3.99698 7.97177L9.09076 1.53713ZM11.2758 2.07618C11.1859 1.96317 11.0717 1.87192 10.9416 1.80926C10.8115 1.74659 10.6689 1.71413 10.5245 1.7143C10.3801 1.71447 10.2376 1.74725 10.1076 1.81022C9.97768 1.87318 9.86363 1.96468 9.77401 2.07791L4.68022 8.51255C4.36399 8.91259 4.64818 9.50094 5.15839 9.50143L6.94958 9.50217C7.0068 9.50216 7.06347 9.51343 7.11635 9.53533C7.16922 9.55722 7.21727 9.58932 7.25773 9.62979C7.2982 9.67026 7.3303 9.7183 7.3522 9.77117C7.37409 9.82405 7.38536 9.88072 7.38535 9.93795L7.38511 15.033C7.38518 15.287 7.4861 15.5307 7.6657 15.7103C7.84529 15.89 8.08888 15.9911 8.34293 15.9913L12.7012 15.9952C12.8271 15.9953 12.9518 15.9706 13.0682 15.9225C13.1846 15.8744 13.2903 15.8038 13.3794 15.7148C13.4685 15.6258 13.5392 15.5201 13.5874 15.4038C13.6356 15.2875 13.6605 15.1628 13.6605 15.0369L13.6618 9.94091C13.6617 9.82609 13.707 9.71591 13.7878 9.63431C13.8686 9.5527 13.9783 9.50628 14.0931 9.50513L15.9121 9.48738C16.4199 9.48245 16.6996 8.89509 16.3836 8.49776L11.2758 2.07618Z"
            fill="#6F6F6F"
          />
        </svg>
      </Link>
    );
  }
}
