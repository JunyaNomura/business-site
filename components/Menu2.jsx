import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

export default function Menu2() {
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}
        >
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                web-based company
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                Webテクノロジーを中心に様々なサービスを提供
              </Heading>
              <Text mt={16} fontSize={'xl'} color={'gray.400'}>
              Web。そこは顧客と商品が出会い、関係を構築していく場所。<br />
              <br />
              その設計のためには、マーケティングとエンジニアリング、両方の視点を持つことが不可欠です。<br />
              <br />
              Webテクノロジーとビジネスの専門家集団である私たちが、トータルのユーザー体験をプロデュースします。
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontWeight={700}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'lg'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: 'Webサイト制作/Webアプリ開発',
    content: (
      <>
        <StatsText>Web</StatsText>は私たちの一番強みです。企業サイトの制作から、<StatsText>ECサイト・マッチングアプリ</StatsText>などのWebアプリの開発まで幅広く担当。
      </>
    ),
  },
  {
    title: '写真・動画制作',
    content: (
      <>
        タレント・モデル様の<StatsText>宣材写真・プロモーション用動画</StatsText>の撮影・編集や、商品の撮影などを担当。また、Web制作と合わせて行うことで、一貫したユーザー体験を提供。
      </>
    ),
  },
  {
    title: '3D開発',
    content: (
      <>
        メタバースが当たり前になる時代において、3Dはインタラクティブな体験を提供するのに重要なツール。<StatsText>商品3D、3DWebサイト</StatsText>の制作が可能。
      </>
    ),
  },
  {
    title: '業務効率化ツール開発',
    content: (
      <>
        Google Apps Script(GAS)を用いて、<StatsText>請求書の自動作成、メール送信、LINEへの自動通知など</StatsText>煩雑な業務を自動化するための簡易的なツールを開発。 
      </>
    ),
  },
  {
    title: 'SNS',
    content: (
      <>
        SNSのアカウントひとつひとつがユーザーとのタッチポイント。写真・動画を中心にSNS向けの<StatsText>コンテンツを制作</StatsText>。
      </>
    ),
  },
  {
    title: 'ビジネスコンサルティング',
    content: (
      <>
        大手出版社の編集者から海外トップクラスのビジネススクールでMBA(経営学修士号)を取得したメンバーが、<StatsText>クリエイティブ・ビジネス両方の視点</StatsText>からコンサルティング。
      </>
    ),
  },


];
