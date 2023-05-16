import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  Categories,
  Company,
  NeedHelp,
  OurServices,
  Partners,
  PolicyInfo,
} from "./FooterLinks";
import styles from "./footer.module.css";
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className={styles.container}>
      <Stack direction="horizontal" justify="space-between">
        <Stack>
          <Text fontSize="16px" fontWeight="bold">
           OUR SERVICES
          </Text>
          {Company.map((el, i) => (
            <>
            <Text key={i} fontSize="14px" cursor="pointer">
              {el.link}
            </Text>
            <hr />
            </>
          ))}
        </Stack>
        <Stack>
          <Text fontSize="16px" fontWeight="bold">
            OUR SUPPORT
          </Text>
          {Categories.map((el, i) => (
            <>
            <Text key={i} fontSize="14px" cursor="pointer">
              {el.link}
            </Text>
            <hr color="red"/>
            </>
          ))}
        </Stack>
        <Stack>
          <Text fontSize="16px" fontWeight="bold">
           MY ACCOUNT
          </Text>
          {NeedHelp.map((el, i) => (
            <>
            <Text key={i} fontSize="14px" cursor="pointer">
              {el.link}
            </Text>
            <hr />
            </>
          ))}
        </Stack>
        <Stack gap="10px" marginRight="20px">
          <Text fontSize="16px" fontWeight="700">
           OPENING HOURS
          </Text>
            <Text>Mon - Sat : (08:00am - 10:00pm)</Text>
            <Text>Sun : (08:00am -06:00pm)</Text>
            <Text color='grey'>All times India Standard Time (IST)</Text>
            <Text>ANY QUERIES?</Text>
          <Stack direction="horizontal" gap="25px">
          <AiOutlineMail color="aqua"/>
          <Text>admin@alldaygeneric.com</Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack gap="10px" marginBottom="40px" marginTop="60px">
        <Text fontSize="16px" fontWeight="700">
          Our Payment Partners
        </Text>
        <Stack direction="horizontal" justify="space-between">
          <Stack direction="horizontal" gap="40px" width="784px" height="24px">
            {Partners.map((el, i) => (
              <Image key={i} src={el.img} height="18px" />
            ))}
          </Stack>
          <Text fontSize="14px">© 2022 AllDayGenric. All Rights Reserved</Text>
        </Stack>
      </Stack>
      <Text fontWeight='bold'>Important disclaimer</Text>
      <Text color='grey'>Please note that not all medications, including any referenced on this page, are dispensed from our affiliated Indian pharmacy</Text>
    </div>
  );
};

export default Footer;