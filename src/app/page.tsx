'use client';
import { Layout, Flex, Typography } from 'antd';
import Image from 'next/image';

const headerStyle: CSSProperties = {
  background: 'transparent',
  height: '10vh',
  zIndex: 1,
};

const contentStyle: CSSProperties = {
  background: 'transparent',
  fontFamily: 'fangsong',
  textAlign: 'center',
  verticalAlign: 'middle',
  zIndex: 1
};

const footerStyle: CSSProperties = {
  background: 'transparent',
  height: '10vh',
  zIndex: 1,
};

const { Header, Footer, Sider, Content } = Layout;
export default function Home() {
  return (
    <Layout>
      <Image
        src='/piano.jpeg'
        alt='ピアノ'
        layout='fill'
        object='cover'
        style={{ filter: 'brightness(60%)', width: '100%', height: '100%' }}
        zIndex={0}
      />
      <Header style={headerStyle}>
        <Flex horizon>
          <Image
            src='/donguri.png'
            alt='どんぐり'
            height={80}
            width={80}
          />
          <Typography.Title
            level={3}
            style={{ width: '100%',
                     color: 'white',
                     fontFamily: 'impact',
                     zIndex: 1,
                     textAlign: 'center',
                     margin: 'auto'
            }}
          >
            どんぐりピアノ教室
          </Typography.Title>
        </Flex>
      </Header>
      <Content style={contentStyle}>
        <div style={{margin: '30vh 0 50vh 0', color: 'white'}}>
          <Typography.Title level={3} style={{color: 'white'}}>ABOUT</Typography.Title>
          <p>岐阜県中津川市福岡にある小さなピアノ教室です。
            <br />
            どんぐりのように小さなお子様から大人の方までどんな方でも楽しくピアノを弾けるようになることを目標にしています。
            <br />
            お気軽にお問い合わせください。
          </p>
        </div>
        <div style={{margin: '50vh 0 30vh 0'}}>
          <Typography.Title level={3}>講師紹介</Typography.Title>
          <Image
            src='/teacher.png'
            alt='先生'
            height={300}
            width={300}
            style={{borderRadius: '50%'}}
          />
          <p>中津川市出身。中津川市立福岡小学校、中津川市立福岡中学校、岐阜県立中津高等学校、名古屋芸術大学音楽学部ピアノ専攻卒業。
            <br />
            2008年よりどんぐりピアノ教室を開講。
          </p>
        </div>
      </Content>
      <Footer style={footerStyle}>
        <div>
          <Typography.Title level={3} style={{color: 'white'}}>CONTACT</Typography.Title>
          <p>お問い合わせはこちらから</p>
        </div>
      </Footer>
    </Layout>
  );
}
