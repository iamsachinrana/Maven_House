import { CircularProgress, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
const Loader = ({ isLoading }) => (
  <Modal isOpen={isLoading}
  >
    <ModalOverlay />
    <ModalContent className="!bg-transparent m-auto center z-[1000] w-full">
      <CircularProgress isIndeterminate color='pink.300' />
    </ModalContent>
  </Modal>
);
export default Loader;
