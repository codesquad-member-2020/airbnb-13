export const TURN_ON_MODAL = 'TURN_ON_MODAL';
export const TURN_OFF_MODAL = 'TURN_OFF_MODAL';

export type ModalType = 'Reservation';

export const turnOnModal = (modalType: ModalType) => {
  return {
    type: TURN_ON_MODAL,
    modalType
  };
};

export const turnOffModal = () => {
  return {
    type: TURN_OFF_MODAL
  };
};

export type ModalAction = ReturnType<typeof turnOffModal> | ReturnType<typeof turnOnModal>;
