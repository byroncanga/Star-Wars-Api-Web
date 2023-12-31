import React from "react";
import Favorites from "./Favorites";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();



  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="xs:hidden pr-3" justify="center">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
          width="70px"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" onClick={() => navigate("/")}>
            Home
          </Link>
        </NavbarItem>
       
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button onPress={onOpen} color="default" variant="bordered"><i className="fa-regular fa-heart"></i>
            Favorites
          </Button>
          <Modal
            backdrop="opaque"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            radius="lg"
            classNames={{
              body: "py-6",
              backdrop: "bg-[#292f46]/80 backdrop-opacity-10",
              base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
              header: "border-b-[1px] border-[#292f46]",
              footer: "border-t-[1px] border-[#292f46]",
              closeButton: "hover:bg-white/5 active:bg-white/10",
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Your Favorities
                  </ModalHeader>
                  <ModalBody>
                    <Favorites />
                  </ModalBody>
                  <ModalFooter>
                    
                    <Button
                      className="bg-[#f2ab4e] shadow-lg shadow-indigo-400/20"
                      onPress={onClose}
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
      <Link color="foreground"  onClick={() => navigate("/")}>
            Home
          </Link>
      </NavbarMenu>
    </Navbar>
  );
}
