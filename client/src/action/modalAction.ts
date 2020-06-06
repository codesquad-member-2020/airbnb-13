export const TURN_ON_MODAL = 'TURN_ON_MODAL';
export const TURN_OFF_MODAL = 'TURN_OFF_MODAL';
export const TURN_ON_RESERVATION_MODAL = 'TURN_ON_RESERVATION_MODAL';

export type ModalType = 'Reservation' | 'Login';

export const turnOnReservationModal = (id: number) => {
  return {
    type: TURN_ON_RESERVATION_MODAL,
    id
  };
};

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

export type ModalAction =
  | ReturnType<typeof turnOnReservationModal>
  | ReturnType<typeof turnOffModal>
  | ReturnType<typeof turnOnModal>;
