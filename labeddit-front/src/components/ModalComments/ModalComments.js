import {  Flex, Stack, Text } from "@chakra-ui/react";

import { useContext } from "react";
import { GlobalContext } from "../../globalContext/globalContext";
export default function ModalComments() {
  const context = useContext(GlobalContext);
  const { dataGetC} = context;   
  return (
    <Flex
      justifyContent={"space-around"}
      alignItems={"center"}
      border="1px solid #ECECEC "
      m={1}
      w="65px"
      h="28px"
      rounded={"28px"}
      pl={2}
    >
      <Stack>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
        >
          <path
            d="M10.1147 13.5859H14.7067C15.543 13.5859 16.2001 12.9204 16.2001 12.1243V5.8616C16.2001 5.06547 15.543 4.4 14.7067 4.4H4.62672C3.79046 4.4 3.13339 5.06547 3.13339 5.8616V12.1243C3.13339 12.9204 3.79046 13.5859 4.62672 13.5859H6.12006V16.5333H6.12286L6.12472 16.5324L10.1157 13.5859H10.1147ZM6.68006 17.2828C6.48137 17.4293 6.23312 17.4919 5.98874 17.4571C5.74437 17.4224 5.52339 17.2931 5.37339 17.0971C5.25314 16.9386 5.18792 16.7453 5.18766 16.5464V14.5192H4.62766C3.28739 14.5192 2.20099 13.4468 2.20099 12.1243V5.8616C2.20006 4.53907 3.28646 3.46667 4.62672 3.46667H14.7067C16.047 3.46667 17.1334 4.53907 17.1334 5.8616V12.1243C17.1334 13.4477 16.047 14.5192 14.7067 14.5192H10.4227L6.67912 17.2828H6.68006Z"
            fill="#6F6F6F"
          />
        </svg>
      </Stack>
        {/* <Text>{dataGetC.length}</Text> */}
    </Flex>
  );
}
