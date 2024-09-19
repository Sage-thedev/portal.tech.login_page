import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Link,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    matricNumber: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    matricNumber: "",
    password: "",
  });
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState("success");
  const [isValid, setIsValid] = useState(true);
  const { isOpen: isVisible, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });

  // Handle input change
  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Form submission
  const HandleOnSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({ matricNumber: "", password: "" });
    setAlertMessage("");
    setIsValid(true);

    const matricNumberTrimmed = form.matricNumber.trim();
    const passwordTrimmed = form.password.trim();

    // Validation
    if (matricNumberTrimmed === "") {
      setErrors((prevError) => ({
        ...prevError,
        matricNumber: "Matric number is required",
      }));
      setIsValid(false);
    }

    if (passwordTrimmed === "") {
      setErrors((prevError) => ({
        ...prevError,
        password: "Password is required",
      }));
      setIsValid(false);
    } else if (passwordTrimmed.length < 8) {
      setErrors((prevError) => ({
        ...prevError,
        password: "Password must be at least 8 characters long",
      }));
      setIsValid(false);
    }

    // Only submit if there are no errors
    if (isValid) {
      setAlertMessage("Form submitted successfully");
      setAlertStatus("success");
      setForm({
        matricNumber: "",
        password: "",
      });
    } else {
      setAlertMessage("Please correct the errors in the form");
      setAlertStatus("error");
    }

    onOpen();
  };

  // Toggle password visibility
  const passwordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box className="bg-green-60 flex flex-col items-center justify-center w-screen h-screen overflow-x-hidden p-[5%]">
      <Box className="flex flex-col md:flex-row shadow-lg w-full h-full">
        <Box className="flex flex-row md:flex-col justify-center items-center gap-[16px] md:gap-[32px] w-full mb-[5px] md:w-[40%] p-7 md:p-9 py-[3rem] rounded-br-[40%] md:rounded-br-[50%] md:rounded-bl-[50%] rounded-bl-2xl border-white shadow-2xl">
          <Image
            src="/logo.png"
            alt="University Logo"
            className="h-auto w-24 md:w-48"
          />
          <Heading
            as="h1"
            className="md:text-center text-fuchsia-800 text-[15px] md:text-[30.22px] leading-[29.53px] font-semibold tracking-[2.66px]"
          >
            Abiola Ajimobi Technical University
          </Heading>
        </Box>
        <Box className="md:w-[50%] relative w-full h-full flex flex-col pt-28 items-center bg-white md:px[10%] px-[5%] gap-[2rem]" overflow='hidden'>
          <Heading
            as="h1"
            className="text-stone-500 text-[25px] md:text-[35px] font-semibold leading-[29.53px] tracking-widest"
          >
            Portal Login
          </Heading>
          {isVisible && alertMessage && (
            <Alert status={alertStatus}  mb={4} borderRadius="md" p={8} variant='subtle'>
              <AlertIcon size='sm' />
              <Box ml={3} mr={2}  px={4}>
                <AlertTitle mb={1}>{alertStatus === "success" ? "Success!" : "Error"}</AlertTitle>
                <AlertDescription>{alertMessage}</AlertDescription>
              </Box>
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={onClose}
              />
            </Alert>
          )}

          <form onSubmit={HandleOnSubmit}>
            <Flex flexDirection="column" gap="32px">
              <Box className="w-full text-black">
                <Text className="text-sm font-medium block tracking-wide leading-[29.53px]">
                  Matric Number/Staff ID
                </Text>
                <Input
                  type="text"
                  name="matricNumber"
                  onChange={handleForm}
                  value={form.matricNumber}
                  placeholder="Matric Number/Staff ID"
                  mb={4}
                  className="border border-zinc-400 w-[100%] h-[40px] rounded-[7px] focus:outline-none fill-black pl-[16px]"
                />
                {errors.matricNumber && (
                  <Text color="red" fontSize="sm">
                    {errors.matricNumber}
                  </Text>
                )}

                <Text className="text-sm font-medium block tracking-wide leading-[29.53px] mb-2">
                  Password
                </Text>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleForm}
                    value={form.password}
                    placeholder="Enter your password"
                    mb={4}
                    pr="3rem" // Ensure padding-right to avoid overlap
                    className="border border-zinc-400 w-[100%] h-[40px] rounded-[7px] focus:outline-none fill-black pl-[16px]"
                  />
                  <InputRightElement
                    width="1rem"
                    height="full"
                    display="flex"
                    alignItems="center"
                    bottom="0.3rem"
                    right="0.8rem"
                  >
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      icon={
                        showPassword ? <MdVisibilityOff /> : <MdVisibility />
                      }
                      opacity={0.7}
                      onClick={passwordToggle}
                      variant="link"
                      size="sm"
                      backgroundColor="transparent"
                    />
                  </InputRightElement>
                </InputGroup>
                {errors.password && (
                  <Text color="red" fontSize="sm">
                    {errors.password}
                  </Text>
                )}

                <Box className="flex flex-col justify-center gap-[7.3px]">
                  <Button
                    type="submit"
                    bg="green.600"
                    transition='bg 0.5 ease-in-out'
                  >
                    <Text className="font-medium leading-[29.53px] tracking-wider text-lg text-white">
                      Login
                    </Text>
                  </Button>

                  <Flex justifyContent="flex-end" mt="1rem">
                    <Link
                      href="#"
                      className="text-sm font-medium text-green-900 hover:text-stone-800"
                    >
                      Forgot Password?
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginForm;
