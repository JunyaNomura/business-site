import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineMonochromePhotos } from 'react-icons/md';
import { BiCameraMovie } from 'react-icons/bi';

const Feature = ({ title, text, icon } ) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function Menu() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>

        <Feature
          icon={<Icon as={CgWebsite} w={10} h={10} />}
          title={'Web'}
          text={
            'Webサイト制作/Webアプリ開発/ECサイト開発/ブロックチェーンアプリ開発'
          }
        />
        <Feature
          icon={<Icon as={MdOutlineMonochromePhotos} w={10} h={10} />}
          title={'Photography'}
          text={
            'タレント・モデル用宣材写真撮影/ポートレート撮影/EC商品物撮り'
          }
        />
        <Feature
          icon={<Icon as={BiCameraMovie} w={10} h={10} />}
          title={'Movie'}
          text={
            '動画撮影・編集/360度動画撮影'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'SNS'}
          text={
            '各種SNSアカウント運営'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'3D'}
          text={
            '3Dモデリング、3Dゲーム開発'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'業務効率化ツール開発'}
          text={
            'Google Apps Script(GAS)を用いた簡易的なツール開発'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Consulting'}
          text={
            '事業計画モデル、財務モデルの設計をサポート'
          }
        />
      </SimpleGrid>
    </Box>
  );
}
