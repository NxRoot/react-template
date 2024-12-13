import { Box, HStack, IconButton } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

export default function Navbar() {

  const desktop = {base: "none", md: "flex"}
  const mobile = {base: "flex", md: "none"}
  const logo = (d) => <Box as="a" display={d} href="#Home">Logo</Box>

  return (
    <HStack bg="gray.900" p="3" h="56px" justifyContent="space-between">

      {logo(desktop)}
      <IconButton display={mobile} variant="outline" size="sm" icon={<MdMenu />} aria-label={"Menu"}/>
      {logo(mobile)}

      <HStack display={desktop}>
        <Box as="a" href="#Link1">Link 1</Box>
        <Box as="a" href="#Link2">Link 2</Box>
        <Box as="a" href="#Link3">Link 3</Box>
      </HStack>

      <Box>Actions</Box>
      
    </HStack>
  )
}