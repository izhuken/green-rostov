import { PointStyles } from '@/assets';
import { pointApi } from '@/assets/config/api';

import { Header } from '@/components/admin/header';
import { ModalPoint } from '@/components/admin/modal/createPointModal';
import { PaginatedResponse } from '@/entities';
import { AppEcologyPoint } from '@/entities/app-entities/point';
import { useGeoLocation } from '@/lib';
import { useDisclosure } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Map, Marker } from 'pigeon-maps';
import React, { useState } from 'react';

interface EcoPointsProps {}

export const EcoPoints: React.FC<EcoPointsProps> = () => {
  const location = useGeoLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentCoords, setCurrentCoords] = useState<[number, number] | null>(
    null,
  );
  const { data } = useQuery({
    queryKey: ['point-list'],
    queryFn: async () =>
      await axios.get<PaginatedResponse<AppEcologyPoint[]>>(
        `${pointApi}/get_all`,
      ),
  });

  return (
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
          onClick={(e) => {
            setCurrentCoords(() => e.latLng);
            onOpen();
          }}
          defaultZoom={15}
        >
          {data?.data.data.map(({ id, latitude, longitude }) => (
            <Marker key={id} anchor={[Number(latitude), Number(longitude)]}>
              <img
                className={PointStyles.mapPin}
                src='/public/point.svg'
                alt='warehouse'
              />
            </Marker>
          ))}
        </Map>

        <ModalPoint latLon={currentCoords!} onClose={onClose} isOpen={isOpen} />
      </div>
    </div>
  );
};
