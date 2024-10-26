import { PointStyles } from '@/assets';

import { Header } from '@/components/admin/header';
import { ModalPoint } from '@/components/admin/modal/createPointModal';
import { useGeoLocation } from '@/lib';
import { useDisclosure } from '@chakra-ui/react';
import { Map, Overlay } from 'pigeon-maps';
import React from 'react';

interface EcoPointsProps {}

export const EcoPoints: React.FC<EcoPointsProps> = () => {
  const location = useGeoLocation();
  // const { data } = useQuery({
  //   queryKey: ['warehouse'],
  //   queryFn: async () => await warehouseAPI.fetchAll<WareHouse>(),
  // });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className={PointStyles.conteiner}>
        <div className={PointStyles.content}>
          <Header title='Экологические точки' />
          <Map
            defaultCenter={
              location ? [location?.latitude, location?.longitude] : undefined
            }
            center={
              location ? [location?.latitude, location?.longitude] : undefined
            }
            defaultZoom={15}
          >
            <Overlay key={1} anchor={[50.879, 4.6997]}>
              <img
                className={PointStyles.mapPin}
                src='../../../public/point.svg'
                alt='warehouse'
                onClick={onOpen}
              />
            </Overlay>
          </Map>
          <ModalPoint onClose={onClose} isOpen={isOpen} />
        </div>
      </div>
    </>
  );
};
