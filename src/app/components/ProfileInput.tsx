import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

type ProfileInputProps = {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
};

export default function ProfileInput(props: ProfileInputProps) {
  const { name, setName, email, setEmail, phone, setPhone } = props;

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p="14px"
      w="100%"
      bgColor="white"
      mb="18px"
    >
      <Flex alignItems="center" pb="14px" gap="4px">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.1211 17.8969C19.679 16.8496 19.0374 15.8984 18.232 15.0961C17.4291 14.2915 16.478 13.65 15.4312 13.207C15.4219 13.2023 15.4125 13.2 15.4031 13.1953C16.8633 12.1406 17.8125 10.4227 17.8125 8.48438C17.8125 5.27344 15.2109 2.67188 12 2.67188C8.78906 2.67188 6.1875 5.27344 6.1875 8.48438C6.1875 10.4227 7.13672 12.1406 8.59687 13.1977C8.5875 13.2023 8.57812 13.2047 8.56875 13.2094C7.51875 13.6523 6.57656 14.2875 5.76797 15.0984C4.96338 15.9013 4.32188 16.8524 3.8789 17.8992C3.44372 18.924 3.20902 20.0228 3.1875 21.1359C3.18687 21.161 3.19126 21.1858 3.2004 21.2091C3.20954 21.2324 3.22326 21.2537 3.24073 21.2716C3.2582 21.2895 3.27909 21.3037 3.30214 21.3134C3.3252 21.3231 3.34998 21.3281 3.375 21.3281H4.78125C4.88437 21.3281 4.9664 21.2461 4.96875 21.1453C5.01562 19.3359 5.74219 17.6414 7.02656 16.357C8.35547 15.0281 10.1203 14.2969 12 14.2969C13.8797 14.2969 15.6445 15.0281 16.9734 16.357C18.2578 17.6414 18.9844 19.3359 19.0312 21.1453C19.0336 21.2484 19.1156 21.3281 19.2187 21.3281H20.625C20.65 21.3281 20.6748 21.3231 20.6979 21.3134C20.7209 21.3037 20.7418 21.2895 20.7593 21.2716C20.7767 21.2537 20.7905 21.2324 20.7996 21.2091C20.8087 21.1858 20.8131 21.161 20.8125 21.1359C20.7891 20.0156 20.557 18.9258 20.1211 17.8969ZM12 12.5156C10.9242 12.5156 9.91172 12.0961 9.15 11.3344C8.38828 10.5727 7.96875 9.56016 7.96875 8.48438C7.96875 7.40859 8.38828 6.39609 9.15 5.63437C9.91172 4.87266 10.9242 4.45312 12 4.45312C13.0758 4.45312 14.0883 4.87266 14.85 5.63437C15.6117 6.39609 16.0312 7.40859 16.0312 8.48438C16.0312 9.56016 15.6117 10.5727 14.85 11.3344C14.0883 12.0961 13.0758 12.5156 12 12.5156Z"
            fill="#4A8CF8"
          />
        </svg>
        <Text fontSize="18px" color="primary.700" as="b">
          Me
        </Text>
      </Flex>

      <FormControl pb="12px">
        <FormLabel mb="6px" fontSize="14px">
          Name
        </FormLabel>
        <Input
          size="sm"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </FormControl>
      <FormControl pb="12px">
        <FormLabel mb="6px" fontSize="14px">
          Email
        </FormLabel>
        <Input
          size="sm"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>
      <FormControl pb="12px">
        <FormLabel mb="6px" fontSize="14px">
          Phone
        </FormLabel>
        <Input
          size="sm"
          type="tel"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </FormControl>
    </Box>
  );
}
