"use client";
import React from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

function VideoItem({ video }: { video: { key: string; name: string } }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div
      onClick={onOpen}
      className="relative brightness-75 group hover:brightness-100 cursor-pointer transition w-full  aspect-video flex-shrink-0 bg-black/50 rounded-md overflow-hidden"
    >
      <div className="w-full h-full">
        <Image
          fill
          className="object-cover"
          src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
          alt={video.name}
        />
      </div>

      <div className="absolute  inset-0 flex items-center justify-center">
        <FaYoutube className="group-hover:text-red-700  text-white" size="40" />
      </div>

      <Modal
        placement="center"
        backdrop={"blur"}
        isDismissable
        isKeyboardDismissDisabled={false}
        isOpen={isOpen}
        classNames={{
          body: " py-2 lg:py-6",
          base: "w-full h-full max-w-[80dvw] max-h-[80dvh]",
        }}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold">{video.name}</h2>
              </ModalHeader>
              <ModalBody className="w-full h-full ">
                <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default VideoItem;
