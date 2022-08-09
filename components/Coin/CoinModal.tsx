import React, { useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CoinData from "../../src/interface/coinPageInterface";
import ChildModal from "./ChildModal";
import { ArrowRight } from "@mui/icons-material";
type CoinDetailProps = {
  coin: CoinData;
};
//style for modal
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #810909",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const CoinModal = ({ coin }: CoinDetailProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }} className=" w-11/12 md:w-[600px]">
          <h2 id="parent-modal-title" className="text-lg font-medium">
            {coin.name}
          </h2>
          <div className="flex flex-col gap-2 mt-5 ">
            <Link href={coin.links.homepage[0]}>
              <a className="text-sm md:text-base">
                Coin Site <ArrowRight />
                {coin.links.homepage[0]}
              </a>
            </Link>
            <Link href={coin.links.repos_url.github[0]}>
              <a className="text-sm md:text-base">
                GitHub <ArrowRight /> {coin.links.repos_url.github[0]}
              </a>
            </Link>
          </div>

          <ChildModal description={coin.description.en} name={coin.name} />
        </Box>
      </Modal>
    </div>
  );
};

export default CoinModal;
