import { Box, Container } from '@chakra-ui/react'

function Lead() {
  return (
    <Container maxW='full' bg='blue.600' centerContent>
      <Box padding='4' bg='blue.400' color='black' maxW='3xl'>
        Web。そこはユーザーと商品が出会い、関係を構築していく場所
        <br />
        <br />
        電車で移動中にはスマホでSNS、自宅ではデスクトップPCでYouTube視聴など、今ではマルチデバイス・マルチプラットフォームが当たり前。<br />
        <br />
        大事なのはどこでも同じ一貫したユーザー体験を提供すること。<br />
        <br />
        その設計のためにはマーケティングとエンジニアリング、両方の視点を持つことが不可欠です。<br />
        <br />
        Webテクノロジーとビジネスの専門家集団である私たちが、トータルのユーザー体験をプロデュースします。
      </Box>
    </Container>
  )
}

export default Lead;