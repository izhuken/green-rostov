import { PointStyles } from '@/assets';
import { logo } from '../../../public/logo.svg';

import { FormControl, FormLabel, Input, ModalBody } from '@chakra-ui/react';
import React from 'react';

interface EcoPointsProps {}
export const EcoPoints: React.FC<EcoPointsProps> = () => {
  // const { data } = useQuery({
  //   queryKey: ['warehouse'],
  //   queryFn: async () => await warehouseAPI.fetchAll<WareHouse>(),
  // });

  return (
    <>
      <div className={PointStyles.conteiner}>
        <div className={PointStyles.content}>
          <div className='header'>
            <img src={logo} />
          </div>
          <div className='form'>
            <p>Вход</p>

            <ModalBody>
              <FormControl>
                <FormLabel fontSize='12px'>Название</FormLabel>
                <Input />
              </FormControl>
            </ModalBody>
          </div>
        </div>
      </div>
    </>
  );
};
