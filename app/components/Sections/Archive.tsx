import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Container,
  Text,
  Center,
  Link,
} from "@chakra-ui/react";
import hellLightsOutImage from "@/public/images/hellLightsOut.png";
import nemachizuki from "@/public/images/nemachizuki.png";

export const Archive = () => {
  return (
    <Container
      py={["32px", "32px", "48px"]}
      px={["16px", "24px", "0px"]}
      maxW="550px"
    >
      <Heading as="h1" fontSize={"30px"}>
        Works
      </Heading>
      <Heading as="h2" fontSize={"24px"} mt={"12px"}>
        Web
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} spacing={10} mt={"24px"}>
        <Box maxW={["xl", "xl", "sm"]}>
          <Link href={"http://nemachizukinoshow.com/2018/"} isExternal>
            {/* 3:2 */}
            <Image src={nemachizuki} alt="Hell Lights Out" borderRadius="lg" />
            <Center mt={"16px"}>
              <Text>寝待ち月のショー</Text>
            </Center>
          </Link>
        </Box>
      </SimpleGrid>
      <Heading as="h2" fontSize={"24px"} mt={"12px"}>
        Game
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} spacing={10} mt={"24px"}>
        <Box maxW={["xl", "xl", "sm"]}>
          <Link href={"https://unityroom.com/games/hell_lights_out"} isExternal>
            {/* 3:2 */}
            <Image
              src={hellLightsOutImage}
              alt="Hell Lights Out"
              borderRadius="lg"
            />
            <Center mt={"16px"}>
              <Text>Hell Lights Out</Text>
            </Center>
          </Link>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
