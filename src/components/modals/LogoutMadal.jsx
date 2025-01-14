import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { IsLogoutOpen, LogoutMessage } from "../../atom/Atom";
import { grey1, primary4 } from "../../constants/color";

const Wrapper = styled.div`
  position: fixed;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard-Regular";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
`;

const Modal = styled.div`
  position: fixed;
  z-index: 15;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${grey1};
  width: 360px;
  padding: 40px 0;
  border-radius: 16px;
`;

const WrapContents = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 16px 16px 0 0;
  font-family: "Pretendard-Regular";
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  padding: 16px 24px 16px 16px;
  pointer-events: auto;
  border-radius: 8px;
  outline: 0;
  margin-bottom: 24px;
`;

const Button = styled.div`
  display: flex;
  width: 100px;
  justify-content: center;
  align-items: center;
  color: ${primary4};
  background: ${grey1};
  border: 1px solid ${primary4};
  border-radius: 24px;
  padding: 10px 12px;
  cursor: pointer;
  &:hover {
    background-color: ${primary4};
    color: ${grey1};
  }
`;
export const LogoutMadal = () => {
  const [isAlertOpen, setIsAlertOpen] = useRecoilState(IsLogoutOpen);
  const [alertMessage, setAlertMessage] = useRecoilState(LogoutMessage);

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  const renderCloseModalBtn = () => {
    return <Button onClick={handleAlertClose}>닫기</Button>;
  };

  const renderModal = () => {
    return (
      <ModalWrapper>
        <ModalContent>
          <WrapContents>{alertMessage}</WrapContents>
        </ModalContent>
        {renderCloseModalBtn()}
      </ModalWrapper>
    );
  };
  return (
    <Wrapper onClick={handleAlertClose}>
      <Modal onClick={(event) => event.stopPropagation()}>
        {renderModal()}
      </Modal>
    </Wrapper>
  );
};
export const NewpasswordMadal = () => {
  const [isAlertOpen, setIsAlertOpen] = useRecoilState(IsLogoutOpen);
  const [alertMessage, setAlertMessage] = useRecoilState(LogoutMessage);

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  const renderCloseModalBtn = () => {
    return <Button onClick={handleAlertClose}>닫기</Button>;
  };

  const renderModal = () => {
    return (
      <ModalWrapper>
        <ModalContent>
          <WrapContents>{alertMessage}</WrapContents>
        </ModalContent>
        {renderCloseModalBtn()}
      </ModalWrapper>
    );
  };
  return (
    <Wrapper onClick={handleAlertClose}>
      <Modal onClick={(event) => event.stopPropagation()}>
        {renderModal()}
      </Modal>
    </Wrapper>
  );
};
